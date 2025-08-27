const F_EarlyVC = {
  q1: {
    sectionTitle: 'Valuation',
    sectionId: '1eb4cb99-7875-406d-97a5-6beb6e15e6d2',
    firstField: '55ad4065-8f11-4d43-8dcb-be69d8bbbd9c',
    fields: {
      valuationBracket: {
        id: '55ad4065-8f11-4d43-8dcb-be69d8bbbd9c',
        type: 'text',
        label:
          "What is your company's estimated valuation brackets? (Insert estimated bracket - lower + upper bounds in USD)",
        required: true,
        nextField: 'capTable',
        placeholder: 'TBD',
        validation: "z.string().min(1, 'Valuation bracket is required')",
      },
      capTable: {
        id: 'e4a20170-a296-4e2c-9a0a-b77668c14ba2',
        type: 'file',
        label: 'Cap table - Upload PDF or excel file (no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'Cap table is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
    },
    nextNode: '36738a37-0b4c-431b-8888-77cb5894a0c7',
  },
  q2: {
    sectionTitle: 'Revenue Growth',
    sectionId: '36738a37-0b4c-431b-8888-77cb5894a0c7',
    firstField: '539a3812-a43b-4f51-b25c-7b7eb9919cd8',
    fields: {
      yoyGrowth: {
        id: '539a3812-a43b-4f51-b25c-7b7eb9919cd8',
        type: 'dropdown',
        label: 'What was your year-over-year (YoY) revenue growth?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'under_20',
            value: '< 20%',
          },
          {
            id: '20_to_50',
            value: '20-50%',
          },
          {
            id: 'over_50',
            value: '> 50%',
          },
        ],
        validation:
          "z.enum(['< 20%', '20-50%', '> 50%'], { required_error: 'YoY growth selection is required' })",
      },
    },
    nextNode: 'b2b0e781-0348-446d-916c-18447e08b847',
  },
  q3: {
    sectionTitle: 'Net Result (Net Profit/Loss)',
    sectionId: 'b2b0e781-0348-446d-916c-18447e08b847',
    firstField: '76718dfe-8103-4437-a7df-449d72baa08d',
    fields: {
      profitStatus: {
        id: '76718dfe-8103-4437-a7df-449d72baa08d',
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
        id: 'f34ef3b6-5f83-46ec-a2f8-47c55dc1de2b',
        type: 'file',
        label: 'Upload P&L Statement (PDF or excel file, no csv)',
        required: true,
        nextField: 'profitTimeline',
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'P&L statement is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
      profitTimeline: {
        id: '2c491a75-c0ba-4266-ab60-3d6dd6189266',
        type: 'dropdown',
        label:
          'In how many years do you expect your revenue to surpass expenses and generate net profit?',
        required: true,
        nextField: 'netResult',
        options: [
          {
            id: 'over_4_years',
            value: 'More than 4 years',
          },
          {
            id: '3_to_4_years',
            value: '3 to 4 Years',
          },
          {
            id: 'under_3_years',
            value: 'Less than 3 years',
          },
        ],
        validation:
          "z.enum(['More than 4 years', '3 to 4 Years', 'Less than 3 years'], { required_error: 'Profit timeline selection is required' })",
      },
      netResult: {
        id: '1cde9608-9213-4925-a10e-6a526ada33ac',
        type: 'dropdown',
        label: 'What is your current net result (profit or loss)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'loss_over_25',
            value: 'Loss greater than 25% of revenue',
          },
          {
            id: 'loss_25_to_0',
            value: 'Loss between 25% and 0%',
          },
          {
            id: 'break_even',
            value: 'Break-even or profit <5%',
          },
          {
            id: 'profit_over_5',
            value: 'Profit > 5%',
          },
        ],
        validation:
          "z.enum(['Loss greater than 25% of revenue', 'Loss between 25% and 0%', 'Break-even or profit <5%', 'Profit > 5%'], { required_error: 'Net result selection is required' })",
      },
    },
    nextNode: '0ad13937-52ab-433e-9eed-66f6cc0989e1',
  },
  q4: {
    sectionTitle: 'OpEx',
    sectionId: '0ad13937-52ab-433e-9eed-66f6cc0989e1',
    firstField: '92f5f8c2-c81a-4487-85ed-2e406b5dd473',
    fields: {
      opexRatio: {
        id: '92f5f8c2-c81a-4487-85ed-2e406b5dd473',
        type: 'dropdown',
        label: 'What is your current OpEx ratio?',
        required: true,
        nextField: 'balanceSheet',
        options: [
          {
            id: 'over_80',
            value: '> 80% of revenue spent on OpEx',
          },
          {
            id: '50_to_80',
            value: '50-80% of revenue spent on OpEx',
          },
          {
            id: 'under_50',
            value: '< 50% of revenue spent on OpEx',
          },
        ],
        validation:
          "z.enum(['> 80% of revenue spent on OpEx', '50-80% of revenue spent on OpEx', '< 50% of revenue spent on OpEx'], { required_error: 'OpEx ratio selection is required' })",
      },
      balanceSheet: {
        id: '88a243cb-d466-4659-a593-37195fba2b5e',
        type: 'file',
        label: 'Upload Balance Sheet statement (PDF or excel file, no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'Balance sheet is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
    },
    nextNode: 'fbb87bd3-073a-4977-bf0c-7669f05bbb10',
  },
  q5: {
    sectionTitle: 'Burn Rate',
    sectionId: 'fbb87bd3-073a-4977-bf0c-7669f05bbb10',
    firstField: '70fd1ed7-4eca-4b3e-9b79-fda1ed06fb7a',
    fields: {
      burnRate: {
        id: '70fd1ed7-4eca-4b3e-9b79-fda1ed06fb7a',
        type: 'dropdown',
        label: 'What is your current monthly cash burn rate?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'over_120',
            value: '>120% of revenue',
          },
          {
            id: '80_to_120',
            value: '80%-120% of revenue',
          },
          {
            id: 'under_80',
            value: '<80% of revenue',
          },
        ],
        validation:
          "z.enum(['>120% of revenue', '80%-120% of revenue', '<80% of revenue'], { required_error: 'Burn rate selection is required' })",
      },
    },
    nextNode: 'e4ed5160-7643-47db-8984-26feb308b442',
  },
  q6: {
    sectionTitle: 'Liquidity',
    sectionId: 'e4ed5160-7643-47db-8984-26feb308b442',
    firstField: 'c58266a2-b7d2-4adc-9cdb-4690b2f358b7',
    fields: {
      currentRatio: {
        id: 'c58266a2-b7d2-4adc-9cdb-4690b2f358b7',
        type: 'dropdown',
        label: 'What is your current liquidity ratio?',
        required: true,
        nextField: 'quickRatio',
        options: [
          {
            id: 'under_1_2',
            value: '< 1.2',
          },
          {
            id: '1_2_to_1_8',
            value: '1.2 - 1.8',
          },
          {
            id: 'over_1_8',
            value: '> 1.8',
          },
        ],
        validation:
          "z.enum(['< 1.2', '1.2 - 1.8', '> 1.8'], { required_error: 'Current ratio selection is required' })",
      },
      quickRatio: {
        id: '5737b175-0589-45ab-af9d-2be3888e23aa',
        type: 'dropdown',
        label: 'What is your quick liquidity ratio?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'under_0_9',
            value: '< 0.9',
          },
          {
            id: '0_9_to_1_3',
            value: '0.9 - 1.3',
          },
          {
            id: 'over_1_3',
            value: '> 1.3',
          },
        ],
        validation:
          "z.enum(['< 0.9', '0.9 - 1.3', '> 1.3'], { required_error: 'Quick ratio selection is required' })",
      },
    },
    nextNode: '5db2c15b-119f-4a54-af18-d5b867f76adb',
  },
  q7: {
    sectionTitle: 'Cash Runway',
    sectionId: '5db2c15b-119f-4a54-af18-d5b867f76adb',
    firstField: '92e03be2-af02-41fb-9aba-f239f1597fb8',
    fields: {
      runwayTime: {
        id: '92e03be2-af02-41fb-9aba-f239f1597fb8',
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
    nextNode: 'a5c2f0ac-51e4-40ae-bb9c-4fc58330ab16',
  },
  q8: {
    sectionTitle: 'Debt Management',
    sectionId: 'a5c2f0ac-51e4-40ae-bb9c-4fc58330ab16',
    firstField: 'fda4bfc2-fa58-427a-a3ec-f62ccade09be',
    fields: {
      financingType: {
        id: 'fda4bfc2-fa58-427a-a3ec-f62ccade09be',
        type: 'dropdown',
        label: 'Did the company previously opt for debt or equity financing?',
        required: true,
        nextField: 'debtEquityRatio',
        options: [
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
          "z.enum(['Opted for debt financing', 'Used both debt and equity', 'Opted for equity financing'], { required_error: 'Financing type selection is required' })",
      },
      debtEquityRatio: {
        id: '550deb23-9a1d-4eb8-b8a1-3c212bce98a9',
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
    nextNode: 'b2da80f6-085a-4e27-875f-6c898a762377',
  },
  q9: {
    sectionTitle: 'Operational Efficiency',
    sectionId: 'b2da80f6-085a-4e27-875f-6c898a762377',
    firstField: '254ad4db-095e-4c3b-9fae-76c5b318a1fc',
    fields: {
      arTurnover: {
        id: '254ad4db-095e-4c3b-9fae-76c5b318a1fc',
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
          "z.enum(['Less than 3 times per year (Slow collection)', 'Between 3 and 6 times per year (Moderate collection)', 'More than 6 times per year (Efficient collection)'], { required_error: 'AR turnover selection is required' })",
      },
      auditReport: {
        id: 'ab2b1396-0710-4d54-8a1b-f3bf82d18879',
        type: 'file',
        label: 'Upload Annual Audit report (PDF Only - ORIGINAL COPY)',
        required: true,
        nextField: 'apTurnover',
        acceptedFiles: ['pdf'],
        validation:
          "z.string().min(1, 'Audit report is required').refine((val) => val.endsWith('.pdf'), 'File must be PDF format')",
      },
      apTurnover: {
        id: 'aceaa4a4-f5c0-4c61-8a46-cda1bd19e52f',
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
    nextNode: '1c91519e-aa84-49b2-bac3-8647cae96afc',
  },
  q10: {
    sectionTitle: 'Tax Efficiency',
    sectionId: '1c91519e-aa84-49b2-bac3-8647cae96afc',
    firstField: '28a16370-8e11-4e3c-a68f-0b4d8f6587d7',
    fields: {
      taxRate: {
        id: '28a16370-8e11-4e3c-a68f-0b4d8f6587d7',
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
