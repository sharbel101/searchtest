import { z, ZodTypeAny } from 'zod';
import { FieldType, FormField } from '../data/MainFlow/flow';

/**
 * Build Zod schema for a single FormField
 */
export const buildZodSchemaForField = (field: FormField): ZodTypeAny => {
  let baseSchema: ZodTypeAny;

  switch (field.type) {
    case FieldType.Text:
    case FieldType.Url:
    case FieldType.Signature:
      baseSchema = z.literal(['red', 'green', 'blue']); //z.string();
      break;

    case FieldType.Dropdown:
      baseSchema = z.string(); // assume dropdown sends selected value
      break;

    case FieldType.File:
    case FieldType.Video:
      baseSchema = z.any(); // can refine for File types if needed
      break;

    case FieldType.Array:
      if (field.subFields) {
        const subFieldSchemas: Record<string, ZodTypeAny> = {};
        for (const [subKey, subField] of Object.entries(field.subFields)) {
          let subSchema = buildZodSchemaForField(subField);
          if (!subField.required) subSchema = subSchema.optional();
          subFieldSchemas[subKey] = subSchema;
        }
        baseSchema = z.array(z.object(subFieldSchemas));
      } else {
        baseSchema = z.array(z.any());
      }
      break;

    case FieldType.Component:
    case FieldType.FlowFunc:
      // These types aren't expected to receive direct user input
      baseSchema = z.any(); // no validation
      break;

    default:
      baseSchema = z.any(); // fallback
      break;
  }

  // Apply regex validation if provided
  if (field.validation && field.type === FieldType.Text) {
    try {
      const regex = new RegExp(field.validation);

      if (baseSchema instanceof z.ZodString) {
        baseSchema = baseSchema.regex(regex, 'Invalid format');
      } else {
        console.warn(
          `Expected ZodString for regex validation in field ${field.id}, but got something else.`,
        );
      }
    } catch (e) {
      console.warn(
        `Invalid regex pattern in field ${field.id}:`,
        field.validation,
      );
    }
  }

  // Apply required
  if (field.required) {
    baseSchema = baseSchema; // already required
  } else {
    baseSchema = baseSchema.optional();
  }

  return baseSchema;
};
