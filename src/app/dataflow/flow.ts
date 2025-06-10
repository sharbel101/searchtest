'use client';

// Define interfaces for the data flow schema
interface FormField {
  type: 'text' | 'file' | 'signature' | 'dropdown' | 'video' | 'url' | 'array';
  label: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  options?: string[]; // For dropdown fields
  validation?: RegExp | ((value: any) => boolean); // Optional validation rule
  scoreWeight?: number; // For scoring user inputs
  subFields?: { [key: string]: FormField }; // For array fields with nested objects
}

interface FlowSection {
  sectionTitle: string;
  sectionId: string;
  order: number;
  children: Array<{ [key: string]: FormField }>;
  dependsOn?: string[];
}

interface ChatFlow {
  [key: string]: FlowSection;
}

// Define the comprehensive chat flow structure
const chatFlow: ChatFlow = {
  nda: {
    sectionTitle: 'NDA',
    sectionId: 'nda',
    order: 1,
    children: [
      {
        companiesNDAForm: {
          type: 'file',
          label: 'Companies NDA Form',
          description: 'Upload the signed NDA form (PDF format).',
          required: true,
          scoreWeight: 20,
        },
      },
    ],
    dependsOn: [],
  },
  portfolio: {
    sectionTitle: 'Portfolio',
    sectionId: 'portfolio',
    order: 2,
    children: [
      {
        companyName: {
          type: 'text',
          label: 'Company Name',
          placeholder: 'Enter company name',
          required: true,
          description: 'Provide the full legal name of the company.',
          scoreWeight: 10,
        },
      },
      {
        logo: {
          type: 'file',
          label: 'Logo',
          description: 'Upload the company logo (image file).',
          required: true,
          scoreWeight: 5,
        },
      },
      {
        industry: {
          type: 'dropdown',
          label: 'Industry',
          options: ['General', 'Specific', 'Other'],
          required: true,
          description: 'Select industry type (input details for "Other").',
          scoreWeight: 10,
        },
      },
      {
        description: {
          type: 'text',
          label: 'Description',
          placeholder: 'Enter a brief description',
          required: true,
          description: 'Provide a summary of the company.',
          scoreWeight: 15,
        },
      },
      {
        countryOfOperation: {
          type: 'dropdown',
          label: 'Country of Operation',
          options: ['USA'], // Example based on the IP of the user etc...
          required: true,
          description: 'Select the primary country of operation.',
          scoreWeight: 10,
        },
      },
      {
        socialMediaAccounts: {
          type: 'array',
          label: 'Social Media Accounts',
          description: 'Provide URLs for social media profiles (all optional).',
          subFields: {
            tiktok: { type: 'url', label: 'TikTok URL', required: false },
            linkedin: { type: 'url', label: 'LinkedIn URL', required: false },
            facebook: { type: 'url', label: 'Facebook URL', required: false },
            instagram: { type: 'url', label: 'Instagram URL', required: false },
            x: { type: 'url', label: 'X URL', required: false },
            others: { type: 'url', label: 'Other URL', required: false },
          },
          scoreWeight: 5,
        },
      },
      {
        mainWebsiteUrl: {
          type: 'url',
          label: 'Main Website URL',
          placeholder: 'https://example.com',
          required: false,
          description: 'Provide the company’s main website URL.',
          validation: /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*\/?$/,
          scoreWeight: 5,
        },
      },
    ],
    dependsOn: ['nda'],
  },
  foundingTeam: {
    sectionTitle: 'Founding Team',
    sectionId: 'foundingTeam',
    order: 3,
    children: [
      {
        teamMembersProfile: {
          type: 'array',
          label: 'Team Members Profile',
          description: 'List team members with details.',
          subFields: {
            fullName: { type: 'text', label: 'Full Name', required: true },
            roleTitle: { type: 'text', label: 'Role Title', required: true },
            background: { type: 'text', label: 'Background', required: false },
            expertise: { type: 'text', label: 'Expertise', required: false },
          },
          scoreWeight: 15,
        },
      },
      {
        teamVideo: {
          type: 'video',
          label: 'Team Video',
          description: 'Upload a team video (max 2 minutes).',
          required: false,
          scoreWeight: 10,
        },
      },
      {
        teamStandards: {
          type: 'text',
          label: 'Team Standards',
          placeholder: 'your motto, yourculture etc...',
          required: false,
          description: 'Describe the team’s motto, culture...',
          scoreWeight: 5,
        },
      },
    ],
    dependsOn: ['portfolio'],
  },
  productsAndServices: {
    sectionTitle: 'Products & Services + Description',
    sectionId: 'productsAndServices',
    order: 4,
    children: [
      {
        products: {
          type: 'array',
          label: 'Products & Services',
          description: 'List products or services with details.',
          subFields: {
            type: {
              type: 'dropdown',
              label: 'Type',
              options: ['product', 'service'],
              required: true,
            },
            name: { type: 'text', label: 'Name', required: true },
            desc: { type: 'text', label: 'Description', required: true },
            photos: { type: 'file', label: 'Photos', required: false },
            ios_app_url: { type: 'url', label: 'iOS App URL', required: false },
            android_app_url: {
              type: 'url',
              label: 'Android App URL',
              required: false,
            },
            general_customer_feedback: {
              type: 'text',
              label: 'General Customer Feedback',
              placeholder: 'example: Loved by more than 500 happy customers',
              required: false,
            },
          },
          scoreWeight: 20,
        },
      },
    ],
    dependsOn: ['foundingTeam'],
  },
};

// Utility function to process the flow
export const processFlow = (
  sectionKey: string,
  fieldKey: string,
  value: any,
  onCompleteSection?: (sectionId: string, data: any) => void,
): { isValid: boolean; error?: string } => {
  const section = chatFlow[sectionKey];
  if (!section) {
    return { isValid: false, error: `Section ${sectionKey} not found` };
  }

  if (section.dependsOn && section.dependsOn.length > 0) {
    console.log(
      `Dependencies for ${sectionKey}: ${section.dependsOn.join(', ')}`,
    );
  }

  const fieldEntry = section.children.find((child) => child[fieldKey]);
  if (!fieldEntry) {
    return {
      isValid: false,
      error: `Field ${fieldKey} not found in section ${sectionKey}`,
    };
  }

  const field = fieldEntry[fieldKey];
  let isValid = true;
  let error: string | undefined;

  if (
    field.required &&
    (value === null || value === undefined || value === '')
  ) {
    isValid = false;
    error = `${field.label} is required`;
  } else if (field.validation) {
    if (field.validation instanceof RegExp) {
      isValid = field.validation.test(value);
      if (!isValid) error = `Invalid ${field.label} format`;
    } else if (typeof field.validation === 'function') {
      isValid = field.validation(value);
      if (!isValid) error = `Invalid ${field.label}`;
    }
  }

  if (isValid) {
    console.log(
      `Processed ${sectionKey}.${fieldKey}:`,
      value,
      `Score: ${field.scoreWeight || 0}`,
    );
    if (onCompleteSection) {
      onCompleteSection(section.sectionId, { fieldKey, value });
    }
  }

  return { isValid, error };
};

// Utility to get the next section in the flow
export const getNextSection = (currentSectionKey: string): string | null => {
  const currentSection = chatFlow[currentSectionKey];
  if (!currentSection) return null;

  const sortedSections = Object.values(chatFlow).sort(
    (a, b) => a.order - b.order,
  );
  const currentIndex = sortedSections.findIndex(
    (s) => s.sectionId === currentSectionKey,
  );
  if (currentIndex < sortedSections.length - 1) {
    return sortedSections[currentIndex + 1].sectionId;
  }
  return null;
};

// Export the flow for use in any UI or processor
export { chatFlow };
