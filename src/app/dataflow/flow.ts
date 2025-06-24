'use client';

import { flowInjection } from './flowInjection';
import NdaComponent from '../UIcomponents/NdaComponent';
// Defining enums for field types to ensure scalability and type safety
export enum FieldType {
  Text = 'text',
  File = 'file',
  Signature = 'signature',
  Dropdown = 'dropdown',
  Video = 'video',
  Url = 'url',
  Array = 'array',
  Component = 'component',
  FlowFunc = 'flowfunc',
}

// Type for form fields, defining structure and validation
export type FormField = {
  type: FieldType; // Enum-based field type for consistency
  id: string; // Unique identifier for the field
  label: string; // Display label for the field
  placeholder?: string; // Optional placeholder text
  description?: string; // Optional field description
  required?: boolean; // Indicates if the field is mandatory
  options?: { id: string; value: string }[]; // Dropdown options
  opened?: boolean;
  validation?: RegExp | ((value: any) => boolean); // Optional validation rule used to validate string inputs by testing if they match a specific pattern
  subFields?: { [key: string]: FormField };
  flowInjection?: string;
};

// Type for flow sections, representing a group of fields
export type FlowSection = {
  sectionTitle: string; // Title of the section
  sectionId: string; // Unique identifier for the section
  opened: boolean;
  fields: { [key: string]: FormField }; // Object of fields for a section, defining all fields like companyType or socialMediaAccounts
  nextNode?: string | null; // ID of the next section in the flow, allowing null
};

// Type for the entire chat flow, mapping section IDs to sections
type ChatFlow = {
  [key: string]: FlowSection;
};

// Defining the chat flow structure with sections and their fields
const chatFlow: ChatFlow = {
  investmentStage: {
    // Title of this section in the flow
    sectionTitle: 'Investment Stage',

    // Unique identifier for this section
    sectionId: 'investmentStage',

    // Fields defined in this section
    opened: false,
    fields: {
      IS: {
        // Unique field ID
        id: 'investment-stage-chart',

        // The field type is a functional flow interaction
        type: FieldType.FlowFunc,

        // Label shown in UI
        label: 'Investment Stage',

        // Description shown to the user
        description: 'Answer questions to determine your investment stage',

        // This field must be filled before progressing
        required: true,

        opened: false,

        flowInjection: 'investmentStageFlow',
      },
    },

    // Next node to navigate to in the flow after this section
    nextNode: 'departments',
  },
  nda: {
    sectionTitle: 'NDA',
    sectionId: 'nda',
    opened: false,
    fields: {
      companiesNDAForm: {
        id: 'nda-form',
        type: FieldType.File,
        label: 'Companies NDAs Form',
        description: 'Upload the signed NDA form (PDF format).',
        opened: false,
        required: true,
      },
    },
    nextNode: 'portfolio',
  },
  portfolio: {
    sectionTitle: 'Portfolio',
    sectionId: 'portfolio',
    opened: false,
    fields: {
      companyType: {
        id: 'company-name',
        type: FieldType.Text,
        label: 'Company Name',
        placeholder: 'Enter company name',
        required: true,
        description: 'Provide the full legal name of the company.',
        opened: false,
      },
      logo: {
        id: 'company-logo',
        type: FieldType.File,
        label: 'Logo',
        description: 'Upload the company logo (image file).',
        required: true,
        opened: false,
      },
      industry: {
        id: 'industry-type',
        type: FieldType.Dropdown,
        label: 'Industry',
        options: [
          { id: 'general', value: 'General' },
          { id: 'specific', value: 'Specific' },
          { id: 'other', value: 'Other' },
        ],
        required: true,
        description: 'Select industry type (input details for "Other").',
        opened: false,
      },
      description: {
        id: 'company-description',
        type: FieldType.Text,
        label: 'Description',
        placeholder: 'Enter a brief description',
        required: true,
        description: 'Provide a summary of the company.',
        opened: false,
      },
      countryOfOperation: {
        id: 'country-operation',
        type: FieldType.Dropdown,
        label: 'Country of Operation',
        options: [{ id: 'usa', value: 'USA' }],
        required: true,
        description: 'Select the primary country of operation.',
        opened: false,
      },
      socialMediaAccounts: {
        id: 'social-media-accounts',
        type: FieldType.Array,
        label: 'Social Media Accounts',
        description: 'Provide URLs for social media profiles (all optional).',
        opened: false,
        subFields: {
          tiktok: {
            id: 'tiktok-url',
            type: FieldType.Url,
            label: 'TikTok URL',
            required: false,
          },
          linkedin: {
            id: 'linkedin-url',
            type: FieldType.Url,
            label: 'LinkedIn URL',
            required: false,
          },
          facebook: {
            id: 'facebook-url',
            type: FieldType.Url,
            label: 'Facebook URL',
            required: false,
          },
          instagram: {
            id: 'instagram-url',
            type: FieldType.Url,
            label: 'Instagram URL',
            required: false,
          },
          teams: {
            id: 'x-url',
            type: FieldType.Url,
            label: 'X URL',
            required: false,
          },
          others: {
            id: 'other-url',
            type: FieldType.Url,
            label: 'Other URL',
            required: false,
          },
        },
      },
      mainWebsite: {
        id: 'main-url',
        type: FieldType.Url,
        label: 'Main Website URL',
        placeholder: 'https://example.com',
        required: false,
        description: 'Provide the company’s main website URL.',
        validation: /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*\/?$/,
        opened: false,
      },
    },
    nextNode: 'foundingTeam',
  },
  foundingTeam: {
    sectionTitle: 'Founding Team',
    sectionId: 'foundingTeam',
    opened: false,
    fields: {
      teamMembersProfile: {
        id: 'team-members',
        type: FieldType.Array,
        label: 'Team Members Profile',
        description: 'List team members with details.',
        subFields: {
          fullName: {
            id: 'team-full-name',
            type: FieldType.Text,
            label: 'Full Name',
            required: true,
            opened: false,
          },
          roleTitle: {
            id: 'team-role',
            type: FieldType.Text,
            label: 'Role Title',
            required: true,
            opened: false,
          },
          background: {
            id: 'team-background',
            type: FieldType.Text,
            label: 'Background',
            required: false,
            opened: false,
          },
          expertise: {
            id: 'team-expertise',
            type: FieldType.Text,
            label: 'Expertise',
            required: false,
            opened: false,
          },
        },
      },
      teamVideo: {
        id: 'team-video',
        type: FieldType.Video,
        label: 'Team Video',
        description: 'Upload a team video (max 2 minutes).',
        required: false,
        opened: false,
      },
      teamStandards: {
        id: 'team-standards',
        type: FieldType.Text,
        label: 'Team Standards',
        placeholder: 'your motto, your culture etc...',
        required: false,
        description: 'Describe the team’s motto, culture...',
        opened: false,
      },
    },
    nextNode: 'productsAndServices',
  },
};

// Processing function to validate and handle field input
export const processFlow = (
  sectionKey: string,
  fieldKey: string,
  value: any,
  onCompleteSection?: (sectionId: string, data: any) => void,
): { isValid: boolean; error?: string } => {
  // Retrieve the specified section from the chat flow
  const section = chatFlow[sectionKey];
  if (!section) {
    return { isValid: false, error: `Section ${sectionKey} not found` };
  }

  // Log the next section for debugging purposes
  if (section.nextNode) {
    console.log(`Next section for ${sectionKey}: ${section.nextNode}`);
  }

  // Find the field within the section
  const field = section.fields[fieldKey];
  if (!field) {
    return {
      isValid: false,
      error: `Field ${fieldKey} not found in section ${sectionKey}`,
    };
  }

  let isValid = true;
  let error: string | undefined;

  // Validate required fields
  if (
    field.required &&
    (value === null ||
      value === undefined ||
      value === '' ||
      (field.type === FieldType.Array && !value?.length))
  ) {
    isValid = false;
    error = `${field.label} is required`;
  } else if (field.validation) {
    // Apply validation rules if defined
    if (field.validation instanceof RegExp) {
      isValid = field.validation.test(value);
      if (!isValid) error = `Invalid ${field.label} format`;
    } else if (typeof field.validation === 'function') {
      isValid = field.validation(value);
      if (!isValid) error = `Invalid ${field.label}`;
    }
  }

  // Process valid input and trigger callback if provided
  if (isValid && onCompleteSection) {
    let processedValue;
    if (
      field.type === FieldType.Array &&
      field.subFields &&
      Array.isArray(value)
    ) {
      // Transform array entries to use subfield IDs
      const transformedValue = value.map((entry: any) => {
        const transformedEntry: { [key: string]: any } = {};
        if (field.subFields) {
          // Ensure subFields is defined
          for (const [subFieldKey, subField] of Object.entries(
            field.subFields,
          )) {
            if (entry[subFieldKey] !== undefined) {
              transformedEntry[subField.id] = entry[subFieldKey];
            }
          }
        }
        return transformedEntry;
      });
      processedValue = { id: field.id, value: transformedValue };
    } else if (field.type === FieldType.Dropdown && field.options) {
      processedValue = field.options.find((opt) => opt.value === value) || {
        id: field.id,
        value,
      };
    } else {
      processedValue = { id: field.id, value };
    }
    onCompleteSection(section.sectionId, processedValue);
  }

  return { isValid, error };
};

// Utility to get the next section in the flow
export const getNextSection = (currentSectionKey: string): string | null => {
  const currentSection = chatFlow[currentSectionKey];
  return currentSection ? currentSection.nextNode || null : null;
};

// Export the chat flow for use in UI or other processors
export { chatFlow };
