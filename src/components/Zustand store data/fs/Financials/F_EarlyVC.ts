import { FieldType } from '@/components/Zustand store data/MainFlow/flow';

export const F_Early_VC_Flow = {
  q1: {
    sectionTitle: 'Valuation',
    sectionId: 'valuation',
    firstField: 'valuationBracket',
    fields: {
      valuationBracket: {
        id: 'valuation-bracket',
        type: FieldType.text,
        label:
          "What is your company's estimated valuation brackets? (Insert estimated bracket - lower + upper bounds in USD)",
        required: true,
        nextField: 'capTable',
        placeholder: 'TBD',
        validation: 'z.string().min(1, "Valuation bracket is required")',
      },
      capTable: {
        id: 'cap-table',
        type: FieldType.file,
        label: 'Cap table - Upload PDF or excel file (no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          'z.string().min(1, "Cap table is required").refine((val) => val.endsWith(".pdf") || val.endsWith(".xlsx") || val.endsWith(".xls"), "File must be PDF or Excel format")',
      },
    },
    nextNode: 'revenue-growth',
  },

  q2: {
    sectionTitle: 'Revenue Growth',
    sectionId: 'revenue-growth',
    firstField: 'yoyGrowth',
    fields: {
      yoyGrowth: {
        id: 'yoy-growth',
        type: FieldType.dropdown,
        label: 'What was your year-over-year (YoY) revenue growth?',
        required: true,
        nextField: null,
        options: [
          { id: 'under_20', value: '< 20%' },
          { id: '20_to_50', value: '20-50%' },
          { id: 'over_50', value: '> 50%' },
        ],
        validation:
          'z.enum(["< 20%", "20-50%", "> 50%"], { required_error: "YoY growth selection is required" })',
      },
    },
    nextNode: 'net-result',
  },

  q3: {
    sectionTitle: 'Net Result (Net Profit/Loss)',
    sectionId: 'net-result',
    firstField: 'profitStatus',
    fields: {
      profitStatus: {
        id: 'profit-status',
        type: FieldType.dropdown,
        label:
          'Has the generated revenue resulted in a net profit (i.e., revenue surpassing expenses)?',
        required: true,
        nextField: 'plStatement',
        options: [
          { id: 'no', value: 'No' },
          { id: 'yes', value: 'Yes' },
        ],
        validation:
          'z.enum(["No", "Yes"], { required_error: "Profit status selection is required" })',
      },
      plStatement: {
        id: 'pl-statement',
        type: FieldType.file,
        label: 'Upload P&L Statement (PDF or excel file, no csv)',
        required: true,
        nextField: 'profitTimeline',
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          'z.string().min(1, "P&L statement is required").refine((val) => val.endsWith(".pdf") || val.endsWith(".xlsx") || val.endsWith(".xls"), "File must be PDF or Excel format")',
      },
      profitTimeline: {
        id: 'profit-timeline',
        type: FieldType.dropdown,
        label:
          'In how many years do you expect your revenue to surpass expenses and generate net profit?',
        required: true,
        nextField: 'netResult',
        options: [
          { id: 'over_4_years', value: 'More than 4 years' },
          { id: '3_to_4_years', value: '3 to 4 Years' },
          { id: 'under_3_years', value: 'Less than 3 years' },
        ],
        validation:
          'z.enum(["More than 4 years", "3 to 4 Years", "Less than 3 years"], { required_error: "Profit timeline selection is required" })',
      },
      netResult: {
        id: 'net-result',
        type: FieldType.dropdown,
        label: 'What is your current net result (profit or loss)?',
        required: true,
        nextField: null,
        options: [
          { id: 'loss_over_25', value: 'Loss greater than 25% of revenue' },
          { id: 'loss_25_to_0', value: 'Loss between 25% and 0%' },
          { id: 'break_even', value: 'Break-even or profit <5%' },
          { id: 'profit_over_5', value: 'Profit > 5%' },
        ],
        validation:
          'z.enum(["Loss greater than 25% of revenue", "Loss between 25% and 0%", "Break-even or profit <5%", "Profit > 5%"], { required_error: "Net result selection is required" })',
      },
    },
    nextNode: 'opex',
  },

  q4: {
    sectionTitle: 'OpEx',
    sectionId: 'opex',
    firstField: 'opexRatio',
    fields: {
      opexRatio: {
        id: 'opex-ratio',
        type: FieldType.dropdown,
        label: 'What is your current OpEx ratio?',
        required: true,
        nextField: 'balanceSheet',
        options: [
          { id: 'over_80', value: '> 80% of revenue spent on OpEx' },
          { id: '50_to_80', value: '50-80% of revenue spent on OpEx' },
          { id: 'under_50', value: '< 50% of revenue spent on OpEx' },
        ],
        validation:
          'z.enum(["> 80% of revenue spent on OpEx", "50-80% of revenue spent on OpEx", "< 50% of revenue spent on OpEx"], { required_error: "OpEx ratio selection is required" })',
      },
      balanceSheet: {
        id: 'balance-sheet',
        type: FieldType.file,
        label: 'Upload Balance Sheet statement (PDF or excel file, no csv)',
        required: true,
        nextField: null,
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          'z.string().min(1, "Balance sheet is required").refine((val) => val.endsWith(".pdf") || val.endsWith(".xlsx") || val.endsWith(".xls"), "File must be PDF or Excel format")',
      },
    },
    nextNode: 'burn-rate',
  },

  q5: {
    sectionTitle: 'Burn Rate',
    sectionId: 'burn-rate',
    firstField: 'burnRate',
    fields: {
      burnRate: {
        id: 'burn-rate',
        type: FieldType.dropdown,
        label: 'What is your current monthly cash burn rate?',
        required: true,
        nextField: null,
        options: [
          { id: 'over_120', value: '>120% of revenue' },
          { id: '80_to_120', value: '80%-120% of revenue' },
          { id: 'under_80', value: '<80% of revenue' },
        ],
        validation:
          'z.enum([">120% of revenue", "80%-120% of revenue", "<80% of revenue"], { required_error: "Burn rate selection is required" })',
      },
    },
    nextNode: 'liquidity',
  },

  q6: {
    sectionTitle: 'Liquidity',
    sectionId: 'liquidity',
    firstField: 'currentRatio',
    fields: {
      currentRatio: {
        id: 'current-ratio',
        type: FieldType.dropdown,
        label: 'What is your current liquidity ratio?',
        required: true,
        nextField: 'quickRatio',
        options: [
          { id: 'under_1_2', value: '< 1.2' },
          { id: '1_2_to_1_8', value: '1.2 - 1.8' },
          { id: 'over_1_8', value: '> 1.8' },
        ],
        validation:
          'z.enum(["< 1.2", "1.2 - 1.8", "> 1.8"], { required_error: "Current ratio selection is required" })',
      },
      quickRatio: {
        id: 'quick-ratio',
        type: FieldType.dropdown,
        label: 'What is your quick liquidity ratio?',
        required: true,
        nextField: null,
        options: [
          { id: 'under_0_9', value: '< 0.9' },
          { id: '0_9_to_1_3', value: '0.9 - 1.3' },
          { id: 'over_1_3', value: '> 1.3' },
        ],
        validation:
          'z.enum(["< 0.9", "0.9 - 1.3", "> 1.3"], { required_error: "Quick ratio selection is required" })',
      },
    },
    nextNode: 'cash-runway',
  },

  q7: {
    sectionTitle: 'Cash Runway',
    sectionId: 'cash-runway',
    firstField: 'runwayTime',
    fields: {
      runwayTime: {
        id: 'runway-time',
        type: FieldType.dropdown,
        label: 'How many months of runway do you currently have?',
        required: true,
        nextField: null,
        options: [
          { id: 'under_6', value: 'Less than 6 months' },
          { id: '6_to_12', value: '6 to 12 months' },
          { id: '12_to_18', value: '12-18 months' },
          { id: 'over_18', value: 'More than 18 months' },
        ],
        validation:
          'z.enum(["Less than 6 months", "6 to 12 months", "12-18 months", "More than 18 months"], { required_error: "Runway time selection is required" })',
      },
    },
    nextNode: 'debt-management',
  },

  q8: {
    sectionTitle: 'Debt Management',
    sectionId: 'debt-management',
    firstField: 'financingType',
    fields: {
      financingType: {
        id: 'financing-type',
        type: FieldType.dropdown,
        label: 'Did the company previously opt for debt or equity financing?',
        required: true,
        nextField: 'debtEquityRatio',
        options: [
          { id: 'debt', value: 'Opted for debt financing' },
          { id: 'both', value: 'Used both debt and equity' },
          { id: 'equity', value: 'Opted for equity financing' },
        ],
        validation:
          'z.enum(["Opted for debt financing", "Used both debt and equity", "Opted for equity financing"], { required_error: "Financing type selection is required" })',
      },
      debtEquityRatio: {
        id: 'debt-equity-ratio',
        type: FieldType.dropdown,
        label: 'What is your current debt-to-equity ratio?',
        required: true,
        nextField: null,
        options: [
          { id: 'high_debt', value: 'More than 1 (High debt)' },
          { id: 'moderate_debt', value: 'Between 0.5 and 1 (Moderate debt)' },
          { id: 'low_debt', value: 'Less than 0.5 (Low debt)' },
        ],
        validation:
          'z.enum(["More than 1 (High debt)", "Between 0.5 and 1 (Moderate debt)", "Less than 0.5 (Low debt)"], { required_error: "Debt-to-equity ratio selection is required" })',
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
        type: FieldType.dropdown,
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
          'z.enum(["Less than 3 times per year (Slow collection)", "Between 3 and 6 times per year (Moderate collection)", "More than 6 times per year (Efficient collection)"], { required_error: "AR turnover selection is required" })',
      },
      auditReport: {
        id: 'audit-report',
        type: FieldType.file,
        label: 'Upload Annual Audit report (PDF Only - ORIGINAL COPY)',
        required: true,
        nextField: 'apTurnover',
        acceptedFiles: ['pdf'],
        validation:
          'z.string().min(1, "Audit report is required").refine((val) => val.endsWith(".pdf"), "File must be PDF format")',
      },
      apTurnover: {
        id: 'ap-turnover',
        type: FieldType.dropdown,
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
          'z.enum(["Less than 3 times per year (Slow payments)", "Between 3 and 6 times per year (Moderate payments)", "More than 6 times per year (Fast payments, possibly too aggressive)"], { required_error: "AP turnover selection is required" })',
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
        type: FieldType.dropdown,
        label: "What is your company's tax effective rate?",
        required: true,
        nextField: null,
        options: [
          { id: 'under_10', value: 'Less than 10%' },
          { id: '10_to_20', value: 'Between 10% and 20%' },
          { id: 'over_20', value: 'More than 20%' },
        ],
        validation:
          'z.enum(["Less than 10%", "Between 10% and 20%", "More than 20%"], { required_error: "Tax rate selection is required" })',
      },
    },
    nextNode: null,
  },
};
