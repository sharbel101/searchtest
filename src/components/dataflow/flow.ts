'use client';

// import NdaComponent from '../../app/UIcomponents/NdaComponent';
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
  opened?: boolean;
  fields: { [key: string]: FormField }; // Object of fields for a section, defining all fields like companyType or socialMediaAccounts
  nextNode?: string | null; // ID of the next section in the flow, allowing null
};

// Type for the entire chat flow, mapping section IDs to sections
type ChatFlow = {
  [key: string]: FlowSection;
};

// Defining the chat flow structure with sections and their fields
const chatFlow: ChatFlow = {
  nda: {
    sectionTitle: 'NDA',
    sectionId: 'nda',

    fields: {
      companiesNDAForm: {
        id: 'nda-form',
        type: FieldType.File,
        label: 'Companies NDAs Form',
        description: 'Upload the signed NDA form (PDF format).',
        required: true,
      },
    },
    nextNode: 'portfolio',
  },
  portfolio: {
    sectionTitle: 'Portfolio',
    sectionId: 'portfolio',
    fields: {
      companyType: {
        id: 'company-name',
        type: FieldType.Text,
        label: 'Company Name',
        placeholder: 'Enter company name',
        required: true,
        description: 'Provide the full legal name of the company.',
      },
      logo: {
        id: 'company-logo',
        type: FieldType.File,
        label: 'Logo',
        description: 'Upload the company logo (image file).',
        required: true,
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
      },
      description: {
        id: 'company-description',
        type: FieldType.Text,
        label: 'Description',
        placeholder: 'Enter a brief description',
        required: true,
        description: 'Provide a summary of the company.',
      },
      countryOfOperation: {
        id: 'country-operation',
        type: FieldType.Dropdown,
        label: 'Country of Operation',
        options: [{ id: 'usa', value: 'USA' }],
        required: true,
        description: 'Select the primary country of operation.',
      },
      socialMediaAccounts: {
        id: 'social-media-accounts',
        type: FieldType.Array,
        label: 'Social Media Accounts',
        description: 'Provide URLs for social media profiles (all optional).',
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
      },
    },
    nextNode: 'foundingTeam',
  },
  foundingTeam: {
    sectionTitle: 'Founding Team',
    sectionId: 'foundingTeam',
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
          },
          roleTitle: {
            id: 'team-role',
            type: FieldType.Text,
            label: 'Role Title',
            required: true,
          },
          background: {
            id: 'team-background',
            type: FieldType.Text,
            label: 'Background',
            required: false,
          },
          expertise: {
            id: 'team-expertise',
            type: FieldType.Text,
            label: 'Expertise',
            required: false,
          },
        },
      },
      teamVideo: {
        id: 'team-video',
        type: FieldType.Video,
        label: 'Team Video',
        description: 'Upload a team video (max 2 minutes).',
        required: false,
      },
      teamStandards: {
        id: 'team-standards',
        type: FieldType.Text,
        label: 'Team Standards',
        placeholder: 'your motto, your culture etc...',
        required: false,
        description: 'Describe the team’s motto, culture...',
      },
    },
    nextNode: 'productsAndServices',
  },
  productsAndServices: {
    sectionTitle: 'Products & Services + Description',
    sectionId: 'productsAndServices',
    fields: {
      products: {
        id: 'products-services',
        type: FieldType.Array,
        label: 'Products & Services',
        description: 'List products or services with details.',
        subFields: {
          type: {
            id: 'product-type',
            type: FieldType.Dropdown,
            label: 'Type',
            options: [
              { id: 'product', value: 'product' },
              { id: 'service', value: 'service' },
            ],
            required: true,
          },
          name: {
            id: 'product-name',
            type: FieldType.Text,
            label: 'Name',
            required: true,
          },
          desc: {
            id: 'product-desc',
            type: FieldType.Text,
            label: 'Description',
            required: true,
          },
          photos: {
            id: 'product-photos',
            type: FieldType.File,
            label: 'Photos',
            required: false,
          },
          ios_app_url: {
            id: 'ios-app-url',
            type: FieldType.Url,
            label: 'iOS App URL',
            required: false,
          },
          android_app_url: {
            id: 'android-app-url',
            type: FieldType.Url,
            label: 'Android App URL',
            required: false,
          },
          general_customer_feedback: {
            id: 'customer-feedback',
            type: FieldType.Text,
            label: 'General Customer Feedback',
            placeholder: 'example: Loved by more than 500 happy customers',
            required: false,
          },
        },
      },
    },
    nextNode: 'patents',
  },
  patents: {
    sectionTitle: 'Patents',
    sectionId: 'patents',
    fields: {
      patents: {
        id: 'patents-list',
        type: FieldType.Array,
        label: 'Patents',
        description: 'List patents with details.',
        subFields: {
          title: {
            id: 'patent-title',
            type: FieldType.Text,
            label: 'Title',
            required: true,
          },
          desc: {
            id: 'patent-desc',
            type: FieldType.Text,
            label: 'Description',
            required: true,
          },
          file: {
            id: 'patent-file',
            type: FieldType.File,
            label: 'File (PDF)',
            required: true,
          },
        },
      },
    },
    nextNode: 'achievements',
  },
  achievements: {
    sectionTitle: 'Achievements',
    sectionId: 'achievements',
    fields: {
      awards: {
        id: 'awards-list',
        type: FieldType.Array,
        label: 'Awards',
        description: 'List awards with details.',
        subFields: {
          type: {
            id: 'award-name',
            type: FieldType.Text,
            label: 'Name',
            required: true,
          },
          des: {
            id: 'award-desc',
            type: FieldType.Text,
            label: 'Description',
            required: true,
          },
          url: {
            id: 'award-url',
            type: FieldType.Url,
            label: 'URL',
            required: false,
          },
          image: {
            id: 'award-image',
            type: FieldType.File,
            label: 'Image',
            required: false,
          },
        },
      },
    },
    nextNode: 'investmentStage',
  },
  // // Import the flowInjection function
  investmentStage: {
    // Title of this section in the flow
    sectionTitle: 'Investment Stage',

    // Unique identifier for this section
    sectionId: 'investmentStage',

    // Fields defined in this section
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

        //rename to flowInjectionID
        flowInjection: 'investmentStageFlow',
      },
    },

    // Next node to navigate to in the flow after this section
    nextNode: 'departments',
  },
  departments: {
    sectionTitle: 'Departments',
    sectionId: 'departments',
    fields: {
      organizationChart: {
        id: 'org-chart',
        type: FieldType.File,
        label: 'Organization Chart',
        description: 'Upload organization chart (PDF, Excel, CSV).',
        required: true,
      },
      fs_department: {
        id: 'dept-details',
        type: FieldType.File,
        label: 'Department Details',
        description:
          'Upload department details (check fs_department excel sheet).',
        required: false,
      },
    },
    nextNode: 'financials',
  },
  financials: {
    sectionTitle: 'Financials',
    sectionId: 'financials',
    fields: {
      valuation: {
        id: 'company-valuation',
        type: FieldType.Text,
        label: 'Valuation',
        placeholder: 'Enter valuation amount',
        required: true,
        description: 'Provide company valuation.',
      },
      previousBalanceSheets: {
        id: 'balance-sheets',
        type: FieldType.File,
        label: 'Previous Balance Sheets',
        description: 'Upload previous balance sheets (PDF, Excel, CSV).',
        required: true,
      },
      previousPLStatements: {
        id: 'pl-statements',
        type: FieldType.File,
        label: 'Previous P&L Statements',
        description: 'Upload previous P&L statements (PDF, Excel, CSV).',
        required: true,
      },
      annualAuditReports: {
        id: 'audit-reports',
        type: FieldType.File,
        label: 'Annual Audit Reports',
        description: 'Upload annual audit reports (PDF, Excel, CSV).',
        required: true,
      },
      fs_financials: {
        id: 'financial-details',
        type: FieldType.File,
        label: 'Financial Details',
        description:
          'Upload financial details (check fs_financials excel sheet).',
        required: false,
      },
    },
    nextNode: 'marketing',
  },
  marketing: {
    sectionTitle: 'Marketing',
    sectionId: 'marketing',
    fields: {
      customerSatisfactionRate: {
        id: 'satisfaction-rate',
        type: FieldType.Text,
        label: 'Customer Satisfaction Rate',
        placeholder: 'e.g., 95%',
        required: false,
        description: 'Enter customer satisfaction rate.',
      },
      customerRetentionRate: {
        id: 'retention-rate',
        type: FieldType.Text,
        label: 'Customer Retention Rate',
        placeholder: 'e.g., 90%',
        required: false,
        description: 'Enter customer retention rate.',
      },
      customerLifetimeValue: {
        id: 'clv',
        type: FieldType.Text,
        label: 'Customer Lifetime Value (CLV)',
        placeholder: 'e.g., $500',
        required: false,
        description: 'Enter customer lifetime value.',
      },
      fs_marketing: {
        id: 'marketing-details',
        type: FieldType.File,
        label: 'Marketing Details',
        description:
          'Upload marketing details (check fs_marketing excel sheet).',
        required: false,
      },
    },
    nextNode: 'strategy',
  },
  strategy: {
    sectionTitle: 'Strategy',
    sectionId: 'strategy',
    fields: {
      SWOT: {
        id: 'swot-analysis',
        type: FieldType.File,
        label: 'SWOT Analysis',
        description: 'Upload SWOT analysis (PDF) or chat with GPT.',
        required: false,
      },
      STR: {
        id: 'strategy-chart',
        type: FieldType.Text,
        label: 'Strategy Chart',
        description: 'Provide strategy details (chart form).',
        required: true,
      },
    },
    nextNode: 'competition',
  },
  competition: {
    sectionTitle: 'Competition',
    sectionId: 'competition',
    fields: {
      competitors: {
        id: 'competitors-list',
        type: FieldType.Array,
        label: 'Competitors',
        description: 'List competitors with details.',
        subFields: {
          name: {
            id: 'competitor-name',
            type: FieldType.Text,
            label: 'Name',
            required: true,
          },
          url: {
            id: 'competitor-url',
            type: FieldType.Url,
            label: 'URL',
            required: false,
          },
          whatDoTheyDoDifferently: {
            id: 'competitor-diff',
            type: FieldType.Text,
            label: 'What Do They Do Differently',
            required: true,
          },
        },
      },
    },
    nextNode: 'documents',
  },
  documents: {
    sectionTitle: 'Documents',
    sectionId: 'documents',
    fields: {
      registrationDocuments: {
        id: 'reg-docs',
        type: FieldType.File,
        label: 'Registration Documents',
        description: 'Upload multiple registration documents (PDF).',
        required: true,
      },
    },
    nextNode: 'theAsk',
  },
  theAsk: {
    sectionTitle: 'The Ask',
    sectionId: 'theAsk',
    fields: {
      askVsValuation: {
        id: 'ask-valuation',
        type: FieldType.Text,
        label: 'Ask vs Valuation',
        placeholder: 'e.g., 10%',
        required: true,
        description: 'Enter the percentage of ask vs valuation.',
      },
      typeOfInvestor: {
        id: 'investor-type',
        type: FieldType.Text,
        label: 'Type of Investor',
        placeholder: 'e.g., Angel, VC',
        required: false,
        description: 'Specify the type of investor (optional).',
      },
    },
    nextNode: null,
  },
};

// Export the chat flow for use in UI or other processors
export { chatFlow };
