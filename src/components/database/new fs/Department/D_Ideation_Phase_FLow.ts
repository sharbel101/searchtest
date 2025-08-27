const D_IdeationPhase = {
  q1: {
    sectionTitle: 'Number of Founders',
    sectionId: '9aeebe68-44da-4a0f-adb5-0cf5f88ca004',
    firstField: '135fcb7d-0d30-4f8a-8305-5e5ff6cedcc3',
    fields: {
      numberOfFounders: {
        id: '135fcb7d-0d30-4f8a-8305-5e5ff6cedcc3',
        type: 'dropdown',
        label: 'Number of Founders or Cofounders',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'Number of founders is required')",
        options: [
          {
            id: '1_founder',
            value: '1 founder',
          },
          {
            id: '2_founders',
            value: '2 founders',
          },
          {
            id: '3_or_more_founders',
            value: '3 or more founders',
          },
          {
            id: 'array_of_founders',
            value: 'Array of founders',
          },
        ],
      },
    },
    nextNode: 'c8c8325e-8c01-47b5-b3a3-53e62937bb3d',
  },
  q2: {
    sectionTitle: 'Founders Education Background',
    sectionId: 'c8c8325e-8c01-47b5-b3a3-53e62937bb3d',
    firstField: 'cf1d2482-ee1a-4197-b665-034567ae22ac',
    fields: {
      foundersEducationBackground: {
        id: 'cf1d2482-ee1a-4197-b665-034567ae22ac',
        type: 'dropdown',
        label: 'Education Background of Founders',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'Education background is required')",
        options: [
          {
            id: 'no_formal_education',
            value: 'No formal education',
          },
          {
            id: 'some_university_not_completed',
            value: 'Some university education (not completed)',
          },
          {
            id: 'completed_bachelors',
            value: "Completed Bachelor's degree",
          },
          {
            id: 'masters_mba',
            value: "Master's or MBA",
          },
          {
            id: 'phd_specialized',
            value: 'PhD or Specialized Certification',
          },
        ],
      },
    },
    nextNode: '6d096bdc-e821-4e7d-8d90-3601c3b33e63',
  },
  q3: {
    sectionTitle: 'Founders Past Experience and Skills',
    sectionId: '6d096bdc-e821-4e7d-8d90-3601c3b33e63',
    firstField: '5e6283d6-a077-407d-ba58-4184067596e8',
    fields: {
      foundersPastExperienceSkills: {
        id: '5e6283d6-a077-407d-ba58-4184067596e8',
        type: 'dropdown',
        label: 'Past Experience & Key Skills',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'Past experience is required')",
        options: [
          {
            id: 'no_work_experience',
            value: 'No work experience',
          },
          {
            id: 'some_experience_0_2_years',
            value: 'Some experience (0-2 years)',
          },
          {
            id: '3_5_years_experience',
            value: '3-5 years of experience',
          },
          {
            id: '5_plus_years_relevant',
            value: '5+ years in relevant industries',
          },
        ],
      },
    },
    nextNode: 'f4b2ccf6-8a82-4a8a-b650-e02602f1026f',
  },
  q4: {
    sectionTitle: 'Founder Responsibilities',
    sectionId: 'f4b2ccf6-8a82-4a8a-b650-e02602f1026f',
    firstField: '2a801d94-4b84-4c42-b832-0b69c2f972ad',
    fields: {
      founderResponsibilities: {
        id: '2a801d94-4b84-4c42-b832-0b69c2f972ad',
        type: 'dropdown',
        label: 'Responsibilities of Each Founder',
        required: true,
        nextField: null,
        validation:
          "z.string().min(1, 'Founder responsibilities are required')",
        options: [
          {
            id: 'no_clear_responsibilities',
            value: 'No clear responsibilities',
          },
          {
            id: 'general_roles_overlapping',
            value: 'General roles, but overlapping tasks',
          },
          {
            id: 'defined_roles_missing_functions',
            value: 'Defined roles, but missing key business functions',
          },
          {
            id: 'clearly_structured_responsibilities',
            value:
              'Clearly structured responsibilities covering business, tech, and finance',
          },
        ],
      },
    },
    nextNode: '25be1cf1-b618-4824-9ed2-cc388334e37e',
  },
  q5: {
    sectionTitle: 'Non-Founder Team Members',
    sectionId: '25be1cf1-b618-4824-9ed2-cc388334e37e',
    firstField: '24693ec2-49b7-4e7f-8a4f-c3eb4f4a4716',
    fields: {
      nonFounderTeamMembers: {
        id: '24693ec2-49b7-4e7f-8a4f-c3eb4f4a4716',
        type: 'dropdown',
        label: 'Presence of Non-Founder Team Members',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'Team members information is required')",
        options: [
          {
            id: 'no_team_members',
            value: 'No team members',
          },
          {
            id: 'only_one_additional',
            value: 'Only one additional team member',
          },
          {
            id: '2_3_members_covering_gaps',
            value: '2-3 team members covering tech/finance gaps',
          },
          {
            id: 'more_than_3_specialized',
            value: 'More than 3 early team members with specialized roles',
          },
        ],
      },
    },
    nextNode: '1529ff8b-5ce2-43c5-9255-976b7d6e16f7',
  },
  q6: {
    sectionTitle: 'Designated CEO',
    sectionId: '1529ff8b-5ce2-43c5-9255-976b7d6e16f7',
    firstField: '8bb911a4-c53d-4294-b021-9944b298949e',
    fields: {
      designatedCeo: {
        id: '8bb911a4-c53d-4294-b021-9944b298949e',
        type: 'dropdown',
        label: 'Does your startup have a designated CEO among the founders?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'CEO designation is required')",
        options: [
          {
            id: 'no_ceo_assigned',
            value: 'No CEO assigned',
          },
          {
            id: 'ceo_role_exists_unclear',
            value: 'CEO role exists but responsibilities unclear',
          },
          {
            id: 'clearly_designated_ceo',
            value: 'Clearly designated CEO with defined leadership role',
          },
        ],
      },
    },
    nextNode: 'fcaa986b-9f38-42ca-9774-4e845282cf5b',
  },
  q7: {
    sectionTitle: 'Technical Background',
    sectionId: 'fcaa986b-9f38-42ca-9774-4e845282cf5b',
    firstField: 'f247280c-385d-49c6-8a2b-746db8d6bec8',
    fields: {
      technicalBackground: {
        id: 'f247280c-385d-49c6-8a2b-746db8d6bec8',
        type: 'dropdown',
        label: 'Do the founders have a technical (development) background?',
        required: true,
        nextField: null,
        validation:
          "z.string().min(1, 'Technical background information is required')",
        options: [
          {
            id: 'no_technical_expertise',
            value: 'No technical expertise at all',
          },
          {
            id: 'no_technical_founder_external_dev',
            value: 'No technical founder, but an external dev exists',
          },
          {
            id: 'at_least_one_technical_founder',
            value: 'At least one founder with a technical background',
          },
        ],
      },
    },
    nextNode: '0f0931cf-a277-4c5b-b116-f2d96efbf8ea',
  },
  q8: {
    sectionTitle: 'Organization Chart Upload',
    sectionId: '0f0931cf-a277-4c5b-b116-f2d96efbf8ea',
    firstField: 'cd6a49c1-70e4-47ab-b513-c077d95074c0',
    fields: {
      organizationChartUpload: {
        id: 'cd6a49c1-70e4-47ab-b513-c077d95074c0',
        type: 'File',
        label: 'Upload your organization chart',
        required: false,
        nextField: null,
        validation:
          "z.string().optional().refine((val) => !val || val.endsWith('.pdf') || val.includes('pdf'), 'File must be a PDF format')",
        acceptedTypes: ['.pdf'],
      },
    },
    nextNode: 'e527c74c-1dad-48a5-bfbb-76cf85f374b4',
  },
  q9: {
    sectionTitle: 'Financial Expertise',
    sectionId: 'e527c74c-1dad-48a5-bfbb-76cf85f374b4',
    firstField: '49551288-4051-493b-97c3-dc24b80d6a1a',
    fields: {
      financialExpertise: {
        id: '49551288-4051-493b-97c3-dc24b80d6a1a',
        type: 'dropdown',
        label:
          'Do you have a financial/accounting officer or expertise within the founding team?',
        required: true,
        nextField: null,
        validation:
          "z.string().min(1, 'Financial expertise information is required')",
        options: [
          {
            id: 'no_financial_expertise',
            value: 'No financial expertise at all',
          },
          {
            id: 'no_financial_founder_external_expert',
            value: 'No financial founder, but an external expert exists',
          },
          {
            id: 'at_least_one_financial_founder',
            value: 'At least one founder with a financial background',
          },
        ],
      },
    },
    nextNode: 'cc3bce73-50f5-4b18-a919-e4c6fa7a617c',
  },
  q10: {
    sectionTitle: 'Core Business Functions Assignment',
    sectionId: 'cc3bce73-50f5-4b18-a919-e4c6fa7a617c',
    firstField: '8151e431-a2bf-4629-959d-14f7d7f0baf2',
    fields: {
      coreBusinessFunctionsAssignment: {
        id: '8151e431-a2bf-4629-959d-14f7d7f0baf2',
        type: 'dropdown',
        label:
          'Have the core business functions been formally assigned to specific founders or team members?',
        required: true,
        nextField: null,
        validation:
          "z.string().min(1, 'Core business functions assignment is required')",
        options: [
          {
            id: 'no_clear_roles_assigned',
            value: 'No clear roles assigned among founders',
          },
          {
            id: 'informal_role_distributions_overlap',
            value:
              'Founders have informal role distributions, but overlap exists',
          },
          {
            id: 'clearly_assigned_core_function',
            value:
              'Each founder has a clearly assigned core function (e.g., CEO, CTO, CFO)',
          },
        ],
      },
    },
    nextNode: '3be9b486-d84e-435c-aff8-47bef0b1f8b3',
  },
  q11: {
    sectionTitle: 'External Advisors and Mentors',
    sectionId: '3be9b486-d84e-435c-aff8-47bef0b1f8b3',
    firstField: '724d08f4-eb62-49ef-8513-4180ed065904',
    fields: {
      externalAdvisorsMentors: {
        id: '724d08f4-eb62-49ef-8513-4180ed065904',
        type: 'dropdown',
        label:
          'Are there any external advisors or mentors providing guidance in specialized areas (e.g., legal, finance, product development)?',
        required: true,
        nextField: null,
        validation:
          "z.string().min(1, 'External advisors information is required')",
        options: [
          {
            id: 'no_external_advisors',
            value: 'No external advisors or mentors',
          },
          {
            id: 'informal_advisors_occasional',
            value: 'Informal advisor(s) providing occasional input',
          },
          {
            id: 'dedicated_advisors_actively_involved',
            value:
              'Dedicated advisors/mentors actively involved in decision-making',
          },
        ],
      },
    },
    nextNode: '7c40fd24-7a50-44ee-b74c-e0529c45105c',
  },
  q12: {
    sectionTitle: 'Internal Communication and Decision Making',
    sectionId: '7c40fd24-7a50-44ee-b74c-e0529c45105c',
    firstField: 'afec19ef-fe32-4183-9c9f-8e0936251f76',
    fields: {
      internalCommunicationDecisionMaking: {
        id: 'afec19ef-fe32-4183-9c9f-8e0936251f76',
        type: 'dropdown',
        label:
          'Have you defined internal communication and decision-making processes within the founding team?',
        required: true,
        nextField: null,
        validation:
          "z.string().min(1, 'Communication process information is required')",
        options: [
          {
            id: 'no_formal_process_ad_hoc',
            value: 'No formal process; decisions are made ad hoc',
          },
          {
            id: 'some_communication_no_clear_decision',
            value:
              'Some communication structure exists, but no clear decision-making process',
          },
          {
            id: 'defined_internal_processes',
            value:
              'Defined internal processes exist (e.g., scheduled meetings, structured decision-making framework)',
          },
        ],
      },
    },
    nextNode: '8e6ca773-79f0-47ec-a083-e20b874b19b3',
  },
  q13: {
    sectionTitle: 'Company Registration',
    sectionId: '8e6ca773-79f0-47ec-a083-e20b874b19b3',
    firstField: '1db159bf-36aa-462a-95a1-691e9e6cffd2',
    fields: {
      companyRegistration: {
        id: '1db159bf-36aa-462a-95a1-691e9e6cffd2',
        type: 'dropdown',
        label: 'Have you officially registered your company?',
        required: true,
        nextField: null,
        validation:
          "z.string().min(1, 'Company registration information is required')",
        options: [
          {
            id: 'no_and_no_plans',
            value: 'No, and no plans yet',
          },
          {
            id: 'no_but_in_progress',
            value: 'No, but in progress',
          },
          {
            id: 'yes',
            value: 'Yes',
          },
        ],
      },
    },
    nextNode: '4fd55224-1014-4ebb-b4f0-d16937016470',
  },
  q14: {
    sectionTitle: 'Team Responsibilities Documentation',
    sectionId: '4fd55224-1014-4ebb-b4f0-d16937016470',
    firstField: '30b99d1a-c1cc-4cc4-868d-a689442d5e1d',
    fields: {
      teamResponsibilitiesDocumentation: {
        id: '30b99d1a-c1cc-4cc4-868d-a689442d5e1d',
        type: 'dropdown',
        label:
          'Do you have an internal document outlining team responsibilities and department structures?',
        required: true,
        nextField: null,
        validation:
          "z.string().min(1, 'Team responsibilities information is required')",
        options: [
          {
            id: 'no_formal_documentation',
            value: 'No formal documentation',
          },
          {
            id: 'partially_structured_informal',
            value: 'Partially structured but informal',
          },
          {
            id: 'yes_documented',
            value: 'Yes, documented',
          },
        ],
      },
    },
    nextNode: '5e58ba2a-5d91-4b46-9f8f-c6e82bb24711',
  },
  q15: {
    sectionTitle: 'KPIs for Team Members',
    sectionId: '5e58ba2a-5d91-4b46-9f8f-c6e82bb24711',
    firstField: 'c46f3f8c-b66f-475c-bdaf-facda8b47df0',
    fields: {
      kpisTeamMembers: {
        id: 'c46f3f8c-b66f-475c-bdaf-facda8b47df0',
        type: 'dropdown',
        label:
          'Have you set KPIs (Key Performance Indicators) for each founder/team member?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'KPIs information is required')",
        options: [
          {
            id: 'no_kpis',
            value: 'No KPIs',
          },
          {
            id: 'kpis_exist_not_well_defined',
            value: 'KPIs exist but not well-defined',
          },
          {
            id: 'yes_structured_kpis',
            value: 'Yes, structured KPIs exist',
          },
        ],
      },
    },
    nextNode: 'ccb7a134-5bbd-4f91-80cf-2b39ea28b08a',
  },
  q16: {
    sectionTitle: 'Decision Making Process',
    sectionId: 'ccb7a134-5bbd-4f91-80cf-2b39ea28b08a',
    firstField: 'ae49180e-fb55-4ca3-94a6-2097434163a8',
    fields: {
      decisionMakingProcess: {
        id: 'ae49180e-fb55-4ca3-94a6-2097434163a8',
        type: 'dropdown',
        label:
          'Is there a structured decision-making process for major company decisions?',
        required: true,
        nextField: null,
        validation:
          "z.string().min(1, 'Decision making process information is required')",
        options: [
          {
            id: 'no_structured_process',
            value: 'No structured process',
          },
          {
            id: 'informal_but_works',
            value: 'Informal, but works',
          },
          {
            id: 'yes_clearly_defined',
            value: 'Yes, clearly defined',
          },
        ],
      },
    },
    nextNode: '30cf4a2c-c741-4b4b-a697-00c0e5e070b5',
  },
  q17: {
    sectionTitle: 'Team Meeting Frequency',
    sectionId: '30cf4a2c-c741-4b4b-a697-00c0e5e070b5',
    firstField: 'cdbd11ba-693c-4cc2-aaa9-aec0999ea128',
    fields: {
      teamMeetingFrequency: {
        id: 'cdbd11ba-693c-4cc2-aaa9-aec0999ea128',
        type: 'dropdown',
        label:
          'How often does your team formally meet to discuss progress and strategy?',
        required: true,
        nextField: null,
        validation:
          "z.string().min(1, 'Meeting frequency information is required')",
        options: [
          {
            id: 'no_formal_meetings',
            value: 'No formal meetings',
          },
          {
            id: 'monthly',
            value: 'Monthly',
          },
          {
            id: 'weekly_or_biweekly',
            value: 'Weekly or biweekly',
          },
        ],
      },
    },
    nextNode: 'f9d12dee-c3e7-4137-a6ba-d931d2e92ae6',
  },
  q18: {
    sectionTitle: 'Dedicated Workspace',
    sectionId: 'f9d12dee-c3e7-4137-a6ba-d931d2e92ae6',
    firstField: '0a9a2da8-a07f-4786-956c-e2d5fdfe7c68',
    fields: {
      dedicatedWorkspace: {
        id: '0a9a2da8-a07f-4786-956c-e2d5fdfe7c68',
        type: 'dropdown',
        label: 'Do you have a dedicated workspace for your team?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'Workspace information is required')",
        options: [
          {
            id: 'no_dedicated_workspace',
            value: 'No dedicated workspace',
          },
          {
            id: 'remote_structured_workspace',
            value:
              'Remote but structured workspace (online tools, defined schedules)',
          },
          {
            id: 'yes_physical_office',
            value: 'Yes, a physical office or co-working space',
          },
        ],
      },
    },
    nextNode: '6d30a1d8-ecb4-4de8-a9c3-b6f4c3892720',
  },
  q19: {
    sectionTitle: 'Ownership and Equity Distribution',
    sectionId: '6d30a1d8-ecb4-4de8-a9c3-b6f4c3892720',
    firstField: 'a16cb524-e7be-49ef-bbec-8a4d61223dee',
    fields: {
      ownershipEquityDistribution: {
        id: 'a16cb524-e7be-49ef-bbec-8a4d61223dee',
        type: 'dropdown',
        label:
          'Have you legally defined ownership and equity distribution among founders?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'Ownership information is required')",
        options: [
          {
            id: 'no_discussions_yet',
            value: 'No discussions yet',
          },
          {
            id: 'verbally_agreed_not_documented',
            value: 'Verbally agreed but not documented',
          },
          {
            id: 'yes_legally_documented',
            value: 'Yes, legally documented',
          },
        ],
      },
    },
    nextNode: '533559e8-2d26-4749-9d67-200824903673',
  },
  q20: {
    sectionTitle: 'External Partnerships',
    sectionId: '533559e8-2d26-4749-9d67-200824903673',
    firstField: '271ba3a2-2791-4faf-929e-1a4319aa5224',
    fields: {
      externalPartnerships: {
        id: '271ba3a2-2791-4faf-929e-1a4319aa5224',
        type: 'dropdown',
        label:
          'Have you identified key external partnerships or suppliers essential to your business?',
        required: true,
        nextField: null,
        validation: "z.string().min(1, 'Partnerships information is required')",
        options: [
          {
            id: 'no_external_partnerships_yet',
            value: 'No external partnerships or suppliers yet',
          },
          {
            id: 'potential_partnerships_identified',
            value: 'Potential partnerships identified but not formalized',
          },
          {
            id: 'yes_formal_agreements',
            value: 'Yes, formal agreements or partnerships exist',
          },
        ],
      },
    },
    nextNode: 'be87a6be-e67a-4f43-bd6f-47f2b06d49b0',
  },
  q21: {
    sectionTitle: 'Founder Contingency Plan',
    sectionId: 'be87a6be-e67a-4f43-bd6f-47f2b06d49b0',
    firstField: 'cf9d01ea-f926-4173-bb09-46aeb29286f0',
    fields: {
      founderContingencyPlan: {
        id: 'cf9d01ea-f926-4173-bb09-46aeb29286f0',
        type: 'dropdown',
        label:
          'Do you have a contingency plan in case a founder leaves or steps down?',
        required: true,
        nextField: null,
        validation:
          "z.string().min(1, 'Contingency plan information is required')",
        options: [
          {
            id: 'no_plan_in_place',
            value: 'No plan in place',
          },
          {
            id: 'some_discussions_no_formal_plan',
            value: 'Some discussions but no formal plan',
          },
          {
            id: 'yes_structured_plan',
            value: 'Yes, a structured plan exists',
          },
        ],
      },
    },
    nextNode: undefined,
  },
};
