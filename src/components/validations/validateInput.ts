import { FormField } from '../data/MainFlow/flow';
import { buildZodSchemaForField } from './validationSchema';

/**
 * Validate user input against a field config
 * @param input - the user input (text, file, etc.)
 * @param field - the field definition (from flow)
 * @returns result: { success: boolean; error?: string }
 */
export const validateUserInput = (
  input: unknown,
  field: FormField,
): { success: boolean; error?: string } => {
  const schema = buildZodSchemaForField(field);
  const result = schema.safeParse(input);

  if (!result.success) {
    return {
      success: false,
      error: result.error.issues[0]?.message ?? 'Invalid input',
    };
  }

  return { success: true };
};
