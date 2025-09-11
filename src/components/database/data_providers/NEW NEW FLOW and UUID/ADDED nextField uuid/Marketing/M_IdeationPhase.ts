const M_IdeationPhase = {
  q1: {
    sectionTitle: 'CRM',
    sectionId: '40df1c9f-ba57-4ecd-832b-27d7afbe4e5b',
    firstField: '72c3814d-4152-4679-ab9d-7dd0b4430a0a',
    fields: {
      targetCustomerSegments: {
        id: '72c3814d-4152-4679-ab9d-7dd0b4430a0a',
        type: 'dropdown',
        label:
          'Have you identified the target customer segments for your product/service?',
        required: true,
        nextField: '0b4d0b05-2a8e-471a-a4cf-be9c9b5588ec',
        options: [
          {
            id: 'still_figuring_out',
            value: 'No, still figuring it out',
          },
          {
            id: 'some_idea',
            value: 'Some idea, but not fully researched',
          },
          {
            id: 'clearly_defined',
            value: 'Yes, clearly defined with research',
          },
        ],
      },
      customerDataCollection: {
        id: '0b4d0b05-2a8e-471a-a4cf-be9c9b5588ec',
        type: 'dropdown',
        label:
          'Have you planned how you will collect and store customer data once you acquire customers?',
        required: true,
        nextField: '322a7938-b6d6-4fb7-8117-9936b4096423',
        options: [
          {
            id: 'not_thought_about',
            value: "No, we haven't thought about it",
          },
          {
            id: 'some_ideas',
            value: 'Some ideas, but no clear process yet',
          },
          {
            id: 'structured_approach',
            value: 'Yes, we have a structured approach',
          },
        ],
      },
      crmToolConsideration: {
        id: '322a7938-b6d6-4fb7-8117-9936b4096423',
        type: 'dropdown',
        label:
          'Have you considered which CRM tool or system you might use in the future?',
        required: true,
        nextField: '5a162c7e-3e89-475c-8484-980e4dead2bd',
        options: [
          {
            id: 'not_thought_about_crm',
            value: "No, we haven't thought about CRM systems yet",
          },
          {
            id: 'need_but_not_chosen',
            value: "We know we need a CRM but haven't chosen one",
          },
          {
            id: 'researched_tools',
            value: 'Yes, we have researched CRM tools',
          },
        ],
      },
      customerCommunication: {
        id: '5a162c7e-3e89-475c-8484-980e4dead2bd',
        type: 'dropdown',
        label:
          'How do you plan to interact and communicate with your customers?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_plan',
            value: 'No plan yet',
          },
          {
            id: 'some_ideas',
            value: 'Some ideas, but not fully planned',
          },
          {
            id: 'defined_strategy',
            value: 'Defined strategy (email, social media, customer support)',
          },
        ],
      },
    },
    nextNode: '8b14d493-25fa-4196-b233-6008d3be98b8',
  },
  q2: {
    sectionTitle: 'Customer Satisfaction Rate',
    sectionId: '8b14d493-25fa-4196-b233-6008d3be98b8',
    firstField: 'a9acad27-ca2b-4ea1-b6ba-eb94417ffeac',
    fields: {
      keySatisfactionFactors: {
        id: 'a9acad27-ca2b-4ea1-b6ba-eb94417ffeac',
        type: 'dropdown',
        label:
          'Have you identified key factors that will influence customer satisfaction for your product/service?',
        required: true,
        nextField: '3273d693-4ecb-45f3-a284-09946a76d3e6',
        options: [
          {
            id: 'not_thought_about_yet',
            value: "No, we haven't thought about it yet",
          },
          {
            id: 'some_understanding',
            value: "We have some understanding, but it's not detailed",
          },
          {
            id: 'analyzed_expectations',
            value: 'Yes, we have analyzed customer expectations',
          },
        ],
      },
      feedbackStrategy: {
        id: '3273d693-4ecb-45f3-a284-09946a76d3e6',
        type: 'dropdown',
        label:
          'Do you have a strategy for collecting customer feedback once your product/service is live?',
        required: true,
        nextField: 'ec7a6991-2bf3-4a03-a4e0-6310e6e95002',
        options: [
          {
            id: 'no_plan',
            value: "No, we haven't planned customer feedback collection",
          },
          {
            id: 'thought_about',
            value: 'We have thought about it, but nothing structured',
          },
          {
            id: 'planned_feedback',
            value:
              'Yes, we have planned surveys, reviews, or direct feedback loops',
          },
        ],
      },
      npsConsideration: {
        id: 'ec7a6991-2bf3-4a03-a4e0-6310e6e95002',
        type: 'dropdown',
        label:
          'Have you considered setting up a Net Promoter Score (NPS) or similar metric once you launch?',
        required: true,
        nextField: '252e7781-af28-43e3-a180-036a674133b1',
        options: [
          {
            id: 'not_thought_about_measuring',
            value:
              "No, we haven't thought about measuring customer satisfaction",
          },
          {
            id: 'aware_but_not_planned',
            value:
              "We are aware of NPS but haven't planned to implement it yet",
          },
          {
            id: 'plan_to_track',
            value: 'Yes, we plan to track NPS or a similar satisfaction metric',
          },
        ],
      },
      dedicatedFeedbackTeam: {
        id: '252e7781-af28-43e3-a180-036a674133b1',
        type: 'dropdown',
        label:
          'Do you plan to have a dedicated person/team responsible for monitoring customer feedback?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'not_considered',
            value: "No, we haven't considered this yet",
          },
          {
            id: 'important_but_not_assigned',
            value: "We know it's important but haven't assigned responsibility",
          },
          {
            id: 'will_have_role',
            value: 'Yes, we will have a role dedicated to this',
          },
        ],
      },
    },
    nextNode: '8b4c678f-89b3-469d-8c07-95be15c1fa04',
  },
  q3: {
    sectionTitle: 'Customer Retention Rate',
    sectionId: '8b4c678f-89b3-469d-8c07-95be15c1fa04',
    firstField: 'f3b4fe86-0fad-447b-8c23-3b6c104e33bc',
    fields: {
      retentionStrategies: {
        id: 'f3b4fe86-0fad-447b-8c23-3b6c104e33bc',
        type: 'dropdown',
        label:
          'Have you considered strategies to retain customers once they start using your product/service?',
        required: true,
        nextField: '664e4ea2-ac37-44f1-8273-76597c64fa3a',
        options: [
          {
            id: 'not_thought_about',
            value: "No, we haven't thought about customer retention yet",
          },
          {
            id: 'some_ideas',
            value: 'We have some ideas, but nothing structured',
          },
          {
            id: 'detailed_plan',
            value: 'Yes, we have a detailed customer retention plan',
          },
        ],
      },
      engagementStrategy: {
        id: '664e4ea2-ac37-44f1-8273-76597c64fa3a',
        type: 'dropdown',
        label:
          'What will be your main strategy for keeping customers engaged after they purchase or subscribe?',
        required: true,
        nextField: 'c0a730bd-f3f6-4982-a9d1-5b0182a068aa',
        options: [
          {
            id: 'no_clear_plan',
            value: 'No clear retention plan yet',
          },
          {
            id: 'basic_support',
            value: 'Basic customer support and follow-ups',
          },
          {
            id: 'loyalty_programs',
            value:
              'Loyalty programs, special offers, or engagement initiatives',
          },
        ],
      },
      churnFactors: {
        id: 'c0a730bd-f3f6-4982-a9d1-5b0182a068aa',
        type: 'dropdown',
        label:
          'Have you identified what might cause customers to stop using your product/service?',
        required: true,
        nextField: 'e7761a92-86df-46a0-aafc-c554795472ef',
        options: [
          {
            id: 'not_thought_about_churn',
            value: "No, we haven't thought about this yet",
          },
          {
            id: 'some_assumptions',
            value: 'We have some assumptions but no research',
          },
          {
            id: 'researched_pain_points',
            value: 'Yes, we have researched potential pain points',
          },
        ],
      },
      followUpProcess: {
        id: 'e7761a92-86df-46a0-aafc-c554795472ef',
        type: 'dropdown',
        label:
          'Do you plan to have automated or manual processes for customer follow-ups after their first interaction?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_follow_up',
            value: 'No follow-up plan yet',
          },
          {
            id: 'manual_follow_ups',
            value: 'We will have manual follow-ups but no automation yet',
          },
          {
            id: 'automated_follow_ups',
            value:
              'Yes, we will have automated follow-ups (email, notifications, etc.)',
          },
        ],
      },
    },
    nextNode: 'bdac1954-6fba-4b9e-a04f-c54a991c624e',
  },
  q4: {
    sectionTitle: 'Customer Lifetime Value (CLV)',
    sectionId: 'bdac1954-6fba-4b9e-a04f-c54a991c624e',
    firstField: 'e6158b3a-f395-461d-a653-8167aaa88dc6',
    fields: {
      clvEstimation: {
        id: 'e6158b3a-f395-461d-a653-8167aaa88dc6',
        type: 'dropdown',
        label:
          'Have you estimated how much a single customer will spend over their relationship with your business?',
        required: true,
        nextField: '8ed6cfb1-4555-4d8c-a213-dfc0d8f4241d',
        options: [
          {
            id: 'not_considered',
            value: "No, we haven't considered CLV yet",
          },
          {
            id: 'rough_estimates',
            value: 'We have rough estimates but no structured calculation',
          },
          {
            id: 'projected_clv',
            value: 'Yes, we have projected CLV based on pricing models',
          },
        ],
      },
      revenueMaximization: {
        id: '8ed6cfb1-4555-4d8c-a213-dfc0d8f4241d',
        type: 'dropdown',
        label:
          'What strategies do you plan to use to maximize the revenue generated per customer?',
        required: true,
        nextField: '6b8d655d-0556-42cd-851b-255da347eff0',
        options: [
          {
            id: 'no_strategy',
            value: 'No strategy yet',
          },
          {
            id: 'basic_pricing',
            value: 'Basic pricing strategy but no upsell/cross-sell plan',
          },
          {
            id: 'upsell_cross_sell',
            value: 'Upselling, cross-selling, or subscription models',
          },
        ],
      },
      loyaltyImpact: {
        id: '6b8d655d-0556-42cd-851b-255da347eff0',
        type: 'dropdown',
        label:
          'Have you considered how customer loyalty and retention affect long-term profitability?',
        required: true,
        nextField: '711c03d0-45bd-488f-b0ec-77aa3ec31006',
        options: [
          {
            id: 'not_thought_about',
            value: "No, we haven't thought about this yet",
          },
          {
            id: 'important_but_not_planned',
            value: "We know it's important but haven't planned around it",
          },
          {
            id: 'understand_impact',
            value: 'Yes, we understand how retention impacts CLV',
          },
        ],
      },
      purchaseTracking: {
        id: '711c03d0-45bd-488f-b0ec-77aa3ec31006',
        type: 'dropdown',
        label:
          'Do you plan to track customer purchase behavior to adjust pricing and marketing strategies?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'not_thought_about_tracking',
            value: "No, we haven't thought about tracking customer spending",
          },
          {
            id: 'collect_no_plan',
            value: 'We will collect data but have no specific plan for it yet',
          },
          {
            id: 'analyze_patterns',
            value: 'Yes, we plan to analyze customer spending patterns',
          },
        ],
      },
    },
    nextNode: '85353dea-211a-4475-a93f-e9709fbe6906',
  },
  q5: {
    sectionTitle: 'Conversion Rates',
    sectionId: '85353dea-211a-4475-a93f-e9709fbe6906',
    firstField: '9ccbfb75-84d0-4b90-a23b-4251780e03cb',
    fields: {
      conversionGoals: {
        id: '9ccbfb75-84d0-4b90-a23b-4251780e03cb',
        type: 'dropdown',
        label:
          'Do you know what your primary conversion goal will be (e.g., sign-ups, purchases, inquiries)?',
        required: true,
        nextField: '0fe3ff6d-e2ef-413c-a97e-aac0c6217c11',
        options: [
          {
            id: 'not_considered',
            value: "No, we haven't considered specific conversion goals",
          },
          {
            id: 'general_idea',
            value: "We have a general idea, but it's not well defined",
          },
          {
            id: 'clearly_defined',
            value: 'Yes, we have clearly defined conversion goals',
          },
        ],
      },
      conversionTracking: {
        id: '0fe3ff6d-e2ef-413c-a97e-aac0c6217c11',
        type: 'dropdown',
        label:
          'Have you planned how you will track and measure conversion rates once your product/service is live?',
        required: true,
        nextField: 'f52fa0a6-e0f5-42e6-afcf-ae23a12c0c8d',
        options: [
          {
            id: 'not_considered_tracking',
            value: "No, we haven't considered conversion tracking",
          },
          {
            id: 'thought_no_plan',
            value: 'We have thought about it, but no clear plan yet',
          },
          {
            id: 'use_tools',
            value:
              'Yes, we will use tracking tools (Google Analytics, CRM, heatmaps)',
          },
        ],
      },
      conversionOptimization: {
        id: 'f52fa0a6-e0f5-42e6-afcf-ae23a12c0c8d',
        type: 'dropdown',
        label:
          'What strategies do you plan to use to improve conversion rates?',
        required: true,
        nextField: '81212274-836f-4c0b-b39f-ccbd07dc3955',
        options: [
          {
            id: 'no_strategy',
            value: 'No strategy for conversion optimization yet',
          },
          {
            id: 'basic_marketing',
            value:
              'Basic marketing efforts but no specific conversion optimization',
          },
          {
            id: 'optimization_planned',
            value: 'Yes, we have planned conversion optimization strategies',
          },
        ],
      },
      conversionBenchmarks: {
        id: '81212274-836f-4c0b-b39f-ccbd07dc3955',
        type: 'dropdown',
        label:
          'Have you researched industry benchmarks for expected conversion rates in your market?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'not_researched',
            value: "No, we haven't looked into conversion rate benchmarks",
          },
          {
            id: 'general_expectations',
            value: 'We have some general expectations but no detailed research',
          },
          {
            id: 'studied_benchmarks',
            value: 'Yes, we have studied conversion rate benchmarks',
          },
        ],
      },
    },
    nextNode: '89f3c164-6a9d-496a-9504-e76da2a77663',
  },
  q6: {
    sectionTitle: 'Marketing Budget',
    sectionId: '89f3c164-6a9d-496a-9504-e76da2a77663',
    firstField: '736df0ef-da0e-452e-aaf5-3fd31bad5630',
    fields: {
      budgetEstimation: {
        id: '736df0ef-da0e-452e-aaf5-3fd31bad5630',
        type: 'dropdown',
        label:
          'Have you estimated a marketing budget for your first customer acquisition efforts?',
        required: true,
        nextField: '322673c9-4419-4e64-b0d0-8046778dd9db',
        options: [
          {
            id: 'no_budget',
            value: "No, we haven't planned a marketing budget",
          },
          {
            id: 'rough_estimate',
            value: 'We have a rough estimate but no structured budget yet',
          },
          {
            id: 'clear_budget',
            value: 'Yes, we have a clear budget plan',
          },
        ],
      },
      marketingChannels: {
        id: '322673c9-4419-4e64-b0d0-8046778dd9db',
        type: 'dropdown',
        label:
          'What marketing channels will you prioritize based on your budget limitations?',
        required: true,
        nextField: '0040a525-2eb8-4308-a99e-064ee2fe6236',
        options: [
          {
            id: 'not_considered',
            value: "No, we haven't considered marketing channels",
          },
          {
            id: 'some_ideas',
            value: 'We have some ideas but no clear marketing mix yet',
          },
          {
            id: 'clear_strategy',
            value:
              'We have a clear channel strategy (social media, paid ads, SEO, etc.)',
          },
        ],
      },
      fundingSource: {
        id: '0040a525-2eb8-4308-a99e-064ee2fe6236',
        type: 'dropdown',
        label: 'How do you plan to fund your initial marketing efforts?',
        required: true,
        nextField: '7ac2fa49-70f5-4c76-95c7-e6dee6d4e2b5',
        options: [
          {
            id: 'no_idea',
            value: 'No idea how we will fund marketing yet',
          },
          {
            id: 'investment_or_grants',
            value: 'Through an angel investment or grants',
          },
          {
            id: 'personal_funds',
            value: 'From personal funds or bootstrapping',
          },
        ],
      },
      lowCostStrategies: {
        id: '7ac2fa49-70f5-4c76-95c7-e6dee6d4e2b5',
        type: 'dropdown',
        label:
          'Have you considered low-cost or free marketing strategies to gain initial traction?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'only_paid',
            value: 'No, we are focusing only on paid marketing',
          },
          {
            id: 'some_ideas',
            value: 'Some ideas, but no structured approach',
          },
          {
            id: 'planned_organic',
            value:
              'Yes, we have planned organic marketing (SEO, referrals, social media, etc.)',
          },
        ],
      },
    },
    nextNode: 'c60b8e6f-6dfb-4abc-87a4-5031565040af',
  },
  q7: {
    sectionTitle: 'Marketing Profitability',
    sectionId: 'c60b8e6f-6dfb-4abc-87a4-5031565040af',
    firstField: '7d98a796-234f-42d4-a09e-ddb337f53c51',
    fields: {
      roiUnderstanding: {
        id: '7d98a796-234f-42d4-a09e-ddb337f53c51',
        type: 'dropdown',
        label:
          'Do you understand how to measure marketing ROI (Return on Investment) once you start acquiring customers?',
        required: true,
        nextField: 'ab0755e6-b742-47f8-8cba-f7da0828e236',
        options: [
          {
            id: 'not_thought_about',
            value:
              "No, we haven't thought about how to measure marketing profitability",
          },
          {
            id: 'basic_understanding',
            value: 'We have a basic understanding but no clear tracking plan',
          },
          {
            id: 'structured_plan',
            value: 'Yes, we have a structured plan to track marketing ROI',
          },
        ],
      },
      marketingMetrics: {
        id: 'ab0755e6-b742-47f8-8cba-f7da0828e236',
        type: 'dropdown',
        label:
          'What key marketing metrics will you track to measure profitability?',
        required: true,
        nextField: 'ab6d4d38-5c64-4729-8e9e-19ca088620d4',
        options: [
          {
            id: 'not_considered',
            value: "No, we haven't considered specific marketing metrics yet",
          },
          {
            id: 'basic_metrics',
            value:
              "We will track some basic metrics, but we don't have a structured approach yet",
          },
          {
            id: 'advanced_metrics',
            value:
              'CAC (Customer Acquisition Cost), CLV (Customer Lifetime Value), and ROAS (Return on Ad Spend)',
          },
        ],
      },
      cacConsideration: {
        id: 'ab6d4d38-5c64-4729-8e9e-19ca088620d4',
        type: 'dropdown',
        label:
          'Have you considered what your ideal Customer Acquisition Cost (CAC) should be to remain profitable?',
        required: true,
        nextField: 'db614e6f-5b96-4e7a-a2b3-5dbdaad58520',
        options: [
          {
            id: 'not_thought_about_cac',
            value: "No, we haven't thought about CAC",
          },
          {
            id: 'rough_idea',
            value: "We have a rough idea but haven't calculated it yet",
          },
          {
            id: 'estimated_cac',
            value: 'Yes, we have an estimated CAC based on projections',
          },
        ],
      },
      costReduction: {
        id: 'db614e6f-5b96-4e7a-a2b3-5dbdaad58520',
        type: 'dropdown',
        label:
          'Have you planned strategies to reduce marketing costs while maintaining customer growth?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'not_considered',
            value: "No, we haven't considered optimizing marketing costs yet",
          },
          {
            id: 'some_ideas',
            value: 'We have some ideas, but no structured plan yet',
          },
          {
            id: 'cost_effective_strategies',
            value: 'Yes, we have cost-effective marketing strategies',
          },
        ],
      },
    },
    nextNode: 'e6699c85-dc66-490a-91be-06537dfb5c8e',
  },
  q8: {
    sectionTitle: 'Social Media Presence',
    sectionId: 'e6699c85-dc66-490a-91be-06537dfb5c8e',
    firstField: 'c6dcd209-d721-4c9d-826b-096359d057d8',
    fields: {
      socialAccounts: {
        id: 'c6dcd209-d721-4c9d-826b-096359d057d8',
        type: 'dropdown',
        label:
          'Have you created official social media accounts for your brand?',
        required: true,
        nextField: '01ed7604-7e6d-48f6-994c-86b4e17e8fe8',
        options: [
          {
            id: 'no_accounts',
            value: "No, we haven't created any accounts yet",
          },
          {
            id: 'reserved_usernames',
            value: "We have reserved usernames but haven't launched yet",
          },
          {
            id: 'active_profiles',
            value: 'Yes, we have active profiles on major platforms',
          },
        ],
      },
      platformStrategy: {
        id: '01ed7604-7e6d-48f6-994c-86b4e17e8fe8',
        type: 'dropdown',
        label:
          'Have you defined your target audience and chosen the right social media platforms to reach them?',
        required: true,
        nextField: 'bb98cea8-66ad-4529-994d-792e3d4ee0bd',
        options: [
          {
            id: 'not_thought_about',
            value: "No, we haven't thought about social media platforms yet",
          },
          {
            id: 'rough_idea',
            value: "We have a rough idea, but it's not structured yet",
          },
          {
            id: 'clear_strategy',
            value:
              'Yes, we know where our customers are and have a platform strategy',
          },
        ],
      },
      contentStrategy: {
        id: 'bb98cea8-66ad-4529-994d-792e3d4ee0bd',
        type: 'dropdown',
        label:
          'What type of content do you plan to post to attract and engage your audience?',
        required: true,
        nextField: 'efee0546-9c45-48da-92e7-a7059c0b07f7',
        options: [
          {
            id: 'no_strategy',
            value: "No, we haven't considered content strategy yet",
          },
          {
            id: 'some_ideas',
            value: 'We have some content ideas, but no structured plan',
          },
          {
            id: 'planned_content',
            value:
              'We have a content strategy (videos, blogs, infographics, etc.)',
          },
        ],
      },
      socialMediaFocus: {
        id: 'efee0546-9c45-48da-92e7-a7059c0b07f7',
        type: 'dropdown',
        label:
          'Do you plan to use social media as a primary channel for brand awareness and marketing?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'not_main_focus',
            value: "No, we don't plan to focus on social media",
          },
          {
            id: 'secondary_focus',
            value: "We will use social media, but it's not our main focus",
          },
          {
            id: 'core_part',
            value: 'Yes, social media is a core part of our marketing plan',
          },
        ],
      },
    },
    nextNode: '2c581dc4-a3cd-476d-9d3c-e06125977854',
  },
  q9: {
    sectionTitle: 'External Image & Reputation',
    sectionId: '2c581dc4-a3cd-476d-9d3c-e06125977854',
    firstField: 'c4bbc0d8-7a49-4005-b124-7a4c07619fd2',
    fields: {
      brandIdentity: {
        id: 'c4bbc0d8-7a49-4005-b124-7a4c07619fd2',
        type: 'dropdown',
        label:
          'Have you defined your brand identity (logo, colors, messaging, and values)?',
        required: true,
        nextField: 'e6a64ab1-64d6-4151-841a-d668181b2523',
        options: [
          {
            id: 'not_developed',
            value: "No, we haven't developed our brand yet",
          },
          {
            id: 'some_elements',
            value: 'We have some branding elements but not a full identity',
          },
          {
            id: 'fully_developed',
            value: 'Yes, we have a fully developed brand identity',
          },
        ],
      },
      credibilityBuilding: {
        id: 'e6a64ab1-64d6-4151-841a-d668181b2523',
        type: 'dropdown',
        label:
          'How do you plan to build credibility and trust with potential customers and investors?',
        required: true,
        nextField: '2823aecd-9547-4000-bbcc-bcd0dff8a22f',
        options: [
          {
            id: 'no_strategy',
            value: 'No credibility-building strategies planned',
          },
          {
            id: 'some_strategies',
            value: 'Some credibility strategies, but not structured yet',
          },
          {
            id: 'structured_approach',
            value:
              'Through testimonials, PR coverage, partnerships, or certifications',
          },
        ],
      },
      reputationManagement: {
        id: '2823aecd-9547-4000-bbcc-bcd0dff8a22f',
        type: 'dropdown',
        label:
          'Have you planned how you will handle negative feedback or reputation risks?',
        required: true,
        nextField: '0b6f5604-0cb4-488f-978e-135460d54f39',
        options: [
          {
            id: 'not_considered',
            value: "No, we haven't considered reputation management yet",
          },
          {
            id: 'aware_no_plan',
            value:
              "We are aware of the risks but haven't planned a response strategy",
          },
          {
            id: 'crisis_plan',
            value: 'Yes, we have a crisis communication strategy',
          },
        ],
      },
      externalMarketing: {
        id: '0b6f5604-0cb4-488f-978e-135460d54f39',
        type: 'dropdown',
        label:
          'Have you planned any external marketing efforts (PR, press releases, partnerships) to introduce your brand to the market?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'not_planned',
            value: "No, we haven't planned for external marketing yet",
          },
          {
            id: 'some_ideas',
            value: 'We have some ideas but nothing structured yet',
          },
          {
            id: 'structured_plan',
            value: 'Yes, we have a structured PR and brand awareness plan',
          },
        ],
      },
    },
    nextNode: null,
  },
};
