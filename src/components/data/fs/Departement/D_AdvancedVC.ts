import { FieldType } from '@/components/data/MainFlow/flow';

export const D_Advanced_VC_Flow = {
  q1: {
    sectionTitle: 'Organizational Chart',
    sectionId: 'organizational-chart',
    firstField: 'organizationalChart',
    fields: {
      organizationalChart: {
        id: 'organizational-chart',
        type: FieldType.Dropdown,
        label:
          'Does the company have a formal and documented organizational chart?',
        required: true,
        validation:
          'z.enum(["no_formal_chart", "partial_chart", "full_chart"], { required_error: "Please select an organizational chart status" })',
        options: [
          {
            id: 'no_formal_chart',
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
        nextField: null,
      },
    },
    nextNode: 'organizational-structure-review',
  },
  q2: {
    sectionTitle: 'Organizational Structure Review',
    sectionId: 'organizational-structure-review',
    firstField: 'structureReview',
    fields: {
      structureReview: {
        id: 'structure-review',
        type: FieldType.Dropdown,
        label:
          'How often is the organizational structure reviewed and updated?',
        required: true,
        validation:
          'z.enum(["no_review", "yearly", "quarterly"], { required_error: "Please select review frequency" })',
        options: [
          { id: 'no_review', value: 'No structured review process' },
          { id: 'yearly', value: 'Once a year' },
          {
            id: 'quarterly',
            value: 'Every quarter or as the company scales',
          },
        ],
        nextField: null,
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
        validation:
          'z.enum(["5_plus_layers", "3_to_4_layers", "1_to_2_layers"], { required_error: "Please select number of management layers" })',
        options: [
          {
            id: '5_plus_layers',
            value: '5+ layers (may indicate inefficiency for Series A)',
          },
          {
            id: '3_to_4_layers',
            value: '3-4 layers (scaling but not overly complex)',
          },
          { id: '1_to_2_layers', value: '1-2 layers (lean and efficient)' },
        ],
        nextField: null,
      },
    },
    nextNode: 'department-reporting-structure',
  },
  q4: {
    sectionTitle: 'Department Reporting Structure',
    sectionId: 'department-reporting-structure',
    firstField: 'departmentReporting',
    fields: {
      departmentReporting: {
        id: 'department-reporting',
        type: FieldType.Dropdown,
        label:
          'Does each department report directly to its respective C-level executive?',
        required: true,
        validation:
          'z.enum(["no_clear_reporting", "mixed_reporting", "direct_reporting"], { required_error: "Please select reporting structure" })',
        options: [
          {
            id: 'no_clear_reporting',
            value: 'No clear reporting structure',
          },
          {
            id: 'mixed_reporting',
            value: 'Mixed reporting structure (some direct, some fragmented)',
          },
          {
            id: 'direct_reporting',
            value: 'Yes, direct reporting to C-level executives',
          },
        ],
        nextField: null,
      },
    },
    nextNode: 'business-units-expansion',
  },
  q5: {
    sectionTitle: 'Business Units Expansion',
    sectionId: 'business-units-expansion',
    firstField: 'businessUnits',
    fields: {
      businessUnits: {
        id: 'business-units',
        type: FieldType.Dropdown,
        label:
          'Has the company expanded into multiple business units or divisions?',
        required: true,
        validation:
          'z.enum(["single_entity", "partial_divisions", "clear_separation"], { required_error: "Please select business units expansion status" })',
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
            id: 'clear_separation',
            value: 'Yes, clear separation of business units',
          },
        ],
        nextField: null,
      },
    },
    nextNode: 'middle-management-structure',
  },
  q6: {
    sectionTitle: 'Middle Management Structure',
    sectionId: 'middle-management-structure',
    firstField: 'middleManagement',
    fields: {
      middleManagement: {
        id: 'middle-management',
        type: FieldType.Dropdown,
        label:
          'Does each department have a middle management layer separate from senior leadership?',
        required: true,
        validation:
          'z.enum(["no_middle_management", "some_middle_management", "structured_middle_management"], { required_error: "Please select middle management structure" })',
        options: [
          {
            id: 'no_middle_management',
            value: 'No, all teams still report directly to senior executives',
          },
          {
            id: 'some_middle_management',
            value: "Some departments have middle management, others don't",
          },
          {
            id: 'structured_middle_management',
            value: 'Yes, structured middle management is in place',
          },
        ],
        nextField: null,
      },
    },
    nextNode: 'c-level-executive-structure',
  },
  q7: {
    sectionTitle: 'C-Level Executive Structure',
    sectionId: 'c-level-executive-structure',
    firstField: 'cLevelRolesPresent',
    fields: {
      cLevelRolesPresent: {
        id: 'c-level-roles-present',
        type: FieldType.Dropdown,
        label:
          'Which of the following C-level executives are present in the company? (Select all that apply)',
        required: true,
        validation:
          'z.array(z.enum(["ceo", "coo", "cfo", "cto", "cmo", "cpo", "cro", "chro", "clo", "other"])).min(1, "Please select at least one C-level executive")',
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
        ],
        nextField: 'cLevelCount',
      },
      cLevelCount: {
        id: 'c-level-count',
        type: FieldType.Dropdown,
        label: 'How many C-level executives are present in the company?',
        required: true,
        validation:
          'z.enum(["no_c_level", "1_to_2", "3_to_5", "6_to_8", "9_plus"], { required_error: "Please select number of C-level executives" })',
        options: [
          { id: 'no_c_level', value: 'No formal C-level structure yet' },
          { id: '1_to_2', value: '1-2 C-level executives' },
          { id: '3_to_5', value: '3-5 C-level executives' },
          { id: '6_to_8', value: '6-8 C-level executives' },
          { id: '9_plus', value: '9-10+' },
        ],
        nextField: null,
      },
    },
    nextNode: 'c-level-executive-evaluation',
  },
  q8: {
    sectionTitle: 'C-Level Executive Evaluation',
    sectionId: 'c-level-executive-evaluation',
    firstField: 'educationLevel',
    fields: {
      educationLevel: {
        id: 'education-level',
        type: FieldType.Dropdown,
        label: 'What is their highest level of education?',
        required: true,
        validation:
          'z.enum(["no_degree", "bachelors", "masters", "phd"], { required_error: "Please select education level" })',
        options: [
          { id: 'no_degree', value: 'No formal degree' },
          { id: 'bachelors', value: "Bachelor's degree" },
          { id: 'masters', value: "Master's degree (MBA, MSc, etc.)" },
          { id: 'phd', value: 'PhD or specialized industry certification' },
        ],
        nextField: 'yearsExperience',
      },
      yearsExperience: {
        id: 'years-experience',
        type: FieldType.Dropdown,
        label:
          'How many years of experience does this C-level executive have in their respective field?',
        required: true,
        validation:
          'z.enum(["less_than_3_years", "3_to_5_years", "6_to_10_years", "10_plus_years"], { required_error: "Please select years of experience" })',
        options: [
          { id: 'less_than_3_years', value: 'Less than 3 years' },
          { id: '3_to_5_years', value: '3-5 years' },
          { id: '6_to_10_years', value: '6-10 years' },
          { id: '10_plus_years', value: '10+ years' },
        ],
        nextField: 'startupLeadershipExperience',
      },
      startupLeadershipExperience: {
        id: 'startup-leadership-experience',
        type: FieldType.Dropdown,
        label:
          'Has this executive previously held a leadership role in a startup or high-growth company?',
        required: true,
        validation:
          'z.enum(["no_prior_leadership", "some_leadership_exposure", "previous_leadership_role"], { required_error: "Please select startup leadership experience" })',
        options: [
          {
            id: 'no_prior_leadership',
            value: 'No prior leadership experience',
          },
          {
            id: 'some_leadership_exposure',
            value: 'Some leadership exposure, but not in a startup',
          },
          {
            id: 'previous_leadership_role',
            value: 'Previous leadership role in a high-growth startup',
          },
        ],
        nextField: 'industryExperience',
      },
      industryExperience: {
        id: 'industry-experience',
        type: FieldType.Dropdown,
        label: 'What is their industry experience?',
        required: true,
        validation:
          'z.enum(["no_relevant_experience", "some_industry_exposure", "5_plus_years_experience"], { required_error: "Please select industry experience level" })',
        options: [
          {
            id: 'no_relevant_experience',
            value: 'No relevant industry experience',
          },
          {
            id: 'some_industry_exposure',
            value: 'Some industry exposure but not extensive',
          },
          {
            id: '5_plus_years_experience',
            value: '5+ years in the same industry',
          },
        ],
        nextField: 'investorRelationsParticipation',
      },
      investorRelationsParticipation: {
        id: 'investor-relations-participation',
        type: FieldType.Dropdown,
        label:
          'Does this executive participate in investor relations and board meetings?',
        required: true,
        validation:
          'z.enum(["no_investor_interaction", "occasional_involvement", "regularly_engages"], { required_error: "Please select investor relations participation level" })',
        options: [
          {
            id: 'no_investor_interaction',
            value: 'No, only the CEO interacts with investors',
          },
          {
            id: 'occasional_involvement',
            value: 'Occasionally involved in investor discussions',
          },
          {
            id: 'regularly_engages',
            value: 'Regularly engages with investors and board members',
          },
        ],
        nextField: 'strategicDecisionInvolvement',
      },
      strategicDecisionInvolvement: {
        id: 'strategic-decision-involvement',
        type: FieldType.Dropdown,
        label: 'How involved is this executive in strategic decision-making?',
        required: true,
        validation:
          'z.enum(["minimal_involvement", "some_input", "fully_engaged"], { required_error: "Please select strategic decision involvement level" })',
        options: [
          {
            id: 'minimal_involvement',
            value: 'Minimal involvement, execution-focused',
          },
          {
            id: 'some_input',
            value: 'Some input, but not leading key initiatives',
          },
          {
            id: 'fully_engaged',
            value: 'Fully engaged in strategy and company vision',
          },
        ],
        nextField: null,
      },
    },
    nextNode: 'department-structure-evaluation',
  },
  q9: {
    sectionTitle: 'Department Structure & Evaluation',
    sectionId: 'department-structure-evaluation',
    firstField: 'departmentsEstablished',
    fields: {
      departmentsEstablished: {
        id: 'departments-established',
        type: FieldType.Dropdown,
        label:
          'Which of the following departments are formally established in your company? (Select all that apply)',
        required: true,
        validation:
          'z.array(z.enum(["marketing_growth", "sales_dev", "finance_accounting", "procurement_supply_chain", "legal_compliance", "hr", "data_analytics", "customer_support", "tech_it", "product_management", "software_dev", "ops_logistics", "r_and_d", "other"])).min(1, "Please select at least one established department")',
        options: [
          { id: 'marketing_growth', value: 'Marketing & Growth' },
          { id: 'sales_dev', value: 'Sales & Business Development' },
          { id: 'finance_accounting', value: 'Finance & Accounting' },
          {
            id: 'procurement_supply_chain',
            value: 'Procurement & Supply Chain',
          },
          { id: 'legal_compliance', value: 'Legal & Compliance' },
          { id: 'hr', value: 'Human Resources (HR)' },
          { id: 'data_analytics', value: 'Data & Analytics' },
          { id: 'customer_support', value: 'Customer Support & Success' },
          { id: 'tech_it', value: 'Technology & IT' },
          { id: 'product_management', value: 'Product Management' },
          {
            id: 'software_dev',
            value: 'Software Development & Engineering',
          },
          { id: 'ops_logistics', value: 'Operations & Logistics' },
          { id: 'r_and_d', value: 'Research & Development (R&D)' },
          { id: 'other', value: 'Other (please specify)' },
        ],
        nextField: 'departmentsCount',
      },
      departmentsCount: {
        id: 'departments-count',
        type: FieldType.Dropdown,
        label: 'How many departments are formally established?',
        required: true,
        validation:
          'z.enum(["less_than_3", "3_to_4", "5_to_6", "7_to_9", "10_plus"], { required_error: "Please select number of departments" })',
        options: [
          { id: 'less_than_3', value: 'Less than 3 departments' },
          { id: '3_to_4', value: '3-4 departments' },
          { id: '5_to_6', value: '5-6 departments' },
          { id: '7_to_9', value: '7-9 departments' },
          { id: '10_plus', value: '10+ departments' },
        ],
        nextField: 'departmentHeadEducation',
      },
      departmentHeadEducation: {
        id: 'department-head-education',
        type: FieldType.Dropdown,
        label:
          'What is the highest level of education for the department head?',
        required: true,
        validation:
          'z.enum(["no_degree", "bachelors", "masters", "phd"], { required_error: "Please select department head education level" })',
        options: [
          { id: 'no_degree', value: 'No formal degree' },
          { id: 'bachelors', value: "Bachelor's degree" },
          { id: 'masters', value: "Master's degree (MBA, MSc, etc.)" },
          { id: 'phd', value: 'PhD or specialized certification' },
        ],
        nextField: 'departmentHeadExperience',
      },
      departmentHeadExperience: {
        id: 'department-head-experience',
        type: FieldType.Dropdown,
        label:
          'How many years of experience does the department head have in this function?',
        required: true,
        validation:
          'z.enum(["less_than_3_years", "3_to_5_years", "6_to_10_years", "10_plus_years"], { required_error: "Please select department head experience level" })',
        options: [
          { id: 'less_than_3_years', value: 'Less than 3 years' },
          { id: '3_to_5_years', value: '3-5 years' },
          { id: '6_to_10_years', value: '6-10 years' },
          { id: '10_plus_years', value: '10+ years' },
        ],
        nextField: 'departmentHeadStartupExperience',
      },
      departmentHeadStartupExperience: {
        id: 'department-head-startup-experience',
        type: FieldType.Dropdown,
        label:
          'Has this department head previously worked in a startup or high-growth company?',
        required: true,
        validation:
          'z.enum(["no_startup_experience", "some_exposure", "extensive_startup_experience"], { required_error: "Please select department head startup experience" })',
        options: [
          {
            id: 'no_startup_experience',
            value: 'No prior startup experience',
          },
          {
            id: 'some_exposure',
            value: 'Some exposure but no leadership role',
          },
          {
            id: 'extensive_startup_experience',
            value: 'Extensive startup experience in a similar role',
          },
        ],
        nextField: 'departmentTeamSize',
      },
      departmentTeamSize: {
        id: 'department-team-size',
        type: FieldType.Dropdown,
        label: 'How many employees currently work in this department?',
        required: true,
        validation:
          'z.enum(["1_to_3_employees", "4_to_7_employees", "8_to_12_employees", "13_plus_employees"], { required_error: "Please select department team size" })',
        options: [
          { id: '1_to_3_employees', value: '1-3 employees' },
          { id: '4_to_7_employees', value: '4-7 employees' },
          { id: '8_to_12_employees', value: '8-12 employees' },
          { id: '13_plus_employees', value: '13+ employees' },
        ],
        nextField: 'experiencedEmployeesPercentage',
      },
      experiencedEmployeesPercentage: {
        id: 'experienced-employees-percentage',
        type: FieldType.Dropdown,
        label:
          'What percentage of employees in this department have 5+ years of experience in their field?',
        required: true,
        validation:
          'z.enum(["less_than_20_percent", "20_to_50_percent", "more_than_50_percent"], { required_error: "Please select experienced employees percentage" })',
        options: [
          { id: 'less_than_20_percent', value: 'Less than 20%' },
          { id: '20_to_50_percent', value: '20-50%' },
          { id: 'more_than_50_percent', value: 'More than 50%' },
        ],
        nextField: 'performanceReviewFrequency',
      },
      performanceReviewFrequency: {
        id: 'performance-review-frequency',
        type: FieldType.Dropdown,
        label:
          'How frequently does this department conduct performance reviews?',
        required: true,
        validation:
          'z.enum(["no_reviews", "yearly", "bi_annually", "quarterly"], { required_error: "Please select performance review frequency" })',
        options: [
          {
            id: 'no_reviews',
            value: 'No structured performance evaluation',
          },
          { id: 'yearly', value: 'Once a year' },
          { id: 'bi_annually', value: 'Twice a year' },
          { id: 'quarterly', value: 'Every quarter' },
        ],
        nextField: 'workflowToolsUsage',
      },
      workflowToolsUsage: {
        id: 'workflow-tools-usage',
        type: FieldType.Dropdown,
        label:
          'Does this department use dedicated tools/software to manage workflows?',
        required: true,
        validation:
          'z.enum(["no_tools", "some_tools", "fully_equipped"], { required_error: "Please select workflow tools usage level" })',
        options: [
          {
            id: 'no_tools',
            value: 'No specialized tools, processes are manual',
          },
          {
            id: 'some_tools',
            value: 'Some tools available, but limited functionality',
          },
          {
            id: 'fully_equipped',
            value: 'Yes, fully equipped with industry-standard tools',
          },
        ],
        nextField: 'processDocumentation',
      },
      processDocumentation: {
        id: 'process-documentation',
        type: FieldType.Dropdown,
        label:
          'Does this department have documented processes for its core functions?',
        required: true,
        validation:
          'z.enum(["no_documentation", "some_documentation", "fully_documented"], { required_error: "Please select process documentation level" })',
        options: [
          {
            id: 'no_documentation',
            value:
              'No formal documentation, operations rely on verbal coordination',
          },
          {
            id: 'some_documentation',
            value:
              'Some processes are documented, but not consistently followed',
          },
          {
            id: 'fully_documented',
            value: 'Yes, all workflows are documented and followed',
          },
        ],
        nextField: 'processReviewFrequency',
      },
      processReviewFrequency: {
        id: 'process-review-frequency',
        type: FieldType.Dropdown,
        label: 'How often are departmental processes reviewed and updated?',
        required: true,
        validation:
          'z.enum(["never", "yearly", "bi_annually", "quarterly"], { required_error: "Please select process review frequency" })',
        options: [
          { id: 'never', value: 'Never or informally reviewed' },
          { id: 'yearly', value: 'Once a year' },
          { id: 'bi_annually', value: 'Twice a year' },
          { id: 'quarterly', value: 'Quarterly' },
        ],
        nextField: 'bottleneckResolution',
      },
      bottleneckResolution: {
        id: 'bottleneck-resolution',
        type: FieldType.Dropdown,
        label:
          'How are bottlenecks in workflows typically identified and resolved?',
        required: true,
        validation:
          'z.enum(["no_method", "informal_discussions", "data_driven"], { required_error: "Please select bottleneck resolution method" })',
        options: [
          {
            id: 'no_method',
            value: 'No structured method, issues are resolved reactively',
          },
          {
            id: 'informal_discussions',
            value: 'Informal discussions and problem-solving',
          },
          {
            id: 'data_driven',
            value: 'Data-driven approach (KPIs, tracking, dashboards)',
          },
        ],
        nextField: null,
      },
    },
    nextNode: 'department-kpis-performance',
  },
  q10: {
    sectionTitle: 'Department KPIs & Performance',
    sectionId: 'department-kpis-performance',
    firstField: 'departmentKpis',
    fields: {
      departmentKpis: {
        id: 'department-kpis',
        type: FieldType.Dropdown,
        label:
          'Does each department have clear ownership of KPIs and performance metrics?',
        required: true,
        validation:
          'z.enum(["no_kpis", "some_kpis", "clear_kpis"], { required_error: "Please select KPIs ownership level" })',
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
            id: 'clear_kpis',
            value: 'Yes, department KPIs are defined, tracked, and optimized',
          },
        ],
        nextField: null,
      },
    },
    nextNode: 'internal-collaboration-tools',
  },
  q11: {
    sectionTitle: 'Internal Collaboration Tools',
    sectionId: 'internal-collaboration-tools',
    firstField: 'collaborationTools',
    fields: {
      collaborationTools: {
        id: 'collaboration-tools',
        type: FieldType.Dropdown,
        label: 'What tools or platforms are used for internal collaboration?',
        required: true,
        validation:
          'z.enum(["no_tools", "some_tools", "centralized_tools"], { required_error: "Please select collaboration tools level" })',
        options: [
          {
            id: 'no_tools',
            value: 'No tools, communication is unstructured',
          },
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
        nextField: null,
      },
    },
    nextNode: 'department-reporting-system',
  },
  q12: {
    sectionTitle: 'Department Reporting System',
    sectionId: 'department-reporting-system',
    firstField: 'periodicReports',
    fields: {
      periodicReports: {
        id: 'periodic-reports',
        type: FieldType.Dropdown,
        label:
          'Are all department heads required to submit periodic reports on performance and progress?',
        required: true,
        validation:
          'z.enum(["no_reporting", "some_reporting", "structured_reporting"], { required_error: "Please select reporting system level" })',
        options: [
          {
            id: 'no_reporting',
            value: 'No formal reporting system, performance tracking is ad hoc',
          },
          {
            id: 'some_reporting',
            value: 'Some reporting exists, but inconsistently tracked',
          },
          {
            id: 'structured_reporting',
            value: 'Yes, monthly/quarterly structured reports exist',
          },
        ],
        nextField: null,
      },
    },
    nextNode: 'scalability-resilience',
  },
  q13: {
    sectionTitle: 'Scalability Resilience',
    sectionId: 'scalability-resilience',
    firstField: 'scalabilityResilience',
    fields: {
      scalabilityResilience: {
        id: 'scalability-resilience',
        type: FieldType.Dropdown,
        label:
          "How resilient is the company's department structure in handling rapid scaling?",
        required: true,
        validation:
          'z.enum(["not_prepared", "partially_scalable", "structured_for_scalability"], { required_error: "Please select scalability resilience level" })',
        options: [
          {
            id: 'not_prepared',
            value: 'The company is not structurally prepared for rapid growth',
          },
          {
            id: 'partially_scalable',
            value: 'Some departments are scalable, but gaps exist',
          },
          {
            id: 'structured_for_scalability',
            value:
              'Departments are structured for scalability and can handle rapid expansion',
          },
        ],
        nextField: null,
      },
    },
    nextNode: 'career-progression-paths',
  },
  q14: {
    sectionTitle: 'Career Progression Paths',
    sectionId: 'career-progression-paths',
    firstField: 'careerProgression',
    fields: {
      careerProgression: {
        id: 'career-progression',
        type: FieldType.Dropdown,
        label:
          'How well-defined are the career progression paths within each department?',
        required: true,
        validation:
          'z.enum(["no_growth_plans", "some_structure", "clear_paths"], { required_error: "Please select career progression structure level" })',
        options: [
          {
            id: 'no_growth_plans',
            value: 'No structured career growth plans',
          },
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
        nextField: null,
      },
    },
    nextNode: 'internal-vs-external-hires',
  },
  q15: {
    sectionTitle: 'Internal vs External Hires',
    sectionId: 'internal-vs-external-hires',
    firstField: 'hiringPattern',
    fields: {
      hiringPattern: {
        id: 'hiring-pattern',
        type: FieldType.Dropdown,
        label:
          'How frequently are internal promotions vs. external hires made for leadership roles?',
        required: true,
        validation:
          'z.enum(["mostly_external", "mix_internal_external", "mostly_internal"], { required_error: "Please select hiring pattern" })',
        options: [
          {
            id: 'mostly_external',
            value: 'Mostly external hires, little internal growth',
          },
          {
            id: 'mix_internal_external',
            value: 'Mix of internal promotions and external hires',
          },
          {
            id: 'mostly_internal',
            value:
              'Majority of leadership positions filled through internal promotions',
          },
        ],
        nextField: null,
      },
    },
    nextNode: 'global-operations-optimization',
  },
  q16: {
    sectionTitle: 'Global Operations Optimization',
    sectionId: 'global-operations-optimization',
    firstField: 'globalOperations',
    fields: {
      globalOperations: {
        id: 'global-operations',
        type: FieldType.Dropdown,
        label:
          'Are interdepartmental workflows optimized for multi-location or global operations?',
        required: true,
        validation:
          'z.enum(["no_global_ops", "some_structure", "fully_structured"], { required_error: "Please select global operations optimization level" })',
        options: [
          {
            id: 'no_global_ops',
            value: 'No global operations or processes are still manual',
          },
          {
            id: 'some_structure',
            value: 'Some structure, but inefficiencies still exist',
          },
          {
            id: 'fully_structured',
            value: 'Yes, fully structured processes for global teams',
          },
        ],
        nextField: null,
      },
    },
    nextNode: 'compliance-risk-management',
  },
  q17: {
    sectionTitle: 'Compliance & Risk Management',
    sectionId: 'compliance-risk-management',
    firstField: 'complianceRisk',
    fields: {
      complianceRisk: {
        id: 'compliance-risk',
        type: FieldType.Dropdown,
        label:
          'Does the company have a dedicated compliance or risk management department?',
        required: true,
        validation:
          'z.enum(["no_compliance", "some_oversight", "dedicated_team"], { required_error: "Please select compliance and risk management level" })',
        options: [
          {
            id: 'no_compliance',
            value: 'No structured compliance process',
          },
          {
            id: 'some_oversight',
            value: 'Some compliance oversight, but no dedicated department',
          },
          {
            id: 'dedicated_team',
            value: 'Yes, fully developed compliance team',
          },
        ],
        nextField: null,
      },
    },
    nextNode: 'department-restructuring-frequency',
  },
  q18: {
    sectionTitle: 'Department Restructuring Frequency',
    sectionId: 'department-restructuring-frequency',
    firstField: 'restructuringFrequency',
    fields: {
      restructuringFrequency: {
        id: 'restructuring-frequency',
        type: FieldType.Dropdown,
        label:
          'How frequently does the company restructure or optimize its departments?',
        required: true,
        validation:
          'z.enum(["no_review", "occasionally", "every_6_to_12_months"], { required_error: "Please select restructuring frequency" })',
        options: [
          {
            id: 'no_review',
            value: 'No structured review, departments remain static',
          },
          {
            id: 'occasionally',
            value: 'Occasionally, but not on a set schedule',
          },
          {
            id: 'every_6_to_12_months',
            value: 'Every 6-12 months to match scaling needs',
          },
        ],
        nextField: null,
      },
    },
    nextNode: null,
  },
};
