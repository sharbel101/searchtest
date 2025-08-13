import { z, ZodSchema } from 'zod';

import { useFlowStore } from '@/components/data/ZustandStores/MainFlowStore';
import { useSubFlowStore } from '@/components/data/ZustandStores/InjectedFlowStore';
import { ChartFormUseFlowStore } from '@/components/data/ZustandStores/ChartFormFlowStore';
import { FormField } from '../data/MainFlow/flow';
import { error } from 'console';

const {
  getCurrentField,
  isInFlowFunc,
  currentFlowController,
  CurrentInjectionType,
} = useFlowStore.getState();
const { getCurrentSubFlowField } = useSubFlowStore.getState();
const { getCurrentChartFormField } = ChartFormUseFlowStore.getState();

/**
 * Compile cache for parsed Zod schemas.
 * Keeps a small upper bound to avoid unbounded growth.
 */
const schemaCache = new Map<string, ZodSchema>();
const MAX_CACHE_SIZE = 200;

function cacheSet(key: string, value: ZodSchema) {
  // simple FIFO eviction when exceeding max size
  if (schemaCache.size >= MAX_CACHE_SIZE) {
    const firstKey = schemaCache.keys().next().value;
    if (firstKey !== undefined) schemaCache.delete(firstKey);
  }
  schemaCache.set(key, value);
}

/**
 * Parses a Zod schema from a string.
 * Uses a cache to avoid repeatedly compiling the same schema string.
 */
export const parseValidation = (schemaString: string): ZodSchema => {
  if (schemaCache.has(schemaString)) {
    return schemaCache.get(schemaString)!;
  }

  // keep identical behaviour to original (new Function)
  const fn = new Function('z', `return (${schemaString});`);
  const compiled = fn(z) as ZodSchema;

  cacheSet(schemaString, compiled);
  return compiled;
};

/**
 * Returns a Zod schema from the given validation string.
 */
export const getValidationSchema = (
  validationSchemaString: string,
): ZodSchema => {
  return parseValidation(validationSchemaString);
};

/**
 * Helper to read the current FormField from the correct store/injection.
 * Extracted to avoid duplicating branching logic.
 */
export default function readCurrentField(): FormField | undefined | null {
  if (isInFlowFunc && currentFlowController) {
    if (CurrentInjectionType === 'ChartForm') {
      return getCurrentChartFormField();
    } else if (CurrentInjectionType === 'OriginalSubFlow') {
      return getCurrentSubFlowField();
    }
  } else {
    return getCurrentField();
  }
}

/**
 * Validates user input against the current field's validation schema.
 *
 * NOTE: preserves the original two-fetch pattern:
 * - first fetch to check if validation exists and early-return success true if none
 * - second fetch to actually grab the field to validate (keeps semantics identical).
 */
export const handleValidate = (
  userInput: any,
): { success: boolean; error?: string } => {
  // First fetch — used by original code to check for existence of validation
  const field = readCurrentField();

  // if the node have any validation object... if not don't validate... just send input to chat.
  if (!field?.validation) return { success: true };

  if (!field || !field.validation) {
    return { success: false, error: 'No field found for validation' };
  }

  //This is for the input that was entered by the Input text area...
  if (Array.isArray(field.options)) {
    // Ensure options are of object type { id: string; value: string }
    const validValues = field.options
      .map((opt) => {
        if (opt && typeof opt === 'object' && 'id' in opt && 'value' in opt) {
          return { id: opt.id, value: opt.value };
        }
        return null;
      })
      .filter(
        (opt): opt is { id: string; value: string } =>
          opt !== null && !!opt.id && !!opt.value,
      );

    // Find matching option by value (user sees this on screen)
    const matchedOption = validValues.find((opt) => opt.value === userInput);
    //console.log("matched option: ", matchedOption);

    if (!matchedOption) {
      return {
        success: false,
        error: `Invalid option selected. Valid options: ${validValues
          .map((v) => v.value)
          .join(', ')}`,
      };
    }
    try {
      const schema = getValidationSchema(field.validation);
      const result = schema.safeParse(matchedOption.id);
      if (!result.success) {
        const errorBody = result.error.issues
          .map((issue) => issue.message)
          .join('\n');

        return {
          success: false,
          error: errorBody || 'Invalid',
        };
      } else {
        console.log('Validated successfully!');
        return { success: true };
      }
    } catch (err: any) {
      // keep the same return shape as original but provide a slightly clearer message
      return { success: false, error: 'Schema parsing failed' };
    }
  }

  //This is for the input that was entered by the Input text area...
  try {
    const schema = getValidationSchema(field.validation);
    const result = schema.safeParse(userInput);

    if (!result.success) {
      const errorBody = result.error.issues
        .map((issue) => issue.message)
        .join('\n');

      return {
        success: false,
        error: errorBody || 'Invalid',
      };
    } else {
      console.log('Validated successfully!');
      return { success: true };
    }
  } catch (err: any) {
    // keep the same return shape as original but provide a slightly clearer message
    return { success: false, error: 'Schema parsing failed' };
  }
};
