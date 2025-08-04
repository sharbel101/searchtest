import { FieldType } from '@/components/data/MainFlow/flow';

export const D_Private_Equity_Flow = {
  q1: {
    sectionTitle: 'Organizational Chart',
    sectionId: 'org-chart',
    firstField: 'orgChartStatus',
    fields: {
      orgChartStatus: {
        id: 'org-chart-status',
        type: FieldType.Dropdown,
        label:
          'Does the company have a formal and documented organizational chart?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_chart',
            value: 'No formal org chart, structure is still loosely defined',
          },
          {
            id: 'partial_chart',
            value:
              'A partially structured org chart exists, but not fully documented',
          },
          {
            id: 'full_chart',
            value: 'Yes, a fully structured and updated org chart exists',
          },
        ],
      },
    },
    nextNode: 'structure-review',
  },
  q2: {
    sectionTitle: 'Structure Review Frequency',
    sectionId: 'structure-review',
    firstField: 'structureReview',
    fields: {
      structureReview: {
        id: 'structure-review',
        type: FieldType.Dropdown,
        label:
          'How often is the organizational structure reviewed and updated?',
        required: true,
        nextField: null,
        options: [
          { id: 'no_review', value: 'No structured review process' },
          { id: 'yearly', value: 'Once a year' },
          {
            id: 'quarterly_or_scaling',
            value: 'Every quarter or as the company scales',
          },
        ],
      },
    },
    nextNode: 'management-layers',
  },
  q3: {
    sectionTitle: 'Management Layers',
    sectionId: 'management-layers',
    firstField: 'managementLayers',
    fields: {
      managementLayers: {
        id: 'management-layers',
        type: FieldType.Dropdown,
        label:
          'How many management layers exist between entry-level employees and the CEO?',
        required: true,
        nextField: null,
        options: [
          {
            id: '5_plus',
            value: '5+ layers (may indicate inefficiency for Series A)',
          },
          {
            id: '3_4_layers',
            value: '3-4 layers (scaling but not overly complex)',
          },
          { id: '1_2_layers', value: '1-2 layers (lean and efficient)' },
        ],
      },
    },
    nextNode: 'department-reporting',
  },
  q4: {
    sectionTitle: 'Department Reporting Structure',
    sectionId: 'department-reporting',
    firstField: 'departmentReporting',
    fields: {
      departmentReporting: {
        id: 'department-reporting',
        type: FieldType.Dropdown,
        label:
          'Does each department report directly to its respective C-level executive?',
        required: true,
        nextField: null,
        options: [
          { id: 'no_structure', value: 'No clear reporting structure' },
          {
            id: 'mixed_structure',
            value: 'Mixed reporting structure (some direct, some fragmented)',
          },
          {
            id: 'direct_reporting',
            value: 'Yes, direct reporting to C-level executives',
          },
        ],
      },
    },
    nextNode: 'business-units',
  },
  q5: {
    sectionTitle: 'Business Units or Divisions',
    sectionId: 'business-units',
    firstField: 'businessUnits',
    fields: {
      businessUnits: {
        id: 'business-units',
        type: FieldType.Dropdown,
        label:
          'Has the company expanded into multiple business units or divisions?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'single_entity',
            value: 'No, company still operates as one single entity',
          },
          {
            id: 'partial_divisions',
            value: 'Partially, some divisions exist but operate informally',
          },
          {
            id: 'clear_divisions',
            value: 'Yes, clear separation of business units',
          },
        ],
      },
    },
    nextNode: 'middle-management',
  },
  q6: {
    sectionTitle: 'Middle Management Layer',
    sectionId: 'middle-management',
    firstField: 'middleManagement',
    fields: {
      middleManagement: {
        id: 'middle-management',
        type: FieldType.Dropdown,
        label:
          'Does each department have a middle management layer separate from senior leadership?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_middle',
            value: 'No, all teams still report directly to senior executives',
          },
          {
            id: 'some_middle',
            value: 'Some departments have middle management, others don    t',
          },
          {
            id: 'yes_middle',
            value: 'Yes, structured middle management is in place',
          },
        ],
      },
    },
    nextNode: 'c-level-executives',
  },
  q7: {
    sectionTitle: 'C-Level Executives',
    sectionId: 'c-level-executives',
    firstField: 'cLevelRoles',
    fields: {
      cLevelRoles: {
        id: 'c-level-roles',
        type: FieldType.Dropdown,
        label:
          'Which of the following C-level executives are present in the company?',
        required: true,
        nextField: 'education',
        options: [
          { id: 'ceo', value: 'Chief Executive Officer (CEO)' },
          { id: 'coo', value: 'Chief Operating Officer (COO)' },
          { id: 'cfo', value: 'Chief Financial Officer (CFO)' },
          { id: 'cto', value: 'Chief Technology Officer (CTO)' },
          { id: 'cmo', value: 'Chief Marketing Officer (CMO)' },
          { id: 'cpo', value: 'Chief Product Officer (CPO)' },
          { id: 'cro', value: 'Chief Revenue Officer (CRO)' },
          { id: 'chro', value: 'Chief Human Resources Officer (CHRO)' },
          { id: 'clo', value: 'Chief Legal Officer (CLO)' },
          { id: 'other', value: 'Other (please specify)' },
          { id: 'no_c_level', value: 'No formal C-level structure yet' },
          { id: '1_2_c_levels', value: '1-2 C-level executives' },
          { id: '3_5_c_levels', value: '3-5 C-level executives' },
          { id: '6_8_c_levels', value: '6-8 C-level executives' },
          { id: '9_plus_c_levels', value: '9-10+' },
        ],
      },
      education: {
        id: 'c-level-education',
        type: FieldType.Dropdown,
        label: 'What is their highest level of education?',
        required: true,
        nextField: 'experienceYears',
        options: [
          { id: 'no_degree', value: 'No formal degree' },
          { id: 'bachelor', value: "Bachelor's degree" },
          { id: 'master', value: "Master's degree (MBA, MSc, etc.)" },
          {
            id: 'phd_or_cert',
            value: 'PhD or specialized industry certification',
          },
        ],
      },
      experienceYears: {
        id: 'c-level-experience',
        type: FieldType.Dropdown,
        label:
          'How many years of experience does this C-level executive have in their respective field?',
        required: true,
        nextField: 'leadershipStartup',
        options: [
          { id: 'lt3', value: 'Less than 3 years' },
          { id: '3_5', value: '3-5 years' },
          { id: '6_10', value: '6-10 years' },
          { id: '10_plus', value: '10+ years' },
        ],
      },
      leadershipStartup: {
        id: 'leadership-startup',
        type: FieldType.Dropdown,
        label:
          'Has this executive previously held a leadership role in a startup or high-growth company?',
        required: true,
        nextField: 'industryExperience',
        options: [
          { id: 'no_leadership', value: 'No prior leadership experience' },
          {
            id: 'some_exposure',
            value: 'Some leadership exposure, but not in a startup',
          },
          {
            id: 'startup_leader',
            value: 'Previous leadership role in a high-growth startup',
          },
        ],
      },
      industryExperience: {
        id: 'industry-experience',
        type: FieldType.Dropdown,
        label: 'What is their industry experience?',
        required: true,
        nextField: 'investorParticipation',
        options: [
          { id: 'no_experience', value: 'No relevant industry experience' },
          {
            id: 'some_experience',
            value: 'Some industry exposure but not extensive',
          },
          { id: '5_plus_years', value: '5+ years in the same industry' },
        ],
      },
      investorParticipation: {
        id: 'investor-participation',
        type: FieldType.Dropdown,
        label:
          'Does this executive participate in investor relations and board meetings?',
        required: true,
        nextField: 'strategicInvolvement',
        options: [
          {
            id: 'only_ceo',
            value: 'No, only the CEO interacts with investors',
          },
          {
            id: 'occasionally',
            value: 'Occasionally involved in investor discussions',
          },
          {
            id: 'regularly',
            value: 'Regularly engages with investors and board members',
          },
        ],
      },
      strategicInvolvement: {
        id: 'strategic-involvement',
        type: FieldType.Dropdown,
        label: 'How involved is this executive in strategic decision-making?',
        required: true,
        nextField: null,
        options: [
          { id: 'minimal', value: 'Minimal involvement, execution-focused' },
          {
            id: 'some_input',
            value: 'Some input, but not leading key initiatives',
          },
          {
            id: 'fully_engaged',
            value: 'Fully engaged in strategy and company vision',
          },
        ],
      },
    },
    nextNode: 'established-departments',
  },
  q8: {
    sectionTitle: 'Established Departments',
    sectionId: 'established-departments',
    firstField: 'departments',
    fields: {
      departments: {
        id: 'departments',
        type: FieldType.Dropdown,
        label:
          'Which of the following departments are formally established in your company?',
        required: true,
        nextField: null,
        options: [
          { id: 'marketing', value: 'Marketing & Growth' },
          { id: 'sales', value: 'Sales & Business Development' },
          { id: 'finance', value: 'Finance & Accounting' },
          { id: 'procurement', value: 'Procurement & Supply Chain' },
          { id: 'legal', value: 'Legal & Compliance' },
          { id: 'hr', value: 'Human Resources (HR)' },
          { id: 'data', value: 'Data & Analytics' },
          { id: 'customer_support', value: 'Customer Support & Success' },
          { id: 'technology', value: 'Technology & IT' },
          { id: 'product', value: 'Product Management' },
          { id: 'engineering', value: 'Software Development & Engineering' },
          { id: 'ops', value: 'Operations & Logistics' },
          { id: 'rnd', value: 'Research & Development (R&D)' },
          { id: 'other', value: 'Other (please specify)' },
          { id: 'less_than_3', value: 'Less than 3 departments' },
          { id: '3_4', value: '3-4 departments' },
          { id: '5_6', value: '5-6 departments' },
          { id: '7_9', value: '7-9 departments' },
          { id: '10_plus', value: '10+ departments' },
        ],
      },
    },
    nextNode: 'department-kpis',
  },
  q9: {
    sectionTitle: 'Departmental KPIs',
    sectionId: 'department-kpis',
    firstField: 'departmentKpis',
    fields: {
      departmentKpis: {
        id: 'department-kpis',
        type: FieldType.Dropdown,
        label:
          'Does each department have clear ownership of KPIs and performance metrics?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_kpis',
            value: 'No clear KPIs, performance is not measured',
          },
          {
            id: 'some_kpis',
            value: 'Some KPIs exist, but tracking is inconsistent',
          },
          {
            id: 'yes_kpis',
            value: 'Yes, department KPIs are defined, tracked, and optimized',
          },
        ],
      },
    },
    nextNode: 'internal-tools',
  },
  q10: {
    sectionTitle: 'Internal Collaboration Tools',
    sectionId: 'internal-tools',
    firstField: 'internalTools',
    fields: {
      internalTools: {
        id: 'internal-tools',
        type: FieldType.Dropdown,
        label: 'What tools or platforms are used for internal collaboration?',
        required: true,
        nextField: null,
        options: [
          { id: 'no_tools', value: 'No tools, communication is unstructured' },
          {
            id: 'some_tools',
            value: 'Some tools, but communication is still fragmented',
          },
          {
            id: 'centralized_tools',
            value:
              'Centralized project management and communication tools (Slack, Asana, Jira, etc.)',
          },
        ],
      },
    },
    nextNode: 'reporting-system',
  },
  q11: {
    sectionTitle: 'Reporting System',
    sectionId: 'reporting-system',
    firstField: 'reportingSystem',
    fields: {
      reportingSystem: {
        id: 'reporting-system',
        type: FieldType.Dropdown,
        label:
          'Are all department heads required to submit periodic reports on performance and progress?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_reporting',
            value: 'No formal reporting system, performance tracking is ad hoc',
          },
          {
            id: 'inconsistent_reporting',
            value: 'Some reporting exists, but inconsistently tracked',
          },
          {
            id: 'structured_reporting',
            value: 'Yes, monthly/quarterly structured reports exist',
          },
        ],
      },
    },
    nextNode: 'scalability',
  },
  q12: {
    sectionTitle: 'Scalability Readiness',
    sectionId: 'scalability',
    firstField: 'scalability',
    fields: {
      scalability: {
        id: 'scalability',
        type: FieldType.Dropdown,
        label:
          'How resilient is the company s department structure in handling rapid scaling?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'not_prepared',
            value: 'The company is not structurally prepared for rapid growth',
          },
          {
            id: 'some_gaps',
            value: 'Some departments are scalable, but gaps exist',
          },
          {
            id: 'fully_scalable',
            value:
              'Departments are structured for scalability and can handle rapid expansion',
          },
        ],
      },
    },
    nextNode: 'career-progression',
  },
  q13: {
    sectionTitle: 'Career Progression',
    sectionId: 'career-progression',
    firstField: 'careerPaths',
    fields: {
      careerPaths: {
        id: 'career-paths',
        type: FieldType.Dropdown,
        label:
          'How well-defined are the career progression paths within each department?',
        required: true,
        nextField: null,
        options: [
          { id: 'no_structure', value: 'No structured career growth plans' },
          {
            id: 'some_structure',
            value:
              'Some career progression structure exists, but not fully developed',
          },
          {
            id: 'clear_paths',
            value: 'Clear promotion paths & professional development programs',
          },
        ],
      },
    },
    nextNode: 'leadership-hiring',
  },
  q14: {
    sectionTitle: 'Leadership Hiring Strategy',
    sectionId: 'leadership-hiring',
    firstField: 'leadershipHiring',
    fields: {
      leadershipHiring: {
        id: 'leadership-hiring',
        type: FieldType.Dropdown,
        label:
          'How frequently are internal promotions vs. external hires made for leadership roles?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'mostly_external',
            value: 'Mostly external hires, little internal growth',
          },
          {
            id: 'mixed',
            value: 'Mix of internal promotions and external hires',
          },
          {
            id: 'mostly_internal',
            value:
              'Majority of leadership positions filled through internal promotions',
          },
        ],
      },
    },
    nextNode: 'global-workflows',
  },
  q15: {
    sectionTitle: 'Global Workflow Optimization',
    sectionId: 'global-workflows',
    firstField: 'globalWorkflow',
    fields: {
      globalWorkflow: {
        id: 'global-workflow',
        type: FieldType.Dropdown,
        label:
          'Are interdepartmental workflows optimized for multi-location or global operations?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_global',
            value: 'No global operations or processes are still manual',
          },
          {
            id: 'some_structure',
            value: 'Some structure, but inefficiencies still exist',
          },
          {
            id: 'fully_optimized',
            value: 'Yes, fully structured processes for global teams',
          },
        ],
      },
    },
    nextNode: 'compliance',
  },
  q16: {
    sectionTitle: 'Compliance and Risk',
    sectionId: 'compliance',
    firstField: 'complianceDept',
    fields: {
      complianceDept: {
        id: 'compliance-dept',
        type: FieldType.Dropdown,
        label:
          'Does the company have a dedicated compliance or risk management department?',
        required: true,
        nextField: null,
        options: [
          { id: 'no_compliance', value: 'No structured compliance process' },
          {
            id: 'some_compliance',
            value: 'Some compliance oversight, but no dedicated department',
          },
          {
            id: 'yes_compliance',
            value: 'Yes, fully developed compliance team',
          },
        ],
      },
    },
    nextNode: 'department-optimization',
  },
  q17: {
    sectionTitle: 'Department Optimization',
    sectionId: 'department-optimization',
    firstField: 'departmentReview',
    fields: {
      departmentReview: {
        id: 'department-review',
        type: FieldType.Dropdown,
        label:
          'How frequently does the company restructure or optimize its departments?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'never',
            value: 'No structured review, departments remain static',
          },
          {
            id: 'occasionally',
            value: 'Occasionally, but not on a set schedule',
          },
          {
            id: '6_12_months',
            value: 'Every 6-12 months to match scaling needs',
          },
        ],
      },
    },
  },
};
