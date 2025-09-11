const M_AdvancedVC = {
  q1: {
    sectionTitle: 'CRM System Level',
    sectionId: '9c2b9613-d42b-4c08-b00a-b966722427f0',
    firstField: '8d68d8fe-b797-4698-868a-866278a584c7',
    fields: {
      crmSystemLevel: {
        id: '8d68d8fe-b797-4698-868a-866278a584c7',
        type: 'dropdown',
        label: 'What enterprise-level CRM system does your company use?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'basic_crm_spreadsheets',
            value: 'Basic CRM or spreadsheets',
          },
          {
            id: 'mid_tier_limited_automation',
            value: 'Mid-tier CRM with limited automation',
          },
          {
            id: 'custom_ai_driven',
            value: 'Custom-built CRM with AI-driven automation',
          },
          {
            id: 'enterprise_platforms',
            value:
              'Salesforce, HubSpot Enterprise, Microsoft Dynamics, Oracle, or SAP',
          },
        ],
      },
    },
    nextNode: '856e9e57-f8a9-4f33-99e5-26a11eac75f2',
  },
  q2: {
    sectionTitle: 'CRM Automation Level',
    sectionId: '856e9e57-f8a9-4f33-99e5-26a11eac75f2',
    firstField: '1d8cef8b-1d03-4c77-a8a8-3520016ec30f',
    fields: {
      crmAutomationLevel: {
        id: '1d8cef8b-1d03-4c77-a8a8-3520016ec30f',
        type: 'dropdown',
        label:
          'How advanced is your CRM automation for lead nurturing, customer engagement, and retention?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'minimal_automation',
            value: 'Minimal automation, mostly manual processes',
          },
          {
            id: 'some_automation',
            value: 'Some automation (email workflows, scoring, segmentation)',
          },
          {
            id: 'advanced_automation',
            value: 'Advanced automation with real-time triggers & lead scoring',
          },
          {
            id: 'fully_ai_driven',
            value:
              'Fully AI-driven with predictive analytics & automated segmentation',
          },
        ],
      },
    },
    nextNode: '00498815-640e-4d2c-bfdd-beb973251ceb',
  },
  q3: {
    sectionTitle: 'CRM Integration Level',
    sectionId: '00498815-640e-4d2c-bfdd-beb973251ceb',
    firstField: '3f0469c2-7f26-41d3-ab1f-a3140601a9db',
    fields: {
      crmIntegrationLevel: {
        id: '3f0469c2-7f26-41d3-ab1f-a3140601a9db',
        type: 'dropdown',
        label:
          'How well is your CRM integrated with your marketing and sales platforms?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_integration',
            value: 'No integration, CRM operates independently',
          },
          {
            id: 'partially_integrated',
            value:
              'Partially integrated, with some tools connected but others siloed',
          },
          {
            id: 'fully_integrated',
            value:
              'Fully integrated with marketing automation, email, social media, and sales pipelines',
          },
        ],
      },
    },
    nextNode: '7f7e94c0-878b-4212-8aa7-a2333f72400e',
  },
  q4: {
    sectionTitle: 'Global CRM Strategy',
    sectionId: '7f7e94c0-878b-4212-8aa7-a2333f72400e',
    firstField: 'f590ff5b-2a48-4013-97c3-0d68759d4d70',
    fields: {
      globalCrmStrategy: {
        id: 'f590ff5b-2a48-4013-97c3-0d68759d4d70',
        type: 'dropdown',
        label:
          'Do you have a global CRM strategy to manage international customer segments?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_global_strategy',
            value: 'No structured global CRM strategy',
          },
          {
            id: 'some_international_segmentation',
            value:
              'Some international customer segmentation, but not fully optimized',
          },
          {
            id: 'structured_multi_market',
            value:
              'Yes, our CRM is structured for multi-market customer engagement',
          },
        ],
      },
    },
    nextNode: '96140e1a-ac07-46af-aa7e-77c2db6e8d79',
  },
  q5: {
    sectionTitle: 'Customer Satisfaction Measurement',
    sectionId: '96140e1a-ac07-46af-aa7e-77c2db6e8d79',
    firstField: 'ddb156a7-86e6-44b1-80a3-15825ebec021',
    fields: {
      customerSatisfactionMeasurement: {
        id: 'ddb156a7-86e6-44b1-80a3-15825ebec021',
        type: 'dropdown',
        label:
          'What structured methods do you use to measure customer satisfaction?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_tracking',
            value: 'No structured tracking',
          },
          {
            id: 'ai_driven_sentiment',
            value:
              'AI-driven sentiment analysis (social media, chatbots, etc.)',
          },
          {
            id: 'customer_effort_score',
            value: 'Customer Effort Score (CES)',
          },
          {
            id: 'customer_satisfaction_score',
            value: 'Customer Satisfaction Score (CSAT)',
          },
          {
            id: 'net_promoter_score',
            value: 'Net Promoter Score (NPS)',
          },
        ],
      },
    },
    nextNode: '4a705e3c-256b-4386-87f1-2887b4346b74',
  },
  q6: {
    sectionTitle: 'Current NPS Score',
    sectionId: '4a705e3c-256b-4386-87f1-2887b4346b74',
    firstField: '44315ff7-d009-49ec-b78f-6262682dc7c0',
    fields: {
      currentNpsScore: {
        id: '44315ff7-d009-49ec-b78f-6262682dc7c0',
        type: 'dropdown',
        label: 'What is your current Net Promoter Score (NPS)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_40_not_measured',
            value: 'Below 40 or not measured',
          },
          {
            id: '40_59_moderate',
            value: '40-59 (Moderate)',
          },
          {
            id: '60_79_very_strong',
            value: '60-79 (Very strong)',
          },
          {
            id: '80_plus_world_class',
            value: '80+ (World-class)',
          },
        ],
      },
    },
    nextNode: '1c842262-50ba-4b12-8a14-210a35f175f1',
  },
  q7: {
    sectionTitle: 'Feedback Collection and Analysis',
    sectionId: '1c842262-50ba-4b12-8a14-210a35f175f1',
    firstField: '68e4b232-0eea-4386-b4b0-f3fc7455637d',
    fields: {
      feedbackCollectionAnalysis: {
        id: '68e4b232-0eea-4386-b4b0-f3fc7455637d',
        type: 'dropdown',
        label:
          'How do you collect and analyze customer feedback across different regions and markets?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_process',
            value: 'No structured feedback collection process',
          },
          {
            id: 'basic_collection_no_analytics',
            value: 'Basic feedback collection, but no deep analytics',
          },
          {
            id: 'centralized_multi_market',
            value: 'Centralized feedback system with multi-market insights',
          },
          {
            id: 'ai_powered_global',
            value:
              'AI-powered feedback analysis across all global customer interactions',
          },
        ],
      },
    },
    nextNode: '15581c40-7245-48f6-9170-f68f9fa19450',
  },
  q8: {
    sectionTitle: 'Customer Satisfaction Rate Input',
    sectionId: '15581c40-7245-48f6-9170-f68f9fa19450',
    firstField: 'ad9594a7-bae6-475a-b3b8-772c7bd14f87',
    fields: {
      customerSatisfactionRateInput: {
        id: 'ad9594a7-bae6-475a-b3b8-772c7bd14f87',
        type: 'text',
        label:
          'What is your customer satisfaction rate? Enter a percentage number between 0% and 100%',
        required: true,
        nextField: null,
        min: 0,
        max: 100,
      },
    },
    nextNode: 'fb7f564a-328f-49e7-b197-cad60fccd405',
  },
  q9: {
    sectionTitle: 'Feedback Implementation Frequency',
    sectionId: 'fb7f564a-328f-49e7-b197-cad60fccd405',
    firstField: 'b04c5b10-fef5-4547-8db0-ba295e4090e3',
    fields: {
      feedbackImplementationFrequency: {
        id: 'b04c5b10-fef5-4547-8db0-ba295e4090e3',
        type: 'dropdown',
        label:
          'How frequently do you implement changes based on customer satisfaction data?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_changes',
            value: 'No structured changes based on feedback',
          },
          {
            id: 'quarterly_adjustments',
            value: 'Quarterly adjustments based on major trends',
          },
          {
            id: 'monthly_changes',
            value:
              'Monthly product/service changes based on structured feedback',
          },
          {
            id: 'weekly_real_time',
            value:
              'Weekly or real-time adjustments based on live customer sentiment',
          },
        ],
      },
    },
    nextNode: '4db39e2e-50c1-462c-8447-bb13575f0062',
  },
  q10: {
    sectionTitle: 'Dissatisfied Customer Handling',
    sectionId: '4db39e2e-50c1-462c-8447-bb13575f0062',
    firstField: 'baf0dea4-901b-4708-a1c9-f5ca7c990c28',
    fields: {
      dissatisfiedCustomerHandling: {
        id: 'baf0dea4-901b-4708-a1c9-f5ca7c990c28',
        type: 'dropdown',
        label: 'How do you handle dissatisfied customers and negative reviews?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_response',
            value: 'No structured response plan',
          },
          {
            id: 'manual_reactive',
            value: 'Manual process, but handled reactively',
          },
          {
            id: 'dedicated_team',
            value: 'Dedicated customer experience team handling complaints',
          },
          {
            id: 'automated_ai_driven',
            value:
              'Automated AI-driven responses and proactive issue resolution',
          },
        ],
      },
    },
    nextNode: 'ded7cfaa-617c-40cf-8581-f80fa111b06c',
  },
  q11: {
    sectionTitle: 'Customer Retention Rate',
    sectionId: 'ded7cfaa-617c-40cf-8581-f80fa111b06c',
    firstField: 'b6ae26a2-d187-404f-9113-409acd29612a',
    fields: {
      customerRetentionRate: {
        id: 'b6ae26a2-d187-404f-9113-409acd29612a',
        type: 'dropdown',
        label: 'What is your current customer retention rate?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_50_not_tracked',
            value: 'Below 50% or not tracked',
          },
          {
            id: '50_74_moderate',
            value: '50%-74% (Moderate retention)',
          },
          {
            id: '75_89_strong',
            value: '75%-89% (Strong retention)',
          },
          {
            id: '90_plus_best_class',
            value: '90%+ (Best-in-class)',
          },
        ],
      },
    },
    nextNode: '534fa248-a9de-4b2b-acc5-532091724c67',
  },
  q12: {
    sectionTitle: 'Monthly Churn Rate',
    sectionId: '534fa248-a9de-4b2b-acc5-532091724c67',
    firstField: '6c549f2e-dd2b-4b02-a9d6-1fc82870ff8a',
    fields: {
      monthlyChurnRate: {
        id: '6c549f2e-dd2b-4b02-a9d6-1fc82870ff8a',
        type: 'dropdown',
        label: 'What is your average customer churn rate per month?',
        required: true,
        nextField: null,
        options: [
          {
            id: '10_plus_not_tracked',
            value: '10%+ or not tracked',
          },
          {
            id: '6_9_percent',
            value: '6%-9%',
          },
          {
            id: '3_5_percent',
            value: '3%-5%',
          },
          {
            id: 'below_3_exceptional',
            value: 'Below 3% (Exceptional)',
          },
        ],
      },
    },
    nextNode: '161e6495-db16-4647-98bd-a1e86c9ea5b6',
  },
  q13: {
    sectionTitle: 'AI Churn Prediction',
    sectionId: '161e6495-db16-4647-98bd-a1e86c9ea5b6',
    firstField: 'a0cb58a2-859f-450a-a4bb-54682dfc0937',
    fields: {
      aiChurnPrediction: {
        id: 'a0cb58a2-859f-450a-a4bb-54682dfc0937',
        type: 'dropdown',
        label:
          'Do you use AI or machine learning to predict customer churn and proactively retain users?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'track_after_happens',
            value: 'No, we only track churn after it happens',
          },
          {
            id: 'analytics_no_ai',
            value: 'We use analytics but not AI-driven churn forecasting',
          },
          {
            id: 'ai_prediction_models',
            value: 'Yes, we have AI-driven churn prediction models',
          },
        ],
      },
    },
    nextNode: 'e407e2d0-3049-43d6-94cb-c86c0b44e417',
  },
  q14: {
    sectionTitle: 'Retention Customer Segmentation',
    sectionId: 'e407e2d0-3049-43d6-94cb-c86c0b44e417',
    firstField: 'f9562181-6c38-4aec-a2ef-312dc5eaa746',
    fields: {
      retentionCustomerSegmentation: {
        id: 'f9562181-6c38-4aec-a2ef-312dc5eaa746',
        type: 'dropdown',
        label: 'How do you segment customers based on retention behavior?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_segmentation',
            value: 'No structured retention segmentation',
          },
          {
            id: 'new_vs_returning',
            value: 'New vs. returning customers',
          },
          {
            id: 'high_vs_low_revenue',
            value: 'High-revenue vs. low-revenue customers',
          },
          {
            id: 'power_vs_at_risk',
            value: 'Power users vs. at-risk customers',
          },
        ],
      },
    },
    nextNode: 'd857edbf-a58f-4dce-8e10-3ee7d78d1804',
  },
  q15: {
    sectionTitle: 'Retention Strategies',
    sectionId: 'd857edbf-a58f-4dce-8e10-3ee7d78d1804',
    firstField: '5c0ef34a-bd24-4a6f-9cad-5285f08051d2',
    fields: {
      retentionStrategies: {
        id: '5c0ef34a-bd24-4a6f-9cad-5285f08051d2',
        type: 'dropdown',
        label:
          'What retention strategies are in place to maximize customer lifetime value?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_retention',
            value: 'No structured retention efforts',
          },
          {
            id: 'ai_driven_engagement',
            value: 'AI-driven customer engagement and follow-ups',
          },
          {
            id: 'personalized_offers',
            value: 'Personalized retention offers (discounts, VIP perks)',
          },
          {
            id: 'loyalty_programs',
            value: 'Loyalty programs/referral incentives',
          },
        ],
      },
    },
    nextNode: 'eae80fd8-b2dd-4e23-a05f-53b27df0341a',
  },
  q16: {
    sectionTitle: 'Customer Retention Rate Input',
    sectionId: 'eae80fd8-b2dd-4e23-a05f-53b27df0341a',
    firstField: '1eb05b94-0cc2-4f89-9ee0-5705bb9ff852',
    fields: {
      customerRetentionRateInput: {
        id: '1eb05b94-0cc2-4f89-9ee0-5705bb9ff852',
        type: 'text',
        label:
          'What is your customer retention rate? Enter a percentage number between 0% and 100%',
        required: true,
        nextField: null,
        min: 0,
        max: 100,
      },
    },
    nextNode: 'dd749209-e17f-4792-ba49-4e97c848836d',
  },
  q17: {
    sectionTitle: 'Current CLV Estimate',
    sectionId: 'dd749209-e17f-4792-ba49-4e97c848836d',
    firstField: '1a4ee38b-0550-4790-907b-76fd9367cdab',
    fields: {
      currentClvEstimate: {
        id: '1a4ee38b-0550-4790-907b-76fd9367cdab',
        type: 'dropdown',
        label: 'What is your current estimated Customer Lifetime Value (CLV)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_1000_not_calculated',
            value: 'Below $1,000 or not calculated',
          },
          {
            id: '1000_2499',
            value: '$1,000 - $2,499',
          },
          {
            id: '2500_4999',
            value: '$2,500 - $4,999',
          },
          {
            id: '5000_plus_profitable',
            value: '$5,000+ (Highly profitable)',
          },
        ],
      },
    },
    nextNode: 'bf7d16da-4379-4d88-bc2d-d55d765112b2',
  },
  q18: {
    sectionTitle: 'CLV vs CAC Ratio',
    sectionId: 'bf7d16da-4379-4d88-bc2d-d55d765112b2',
    firstField: 'f8d8b7e4-6caf-4a2a-95c8-3db64e3340fb',
    fields: {
      clvVsCacRatio: {
        id: 'f8d8b7e4-6caf-4a2a-95c8-3db64e3340fb',
        type: 'dropdown',
        label:
          'How does your CLV compare to your Customer Acquisition Cost (CAC)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'clv_equal_or_lower',
            value: 'CLV is equal to or lower than CAC',
          },
          {
            id: 'clv_3x_to_4_9x',
            value: 'CLV is 3x-4.9x CAC',
          },
          {
            id: 'clv_5x_to_9_9x',
            value: 'CLV is 5x-9.9x CAC',
          },
          {
            id: 'clv_10x_plus',
            value: 'CLV is 10x+ CAC',
          },
        ],
      },
    },
    nextNode: 'abc8dd1f-de0d-489f-b4a6-d866a8a51613',
  },
  q19: {
    sectionTitle: 'AI CLV Forecasting',
    sectionId: 'abc8dd1f-de0d-489f-b4a6-d866a8a51613',
    firstField: '049aa025-d090-408b-8edb-a5872c829661',
    fields: {
      aiClvForecasting: {
        id: '049aa025-d090-408b-8edb-a5872c829661',
        type: 'dropdown',
        label:
          'Do you use AI-driven CLV forecasting to predict long-term revenue per customer?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_forecasting',
            value: 'No structured CLV forecasting',
          },
          {
            id: 'analytics_no_ai',
            value: 'We use analytics but no AI-based CLV modeling',
          },
          {
            id: 'ai_driven_forecasting',
            value: 'Yes, AI-driven forecasting and predictive revenue modeling',
          },
        ],
      },
    },
    nextNode: 'f5881563-c4cf-4b43-9839-adb0d5dd4248',
  },
  q20: {
    sectionTitle: 'CLV Customer Segmentation',
    sectionId: 'f5881563-c4cf-4b43-9839-adb0d5dd4248',
    firstField: '58b2397b-f868-4f09-9fb9-de41a48a9514',
    fields: {
      clvCustomerSegmentation: {
        id: '58b2397b-f868-4f09-9fb9-de41a48a9514',
        type: 'dropdown',
        label: 'How do you segment customers based on CLV?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_segmentation',
            value: 'No structured CLV segmentation',
          },
          {
            id: 'subscription_vs_transactional',
            value: 'Subscription-based vs. transactional customers',
          },
          {
            id: 'frequent_vs_one_time',
            value: 'Frequent buyers vs. one-time purchasers',
          },
          {
            id: 'high_vs_low_value',
            value: 'High-value vs. low-value customers',
          },
        ],
      },
    },
    nextNode: 'f1136a77-0980-4b90-8f8d-4310243f90a5',
  },
  q21: {
    sectionTitle: 'CLV Optimization Strategies',
    sectionId: 'f1136a77-0980-4b90-8f8d-4310243f90a5',
    firstField: '7fa3ed05-2653-440b-99ef-594cd7469656',
    fields: {
      clvOptimizationStrategies: {
        id: '7fa3ed05-2653-440b-99ef-594cd7469656',
        type: 'dropdown',
        label: 'What strategies have you implemented to increase CLV?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_optimization',
            value: 'No structured CLV optimization',
          },
          {
            id: 'ai_driven_retention',
            value: 'AI-driven customer retention campaigns',
          },
          {
            id: 'subscription_models',
            value: 'Subscription models & recurring revenue streams',
          },
          {
            id: 'dynamic_pricing_upselling',
            value: 'Dynamic pricing and personalized upselling',
          },
        ],
      },
    },
    nextNode: '564b10d2-6d0f-4b03-aca0-2d4e2da94764',
  },
  q22: {
    sectionTitle: 'Customer Lifetime Value Input',
    sectionId: '564b10d2-6d0f-4b03-aca0-2d4e2da94764',
    firstField: 'bf518ed5-0a1f-4fc3-9e03-27292f943d86',
    fields: {
      customerLifetimeValueInput: {
        id: 'bf518ed5-0a1f-4fc3-9e03-27292f943d86',
        type: 'text',
        label:
          'What is your customer lifetime value? Enter a finite number in USD',
        required: true,
        nextField: null,
        min: 0,
      },
    },
    nextNode: '91b431f6-72d9-4db9-9717-ce0b20a6ec54',
  },
  q23: {
    sectionTitle: 'Repeat Customer Revenue Percentage',
    sectionId: '91b431f6-72d9-4db9-9717-ce0b20a6ec54',
    firstField: 'e59909a9-411d-45c1-90a4-34ccbd76a7e9',
    fields: {
      repeatCustomerRevenuePercentage: {
        id: 'e59909a9-411d-45c1-90a4-34ccbd76a7e9',
        type: 'dropdown',
        label: 'What percentage of your revenue comes from repeat customers?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_20_not_tracked',
            value: 'Below 20% or not tracked',
          },
          {
            id: '20_39_percent',
            value: '20%-39%',
          },
          {
            id: '40_59_percent',
            value: '40%-59%',
          },
          {
            id: '60_plus_percent',
            value: '60%+',
          },
        ],
      },
    },
    nextNode: 'd34f004f-3bef-40bb-aa59-b26212a116b0',
  },
  q24: {
    sectionTitle: 'Lead to Customer Conversion',
    sectionId: 'd34f004f-3bef-40bb-aa59-b26212a116b0',
    firstField: '4fa72143-e2d7-4656-bfb9-783fb9b96779',
    fields: {
      leadToCustomerConversion: {
        id: '4fa72143-e2d7-4656-bfb9-783fb9b96779',
        type: 'dropdown',
        label: 'What is your current lead-to-customer conversion rate?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_10_not_tracked',
            value: 'Below 10% or not tracked',
          },
          {
            id: '10_19_percent',
            value: '10%-19%',
          },
          {
            id: '20_29_percent',
            value: '20%-29%',
          },
          {
            id: '30_plus_industry_leading',
            value: '30%+ (Industry-leading conversion)',
          },
        ],
      },
    },
    nextNode: 'cea57a06-5734-43b0-b361-2a600137bfca',
  },
  q25: {
    sectionTitle: 'Website Conversion Rate',
    sectionId: 'cea57a06-5734-43b0-b361-2a600137bfca',
    firstField: 'a1821b95-99d7-41f1-8635-08a943781696',
    fields: {
      websiteConversionRate: {
        id: 'a1821b95-99d7-41f1-8635-08a943781696',
        type: 'dropdown',
        label: 'What is your website or landing page conversion rate?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_5_not_tracked',
            value: 'Below 5% or not tracked',
          },
          {
            id: '5_9_percent',
            value: '5%-9%',
          },
          {
            id: '10_14_percent',
            value: '10%-14%',
          },
          {
            id: '15_plus_percent',
            value: '15%+',
          },
        ],
      },
    },
    nextNode: '0fe677cf-8a03-48ac-8acd-0df11faefc81',
  },
  q26: {
    sectionTitle: 'AI Conversion Optimization',
    sectionId: '0fe677cf-8a03-48ac-8acd-0df11faefc81',
    firstField: '7d8e891e-6818-46f9-b442-4edb7f62e999',
    fields: {
      aiConversionOptimization: {
        id: '7d8e891e-6818-46f9-b442-4edb7f62e999',
        type: 'dropdown',
        label:
          'Do you use AI-driven personalization and predictive analytics to improve conversion rates?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_optimization',
            value: 'No structured AI-driven conversion optimization',
          },
          {
            id: 'personalization_no_predictive',
            value: 'We use personalization, but no predictive analytics',
          },
          {
            id: 'ai_driven_personalization',
            value:
              'Yes, AI-driven personalization and automated recommendations',
          },
        ],
      },
    },
    nextNode: 'b4d3425f-075e-4947-b180-5d9d83912907',
  },
  q27: {
    sectionTitle: 'Paid vs Organic Conversions',
    sectionId: 'b4d3425f-075e-4947-b180-5d9d83912907',
    firstField: 'aa40d5d2-8f53-47fe-a56c-2b234f545c2b',
    fields: {
      paidVsOrganicConversions: {
        id: 'aa40d5d2-8f53-47fe-a56c-2b234f545c2b',
        type: 'dropdown',
        label:
          'What percentage of conversions come from paid vs. organic channels?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_10_not_tracked',
            value: 'Below 10% or not tracked',
          },
          {
            id: '10_29_organic',
            value: '10%-29% organic',
          },
          {
            id: '30_49_organic',
            value: '30%-49% organic',
          },
          {
            id: '50_plus_organic',
            value: '50%+ organic (SEO, content, referrals)',
          },
        ],
      },
    },
    nextNode: '8019f5e3-57a5-48a8-8059-b23ff51d0deb',
  },
  q28: {
    sectionTitle: 'Abandoned Cart Rate',
    sectionId: '8019f5e3-57a5-48a8-8059-b23ff51d0deb',
    firstField: 'df419e70-427b-47fc-89d5-73536cfadd9f',
    fields: {
      abandonedCartRate: {
        id: 'df419e70-427b-47fc-89d5-73536cfadd9f',
        type: 'dropdown',
        label:
          'What is your abandoned cart or incomplete sign-up rate (if applicable)?',
        required: true,
        nextField: null,
        options: [
          {
            id: '30_plus_not_tracked',
            value: '30%+ or not tracked',
          },
          {
            id: '20_29_percent',
            value: '20%-29%',
          },
          {
            id: '10_19_percent',
            value: '10%-19%',
          },
          {
            id: 'below_10_optimized',
            value: 'Below 10% (Highly optimized funnel)',
          },
        ],
      },
    },
    nextNode: '3e554a69-93da-4413-8b79-cbb05ddfdb44',
  },
  q29: {
    sectionTitle: 'Conversion Optimization Strategies',
    sectionId: '3e554a69-93da-4413-8b79-cbb05ddfdb44',
    firstField: 'c2768c0d-20a8-4e88-9f9c-1e28bb6db464',
    fields: {
      conversionOptimizationStrategies: {
        id: 'c2768c0d-20a8-4e88-9f9c-1e28bb6db464',
        type: 'dropdown',
        label:
          'What optimization strategies have you implemented to improve conversion rates?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_optimization',
            value: 'No structured conversion optimization',
          },
          {
            id: 'personalized_journeys',
            value: 'Personalized customer journeys based on behavior',
          },
          {
            id: 'ai_driven_chatbot',
            value: 'AI-driven chatbot & automated lead nurturing',
          },
          {
            id: 'ab_testing',
            value: 'A/B testing (landing pages, ads, CTAs)',
          },
        ],
      },
    },
    nextNode: 'monthly-marketing-budget',
  },
  q30: {
    sectionTitle: 'Budget Optimization',
    sectionId: '53c3a8a1-d512-4a46-bed7-900767f43d3e',
    firstField: '6db4b71c-dd4a-41f5-a6a0-79fd17380867',
    fields: {
      budgetOptimization: {
        id: '6db4b71c-dd4a-41f5-a6a0-79fd17380867',
        type: 'dropdown',
        label:
          'Do you adjust your marketing budget dynamically based on performance and ROI?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_budget_optimization',
            value: 'No structured budget optimization',
          },
          {
            id: 'some_budget_adjustments',
            value: 'Some budget adjustments, but not dynamically',
          },
          {
            id: 'monthly_quarterly_adjustments',
            value: 'We adjust monthly/quarterly based on performance',
          },
          {
            id: 'real_time_ai_driven',
            value:
              'Yes, real-time budget allocation based on AI-driven ROI tracking',
          },
        ],
      },
    },
    nextNode: '220ad45f-6541-42f7-8793-53802a37a310',
  },
  q31: {
    sectionTitle: 'Cost Per Acquisition',
    sectionId: '220ad45f-6541-42f7-8793-53802a37a310',
    firstField: 'db5f1219-130d-4e42-80b5-71bea2f42c54',
    fields: {
      costPerAcquisition: {
        id: 'db5f1219-130d-4e42-80b5-71bea2f42c54',
        type: 'dropdown',
        label:
          'What is your cost-per-acquisition (CPA) for each marketing channel?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'above_200_not_tracked',
            value: 'Above $200 or not tracked',
          },
          {
            id: '100_199',
            value: '$100 - $199',
          },
          {
            id: '50_99',
            value: '$50 - $99',
          },
          {
            id: 'below_50',
            value: 'Below $50 per customer',
          },
        ],
      },
    },
    nextNode: '397d71fe-f8f6-42b0-967f-d6d24241a112',
  },
  q32: {
    sectionTitle: 'Budget Reallocation Frequency',
    sectionId: '397d71fe-f8f6-42b0-967f-d6d24241a112',
    firstField: '6729b3a6-2451-40cf-b44e-b67e00e038e2',
    fields: {
      budgetReallocationFrequency: {
        id: '6729b3a6-2451-40cf-b44e-b67e00e038e2',
        type: 'dropdown',
        label:
          'How frequently do you reallocate marketing budgets based on real-time data?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_reallocation',
            value: 'No structured reallocation strategy',
          },
          {
            id: 'quarterly_reallocations',
            value: 'Quarterly reallocations',
          },
          {
            id: 'monthly_performance_based',
            value: 'Monthly performance-based adjustments',
          },
          {
            id: 'weekly_ai_driven',
            value: 'Weekly, based on real-time AI-driven insights',
          },
        ],
      },
    },
    nextNode: 'dbe10ae7-f98f-4656-ba83-340c73fd895a',
  },
  q33: {
    sectionTitle: 'Customer Acquisition Cost',
    sectionId: 'dbe10ae7-f98f-4656-ba83-340c73fd895a',
    firstField: '0ebb9922-63ee-4068-8ad2-96971c473dab',
    fields: {
      customerAcquisitionCost: {
        id: '0ebb9922-63ee-4068-8ad2-96971c473dab',
        type: 'dropdown',
        label: 'What is your current Customer Acquisition Cost (CAC)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'above_200_not_tracked',
            value: 'Above $200 or not tracked',
          },
          {
            id: '100_199',
            value: '$100 - $199',
          },
          {
            id: '50_99',
            value: '$50 - $99',
          },
          {
            id: 'below_50',
            value: 'Below $50',
          },
        ],
      },
    },
    nextNode: '0dfc8b91-998c-4d3b-901e-d935afffc9e3',
  },
  q34: {
    sectionTitle: 'Return on Ad Spend',
    sectionId: '0dfc8b91-998c-4d3b-901e-d935afffc9e3',
    firstField: '11475729-e56f-47b7-9265-3c93db1beb11',
    fields: {
      returnOnAdSpend: {
        id: '11475729-e56f-47b7-9265-3c93db1beb11',
        type: 'dropdown',
        label:
          'What is your current Return on Ad Spend (ROAS)? (Revenue generated per $1 spent on paid ads.)',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_3x_not_tracked',
            value: 'Below 3x or not tracked',
          },
          {
            id: '3x_4_9x',
            value: '3x-4.9x ROI',
          },
          {
            id: '5x_6_9x',
            value: '5x-6.9x ROI',
          },
          {
            id: '7x_plus',
            value: '7x+ ROI',
          },
        ],
      },
    },
    nextNode: '8fbcca82-35db-4ef8-9846-b3a0aba95615',
  },
  q35: {
    sectionTitle: 'Revenue Attribution',
    sectionId: '8fbcca82-35db-4ef8-9846-b3a0aba95615',
    firstField: '4a57ce5e-7829-4cf2-87a6-6d095ee63324',
    fields: {
      revenueAttribution: {
        id: '4a57ce5e-7829-4cf2-87a6-6d095ee63324',
        type: 'dropdown',
        label:
          'What percentage of total revenue is directly attributed to marketing efforts?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_20_not_tracked',
            value: 'Below 20% or not tracked',
          },
          {
            id: '20_39_percent',
            value: '20%-39%',
          },
          {
            id: '40_59_percent',
            value: '40%-59%',
          },
          {
            id: '60_plus_percent',
            value: '60%+ of total revenue',
          },
        ],
      },
    },
    nextNode: 'b7d6085b-17b3-4713-8207-f09272c87fd9',
  },
  q36: {
    sectionTitle: 'Marketing Efficiency Ratio',
    sectionId: 'b7d6085b-17b3-4713-8207-f09272c87fd9',
    firstField: 'a82db9c6-b685-453e-ba61-6d111eef9080',
    fields: {
      marketingEfficiencyRatio: {
        id: 'a82db9c6-b685-453e-ba61-6d111eef9080',
        type: 'dropdown',
        label: 'What is your Marketing Efficiency Ratio (MER)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_3x_not_tracked',
            value: 'Below 3x or not tracked',
          },
          {
            id: '3x_4_9x',
            value: '3x-4.9x',
          },
          {
            id: '5x_6_9x',
            value: '5x-6.9x',
          },
          {
            id: '7x_plus',
            value: '7x+',
          },
        ],
      },
    },
    nextNode: '0f333d34-b7c3-4f48-9ca3-1ed9edfc2f32',
  },
  q37: {
    sectionTitle: 'AI-Driven Profitability Models',
    sectionId: '0f333d34-b7c3-4f48-9ca3-1ed9edfc2f32',
    firstField: '7b1f2141-3474-4ceb-a71e-bd0193f53e53',
    fields: {
      aiDrivenProfitability: {
        id: '7b1f2141-3474-4ceb-a71e-bd0193f53e53',
        type: 'dropdown',
        label:
          'Do you use AI-driven marketing profitability models to optimize spend?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_profitability',
            value: 'No structured profitability tracking',
          },
          {
            id: 'manual_tracking',
            value: 'We track profitability manually with financial reports',
          },
          {
            id: 'advanced_analytics_no_ai',
            value: 'We use advanced analytics but no AI-driven forecasting',
          },
          {
            id: 'ai_driven_predictive',
            value: 'Yes, AI-driven predictive profitability tracking',
          },
        ],
      },
    },
    nextNode: '745c4128-7f55-4a55-9cd2-e979b2de1841',
  },
  q38: {
    sectionTitle: 'Spend Optimization',
    sectionId: '745c4128-7f55-4a55-9cd2-e979b2de1841',
    firstField: 'de8a7e37-5380-4b08-9711-8a646316ff31',
    fields: {
      spendOptimization: {
        id: 'de8a7e37-5380-4b08-9711-8a646316ff31',
        type: 'dropdown',
        label:
          'How do you optimize marketing spend based on profitability data?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_optimization',
            value: 'No structured spend optimization strategy',
          },
          {
            id: 'cost_cutting_underperforming',
            value: 'Cost-cutting on underperforming campaigns',
          },
          {
            id: 'ai_driven_bid_optimization',
            value: 'AI-driven bid optimization for paid channels',
          },
          {
            id: 'automated_reallocation',
            value: 'Automated reallocation of spend based on ROAS',
          },
        ],
      },
    },
    nextNode: '365ea667-b812-42b5-8d32-dc7dcc98320d',
  },
  q39: {
    sectionTitle: 'Social Media Followers',
    sectionId: '365ea667-b812-42b5-8d32-dc7dcc98320d',
    firstField: '2fd6c276-df21-4ea7-a804-bfcf91a8ab75',
    fields: {
      socialMediaFollowers: {
        id: '2fd6c276-df21-4ea7-a804-bfcf91a8ab75',
        type: 'dropdown',
        label:
          'What is your total social media follower count across all platforms?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_100k_not_tracked',
            value: 'Below 100,000 or not tracked',
          },
          {
            id: '100k_499k',
            value: '100,000 - 499,999',
          },
          {
            id: '500k_999k',
            value: '500,000 - 999,999',
          },
          {
            id: '1m_plus',
            value: '1,000,000+',
          },
        ],
      },
    },
    nextNode: 'db333cfb-785f-4825-914c-df97b9a9c248',
  },
  q40: {
    sectionTitle: 'Engagement Rate',
    sectionId: 'db333cfb-785f-4825-914c-df97b9a9c248',
    firstField: '162285c8-1152-4a41-b39b-85f54d2c4148',
    fields: {
      engagementRate: {
        id: '162285c8-1152-4a41-b39b-85f54d2c4148',
        type: 'dropdown',
        label:
          'What is your average engagement rate across your social media platforms?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_3_not_tracked',
            value: 'Below 3% or not tracked',
          },
          {
            id: '3_4_9_percent',
            value: '3%-4.9%',
          },
          {
            id: '5_6_9_percent',
            value: '5%-6.9%',
          },
          {
            id: '7_plus_percent',
            value: '7%+',
          },
        ],
      },
    },
    nextNode: '836c850b-c51b-409f-a68d-884e84eceb8a',
  },
  q41: {
    sectionTitle: 'Content Posting Frequency',
    sectionId: '836c850b-c51b-409f-a68d-884e84eceb8a',
    firstField: '69447c63-2841-480c-b004-e4d55169d8e2',
    fields: {
      contentPostingFrequency: {
        id: '69447c63-2841-480c-b004-e4d55169d8e2',
        type: 'dropdown',
        label: 'How frequently do you post new content across your platforms?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'less_than_weekly',
            value: 'Less than once a week or irregular',
          },
          {
            id: '3_5_times_week',
            value: '3-5 times per week',
          },
          {
            id: 'daily',
            value: 'Daily',
          },
          {
            id: 'multiple_daily',
            value: 'Multiple times per day',
          },
        ],
      },
    },
    nextNode: '58ae452a-bab9-4a39-9394-c7ab34261a86',
  },
  q42: {
    sectionTitle: 'Influencer Partnerships',
    sectionId: '58ae452a-bab9-4a39-9394-c7ab34261a86',
    firstField: 'dc8ff166-e31a-4546-9c77-9fdf00527ac4',
    fields: {
      influencerPartnerships: {
        id: 'dc8ff166-e31a-4546-9c77-9fdf00527ac4',
        type: 'dropdown',
        label:
          'Do you use influencer partnerships or paid social media campaigns to boost reach?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_influencer_collaborations',
            value: 'No influencer collaborations or paid social ads',
          },
          {
            id: 'unstructured_influencer_work',
            value: "We work with influencers, but it's not structured",
          },
          {
            id: 'structured_influencer_strategy',
            value: 'Yes, structured influencer and paid ad strategy',
          },
        ],
      },
    },
    nextNode: 'c17f2372-8eef-4ca9-92ba-f6ed8a2e72ed',
  },
  q43: {
    sectionTitle: 'Social Media Effectiveness',
    sectionId: 'c17f2372-8eef-4ca9-92ba-f6ed8a2e72ed',
    firstField: '3f0be442-9726-4f57-85e6-c98d993d1da4',
    fields: {
      socialMediaEffectiveness: {
        id: '3f0be442-9726-4f57-85e6-c98d993d1da4',
        type: 'dropdown',
        label:
          'How do you measure the effectiveness of your social media campaigns?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_tracking',
            value: 'No structured tracking of social media impact',
          },
          {
            id: 'follower_growth_virality',
            value: 'Follower growth & content virality metrics',
          },
          {
            id: 'conversion_tracking',
            value: 'Conversion tracking (e.g., clicks to sales)',
          },
          {
            id: 'ai_driven_engagement_sentiment',
            value: 'AI-driven engagement & sentiment analysis',
          },
        ],
      },
    },
    nextNode: '80da5c45-3276-4ef2-82b1-5e02af1b6913',
  },
  q44: {
    sectionTitle: 'Social Media Integration',
    sectionId: '80da5c45-3276-4ef2-82b1-5e02af1b6913',
    firstField: '134a7511-8002-4f52-afb6-8af1d006d319',
    fields: {
      socialMediaIntegration: {
        id: '134a7511-8002-4f52-afb6-8af1d006d319',
        type: 'dropdown',
        label:
          'Do you integrate social media marketing with other digital channels (SEO, paid ads, email marketing)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_integration',
            value:
              'No structured integration between social and digital channels',
          },
          {
            id: 'partially_integrated',
            value: 'Partially integrated, but not optimized',
          },
          {
            id: 'fully_integrated_omnichannel',
            value: 'Yes, fully integrated with omnichannel digital strategy',
          },
        ],
      },
    },
    nextNode: '85710cc2-d623-442a-92de-08c381559075',
  },
  q45: {
    sectionTitle: 'Media Coverage',
    sectionId: '85710cc2-d623-442a-92de-08c381559075',
    firstField: '734efcff-0b0c-47ad-a0b1-ec4575cc4c8f',
    fields: {
      mediaCoverage: {
        id: '734efcff-0b0c-47ad-a0b1-ec4575cc4c8f',
        type: 'dropdown',
        label:
          'Have you received any media coverage, press mentions, or industry recognition?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_media_presence',
            value: 'No media presence and no plans yet',
          },
          {
            id: 'no_major_coverage_working',
            value: 'No major press coverage yet, but we are working on it',
          },
          {
            id: 'some_niche_regional',
            value: 'Some media mentions, but mostly niche or regional coverage',
          },
          {
            id: 'tier1_global_publications',
            value:
              'Yes, featured in Tier 1 global publications (Forbes, Bloomberg, TechCrunch, etc.)',
          },
        ],
      },
    },
    nextNode: '54ff7b39-96a7-47f6-992e-b21d9d27ae8a',
  },
  q46: {
    sectionTitle: 'Brand Sentiment Tracking',
    sectionId: '54ff7b39-96a7-47f6-992e-b21d9d27ae8a',
    firstField: '01acbbba-0b4f-432c-a99f-f27d4a6fe6fa',
    fields: {
      brandSentimentTracking: {
        id: '01acbbba-0b4f-432c-a99f-f27d4a6fe6fa',
        type: 'dropdown',
        label: 'How do you track brand sentiment and external reputation?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_monitoring',
            value: 'No structured brand reputation monitoring',
          },
          {
            id: 'manual_tracking',
            value: 'Manual tracking of press & customer feedback',
          },
          {
            id: 'ai_driven_sentiment_analysis',
            value:
              'AI-driven sentiment analysis across media & social channels',
          },
        ],
      },
    },
    nextNode: '2052e133-42e1-48f3-977f-7f8126aedfd4',
  },
  q47: {
    sectionTitle: 'Positive Feedback Percentage',
    sectionId: '2052e133-42e1-48f3-977f-7f8126aedfd4',
    firstField: '6bf3129b-0b15-414c-aa59-4b4d35388360',
    fields: {
      positiveFeedbackPercentage: {
        id: '6bf3129b-0b15-414c-aa59-4b4d35388360',
        type: 'dropdown',
        label:
          'What percentage of your online reviews and public feedback are positive?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_50_not_tracked',
            value: 'Below 50% or not tracked',
          },
          {
            id: '50_74_percent',
            value: '50%-74% positive',
          },
          {
            id: '75_89_percent',
            value: '75%-89% positive',
          },
          {
            id: '90_plus_percent',
            value: '90%+ positive reviews',
          },
        ],
      },
    },
    nextNode: '0436c83d-6b58-45cc-a828-df6a46148768',
  },
  q48: {
    sectionTitle: 'Crisis Communication Strategy',
    sectionId: '0436c83d-6b58-45cc-a828-df6a46148768',
    firstField: '6f881726-e232-4666-b5e2-757805a32cdf',
    fields: {
      crisisCommunicationStrategy: {
        id: '6f881726-e232-4666-b5e2-757805a32cdf',
        type: 'dropdown',
        label:
          'Do you have a structured crisis communication strategy in place?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_crisis_plan',
            value: 'No structured crisis management plan',
          },
          {
            id: 'reactive_not_proactive',
            value: 'We handle PR issues reactively, not proactively',
          },
          {
            id: 'dedicated_pr_crisis_team',
            value: 'Yes, with a dedicated PR and crisis response team',
          },
        ],
      },
    },
    nextNode: '14c4a158-8ea8-4457-aff1-764a4fa97f3b',
  },
  q49: {
    sectionTitle: 'Global Partnerships',
    sectionId: '14c4a158-8ea8-4457-aff1-764a4fa97f3b',
    firstField: '05afd654-6693-4e84-9879-8ff1fcf252dc',
    fields: {
      globalPartnerships: {
        id: '05afd654-6693-4e84-9879-8ff1fcf252dc',
        type: 'dropdown',
        label:
          'Have you established partnerships with globally recognized brands, investors, or thought leaders?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_partnerships',
            value: 'No partnerships or collaborations',
          },
          {
            id: 'no_partnerships_working',
            value: 'No partnerships yet, but we are working on it',
          },
          {
            id: 'some_partnerships_not_global',
            value: 'We have some partnerships, but they are not yet global',
          },
          {
            id: 'multiple_high_impact',
            value: 'Yes, multiple high-impact partnerships',
          },
        ],
      },
    },
    nextNode: 'fbf0cfe3-65a8-4ebc-aa31-93bfbf69bfa7',
  },
  q50: {
    sectionTitle: 'Industry Events Participation',
    sectionId: 'fbf0cfe3-65a8-4ebc-aa31-93bfbf69bfa7',
    firstField: 'cd83c3c6-0b35-44b2-81a7-42339be6a9f8',
    fields: {
      industryEventsParticipation: {
        id: 'cd83c3c6-0b35-44b2-81a7-42339be6a9f8',
        type: 'dropdown',
        label:
          'Have you participated in major industry events, awards, or sponsorships to enhance your reputation?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_involvement',
            value: 'No involvement in industry-related events or sponsorships',
          },
          {
            id: 'no_participation_planning',
            value: 'No industry participation yet, but we are planning to',
          },
          {
            id: 'attend_not_leverage',
            value:
              "We attend some events but don't actively leverage them for branding",
          },
          {
            id: 'actively_participating_global',
            value:
              'Yes, actively participating in global industry events and sponsorships',
          },
        ],
      },
    },
    nextNode: null,
  },
};
