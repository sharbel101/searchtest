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
  validation?: string; // Optional validation rule used to validate string inputs by testing if they match a specific pattern
  subFields?: { [key: string]: FormField };
  flowInjection?: { name: string; type: string };
  nextField?: string | null; //todo remove the optional
};

// Type for flow sections, representing a group of fields
export type FlowSection = {
  sectionTitle: string; // Title of the section
  sectionId: string; // Unique identifier for the section
  opened?: boolean;
  fields: { [key: string]: FormField }; // Object of fields for a section, defining all fields like companyType or socialMediaAccounts
  firstField?: string;
  nextNode?: string | null; // ID of the next section in the flow, allowing null //todo remove the optional
};

// Type for the entire chat flow, mapping section IDs to sections
export type ChatFlow = {
  [key: string]: FlowSection;
};

// Defining the chat flow structure with sections and their fields
const chatFlow: ChatFlow = {
  nda: {
    sectionTitle: 'NDA',
    sectionId: 'nda',
    firstField: 'companiesNDAForm',
    fields: {
      companiesNDAForm: {
        id: 'nda-form',
        type: FieldType.File,
        label: 'Companies NDAs Form',
        description: 'Upload the signed NDA form (PDF format).',
        required: true,
        validation:
          'z.string().min(1, "NDA form is required").refine((val) => val.endsWith(".pdf") || val.includes("pdf"), "File must be a PDF format")',
        nextField: null,
      },
    },
    nextNode: 'portfolio',
  },

  portfolio: {
    sectionTitle: 'Portfolio',
    sectionId: 'portfolio',
    firstField: 'companyType',
    fields: {
      companyType: {
        id: 'company-name',
        type: FieldType.Text,
        label: 'Company Name',
        placeholder: 'Enter company name',
        required: true,
        description: 'Provide the full legal name of the company.',
        validation:
          'z.string().min(2, "Company name must be at least 2 characters").max(100, "Company name must be less than 100 characters").regex(/^[a-zA-Z0-9\\s&.,\\-\']+$/, "Company name contains invalid characters")',
        nextField: 'logo',
      },
      logo: {
        id: 'company-logo',
        type: FieldType.File,
        label: 'Logo',
        description: 'Upload the company logo (image file).',
        required: true,
        validation:
          'z.string().min(1, "Logo is required").refine((val) => /\\.(jpg|jpeg|png|gif|svg|webp)$/i.test(val), "File must be an image (jpg, jpeg, png, gif, svg, webp)")',
        nextField: 'industry',
      },
      industry: {
        id: 'industry',
        type: FieldType.Dropdown,
        label: 'Industry',
        options: [
          { id: 'general', value: 'general' },
          { id: 'specific', value: 'specific' },
          { id: 'other', value: 'other' },
        ],
        required: true,
        description: 'Select industry type (input details for "Other").',
        validation:
          'z.enum(["general", "specific", "other"], { required_error: "Please select an industry type" })',
        nextField: 'description',
      },
      description: {
        id: 'company-description',
        type: FieldType.Text,
        label: 'Description',
        placeholder: 'Enter a brief description',
        required: true,
        description: 'Provide a summary of the company.',
        validation:
          'z.string().min(10, "Description must be at least 10 characters").max(500, "Description must be less than 500 characters")',
        nextField: 'countryOfOperation',
      },
      countryOfOperation: {
        id: 'country-operation',
        type: FieldType.Dropdown,
        label: 'Country of Operation',
        options: [{ id: 'usa', value: 'USA' }],
        required: true,
        description: 'Select the primary country of operation.',
        validation: 'z.string().min(1, "Country of operation is required")',
        nextField: 'socialMediaAccounts',
      },
      socialMediaAccounts: {
        id: 'social-media-accounts',
        type: FieldType.Array,
        label: 'Social Media Accounts',
        description: 'Provide URLs for social media profiles (all optional).',
        validation: 'z.object({}).optional()',
        subFields: {
          tiktok: {
            id: 'tiktok-url',
            type: FieldType.Url,
            label: 'TikTok URL',
            validation:
              'z.string().url("Invalid TikTok URL").refine((val) => val.includes("tiktok.com"), "Must be a valid TikTok URL").optional().or(z.literal(""))',
            required: false,
          },
          linkedin: {
            id: 'linkedin-url',
            type: FieldType.Url,
            label: 'LinkedIn URL',
            validation:
              'z.string().url("Invalid LinkedIn URL").refine((val) => val.includes("linkedin.com"), "Must be a valid LinkedIn URL").optional().or(z.literal(""))',
            required: false,
          },
          facebook: {
            id: 'facebook-url',
            type: FieldType.Url,
            label: 'Facebook URL',
            validation:
              'z.string().url("Invalid Facebook URL").refine((val) => val.includes("facebook.com"), "Must be a valid Facebook URL").optional().or(z.literal(""))',
            required: false,
          },
          instagram: {
            id: 'instagram-url',
            type: FieldType.Url,
            label: 'Instagram URL',
            validation:
              'z.string().url("Invalid Instagram URL").refine((val) => val.includes("instagram.com"), "Must be a valid Instagram URL").optional().or(z.literal(""))',
            required: false,
          },
          teams: {
            id: 'x-url',
            type: FieldType.Url,
            label: 'X URL',
            validation:
              'z.string().url("Invalid X URL").refine((val) => val.includes("x.com") || val.includes("twitter.com"), "Must be a valid X/Twitter URL").optional().or(z.literal(""))',
            required: false,
          },
          others: {
            id: 'other-url',
            type: FieldType.Url,
            label: 'Other URL',
            validation:
              'z.string().url("Invalid URL format").optional().or(z.literal(""))',
            required: false,
          },
        },
        nextField: 'mainWebsite',
      },
      mainWebsite: {
        id: 'main-url',
        type: FieldType.Url,
        label: 'Main Website URL',
        placeholder: 'https://example.com',
        required: false,
        description: "Provide the company's main website URL.",
        validation:
          'z.string().url("Invalid website URL").optional().or(z.literal(""))',
      },
    },
    nextNode: 'foundingTeam',
  },
  foundingTeam: {
    sectionTitle: 'Founding Team',
    sectionId: 'foundingTeam',
    firstField: 'teamMembersProfile',
    fields: {
      teamMembersProfile: {
        id: 'team-members',
        type: FieldType.Array,
        label: 'Team Members Profile',
        description: 'List team members with details.',
        validation:
          'z.array(z.object({})).min(1, "At least one team member is required")',
        nextField: 'teamVideo',
        subFields: {
          fullName: {
            id: 'team-full-name',
            type: FieldType.Text,
            label: 'Full Name',
            validation:
              'z.string().min(2, "Full name must be at least 2 characters").max(50, "Full name must be less than 50 characters").regex(/^[a-zA-Z\\s\\-\']+$/, "Name contains invalid characters")',
            required: true,
          },
          roleTitle: {
            id: 'team-role',
            type: FieldType.Text,
            label: 'Role Title',
            validation:
              'z.string().min(2, "Role title must be at least 2 characters").max(50, "Role title must be less than 50 characters")',
            required: true,
          },
          background: {
            id: 'team-background',
            type: FieldType.Text,
            label: 'Background',
            validation:
              'z.string().max(300, "Background must be less than 300 characters").optional().or(z.literal(""))',
            required: false,
          },
          expertise: {
            id: 'team-expertise',
            type: FieldType.Text,
            label: 'Expertise',
            validation:
              'z.string().max(200, "Expertise must be less than 200 characters").optional().or(z.literal(""))',
            required: false,
          },
        },
      },
      teamVideo: {
        id: 'team-video',
        type: FieldType.Video,
        label: 'Team Video',
        description: 'Upload a team video (max 2 minutes).',
        validation:
          'z.string().refine((val) => /\\.(mp4|avi|mov|wmv|flv|webm)$/i.test(val), "File must be a video format").optional().or(z.literal(""))',
        required: false,
        nextField: 'teamStandards',
      },
      teamStandards: {
        id: 'team-standards',
        type: FieldType.Text,
        label: 'Team Standards',
        placeholder: 'your motto, your culture etc...',
        required: false,
        description: "Describe the team's motto, culture...",
        validation:
          'z.string().max(300, "Team standards must be less than 300 characters").optional().or(z.literal(""))',
        nextField: null,
      },
    },
    nextNode: 'productsAndServices',
  },
  productsAndServices: {
    sectionTitle: 'Products & Services + Description',
    sectionId: 'productsAndServices',
    firstField: 'products',
    fields: {
      products: {
        id: 'products-services',
        type: FieldType.Array,
        label: 'Products & Services',
        description: 'List products or services with details.',
        validation:
          'z.array(z.object({})).min(1, "At least one product or service is required")',
        nextField: null,
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
            validation:
              'z.enum(["product", "service"], { required_error: "Please select a type" })',
          },
          name: {
            id: 'product-name',
            type: FieldType.Text,
            label: 'Name',
            validation:
              'z.string().min(2, "Product/Service name must be at least 2 characters").max(100, "Product/Service name must be less than 100 characters")',
            required: true,
          },
          desc: {
            id: 'product-desc',
            type: FieldType.Text,
            label: 'Description',
            validation:
              'z.string().min(10, "Description must be at least 10 characters").max(500, "Description must be less than 500 characters")',
            required: true,
          },
          photos: {
            id: 'product-photos',
            type: FieldType.File,
            label: 'Photos',
            validation:
              'z.string().refine((val) => /\\.(jpg|jpeg|png|gif|svg|webp)$/i.test(val), "File must be an image").optional().or(z.literal(""))',
            required: false,
          },
          ios_app_url: {
            id: 'ios-app-url',
            type: FieldType.Url,
            label: 'iOS App URL',
            validation:
              'z.string().url("Invalid iOS App URL").refine((val) => val.includes("apps.apple.com") || val.includes("itunes.apple.com"), "Must be a valid iOS App Store URL").optional().or(z.literal(""))',
            required: false,
          },
          android_app_url: {
            id: 'android-app-url',
            type: FieldType.Url,
            label: 'Android App URL',
            validation:
              'z.string().url("Invalid Android App URL").refine((val) => val.includes("play.google.com"), "Must be a valid Google Play Store URL").optional().or(z.literal(""))',
            required: false,
          },
          general_customer_feedback: {
            id: 'customer-feedback',
            type: FieldType.Text,
            label: 'General Customer Feedback',
            placeholder: 'example: Loved by more than 500 happy customers',
            validation:
              'z.string().max(200, "Customer feedback must be less than 200 characters").optional().or(z.literal(""))',
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
    firstField: 'patents',
    fields: {
      patents: {
        id: 'patents-list',
        type: FieldType.Array,
        label: 'Patents',
        description: 'List patents with details.',
        validation: 'z.array(z.object({})).optional()',
        nextField: null,
        subFields: {
          title: {
            id: 'patent-title',
            type: FieldType.Text,
            label: 'Title',
            validation:
              'z.string().min(5, "Patent title must be at least 5 characters").max(150, "Patent title must be less than 150 characters")',
            required: true,
          },
          desc: {
            id: 'patent-desc',
            type: FieldType.Text,
            label: 'Description',
            validation:
              'z.string().min(20, "Patent description must be at least 20 characters").max(1000, "Patent description must be less than 1000 characters")',
            required: true,
          },
          file: {
            id: 'patent-file',
            type: FieldType.File,
            label: 'File (PDF)',
            validation:
              'z.string().min(1, "Patent file is required").refine((val) => val.endsWith(".pdf") || val.includes("pdf"), "File must be a PDF format")',
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
    firstField: 'awards',
    fields: {
      awards: {
        id: 'awards-list',
        type: FieldType.Array,
        label: 'Awards',
        description: 'List awards with details.',
        validation: 'z.array(z.object({})).optional()',
        nextField: null,
        subFields: {
          type: {
            id: 'award-name',
            type: FieldType.Text,
            label: 'Name',
            required: true,
            validation:
              'z.string().min(3, "Award name must be at least 3 characters").max(100, "Award name must be less than 100 characters")',
          },
          des: {
            id: 'award-desc',
            type: FieldType.Text,
            label: 'Description',
            required: true,
            validation:
              'z.string().min(10, "Award description must be at least 10 characters").max(300, "Award description must be less than 300 characters")',
          },
          url: {
            id: 'award-url',
            type: FieldType.Url,
            label: 'URL',
            required: false,
            validation:
              'z.string().url("Invalid URL format").optional().or(z.literal(""))',
          },
          image: {
            id: 'award-image',
            type: FieldType.File,
            label: 'Image',
            required: false,
            validation:
              'z.string().refine((val) => /\\.(jpg|jpeg|png|gif|svg|webp)$/i.test(val), "File must be an image").optional().or(z.literal(""))',
          },
        },
      },
    },
    nextNode: 'investmentStage',
  },
  investmentStage: {
    sectionTitle: 'Investment Stage',
    sectionId: 'investmentStage',
    firstField: 'IS',
    fields: {
      IS: {
        id: 'investment-stage-chart',
        type: FieldType.FlowFunc,
        label: 'Investment Stage',
        description: 'Answer questions to determine your investment stage',
        required: true,
        validation:
          'z.any().refine((val) => val !== undefined && val !== null, "Investment stage selection is required")',
        flowInjection: {
          name: 'investmentStageFlow',
          type: 'ChartForm',
        },
        nextField: null,
      },
    },
    nextNode: 'departments',
  },
  departments: {
    sectionTitle: 'Departments',
    sectionId: 'departments',
    firstField: 'organizationChart',
    fields: {
      organizationChart: {
        id: 'org-chart',
        type: FieldType.File,
        label: 'Organization Chart',
        description: 'Upload organization chart (PDF, Excel, CSV).',
        required: true,
        validation:
          'z.string().min(1, "Organization chart is required").refine((val) => /\\.(pdf|xlsx?|csv)$/i.test(val), "File must be PDF, Excel, or CSV format")',
        nextField: 'fs_department',
      },
      fs_department: {
        id: 'dept-details',
        type: FieldType.File,
        label: 'Department Details',
        description: '',
        required: false,
        validation: 'z.any().optional()',
        flowInjection: {
          name: 'fs_department',
          type: 'OriginalSubFlow',
        },
        nextField: null,
      },
    },
    nextNode: 'financials',
  },
  financials: {
    sectionTitle: 'Financials',
    sectionId: 'financials',
    firstField: 'valuation',
    fields: {
      valuation: {
        id: 'company-valuation',
        type: FieldType.Text,
        label: 'Valuation',
        placeholder: 'Enter valuation amount',
        required: true,
        validation:
          'z.string().regex(/^\\$?[\\d,]+(\\.[\\d]{2})?[KMB]?$/, "Invalid valuation format (e.g., $1,000,000 or $1M)").min(1, "Valuation is required")',
        description: 'Provide company valuation.',
        nextField: 'previousBalanceSheets',
      },
      previousBalanceSheets: {
        id: 'balance-sheets',
        type: FieldType.File,
        label: 'Previous Balance Sheets',
        description: 'Upload previous balance sheets (PDF, Excel, CSV).',
        required: true,
        validation:
          'z.string().min(1, "Balance sheets are required").refine((val) => /\\.(pdf|xlsx?|csv)$/i.test(val), "File must be PDF, Excel, or CSV format")',
        nextField: 'previousPLStatements',
      },
      previousPLStatements: {
        id: 'pl-statements',
        type: FieldType.File,
        label: 'Previous P&L Statements',
        description: 'Upload previous P&L statements (PDF, Excel, CSV).',
        required: true,
        validation:
          'z.string().min(1, "P&L statements are required").refine((val) => /\\.(pdf|xlsx?|csv)$/i.test(val), "File must be PDF, Excel, or CSV format")',
        nextField: 'annualAuditReports',
      },
      annualAuditReports: {
        id: 'audit-reports',
        type: FieldType.File,
        label: 'Annual Audit Reports',
        description: 'Upload annual audit reports (PDF, Excel, CSV).',
        required: true,
        validation:
          'z.string().min(1, "Audit reports are required").refine((val) => /\\.(pdf|xlsx?|csv)$/i.test(val), "File must be PDF, Excel, or CSV format")',
        nextField: 'fs_financials',
      },
      fs_financials: {
        id: 'financial-details',
        type: FieldType.FlowFunc,
        label: 'Financial Details',
        description:
          'Upload financial details (check fs_financials excel sheet).',
        required: false,
        validation: 'z.any().optional()',
        flowInjection: {
          name: 'fs_financials',
          type: 'OriginalSubFlow',
        },
        nextField: null,
      },
    },
    nextNode: 'marketing',
  },
  marketing: {
    sectionTitle: 'Marketing',
    sectionId: 'marketing',
    firstField: 'customerSatisfactionRate',
    fields: {
      customerSatisfactionRate: {
        id: 'satisfaction-rate',
        type: FieldType.Text,
        label: 'Customer Satisfaction Rate',
        placeholder: 'e.g., 95%',
        required: false,
        validation:
          'z.string().regex(/^\\d{1,3}%$/, "Must be a percentage (e.g., 95%)").refine((val) => parseInt(val) <= 100, "Percentage cannot exceed 100%").optional().or(z.literal(""))',
        description: 'Enter customer satisfaction rate.',
        nextField: 'customerRetentionRate',
      },
      customerRetentionRate: {
        id: 'retention-rate',
        type: FieldType.Text,
        label: 'Customer Retention Rate',
        placeholder: 'e.g., 90%',
        required: false,
        validation:
          'z.string().regex(/^\\d{1,3}%$/, "Must be a percentage (e.g., 90%)").refine((val) => parseInt(val) <= 100, "Percentage cannot exceed 100%").optional().or(z.literal(""))',
        description: 'Enter customer retention rate.',
        nextField: 'customerLifetimeValue',
      },
      customerLifetimeValue: {
        id: 'clv',
        type: FieldType.Text,
        label: 'Customer Lifetime Value (CLV)',
        placeholder: 'e.g., $500',
        required: false,
        validation:
          'z.string().regex(/^\\$?[\\d,]+(\\.[\\d]{2})?$/, "Invalid CLV format (e.g., $500 or $1,250.50)").optional().or(z.literal(""))',
        description: 'Enter customer lifetime value.',
        nextField: 'fs_marketing',
      },
      fs_marketing: {
        id: 'marketing-details',
        type: FieldType.File,
        label: 'Marketing Details',
        description:
          'Upload marketing details (check fs_marketing excel sheet).',
        required: false,
        validation: 'z.any().optional()',
        flowInjection: {
          name: 'fs_marketing',
          type: 'OriginalSubFlow',
        },
        nextField: null,
      },
    },
    nextNode: 'strategy',
  },
  strategy: {
    sectionTitle: 'Strategy',
    sectionId: 'strategy',
    firstField: 'SWOT',
    fields: {
      SWOT: {
        id: 'swot-analysis',
        type: FieldType.File,
        label: 'SWOT Analysis',
        description: 'Upload SWOT analysis (PDF) or chat with GPT.',
        required: false,
        validation:
          'z.string().refine((val) => val.endsWith(".pdf") || val.includes("pdf"), "File must be a PDF format").optional().or(z.literal(""))',
        nextField: 'STR',
      },
      STR: {
        id: 'strategy-chart',
        type: FieldType.Text,
        label: 'Strategy Chart',
        description: 'Provide strategy details (chart form).',
        required: true,
        validation:
          'z.string().min(20, "Strategy details must be at least 20 characters").max(1000, "Strategy details must be less than 1000 characters")',
        nextField: null,
      },
    },
    nextNode: 'competition',
  },
  competition: {
    sectionTitle: 'Competition',
    sectionId: 'competition',
    firstField: 'competitors',
    fields: {
      competitors: {
        id: 'competitors-list',
        type: FieldType.Array,
        label: 'Competitors',
        description: 'List competitors with details.',
        validation: 'z.array(z.object({})).optional()',
        nextField: null,
        subFields: {
          name: {
            id: 'competitor-name',
            type: FieldType.Text,
            label: 'Name',
            validation:
              'z.string().min(2, "Competitor name must be at least 2 characters").max(100, "Competitor name must be less than 100 characters")',
            required: true,
          },
          url: {
            id: 'competitor-url',
            type: FieldType.Url,
            label: 'URL',
            validation:
              'z.string().url("Invalid competitor URL").optional().or(z.literal(""))',
            required: false,
          },
          whatDoTheyDoDifferently: {
            id: 'competitor-diff',
            type: FieldType.Text,
            label: 'What Do They Do Differently',
            validation:
              'z.string().min(10, "Description must be at least 10 characters").max(300, "Description must be less than 300 characters")',
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
    firstField: 'registrationDocuments',
    fields: {
      registrationDocuments: {
        id: 'reg-docs',
        type: FieldType.File,
        label: 'Registration Documents',
        description: 'Upload multiple registration documents (PDF).',
        required: true,
        validation:
          'z.string().min(1, "Registration documents are required").refine((val) => val.endsWith(".pdf") || val.includes("pdf"), "File must be a PDF format")',
        nextField: null,
      },
    },
    nextNode: 'theAsk',
  },
  theAsk: {
    sectionTitle: 'The Ask',
    sectionId: 'theAsk',
    firstField: 'askVsValuation',
    fields: {
      askVsValuation: {
        id: 'ask-valuation',
        type: FieldType.Text,
        label: 'Ask vs Valuation',
        placeholder: 'e.g., 10%',
        required: true,
        validation:
          'z.string().regex(/^\\d{1,2}(\\.\\d{1,2})?%$/, "Must be a percentage (e.g., 10% or 10.5%)").refine((val) => parseFloat(val) <= 100, "Percentage cannot exceed 100%")',
        description: 'Enter the percentage of ask vs valuation.',
        nextField: 'typeOfInvestor',
      },
      typeOfInvestor: {
        id: 'investor-type',
        type: FieldType.Text,
        label: 'Type of Investor',
        placeholder: 'e.g., Angel, VC',
        required: false,
        validation:
          'z.string().max(50, "Investor type must be less than 50 characters").optional().or(z.literal(""))',
        description: 'Specify the type of investor (optional).',
        nextField: null,
      },
    },
    nextNode: null,
  },
};

// Export the chat flow for use in UI or other processors
export { chatFlow };
