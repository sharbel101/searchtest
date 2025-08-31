import { FieldType } from '@/components/Zustand store data/MainFlow/flow';

export const F_Advanced_VC_Flow = {
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
          { id: 'less_15', value: '< 15%' },
          { id: '15_to_40', value: '15-40%' },
          { id: 'more_40', value: '> 40%' },
        ],
        validation:
          'z.enum(["< 15%", "15-40%", "> 40%"], { required_error: "YoY revenue growth is required" })',
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
          'z.enum(["No", "Yes"], { required_error: "Profit status is required" })',
      },
      plStatement: {
        id: 'pl-statement',
        type: FieldType.file,
        label: 'Upload P&L Statement (PDF or excel file, no csv)',
        required: true,
        nextField: 'netResult',
        acceptedFiles: ['pdf', 'xlsx', 'xls'],
        validation:
          'z.string().min(1, "P&L statement is required").refine((val) => val.endsWith(".pdf") || val.endsWith(".xlsx") || val.endsWith(".xls"), "File must be PDF or Excel format")',
      },
      netResult: {
        id: 'net-result',
        type: FieldType.dropdown,
        label: 'What is your current net result (profit or loss)?',
        required: true,
        nextField: null,
        options: [
          { id: 'loss_20plus', value: 'Loss greater than 20% of revenue' },
          { id: 'loss_20_to_0', value: 'Loss between 20% and 0%' },
          { id: 'break_even', value: 'Break-even or profit <10%' },
          { id: 'profit_10plus', value: 'Profit > 10%' },
        ],
        validation:
          'z.enum(["Loss greater than 20% of revenue", "Loss between 20% and 0%", "Break-even or profit <10%", "Profit > 10%"], { required_error: "Net result is required" })',
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
          { id: 'over_70', value: '> 70% of revenue spent on OpEx' },
          { id: '40_to_70', value: '40-70% of revenue spent on OpEx' },
          { id: 'under_40', value: '< 40% of revenue spent on OpEx' },
        ],
        validation:
          'z.enum(["> 70% of revenue spent on OpEx", "40-70% of revenue spent on OpEx", "< 40% of revenue spent on OpEx"], { required_error: "OpEx ratio is required" })',
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
          { id: 'over_100', value: '>100% of revenue' },
          { id: '60_to_100', value: '60%-100% of revenue' },
          { id: 'under_60', value: '<60% of revenue' },
        ],
        validation:
          'z.enum([">100% of revenue", "60%-100% of revenue", "<60% of revenue"], { required_error: "Burn rate is required" })',
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
          { id: 'under_1_5', value: '< 1.5' },
          { id: '1_5_to_2', value: '1.5 - 2.0' },
          { id: 'over_2', value: '> 2.0' },
        ],
        validation:
          'z.enum(["< 1.5", "1.5 - 2.0", "> 2.0"], { required_error: "Current ratio is required" })',
      },
      quickRatio: {
        id: 'quick-ratio',
        type: FieldType.dropdown,
        label: 'What is your quick liquidity ratio?',
        required: true,
        nextField: null,
        options: [
          { id: 'under_1', value: '< 1.0' },
          { id: '1_to_1_5', value: '1.0 - 1.5' },
          { id: 'over_1_5', value: '> 1.5' },
        ],
        validation:
          'z.enum(["< 1.0", "1.0 - 1.5", "> 1.5"], { required_error: "Quick ratio is required" })',
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
          'z.enum(["Less than 6 months", "6 to 12 months", "12-18 months", "More than 18 months"], { required_error: "Runway time is required" })',
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
          { id: 'equity', value: 'Opted for equity financing' },
          { id: 'debt', value: 'Opted for debt financing' },
          { id: 'both', value: 'Used both debt and equity' },
        ],
        validation:
          'z.enum(["Opted for equity financing", "Opted for debt financing", "Used both debt and equity"], { required_error: "Financing type is required" })',
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
          'z.enum(["More than 1 (High debt)", "Between 0.5 and 1 (Moderate debt)", "Less than 0.5 (Low debt)"], { required_error: "Debt-to-equity ratio is required" })',
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
          'z.enum(["Less than 3 times per year (Slow collection)", "Between 3 and 6 times per year (Moderate collection)", "More than 6 times per year (Efficient collection)"], { required_error: "AR turnover ratio is required" })',
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
          'z.enum(["Less than 3 times per year (Slow payments)", "Between 3 and 6 times per year (Moderate payments)", "More than 6 times per year (Fast payments, possibly too aggressive)"], { required_error: "AP turnover ratio is required" })',
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
          'z.enum(["Less than 10%", "Between 10% and 20%", "More than 20%"], { required_error: "Tax rate is required" })',
      },
    },
    nextNode: null,
  },
};
