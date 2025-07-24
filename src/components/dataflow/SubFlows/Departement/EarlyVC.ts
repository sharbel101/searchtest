import { FieldType } from '../../MainFlow/flow';

export const Early_VC_Flow = {
  q1: {
    sectionTitle: 'Organizational Chart Documentation',
    sectionId: 'organizational-chart-documentation',
    fields: {
      organizationalChartDocumentation: {
        id: 'organizational-chart-documentation',
        type: FieldType.Dropdown,
        label:
          'Does the company have a formal and documented organizational chart?',
        required: true,
        options: [
          {
            id: 'no_formal_chart',
            value: 'No formal org chart, structure is still loosely defined',
          },
          {
            id: 'partially_structured',
            value:
              'A partially structured org chart exists, but not fully documented',
          },
          {
            id: 'fully_structured',
            value: 'Yes, a fully structured and updated org chart exists',
          },
        ],
      },
    },
    nextNode: 'q2',
  },

  q2: {
    sectionTitle: 'Organizational Structure Review Frequency',
    sectionId: 'organizational-structure-review-frequency',
    fields: {
      organizationalStructureReview: {
        id: 'organizational-structure-review',
        type: FieldType.Dropdown,
        label:
          'How often is the organizational structure reviewed and updated?',
        required: true,
        options: [
          {
            id: 'no_structured_review',
            value: 'No structured review process',
          },
          {
            id: 'once_a_year',
            value: 'Once a year',
          },
          {
            id: 'quarterly_or_scaling',
            value: 'Every quarter or as the company scales',
          },
        ],
      },
    },
    nextNode: 'q3',
  },

  q3: {
    sectionTitle: 'Management Layers',
    sectionId: 'management-layers',
    fields: {
      managementLayers: {
        id: 'management-layers',
        type: FieldType.Dropdown,
        label:
          'How many management layers exist between entry-level employees and the CEO?',
        required: true,
        options: [
          {
            id: '5_plus_layers',
            value: '5+ layers (may indicate inefficiency for Series A)',
          },
          {
            id: '3_to_4_layers',
            value: '3-4 layers (scaling but not overly complex)',
          },
          {
            id: '1_to_2_layers',
            value: '1-2 layers (lean and efficient)',
          },
        ],
      },
    },
    nextNode: 'q4',
  },

  q4: {
    sectionTitle: 'Department Reporting Structure',
    sectionId: 'department-reporting-structure',
    fields: {
      departmentReportingStructure: {
        id: 'department-reporting-structure',
        type: FieldType.Dropdown,
        label:
          'Does each department report directly to its respective C-level executive?',
        required: true,
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
      },
    },
    nextNode: 'q5',
  },

  q5: {
    sectionTitle: 'C-Level Executives Present',
    sectionId: 'c-level-executives-present',
    fields: {
      cLevelExecutivesPresent: {
        id: 'c-level-executives-present',
        type: FieldType.Dropdown,
        label:
          'Which of the following C-level executives are present in the company? (Select all that apply)',
        required: true,
        options: [
          {
            id: 'ceo',
            value: 'Chief Executive Officer (CEO)',
          },
          {
            id: 'coo',
            value: 'Chief Operating Officer (COO)',
          },
          {
            id: 'cfo',
            value: 'Chief Financial Officer (CFO)',
          },
          {
            id: 'cto',
            value: 'Chief Technology Officer (CTO)',
          },
          {
            id: 'cmo',
            value: 'Chief Marketing Officer (CMO)',
          },
          {
            id: 'cpo',
            value: 'Chief Product Officer (CPO)',
          },
          {
            id: 'cro',
            value: 'Chief Revenue Officer (CRO)',
          },
          {
            id: 'chro',
            value: 'Chief Human Resources Officer (CHRO)',
          },
          {
            id: 'clo',
            value: 'Chief Legal Officer (CLO)',
          },
          {
            id: 'other',
            value: 'Other (please specify)',
          },
          {
            id: 'no_formal_structure',
            value: 'No formal C-level structure yet',
          },
          {
            id: '1_to_2_executives',
            value: '1-2 C-level executives',
          },
          {
            id: '3_to_5_executives',
            value: '3-5 C-level executives',
          },
          {
            id: '6_to_8_executives',
            value: '6-8 C-level executives',
          },
          {
            id: '9_to_10_plus',
            value: '9-10+',
          },
        ],
      },
    },
    nextNode: 'q6',
  },

  q6: {
    sectionTitle: 'C-Level Executive Education Level',
    sectionId: 'c-level-executive-education-level',
    fields: {
      cLevelExecutiveEducation: {
        id: 'c-level-executive-education',
        type: FieldType.Dropdown,
        label: 'What is their highest level of education?',
        required: true,
        options: [
          {
            id: 'no_formal_degree',
            value: 'No formal degree',
          },
          {
            id: 'bachelors_degree',
            value: "Bachelor's degree",
          },
          {
            id: 'masters_degree',
            value: "Master's degree (MBA, MSc, etc.)",
          },
          {
            id: 'phd_certification',
            value: 'PhD or specialized industry certification',
          },
        ],
      },
    },
    nextNode: 'q7',
  },

  q7: {
    sectionTitle: 'C-Level Executive Experience Years',
    sectionId: 'c-level-executive-experience-years',
    fields: {
      cLevelExecutiveExperience: {
        id: 'c-level-executive-experience',
        type: FieldType.Dropdown,
        label:
          'How many years of experience does this C-level executive have in their respective field?',
        required: true,
        options: [
          {
            id: 'less_than_3_years',
            value: 'Less than 3 years',
          },
          {
            id: '3_to_5_years',
            value: '3-5 years',
          },
          {
            id: '6_to_10_years',
            value: '6-10 years',
          },
          {
            id: '10_plus_years',
            value: '10+ years',
          },
        ],
      },
    },
    nextNode: 'q8',
  },

  q8: {
    sectionTitle: 'C-Level Executive Leadership Experience',
    sectionId: 'c-level-executive-leadership-experience',
    fields: {
      cLevelExecutiveLeadership: {
        id: 'c-level-executive-leadership',
        type: FieldType.Dropdown,
        label:
          'Has this executive previously held a leadership role in a startup or high-growth company?',
        required: true,
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
            id: 'previous_startup_leadership',
            value: 'Previous leadership role in a high-growth startup',
          },
        ],
      },
    },
    nextNode: 'q9',
  },

  q9: {
    sectionTitle: 'C-Level Executive Industry Experience',
    sectionId: 'c-level-executive-industry-experience',
    fields: {
      cLevelExecutiveIndustryExperience: {
        id: 'c-level-executive-industry-experience',
        type: FieldType.Dropdown,
        label: 'What is their industry experience?',
        required: true,
        options: [
          {
            id: 'no_relevant_industry',
            value: 'No relevant industry experience',
          },
          {
            id: 'some_industry_exposure',
            value: 'Some industry exposure but not extensive',
          },
          {
            id: '5_plus_years_industry',
            value: '5+ years in the same industry',
          },
        ],
      },
    },
    nextNode: 'q10',
  },

  q10: {
    sectionTitle: 'C-Level Executive Investor Relations',
    sectionId: 'c-level-executive-investor-relations',
    fields: {
      cLevelExecutiveInvestorRelations: {
        id: 'c-level-executive-investor-relations',
        type: FieldType.Dropdown,
        label:
          'Does this executive participate in investor relations and board meetings?',
        required: true,
        options: [
          {
            id: 'only_ceo_interacts',
            value: 'No, only the CEO interacts with investors',
          },
          {
            id: 'occasionally_involved',
            value: 'Occasionally involved in investor discussions',
          },
          {
            id: 'regularly_engages',
            value: 'Regularly engages with investors and board members',
          },
        ],
      },
    },
    nextNode: 'q11',
  },

  q11: {
    sectionTitle: 'C-Level Executive Strategic Decision Making',
    sectionId: 'c-level-executive-strategic-decision-making',
    fields: {
      cLevelExecutiveStrategicDecisions: {
        id: 'c-level-executive-strategic-decisions',
        type: FieldType.Dropdown,
        label: 'How involved is this executive in strategic decision-making?',
        required: true,
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
      },
    },
    nextNode: 'q12',
  },

  q12: {
    sectionTitle: 'Organization Chart Upload',
    sectionId: 'organization-chart-upload',
    fields: {
      organizationChartUpload: {
        id: 'organization-chart-upload',
        type: FieldType.File,
        label: 'Upload your organization chart',
        required: false,
        acceptedTypes: ['.pdf'],
      },
    },
    nextNode: 'q13',
  },

  q13: {
    sectionTitle: 'Formally Established Departments',
    sectionId: 'formally-established-departments',
    fields: {
      formallyEstablishedDepartments: {
        id: 'formally-established-departments',
        type: FieldType.Dropdown,
        label:
          'Which of the following departments are formally established in your company? (Select all that apply)',
        required: true,
        options: [
          {
            id: 'marketing_growth',
            value: 'Marketing & Growth',
          },
          {
            id: 'sales_business_development',
            value: 'Sales & Business Development',
          },
          {
            id: 'finance_accounting',
            value: 'Finance & Accounting',
          },
          {
            id: 'procurement_supply_chain',
            value: 'Procurement & Supply Chain',
          },
          {
            id: 'legal_compliance',
            value: 'Legal & Compliance',
          },
          {
            id: 'human_resources',
            value: 'Human Resources (HR)',
          },
          {
            id: 'data_analytics',
            value: 'Data & Analytics',
          },
          {
            id: 'customer_support_success',
            value: 'Customer Support & Success',
          },
          {
            id: 'technology_it',
            value: 'Technology & IT',
          },
          {
            id: 'product_management',
            value: 'Product Management',
          },
          {
            id: 'software_development',
            value: 'Software Development & Engineering',
          },
          {
            id: 'operations_logistics',
            value: 'Operations & Logistics',
          },
          {
            id: 'research_development',
            value: 'Research & Development (R&D)',
          },
          {
            id: 'other',
            value: 'Other (please specify)',
          },
          {
            id: 'less_than_3_departments',
            value: 'Less than 3 departments',
          },
          {
            id: '3_to_4_departments',
            value: '3-4 departments',
          },
          {
            id: '5_to_6_departments',
            value: '5-6 departments',
          },
          {
            id: '7_to_9_departments',
            value: '7-9 departments',
          },
          {
            id: '10_plus_departments',
            value: '10+ departments',
          },
        ],
      },
    },
    nextNode: 'q14',
  },

  q14: {
    sectionTitle: 'Department Head Education Level',
    sectionId: 'department-head-education-level',
    fields: {
      departmentHeadEducation: {
        id: 'department-head-education',
        type: FieldType.Dropdown,
        label: 'What is their highest level of education?',
        required: true,
        options: [
          {
            id: 'no_formal_degree',
            value: 'No formal degree',
          },
          {
            id: 'bachelors_degree',
            value: "Bachelor's degree",
          },
          {
            id: 'masters_degree',
            value: "Master's degree (MBA, MSc, etc.)",
          },
          {
            id: 'phd_certification',
            value: 'PhD or specialized certification',
          },
        ],
      },
    },
    nextNode: 'q15',
  },

  q15: {
    sectionTitle: 'Department Head Experience Years',
    sectionId: 'department-head-experience-years',
    fields: {
      departmentHeadExperience: {
        id: 'department-head-experience',
        type: FieldType.Dropdown,
        label:
          'How many years of experience does the department head have in this function?',
        required: true,
        options: [
          {
            id: 'less_than_3_years',
            value: 'Less than 3 years',
          },
          {
            id: '3_to_5_years',
            value: '3-5 years',
          },
          {
            id: '6_to_10_years',
            value: '6-10 years',
          },
          {
            id: '10_plus_years',
            value: '10+ years',
          },
        ],
      },
    },
    nextNode: 'q16',
  },

  q16: {
    sectionTitle: 'Department Head Startup Experience',
    sectionId: 'department-head-startup-experience',
    fields: {
      departmentHeadStartupExperience: {
        id: 'department-head-startup-experience',
        type: FieldType.Dropdown,
        label:
          'Has this department head previously worked in a startup or high-growth company?',
        required: true,
        options: [
          {
            id: 'no_prior_startup',
            value: 'No prior startup experience',
          },
          {
            id: 'some_exposure_no_leadership',
            value: 'Some exposure but no leadership role',
          },
          {
            id: 'extensive_startup_experience',
            value: 'Extensive startup experience in a similar role',
          },
        ],
      },
    },
    nextNode: 'q17',
  },

  q17: {
    sectionTitle: 'Department Employee Count',
    sectionId: 'department-employee-count',
    fields: {
      departmentEmployeeCount: {
        id: 'department-employee-count',
        type: FieldType.Dropdown,
        label: 'How many employees currently work in this department?',
        required: true,
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
            id: '8_to_12_employees',
            value: '8-12 employees',
          },
          {
            id: '13_plus_employees',
            value: '13+ employees',
          },
        ],
      },
    },
    nextNode: 'q18',
  },

  q18: {
    sectionTitle: 'Department Employee Experience Percentage',
    sectionId: 'department-employee-experience-percentage',
    fields: {
      departmentEmployeeExperiencePercentage: {
        id: 'department-employee-experience-percentage',
        type: FieldType.Dropdown,
        label:
          'What percentage of employees in this department have 5+ years of experience in their field?',
        required: true,
        options: [
          {
            id: 'less_than_20_percent',
            value: 'Less than 20%',
          },
          {
            id: '20_to_50_percent',
            value: '20-50%',
          },
          {
            id: 'more_than_50_percent',
            value: 'More than 50%',
          },
        ],
      },
    },
    nextNode: 'q19',
  },

  q19: {
    sectionTitle: 'Department Performance Review Frequency',
    sectionId: 'department-performance-review-frequency',
    fields: {
      departmentPerformanceReviewFrequency: {
        id: 'department-performance-review-frequency',
        type: FieldType.Dropdown,
        label:
          'How frequently does this department conduct performance reviews?',
        required: true,
        options: [
          {
            id: 'no_structured_evaluation',
            value: 'No structured performance evaluation',
          },
          {
            id: 'once_a_year',
            value: 'Once a year',
          },
          {
            id: 'twice_a_year',
            value: 'Twice a year',
          },
          {
            id: 'every_quarter',
            value: 'Every quarter',
          },
        ],
      },
    },
    nextNode: 'q20',
  },

  q20: {
    sectionTitle: 'Department Tools and Software',
    sectionId: 'department-tools-software',
    fields: {
      departmentToolsSoftware: {
        id: 'department-tools-software',
        type: FieldType.Dropdown,
        label:
          'Does this department use dedicated tools/software to manage workflows?',
        required: true,
        options: [
          {
            id: 'no_specialized_tools',
            value: 'No specialized tools, processes are manual',
          },
          {
            id: 'some_tools_limited',
            value: 'Some tools available, but limited functionality',
          },
          {
            id: 'fully_equipped',
            value: 'Yes, fully equipped with industry-standard tools',
          },
        ],
      },
    },
    nextNode: 'q21',
  },

  q21: {
    sectionTitle: 'Department Documented Processes',
    sectionId: 'department-documented-processes',
    fields: {
      departmentDocumentedProcesses: {
        id: 'department-documented-processes',
        type: FieldType.Dropdown,
        label:
          'Does this department have documented processes for its core functions?',
        required: true,
        options: [
          {
            id: 'no_formal_documentation',
            value:
              'No formal documentation, operations rely on verbal coordination',
          },
          {
            id: 'some_processes_documented',
            value:
              'Some processes are documented, but not consistently followed',
          },
          {
            id: 'all_workflows_documented',
            value: 'Yes, all workflows are documented and followed',
          },
        ],
      },
    },
    nextNode: 'q22',
  },

  q22: {
    sectionTitle: 'Department Process Review Frequency',
    sectionId: 'department-process-review-frequency',
    fields: {
      departmentProcessReviewFrequency: {
        id: 'department-process-review-frequency',
        type: FieldType.Dropdown,
        label: 'How often are departmental processes reviewed and updated?',
        required: true,
        options: [
          {
            id: 'never_informally',
            value: 'Never or informally reviewed',
          },
          {
            id: 'once_a_year',
            value: 'Once a year',
          },
          {
            id: 'twice_a_year',
            value: 'Twice a year',
          },
          {
            id: 'quarterly',
            value: 'Quarterly',
          },
        ],
      },
    },
    nextNode: 'q23',
  },

  q23: {
    sectionTitle: 'Workflow Bottleneck Resolution',
    sectionId: 'workflow-bottleneck-resolution',
    fields: {
      workflowBottleneckResolution: {
        id: 'workflow-bottleneck-resolution',
        type: FieldType.Dropdown,
        label:
          'How are bottlenecks in workflows typically identified and resolved?',
        required: true,
        options: [
          {
            id: 'no_structured_method',
            value: 'No structured method, issues are resolved reactively',
          },
          {
            id: 'informal_discussions',
            value: 'Informal discussions and problem-solving',
          },
          {
            id: 'data_driven_approach',
            value: 'Data-driven approach (KPIs, tracking, dashboards)',
          },
        ],
      },
    },
    nextNode: 'q24',
  },

  q24: {
    sectionTitle: 'Department KPI Ownership',
    sectionId: 'department-kpi-ownership',
    fields: {
      departmentKpiOwnership: {
        id: 'department-kpi-ownership',
        type: FieldType.Dropdown,
        label:
          'Does each department have clear ownership of KPIs and performance metrics?',
        required: true,
        options: [
          {
            id: 'no_clear_kpis',
            value: 'No clear KPIs, performance is not measured',
          },
          {
            id: 'some_kpis_inconsistent',
            value: 'Some KPIs exist, but tracking is inconsistent',
          },
          {
            id: 'kpis_defined_tracked',
            value: 'Yes, department KPIs are defined, tracked, and optimized',
          },
        ],
      },
    },
    nextNode: 'q25',
  },

  q25: {
    sectionTitle: 'Internal Collaboration Tools',
    sectionId: 'internal-collaboration-tools',
    fields: {
      internalCollaborationTools: {
        id: 'internal-collaboration-tools',
        type: FieldType.Dropdown,
        label: 'What tools or platforms are used for internal collaboration?',
        required: true,
        options: [
          {
            id: 'no_tools_unstructured',
            value: 'No tools, communication is unstructured',
          },
          {
            id: 'some_tools_fragmented',
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
    nextNode: 'q26',
  },

  q26: {
    sectionTitle: 'Department Head Reporting Requirements',
    sectionId: 'department-head-reporting-requirements',
    fields: {
      departmentHeadReportingRequirements: {
        id: 'department-head-reporting-requirements',
        type: FieldType.Dropdown,
        label:
          'Are all department heads required to submit periodic reports on performance and progress?',
        required: true,
        options: [
          {
            id: 'no_formal_reporting',
            value: 'No formal reporting system, performance tracking is ad hoc',
          },
          {
            id: 'some_reporting_inconsistent',
            value: 'Some reporting exists, but inconsistently tracked',
          },
          {
            id: 'structured_reports',
            value: 'Yes, monthly/quarterly structured reports exist',
          },
        ],
      },
    },
    nextNode: 'q27',
  },

  q27: {
    sectionTitle: 'Department Structure Scalability',
    sectionId: 'department-structure-scalability',
    fields: {
      departmentStructureScalability: {
        id: 'department-structure-scalability',
        type: FieldType.Dropdown,
        label:
          "How resilient is the company's department structure in handling rapid scaling?",
        required: true,
        options: [
          {
            id: 'not_prepared_growth',
            value: 'The company is not structurally prepared for rapid growth',
          },
          {
            id: 'some_scalable_gaps',
            value: 'Some departments are scalable, but gaps exist',
          },
          {
            id: 'structured_for_scalability',
            value:
              'Departments are structured for scalability and can handle rapid expansion',
          },
        ],
      },
    },
    nextNode: null,
  },
};
