const D_EarlyVC = {
  q1: {
    sectionTitle: 'Organizational Chart Documentation',
    sectionId: '6e11e6fb-e10d-4eeb-b889-72864131fe91',
    firstField: 'd22f132a-b5ee-4766-b8d3-db930cbdde71',
    fields: {
      organizationalChartDocumentation: {
        id: 'd22f132a-b5ee-4766-b8d3-db930cbdde71',
        type: 'dropdown',
        label:
          'Does the company have a formal and documented organizational chart?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '1a26bd2e-6738-4944-b76e-68d1ee73e72a',
  },
  q2: {
    sectionTitle: 'Organizational Structure Review Frequency',
    sectionId: '1a26bd2e-6738-4944-b76e-68d1ee73e72a',
    firstField: 'cd022907-27c0-44c4-92e3-f43085ec3f06',
    fields: {
      organizationalStructureReview: {
        id: 'cd022907-27c0-44c4-92e3-f43085ec3f06',
        type: 'dropdown',
        label:
          'How often is the organizational structure reviewed and updated?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '4f832601-6d86-41c5-8fac-726b987f2f8c',
  },
  q3: {
    sectionTitle: 'Management Layers',
    sectionId: '4f832601-6d86-41c5-8fac-726b987f2f8c',
    firstField: '3ac30842-d751-4875-91d5-75e260e19274',
    fields: {
      managementLayers: {
        id: '3ac30842-d751-4875-91d5-75e260e19274',
        type: 'dropdown',
        label:
          'How many management layers exist between entry-level employees and the CEO?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'e2343d62-171b-44c8-8e2c-1500f141b9dd',
  },
  q4: {
    sectionTitle: 'Department Reporting Structure',
    sectionId: 'e2343d62-171b-44c8-8e2c-1500f141b9dd',
    firstField: '4a9a5dc1-2e26-42dd-8f3c-675f973a8eae',
    fields: {
      departmentReportingStructure: {
        id: '4a9a5dc1-2e26-42dd-8f3c-675f973a8eae',
        type: 'dropdown',
        label:
          'Does each department report directly to its respective C-level executive?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '260bd66d-4f0f-4ea8-a1c2-ef31241d62b4',
  },
  q5: {
    sectionTitle: 'C-Level Executives Present',
    sectionId: '260bd66d-4f0f-4ea8-a1c2-ef31241d62b4',
    firstField: '5324b1a0-5602-4b5f-a735-02a515e813db',
    fields: {
      cLevelExecutivesPresent: {
        id: '5324b1a0-5602-4b5f-a735-02a515e813db',
        type: 'dropdown',
        label:
          'Which of the following C-level executives are present in the company? (Select all that apply)',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'ce2f444b-13ef-43d1-b623-0385e5deb4d6',
  },
  q6: {
    sectionTitle: 'C-Level Executive Education Level',
    sectionId: 'ce2f444b-13ef-43d1-b623-0385e5deb4d6',
    firstField: '8fc2ced6-f455-4925-9f24-22d6d8e55105',
    fields: {
      cLevelExecutiveEducation: {
        id: '8fc2ced6-f455-4925-9f24-22d6d8e55105',
        type: 'dropdown',
        label: 'What is their highest level of education?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'eeae30da-a7ad-40ea-9a34-4e3accd89166',
  },
  q7: {
    sectionTitle: 'C-Level Executive Experience Years',
    sectionId: 'eeae30da-a7ad-40ea-9a34-4e3accd89166',
    firstField: '00139284-e0e4-4bd1-9ce9-fbf79bac3a78',
    fields: {
      cLevelExecutiveExperience: {
        id: '00139284-e0e4-4bd1-9ce9-fbf79bac3a78',
        type: 'dropdown',
        label:
          'How many years of experience does this C-level executive have in their respective field?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '3dfca81a-a26e-4390-8b97-55da9a33a91f',
  },
  q8: {
    sectionTitle: 'C-Level Executive Leadership Experience',
    sectionId: '3dfca81a-a26e-4390-8b97-55da9a33a91f',
    firstField: 'f27cc678-bfdb-4317-a0a4-221488aebc48',
    fields: {
      cLevelExecutiveLeadership: {
        id: 'f27cc678-bfdb-4317-a0a4-221488aebc48',
        type: 'dropdown',
        label:
          'Has this executive previously held a leadership role in a startup or high-growth company?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '1aeafe0e-92cd-4703-a53a-d6440ba10d36',
  },
  q9: {
    sectionTitle: 'C-Level Executive Industry Experience',
    sectionId: '1aeafe0e-92cd-4703-a53a-d6440ba10d36',
    firstField: '4718fdb9-032e-4a44-85c2-530e3a09ac1c',
    fields: {
      cLevelExecutiveIndustryExperience: {
        id: '4718fdb9-032e-4a44-85c2-530e3a09ac1c',
        type: 'dropdown',
        label: 'What is their industry experience?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'cfad7b14-7d3a-44c6-96a3-b499633c6f40',
  },
  q10: {
    sectionTitle: 'C-Level Executive Investor Relations',
    sectionId: 'cfad7b14-7d3a-44c6-96a3-b499633c6f40',
    firstField: 'f08bae70-686e-4f46-979a-9954c4383f07',
    fields: {
      cLevelExecutiveInvestorRelations: {
        id: 'f08bae70-686e-4f46-979a-9954c4383f07',
        type: 'dropdown',
        label:
          'Does this executive participate in investor relations and board meetings?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '94d28b3f-6d5b-463c-b1b6-b3fb161492b0',
  },
  q11: {
    sectionTitle: 'C-Level Executive Strategic Decision Making',
    sectionId: '94d28b3f-6d5b-463c-b1b6-b3fb161492b0',
    firstField: '642be3c1-f874-4ddf-b0c8-334b0075eab1',
    fields: {
      cLevelExecutiveStrategicDecisions: {
        id: '642be3c1-f874-4ddf-b0c8-334b0075eab1',
        type: 'dropdown',
        label: 'How involved is this executive in strategic decision-making?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '4436b7cd-5fbf-48ed-a634-d58a9cb37d69',
  },
  q12: {
    sectionTitle: 'Organization Chart Upload',
    sectionId: '4436b7cd-5fbf-48ed-a634-d58a9cb37d69',
    firstField: '049b11c1-6300-4caf-94fc-235e7e52ac74',
    fields: {
      organizationChartUpload: {
        id: '049b11c1-6300-4caf-94fc-235e7e52ac74',
        type: 'File',
        label: 'Upload your organization chart',
        required: false,
        nextField: null,
        acceptedTypes: ['.pdf'],
        validation:
          "z.string().optional().refine((val) => !val || val.endsWith('.pdf') || val.includes('pdf'), 'File must be a PDF format')",
      },
    },
    nextNode: '1bd90daf-9436-4417-9986-24aeb3605c35',
  },
  q13: {
    sectionTitle: 'Formally Established Departments',
    sectionId: '1bd90daf-9436-4417-9986-24aeb3605c35',
    firstField: 'ee013d4b-7329-4a2f-833f-3076a08aed6c',
    fields: {
      formallyEstablishedDepartments: {
        id: 'ee013d4b-7329-4a2f-833f-3076a08aed6c',
        type: 'dropdown',
        label:
          'Which of the following departments are formally established in your company? (Select all that apply)',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'e68142e0-3a2d-4f0d-b41e-e0bba8d11959',
  },
  q14: {
    sectionTitle: 'Department Head Education Level',
    sectionId: 'e68142e0-3a2d-4f0d-b41e-e0bba8d11959',
    firstField: '796a370c-0e4a-4403-b18b-255f70633eae',
    fields: {
      departmentHeadEducation: {
        id: '796a370c-0e4a-4403-b18b-255f70633eae',
        type: 'dropdown',
        label: 'What is their highest level of education?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '329df5fd-bec1-4485-819d-5b9918df08f0',
  },
  q15: {
    sectionTitle: 'Department Head Experience Years',
    sectionId: '329df5fd-bec1-4485-819d-5b9918df08f0',
    firstField: '5603207e-34bd-48e4-8ac0-a0f75d63d2f9',
    fields: {
      departmentHeadExperience: {
        id: '5603207e-34bd-48e4-8ac0-a0f75d63d2f9',
        type: 'dropdown',
        label:
          'How many years of experience does the department head have in this function?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'bf0beafc-e86c-4126-9005-6c94f33ec394',
  },
  q16: {
    sectionTitle: 'Department Head Startup Experience',
    sectionId: 'bf0beafc-e86c-4126-9005-6c94f33ec394',
    firstField: 'f2478328-dc35-4b61-b006-26442f04d8ab',
    fields: {
      departmentHeadStartupExperience: {
        id: 'f2478328-dc35-4b61-b006-26442f04d8ab',
        type: 'dropdown',
        label:
          'Has this department head previously worked in a startup or high-growth company?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'acad2209-4970-4328-8c6d-f28e4e15fa03',
  },
  q17: {
    sectionTitle: 'Department Employee Count',
    sectionId: 'acad2209-4970-4328-8c6d-f28e4e15fa03',
    firstField: 'f64a941d-9b5a-4192-9035-e850988efd1b',
    fields: {
      departmentEmployeeCount: {
        id: 'f64a941d-9b5a-4192-9035-e850988efd1b',
        type: 'dropdown',
        label: 'How many employees currently work in this department?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '4807c081-f43f-4cf2-8d69-abdfbc1c13e0',
  },
  q18: {
    sectionTitle: 'Department Employee Experience Percentage',
    sectionId: '4807c081-f43f-4cf2-8d69-abdfbc1c13e0',
    firstField: '4c34ccb1-a044-40b5-9480-37f9dfdbd37e',
    fields: {
      departmentEmployeeExperiencePercentage: {
        id: '4c34ccb1-a044-40b5-9480-37f9dfdbd37e',
        type: 'dropdown',
        label:
          'What percentage of employees in this department have 5+ years of experience in their field?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '76230d1f-ea79-4662-a4ff-f3b51b4bf22a',
  },
  q19: {
    sectionTitle: 'Department Performance Review Frequency',
    sectionId: '76230d1f-ea79-4662-a4ff-f3b51b4bf22a',
    firstField: '51e7e2cf-1b0e-4cd7-a4cf-9e010578248c',
    fields: {
      departmentPerformanceReviewFrequency: {
        id: '51e7e2cf-1b0e-4cd7-a4cf-9e010578248c',
        type: 'dropdown',
        label:
          'How frequently does this department conduct performance reviews?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'da3ea598-6ec1-4e45-8cb2-e7273d3c6b02',
  },
  q20: {
    sectionTitle: 'Department Tools and Software',
    sectionId: 'da3ea598-6ec1-4e45-8cb2-e7273d3c6b02',
    firstField: '01f90a0a-6942-4cab-9074-e85cc019033d',
    fields: {
      departmentToolsSoftware: {
        id: '01f90a0a-6942-4cab-9074-e85cc019033d',
        type: 'dropdown',
        label:
          'Does this department use dedicated tools/software to manage workflows?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'ac28fe37-c3e2-42af-9de6-c50106fb1564',
  },
  q21: {
    sectionTitle: 'Department Documented Processes',
    sectionId: 'ac28fe37-c3e2-42af-9de6-c50106fb1564',
    firstField: '210aedbd-3256-47cf-87b1-a6ffbb93bc73',
    fields: {
      departmentDocumentedProcesses: {
        id: '210aedbd-3256-47cf-87b1-a6ffbb93bc73',
        type: 'dropdown',
        label:
          'Does this department have documented processes for its core functions?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '160e1516-ee9b-42ff-8b74-ebf0ee44d483',
  },
  q22: {
    sectionTitle: 'Department Process Review Frequency',
    sectionId: '160e1516-ee9b-42ff-8b74-ebf0ee44d483',
    firstField: '4e050b7a-83f2-42c0-bd44-115c9d521dea',
    fields: {
      departmentProcessReviewFrequency: {
        id: '4e050b7a-83f2-42c0-bd44-115c9d521dea',
        type: 'dropdown',
        label: 'How often are departmental processes reviewed and updated?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '7f554e22-1c1d-481e-ae4b-e156dc8d4708',
  },
  q23: {
    sectionTitle: 'Workflow Bottleneck Resolution',
    sectionId: '7f554e22-1c1d-481e-ae4b-e156dc8d4708',
    firstField: 'bf8ac163-c534-432e-b1a2-d3231d6e6c9d',
    fields: {
      workflowBottleneckResolution: {
        id: 'bf8ac163-c534-432e-b1a2-d3231d6e6c9d',
        type: 'dropdown',
        label:
          'How are bottlenecks in workflows typically identified and resolved?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '996d86b1-76af-410e-82a7-d3d2fcb5d6ef',
  },
  q24: {
    sectionTitle: 'Department KPI Ownership',
    sectionId: '996d86b1-76af-410e-82a7-d3d2fcb5d6ef',
    firstField: '3ecfeb44-0674-45e5-9fcf-1a410166ebde',
    fields: {
      departmentKpiOwnership: {
        id: '3ecfeb44-0674-45e5-9fcf-1a410166ebde',
        type: 'dropdown',
        label:
          'Does each department have clear ownership of KPIs and performance metrics?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'd441a784-477e-4554-9fdf-935295f68664',
  },
  q25: {
    sectionTitle: 'Internal Collaboration Tools',
    sectionId: 'd441a784-477e-4554-9fdf-935295f68664',
    firstField: '6a6999b1-dd02-4a6c-ad57-71140ac126eb',
    fields: {
      internalCollaborationTools: {
        id: '6a6999b1-dd02-4a6c-ad57-71140ac126eb',
        type: 'dropdown',
        label: 'What tools or platforms are used for internal collaboration?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'a81b31c4-47dc-4d37-a312-5f6319b6a7a1',
  },
  q26: {
    sectionTitle: 'Department Head Reporting Requirements',
    sectionId: 'a81b31c4-47dc-4d37-a312-5f6319b6a7a1',
    firstField: 'eb4c1575-5860-4f47-bd28-5ba08dbf7c9e',
    fields: {
      departmentHeadReportingRequirements: {
        id: 'eb4c1575-5860-4f47-bd28-5ba08dbf7c9e',
        type: 'dropdown',
        label:
          'Are all department heads required to submit periodic reports on performance and progress?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'ba5de305-b330-4b18-91c3-cefa7e7ee6a6',
  },
  q27: {
    sectionTitle: 'Department Structure Scalability',
    sectionId: 'ba5de305-b330-4b18-91c3-cefa7e7ee6a6',
    firstField: '73b2f987-3d64-4260-b0a8-2632908c1426',
    fields: {
      departmentStructureScalability: {
        id: '73b2f987-3d64-4260-b0a8-2632908c1426',
        type: 'dropdown',
        label:
          "How resilient is the company's department structure in handling rapid scaling?",
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: undefined,
  },
};
