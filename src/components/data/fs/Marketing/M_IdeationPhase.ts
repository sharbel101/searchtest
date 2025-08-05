import { FieldType } from '@/components/data/MainFlow/flow';

export const M_Ideation_Phase_FLow = {
  q1: {
    sectionTitle: 'CRM',
    sectionId: 'crm',
    firstField: 'targetCustomerSegments',
    fields: {
      targetCustomerSegments: {
        id: 'target-customer-segments',
        type: FieldType.Dropdown,
        label:
          'Have you identified the target customer segments for your product/service?',
        required: true,
        nextField: 'customerDataCollection',
        options: [
          { id: 'still_figuring_out', value: 'No, still figuring it out' },
          { id: 'some_idea', value: 'Some idea, but not fully researched' },
          {
            id: 'clearly_defined',
            value: 'Yes, clearly defined with research',
          },
        ],
      },
      customerDataCollection: {
        id: 'customer-data-collection',
        type: FieldType.Dropdown,
        label:
          'Have you planned how you will collect and store customer data once you acquire customers?',
        required: true,
        nextField: 'crmToolConsideration',
        options: [
          { id: 'not_thought_about', value: "No, we haven't thought about it" },
          { id: 'some_ideas', value: 'Some ideas, but no clear process yet' },
          {
            id: 'structured_approach',
            value: 'Yes, we have a structured approach',
          },
        ],
      },
      crmToolConsideration: {
        id: 'crm-tool-consideration',
        type: FieldType.Dropdown,
        label:
          'Have you considered which CRM tool or system you might use in the future?',
        required: true,
        nextField: 'customerCommunication',
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
        id: 'customer-communication',
        type: FieldType.Dropdown,
        label:
          'How do you plan to interact and communicate with your customers?',
        required: true,
        nextField: null,
        options: [
          { id: 'no_plan', value: 'No plan yet' },
          { id: 'some_ideas', value: 'Some ideas, but not fully planned' },
          {
            id: 'defined_strategy',
            value: 'Defined strategy (email, social media, customer support)',
          },
        ],
      },
    },
    nextNode: 'customer-satisfaction',
  },

  q2: {
    sectionTitle: 'Customer Satisfaction Rate',
    sectionId: 'customer-satisfaction',
    firstField: 'keySatisfactionFactors',
    fields: {
      keySatisfactionFactors: {
        id: 'key-satisfaction-factors',
        type: FieldType.Dropdown,
        label:
          'Have you identified key factors that will influence customer satisfaction for your product/service?',
        required: true,
        nextField: 'feedbackStrategy',
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
        id: 'feedback-strategy',
        type: FieldType.Dropdown,
        label:
          'Do you have a strategy for collecting customer feedback once your product/service is live?',
        required: true,
        nextField: 'npsConsideration',
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
        id: 'nps-consideration',
        type: FieldType.Dropdown,
        label:
          'Have you considered setting up a Net Promoter Score (NPS) or similar metric once you launch?',
        required: true,
        nextField: 'dedicatedFeedbackTeam',
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
        id: 'dedicated-feedback-team',
        type: FieldType.Dropdown,
        label:
          'Do you plan to have a dedicated person/team responsible for monitoring customer feedback?',
        required: true,
        nextField: null,
        options: [
          { id: 'not_considered', value: "No, we haven't considered this yet" },
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
    nextNode: 'customer-retention',
  },

  q3: {
    sectionTitle: 'Customer Retention Rate',
    sectionId: 'customer-retention',
    firstField: 'retentionStrategies',
    fields: {
      retentionStrategies: {
        id: 'retention-strategies',
        type: FieldType.Dropdown,
        label:
          'Have you considered strategies to retain customers once they start using your product/service?',
        required: true,
        nextField: 'engagementStrategy',
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
        id: 'engagement-strategy',
        type: FieldType.Dropdown,
        label:
          'What will be your main strategy for keeping customers engaged after they purchase or subscribe?',
        required: true,
        nextField: 'churnFactors',
        options: [
          { id: 'no_clear_plan', value: 'No clear retention plan yet' },
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
        id: 'churn-factors',
        type: FieldType.Dropdown,
        label:
          'Have you identified what might cause customers to stop using your product/service?',
        required: true,
        nextField: 'followUpProcess',
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
        id: 'follow-up-process',
        type: FieldType.Dropdown,
        label:
          'Do you plan to have automated or manual processes for customer follow-ups after their first interaction?',
        required: true,
        nextField: null,
        options: [
          { id: 'no_follow_up', value: 'No follow-up plan yet' },
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
    nextNode: 'customer-lifetime-value',
  },

  q4: {
    sectionTitle: 'Customer Lifetime Value (CLV)',
    sectionId: 'customer-lifetime-value',
    firstField: 'clvEstimation',
    fields: {
      clvEstimation: {
        id: 'clv-estimation',
        type: FieldType.Dropdown,
        label:
          'Have you estimated how much a single customer will spend over their relationship with your business?',
        required: true,
        nextField: 'revenueMaximization',
        options: [
          { id: 'not_considered', value: "No, we haven't considered CLV yet" },
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
        id: 'revenue-maximization',
        type: FieldType.Dropdown,
        label:
          'What strategies do you plan to use to maximize the revenue generated per customer?',
        required: true,
        nextField: 'loyaltyImpact',
        options: [
          { id: 'no_strategy', value: 'No strategy yet' },
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
        id: 'loyalty-impact',
        type: FieldType.Dropdown,
        label:
          'Have you considered how customer loyalty and retention affect long-term profitability?',
        required: true,
        nextField: 'purchaseTracking',
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
        id: 'purchase-tracking',
        type: FieldType.Dropdown,
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
    nextNode: 'conversion-rates',
  },

  q5: {
    sectionTitle: 'Conversion Rates',
    sectionId: 'conversion-rates',
    firstField: 'conversionGoals',
    fields: {
      conversionGoals: {
        id: 'conversion-goals',
        type: FieldType.Dropdown,
        label:
          'Do you know what your primary conversion goal will be (e.g., sign-ups, purchases, inquiries)?',
        required: true,
        nextField: 'conversionTracking',
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
        id: 'conversion-tracking',
        type: FieldType.Dropdown,
        label:
          'Have you planned how you will track and measure conversion rates once your product/service is live?',
        required: true,
        nextField: 'conversionOptimization',
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
        id: 'conversion-optimization',
        type: FieldType.Dropdown,
        label:
          'What strategies do you plan to use to improve conversion rates?',
        required: true,
        nextField: 'conversionBenchmarks',
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
        id: 'conversion-benchmarks',
        type: FieldType.Dropdown,
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
    nextNode: 'marketing-budget',
  },

  q6: {
    sectionTitle: 'Marketing Budget',
    sectionId: 'marketing-budget',
    firstField: 'budgetEstimation',
    fields: {
      budgetEstimation: {
        id: 'budget-estimation',
        type: FieldType.Dropdown,
        label:
          'Have you estimated a marketing budget for your first customer acquisition efforts?',
        required: true,
        nextField: 'marketingChannels',
        options: [
          {
            id: 'no_budget',
            value: "No, we haven't planned a marketing budget",
          },
          {
            id: 'rough_estimate',
            value: 'We have a rough estimate but no structured budget yet',
          },
          { id: 'clear_budget', value: 'Yes, we have a clear budget plan' },
        ],
      },
      marketingChannels: {
        id: 'marketing-channels',
        type: FieldType.Dropdown,
        label:
          'What marketing channels will you prioritize based on your budget limitations?',
        required: true,
        nextField: 'fundingSource',
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
        id: 'funding-source',
        type: FieldType.Dropdown,
        label: 'How do you plan to fund your initial marketing efforts?',
        required: true,
        nextField: 'lowCostStrategies',
        options: [
          { id: 'no_idea', value: 'No idea how we will fund marketing yet' },
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
        id: 'low-cost-strategies',
        type: FieldType.Dropdown,
        label:
          'Have you considered low-cost or free marketing strategies to gain initial traction?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'only_paid',
            value: 'No, we are focusing only on paid marketing',
          },
          { id: 'some_ideas', value: 'Some ideas, but no structured approach' },
          {
            id: 'planned_organic',
            value:
              'Yes, we have planned organic marketing (SEO, referrals, social media, etc.)',
          },
        ],
      },
    },
    nextNode: 'marketing-profitability',
  },

  q7: {
    sectionTitle: 'Marketing Profitability',
    sectionId: 'marketing-profitability',
    firstField: 'roiUnderstanding',
    fields: {
      roiUnderstanding: {
        id: 'roi-understanding',
        type: FieldType.Dropdown,
        label:
          'Do you understand how to measure marketing ROI (Return on Investment) once you start acquiring customers?',
        required: true,
        nextField: 'marketingMetrics',
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
        id: 'marketing-metrics',
        type: FieldType.Dropdown,
        label:
          'What key marketing metrics will you track to measure profitability?',
        required: true,
        nextField: 'cacConsideration',
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
        id: 'cac-consideration',
        type: FieldType.Dropdown,
        label:
          'Have you considered what your ideal Customer Acquisition Cost (CAC) should be to remain profitable?',
        required: true,
        nextField: 'costReduction',
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
        id: 'cost-reduction',
        type: FieldType.Dropdown,
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
    nextNode: 'social-media-presence',
  },

  q8: {
    sectionTitle: 'Social Media Presence',
    sectionId: 'social-media-presence',
    firstField: 'socialAccounts',
    fields: {
      socialAccounts: {
        id: 'social-accounts',
        type: FieldType.Dropdown,
        label:
          'Have you created official social media accounts for your brand?',
        required: true,
        nextField: 'platformStrategy',
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
        id: 'platform-strategy',
        type: FieldType.Dropdown,
        label:
          'Have you defined your target audience and chosen the right social media platforms to reach them?',
        required: true,
        nextField: 'contentStrategy',
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
        id: 'content-strategy',
        type: FieldType.Dropdown,
        label:
          'What type of content do you plan to post to attract and engage your audience?',
        required: true,
        nextField: 'socialMediaFocus',
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
        id: 'social-media-focus',
        type: FieldType.Dropdown,
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
    nextNode: 'external-image',
  },

  q9: {
    sectionTitle: 'External Image & Reputation',
    sectionId: 'external-image',
    firstField: 'brandIdentity',
    fields: {
      brandIdentity: {
        id: 'brand-identity',
        type: FieldType.Dropdown,
        label:
          'Have you defined your brand identity (logo, colors, messaging, and values)?',
        required: true,
        nextField: 'credibilityBuilding',
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
        id: 'credibility-building',
        type: FieldType.Dropdown,
        label:
          'How do you plan to build credibility and trust with potential customers and investors?',
        required: true,
        nextField: 'reputationManagement',
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
        id: 'reputation-management',
        type: FieldType.Dropdown,
        label:
          'Have you planned how you will handle negative feedback or reputation risks?',
        required: true,
        nextField: 'externalMarketing',
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
        id: 'external-marketing',
        type: FieldType.Dropdown,
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
