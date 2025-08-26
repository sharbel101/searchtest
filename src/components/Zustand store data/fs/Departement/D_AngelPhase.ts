import { FieldType } from '@/components/Zustand store data/MainFlow/flow';

export const D_Angel_Phase_Flow = {
  q1: {
    sectionTitle: 'Founder Involvement',
    sectionId: 'founder-involvement',
    firstField: 'founderInvolvement',
    fields: {
      founderInvolvement: {
        id: 'founder-involvement',
        type: FieldType.Dropdown,
        label:
          'Are all original founders still actively involved in the company?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'major_departures',
            value: 'Major founder departures with no clear replacements',
          },
          {
            id: 'leadership_gaps',
            value: 'One or more founders left, creating leadership gaps',
          },
          {
            id: 'replacements_in_place',
            value: 'Some founders left, but replacements are in place',
          },
          {
            id: 'all_founders_leading',
            value: 'Yes, all founders are still leading the company',
          },
        ],
      },
    },
    nextNode: 'founder-role-evolution',
  },

  q2: {
    sectionTitle: 'Founder Role Evolution',
    sectionId: 'founder-role-evolution',
    firstField: 'founderRoleEvolution',
    fields: {
      founderRoleEvolution: {
        id: 'founder-role-evolution',
        type: FieldType.Dropdown,
        label: "Have the founders' roles evolved from the ideation stage?",
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_changes',
            value: 'No changes; founders still handle everything',
          },
          {
            id: 'started_delegating',
            value: 'Founders started delegating some responsibilities',
          },
          {
            id: 'high_level_strategy',
            value:
              'Founders are now focusing on high-level strategy, with teams handling execution',
          },
        ],
      },
    },
    nextNode: 'ceo-leadership',
  },

  q3: {
    sectionTitle: 'CEO Leadership',
    sectionId: 'ceo-leadership',
    firstField: 'ceoLeadership',
    fields: {
      ceoLeadership: {
        id: 'ceo-leadership',
        type: FieldType.Dropdown,
        label: 'Is there a designated CEO leading the company?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_ceo_confusion',
            value: 'No CEO or leadership confusion',
          },
          {
            id: 'unofficial_ceo',
            value: 'No official CEO, but one founder assumes the role',
          },
          {
            id: 'official_ceo',
            value: 'Yes, officially assigned and leading',
          },
        ],
      },
    },
    nextNode: 'founder-responsibilities-documentation',
  },

  q4: {
    sectionTitle: 'Founder Responsibilities Documentation',
    sectionId: 'founder-responsibilities-documentation',
    firstField: 'founderResponsibilities',
    fields: {
      founderResponsibilities: {
        id: 'founder-responsibilities',
        type: FieldType.Dropdown,
        label:
          "Are the founders' responsibilities documented and aligned with company needs?",
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_clear_distribution',
            value: 'No clear role distribution',
          },
          {
            id: 'somewhat_defined',
            value: 'Responsibilities are somewhat defined, but informal',
          },
          {
            id: 'clear_documentation',
            value: 'Yes, clear documentation exists',
          },
        ],
      },
    },
    nextNode: 'investor-advisor-engagement',
  },

  q5: {
    sectionTitle: 'Investor and Advisor Engagement',
    sectionId: 'investor-advisor-engagement',
    firstField: 'investorAdvisorEngagement',
    fields: {
      investorAdvisorEngagement: {
        id: 'investor-advisor-engagement',
        type: FieldType.Dropdown,
        label: 'Do the founders actively engage with investors and advisors?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_regular_communication',
            value: 'No regular communication with investors/advisors',
          },
          {
            id: 'occasional_engagement',
            value: 'Occasional engagement, but not structured',
          },
          {
            id: 'regular_engagement',
            value: 'Yes, regular engagement with investors/advisors',
          },
        ],
      },
    },
    nextNode: 'external-leadership-attraction',
  },

  q6: {
    sectionTitle: 'External Leadership Attraction',
    sectionId: 'external-leadership-attraction',
    firstField: 'externalLeadership',
    fields: {
      externalLeadership: {
        id: 'external-leadership',
        type: FieldType.Dropdown,
        label:
          'Have the founders taken steps to attract experienced leadership outside their founding team?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_efforts',
            value: 'No efforts to expand leadership',
          },
          {
            id: 'in_progress',
            value: 'In progress, but no key hires yet',
          },
          {
            id: 'hired_executives',
            value: "Yes, they've hired key executives (CFO, CTO, etc.)",
          },
        ],
      },
    },
    nextNode: 'founder-compensation-structure',
  },

  q7: {
    sectionTitle: 'Founder Compensation Structure',
    sectionId: 'founder-compensation-structure',
    firstField: 'founderCompensation',
    fields: {
      founderCompensation: {
        id: 'founder-compensation',
        type: FieldType.Dropdown,
        label: 'Do all founders have a formal compensation structure?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_structured_compensation',
            value: 'No structured compensation, all work informally',
          },
          {
            id: 'some_founders_paid',
            value:
              'Some founders are paid, others work without formal compensation',
          },
          {
            id: 'formal_compensation',
            value: 'Yes, with salaries or equity-based agreements',
          },
        ],
      },
    },
    nextNode: 'departmental-structures',
  },

  q8: {
    sectionTitle: 'Departmental Structures',
    sectionId: 'departmental-structures',
    firstField: 'departmentalStructures',
    fields: {
      departmentalStructures: {
        id: 'departmental-structures',
        type: FieldType.Dropdown,
        label:
          'Has the company formally established departmental structures with defined leadership for each function?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_formal_departments',
            value:
              'No formal departments, founders still manage most functions',
          },
          {
            id: 'departments_unclear_leadership',
            value:
              'Departments exist, but leadership roles are not clearly defined',
          },
          {
            id: 'clear_department_leaders',
            value:
              'Yes, each department has a clear leader with assigned responsibilities',
          },
        ],
      },
    },
    nextNode: 'department-head-decision-making',
  },

  q9: {
    sectionTitle: 'Department Head Decision Making',
    sectionId: 'department-head-decision-making',
    firstField: 'departmentHeadDecisions',
    fields: {
      departmentHeadDecisions: {
        id: 'department-head-decisions',
        type: FieldType.Dropdown,
        label:
          'Are department heads or key function leaders involved in strategic decision-making alongside the founders?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_involvement',
            value:
              'No involvement, founders retain full control over decisions',
          },
          {
            id: 'some_involvement',
            value: 'Some involvement, but founders still make most decisions',
          },
          {
            id: 'participatory_decisions',
            value: 'Yes, department heads participate in leadership decisions',
          },
        ],
      },
    },
    nextNode: 'organizational-chart',
  },

  q10: {
    sectionTitle: 'Organizational Chart',
    sectionId: 'organizational-chart',
    firstField: 'organizationalChart',
    fields: {
      organizationalChart: {
        id: 'organizational-chart',
        type: FieldType.Dropdown,
        label:
          "Is there a documented organizational chart that reflects the company's current structure?",
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_org_chart',
            value: 'No organizational chart or documented structure',
          },
          {
            id: 'informal_structure',
            value: 'An informal structure exists but not fully documented',
          },
          {
            id: 'formal_org_chart',
            value: 'Yes, a formal and updated org chart exists',
          },
        ],
      },
    },
    nextNode: 'existing-departments',
  },

  q11: {
    sectionTitle: 'Existing Departments',
    sectionId: 'existing-departments',
    firstField: 'existingDepartments',
    fields: {
      existingDepartments: {
        id: 'existing-departments',
        type: FieldType.Dropdown,
        label:
          'Which of the following departments currently exist in your company? (Select all that apply)',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'product_technology',
            value: 'Product & Technology',
          },
          {
            id: 'marketing_sales',
            value: 'Marketing & Sales',
          },
          {
            id: 'finance_accounting',
            value: 'Finance & Accounting',
          },
          {
            id: 'operations_hr',
            value: 'Operations & HR',
          },
          {
            id: 'customer_support',
            value: 'Customer Support / Success',
          },
          {
            id: 'other',
            value: 'Other (please specify)',
          },
        ],
      },
    },
    nextNode: 'dedicated-team-members',
  },

  q12: {
    sectionTitle: 'Dedicated Team Members',
    sectionId: 'dedicated-team-members',
    firstField: 'dedicatedTeamMembers',
    fields: {
      dedicatedTeamMembers: {
        id: 'dedicated-team-members',
        type: FieldType.Dropdown,
        label:
          'Do all key departments (finance, marketing, tech, operations) have at least one dedicated team member?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no',
            value: 'No',
          },
          {
            id: 'partially',
            value: 'Partially',
          },
          {
            id: 'yes',
            value: 'Yes',
          },
        ],
      },
    },
    nextNode: 'department-leaders-assignment',
  },

  q13: {
    sectionTitle: 'Department Leaders Assignment',
    sectionId: 'department-leaders-assignment',
    firstField: 'departmentLeadersAssignment',
    fields: {
      departmentLeadersAssignment: {
        id: 'department-leaders-assignment',
        type: FieldType.Dropdown,
        label:
          'Have department leaders been officially assigned (beyond just the founders)?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no',
            value: 'No',
          },
          {
            id: 'partially',
            value: 'Partially',
          },
          {
            id: 'yes',
            value: 'Yes',
          },
        ],
      },
    },
    nextNode: 'department-kpis-performance-tracking',
  },

  q14: {
    sectionTitle: 'Department KPIs and Performance Tracking',
    sectionId: 'department-kpis-performance-tracking',
    firstField: 'departmentKpis',
    fields: {
      departmentKpis: {
        id: 'department-kpis',
        type: FieldType.Dropdown,
        label:
          'Do departments have clear KPIs and performance tracking in place?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no',
            value: 'No',
          },
          {
            id: 'partially',
            value: 'Partially',
          },
          {
            id: 'yes',
            value: 'Yes',
          },
        ],
      },
    },
    nextNode: 'cross-department-communication',
  },

  q15: {
    sectionTitle: 'Cross-Department Communication',
    sectionId: 'cross-department-communication',
    firstField: 'crossDepartmentCommunication',
    fields: {
      crossDepartmentCommunication: {
        id: 'cross-department-communication',
        type: FieldType.Dropdown,
        label:
          'Is cross-department communication structured and efficient (e.g., meetings, reporting, tools)?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no',
            value: 'No',
          },
          {
            id: 'partially',
            value: 'Partially',
          },
          {
            id: 'yes',
            value: 'Yes',
          },
        ],
      },
    },
    nextNode: 'organization-chart-upload',
  },

  q16: {
    sectionTitle: 'Organization Chart Upload',
    sectionId: 'organization-chart-upload',
    firstField: 'organizationChartUpload',
    fields: {
      organizationChartUpload: {
        id: 'organization-chart-upload',
        type: FieldType.File,
        label: 'Upload your organization chart',
        required: false,
        validation:
          'z.string().optional().refine((val) => !val || val.endsWith(".pdf"), "File must be a PDF format")',
        nextField: null,
        acceptedTypes: ['.pdf'],
      },
    },
    nextNode: 'product-technology-responsibility',
  },

  q17: {
    sectionTitle: 'Product & Technology Responsibility',
    sectionId: 'product-technology-responsibility',
    firstField: 'productTechResponsibility',
    fields: {
      productTechResponsibility: {
        id: 'product-tech-responsibility',
        type: FieldType.Dropdown,
        label: 'Who is responsible for product & technology development?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'founder_led',
            value: 'Founder-led',
          },
          {
            id: 'assigned_tech_lead',
            value: 'Assigned tech lead, but not officially CTO',
          },
          {
            id: 'cto_experienced',
            value: 'CTO or experienced head of product',
          },
        ],
      },
    },
    nextNode: 'tech-lead-education-level',
  },

  q18: {
    sectionTitle: 'Tech Lead Education Level',
    sectionId: 'tech-lead-education-level',
    firstField: 'techLeadEducation',
    fields: {
      techLeadEducation: {
        id: 'tech-lead-education',
        type: FieldType.Dropdown,
        label: 'What is their highest level of education in a technical field?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_formal_tech_education',
            value: 'No formal tech education',
          },
          {
            id: 'bachelors_cs_engineering',
            value: "Bachelor's in CS/Engineering",
          },
          {
            id: 'masters_phd_specialized',
            value: "Master's/PhD or specialized technical training",
          },
        ],
      },
    },
    nextNode: 'tech-lead-experience-years',
  },

  q19: {
    sectionTitle: 'Tech Lead Experience Years',
    sectionId: 'tech-lead-experience-years',
    firstField: 'techLeadExperience',
    fields: {
      techLeadExperience: {
        id: 'tech-lead-experience',
        type: FieldType.Dropdown,
        label:
          'How many years of experience do they have in software/product development?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'less_than_1_year',
            value: '<1 year',
          },
          {
            id: '1_to_3_years',
            value: '1-3 years',
          },
          {
            id: '4_to_6_years',
            value: '4-6 years',
          },
          {
            id: '7_plus_years',
            value: '7+ years',
          },
        ],
      },
    },
    nextNode: 'tech-lead-leadership-experience',
  },

  q20: {
    sectionTitle: 'Tech Lead Leadership Experience',
    sectionId: 'tech-lead-leadership-experience',
    firstField: 'techLeadLeadership',
    fields: {
      techLeadLeadership: {
        id: 'tech-lead-leadership',
        type: FieldType.Dropdown,
        label: 'Have they led a tech/product team before?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_leadership_experience',
            value: 'No leadership experience',
          },
          {
            id: 'some_experience_no_leadership',
            value: 'Some experience but not in a leadership role',
          },
          {
            id: 'previous_leadership_experience',
            value: 'Previous leadership experience in a similar role',
          },
        ],
      },
    },
    nextNode: 'marketing-sales-responsibility',
  },

  q21: {
    sectionTitle: 'Marketing & Sales Responsibility',
    sectionId: 'marketing-sales-responsibility',
    firstField: 'marketingSalesResponsibility',
    fields: {
      marketingSalesResponsibility: {
        id: 'marketing-sales-responsibility',
        type: FieldType.Dropdown,
        label: 'Who is responsible for marketing & sales strategy?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'founder_led',
            value: 'Founder-led',
          },
          {
            id: 'dedicated_manager_no_cmo',
            value: 'Dedicated marketing/sales manager, but no CMO',
          },
          {
            id: 'cmo_experienced',
            value: 'CMO or highly experienced marketing/sales lead',
          },
        ],
      },
    },
    nextNode: 'marketing-lead-education-level',
  },

  q22: {
    sectionTitle: 'Marketing Lead Education Level',
    sectionId: 'marketing-lead-education-level',
    firstField: 'marketingLeadEducation',
    fields: {
      marketingLeadEducation: {
        id: 'marketing-lead-education',
        type: FieldType.Dropdown,
        label:
          'What is their highest level of education in business/marketing?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_formal_education',
            value: 'No formal education in marketing/business',
          },
          {
            id: 'bachelors_marketing_business',
            value: "Bachelor's in Marketing/Business",
          },
          {
            id: 'masters_mba',
            value: "Master's/MBA in Marketing/Business Strategy",
          },
        ],
      },
    },
    nextNode: 'marketing-lead-experience-years',
  },

  q23: {
    sectionTitle: 'Marketing Lead Experience Years',
    sectionId: 'marketing-lead-experience-years',
    firstField: 'marketingLeadExperience',
    fields: {
      marketingLeadExperience: {
        id: 'marketing-lead-experience',
        type: FieldType.Dropdown,
        label:
          'How many years of experience do they have in sales, branding, or customer acquisition?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'less_than_1_year',
            value: '<1 year',
          },
          {
            id: '1_to_3_years',
            value: '1-3 years',
          },
          {
            id: '4_to_6_years',
            value: '4-6 years',
          },
          {
            id: '7_plus_years',
            value: '7+ years',
          },
        ],
      },
    },
    nextNode: 'marketing-lead-industry-experience',
  },

  q24: {
    sectionTitle: 'Marketing Lead Industry Experience',
    sectionId: 'marketing-lead-industry-experience',
    firstField: 'marketingLeadIndustryExperience',
    fields: {
      marketingLeadIndustryExperience: {
        id: 'marketing-lead-industry-experience',
        type: FieldType.Dropdown,
        label: 'Have they worked in a similar industry before?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_industry_experience',
            value: 'No industry experience',
          },
          {
            id: 'some_industry_exposure',
            value: 'Some industry exposure, but not direct experience',
          },
          {
            id: 'previous_industry_experience',
            value: 'Previous marketing/sales experience in the same industry',
          },
        ],
      },
    },
    nextNode: 'finance-management-responsibility',
  },

  q25: {
    sectionTitle: 'Finance Management Responsibility',
    sectionId: 'finance-management-responsibility',
    firstField: 'financeManagementResponsibility',
    fields: {
      financeManagementResponsibility: {
        id: 'finance-management-responsibility',
        type: FieldType.Dropdown,
        label: 'Who manages company finances and investor relations?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'founder_led_no_expert',
            value: 'Founder-led with no finance expert',
          },
          {
            id: 'hired_manager_no_cfo',
            value: 'Hired finance manager but no CFO',
          },
          {
            id: 'cfo_financial_expert',
            value: 'CFO or financial expert with relevant experience',
          },
        ],
      },
    },
    nextNode: 'finance-lead-education-background',
  },

  q26: {
    sectionTitle: 'Finance Lead Education Background',
    sectionId: 'finance-lead-education-background',
    firstField: 'financeLeadEducation',
    fields: {
      financeLeadEducation: {
        id: 'finance-lead-education',
        type: FieldType.Dropdown,
        label: 'What is their educational background in finance/accounting?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_finance_background',
            value: 'No finance/accounting background',
          },
          {
            id: 'bachelors_finance',
            value: "Bachelor's in Finance/Accounting/Economics",
          },
          {
            id: 'masters_certification',
            value: "Master's (MBA, CFA, CPA, or similar certification)",
          },
        ],
      },
    },
    nextNode: 'finance-lead-prior-experience',
  },

  q27: {
    sectionTitle: 'Finance Lead Prior Experience',
    sectionId: 'finance-lead-prior-experience',
    firstField: 'financeLeadPriorExperience',
    fields: {
      financeLeadPriorExperience: {
        id: 'finance-lead-prior-experience',
        type: FieldType.Dropdown,
        label:
          'Do they have prior experience in financial planning, budgeting, or fundraising?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'less_than_1_year',
            value: '<1 year',
          },
          {
            id: '1_to_3_years',
            value: '1-3 years',
          },
          {
            id: '4_to_6_years',
            value: '4-6 years',
          },
          {
            id: '7_plus_years',
            value: '7+ years',
          },
        ],
      },
    },
    nextNode: 'finance-lead-total-experience',
  },

  q28: {
    sectionTitle: 'Finance Lead Total Experience',
    sectionId: 'finance-lead-total-experience',
    firstField: 'financeLeadTotalExperience',
    fields: {
      financeLeadTotalExperience: {
        id: 'finance-lead-total-experience',
        type: FieldType.Dropdown,
        label:
          'How many years of experience do they have in finance/accounting/investment?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'less_than_1_year',
            value: '<1 year',
          },
          {
            id: '1_to_3_years',
            value: '1-3 years',
          },
          {
            id: '4_to_6_years',
            value: '4-6 years',
          },
          {
            id: '7_plus_years',
            value: '7+ years',
          },
        ],
      },
    },
    nextNode: 'operations-hr-responsibility',
  },

  q29: {
    sectionTitle: 'Operations & HR Responsibility',
    sectionId: 'operations-hr-responsibility',
    firstField: 'operationsHrResponsibility',
    fields: {
      operationsHrResponsibility: {
        id: 'operations-hr-responsibility',
        type: FieldType.Dropdown,
        label: 'Who is responsible for company operations and HR?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'founder_led_no_ops_lead',
            value: 'Founder-led with no dedicated operations lead',
          },
          {
            id: 'hired_manager_no_coo',
            value: 'Hired operations/HR manager but no COO',
          },
          {
            id: 'coo_experienced',
            value: 'COO or highly experienced operations/HR lead',
          },
        ],
      },
    },
    nextNode: 'operations-lead-background',
  },

  q30: {
    sectionTitle: 'Operations Lead Background',
    sectionId: 'operations-lead-background',
    firstField: 'operationsLeadBackground',
    fields: {
      operationsLeadBackground: {
        id: 'operations-lead-background',
        type: FieldType.Dropdown,
        label:
          'What is their background in business operations, supply chain, or management?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_formal_background',
            value: 'No formal background',
          },
          {
            id: 'bachelors_business',
            value: "Bachelor's in Business, Management, or related field",
          },
          {
            id: 'masters_mba',
            value: "Master's or MBA in Business Operations",
          },
        ],
      },
    },
    nextNode: 'operations-lead-prior-experience',
  },

  q31: {
    sectionTitle: 'Operations Lead Prior Experience',
    sectionId: 'operations-lead-prior-experience',
    firstField: 'operationsLeadPriorExperience',
    fields: {
      operationsLeadPriorExperience: {
        id: 'operations-lead-prior-experience',
        type: FieldType.Dropdown,
        label:
          'Do they have prior experience in business operations, supply chain, or management?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'less_than_1_year',
            value: '<1 year',
          },
          {
            id: '1_to_3_years',
            value: '1-3 years',
          },
          {
            id: '4_to_6_years',
            value: '4-6 years',
          },
          {
            id: '7_plus_years',
            value: '7+ years',
          },
        ],
      },
    },
    nextNode: 'dedicated-full-time-employees',
  },

  q32: {
    sectionTitle: 'Dedicated Full-Time Employees',
    sectionId: 'dedicated-full-time-employees',
    firstField: 'dedicatedFullTimeEmployees',
    fields: {
      dedicatedFullTimeEmployees: {
        id: 'dedicated-full-time-employees',
        type: FieldType.Dropdown,
        label:
          'Does each department have at least one dedicated full-time employee (excluding the founder-led roles)?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'founders_handle_most',
            value: 'No, founders still handle most department responsibilities',
          },
          {
            id: 'some_departments_have',
            value: "Some departments have full-time employees, others don't",
          },
          {
            id: 'every_department_has',
            value:
              'Yes, every department has at least one full-time team member',
          },
        ],
      },
    },
    nextNode: 'employee-count',
  },

  q33: {
    sectionTitle: 'Employee Count',
    sectionId: 'employee-count',
    firstField: 'employeeCount',
    fields: {
      employeeCount: {
        id: 'employee-count',
        type: FieldType.Dropdown,
        label:
          'How many employees (excluding founders) are currently in the company?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: '1_to_3_employees',
            value: '1-3 employees',
          },
          {
            id: '4_to_7_employees',
            value: '4-7 employees',
          },
          {
            id: '8_plus_employees',
            value: '8+ employees',
          },
        ],
      },
    },
    nextNode: 'employee-role-documentation',
  },

  q34: {
    sectionTitle: 'Employee Role Documentation',
    sectionId: 'employee-role-documentation',
    firstField: 'employeeRoleDocumentation',
    fields: {
      employeeRoleDocumentation: {
        id: 'employee-role-documentation',
        type: FieldType.Dropdown,
        label:
          'Are employee roles and responsibilities formally documented for each department?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_formal_documentation',
            value:
              'No formal documentation, responsibilities are loosely defined',
          },
          {
            id: 'some_roles_documented',
            value: 'Some roles are documented, but not fully structured',
          },
          {
            id: 'clearly_documented',
            value: 'Yes, roles and responsibilities are clearly documented',
          },
        ],
      },
    },
    nextNode: 'department-tools-infrastructure',
  },

  q35: {
    sectionTitle: 'Department Tools and Infrastructure',
    sectionId: 'department-tools-infrastructure',
    firstField: 'departmentToolsInfrastructure',
    fields: {
      departmentToolsInfrastructure: {
        id: 'department-tools-infrastructure',
        type: FieldType.Dropdown,
        label:
          'Is each department equipped with the necessary tools, software, or infrastructure to operate efficiently?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'basic_manual_processes',
            value: 'No, departments rely on basic/manual processes',
          },
          {
            id: 'some_departments_have_tools',
            value: 'Some departments have tools, but others are still lacking',
          },
          {
            id: 'all_departments_equipped',
            value:
              'Yes, each department has all necessary tools for efficiency',
          },
        ],
      },
    },
    nextNode: 'internal-processes-workflows',
  },

  q36: {
    sectionTitle: 'Internal Processes and Workflows',
    sectionId: 'internal-processes-workflows',
    firstField: 'internalProcessesWorkflows',
    fields: {
      internalProcessesWorkflows: {
        id: 'internal-processes-workflows',
        type: FieldType.Dropdown,
        label:
          'Have departments developed internal processes and workflows to handle daily operations?',
        required: true,
        validation: 'z.string().min(1, "This field is required")',
        nextField: null,
        options: [
          {
            id: 'no_clear_workflows',
            value: 'No clear workflows, operations are handled reactively',
          },
          {
            id: 'some_processes_exist',
            value: 'Some processes exist, but not fully structured',
          },
          {
            id: 'documented_workflows',
            value: 'Yes, documented workflows exist for each department',
          },
        ],
      },
    },
  },
};
