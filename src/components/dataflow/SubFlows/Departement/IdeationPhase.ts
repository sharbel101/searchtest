import { FieldType } from '../../MainFlow/flow';

export const Ideation_Phase_FLow = {
  q1: {
    sectionTitle: 'Number of Founders',
    sectionId: 'number-of-founders',
    firstField: 'numberOfFounders',
    fields: {
      numberOfFounders: {
        id: 'number-of-founders',
        type: FieldType.Dropdown,
        label: 'Number of Founders or Cofounders',
        required: true,
        nextField: null,
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
    nextNode: 'q2',
  },

  q2: {
    sectionTitle: 'Founders Education Background',
    sectionId: 'founders-education-background',
    firstField: 'foundersEducationBackground',
    fields: {
      foundersEducationBackground: {
        id: 'founders-education-background',
        type: FieldType.Dropdown,
        label: 'Education Background of Founders',
        required: true,
        nextField: null,
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
    nextNode: 'q3',
  },

  q3: {
    sectionTitle: 'Founders Past Experience and Skills',
    sectionId: 'founders-past-experience-skills',
    firstField: 'foundersPastExperienceSkills',
    fields: {
      foundersPastExperienceSkills: {
        id: 'founders-past-experience-skills',
        type: FieldType.Dropdown,
        label: 'Past Experience & Key Skills',
        required: true,
        nextField: null,
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
    nextNode: 'q4',
  },

  q4: {
    sectionTitle: 'Founder Responsibilities',
    sectionId: 'founder-responsibilities',
    firstField: 'founderResponsibilities',
    fields: {
      founderResponsibilities: {
        id: 'founder-responsibilities',
        type: FieldType.Dropdown,
        label: 'Responsibilities of Each Founder',
        required: true,
        nextField: null,
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
    nextNode: 'q5',
  },

  q5: {
    sectionTitle: 'Non-Founder Team Members',
    sectionId: 'non-founder-team-members',
    firstField: 'nonFounderTeamMembers',
    fields: {
      nonFounderTeamMembers: {
        id: 'non-founder-team-members',
        type: FieldType.Dropdown,
        label: 'Presence of Non-Founder Team Members',
        required: true,
        nextField: null,
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
    nextNode: 'q6',
  },

  q6: {
    sectionTitle: 'Designated CEO',
    sectionId: 'designated-ceo',
    firstField: 'designatedCeo',
    fields: {
      designatedCeo: {
        id: 'designated-ceo',
        type: FieldType.Dropdown,
        label: 'Does your startup have a designated CEO among the founders?',
        required: true,
        nextField: null,
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
    nextNode: 'q7',
  },

  q7: {
    sectionTitle: 'Technical Background',
    sectionId: 'technical-background',
    firstField: 'technicalBackground',
    fields: {
      technicalBackground: {
        id: 'technical-background',
        type: FieldType.Dropdown,
        label: 'Do the founders have a technical (development) background?',
        required: true,
        nextField: null,
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
    nextNode: 'q8',
  },

  q8: {
    sectionTitle: 'Organization Chart Upload',
    sectionId: 'organization-chart-upload',
    firstField: 'organizationChartUpload',
    fields: {
      organizationChartUpload: {
        id: 'organization-chart-upload',
        type: FieldType.File,
        label: 'Upload your organization chart',
        required: false,
        nextField: null,
        acceptedTypes: ['.pdf'],
      },
    },
    nextNode: 'q9',
  },

  q9: {
    sectionTitle: 'Financial Expertise',
    sectionId: 'financial-expertise',
    firstField: 'financialExpertise',
    fields: {
      financialExpertise: {
        id: 'financial-expertise',
        type: FieldType.Dropdown,
        label:
          'Do you have a financial/accounting officer or expertise within the founding team?',
        required: true,
        nextField: null,
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
    nextNode: 'q10',
  },

  q10: {
    sectionTitle: 'Core Business Functions Assignment',
    sectionId: 'core-business-functions-assignment',
    firstField: 'coreBusinessFunctionsAssignment',
    fields: {
      coreBusinessFunctionsAssignment: {
        id: 'core-business-functions-assignment',
        type: FieldType.Dropdown,
        label:
          'Have the core business functions been formally assigned to specific founders or team members?',
        required: true,
        nextField: null,
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
    nextNode: 'q11',
  },

  q11: {
    sectionTitle: 'External Advisors and Mentors',
    sectionId: 'external-advisors-mentors',
    firstField: 'externalAdvisorsMentors',
    fields: {
      externalAdvisorsMentors: {
        id: 'external-advisors-mentors',
        type: FieldType.Dropdown,
        label:
          'Are there any external advisors or mentors providing guidance in specialized areas (e.g., legal, finance, product development)?',
        required: true,
        nextField: null,
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
    nextNode: 'q12',
  },

  q12: {
    sectionTitle: 'Internal Communication and Decision Making',
    sectionId: 'internal-communication-decision-making',
    firstField: 'internalCommunicationDecisionMaking',
    fields: {
      internalCommunicationDecisionMaking: {
        id: 'internal-communication-decision-making',
        type: FieldType.Dropdown,
        label:
          'Have you defined internal communication and decision-making processes within the founding team?',
        required: true,
        nextField: null,
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
    nextNode: 'q13',
  },

  q13: {
    sectionTitle: 'Company Registration',
    sectionId: 'company-registration',
    firstField: 'companyRegistration',
    fields: {
      companyRegistration: {
        id: 'company-registration',
        type: FieldType.Dropdown,
        label: 'Have you officially registered your company?',
        required: true,
        nextField: null,
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
    nextNode: 'q14',
  },

  q14: {
    sectionTitle: 'Team Responsibilities Documentation',
    sectionId: 'team-responsibilities-documentation',
    firstField: 'teamResponsibilitiesDocumentation',
    fields: {
      teamResponsibilitiesDocumentation: {
        id: 'team-responsibilities-documentation',
        type: FieldType.Dropdown,
        label:
          'Do you have an internal document outlining team responsibilities and department structures?',
        required: true,
        nextField: null,
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
    nextNode: 'q15',
  },

  q15: {
    sectionTitle: 'KPIs for Team Members',
    sectionId: 'kpis-team-members',
    firstField: 'kpisTeamMembers',
    fields: {
      kpisTeamMembers: {
        id: 'kpis-team-members',
        type: FieldType.Dropdown,
        label:
          'Have you set KPIs (Key Performance Indicators) for each founder/team member?',
        required: true,
        nextField: null,
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
    nextNode: 'q16',
  },

  q16: {
    sectionTitle: 'Decision Making Process',
    sectionId: 'decision-making-process',
    firstField: 'decisionMakingProcess',
    fields: {
      decisionMakingProcess: {
        id: 'decision-making-process',
        type: FieldType.Dropdown,
        label:
          'Is there a structured decision-making process for major company decisions?',
        required: true,
        nextField: null,
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
    nextNode: 'q17',
  },

  q17: {
    sectionTitle: 'Team Meeting Frequency',
    sectionId: 'team-meeting-frequency',
    firstField: 'teamMeetingFrequency',
    fields: {
      teamMeetingFrequency: {
        id: 'team-meeting-frequency',
        type: FieldType.Dropdown,
        label:
          'How often does your team formally meet to discuss progress and strategy?',
        required: true,
        nextField: null,
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
    nextNode: 'q18',
  },

  q18: {
    sectionTitle: 'Dedicated Workspace',
    sectionId: 'dedicated-workspace',
    firstField: 'dedicatedWorkspace',
    fields: {
      dedicatedWorkspace: {
        id: 'dedicated-workspace',
        type: FieldType.Dropdown,
        label: 'Do you have a dedicated workspace for your team?',
        required: true,
        nextField: null,
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
    nextNode: 'q19',
  },

  q19: {
    sectionTitle: 'Ownership and Equity Distribution',
    sectionId: 'ownership-equity-distribution',
    firstField: 'ownershipEquityDistribution',
    fields: {
      ownershipEquityDistribution: {
        id: 'ownership-equity-distribution',
        type: FieldType.Dropdown,
        label:
          'Have you legally defined ownership and equity distribution among founders?',
        required: true,
        nextField: null,
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
    nextNode: 'q20',
  },

  q20: {
    sectionTitle: 'External Partnerships',
    sectionId: 'external-partnerships',
    firstField: 'externalPartnerships',
    fields: {
      externalPartnerships: {
        id: 'external-partnerships',
        type: FieldType.Dropdown,
        label:
          'Have you identified key external partnerships or suppliers essential to your business?',
        required: true,
        nextField: null,
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
    nextNode: 'q21',
  },

  q21: {
    sectionTitle: 'Founder Contingency Plan',
    sectionId: 'founder-contingency-plan',
    firstField: 'founderContingencyPlan',
    fields: {
      founderContingencyPlan: {
        id: 'founder-contingency-plan',
        type: FieldType.Dropdown,
        label:
          'Do you have a contingency plan in case a founder leaves or steps down?',
        required: true,
        nextField: null,
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
    nextNode: null,
  },
};
