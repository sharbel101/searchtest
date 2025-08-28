const fs = require('fs');

function escapeCSV(value) {
  if (value === null || value === undefined) return '';
  let str = String(value);
  str = str.replace(/"/g, '""');
  if (/[",\n]/.test(str)) {
    str = `"${str}"`;
  }
  return str;
}

function convertFlowToCSV(flow) {
  // --- flow_sections.csv ---
  const sectionsHeader = ['id', 'sectiontitle', 'firstfield', 'nextnode'];
  const sectionsRows = [sectionsHeader.join(',')];

  for (const section of Object.values(flow)) {
    sectionsRows.push(
      [
        section.sectionId, // keep original sectionId
        section.sectionTitle,
        section.firstField,
        section.nextNode ?? '',
      ]
        .map(escapeCSV)
        .join(','),
    );
  }

  const sectionsCSV = sectionsRows.join('\n');

  // --- flow_fields.csv ---
  const fieldsHeader = [
    'id',
    'sectionid',
    'type',
    'label',
    'placeholder',
    'description',
    'required',
    'validation',
    'options',
    'flowinjection',
    'extractiontype',
  ];
  const fieldsRows = [fieldsHeader.join(',')];

  for (const section of Object.values(flow)) {
    for (const field of Object.values(section.fields)) {
      fieldsRows.push(
        [
          field.id, // keep original field id
          section.sectionId, // link to original sectionId
          field.type,
          field.label,
          field.placeholder ?? '',
          field.description ?? '',
          field.required ? 'true' : 'false',
          field.validation ?? '',
          JSON.stringify(field.options ?? []),
          field.flowInjection ?? '',
          field.extractionType ?? '',
        ]
          .map(escapeCSV)
          .join(','),
      );
    }
  }

  const fieldsCSV = fieldsRows.join('\n');

  return { sectionsCSV, fieldsCSV };
}

module.exports = { convertFlowToCSV };

const file = {
  nda: {
    sectionTitle: 'NDA',
    sectionId: '6445e119-f6f5-4c8a-bd30-35ea389d88a3',
    firstField: '4bd3e0ac-fb15-4bed-8221-0ce326e2dbda',
    fields: {
      companiesNDAForm: {
        id: '4bd3e0ac-fb15-4bed-8221-0ce326e2dbda',
        type: 'file',
        label: 'Companies NDAs Form',
        description: 'Upload the signed NDA form (PDF format).',
        required: true,
        validation:
          "z.string().min(1, 'NDA form is required').refine((val) => val.endsWith('.pdf') || val.includes('pdf'), 'File must be a PDF format')",
        nextField: null,
      },
    },
    nextNode: '23151162-0a5d-45ef-b3d0-6438700d813d',
  },
  portfolio: {
    sectionTitle: 'Portfolio',
    sectionId: '23151162-0a5d-45ef-b3d0-6438700d813d',
    firstField: '08f4b6c0-b330-45b8-9532-c059b5f3bcf8',
    fields: {
      companyType: {
        id: '08f4b6c0-b330-45b8-9532-c059b5f3bcf8',
        type: 'text',
        label: 'Company Name',
        placeholder: 'Enter company name',
        required: true,
        description: 'Provide the full legal name of the company.',
        validation:
          "z.string().min(2, 'Company name must be at least 2 characters').max(100, 'Company name must be less than 100 characters').regex(/^[a-zA-Z0-9\s&.,\-']+$/, 'Company name contains invalid characters')",
        nextField: 'logo',
        extractionType: 'company name',
      },
      logo: {
        id: 'afd935fb-d491-4b0e-b820-a066a4f69822',
        type: 'file',
        label: 'Logo',
        description: 'Upload the company logo (image file).',
        required: true,
        validation:
          "z.string().min(1, 'Logo is required').refine((val) => /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(val), 'File must be an image (jpg, jpeg, png, gif, svg, webp)')",
        nextField: 'b1c1b9a3-390d-4edc-9f41-5b835e848733',
      },
      industry: {
        id: 'b1c1b9a3-390d-4edc-9f41-5b835e848733',
        type: 'dropdown',
        label: 'Industry',
        options: [
          {
            id: 'general',
            value: 'General',
          },
          {
            id: 'specific',
            value: 'Specific',
          },
          {
            id: 'other',
            value: 'Other',
          },
        ],
        required: true,
        description: 'Select industry type (input details for Other).',
        validation:
          "z.enum(['general', 'specific', 'other'], { required_error: 'Please select an industry type' })",
        nextField: 'description',
      },
      description: {
        id: 'a07de7a2-8937-48a8-aa2a-1494cb8abe96',
        type: 'text',
        label: 'Description',
        placeholder: 'Enter a brief description',
        required: true,
        description: 'Provide a summary of the company.',
        validation:
          "z.string().min(10, 'Description must be at least 10 characters').max(500, 'Description must be less than 500 characters')",
        nextField: 'countryOfOperation',
      },
      countryOfOperation: {
        id: '4c1bb2e6-ddae-4ae7-8301-25a1db462387',
        type: 'dropdown',
        label: 'Country of Operation',
        options: [
          {
            id: 'usa',
            value: 'USA',
          },
        ],
        required: true,
        description: 'Select the primary country of operation.',
        validation:
          "z.enum(['usa'], { required_error: 'Please select an industry type' })",
        nextField: 'mainWebsite',
      },
      mainWebsite: {
        id: '2f19fd1d-4d0f-480c-9474-b72120fe525e',
        type: 'url',
        label: 'Main Website URL',
        placeholder: 'https://example.com',
        required: false,
        description: "Provide the company's main website URL.",
        validation:
          "z.string().url('Invalid website URL').optional().or(z.literal(''))",
      },
    },
    nextNode: 'socialMedia',
  },
  socialMedia: {
    sectionTitle: 'Social Media Accounts',
    sectionId: 'cad62964-1ecf-439d-bf51-751ebc2a6c84',
    firstField: 'd904bc39-057f-48c6-82d8-ac03b6d07f09',
    fields: {
      tiktok: {
        id: 'd904bc39-057f-48c6-82d8-ac03b6d07f09',
        type: 'url',
        label: 'TikTok URL',
        validation:
          "z.string().url('Invalid TikTok URL').refine((val) => val.includes('tiktok.com'), 'Must be a valid TikTok URL').optional().or(z.literal(''))",
        required: false,
      },
      linkedin: {
        id: 'bb3c12f5-163f-46be-9e63-72406de8ef8e',
        type: 'url',
        label: 'LinkedIn URL',
        validation:
          "z.string().url('Invalid LinkedIn URL').refine((val) => val.includes('linkedin.com'), 'Must be a valid LinkedIn URL').optional().or(z.literal(''))",
        required: false,
      },
      facebook: {
        id: '9acae15a-2af5-48a6-b41e-78d8f1c93a2e',
        type: 'url',
        label: 'Facebook URL',
        validation:
          "z.string().url('Invalid Facebook URL').refine((val) => val.includes('facebook.com'), 'Must be a valid Facebook URL').optional().or(z.literal(''))",
        required: false,
      },
      instagram: {
        id: '90454b60-6119-4ebd-8fcf-324951732f6f',
        type: 'url',
        label: 'Instagram URL',
        validation:
          "z.string().url('Invalid Instagram URL').refine((val) => val.includes('instagram.com'), 'Must be a valid Instagram URL').optional().or(z.literal(''))",
        required: false,
      },
      teams: {
        id: 'f41cb9dc-f75d-4fb0-9db1-faaa8d6d121b',
        type: 'url',
        label: 'X URL',
        validation:
          "z.string().url('Invalid X URL').refine((val) => val.includes('x.com') || val.includes('twitter.com'), 'Must be a valid X/Twitter URL').optional().or(z.literal(''))",
        required: false,
      },
      others: {
        id: '0ddf646a-b159-43c8-a1a6-59b8064d59f0',
        type: 'url',
        label: 'Other URL',
        validation:
          "z.string().url('Invalid URL format').optional().or(z.literal(''))",
        required: false,
      },
    },
    nextNode: 'd5e2976d-91d0-4c99-8a97-e753804dd3a0',
  },
  foundingTeam: {
    sectionTitle: 'Founding Team',
    sectionId: 'd5e2976d-91d0-4c99-8a97-e753804dd3a0',
    firstField: 'ddd3eecb-8fec-42b9-8a16-c079aafdc173',
    fields: {
      teamMembersProfile: {
        id: 'ddd3eecb-8fec-42b9-8a16-c079aafdc173',
        type: 'text',
        label: 'Team Members Profile',
        description: 'List team members with details.',
        validation:
          "z.array(z.object({})).min(1, 'At least one team member is required')",
        nextField: 'teamVideo',
        subFields: {
          fullName: {
            id: 'team-full-name',
            type: 'text',
            label: 'Full Name',
            validation:
              "z.string().min(2, 'Full name must be at least 2 characters').max(50, 'Full name must be less than 50 characters').regex(/^[a-zA-Z\s\-']+$/, 'Name contains invalid characters')",
            required: true,
          },
          roleTitle: {
            id: 'team-role',
            type: 'text',
            label: 'Role Title',
            validation:
              "z.string().min(2, 'Role title must be at least 2 characters').max(50, 'Role title must be less than 50 characters')",
            required: true,
          },
          background: {
            id: 'team-background',
            type: 'text',
            label: 'Background',
            validation:
              "z.string().max(300, 'Background must be less than 300 characters').optional().or(z.literal(''))",
            required: false,
          },
          expertise: {
            id: 'team-expertise',
            type: 'text',
            label: 'Expertise',
            validation:
              "z.string().max(200, 'Expertise must be less than 200 characters').optional().or(z.literal(''))",
            required: false,
          },
        },
      },
      teamVideo: {
        id: 'ba48290d-e5c2-4d7b-826f-600a28b64f9c',
        type: 'video',
        label: 'Team Video',
        description: 'Upload a team video (max 2 minutes).',
        validation:
          "z.string().refine((val) => /\.(mp4|avi|mov|wmv|flv|webm)$/i.test(val), 'File must be a video format').optional().or(z.literal(''))",
        required: false,
        nextField: 'teamStandards',
      },
      teamStandards: {
        id: '2889ff73-a410-4174-8005-b7e26805a800',
        type: 'text',
        label: 'Team Standards',
        placeholder: 'your motto, your culture etc...',
        required: false,
        description: "Describe the team's motto, culture...",
        validation:
          "z.string().max(300, 'Team standards must be less than 300 characters').optional().or(z.literal(''))",
        nextField: null,
      },
    },
    nextNode: '4ca87809-f08b-4ee7-8069-ad07f21d1780',
  },
  productsAndServices: {
    sectionTitle: 'Products & Services + Description',
    sectionId: '4ca87809-f08b-4ee7-8069-ad07f21d1780',
    firstField: 'c7e02312-5ba1-45a5-ab83-eedde1128a6c',
    fields: {
      products: {
        id: 'c7e02312-5ba1-45a5-ab83-eedde1128a6c',
        type: 'text',
        label: 'Products & Services',
        description: 'List products or services with details.',
        validation:
          "z.array(z.object({})).min(1, 'At least one product or service is required')",
        nextField: null,
        subFields: {
          type: {
            id: 'product-type',
            type: 'dropdown',
            label: 'Type',
            options: [
              {
                id: 'product',
                value: 'product',
              },
              {
                id: 'service',
                value: 'service',
              },
            ],
            required: true,
            validation:
              "z.enum(['product', 'service'], { required_error: 'Please select a type' })",
          },
          name: {
            id: 'product-name',
            type: 'text',
            label: 'Name',
            validation:
              "z.string().min(2, 'Product/Service name must be at least 2 characters').max(100, 'Product/Service name must be less than 100 characters')",
            required: true,
          },
          desc: {
            id: 'product-desc',
            type: 'text',
            label: 'Description',
            validation:
              "z.string().min(10, 'Description must be at least 10 characters').max(500, 'Description must be less than 500 characters')",
            required: true,
          },
          photos: {
            id: 'product-photos',
            type: 'file',
            label: 'Photos',
            validation:
              "z.string().refine((val) => /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(val), 'File must be an image').optional().or(z.literal(''))",
            required: false,
          },
          ios_app_url: {
            id: 'ios-app-url',
            type: 'url',
            label: 'iOS App URL',
            validation:
              "z.string().url('Invalid iOS App URL').refine((val) => val.includes('apps.apple.com') || val.includes('itunes.apple.com'), 'Must be a valid iOS App Store URL').optional().or(z.literal(''))",
            required: false,
          },
          android_app_url: {
            id: 'android-app-url',
            type: 'url',
            label: 'Android App URL',
            validation:
              "z.string().url('Invalid Android App URL').refine((val) => val.includes('play.google.com'), 'Must be a valid Google Play Store URL').optional().or(z.literal(''))",
            required: false,
          },
          general_customer_feedback: {
            id: 'customer-feedback',
            type: 'text',
            label: 'General Customer Feedback',
            placeholder: 'example: Loved by more than 500 happy customers',
            validation:
              "z.string().max(200, 'Customer feedback must be less than 200 characters').optional().or(z.literal(''))",
            required: false,
          },
        },
      },
    },
    nextNode: 'cbba2260-c2d6-4001-beb8-bf2f449a30b3',
  },
  patents: {
    sectionTitle: 'Patents',
    sectionId: 'cbba2260-c2d6-4001-beb8-bf2f449a30b3',
    firstField: 'e98c7d76-588d-4769-b012-ac38551652d8',
    fields: {
      patents: {
        id: 'e98c7d76-588d-4769-b012-ac38551652d8',
        type: 'text',
        label: 'Patents',
        description: 'List patents with details.',
        validation: 'z.array(z.object({})).optional()',
        nextField: null,
        subFields: {
          title: {
            id: 'patent-title',
            type: 'text',
            label: 'Title',
            validation:
              "z.string().min(5, 'Patent title must be at least 5 characters').max(150, 'Patent title must be less than 150 characters')",
            required: true,
          },
          desc: {
            id: 'patent-desc',
            type: 'text',
            label: 'Description',
            validation:
              "z.string().min(20, 'Patent description must be at least 20 characters').max(1000, 'Patent description must be less than 1000 characters')",
            required: true,
          },
          file: {
            id: 'patent-file',
            type: 'file',
            label: 'File (PDF)',
            validation:
              "z.string().min(1, 'Patent file is required').refine((val) => val.endsWith('.pdf') || val.includes('pdf'), 'File must be a PDF format')",
            required: true,
          },
        },
      },
    },
    nextNode: 'b5733065-f87f-4943-990e-560dcaa4f9e7',
  },
  achievements: {
    sectionTitle: 'Achievements',
    sectionId: 'b5733065-f87f-4943-990e-560dcaa4f9e7',
    firstField: 'e7c336a9-eb39-4ca0-99cd-1a15b54f9719',
    fields: {
      awards: {
        id: 'e7c336a9-eb39-4ca0-99cd-1a15b54f9719',
        type: 'text',
        label: 'Awards',
        description: 'List awards with details.',
        validation: 'z.array(z.object({})).optional()',
        nextField: null,
        subFields: {
          type: {
            id: 'award-name',
            type: 'text',
            label: 'Name',
            required: true,
            validation:
              "z.string().min(3, 'Award name must be at least 3 characters').max(100, 'Award name must be less than 100 characters')",
          },
          des: {
            id: 'award-desc',
            type: 'text',
            label: 'Description',
            required: true,
            validation:
              "z.string().min(10, 'Award description must be at least 10 characters').max(300, 'Award description must be less than 300 characters')",
          },
          url: {
            id: 'award-url',
            type: 'url',
            label: 'URL',
            required: false,
            validation:
              "z.string().url('Invalid URL format').optional().or(z.literal(''))",
          },
          image: {
            id: 'award-image',
            type: 'file',
            label: 'Image',
            required: false,
            validation:
              "z.string().refine((val) => /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(val), 'File must be an image').optional().or(z.literal(''))",
          },
        },
      },
    },
    nextNode: '9b72fa15-b7eb-4d35-9f1a-322521f645f0',
  },
  investmentStage: {
    sectionTitle: 'Investment Stage',
    sectionId: '9b72fa15-b7eb-4d35-9f1a-322521f645f0',
    firstField: 'ea4f1dff-af25-4170-9208-7cd3639e6c23',
    fields: {
      IS: {
        id: 'ea4f1dff-af25-4170-9208-7cd3639e6c23',
        type: 'flowfunc',
        label: 'Investment Stage',
        description: 'Answer questions to determine your investment stage',
        required: true,
        flowInjection: {
          name: 'investmentStageFlow',
          type: 'ChartForm',
        },
        nextField: null,
      },
    },
    nextNode: '0f39dcdc-5c7e-4582-aa4e-69391aeff92b',
  },
  departments: {
    sectionTitle: 'Departments',
    sectionId: '0f39dcdc-5c7e-4582-aa4e-69391aeff92b',
    firstField: '1d6226de-485e-4313-926f-554a5297cf42',
    fields: {
      organizationChart: {
        id: '1d6226de-485e-4313-926f-554a5297cf42',
        type: 'file',
        label: 'Organization Chart',
        description: 'Upload organization chart (PDF, Excel, CSV).',
        required: true,
        validation:
          "z.string().min(1, 'Organization chart is required').refine((val) => /\.(pdf|xlsx?|csv)$/i.test(val), 'File must be PDF, Excel, or CSV format')",
        nextField: 'fs_department',
      },
      fs_department: {
        id: 'b8dac8dd-c2a1-4331-a5c0-7b70f38283e9',
        type: 'file',
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
    nextNode: 'abfb9161-add8-4306-81a9-221229aeaaa0',
  },
  financials: {
    sectionTitle: 'Financials',
    sectionId: 'abfb9161-add8-4306-81a9-221229aeaaa0',
    firstField: '73d9ba33-541f-4db5-a6e4-e8c3d21f7cf7',
    fields: {
      valuation: {
        id: '73d9ba33-541f-4db5-a6e4-e8c3d21f7cf7',
        type: 'text',
        label: 'Valuation',
        placeholder: 'Enter valuation amount',
        required: true,
        validation:
          "z.string().regex(/^\$?[\d,]+(\.[\d]{2})?[KMB]?$/, 'Invalid valuation format (e.g., $1,000,000 or $1M)').min(1, 'Valuation is required')",
        description: 'Provide company valuation.',
        nextField: 'previousBalanceSheets',
      },
      previousBalanceSheets: {
        id: 'a3945566-756d-47c2-bd93-3c22da70228e',
        type: 'file',
        label: 'Previous Balance Sheets',
        description: 'Upload previous balance sheets (PDF, Excel, CSV).',
        required: true,
        validation:
          "z.string().min(1, 'Balance sheets are required').refine((val) => /\.(pdf|xlsx?|csv)$/i.test(val), 'File must be PDF, Excel, or CSV format')",
        nextField: 'previousPLStatements',
      },
      previousPLStatements: {
        id: '81bdc9fd-489c-4175-9325-c98ff9ec22d6',
        type: 'file',
        label: 'Previous P&L Statements',
        description: 'Upload previous P&L statements (PDF, Excel, CSV).',
        required: true,
        validation:
          "z.string().min(1, 'P&L statements are required').refine((val) => /\.(pdf|xlsx?|csv)$/i.test(val), 'File must be PDF, Excel, or CSV format')",
        nextField: 'annualAuditReports',
      },
      annualAuditReports: {
        id: 'e1363fe9-13d3-49ca-b9f4-7f039f854506',
        type: 'file',
        label: 'Annual Audit Reports',
        description: 'Upload annual audit reports (PDF, Excel, CSV).',
        required: true,
        validation:
          "z.string().min(1, 'Audit reports are required').refine((val) => /\.(pdf|xlsx?|csv)$/i.test(val), 'File must be PDF, Excel, or CSV format')",
        nextField: 'fs_financials',
      },
      fs_financials: {
        id: 'f88c2e68-9b4f-4cf3-a163-075ddb7c2c34',
        type: 'flowfunc',
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
    nextNode: 'c2c16eab-3260-4cd1-a4fb-d2e480fa6afd',
  },
  marketing: {
    sectionTitle: 'Marketing',
    sectionId: 'c2c16eab-3260-4cd1-a4fb-d2e480fa6afd',
    firstField: 'f46ff692-8a9b-4285-870a-d191694b415f',
    fields: {
      customerSatisfactionRate: {
        id: 'f46ff692-8a9b-4285-870a-d191694b415f',
        type: 'text',
        label: 'Customer Satisfaction Rate',
        placeholder: 'e.g., 95%',
        required: false,
        validation:
          "z.string().regex(/^\d{1,3}%$/, 'Must be a percentage (e.g., 95%)').refine((val) => parseInt(val) <= 100, 'Percentage cannot exceed 100%').optional().or(z.literal(''))",
        description: 'Enter customer satisfaction rate.',
        nextField: 'customerRetentionRate',
      },
      customerRetentionRate: {
        id: '125fb5cf-d483-40a7-a361-321e0b0f9eb0',
        type: 'text',
        label: 'Customer Retention Rate',
        placeholder: 'e.g., 90%',
        required: false,
        validation:
          "z.string().regex(/^\d{1,3}%$/, 'Must be a percentage (e.g., 90%)').refine((val) => parseInt(val) <= 100, 'Percentage cannot exceed 100%').optional().or(z.literal(''))",
        description: 'Enter customer retention rate.',
        nextField: 'customerLifetimeValue',
      },
      customerLifetimeValue: {
        id: '54bff091-f395-4b05-8838-55a3ead6c944',
        type: 'text',
        label: 'Customer Lifetime Value (CLV)',
        placeholder: 'e.g., $500',
        required: false,
        validation:
          "z.string().regex(/^\$?[\d,]+(\.[\d]{2})?$/, 'Invalid CLV format (e.g., $500 or $1,250.50)').optional().or(z.literal(''))",
        description: 'Enter customer lifetime value.',
        nextField: 'fs_marketing',
      },
      fs_marketing: {
        id: 'd4320333-f960-478b-a39b-650806c489e4',
        type: 'file',
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
    nextNode: '78b6e253-9ced-4042-940b-6c4118df2cfe',
  },
  strategy: {
    sectionTitle: 'Strategy',
    sectionId: '78b6e253-9ced-4042-940b-6c4118df2cfe',
    firstField: '0b09c902-2d0a-4002-b3af-a159b9d47197',
    fields: {
      SWOT: {
        id: '0b09c902-2d0a-4002-b3af-a159b9d47197',
        type: 'file',
        label: 'SWOT Analysis',
        description: 'Upload SWOT analysis (PDF) or chat with GPT.',
        required: false,
        validation:
          "z.string().refine((val) => val.endsWith('.pdf') || val.includes('pdf'), 'File must be a PDF format').optional().or(z.literal(''))",
        nextField: 'STR',
      },
      STR: {
        id: '3a387acd-7612-4a15-bab9-a350defea1af',
        type: 'text',
        label: 'Strategy Chart',
        description: 'Provide strategy details (chart form).',
        required: true,
        validation:
          "z.string().min(20, 'Strategy details must be at least 20 characters').max(1000, 'Strategy details must be less than 1000 characters')",
        nextField: null,
      },
    },
    nextNode: '5a0fed5c-4606-42c0-aeaa-53c2da3a258f',
  },
  competition: {
    sectionTitle: 'Competition',
    sectionId: '5a0fed5c-4606-42c0-aeaa-53c2da3a258f',
    firstField: '192fe73d-3259-4b78-b69e-5dc3b886cf15',
    fields: {
      competitors: {
        id: '192fe73d-3259-4b78-b69e-5dc3b886cf15',
        type: 'text',
        label: 'Competitors',
        description: 'List competitors with details.',
        validation: 'z.array(z.object({})).optional()',
        nextField: null,
        subFields: {
          name: {
            id: 'competitor-name',
            type: 'text',
            label: 'Name',
            validation:
              "z.string().min(2, 'Competitor name must be at least 2 characters').max(100, 'Competitor name must be less than 100 characters')",
            required: true,
          },
          url: {
            id: 'competitor-url',
            type: 'url',
            label: 'URL',
            validation:
              "z.string().url('Invalid competitor URL').optional().or(z.literal(''))",
            required: false,
          },
          whatDoTheyDoDifferently: {
            id: 'competitor-diff',
            type: 'text',
            label: 'What Do They Do Differently',
            validation:
              "z.string().min(10, 'Description must be at least 10 characters').max(300, 'Description must be less than 300 characters')",
            required: true,
          },
        },
      },
    },
    nextNode: '5acc7407-b391-4d81-9165-c2dffa059a53',
  },
  documents: {
    sectionTitle: 'Documents',
    sectionId: '5acc7407-b391-4d81-9165-c2dffa059a53',
    firstField: '5998f9af-b25c-407b-bfb4-00559e81fb34',
    fields: {
      registrationDocuments: {
        id: '5998f9af-b25c-407b-bfb4-00559e81fb34',
        type: 'file',
        label: 'Registration Documents',
        description: 'Upload multiple registration documents (PDF).',
        required: true,
        validation:
          "z.string().min(1, 'Registration documents are required').refine((val) => val.endsWith('.pdf') || val.includes('pdf'), 'File must be a PDF format')",
        nextField: null,
      },
    },
    nextNode: 'fbd681dc-2118-438c-9b96-5e6eaa7b9618',
  },
  theAsk: {
    sectionTitle: 'The Ask',
    sectionId: 'fbd681dc-2118-438c-9b96-5e6eaa7b9618',
    firstField: 'dad74eb3-9f86-43de-a380-e1086940e5f7',
    fields: {
      askVsValuation: {
        id: 'dad74eb3-9f86-43de-a380-e1086940e5f7',
        type: 'text',
        label: 'Ask vs Valuation',
        placeholder: 'e.g., 10%',
        required: true,
        validation:
          "z.string().regex(/^\d{1,2}(\.\d{1,2})?%$/, 'Must be a percentage (e.g., 10% or 10.5%)').refine((val) => parseFloat(val) <= 100, 'Percentage cannot exceed 100%')",
        description: 'Enter the percentage of ask vs valuation.',
        nextField: 'typeOfInvestor',
      },
      typeOfInvestor: {
        id: '343056bd-81a9-44b3-8d14-4f9c12ae4056',
        type: 'text',
        label: 'Type of Investor',
        placeholder: 'e.g., Angel, VC',
        required: false,
        validation:
          "z.string().max(50, 'Investor type must be less than 50 characters').optional().or(z.literal(''))",
        description: 'Specify the type of investor (optional).',
        nextField: null,
      },
    },
    nextNode: null,
  },
};

const { sectionsCSV, fieldsCSV } = convertFlowToCSV(file);

fs.writeFileSync('chatFlow_sections.csv', sectionsCSV);
fs.writeFileSync('chatFlow_fields.csv', fieldsCSV);

console.log('✅ Clean CSVs generated.');
