const F_IdeationPhase = {
  q1: {
    sectionTitle: 'Valuation',
    sectionId: '53438a22-e47e-4329-b5c2-e2c54ee01798',
    firstField: '48fc03c3-e905-4672-8d85-a3bf30f91877',
    fields: {
      valuationBracket: {
        id: '48fc03c3-e905-4672-8d85-a3bf30f91877',
        type: 'text',
        label:
          "What is your company's estimated valuation brackets? (Insert estimated bracket - lower + upper bounds in USD)",
        required: true,
        nextField: 'capTable',
        placeholder: 'TBD',
        validation: "z.string().min(1, 'Valuation bracket is required')",
      },
      capTable: {
        id: '0f7cf2e8-5200-49d0-9110-67d459d2dfd6',
        type: 'file',
        label: 'Cap table - Upload PDF or excel file (no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'Cap table is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
    },
    nextNode: '55cf2abf-f366-4353-88e2-d2364fb5505f',
  },
  q2: {
    sectionTitle: 'Revenue Growth',
    sectionId: '55cf2abf-f366-4353-88e2-d2364fb5505f',
    firstField: '08bbf788-0977-4deb-8fc5-7af4b5af76b0',
    fields: {
      revenueStarted: {
        id: '08bbf788-0977-4deb-8fc5-7af4b5af76b0',
        type: 'dropdown',
        label: 'Have you started generating revenue?',
        required: true,
        nextField: 'expectedGrowth',
        options: [
          {
            id: 'no',
            value: 'No, not yet',
          },
          {
            id: 'yes',
            value: 'Yes',
          },
        ],
        validation:
          "z.enum(['no', 'yes'], { required_error: 'Revenue status is required' })",
      },
      expectedGrowth: {
        id: '336337bd-b6b4-469d-af87-0cfcf064fb22',
        type: 'dropdown',
        label: 'What is your expected revenue growth one year after launching?',
        required: true,
        nextField: 'plStatement',
        options: [
          {
            id: 'under_50',
            value: '< 50%',
          },
          {
            id: '50_to_100',
            value: '50-100%',
          },
          {
            id: 'over_100',
            value: '> 100%',
          },
        ],
        validation:
          "z.enum(['under_50', '50_to_100', 'over_100'], { required_error: 'Expected growth is required' })",
      },
      plStatement: {
        id: 'b5fa0059-7598-47f8-96fd-6bade2555c89',
        type: 'file',
        label: 'Upload P&L Statement (PDF or excel file, no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'P&L statement is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
    },
    nextNode: '7e833e2e-eb70-4f22-a22f-0c82c10ec22f',
  },
  q3: {
    sectionTitle: 'Net Result (Net Profit/Loss)',
    sectionId: '7e833e2e-eb70-4f22-a22f-0c82c10ec22f',
    firstField: 'ab929035-f7d6-43ad-ad7c-a7f255b60e5c',
    fields: {
      breakEvenTime: {
        id: 'ab929035-f7d6-43ad-ad7c-a7f255b60e5c',
        type: 'dropdown',
        label: 'How many years do you expect are needed to break-even?',
        required: true,
        nextField: 'projectedResult',
        options: [
          {
            id: 'over_5_years',
            value: 'More than 5 years',
          },
          {
            id: '3_to_5_years',
            value: '3 to 5 Years',
          },
          {
            id: 'under_3_years',
            value: 'Less than 3 years',
          },
        ],
        validation:
          "z.enum(['over_5_years', '3_to_5_years', 'under_3_years'], { required_error: 'Break-even time is required' })",
      },
      projectedResult: {
        id: '7bc19ce4-4f99-4aaf-860e-da6ed7ff6cf5',
        type: 'dropdown',
        label:
          'What is your projected net result (profit or loss) one year after launching?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'loss_over_50',
            value: 'Loss greater than 50% of revenue',
          },
          {
            id: 'loss_50_to_0',
            value: 'Loss between 50% and 0%',
          },
          {
            id: 'break_even_or_profit',
            value: 'Break-even or profit',
          },
        ],
        validation:
          "z.enum(['loss_over_50', 'loss_50_to_0', 'break_even_or_profit'], { required_error: 'Projected result is required' })",
      },
    },
    nextNode: '41993d54-60ce-456c-a616-b969f4c4d59d',
  },
  q4: {
    sectionTitle: 'OpEx',
    sectionId: '41993d54-60ce-456c-a616-b969f4c4d59d',
    firstField: '4b2fd56b-7d38-41d6-81da-1f6ebff46200',
    fields: {
      projectedOpex: {
        id: '4b2fd56b-7d38-41d6-81da-1f6ebff46200',
        type: 'dropdown',
        label: 'What is your projected OpEx ratio one year after launch?',
        required: true,
        nextField: 'balanceSheet',
        options: [
          {
            id: 'over_100',
            value: '> 100% of revenue spent on OpEx',
          },
          {
            id: '70_to_100',
            value: '70-100% of revenue spent on OpEx',
          },
          {
            id: 'under_70',
            value: '< 70% of revenue spent on OpEx',
          },
        ],
        validation:
          "z.enum(['over_100', '70_to_100', 'under_70'], { required_error: 'Projected OpEx is required' })",
      },
      balanceSheet: {
        id: '5be7d496-38e7-4c81-b6ff-2200daba65c9',
        type: 'file',
        label: 'Upload Balance Sheet statement (PDF or excel file, no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'Balance sheet is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
    },
    nextNode: 'f90686b8-877b-402b-9e5c-c1ca7fd9c11f',
  },
  q5: {
    sectionTitle: 'Burn Rate',
    sectionId: 'f90686b8-877b-402b-9e5c-c1ca7fd9c11f',
    firstField: '4d4dbb17-fd41-4264-8b42-d5fc94afc860',
    fields: {
      runwayBurnRate: {
        id: '4d4dbb17-fd41-4264-8b42-d5fc94afc860',
        type: 'dropdown',
        label: 'What is your current monthly cash burn rate? (Time-Based)',
        required: true,
        nextField: null,
        options: [
          {
            id: 'under_6_months',
            value: '<6 months of runway',
          },
          {
            id: '6_to_12_months',
            value: '6-12 months of runway',
          },
          {
            id: 'over_12_months',
            value: '>12 months of runway',
          },
        ],
        validation:
          "z.enum(['under_6_months', '6_to_12_months', 'over_12_months'], { required_error: 'Burn rate is required' })",
      },
    },
    nextNode: 'd7160be4-9aae-4ead-ad5e-58df61b21615',
  },
  q6: {
    sectionTitle: 'Liquidity',
    sectionId: 'd7160be4-9aae-4ead-ad5e-58df61b21615',
    firstField: '4e98b341-a2b3-4241-9909-1c350b17cf0b',
    fields: {
      projectedCurrentRatio: {
        id: '4e98b341-a2b3-4241-9909-1c350b17cf0b',
        type: 'dropdown',
        label: 'What is your projected liquidity ratio 1 year after launching?',
        required: true,
        nextField: 'projectedQuickRatio',
        options: [
          {
            id: 'under_1',
            value: '< 1.0',
          },
          {
            id: '1_to_1_5',
            value: '1.0 - 1.5',
          },
          {
            id: 'over_1_5',
            value: '> 1.5',
          },
        ],
        validation:
          "z.enum(['under_1', '1_to_1_5', 'over_1_5'], { required_error: 'Current ratio is required' })",
      },
      projectedQuickRatio: {
        id: '7d1dbb78-cf9a-45ec-be1e-383629803b33',
        type: 'dropdown',
        label:
          'What is your projected quick liquidity ratio 1 year after launching?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'under_0_7',
            value: '< 0.7',
          },
          {
            id: '0_7_to_1',
            value: '0.7 - 1.0',
          },
          {
            id: 'over_1',
            value: '> 1.0',
          },
        ],
        validation:
          "z.enum(['under_0_7', '0_7_to_1', 'over_1'], { required_error: 'Quick ratio is required' })",
      },
    },
    nextNode: 'a77d6dc8-fb61-4d9a-b6c4-030aeed49e87',
  },
  q7: {
    sectionTitle: 'Cash Runway',
    sectionId: 'a77d6dc8-fb61-4d9a-b6c4-030aeed49e87',
    firstField: '120e0dd4-572e-4d34-b4b6-65d3b5906a43',
    fields: {
      projectedRunway: {
        id: '120e0dd4-572e-4d34-b4b6-65d3b5906a43',
        type: 'dropdown',
        label: 'What is your projected cash runway time after launching?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'under_6_months',
            value: 'Less than 6 months',
          },
          {
            id: '6_to_12_months',
            value: '6 to 12 months',
          },
          {
            id: 'over_12_months',
            value: 'More than 12 months',
          },
        ],
        validation:
          "z.enum(['under_6_months', '6_to_12_months', 'over_12_months'], { required_error: 'Projected runway is required' })",
      },
    },
    nextNode: '6acd1000-cda0-4680-8d7a-ed0c629c7853',
  },
  q8: {
    sectionTitle: 'Debt Management',
    sectionId: '6acd1000-cda0-4680-8d7a-ed0c629c7853',
    firstField: 'fa83baa6-a3ff-4eb7-8eb0-fa0c48fc7add',
    fields: {
      financingHistory: {
        id: 'fa83baa6-a3ff-4eb7-8eb0-fa0c48fc7add',
        type: 'dropdown',
        label: 'Did the company previously opt for debt or equity financing?',
        required: true,
        nextField: 'auditReport',
        options: [
          {
            id: 'none',
            value: 'No',
          },
          {
            id: 'debt',
            value: 'Opted for debt financing',
          },
          {
            id: 'both',
            value: 'Used both debt and equity',
          },
          {
            id: 'equity',
            value: 'Opted for equity financing',
          },
        ],
        validation:
          "z.enum(['none', 'debt', 'both', 'equity'], { required_error: 'Financing history is required' })",
      },
      auditReport: {
        id: '6cd8f20d-c176-49b3-b3e5-503a6fd4a6c0',
        type: 'file',
        label: 'Upload Annual Audit report (PDF Only - ORIGINAL COPY)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf'],
        validation:
          "z.string().min(1, 'Audit report is required').refine((val) => val.endsWith('.pdf'), 'File must be PDF format')",
      },
    },
    nextNode: null,
  },
};
