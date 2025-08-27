const F_PrivateEquity = {
  q1: {
    sectionTitle: 'Valuation',
    sectionId: 'b782fe41-fe2a-444e-9cd1-1ae8e2cc1938',
    firstField: '7723b252-fdd8-48c4-a52c-f62d8c78f9c7',
    fields: {
      valuationBracket: {
        id: '7723b252-fdd8-48c4-a52c-f62d8c78f9c7',
        type: 'text',
        label:
          "What is your company's estimated valuation brackets? (Insert estimated bracket - lower + upper bounds in USD)",
        required: true,
        nextField: 'capTable',
        placeholder: 'TBD',
        validation: "z.string().min(1, 'Valuation bracket is required')",
      },
      capTable: {
        id: '1d0aa6ab-e9dd-459c-8175-7cc3ee3e5a5d',
        type: 'file',
        label: 'Cap table - Upload PDF or excel file (no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'Cap table is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
    },
    nextNode: '35da2278-ad41-4eed-8d77-ba36a438248c',
  },
  q2: {
    sectionTitle: 'Revenue Growth',
    sectionId: '35da2278-ad41-4eed-8d77-ba36a438248c',
    firstField: '9824eb00-1278-4909-9ecc-994715408cc3',
    fields: {
      yoyGrowth: {
        id: '9824eb00-1278-4909-9ecc-994715408cc3',
        type: 'dropdown',
        label: 'What was your year-over-year (YoY) revenue growth?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'under_10',
            value: '< 10%',
          },
          {
            id: '10_to_25',
            value: '10-25%',
          },
          {
            id: 'over_25',
            value: '> 25%',
          },
        ],
        validation:
          "z.enum(['< 10%', '10-25%', '> 25%'], { required_error: 'YoY growth selection is required' })",
      },
    },
    nextNode: '5cdf841b-e681-4817-b060-581af30f4411',
  },
  q3: {
    sectionTitle: 'Net Result (Net Profit/Loss)',
    sectionId: '5cdf841b-e681-4817-b060-581af30f4411',
    firstField: '6164ca55-2e96-4e53-aec1-180a7aa701d1',
    fields: {
      profitStatus: {
        id: '6164ca55-2e96-4e53-aec1-180a7aa701d1',
        type: 'dropdown',
        label:
          'Has the generated revenue resulted in a net profit (i.e., revenue surpassing expenses)?',
        required: true,
        nextField: 'plStatement',
        options: [
          {
            id: 'no',
            value: 'No',
          },
          {
            id: 'yes',
            value: 'Yes',
          },
        ],
        validation:
          "z.enum(['No', 'Yes'], { required_error: 'Profit status selection is required' })",
      },
      plStatement: {
        id: '19d7002f-07d3-483f-be42-8a80da561e08',
        type: 'file',
        label: 'Upload P&L Statement (PDF or excel file, no csv)',
        required: true,
        nextField: 'netResult',
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'P&L statement is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
      netResult: {
        id: 'a3fa1d5c-fcc7-4972-b46a-626a4d88a95e',
        type: 'dropdown',
        label: 'What is your current net result (profit or loss)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'loss_over_10',
            value: 'Loss greater than 10% of revenue',
          },
          {
            id: 'loss_10_to_0',
            value: 'Loss between 10% and 0%',
          },
          {
            id: 'break_even',
            value: 'Break-even or profit <15%',
          },
          {
            id: 'profit_over_15',
            value: 'Profit > 15%',
          },
        ],
        validation:
          "z.enum(['Loss greater than 10% of revenue', 'Loss between 10% and 0%', 'Break-even or profit <15%', 'Profit > 15%'], { required_error: 'Net result selection is required' })",
      },
    },
    nextNode: 'd5dc1002-2b7d-43c7-be40-03239fa93504',
  },
  q4: {
    sectionTitle: 'OpEx',
    sectionId: 'd5dc1002-2b7d-43c7-be40-03239fa93504',
    firstField: 'fa84e718-bc1e-4036-9613-2954aeb78176',
    fields: {
      opexRatio: {
        id: 'fa84e718-bc1e-4036-9613-2954aeb78176',
        type: 'dropdown',
        label: 'What is your current OpEx ratio?',
        required: true,
        nextField: 'balanceSheet',
        options: [
          {
            id: 'over_60',
            value: '> 60% of revenue spent on OpEx',
          },
          {
            id: '30_to_60',
            value: '30-60% of revenue spent on OpEx',
          },
          {
            id: 'under_30',
            value: '< 30% of revenue spent on OpEx',
          },
        ],
        validation:
          "z.enum(['> 60% of revenue spent on OpEx', '30-60% of revenue spent on OpEx', '< 30% of revenue spent on OpEx'], { required_error: 'OpEx ratio selection is required' })",
      },
      balanceSheet: {
        id: '8c93c8f2-a377-473e-bf0b-562dc165b107',
        type: 'file',
        label: 'Upload Balance Sheet statement (PDF or excel file, no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'Balance sheet is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
    },
    nextNode: 'f42eb02a-0516-48e7-9c01-8ca1859f1829',
  },
  q5: {
    sectionTitle: 'Burn Rate',
    sectionId: 'f42eb02a-0516-48e7-9c01-8ca1859f1829',
    firstField: '86afed90-53a4-4390-a535-d230122d8982',
    fields: {
      burnRate: {
        id: '86afed90-53a4-4390-a535-d230122d8982',
        type: 'dropdown',
        label: 'What is your current monthly cash burn rate?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'over_80',
            value: '>80% of revenue',
          },
          {
            id: '40_to_80',
            value: '40%-80% of revenue',
          },
          {
            id: 'under_40',
            value: '<40% of revenue',
          },
        ],
        validation:
          "z.enum(['>80% of revenue', '40%-80% of revenue', '<40% of revenue'], { required_error: 'Burn rate selection is required' })",
      },
    },
    nextNode: '50854d1d-5125-478b-80ad-3d8bb72f8fff',
  },
  q6: {
    sectionTitle: 'Liquidity',
    sectionId: '50854d1d-5125-478b-80ad-3d8bb72f8fff',
    firstField: '9945c561-c672-4d90-b9ae-d4946cbba357',
    fields: {
      currentRatio: {
        id: '9945c561-c672-4d90-b9ae-d4946cbba357',
        type: 'dropdown',
        label: 'What is your current liquidity ratio?',
        required: true,
        nextField: 'quickRatio',
        options: [
          {
            id: 'under_1_8',
            value: '< 1.8',
          },
          {
            id: '1_8_to_2_5',
            value: '1.8 - 2.5',
          },
          {
            id: 'over_2_5',
            value: '> 2.5',
          },
        ],
        validation:
          "z.enum(['< 1.8', '1.8 - 2.5', '> 2.5'], { required_error: 'Current ratio selection is required' })",
      },
      quickRatio: {
        id: '43d15911-4624-4742-a65b-2421aa76439e',
        type: 'dropdown',
        label: 'What is your quick liquidity ratio?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'under_1_2',
            value: '< 1.2',
          },
          {
            id: '1_2_to_2',
            value: '1.2 - 2.0',
          },
          {
            id: 'over_2',
            value: '> 2.0',
          },
        ],
        validation:
          "z.enum(['< 1.2', '1.2 - 2.0', '> 2.0'], { required_error: 'Quick ratio selection is required' })",
      },
    },
    nextNode: 'eae7e875-7281-4cbe-8828-5963c57e78d2',
  },
  q7: {
    sectionTitle: 'Cash Runway',
    sectionId: 'eae7e875-7281-4cbe-8828-5963c57e78d2',
    firstField: '8c428732-b4d1-4ee5-af8c-eab595de89f2',
    fields: {
      runwayTime: {
        id: '8c428732-b4d1-4ee5-af8c-eab595de89f2',
        type: 'dropdown',
        label: 'How many months of runway do you currently have?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'under_6',
            value: 'Less than 6 months',
          },
          {
            id: '6_to_12',
            value: '6 to 12 months',
          },
          {
            id: '12_to_18',
            value: '12-18 months',
          },
          {
            id: 'over_18',
            value: 'More than 18 months',
          },
        ],
        validation:
          "z.enum(['Less than 6 months', '6 to 12 months', '12-18 months', 'More than 18 months'], { required_error: 'Runway time selection is required' })",
      },
    },
    nextNode: '0f4f6c7d-d199-4064-860f-540e5a7ffcf9',
  },
  q8: {
    sectionTitle: 'Debt Management',
    sectionId: '0f4f6c7d-d199-4064-860f-540e5a7ffcf9',
    firstField: '0dd102eb-42e7-4061-8691-66bbe26067d5',
    fields: {
      financingType: {
        id: '0dd102eb-42e7-4061-8691-66bbe26067d5',
        type: 'dropdown',
        label: 'Did the company previously opt for debt or equity financing?',
        required: true,
        nextField: 'debtEquityRatio',
        options: [
          {
            id: 'equity',
            value: 'Opted for equity financing',
          },
          {
            id: 'both',
            value: 'Used both debt and equity',
          },
          {
            id: 'debt',
            value: 'Opted for debt financing',
          },
        ],
        validation:
          "z.enum(['Opted for equity financing', 'Used both debt and equity', 'Opted for debt financing'], { required_error: 'Financing type selection is required' })",
      },
      debtEquityRatio: {
        id: 'bff98ade-6b9b-4914-a084-e9cd80b9293e',
        type: 'dropdown',
        label: 'What is your current debt-to-equity ratio?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'high_debt',
            value: 'More than 1 (High debt)',
          },
          {
            id: 'moderate_debt',
            value: 'Between 0.5 and 1 (Moderate debt)',
          },
          {
            id: 'low_debt',
            value: 'Less than 0.5 (Low debt)',
          },
        ],
        validation:
          "z.enum(['More than 1 (High debt)', 'Between 0.5 and 1 (Moderate debt)', 'Less than 0.5 (Low debt)'], { required_error: 'Debt-to-equity ratio selection is required' })",
      },
    },
    nextNode: '68af604d-af9b-485a-b1a0-caac2a17e8bc',
  },
  q9: {
    sectionTitle: 'Operational Efficiency',
    sectionId: '68af604d-af9b-485a-b1a0-caac2a17e8bc',
    firstField: '0bd52739-6dd0-41e9-bddf-7bc0791960f8',
    fields: {
      arTurnover: {
        id: '0bd52739-6dd0-41e9-bddf-7bc0791960f8',
        type: 'dropdown',
        label: 'What is your AR turnover ratio?',
        required: true,
        nextField: 'auditReport',
        options: [
          {
            id: 'slow_collection',
            value: 'Less than 3 times per year (Slow collection)',
          },
          {
            id: 'moderate_collection',
            value: 'Between 3 and 6 times per year (Moderate collection)',
          },
          {
            id: 'efficient_collection',
            value: 'More than 6 times per year (Efficient collection)',
          },
        ],
        validation:
          "z.enum(['Less than 3 times per year (Slow collection)', 'Between 3 and 6 times per year (Moderate collection', 'More than 6 times per year (Efficient collection)'], { required_error: 'AR turnover selection is required' })",
      },
      auditReport: {
        id: '912c2044-7d00-442a-b2f4-9351134d4450',
        type: 'file',
        label: 'Upload Annual Audit report (PDF Only - ORIGINAL COPY)',
        required: true,
        nextField: 'apTurnover',
        acceptedFiles: ['pdf'],
        validation:
          "z.string().min(1, 'Audit report is required').refine((val) => val.endsWith('.pdf'), 'File must be PDF format')",
      },
      apTurnover: {
        id: '30ff83da-7805-44c9-bd16-c551137d0a22',
        type: 'dropdown',
        label: 'What is your AP turnover ratio?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'slow_payments',
            value: 'Less than 3 times per year (Slow payments)',
          },
          {
            id: 'moderate_payments',
            value: 'Between 3 and 6 times per year (Moderate payments)',
          },
          {
            id: 'fast_payments',
            value:
              'More than 6 times per year (Fast payments, possibly too aggressive)',
          },
        ],
        validation:
          "z.enum(['Less than 3 times per year (Slow payments)', 'Between 3 and 6 times per year (Moderate payments)', 'More than 6 times per year (Fast payments, possibly too aggressive)'], { required_error: 'AP turnover selection is required' })",
      },
    },
    nextNode: '95a261e1-cd07-47dd-ab46-366fff519291',
  },
  q10: {
    sectionTitle: 'Tax Efficiency',
    sectionId: '95a261e1-cd07-47dd-ab46-366fff519291',
    firstField: 'f0d17da6-6222-4d86-8901-29953303c51f',
    fields: {
      taxRate: {
        id: 'f0d17da6-6222-4d86-8901-29953303c51f',
        type: 'dropdown',
        label: "What is your company's tax effective rate?",
        required: true,
        nextField: null,
        options: [
          {
            id: 'under_10',
            value: 'Less than 10%',
          },
          {
            id: '10_to_20',
            value: 'Between 10% and 20%',
          },
          {
            id: 'over_20',
            value: 'More than 20%',
          },
        ],
        validation:
          "z.enum(['Less than 10%', 'Between 10% and 20%', 'More than 20%'], { required_error: 'Tax rate selection is required' })",
      },
    },
    nextNode: null,
  },
};
