import { z, ZodSchema } from 'zod';

import { useFlowStore } from '@/components/data/ZustandStores/MainFlowStore';
import { useSubFlowStore } from '@/components/data/ZustandStores/InjectedFlowStore';
import { ChartFormUseFlowStore } from '@/components/data/ZustandStores/ChartFormFlowStore';
import { FieldType, FormField } from '../data/MainFlow/flow';
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
  const field = readCurrentField();

  if (!field) return { success: false, error: 'No field found for validation' };
  if (!field.validation) return { success: true }; // no validation → always pass

  try {
    const schema = getValidationSchema(field.validation);

    if (
      Array.isArray(field.options) &&
      field.options.length !== 0 &&
      field.type === FieldType.Dropdown
    ) {
      console.log('validateInput - inside the options validation');
      const validValues = field.options
        .map((opt) =>
          opt && typeof opt === 'object' && 'id' in opt && 'value' in opt
            ? { id: opt.id, value: opt.value }
            : null,
        )
        .filter(
          (opt): opt is { id: string; value: string } =>
            !!opt?.id && !!opt.value,
        );

      const matchedOption = validValues.find((opt) => opt.value === userInput);
      if (!matchedOption) {
        return {
          success: false,
          error: `Invalid option selected. Valid options: ${validValues
            .map((v) => v.value)
            .join(', ')}`,
        };
      }

      const result = schema.safeParse(matchedOption.id);
      if (!result.success) {
        return {
          success: false,
          error:
            result.error.issues.map((issue) => issue.message).join('\n') ||
            'Invalid',
        };
      }
      return { success: true };
    }

    // File Validation here
    if (field.type === FieldType.File) {
      console.log('validateInput - inside the File validation');
      let fileName: string;

      if (typeof userInput === 'string') {
        fileName = userInput;
        console.log(
          'validateInput - this is the file name (string): ',
          fileName,
        );
      } else if (userInput instanceof File) {
        fileName = userInput.name;
        console.log('validateInput - this is the file name (File): ', fileName);
      } else {
        return { success: false, error: 'Invalid file input' };
      }

      const result = schema.safeParse(fileName);
      if (!result.success) {
        return {
          success: false,
          error:
            result.error.issues.map((issue) => issue.message).join('\n') ||
            'Invalid',
        };
      }
      return { success: true };
    }

    // Free-text input validation (covers the case where field.options is not an array)
    console.log('validateInput - inside the regular input validation');
    const result = schema.safeParse(userInput);
    if (!result.success) {
      return {
        success: false,
        error: result.error.issues.map((issue) => issue.message).join('\n'),
      };
    }
    return { success: true };
  } catch {
    return { success: false, error: 'Schema parsing failed' };
  }
};
