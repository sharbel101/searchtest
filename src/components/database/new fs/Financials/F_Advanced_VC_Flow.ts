const F_AdvancedVC = {
  q1: {
    sectionTitle: 'Valuation',
    sectionId: 'aaf41050-74b6-4ff1-bc1c-6c9f0101a60d',
    firstField: 'cc7d039d-6225-4372-ae27-735725278012',
    fields: {
      valuationBracket: {
        id: 'cc7d039d-6225-4372-ae27-735725278012',
        type: 'text',
        label:
          "What is your company's estimated valuation brackets? (Insert estimated bracket - lower + upper bounds in USD)",
        required: true,
        nextField: 'capTable',
        placeholder: 'TBD',
        validation: "z.string().min(1, 'Valuation bracket is required')",
      },
      capTable: {
        id: 'f5fc1473-9c54-41d4-b1db-f20781f9e2a7',
        type: 'file',
        label: 'Cap table - Upload PDF or excel file (no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'Cap table is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
    },
    nextNode: '953ced94-cab7-402b-be87-021238314ff7',
  },
  q2: {
    sectionTitle: 'Revenue Growth',
    sectionId: '953ced94-cab7-402b-be87-021238314ff7',
    firstField: '0addab25-e288-497b-b7cf-a6adbe239283',
    fields: {
      yoyGrowth: {
        id: '0addab25-e288-497b-b7cf-a6adbe239283',
        type: 'dropdown',
        label: 'What was your year-over-year (YoY) revenue growth?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'less_15',
            value: '< 15%',
          },
          {
            id: '15_to_40',
            value: '15-40%',
          },
          {
            id: 'more_40',
            value: '> 40%',
          },
        ],
        validation:
          "z.enum(['< 15%', '15-40%', '> 40%'], { required_error: 'YoY revenue growth is required' })",
      },
    },
    nextNode: '72b3b9a6-460b-431b-81b8-922cb7bddf8c',
  },
  q3: {
    sectionTitle: 'Net Result (Net Profit/Loss)',
    sectionId: '72b3b9a6-460b-431b-81b8-922cb7bddf8c',
    firstField: 'ee91a23c-abdd-4a2c-b4d4-8ae320f3a715',
    fields: {
      profitStatus: {
        id: 'ee91a23c-abdd-4a2c-b4d4-8ae320f3a715',
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
          "z.enum(['No', 'Yes'], { required_error: 'Profit status is required' })",
      },
      plStatement: {
        id: '6a1cb488-eb6c-4fe4-850f-7ff180fc7de2',
        type: 'file',
        label: 'Upload P&L Statement (PDF or excel file, no csv)',
        required: true,
        nextField: 'netResult',
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'P&L statement is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
      netResult: {
        id: 'cdb991c1-71eb-4b02-9a74-8a469cff5cff',
        type: 'dropdown',
        label: 'What is your current net result (profit or loss)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'loss_20plus',
            value: 'Loss greater than 20% of revenue',
          },
          {
            id: 'loss_20_to_0',
            value: 'Loss between 20% and 0%',
          },
          {
            id: 'break_even',
            value: 'Break-even or profit <10%',
          },
          {
            id: 'profit_10plus',
            value: 'Profit > 10%',
          },
        ],
        validation:
          "z.enum(['Loss greater than 20% of revenue', 'Loss between 20% and 0%', 'Break-even or profit <10%', 'Profit > 10%'], { required_error: 'Net result is required' })",
      },
    },
    nextNode: '105c6bce-7da8-4cc4-b068-f0044c94b640',
  },
  q4: {
    sectionTitle: 'OpEx',
    sectionId: '105c6bce-7da8-4cc4-b068-f0044c94b640',
    firstField: '48527298-c1af-46e7-b3e5-1ab771859d71',
    fields: {
      opexRatio: {
        id: '48527298-c1af-46e7-b3e5-1ab771859d71',
        type: 'dropdown',
        label: 'What is your current OpEx ratio?',
        required: true,
        nextField: 'balanceSheet',
        options: [
          {
            id: 'over_70',
            value: '> 70% of revenue spent on OpEx',
          },
          {
            id: '40_to_70',
            value: '40-70% of revenue spent on OpEx',
          },
          {
            id: 'under_40',
            value: '< 40% of revenue spent on OpEx',
          },
        ],
        validation:
          "z.enum(['> 70% of revenue spent on OpEx', '40-70% of revenue spent on OpEx', '< 40% of revenue spent on OpEx'], { required_error: 'OpEx ratio is required' })",
      },
      balanceSheet: {
        id: 'a8e7dbaa-86f6-45a7-9ea6-c867af94c2cb',
        type: 'file',
        label: 'Upload Balance Sheet statement (PDF or excel file, no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'Balance sheet is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
    },
    nextNode: '9b1755c1-24c0-427f-aa6c-e7fb9385db22',
  },
  q5: {
    sectionTitle: 'Burn Rate',
    sectionId: '9b1755c1-24c0-427f-aa6c-e7fb9385db22',
    firstField: '80e446a9-19a1-4c7e-8ef8-c4b7ff74cacd',
    fields: {
      burnRate: {
        id: '80e446a9-19a1-4c7e-8ef8-c4b7ff74cacd',
        type: 'dropdown',
        label: 'What is your current monthly cash burn rate?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'over_100',
            value: '>100% of revenue',
          },
          {
            id: '60_to_100',
            value: '60%-100% of revenue',
          },
          {
            id: 'under_60',
            value: '<60% of revenue',
          },
        ],
        validation:
          "z.enum(['>100% of revenue', '60%-100% of revenue', '<60% of revenue'], { required_error: 'Burn rate is required' })",
      },
    },
    nextNode: 'c4959ac8-db3b-4779-9bc9-0ac7159105dd',
  },
  q6: {
    sectionTitle: 'Liquidity',
    sectionId: 'c4959ac8-db3b-4779-9bc9-0ac7159105dd',
    firstField: '6b1dd493-d483-4e94-a05c-846f68ce7b57',
    fields: {
      currentRatio: {
        id: '6b1dd493-d483-4e94-a05c-846f68ce7b57',
        type: 'dropdown',
        label: 'What is your current liquidity ratio?',
        required: true,
        nextField: 'quickRatio',
        options: [
          {
            id: 'under_1_5',
            value: '< 1.5',
          },
          {
            id: '1_5_to_2',
            value: '1.5 - 2.0',
          },
          {
            id: 'over_2',
            value: '> 2.0',
          },
        ],
        validation:
          "z.enum(['< 1.5', '1.5 - 2.0', '> 2.0'], { required_error: 'Current ratio is required' })",
      },
      quickRatio: {
        id: '1e7db442-47a2-4a99-8ee5-475c7789bca6',
        type: 'dropdown',
        label: 'What is your quick liquidity ratio?',
        required: true,
        nextField: null,
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
          "z.enum(['< 1.0', '1.0 - 1.5', '> 1.5'], { required_error: 'Quick ratio is required' })",
      },
    },
    nextNode: '4d1d8b65-0ff3-4095-93fc-c4c599d346f1',
  },
  q7: {
    sectionTitle: 'Cash Runway',
    sectionId: '4d1d8b65-0ff3-4095-93fc-c4c599d346f1',
    firstField: '7588afca-5de9-4141-a0a2-c012f9d0ce0d',
    fields: {
      runwayTime: {
        id: '7588afca-5de9-4141-a0a2-c012f9d0ce0d',
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
          "z.enum(['Less than 6 months', '6 to 12 months', '12-18 months', 'More than 18 months'], { required_error: 'Runway time is required' })",
      },
    },
    nextNode: '5bdb1224-70c0-41c4-9fef-775a3a071d4e',
  },
  q8: {
    sectionTitle: 'Debt Management',
    sectionId: '5bdb1224-70c0-41c4-9fef-775a3a071d4e',
    firstField: '41b26e77-ca93-42db-9eef-ee432b8d6c7c',
    fields: {
      financingType: {
        id: '41b26e77-ca93-42db-9eef-ee432b8d6c7c',
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
            id: 'debt',
            value: 'Opted for debt financing',
          },
          {
            id: 'both',
            value: 'Used both debt and equity',
          },
        ],
        validation:
          "z.enum(['Opted for equity financing', 'Opted for debt financing', 'Used both debt and equity'], { required_error: 'Financing type is required' })",
      },
      debtEquityRatio: {
        id: '7e89ac32-8d1f-49bb-b4cd-b6c6c134c088',
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
          "z.enum(['More than 1 (High debt)', 'Between 0.5 and 1 (Moderate debt)', 'Less than 0.5 (Low debt)'], { required_error: 'Debt-to-equity ratio is required' })",
      },
    },
    nextNode: '5e6a95ac-40ad-4687-8d62-e7f94505ad58',
  },
  q9: {
    sectionTitle: 'Operational Efficiency',
    sectionId: '5e6a95ac-40ad-4687-8d62-e7f94505ad58',
    firstField: '5ae9f6a1-a786-4761-b3a9-a33bf606fbf9',
    fields: {
      arTurnover: {
        id: '5ae9f6a1-a786-4761-b3a9-a33bf606fbf9',
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
          "z.enum(['Less than 3 times per year (Slow collection)', 'Between 3 and 6 times per year (Moderate collection)', 'More than 6 times per year (Efficient collection)'], { required_error: 'AR turnover ratio is required' })",
      },
      auditReport: {
        id: 'eab2a595-ed81-4384-9399-ef4030550287',
        type: 'file',
        label: 'Upload Annual Audit report (PDF Only - ORIGINAL COPY)',
        required: true,
        nextField: 'apTurnover',
        acceptedFiles: ['pdf'],
        validation:
          "z.string().min(1, 'Audit report is required').refine((val) => val.endsWith('.pdf'), 'File must be PDF format')",
      },
      apTurnover: {
        id: 'a55badef-3d0c-4e7c-b812-fc00fae93795',
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
          "z.enum(['Less than 3 times per year (Slow payments)', 'Between 3 and 6 times per year (Moderate payments)', 'More than 6 times per year (Fast payments, possibly too aggressive)'], { required_error: 'AP turnover ratio is required' })",
      },
    },
    nextNode: '418aa3ba-1b4a-4ac3-8e02-dba82a6a0737',
  },
  q10: {
    sectionTitle: 'Tax Efficiency',
    sectionId: '418aa3ba-1b4a-4ac3-8e02-dba82a6a0737',
    firstField: 'd4b07af9-c4b4-4483-9a8d-17a2b22dcb79',
    fields: {
      taxRate: {
        id: 'd4b07af9-c4b4-4483-9a8d-17a2b22dcb79',
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
          "z.enum(['Less than 10%', 'Between 10% and 20%', 'More than 20%'], { required_error: 'Tax rate is required' })",
      },
    },
    nextNode: null,
  },
};
