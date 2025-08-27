const F_AngelPhase = {
  q1: {
    sectionTitle: 'Valuation',
    sectionId: 'f8c4bd68-9642-427b-9d11-94d113606a02',
    firstField: '3046e3b1-55a2-4440-92a1-c996d2266957',
    fields: {
      valuationBracket: {
        id: '3046e3b1-55a2-4440-92a1-c996d2266957',
        type: 'text',
        label:
          "What is your company's estimated valuation brackets? (Insert estimated bracket - lower + upper bounds in USD)",
        required: true,
        nextField: 'capTable',
        placeholder: 'TBD',
        validation: "z.string().min(1, 'Valuation bracket is required')",
      },
      capTable: {
        id: 'fcb2e3c3-5122-4a48-8ad5-a18273717467',
        type: 'file',
        label: 'Cap table - Upload PDF or excel file (no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'Cap table is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
    },
    nextNode: 'f8a4b4fb-8262-4e0b-819a-af26f044d4e2',
  },
  q2: {
    sectionTitle: 'Revenue Growth',
    sectionId: 'f8a4b4fb-8262-4e0b-819a-af26f044d4e2',
    firstField: '528cc4b8-5f76-4130-9785-b4265d5ac278',
    fields: {
      expectedGrowth: {
        id: '528cc4b8-5f76-4130-9785-b4265d5ac278',
        type: 'dropdown',
        label: 'What is your expected revenue growth at year-end?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'under_40',
            value: '< 40%',
          },
          {
            id: '40_to_70',
            value: '40-70%',
          },
          {
            id: 'over_70',
            value: '> 70%',
          },
        ],
        validation:
          "z.enum(['< 40%', '40-70%', '> 70%'], { required_error: 'Revenue growth selection is required' })",
      },
    },
    nextNode: '24e4857e-4e60-4dd5-ba76-21c133a74773',
  },
  q3: {
    sectionTitle: 'Net Result (Net Profit/Loss)',
    sectionId: '24e4857e-4e60-4dd5-ba76-21c133a74773',
    firstField: 'e019b31d-beb6-408a-9dbe-773eb34a5241',
    fields: {
      profitTimeline: {
        id: 'e019b31d-beb6-408a-9dbe-773eb34a5241',
        type: 'dropdown',
        label:
          'In how many years do you expect your revenue to surpass expenses and generate net profit?',
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
          "z.enum(['More than 5 years', '3 to 5 Years', 'Less than 3 years'], { required_error: 'Profit timeline selection is required' })",
      },
      projectedResult: {
        id: '002d6905-f6a7-4b4a-a7cf-9e526c048f08',
        type: 'dropdown',
        label:
          'What is your projected net result (profit or loss) one year after launching?',
        required: true,
        nextField: 'plStatement',
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
          "z.enum(['Loss greater than 50% of revenue', 'Loss between 50% and 0%', 'Break-even or profit'], { required_error: 'Projected result selection is required' })",
      },
      plStatement: {
        id: '51630a94-2c1a-4c91-8ea4-2f1a63043909',
        type: 'file',
        label: 'Upload P&L Statement (PDF or excel file, no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'P&L Statement is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
    },
    nextNode: '916ddcb7-8354-4050-b439-e55dc1e10f8e',
  },
  q4: {
    sectionTitle: 'OpEx',
    sectionId: '916ddcb7-8354-4050-b439-e55dc1e10f8e',
    firstField: '1a014d9e-5b02-4ae4-9a4c-69df4d7a4283',
    fields: {
      projectedOpex: {
        id: '1a014d9e-5b02-4ae4-9a4c-69df4d7a4283',
        type: 'dropdown',
        label: 'What is your projected OpEx ratio one year after launch?',
        required: true,
        nextField: 'balanceSheet',
        options: [
          {
            id: 'over_90',
            value: '> 90% of revenue spent on OpEx',
          },
          {
            id: '60_to_90',
            value: '60-90% of revenue spent on OpEx',
          },
          {
            id: 'under_60',
            value: '< 60% of revenue spent on OpEx',
          },
        ],
        validation:
          "z.enum(['> 90% of revenue spent on OpEx', '60-90% of revenue spent on OpEx', '< 60% of revenue spent on OpEx'], { required_error: 'OpEx ratio selection is required' })",
      },
      balanceSheet: {
        id: '35f9aa6a-f678-401c-ab1d-579b7bf20fd8',
        type: 'file',
        label: 'Upload Balance Sheet statement (PDF or excel file, no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          "z.string().min(1, 'Balance Sheet is required').refine((val) => val.endsWith('.pdf') || val.endsWith('.xlsx') || val.endsWith('.xls'), 'File must be PDF or Excel format')",
      },
    },
    nextNode: 'bc4ee5e3-04b0-4722-8089-e24cc3445131',
  },
  q5: {
    sectionTitle: 'Burn Rate',
    sectionId: 'bc4ee5e3-04b0-4722-8089-e24cc3445131',
    firstField: '8cdf982f-3cab-4df1-bb85-63c942344173',
    fields: {
      runwayBurnRate: {
        id: '8cdf982f-3cab-4df1-bb85-63c942344173',
        type: 'dropdown',
        label: 'What is your current monthly cash burn rate? (Time-Based)',
        required: true,
        nextField: null,
        options: [
          {
            id: 'under_9_months',
            value: '<9 months of runway',
          },
          {
            id: '9_to_14_months',
            value: '9-14 months of runway',
          },
          {
            id: 'over_14_months',
            value: '>14 months of runway',
          },
        ],
        validation:
          "z.enum(['<9 months of runway', '9-14 months of runway', '>14 months of runway'], { required_error: 'Burn rate selection is required' })",
      },
    },
    nextNode: 'd2e88b31-474d-4328-97dd-e1ba5da8379e',
  },
  q6: {
    sectionTitle: 'Liquidity',
    sectionId: 'd2e88b31-474d-4328-97dd-e1ba5da8379e',
    firstField: '69e9bf20-7c66-447b-aefd-5dc468a02a68',
    fields: {
      estimatedCurrentRatio: {
        id: '69e9bf20-7c66-447b-aefd-5dc468a02a68',
        type: 'dropdown',
        label: 'What is your estimated liquidity ratio at year-end?',
        required: true,
        nextField: 'estimatedQuickRatio',
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
          "z.enum(['< 1.0', '1.0 - 1.5', '> 1.5'], { required_error: 'Current ratio selection is required' })",
      },
      estimatedQuickRatio: {
        id: 'ddd0da4d-693b-4c54-a7b7-ead1056af43c',
        type: 'dropdown',
        label: 'What is your estimated quick liquidity ratio at year-end?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'under_0_8',
            value: '< 0.8',
          },
          {
            id: '0_8_to_1_2',
            value: '0.8 - 1.2',
          },
          {
            id: 'over_1_2',
            value: '> 1.2',
          },
        ],
        validation:
          "z.enum(['< 0.8', '0.8 - 1.2', '> 1.2'], { required_error: 'Quick ratio selection is required' })",
      },
    },
    nextNode: 'a90d8a38-3518-412b-bd48-c5ec4fd4cd10',
  },
  q7: {
    sectionTitle: 'Cash Runway',
    sectionId: 'a90d8a38-3518-412b-bd48-c5ec4fd4cd10',
    firstField: 'bfef2509-30f7-4eb9-87d4-3e8febbfbcf8',
    fields: {
      estimatedRunway: {
        id: 'bfef2509-30f7-4eb9-87d4-3e8febbfbcf8',
        type: 'dropdown',
        label: 'What is your estimated cash runway at year-end?',
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
          "z.enum(['Less than 6 months', '6 to 12 months', 'More than 12 months'], { required_error: 'Cash runway selection is required' })",
      },
    },
    nextNode: 'ade2dfd6-1f60-4ea4-9e71-ea621f6953ef',
  },
  q8: {
    sectionTitle: 'Debt Management',
    sectionId: 'ade2dfd6-1f60-4ea4-9e71-ea621f6953ef',
    firstField: 'a9ef211b-22b8-4583-9350-f58229f8188b',
    fields: {
      financingHistory: {
        id: 'a9ef211b-22b8-4583-9350-f58229f8188b',
        type: 'dropdown',
        label: 'Did the company previously opt for debt or equity financing?',
        required: true,
        nextField: null,
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
          "z.enum(['No', 'Opted for debt financing', 'Used both debt and equity', 'Opted for equity financing'], { required_error: 'Financing history selection is required' })",
      },
    },
    nextNode: 'fd49cdc0-7a55-4c69-8441-fa2dd19a69ed',
  },
  q9: {
    sectionTitle: 'Operational Efficiency',
    sectionId: 'fd49cdc0-7a55-4c69-8441-fa2dd19a69ed',
    firstField: '956b1f2b-1246-4708-a7be-91cd32944194',
    fields: {
      arTurnover: {
        id: '956b1f2b-1246-4708-a7be-91cd32944194',
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
        id: 'c65c11f8-f353-4164-bb2f-958e13f0b4cb',
        type: 'file',
        label: 'Upload Annual Audit report (PDF Only - ORIGINAL COPY)',
        required: true,
        nextField: 'apTurnover',
        acceptedFiles: ['pdf'],
        validation:
          "z.string().min(1, 'Audit report is required').refine((val) => val.endsWith('.pdf'), 'File must be PDF format')",
      },
      apTurnover: {
        id: 'b9884493-28e5-45b2-a580-f33feb995595',
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
    nextNode: 'e0dbeb74-392f-455e-ba74-3e670936ed65',
  },
  q10: {
    sectionTitle: 'Tax Efficiency',
    sectionId: 'e0dbeb74-392f-455e-ba74-3e670936ed65',
    firstField: '2660e978-8c6c-4b35-82ea-ebd2822b9307',
    fields: {
      taxRate: {
        id: '2660e978-8c6c-4b35-82ea-ebd2822b9307',
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
