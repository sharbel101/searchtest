import { FieldType } from '@/components/data/MainFlow/flow';

export const F_Angel_Phase_Flow = {
  q1: {
    sectionTitle: 'Valuation',
    sectionId: 'valuation',
    firstField: 'valuationBracket',
    fields: {
      valuationBracket: {
        id: 'valuation-bracket',
        type: FieldType.Text,
        label:
          "What is your company's estimated valuation brackets? (Insert estimated bracket - lower + upper bounds in USD)",
        required: true,
        nextField: 'capTable',
        placeholder: 'TBD',
      },
      capTable: {
        id: 'cap-table',
        type: FieldType.File,
        label: 'Cap table - Upload PDF or excel file (no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
      },
    },
    nextNode: 'revenue-growth',
  },

  q2: {
    sectionTitle: 'Revenue Growth',
    sectionId: 'revenue-growth',
    firstField: 'expectedGrowth',
    fields: {
      expectedGrowth: {
        id: 'expected-growth',
        type: FieldType.Dropdown,
        label: 'What is your expected revenue growth at year-end?',
        required: true,
        nextField: null,
        options: [
          { id: 'under_40', value: '< 40%' },
          { id: '40_to_70', value: '40-70%' },
          { id: 'over_70', value: '> 70%' },
        ],
      },
    },
    nextNode: 'net-result',
  },

  q3: {
    sectionTitle: 'Net Result (Net Profit/Loss)',
    sectionId: 'net-result',
    firstField: 'profitTimeline',
    fields: {
      profitTimeline: {
        id: 'profit-timeline',
        type: FieldType.Dropdown,
        label:
          'In how many years do you expect your revenue to surpass expenses and generate net profit?',
        required: true,
        nextField: 'projectedResult',
        options: [
          { id: 'over_5_years', value: 'More than 5 years' },
          { id: '3_to_5_years', value: '3 to 5 Years' },
          { id: 'under_3_years', value: 'Less than 3 years' },
        ],
      },
      projectedResult: {
        id: 'projected-result',
        type: FieldType.Dropdown,
        label:
          'What is your projected net result (profit or loss) one year after launching?',
        required: true,
        nextField: 'plStatement',
        options: [
          { id: 'loss_over_50', value: 'Loss greater than 50% of revenue' },
          { id: 'loss_50_to_0', value: 'Loss between 50% and 0%' },
          { id: 'break_even_or_profit', value: 'Break-even or profit' },
        ],
      },
      plStatement: {
        id: 'pl-statement',
        type: FieldType.File,
        label: 'Upload P&L Statement (PDF or excel file, no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
      },
    },
    nextNode: 'opex',
  },

  q4: {
    sectionTitle: 'OpEx',
    sectionId: 'opex',
    firstField: 'projectedOpex',
    fields: {
      projectedOpex: {
        id: 'projected-opex',
        type: FieldType.Dropdown,
        label: 'What is your projected OpEx ratio one year after launch?',
        required: true,
        nextField: 'balanceSheet',
        options: [
          { id: 'over_90', value: '> 90% of revenue spent on OpEx' },
          { id: '60_to_90', value: '60-90% of revenue spent on OpEx' },
          { id: 'under_60', value: '< 60% of revenue spent on OpEx' },
        ],
      },
      balanceSheet: {
        id: 'balance-sheet',
        type: FieldType.File,
        label: 'Upload Balance Sheet statement (PDF or excel file, no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
      },
    },
    nextNode: 'burn-rate',
  },

  q5: {
    sectionTitle: 'Burn Rate',
    sectionId: 'burn-rate',
    firstField: 'runwayBurnRate',
    fields: {
      runwayBurnRate: {
        id: 'runway-burn-rate',
        type: FieldType.Dropdown,
        label: 'What is your current monthly cash burn rate? (Time-Based)',
        required: true,
        nextField: null,
        options: [
          { id: 'under_9_months', value: '<9 months of runway' },
          { id: '9_to_14_months', value: '9-14 months of runway' },
          { id: 'over_14_months', value: '>14 months of runway' },
        ],
      },
    },
    nextNode: 'liquidity',
  },

  q6: {
    sectionTitle: 'Liquidity',
    sectionId: 'liquidity',
    firstField: 'estimatedCurrentRatio',
    fields: {
      estimatedCurrentRatio: {
        id: 'estimated-current-ratio',
        type: FieldType.Dropdown,
        label: 'What is your estimated liquidity ratio at year-end?',
        required: true,
        nextField: 'estimatedQuickRatio',
        options: [
          { id: 'under_1', value: '< 1.0' },
          { id: '1_to_1_5', value: '1.0 - 1.5' },
          { id: 'over_1_5', value: '> 1.5' },
        ],
      },
      estimatedQuickRatio: {
        id: 'estimated-quick-ratio',
        type: FieldType.Dropdown,
        label: 'What is your estimated quick liquidity ratio at year-end?',
        required: true,
        nextField: null,
        options: [
          { id: 'under_0_8', value: '< 0.8' },
          { id: '0_8_to_1_2', value: '0.8 - 1.2' },
          { id: 'over_1_2', value: '> 1.2' },
        ],
      },
    },
    nextNode: 'cash-runway',
  },

  q7: {
    sectionTitle: 'Cash Runway',
    sectionId: 'cash-runway',
    firstField: 'estimatedRunway',
    fields: {
      estimatedRunway: {
        id: 'estimated-runway',
        type: FieldType.Dropdown,
        label: 'What is your estimated cash runway at year-end?',
        required: true,
        nextField: null,
        options: [
          { id: 'under_6_months', value: 'Less than 6 months' },
          { id: '6_to_12_months', value: '6 to 12 months' },
          { id: 'over_12_months', value: 'More than 12 months' },
        ],
      },
    },
    nextNode: 'debt-management',
  },

  q8: {
    sectionTitle: 'Debt Management',
    sectionId: 'debt-management',
    firstField: 'financingHistory',
    fields: {
      financingHistory: {
        id: 'financing-history',
        type: FieldType.Dropdown,
        label: 'Did the company previously opt for debt or equity financing?',
        required: true,
        nextField: null,
        options: [
          { id: 'none', value: 'No' },
          { id: 'debt', value: 'Opted for debt financing' },
          { id: 'both', value: 'Used both debt and equity' },
          { id: 'equity', value: 'Opted for equity financing' },
        ],
      },
    },
    nextNode: 'operational-efficiency',
  },

  q9: {
    sectionTitle: 'Operational Efficiency',
    sectionId: 'operational-efficiency',
    firstField: 'arTurnover',
    fields: {
      arTurnover: {
        id: 'ar-turnover',
        type: FieldType.Dropdown,
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
      },
      auditReport: {
        id: 'audit-report',
        type: FieldType.File,
        label: 'Upload Annual Audit report (PDF Only - ORIGINAL COPY)',
        required: true,
        nextField: 'apTurnover',
        acceptedFiles: ['pdf'],
      },
      apTurnover: {
        id: 'ap-turnover',
        type: FieldType.Dropdown,
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
      },
    },
    nextNode: 'tax-efficiency',
  },

  q10: {
    sectionTitle: 'Tax Efficiency',
    sectionId: 'tax-efficiency',
    firstField: 'taxRate',
    fields: {
      taxRate: {
        id: 'tax-rate',
        type: FieldType.Dropdown,
        label: "What is your company's tax effective rate?",
        required: true,
        nextField: null,
        options: [
          { id: 'under_10', value: 'Less than 10%' },
          { id: '10_to_20', value: 'Between 10% and 20%' },
          { id: 'over_20', value: 'More than 20%' },
        ],
      },
    },
    nextNode: null,
  },
};
