'use client';

// Define interfaces for the data flow schema
interface FormField {
  type: 'text' | 'file' | 'signature' | 'dropdown' | 'video' | 'url' | 'array';
  id: string; // Unique ID for each field/answer
  label: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  options?: { id: string; value: string }[]; // For dropdowns
  validation?: RegExp | ((value: any) => boolean); // Optional validation rule
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
          id: 'nda-form',
          type: 'file',
          label: 'Companies NDAs Form',
          description: 'Upload the signed NDA form (PDF format).',
          required: true,
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
          id: 'company-name',
          type: 'text',
          label: 'Company Name',
          placeholder: 'Enter company name',
          required: true,
          description: 'Provide the full legal name of the company.',
        },
      },
      {
        logo: {
          id: 'company-logo',
          type: 'file',
          label: 'Logo',
          description: 'Upload the company logo (image file).',
          required: true,
        },
      },
      {
        industry: {
          id: 'industry-type',
          type: 'dropdown',
          label: 'Industry',
          options: [
            { id: 'general', value: 'General' },
            { id: 'specific', value: 'Specific' },
            { id: 'other', value: 'Other' },
          ],
          required: true,
          description: 'Select industry type (input details for "Other").',
        },
      },
      {
        description: {
          id: 'company-description',
          type: 'text',
          label: 'Description',
          placeholder: 'Enter a brief description',
          required: true,
          description: 'Provide a summary of the company.',
        },
      },
      {
        countryOfOperation: {
          id: 'country-operation',
          type: 'dropdown',
          label: 'Country of Operation',
          options: [{ id: 'usa', value: 'USA' }], // Example based on the IP of the user etc...
          required: true,
          description: 'Select the primary country of operation.',
        },
      },
      {
        socialMediaAccounts: {
          id: 'social-media-accounts',
          type: 'array',
          label: 'Social Media Accounts',
          description: 'Provide URLs for social media profiles (all optional).',
          subFields: {
            tiktok: {
              id: 'tiktok-url',
              type: 'url',
              label: 'TikTok URL',
              required: false,
            },
            linkedin: {
              id: 'linkedin-url',
              type: 'url',
              label: 'LinkedIn URL',
              required: false,
            },
            facebook: {
              id: 'facebook-url',
              type: 'url',
              label: 'Facebook URL',
              required: false,
            },
            instagram: {
              id: 'instagram-url',
              type: 'url',
              label: 'Instagram URL',
              required: false,
            },
            x: { id: 'x-url', type: 'url', label: 'X URL', required: false },
            others: {
              id: 'other-url',
              type: 'url',
              label: 'Other URL',
              required: false,
            },
          },
        },
      },
      {
        mainWebsiteUrl: {
          id: 'main-website',
          type: 'url',
          label: 'Main Website URL',
          placeholder: 'https://example.com',
          required: false,
          description: 'Provide the company’s main website URL.',
          validation: /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*\/?$/,
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
          id: 'team-members',
          type: 'array',
          label: 'Team Members Profile',
          description: 'List team members with details.',
          subFields: {
            fullName: {
              id: 'team-full-name',
              type: 'text',
              label: 'Full Name',
              required: true,
            },
            roleTitle: {
              id: 'team-role',
              type: 'text',
              label: 'Role Title',
              required: true,
            },
            background: {
              id: 'team-background',
              type: 'text',
              label: 'Background',
              required: false,
            },
            expertise: {
              id: 'team-expertise',
              type: 'text',
              label: 'Expertise',
              required: false,
            },
          },
        },
      },
      {
        teamVideo: {
          id: 'team-video',
          type: 'video',
          label: 'Team Video',
          description: 'Upload a team video (max 2 minutes).',
          required: false,
        },
      },
      {
        teamStandards: {
          id: 'team-standards',
          type: 'text',
          label: 'Team Standards',
          placeholder: 'your motto, yourculture etc...',
          required: false,
          description: 'Describe the team’s motto, culture...',
        },
      },
    ],
    dependsOn: ['portfolio'],
  },
  productsAndServices: {
    sectionTitle: 'Products & Services + Description',
    sectionId: 'productsAndServices',
    order: 5,
    children: [
      {
        products: {
          id: 'products-services',
          type: 'array',
          label: 'Products & Services',
          description: 'List products or services with details.',
          subFields: {
            type: {
              id: 'product-type',
              type: 'dropdown',
              label: 'Type',
              options: [
                { id: 'product', value: 'product' },
                { id: 'service', value: 'service' },
              ],
              required: true,
            },
            name: {
              id: 'product-name',
              type: 'text',
              label: 'Name',
              required: true,
            },
            desc: {
              id: 'product-desc',
              type: 'text',
              label: 'Description',
              required: true,
            },
            photos: {
              id: 'product-photos',
              type: 'file',
              label: 'Photos',
              required: false,
            },
            ios_app_url: {
              id: 'ios-app-url',
              type: 'url',
              label: 'iOS App URL',
              required: false,
            },
            android_app_url: {
              id: 'android-app-url',
              type: 'url',
              label: 'Android App URL',
              required: false,
            },
            general_customer_feedback: {
              id: 'customer-feedback',
              type: 'text',
              label: 'General Customer Feedback',
              placeholder: 'example: Loved by more than 500 happy customers',
              required: false,
            },
          },
        },
      },
    ],
    dependsOn: ['foundingTeam'],
  },
  patents: {
    sectionTitle: 'Patents',
    sectionId: 'patents',
    order: 6,
    children: [
      {
        patents: {
          id: 'patents-list',
          type: 'array',
          label: 'Patents',
          description: 'List patents with details.',
          subFields: {
            title: {
              id: 'patent-title',
              type: 'text',
              label: 'Title',
              required: true,
            },
            desc: {
              id: 'patent-desc',
              type: 'text',
              label: 'Description',
              required: true,
            },
            file: {
              id: 'patent-file',
              type: 'file',
              label: 'File (PDF)',
              required: true,
            },
          },
        },
      },
    ],
    dependsOn: ['productsAndServices'],
  },
  achievements: {
    sectionTitle: 'Achievements',
    sectionId: 'achievements',
    order: 7,
    children: [
      {
        awards: {
          id: 'awards-list',
          type: 'array',
          label: 'Awards',
          description: 'List awards with details.',
          subFields: {
            name: {
              id: 'award-name',
              type: 'text',
              label: 'Name',
              required: true,
            },
            des: {
              id: 'award-desc',
              type: 'text',
              label: 'Description',
              required: true,
            },
            url: {
              id: 'award-url',
              type: 'url',
              label: 'URL',
              required: false,
            },
            image: {
              id: 'award-image',
              type: 'file',
              label: 'Image',
              required: false,
            },
          },
        },
      },
    ],
    dependsOn: ['patents'],
  },
  investmentStage: {
    sectionTitle: 'Investment Stage',
    sectionId: 'investmentStage',
    order: 8,
    children: [
      {
        IS: {
          id: 'investment-stage-chart',
          type: 'text', // Placeholder for chart_form(chart_form_investment_stage); replace with UI component
          label: 'Investment Stage Chart',
          description: 'Provide investment stage details (chart form).',
          required: true,
        },
      },
    ],
    dependsOn: ['achievements'],
  },
  departments: {
    sectionTitle: 'Departments',
    sectionId: 'departments',
    order: 9,
    children: [
      {
        organizationChart: {
          id: 'org-chart',
          type: 'file',
          label: 'Organization Chart',
          description: 'Upload organization chart (PDF, Excel, CSV).',
          required: true,
        },
      },
      {
        fs_department: {
          id: 'dept-details',
          type: 'file', // Placeholder for fs_deparment(IS); replace with logic based on excel sheet
          label: 'Department Details',
          description:
            'Upload department details (check fs_department excel sheet).',
          required: false,
        },
      },
    ],
    dependsOn: ['investmentStage'],
  },
  financials: {
    sectionTitle: 'Financials',
    sectionId: 'financials',
    order: 10,
    children: [
      {
        valuation: {
          id: 'company-valuation',
          type: 'text',
          label: 'Valuation',
          placeholder: 'Enter valuation amount',
          required: true,
          description: 'Provide company valuation.',
        },
      },
      {
        previousBalanceSheets: {
          id: 'balance-sheets',
          type: 'file',
          label: 'Previous Balance Sheets',
          description: 'Upload previous balance sheets (PDF, Excel, CSV).',
          required: true,
        },
      },
      {
        previousPLStatements: {
          id: 'pl-statements',
          type: 'file',
          label: 'Previous P&L Statements',
          description: 'Upload previous P&L statements (PDF, Excel, CSV).',
          required: true,
        },
      },
      {
        annualAuditReports: {
          id: 'audit-reports',
          type: 'file',
          label: 'Annual Audit Reports',
          description: 'Upload annual audit reports (PDF, Excel, CSV).',
          required: true,
        },
      },
      {
        fs_financials: {
          id: 'financial-details',
          type: 'file', // Placeholder for fs_financials(IS); replace with logic based on excel sheet
          label: 'Financial Details',
          description:
            'Upload financial details (check fs_financials excel sheet).',
          required: false,
        },
      },
    ],
    dependsOn: ['departments'],
  },
  marketing: {
    sectionTitle: 'Marketing',
    sectionId: 'marketing',
    order: 11,
    children: [
      {
        customerSatisfactionRate: {
          id: 'satisfaction-rate',
          type: 'text',
          label: 'Customer Satisfaction Rate',
          placeholder: 'e.g., 95%',
          required: false,
          description: 'Enter customer satisfaction rate.',
        },
      },
      {
        customerRetentionRate: {
          id: 'retention-rate',
          type: 'text',
          label: 'Customer Retention Rate',
          placeholder: 'e.g., 90%',
          required: false,
          description: 'Enter customer retention rate.',
        },
      },
      {
        customerLifetimeValue: {
          id: 'clv',
          type: 'text',
          label: 'Customer Lifetime Value (CLV)',
          placeholder: 'e.g., $500',
          required: false,
          description: 'Enter customer lifetime value.',
        },
      },
      {
        fs_marketing: {
          id: 'marketing-details',
          type: 'file', // Placeholder for fs_marketing(IS); replace with logic based on excel sheet
          label: 'Marketing Details',
          description:
            'Upload marketing details (check fs_marketing excel sheet).',
          required: false,
        },
      },
    ],
    dependsOn: ['financials'],
  },
  strategy: {
    sectionTitle: 'Strategy',
    sectionId: 'strategy',
    order: 12,
    children: [
      {
        SWOT: {
          id: 'swot-analysis',
          type: 'file',
          label: 'SWOT Analysis',
          description: 'Upload SWOT analysis (PDF) or chat with GPT.',
          required: false,
        },
      },
      {
        STR: {
          id: 'strategy-chart',
          type: 'text', // Placeholder for chart_form(chart_form_strategy); replace with UI component
          label: 'Strategy Chart',
          description: 'Provide strategy details (chart form).',
          required: true,
        },
      },
    ],
    dependsOn: ['marketing'],
  },
  competition: {
    sectionTitle: 'Competition',
    sectionId: 'competition',
    order: 13,
    children: [
      {
        competitors: {
          id: 'competitors-list',
          type: 'array',
          label: 'Competitors',
          description: 'List competitors with details.',
          subFields: {
            name: {
              id: 'competitor-name',
              type: 'text',
              label: 'Name',
              required: true,
            },
            url: {
              id: 'competitor-url',
              type: 'url',
              label: 'URL',
              required: false,
            },
            whatDoTheyDoDifferently: {
              id: 'competitor-diff',
              type: 'text',
              label: 'What Do They Do Differently',
              required: true,
            },
          },
        },
      },
    ],
    dependsOn: ['strategy'],
  },
  documents: {
    sectionTitle: 'Documents',
    sectionId: 'documents',
    order: 14,
    children: [
      {
        registrationDocuments: {
          id: 'reg-docs',
          type: 'file',
          label: 'Registration Documents',
          description: 'Upload multiple registration documents (PDF).',
          required: true,
        },
      },
    ],
    dependsOn: ['competition'],
  },
  theAsk: {
    sectionTitle: 'The Ask',
    sectionId: 'theAsk',
    order: 15,
    children: [
      {
        askVsValuation: {
          id: 'ask-valuation',
          type: 'text',
          label: 'Ask vs Valuation',
          placeholder: 'e.g., 10%',
          required: true,
          description: 'Enter the percentage of ask vs valuation.',
        },
      },
      {
        typeOfInvestor: {
          id: 'investor-type',
          type: 'text',
          label: 'Type of Investor',
          placeholder: 'e.g., Angel, VC',
          required: false,
          description: 'Specify the type of investor (optional).',
        },
      },
    ],
    dependsOn: ['documents'],
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
    console.log(`Processed ${sectionKey}.${fieldKey}:`, value);
    if (onCompleteSection) {
      // Use the predefined field id with the user input value
      const processedValue =
        field.type === 'dropdown' && field.options
          ? field.options.find((opt) => opt.value === value) || {
              id: field.id,
              value,
            }
          : { id: field.id, value };
      onCompleteSection(section.sectionId, { fieldKey, ...processedValue });
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
