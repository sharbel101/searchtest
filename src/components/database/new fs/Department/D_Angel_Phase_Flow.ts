const D_AngelPhase = {
  q1: {
    sectionTitle: 'Founder Involvement',
    sectionId: '131e6b18-7439-41c2-90e3-4db6d400e89f',
    firstField: 'e6da5008-e19c-4d12-b90b-9d8c889024df',
    fields: {
      founderInvolvement: {
        id: 'e6da5008-e19c-4d12-b90b-9d8c889024df',
        type: 'dropdown',
        label:
          'Are all original founders still actively involved in the company?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'e3669e6b-0a6d-403d-83d6-486c6949e61a',
  },
  q2: {
    sectionTitle: 'Founder Role Evolution',
    sectionId: 'e3669e6b-0a6d-403d-83d6-486c6949e61a',
    firstField: '617fcb55-0346-47a0-bddf-1126ff602ad7',
    fields: {
      founderRoleEvolution: {
        id: '617fcb55-0346-47a0-bddf-1126ff602ad7',
        type: 'dropdown',
        label: "Have the founders' roles evolved from the ideation stage?",
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'd3afc66c-600f-4f1d-ab50-3f15ef558bd7',
  },
  q3: {
    sectionTitle: 'CEO Leadership',
    sectionId: 'd3afc66c-600f-4f1d-ab50-3f15ef558bd7',
    firstField: '1d0dc11d-241a-474e-ba57-b468085b8854',
    fields: {
      ceoLeadership: {
        id: '1d0dc11d-241a-474e-ba57-b468085b8854',
        type: 'dropdown',
        label: 'Is there a designated CEO leading the company?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '64c9d181-e484-473a-a8e8-007b99634729',
  },
  q4: {
    sectionTitle: 'Founder Responsibilities Documentation',
    sectionId: '64c9d181-e484-473a-a8e8-007b99634729',
    firstField: '53586c25-cad4-4e6a-a105-31a22bf616e0',
    fields: {
      founderResponsibilities: {
        id: '53586c25-cad4-4e6a-a105-31a22bf616e0',
        type: 'dropdown',
        label:
          "Are the founders' responsibilities documented and aligned with company needs?",
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '5d7a234e-047d-407f-b8b6-c39361f3e78e',
  },
  q5: {
    sectionTitle: 'Investor and Advisor Engagement',
    sectionId: '5d7a234e-047d-407f-b8b6-c39361f3e78e',
    firstField: 'e4c122b0-4c2b-4ae9-ae50-79cb8e731125',
    fields: {
      investorAdvisorEngagement: {
        id: 'e4c122b0-4c2b-4ae9-ae50-79cb8e731125',
        type: 'dropdown',
        label: 'Do the founders actively engage with investors and advisors?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'f087c814-af50-4584-9ba8-9319408cbaa8',
  },
  q6: {
    sectionTitle: 'External Leadership Attraction',
    sectionId: 'f087c814-af50-4584-9ba8-9319408cbaa8',
    firstField: 'ec4542ff-26fb-4710-81be-9d25d4651d35',
    fields: {
      externalLeadership: {
        id: 'ec4542ff-26fb-4710-81be-9d25d4651d35',
        type: 'dropdown',
        label:
          'Have the founders taken steps to attract experienced leadership outside their founding team?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '323af9cf-83c4-42f6-8922-a32bccc8bc39',
  },
  q7: {
    sectionTitle: 'Founder Compensation Structure',
    sectionId: '323af9cf-83c4-42f6-8922-a32bccc8bc39',
    firstField: 'd8d7e57e-3b56-4ae0-beed-e6ebe4df890f',
    fields: {
      founderCompensation: {
        id: 'd8d7e57e-3b56-4ae0-beed-e6ebe4df890f',
        type: 'dropdown',
        label: 'Do all founders have a formal compensation structure?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '1c7deddc-6aaa-4990-9496-9116b651d54e',
  },
  q8: {
    sectionTitle: 'Departmental Structures',
    sectionId: '1c7deddc-6aaa-4990-9496-9116b651d54e',
    firstField: '76897973-319a-4493-ba1f-60f292be3a1f',
    fields: {
      departmentalStructures: {
        id: '76897973-319a-4493-ba1f-60f292be3a1f',
        type: 'dropdown',
        label:
          'Has the company formally established departmental structures with defined leadership for each function?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '13259a8d-f30e-45ef-812b-4779bd48b50c',
  },
  q9: {
    sectionTitle: 'Department Head Decision Making',
    sectionId: '13259a8d-f30e-45ef-812b-4779bd48b50c',
    firstField: '30b68648-1ca7-4dab-9c67-725b2b3d72da',
    fields: {
      departmentHeadDecisions: {
        id: '30b68648-1ca7-4dab-9c67-725b2b3d72da',
        type: 'dropdown',
        label:
          'Are department heads or key function leaders involved in strategic decision-making alongside the founders?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '54e94c24-119c-41fb-98f5-1d09d71d58c7',
  },
  q10: {
    sectionTitle: 'Organizational Chart',
    sectionId: '54e94c24-119c-41fb-98f5-1d09d71d58c7',
    firstField: '138fa849-9870-4562-b693-1944fc60dc3a',
    fields: {
      organizationalChart: {
        id: '138fa849-9870-4562-b693-1944fc60dc3a',
        type: 'dropdown',
        label:
          "Is there a documented organizational chart that reflects the company's current structure?",
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'f33ab153-1a98-4ce0-9ca9-f73dd73bd1f1',
  },
  q11: {
    sectionTitle: 'Existing Departments',
    sectionId: 'f33ab153-1a98-4ce0-9ca9-f73dd73bd1f1',
    firstField: '301c4128-79ad-4854-a9ce-371933e91f3a',
    fields: {
      existingDepartments: {
        id: '301c4128-79ad-4854-a9ce-371933e91f3a',
        type: 'dropdown',
        label:
          'Which of the following departments currently exist in your company? (Select all that apply)',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '62572aa4-0a9a-4f8f-a731-dd3c361407d7',
  },
  q12: {
    sectionTitle: 'Dedicated Team Members',
    sectionId: '62572aa4-0a9a-4f8f-a731-dd3c361407d7',
    firstField: '442eb4cb-e0aa-44b4-a134-1ecf12ff29e9',
    fields: {
      dedicatedTeamMembers: {
        id: '442eb4cb-e0aa-44b4-a134-1ecf12ff29e9',
        type: 'dropdown',
        label:
          'Do all key departments (finance, marketing, tech, operations) have at least one dedicated team member?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '3a2d8f9f-4e8e-4250-be8f-8b8c82339b96',
  },
  q13: {
    sectionTitle: 'Department Leaders Assignment',
    sectionId: '3a2d8f9f-4e8e-4250-be8f-8b8c82339b96',
    firstField: '41516b19-57b1-4fcf-b687-2c078de6d011',
    fields: {
      departmentLeadersAssignment: {
        id: '41516b19-57b1-4fcf-b687-2c078de6d011',
        type: 'dropdown',
        label:
          'Have department leaders been officially assigned (beyond just the founders)?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '1f687b67-8b02-4dcf-b709-eb5f179175e8',
  },
  q14: {
    sectionTitle: 'Department KPIs and Performance Tracking',
    sectionId: '1f687b67-8b02-4dcf-b709-eb5f179175e8',
    firstField: 'ec42b582-ed71-4872-b4be-afd524319497',
    fields: {
      departmentKpis: {
        id: 'ec42b582-ed71-4872-b4be-afd524319497',
        type: 'dropdown',
        label:
          'Do departments have clear KPIs and performance tracking in place?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '5a43a100-eafe-404c-8781-594242de20d4',
  },
  q15: {
    sectionTitle: 'Cross-Department Communication',
    sectionId: '5a43a100-eafe-404c-8781-594242de20d4',
    firstField: '192a871f-9482-4b7c-aad5-5f681671649b',
    fields: {
      crossDepartmentCommunication: {
        id: '192a871f-9482-4b7c-aad5-5f681671649b',
        type: 'dropdown',
        label:
          'Is cross-department communication structured and efficient (e.g., meetings, reporting, tools)?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'ba501e39-8a3f-4f51-b352-e260b3d4bdd5',
  },
  q16: {
    sectionTitle: 'Organization Chart Upload',
    sectionId: 'ba501e39-8a3f-4f51-b352-e260b3d4bdd5',
    firstField: '8ef2ec39-9b31-4e89-871b-04aeb563751f',
    fields: {
      organizationChartUpload: {
        id: '8ef2ec39-9b31-4e89-871b-04aeb563751f',
        type: 'file',
        label: 'Upload your organization chart',
        required: false,
        validation:
          "z.string().optional().refine((val) => !val || val.endsWith('.pdf'), 'File must be a PDF format')",
        nextField: null,
        acceptedTypes: ['.pdf'],
      },
    },
    nextNode: '63ec868a-0565-4f0c-8d04-cc599c9f9156',
  },
  q17: {
    sectionTitle: 'Product & Technology Responsibility',
    sectionId: '63ec868a-0565-4f0c-8d04-cc599c9f9156',
    firstField: '3bc8b729-e2fe-45dc-a0a9-868e69f00f4d',
    fields: {
      productTechResponsibility: {
        id: '3bc8b729-e2fe-45dc-a0a9-868e69f00f4d',
        type: 'dropdown',
        label: 'Who is responsible for product & technology development?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '631610a7-6808-457b-8db7-8cb177bce67c',
  },
  q18: {
    sectionTitle: 'Tech Lead Education Level',
    sectionId: '631610a7-6808-457b-8db7-8cb177bce67c',
    firstField: '259d9d3a-b557-4d80-8338-fd578d6d4928',
    fields: {
      techLeadEducation: {
        id: '259d9d3a-b557-4d80-8338-fd578d6d4928',
        type: 'dropdown',
        label: 'What is their highest level of education in a technical field?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '928cd005-5a4b-481b-9518-da24dd869073',
  },
  q19: {
    sectionTitle: 'Tech Lead Experience Years',
    sectionId: '928cd005-5a4b-481b-9518-da24dd869073',
    firstField: '714a3240-856a-4d0e-aa86-3aee557159a7',
    fields: {
      techLeadExperience: {
        id: '714a3240-856a-4d0e-aa86-3aee557159a7',
        type: 'dropdown',
        label:
          'How many years of experience do they have in software/product development?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '46a8dabf-ae4d-459f-aa82-f91bced879ad',
  },
  q20: {
    sectionTitle: 'Tech Lead Leadership Experience',
    sectionId: '46a8dabf-ae4d-459f-aa82-f91bced879ad',
    firstField: '476a8dc0-f41b-487d-babc-0d2aa57be96e',
    fields: {
      techLeadLeadership: {
        id: '476a8dc0-f41b-487d-babc-0d2aa57be96e',
        type: 'dropdown',
        label: 'Have they led a tech/product team before?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '248ca949-0c9c-4761-a93c-97b379dc0816',
  },
  q21: {
    sectionTitle: 'Marketing & Sales Responsibility',
    sectionId: '248ca949-0c9c-4761-a93c-97b379dc0816',
    firstField: '79e4afc7-62f9-48f6-9023-e608c7ded00d',
    fields: {
      marketingSalesResponsibility: {
        id: '79e4afc7-62f9-48f6-9023-e608c7ded00d',
        type: 'dropdown',
        label: 'Who is responsible for marketing & sales strategy?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'c5b68258-2ad0-4f22-b026-beb4482c0c74',
  },
  q22: {
    sectionTitle: 'Marketing Lead Education Level',
    sectionId: 'c5b68258-2ad0-4f22-b026-beb4482c0c74',
    firstField: '2a390c32-9d9e-4982-bfe8-c3860e6bd842',
    fields: {
      marketingLeadEducation: {
        id: '2a390c32-9d9e-4982-bfe8-c3860e6bd842',
        type: 'dropdown',
        label:
          'What is their highest level of education in business/marketing?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '5a2c20ce-7729-4857-9ef3-a504b439cb19',
  },
  q23: {
    sectionTitle: 'Marketing Lead Experience Years',
    sectionId: '5a2c20ce-7729-4857-9ef3-a504b439cb19',
    firstField: '2d2c9349-6a69-4ac6-b2e4-4dec76b139e7',
    fields: {
      marketingLeadExperience: {
        id: '2d2c9349-6a69-4ac6-b2e4-4dec76b139e7',
        type: 'dropdown',
        label:
          'How many years of experience do they have in sales, branding, or customer acquisition?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '0761b6a1-1ddf-4cea-b536-b3230cd17f3a',
  },
  q24: {
    sectionTitle: 'Marketing Lead Industry Experience',
    sectionId: '0761b6a1-1ddf-4cea-b536-b3230cd17f3a',
    firstField: 'd7f8b8bf-37f4-42a6-99ee-8281b7d3d1b1',
    fields: {
      marketingLeadIndustryExperience: {
        id: 'd7f8b8bf-37f4-42a6-99ee-8281b7d3d1b1',
        type: 'dropdown',
        label: 'Have they worked in a similar industry before?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '67da88eb-7a6e-4231-a946-f53dcc6573c0',
  },
  q25: {
    sectionTitle: 'Finance Management Responsibility',
    sectionId: '67da88eb-7a6e-4231-a946-f53dcc6573c0',
    firstField: 'e6ee4d6e-037a-4589-8c3f-6cb58c51bab1',
    fields: {
      financeManagementResponsibility: {
        id: 'e6ee4d6e-037a-4589-8c3f-6cb58c51bab1',
        type: 'dropdown',
        label: 'Who manages company finances and investor relations?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '89746638-2918-4508-8542-3de01e8e00c4',
  },
  q26: {
    sectionTitle: 'Finance Lead Education Background',
    sectionId: '89746638-2918-4508-8542-3de01e8e00c4',
    firstField: '707b75a9-5fcb-4c3b-a1fe-e5a459d6f29c',
    fields: {
      financeLeadEducation: {
        id: '707b75a9-5fcb-4c3b-a1fe-e5a459d6f29c',
        type: 'dropdown',
        label: 'What is their educational background in finance/accounting?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '43ce9a1c-c530-4fb7-aa24-c70a9c3dd0d6',
  },
  q27: {
    sectionTitle: 'Finance Lead Prior Experience',
    sectionId: '43ce9a1c-c530-4fb7-aa24-c70a9c3dd0d6',
    firstField: 'a98b9e2e-87e5-4c2b-9d40-5d90f04f908a',
    fields: {
      financeLeadPriorExperience: {
        id: 'a98b9e2e-87e5-4c2b-9d40-5d90f04f908a',
        type: 'dropdown',
        label:
          'Do they have prior experience in financial planning, budgeting, or fundraising?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'c1631bcc-fe8e-4499-9993-e197cf5fea65',
  },
  q28: {
    sectionTitle: 'Finance Lead Total Experience',
    sectionId: 'c1631bcc-fe8e-4499-9993-e197cf5fea65',
    firstField: '955e0823-4fd9-4b77-8178-975c7641e521',
    fields: {
      financeLeadTotalExperience: {
        id: '955e0823-4fd9-4b77-8178-975c7641e521',
        type: 'dropdown',
        label:
          'How many years of experience do they have in finance/accounting/investment?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'b1c579cf-dd09-478c-a5ea-60770dc4f44a',
  },
  q29: {
    sectionTitle: 'Operations & HR Responsibility',
    sectionId: 'b1c579cf-dd09-478c-a5ea-60770dc4f44a',
    firstField: 'd0282e1f-f6bf-4c56-adf1-4fa4b9fa9a6e',
    fields: {
      operationsHrResponsibility: {
        id: 'd0282e1f-f6bf-4c56-adf1-4fa4b9fa9a6e',
        type: 'dropdown',
        label: 'Who is responsible for company operations and HR?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'edbfbe61-f08d-4a6d-8f83-749a3d6d0bc3',
  },
  q30: {
    sectionTitle: 'Operations Lead Background',
    sectionId: 'edbfbe61-f08d-4a6d-8f83-749a3d6d0bc3',
    firstField: '55417c51-cfef-4fe8-9d0c-84bdbe0c6f29',
    fields: {
      operationsLeadBackground: {
        id: '55417c51-cfef-4fe8-9d0c-84bdbe0c6f29',
        type: 'dropdown',
        label:
          'What is their background in business operations, supply chain, or management?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'd8128828-9f4f-4d53-b0e3-5809548ee15a',
  },
  q31: {
    sectionTitle: 'Operations Lead Prior Experience',
    sectionId: 'd8128828-9f4f-4d53-b0e3-5809548ee15a',
    firstField: 'de31d56b-eaf5-452d-8e71-c449344a41b9',
    fields: {
      operationsLeadPriorExperience: {
        id: 'de31d56b-eaf5-452d-8e71-c449344a41b9',
        type: 'dropdown',
        label:
          'Do they have prior experience in business operations, supply chain, or management?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'e3792afe-6a11-41fb-92e7-4e77af342fcc',
  },
  q32: {
    sectionTitle: 'Dedicated Full-Time Employees',
    sectionId: 'e3792afe-6a11-41fb-92e7-4e77af342fcc',
    firstField: 'd9f47183-eb68-4dee-8038-bd15af14f2f6',
    fields: {
      dedicatedFullTimeEmployees: {
        id: 'd9f47183-eb68-4dee-8038-bd15af14f2f6',
        type: 'dropdown',
        label:
          'Does each department have at least one dedicated full-time employee (excluding the founder-led roles)?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: 'b160d648-a829-44d3-9016-7ca913626896',
  },
  q33: {
    sectionTitle: 'Employee Count',
    sectionId: 'b160d648-a829-44d3-9016-7ca913626896',
    firstField: '47d93bdf-71b1-429f-9fcf-8cbd6f953d28',
    fields: {
      employeeCount: {
        id: '47d93bdf-71b1-429f-9fcf-8cbd6f953d28',
        type: 'dropdown',
        label:
          'How many employees (excluding founders) are currently in the company?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '3a39acfa-570e-4246-a0c2-0c2516c48f27',
  },
  q34: {
    sectionTitle: 'Employee Role Documentation',
    sectionId: '3a39acfa-570e-4246-a0c2-0c2516c48f27',
    firstField: 'cdefd385-f371-4fb5-9267-661d4f00bf00',
    fields: {
      employeeRoleDocumentation: {
        id: 'cdefd385-f371-4fb5-9267-661d4f00bf00',
        type: 'dropdown',
        label:
          'Are employee roles and responsibilities formally documented for each department?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '3d882e8f-8fc8-4e61-942b-ce14fa91c10c',
  },
  q35: {
    sectionTitle: 'Department Tools and Infrastructure',
    sectionId: '3d882e8f-8fc8-4e61-942b-ce14fa91c10c',
    firstField: 'cf692410-3b6a-4853-b805-35b0b3f4a861',
    fields: {
      departmentToolsInfrastructure: {
        id: 'cf692410-3b6a-4853-b805-35b0b3f4a861',
        type: 'dropdown',
        label:
          'Is each department equipped with the necessary tools, software, or infrastructure to operate efficiently?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: '429299af-4dc6-453a-8e25-e5fec5e9d8f6',
  },
  q36: {
    sectionTitle: 'Internal Processes and Workflows',
    sectionId: '429299af-4dc6-453a-8e25-e5fec5e9d8f6',
    firstField: 'd88b89f8-e202-43b4-a113-2092556c3ce0',
    fields: {
      internalProcessesWorkflows: {
        id: 'd88b89f8-e202-43b4-a113-2092556c3ce0',
        type: 'dropdown',
        label:
          'Have departments developed internal processes and workflows to handle daily operations?',
        required: true,
        validation: "z.string().min(1, 'This field is required')",
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
    nextNode: undefined,
  },
};
