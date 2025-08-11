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
 * Parses a Zod schema from a string.
 */
export const parseValidation = (schemaString: string): ZodSchema => {
  const fn = new Function('z', `return (${schemaString});`);
  return fn(z);
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
 * Validates user input against the current field's validation schema.
 */
export const handleValidate = (
  userInput: any,
): { success: boolean; error?: string } => {
  let field: FormField | undefined | null;

  if (isInFlowFunc && currentFlowController) {
    if (CurrentInjectionType === 'ChartForm') {
      field = getCurrentChartFormField();
    } else if (CurrentInjectionType === 'OriginalSubFlow') {
      field = getCurrentSubFlowField();
    }
  } else {
    field = getCurrentField();
  }

  if (!field || !field.validation) {
    return { success: false, error: 'No field found for validation' };
  }

  try {
    const schema = getValidationSchema(field.validation);
    const result = schema.safeParse(userInput);

    if (!result.success) {
      return {
        success: false,
        error: result.error.issues[0]?.message || 'Invalid',
      };
    } else {
      console.log('Validated successfully!');
      return { success: true };
    }
  } catch (err) {
    return { success: false, error: 'Schema parsing failed' };
  }
};
