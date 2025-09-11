const D_PrivateEquity = {
  q1: {
    sectionTitle: 'Organizational Chart',
    sectionId: '98ef1b92-3831-4fb8-a7e4-a81e5d832c9e',
    firstField: 'd966defa-028c-4a69-b483-b65fa84a5d95',
    fields: {
      orgChartStatus: {
        id: 'd966defa-028c-4a69-b483-b65fa84a5d95',
        type: 'dropdown',
        label:
          'Does the company have a formal and documented organizational chart?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '6ffe188d-38d3-44ea-8746-b50e3fef263c',
  },
  q2: {
    sectionTitle: 'Structure Review Frequency',
    sectionId: '6ffe188d-38d3-44ea-8746-b50e3fef263c',
    firstField: '29588ac9-b79b-4408-ba11-c2ba7544001b',
    fields: {
      structureReview: {
        id: '29588ac9-b79b-4408-ba11-c2ba7544001b',
        type: 'dropdown',
        label:
          'How often is the organizational structure reviewed and updated?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
        nextField: null,
        options: [
          {
            id: 'no_review',
            value: 'No structured review process',
          },
          {
            id: 'yearly',
            value: 'Once a year',
          },
          {
            id: 'quarterly_or_scaling',
            value: 'Every quarter or as the company scales',
          },
        ],
      },
    },
    nextNode: '8ff21baf-3f70-4851-8d6b-43276b8e1f99',
  },
  q3: {
    sectionTitle: 'Management Layers',
    sectionId: '8ff21baf-3f70-4851-8d6b-43276b8e1f99',
    firstField: 'ce2b114b-6db3-4924-ab89-f236bee4b901',
    fields: {
      managementLayers: {
        id: 'ce2b114b-6db3-4924-ab89-f236bee4b901',
        type: 'dropdown',
        label:
          'How many management layers exist between entry-level employees and the CEO?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
          {
            id: '1_2_layers',
            value: '1-2 layers (lean and efficient)',
          },
        ],
      },
    },
    nextNode: '7837f680-3534-4abb-a25d-9d05fee81fc2',
  },
  q4: {
    sectionTitle: 'Department Reporting Structure',
    sectionId: '7837f680-3534-4abb-a25d-9d05fee81fc2',
    firstField: 'd8567e6b-727d-4dba-b361-4776e6ae1809',
    fields: {
      departmentReporting: {
        id: 'd8567e6b-727d-4dba-b361-4776e6ae1809',
        type: 'dropdown',
        label:
          'Does each department report directly to its respective C-level executive?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
        nextField: null,
        options: [
          {
            id: 'no_structure',
            value: 'No clear reporting structure',
          },
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
    nextNode: 'a8ebc47e-b01e-4334-a386-ca9789747174',
  },
  q5: {
    sectionTitle: 'Business Units or Divisions',
    sectionId: 'a8ebc47e-b01e-4334-a386-ca9789747174',
    firstField: '3527ac7f-bca1-4494-bd07-314267e8e14e',
    fields: {
      businessUnits: {
        id: '3527ac7f-bca1-4494-bd07-314267e8e14e',
        type: 'dropdown',
        label:
          'Has the company expanded into multiple business units or divisions?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '9404b0dd-b2ea-479c-9edd-d0c2cf56ef95',
  },
  q6: {
    sectionTitle: 'Middle Management Layer',
    sectionId: '9404b0dd-b2ea-479c-9edd-d0c2cf56ef95',
    firstField: 'f8763150-afd9-4722-bc89-034ecfe49f46',
    fields: {
      middleManagement: {
        id: 'f8763150-afd9-4722-bc89-034ecfe49f46',
        type: 'dropdown',
        label:
          'Does each department have a middle management layer separate from senior leadership?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'f9864f33-aefa-4208-94c9-d47bfa3879c8',
  },
  q7: {
    sectionTitle: 'C-Level Executives',
    sectionId: 'f9864f33-aefa-4208-94c9-d47bfa3879c8',
    firstField: '7027026c-d454-410b-b8b8-b451d69b6e1d',
    fields: {
      cLevelRoles: {
        id: '7027026c-d454-410b-b8b8-b451d69b6e1d',
        type: 'dropdown',
        label:
          'Which of the following C-level executives are present in the company?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
        nextField: '32c74d49-37cb-41d0-a041-f99abdaf44fe',
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
            id: 'no_c_level',
            value: 'No formal C-level structure yet',
          },
          {
            id: '1_2_c_levels',
            value: '1-2 C-level executives',
          },
          {
            id: '3_5_c_levels',
            value: '3-5 C-level executives',
          },
          {
            id: '6_8_c_levels',
            value: '6-8 C-level executives',
          },
          {
            id: '9_plus_c_levels',
            value: '9-10+',
          },
        ],
      },
      education: {
        id: '32c74d49-37cb-41d0-a041-f99abdaf44fe',
        type: 'dropdown',
        label: 'What is their highest level of education?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
        nextField: '126d576d-2f21-4ad6-a3ee-797b7c8e0fab',
        options: [
          {
            id: 'no_degree',
            value: 'No formal degree',
          },
          {
            id: 'bachelor',
            value: "Bachelor's degree",
          },
          {
            id: 'master',
            value: "Master's degree (MBA, MSc, etc.)",
          },
          {
            id: 'phd_or_cert',
            value: 'PhD or specialized industry certification',
          },
        ],
      },
      experienceYears: {
        id: '126d576d-2f21-4ad6-a3ee-797b7c8e0fab',
        type: 'dropdown',
        label:
          'How many years of experience does this C-level executive have in their respective field?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
        nextField: 'cae9e045-3f0f-498c-aa8f-f67d833fd13d',
        options: [
          {
            id: 'lt3',
            value: 'Less than 3 years',
          },
          {
            id: '3_5',
            value: '3-5 years',
          },
          {
            id: '6_10',
            value: '6-10 years',
          },
          {
            id: '10_plus',
            value: '10+ years',
          },
        ],
      },
      leadershipStartup: {
        id: 'cae9e045-3f0f-498c-aa8f-f67d833fd13d',
        type: 'dropdown',
        label:
          'Has this executive previously held a leadership role in a startup or high-growth company?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
        nextField: 'fa16eb7d-c11a-4094-a81d-fade97083f92',
        options: [
          {
            id: 'no_leadership',
            value: 'No prior leadership experience',
          },
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
        id: 'fa16eb7d-c11a-4094-a81d-fade97083f92',
        type: 'dropdown',
        label: 'What is their industry experience?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
        nextField: 'e2214b1e-a034-4d4d-9ecf-4bcfac313229',
        options: [
          {
            id: 'no_experience',
            value: 'No relevant industry experience',
          },
          {
            id: 'some_experience',
            value: 'Some industry exposure but not extensive',
          },
          {
            id: '5_plus_years',
            value: '5+ years in the same industry',
          },
        ],
      },
      investorParticipation: {
        id: 'e2214b1e-a034-4d4d-9ecf-4bcfac313229',
        type: 'dropdown',
        label:
          'Does this executive participate in investor relations and board meetings?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
        nextField: '5853395f-b552-4732-a469-98bf7894d363',
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
        id: '5853395f-b552-4732-a469-98bf7894d363',
        type: 'dropdown',
        label: 'How involved is this executive in strategic decision-making?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
        nextField: null,
        options: [
          {
            id: 'minimal',
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
    nextNode: '659bd90f-727d-44d8-afd9-6dbf8bd63b6a',
  },
  q8: {
    sectionTitle: 'Established Departments',
    sectionId: '659bd90f-727d-44d8-afd9-6dbf8bd63b6a',
    firstField: '4223b3c5-ccca-48c6-84b6-d87f4fb8091c',
    fields: {
      departments: {
        id: '4223b3c5-ccca-48c6-84b6-d87f4fb8091c',
        type: 'dropdown',
        label:
          'Which of the following departments are formally established in your company?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
        nextField: null,
        options: [
          {
            id: 'marketing',
            value: 'Marketing & Growth',
          },
          {
            id: 'sales',
            value: 'Sales & Business Development',
          },
          {
            id: 'finance',
            value: 'Finance & Accounting',
          },
          {
            id: 'procurement',
            value: 'Procurement & Supply Chain',
          },
          {
            id: 'legal',
            value: 'Legal & Compliance',
          },
          {
            id: 'hr',
            value: 'Human Resources (HR)',
          },
          {
            id: 'data',
            value: 'Data & Analytics',
          },
          {
            id: 'customer_support',
            value: 'Customer Support & Success',
          },
          {
            id: 'technology',
            value: 'Technology & IT',
          },
          {
            id: 'product',
            value: 'Product Management',
          },
          {
            id: 'engineering',
            value: 'Software Development & Engineering',
          },
          {
            id: 'ops',
            value: 'Operations & Logistics',
          },
          {
            id: 'rnd',
            value: 'Research & Development (R&D)',
          },
          {
            id: 'other',
            value: 'Other (please specify)',
          },
          {
            id: 'less_than_3',
            value: 'Less than 3 departments',
          },
          {
            id: '3_4',
            value: '3-4 departments',
          },
          {
            id: '5_6',
            value: '5-6 departments',
          },
          {
            id: '7_9',
            value: '7-9 departments',
          },
          {
            id: '10_plus',
            value: '10+ departments',
          },
        ],
      },
    },
    nextNode: 'f35f6b1a-3661-422c-9b17-0e5f3ff868eb',
  },
  q9: {
    sectionTitle: 'Departmental KPIs',
    sectionId: 'f35f6b1a-3661-422c-9b17-0e5f3ff868eb',
    firstField: '2028c3bd-85f4-404c-b63c-bcd40e1db274',
    fields: {
      departmentKpis: {
        id: '2028c3bd-85f4-404c-b63c-bcd40e1db274',
        type: 'dropdown',
        label:
          'Does each department have clear ownership of KPIs and performance metrics?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '85b33f9f-34bf-45fc-8fad-7f6bb2671822',
  },
  q10: {
    sectionTitle: 'Internal Collaboration Tools',
    sectionId: '85b33f9f-34bf-45fc-8fad-7f6bb2671822',
    firstField: '967bfeb4-fff2-42d0-bc7e-44fd4ab60250',
    fields: {
      internalTools: {
        id: '967bfeb4-fff2-42d0-bc7e-44fd4ab60250',
        type: 'dropdown',
        label: 'What tools or platforms are used for internal collaboration?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
        nextField: null,
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
      },
    },
    nextNode: 'f2df9250-81b9-4164-b50a-e290211df72d',
  },
  q11: {
    sectionTitle: 'Reporting System',
    sectionId: 'f2df9250-81b9-4164-b50a-e290211df72d',
    firstField: '1ebf4f47-a94e-4d6e-9251-37ebe29f91b8',
    fields: {
      reportingSystem: {
        id: '1ebf4f47-a94e-4d6e-9251-37ebe29f91b8',
        type: 'dropdown',
        label:
          'Are all department heads required to submit periodic reports on performance and progress?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '7d552376-fb68-42f4-94fe-bf7811d665c4',
  },
  q12: {
    sectionTitle: 'Scalability Readiness',
    sectionId: '7d552376-fb68-42f4-94fe-bf7811d665c4',
    firstField: '998289d7-d512-4c37-93f6-f12122b98c81',
    fields: {
      scalability: {
        id: '998289d7-d512-4c37-93f6-f12122b98c81',
        type: 'dropdown',
        label:
          'How resilient is the company s department structure in handling rapid scaling?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'ef842f2b-ca50-4199-b60b-0f82411f1086',
  },
  q13: {
    sectionTitle: 'Career Progression',
    sectionId: 'ef842f2b-ca50-4199-b60b-0f82411f1086',
    firstField: 'd32d9fbf-e2f3-43ee-915f-e598910c8738',
    fields: {
      careerPaths: {
        id: 'd32d9fbf-e2f3-43ee-915f-e598910c8738',
        type: 'dropdown',
        label:
          'How well-defined are the career progression paths within each department?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
        nextField: null,
        options: [
          {
            id: 'no_structure',
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
      },
    },
    nextNode: '1d48c4ed-d623-464a-b138-4545132ac630',
  },
  q14: {
    sectionTitle: 'Leadership Hiring Strategy',
    sectionId: '1d48c4ed-d623-464a-b138-4545132ac630',
    firstField: 'fa908d12-6152-4835-b4e0-9af22410bfcd',
    fields: {
      leadershipHiring: {
        id: 'fa908d12-6152-4835-b4e0-9af22410bfcd',
        type: 'dropdown',
        label:
          'How frequently are internal promotions vs. external hires made for leadership roles?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'e331d39d-1cd9-40ad-bcfa-ed66d3799f0f',
  },
  q15: {
    sectionTitle: 'Global Workflow Optimization',
    sectionId: 'e331d39d-1cd9-40ad-bcfa-ed66d3799f0f',
    firstField: '17525244-6c97-4f53-81b5-74637c265965',
    fields: {
      globalWorkflow: {
        id: '17525244-6c97-4f53-81b5-74637c265965',
        type: 'dropdown',
        label:
          'Are interdepartmental workflows optimized for multi-location or global operations?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'ec0c6005-3326-4373-9a93-67fa5535e9d9',
  },
  q16: {
    sectionTitle: 'Compliance and Risk',
    sectionId: 'ec0c6005-3326-4373-9a93-67fa5535e9d9',
    firstField: 'c3cb38d6-63ae-4ab2-ac4a-45c965a6c68d',
    fields: {
      complianceDept: {
        id: 'c3cb38d6-63ae-4ab2-ac4a-45c965a6c68d',
        type: 'dropdown',
        label:
          'Does the company have a dedicated compliance or risk management department?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
        nextField: null,
        options: [
          {
            id: 'no_compliance',
            value: 'No structured compliance process',
          },
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
    nextNode: '288bb3b1-6007-45db-bb5f-e6b9120e2f6a',
  },
  q17: {
    sectionTitle: 'Department Optimization',
    sectionId: '288bb3b1-6007-45db-bb5f-e6b9120e2f6a',
    firstField: 'fd4cf8db-cb7f-4748-8689-ceca59cdb9d3',
    fields: {
      departmentReview: {
        id: 'fd4cf8db-cb7f-4748-8689-ceca59cdb9d3',
        type: 'dropdown',
        label:
          'How frequently does the company restructure or optimize its departments?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: undefined,
  },
};
