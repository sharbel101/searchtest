import { FieldType } from '@/components/data/MainFlow/flow';

export const F_Ideation_Phase_FLow = {};
const financialQuestionnaire = {
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
    firstField: 'revenueStarted',
    fields: {
      revenueStarted: {
        id: 'revenue-started',
        type: FieldType.Dropdown,
        label: 'Have you started generating revenue?',
        required: true,
        nextField: 'expectedGrowth',
        options: [
          { id: 'no', value: 'No, not yet' },
          { id: 'yes', value: 'Yes' },
        ],
      },
      expectedGrowth: {
        id: 'expected-growth',
        type: FieldType.Dropdown,
        label: 'What is your expected revenue growth one year after launching?',
        required: true,
        nextField: 'plStatement',
        options: [
          { id: 'under_50', value: '< 50%' },
          { id: '50_to_100', value: '50-100%' },
          { id: 'over_100', value: '> 100%' },
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
    nextNode: 'net-result',
  },

  q3: {
    sectionTitle: 'Net Result (Net Profit/Loss)',
    sectionId: 'net-result',
    firstField: 'breakEvenTime',
    fields: {
      breakEvenTime: {
        id: 'break-even-time',
        type: FieldType.Dropdown,
        label: 'How many years do you expect are needed to break-even?',
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
        nextField: null,
        options: [
          { id: 'loss_over_50', value: 'Loss greater than 50% of revenue' },
          { id: 'loss_50_to_0', value: 'Loss between 50% and 0%' },
          { id: 'break_even_or_profit', value: 'Break-even or profit' },
        ],
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
          { id: 'over_100', value: '> 100% of revenue spent on OpEx' },
          { id: '70_to_100', value: '70-100% of revenue spent on OpEx' },
          { id: 'under_70', value: '< 70% of revenue spent on OpEx' },
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
          { id: 'under_6_months', value: '<6 months of runway' },
          { id: '6_to_12_months', value: '6-12 months of runway' },
          { id: 'over_12_months', value: '>12 months of runway' },
        ],
      },
    },
    nextNode: 'liquidity',
  },

  q6: {
    sectionTitle: 'Liquidity',
    sectionId: 'liquidity',
    firstField: 'projectedCurrentRatio',
    fields: {
      projectedCurrentRatio: {
        id: 'projected-current-ratio',
        type: FieldType.Dropdown,
        label: 'What is your projected liquidity ratio 1 year after launching?',
        required: true,
        nextField: 'projectedQuickRatio',
        options: [
          { id: 'under_1', value: '< 1.0' },
          { id: '1_to_1_5', value: '1.0 - 1.5' },
          { id: 'over_1_5', value: '> 1.5' },
        ],
      },
      projectedQuickRatio: {
        id: 'projected-quick-ratio',
        type: FieldType.Dropdown,
        label:
          'What is your projected quick liquidity ratio 1 year after launching?',
        required: true,
        nextField: null,
        options: [
          { id: 'under_0_7', value: '< 0.7' },
          { id: '0_7_to_1', value: '0.7 - 1.0' },
          { id: 'over_1', value: '> 1.0' },
        ],
      },
    },
    nextNode: 'cash-runway',
  },

  q7: {
    sectionTitle: 'Cash Runway',
    sectionId: 'cash-runway',
    firstField: 'projectedRunway',
    fields: {
      projectedRunway: {
        id: 'projected-runway',
        type: FieldType.Dropdown,
        label: 'What is your projected cash runway time after launching?',
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
        nextField: 'auditReport',
        options: [
          { id: 'none', value: 'No' },
          { id: 'debt', value: 'Opted for debt financing' },
          { id: 'both', value: 'Used both debt and equity' },
          { id: 'equity', value: 'Opted for equity financing' },
        ],
      },
      auditReport: {
        id: 'audit-report',
        type: FieldType.File,
        label: 'Upload Annual Audit report (PDF Only - ORIGINAL COPY)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf'],
      },
    },
    nextNode: null,
  },
};
