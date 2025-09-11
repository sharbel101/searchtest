const M_PrivateEquity = {
  q1: {
    sectionTitle: 'CRM System Level',
    sectionId: '70577ed9-1ab1-4860-aac6-a3ded40ee307',
    firstField: 'afec734f-8d9c-466b-b57b-4dac435d6a5f',
    fields: {
      crmSystemLevel: {
        id: 'afec734f-8d9c-466b-b57b-4dac435d6a5f',
        type: 'dropdown',
        label: 'What CRM system does your company use at the enterprise level?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_enterprise_crm',
            value: 'No enterprise CRM strategy in place',
          },
          {
            id: 'mid_tier_limited_automation',
            value:
              'Mid-tier CRM with limited automation (HubSpot, Pipedrive, etc.)',
          },
          {
            id: 'custom_ai_powered',
            value: 'Custom-built AI-powered CRM with advanced automation',
          },
          {
            id: 'enterprise_platforms',
            value:
              'Salesforce Enterprise, SAP, Oracle, or Microsoft Dynamics 365',
          },
        ],
      },
    },
    nextNode: '8825c168-4328-439e-af85-df3183c3488c',
  },
  q2: {
    sectionTitle: 'CRM Integration',
    sectionId: '8825c168-4328-439e-af85-df3183c3488c',
    firstField: '14f51ecf-eb3b-44cf-b216-b8134fbb81b5',
    fields: {
      crmIntegration: {
        id: '14f51ecf-eb3b-44cf-b216-b8134fbb81b5',
        type: 'dropdown',
        label:
          'How is your CRM integrated across global markets and business units?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_multi_market',
            value: 'No structured multi-market CRM strategy',
          },
          {
            id: 'partially_integrated',
            value: 'Partially integrated, with some regional differences',
          },
          {
            id: 'fully_integrated',
            value:
              'Fully integrated across all international teams and departments',
          },
        ],
      },
    },
    nextNode: 'f0107cfa-537b-49bf-b5d0-93d999ed9d8a',
  },
  q3: {
    sectionTitle: 'AI-Driven Customer Intelligence',
    sectionId: 'f0107cfa-537b-49bf-b5d0-93d999ed9d8a',
    firstField: 'cdf25c71-014d-464d-88bb-b89c040adfd2',
    fields: {
      aiDrivenCustomerIntelligence: {
        id: 'cdf25c71-014d-464d-88bb-b89c040adfd2',
        type: 'dropdown',
        label:
          'Do you use AI-driven customer intelligence to predict behavior and personalize engagement?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_ai_driven_crm',
            value: 'No AI-driven CRM capabilities',
          },
          {
            id: 'some_ai_no_predictive',
            value: 'Some AI tools, but no predictive intelligence',
          },
          {
            id: 'ai_powered_analytics',
            value:
              'Yes, AI-powered analytics provide real-time insights and automation',
          },
        ],
      },
    },
    nextNode: 'f6cc8bdc-8444-47d9-bdc2-86691e857a35',
  },
  q4: {
    sectionTitle: 'CLV Tracking',
    sectionId: 'f6cc8bdc-8444-47d9-bdc2-86691e857a35',
    firstField: '39299ac4-1d9e-4408-8463-3305c67dd79e',
    fields: {
      clvTracking: {
        id: '39299ac4-1d9e-4408-8463-3305c67dd79e',
        type: 'dropdown',
        label:
          'How do you track customer lifetime value (CLV) and its impact on marketing strategy?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_clv',
            value: 'No structured CLV tracking',
          },
          {
            id: 'clv_not_connected_marketing',
            value:
              "We analyze CLV, but it's not deeply connected to marketing strategy",
          },
          {
            id: 'clv_fully_integrated',
            value:
              'CLV is fully integrated into marketing, sales, and product decisions',
          },
        ],
      },
    },
    nextNode: '614552ad-d223-4508-821b-b2816cc0b997',
  },
  q5: {
    sectionTitle: 'Existing Customer Revenue',
    sectionId: '614552ad-d223-4508-821b-b2816cc0b997',
    firstField: '919c5f72-2832-4d9a-9b58-1c8fc1b4bdb8',
    fields: {
      existingCustomerRevenue: {
        id: '919c5f72-2832-4d9a-9b58-1c8fc1b4bdb8',
        type: 'dropdown',
        label:
          'What percentage of your revenue comes from existing customers (vs. new customer acquisition)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_30_not_tracked',
            value: 'Below 30% or not tracked',
          },
          {
            id: '30_49_percent',
            value: '30%-49%',
          },
          {
            id: '50_69_percent',
            value: '50%-69%',
          },
          {
            id: '70_plus_percent',
            value: '70%+ from existing customers',
          },
        ],
      },
    },
    nextNode: '639e3b65-0561-4592-8ddd-650fa0589b54',
  },
  q6: {
    sectionTitle: 'Customer Satisfaction Methods',
    sectionId: '639e3b65-0561-4592-8ddd-650fa0589b54',
    firstField: 'd7e9a88f-1371-4b3f-b595-761d3090912c',
    fields: {
      customerSatisfactionMethods: {
        id: 'd7e9a88f-1371-4b3f-b595-761d3090912c',
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
          {
            id: 'ai_driven_sentiment_analysis',
            value:
              'AI-driven sentiment analysis (social media, chatbots, reviews)',
          },
        ],
      },
    },
    nextNode: 'feda0e67-d978-4a63-8232-3d6ab088c13e',
  },
  q7: {
    sectionTitle: 'Net Promoter Score',
    sectionId: 'feda0e67-d978-4a63-8232-3d6ab088c13e',
    firstField: '79360a86-ac84-446a-8573-df1dd8443484',
    fields: {
      netPromoterScore: {
        id: '79360a86-ac84-446a-8573-df1dd8443484',
        type: 'dropdown',
        label:
          'What is your current Net Promoter Score (NPS)? (On a scale from -100 to 100, how likely customers are to recommend your product.)',
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
    nextNode: '8cb26bb1-381f-42ae-8d2a-5f5036e5a532',
  },
  q8: {
    sectionTitle: 'Feedback Collection Analysis',
    sectionId: '8cb26bb1-381f-42ae-8d2a-5f5036e5a532',
    firstField: '6fdc8f0c-9fe0-44c0-8136-720e7c6d92f9',
    fields: {
      feedbackCollectionAnalysis: {
        id: '6fdc8f0c-9fe0-44c0-8136-720e7c6d92f9',
        type: 'dropdown',
        label:
          'How do you collect and analyze customer feedback across different regions and markets?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_feedback',
            value: 'No structured feedback collection process',
          },
          {
            id: 'basic_no_deep_analytics',
            value: 'Basic feedback collection, but no deep analytics',
          },
          {
            id: 'centralized_regional_insights',
            value: 'Centralized feedback system with regional insights',
          },
          {
            id: 'ai_powered_global_analysis',
            value:
              'AI-powered feedback analysis across global customer interactions',
          },
        ],
      },
    },
    nextNode: '23c3683c-c546-4286-ab4b-17479ee636d6',
  },
  q9: {
    sectionTitle: 'Feedback Implementation Frequency',
    sectionId: '23c3683c-c546-4286-ab4b-17479ee636d6',
    firstField: 'f83ed9e4-fb81-414c-9a78-8ff352c28dcc',
    fields: {
      feedbackImplementationFrequency: {
        id: 'f83ed9e4-fb81-414c-9a78-8ff352c28dcc',
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
            id: 'real_time_weekly',
            value: 'Real-time or weekly adjustments',
          },
        ],
      },
    },
    nextNode: 'd86949f0-b853-489f-a552-dfe8832661d5',
  },
  q10: {
    sectionTitle: 'Dissatisfied Customer Management',
    sectionId: 'd86949f0-b853-489f-a552-dfe8832661d5',
    firstField: 'b7ad178b-b907-4268-9a01-c9f2ccd87b6f',
    fields: {
      dissatisfiedCustomerManagement: {
        id: 'b7ad178b-b907-4268-9a01-c9f2ccd87b6f',
        type: 'dropdown',
        label:
          'How do you manage dissatisfied customers and negative brand sentiment?',
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
            id: 'dedicated_global_team',
            value:
              'Dedicated global customer experience team handling complaints',
          },
          {
            id: 'ai_driven_real_time',
            value: 'AI-driven real-time issue resolution and crisis management',
          },
        ],
      },
    },
    nextNode: 'b3dbe66e-2be8-49c7-9d27-bb951fea1daf',
  },
  q11: {
    sectionTitle: 'Customer Retention Rate',
    sectionId: 'b3dbe66e-2be8-49c7-9d27-bb951fea1daf',
    firstField: 'a0aa9d05-2435-431d-b8e5-38f6ab8d7ad3',
    fields: {
      customerRetentionRate: {
        id: 'a0aa9d05-2435-431d-b8e5-38f6ab8d7ad3',
        type: 'dropdown',
        label: 'What is your current customer retention rate?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_70_not_tracked',
            value: 'Below 70% or not tracked',
          },
          {
            id: '70_84_moderate',
            value: '70%-84% (Moderate retention)',
          },
          {
            id: '85_94_strong',
            value: '85%-94% (Strong retention)',
          },
          {
            id: '95_plus_exceptional',
            value: '95%+ (Exceptional retention)',
          },
        ],
      },
    },
    nextNode: '5aad04fc-9f34-46e8-8bc1-43afa74ac53d',
  },
  q12: {
    sectionTitle: 'Customer Churn Rate',
    sectionId: '5aad04fc-9f34-46e8-8bc1-43afa74ac53d',
    firstField: 'b0fd721a-9afa-43e0-92ea-2f647a93b3ce',
    fields: {
      customerChurnRate: {
        id: 'b0fd721a-9afa-43e0-92ea-2f647a93b3ce',
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
            id: '5_9_percent',
            value: '5%-9%',
          },
          {
            id: '2_4_percent',
            value: '2%-4%',
          },
          {
            id: 'below_2_world_class',
            value: 'Below 2% (World-class)',
          },
        ],
      },
    },
    nextNode: 'de915991-2678-4eec-8195-55e1b41e1e86',
  },
  q13: {
    sectionTitle: 'AI Churn Prediction',
    sectionId: 'de915991-2678-4eec-8195-55e1b41e1e86',
    firstField: '35ddabf5-b207-4063-999e-f2bb715a44f4',
    fields: {
      aiChurnPrediction: {
        id: '35ddabf5-b207-4063-999e-f2bb715a44f4',
        type: 'dropdown',
        label:
          'Do you use AI or machine learning to predict customer churn and proactively retain users?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_churn_forecasting',
            value: 'No structured churn forecasting',
          },
          {
            id: 'analytics_no_ai',
            value: 'We use analytics but no AI-driven churn forecasting',
          },
          {
            id: 'ai_driven_churn_prediction',
            value:
              'Yes, AI-driven churn prediction with automated retention strategies',
          },
        ],
      },
    },
    nextNode: '1854e77f-9c62-4920-b99c-5d27a2baf384',
  },
  q14: {
    sectionTitle: 'Customer Segmentation Retention',
    sectionId: '1854e77f-9c62-4920-b99c-5d27a2baf384',
    firstField: 'd2e9e8f5-a5ca-4dee-add5-e549442e764b',
    fields: {
      customerSegmentationRetention: {
        id: 'd2e9e8f5-a5ca-4dee-add5-e549442e764b',
        type: 'dropdown',
        label: 'How do you segment customers based on retention behavior?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_retention_segmentation',
            value: 'No structured retention segmentation',
          },
          {
            id: 'new_vs_long_term',
            value: 'New vs. long-term customers',
          },
          {
            id: 'high_revenue_vs_low_revenue',
            value: 'High-revenue vs. low-revenue customers',
          },
          {
            id: 'power_users_vs_at_risk',
            value: 'Power users vs. at-risk customers',
          },
        ],
      },
    },
    nextNode: 'a56c59a8-aa79-48c2-80a6-f16f2f6b2450',
  },
  q15: {
    sectionTitle: 'Retention Strategies',
    sectionId: 'a56c59a8-aa79-48c2-80a6-f16f2f6b2450',
    firstField: '99256885-870d-4155-a62a-a1e8ca64ae80',
    fields: {
      retentionStrategies: {
        id: '99256885-870d-4155-a62a-a1e8ca64ae80',
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
            id: 'automated_reengagement',
            value: 'Automated re-engagement campaigns (email/SMS)',
          },
          {
            id: 'premium_support_vip',
            value: 'Premium customer support & VIP benefits',
          },
          {
            id: 'ai_driven_personalization',
            value: 'AI-driven personalization and loyalty programs',
          },
        ],
      },
    },
    nextNode: '47845e4e-f024-4cb1-b614-b4f49fbaf3d4',
  },
  q16: {
    sectionTitle: 'Repeat Customer Revenue',
    sectionId: '47845e4e-f024-4cb1-b614-b4f49fbaf3d4',
    firstField: '66ca496c-7ceb-45a5-bd9e-e7d8d985e729',
    fields: {
      repeatCustomerRevenue: {
        id: '66ca496c-7ceb-45a5-bd9e-e7d8d985e729',
        type: 'dropdown',
        label:
          'What percentage of revenue comes from repeat customers (vs. new customer acquisition)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_40_not_tracked',
            value: 'Below 40% or not tracked',
          },
          {
            id: '40_59_percent',
            value: '40%-59%',
          },
          {
            id: '60_79_percent',
            value: '60%-79%',
          },
          {
            id: '80_plus_repeat_revenue',
            value: '80%+ repeat revenue',
          },
        ],
      },
    },
    nextNode: '6f344f34-e2d9-4ec2-891f-a09f9b3dcf25',
  },
  q17: {
    sectionTitle: 'Estimated CLV',
    sectionId: '6f344f34-e2d9-4ec2-891f-a09f9b3dcf25',
    firstField: 'd62236ca-edbd-45cb-9624-83ed012db8ad',
    fields: {
      estimatedClv: {
        id: 'd62236ca-edbd-45cb-9624-83ed012db8ad',
        type: 'dropdown',
        label: 'What is your current estimated Customer Lifetime Value (CLV)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_2500_not_calculated',
            value: 'Below $2,500 or not calculated',
          },
          {
            id: '2500_4999',
            value: '$2,500 - $4,999',
          },
          {
            id: '5000_9999',
            value: '$5,000 - $9,999',
          },
          {
            id: '10000_plus_enterprise',
            value: '$10,000+ (Enterprise-level CLV)',
          },
        ],
      },
    },
    nextNode: '2e833bb8-f42e-4f9b-980c-dec0ecb41d57',
  },
  q18: {
    sectionTitle: 'CLV vs CAC',
    sectionId: '2e833bb8-f42e-4f9b-980c-dec0ecb41d57',
    firstField: '54e9035f-40d2-4c67-a917-1aa086a46aaa',
    fields: {
      clvVsCac: {
        id: '54e9035f-40d2-4c67-a917-1aa086a46aaa',
        type: 'dropdown',
        label:
          'How does your CLV compare to your Customer Acquisition Cost (CAC)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'clv_equal_lower_cac',
            value: 'CLV is equal to or lower than CAC',
          },
          {
            id: 'clv_3x_4_9x_cac',
            value: 'CLV is 3x-4.9x CAC',
          },
          {
            id: 'clv_5x_9_9x_cac',
            value: 'CLV is 5x-9.9x CAC',
          },
          {
            id: 'clv_10x_plus_cac',
            value: 'CLV is 10x+ CAC',
          },
        ],
      },
    },
    nextNode: '24292e97-2feb-487d-a221-c02e4b1df95a',
  },
  q19: {
    sectionTitle: 'AI CLV Forecasting',
    sectionId: '24292e97-2feb-487d-a221-c02e4b1df95a',
    firstField: '7f2366a3-7562-4be2-8e6b-b77b8af5b654',
    fields: {
      aiClvForecasting: {
        id: '7f2366a3-7562-4be2-8e6b-b77b8af5b654',
        type: 'dropdown',
        label:
          'Do you use AI-driven CLV forecasting to predict long-term revenue per customer?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_clv_forecasting',
            value: 'No structured CLV forecasting',
          },
          {
            id: 'analytics_no_ai_modeling',
            value: 'We use analytics but no AI-based CLV modeling',
          },
          {
            id: 'ai_driven_forecasting',
            value: 'Yes, AI-driven forecasting with real-time revenue insights',
          },
        ],
      },
    },
    nextNode: '4abd8a8b-0e16-4fbd-baa2-72edf83d3b13',
  },
  q20: {
    sectionTitle: 'CLV Customer Segmentation',
    sectionId: '4abd8a8b-0e16-4fbd-baa2-72edf83d3b13',
    firstField: 'e6704a3c-6089-4c18-8eeb-65203e2f42e0',
    fields: {
      clvCustomerSegmentation: {
        id: 'e6704a3c-6089-4c18-8eeb-65203e2f42e0',
        type: 'dropdown',
        label: 'How do you segment customers based on CLV?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_clv_segmentation',
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
            id: 'high_value_vs_low_value',
            value: 'High-value vs. low-value customers',
          },
        ],
      },
    },
    nextNode: 'fe8f1708-191d-4e2e-bcac-15edadc2247d',
  },
  q21: {
    sectionTitle: 'CLV Increase Strategies',
    sectionId: 'fe8f1708-191d-4e2e-bcac-15edadc2247d',
    firstField: '3ac00a0a-8496-4357-bdcc-4afab1ab158d',
    fields: {
      clvIncreaseStrategies: {
        id: '3ac00a0a-8496-4357-bdcc-4afab1ab158d',
        type: 'dropdown',
        label: 'What strategies have you implemented to increase CLV?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_clv_optimization',
            value: 'No structured CLV optimization',
          },
          {
            id: 'customer_success_driven',
            value: 'Customer success-driven revenue growth initiatives',
          },
          {
            id: 'personalized_loyalty_rewards',
            value: 'Personalized loyalty & rewards programs',
          },
          {
            id: 'ai_driven_upselling',
            value: 'AI-driven upselling & cross-selling automation',
          },
        ],
      },
    },
    nextNode: '1bcf91dd-fdcf-42e5-af56-46aa87085010',
  },
  q22: {
    sectionTitle: 'High CLV Revenue Percentage',
    sectionId: '1bcf91dd-fdcf-42e5-af56-46aa87085010',
    firstField: '0f1719d1-13a7-49d5-b6d4-575fa31a3443',
    fields: {
      highClvRevenuePercentage: {
        id: '0f1719d1-13a7-49d5-b6d4-575fa31a3443',
        type: 'dropdown',
        label:
          'What percentage of total revenue comes from high CLV customers (top 10%)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_10_not_tracked',
            value: 'Below 10% or not tracked',
          },
          {
            id: '10_29_percent',
            value: '10%-29%',
          },
          {
            id: '30_49_percent',
            value: '30%-49%',
          },
          {
            id: '50_plus_percent',
            value: '50%+',
          },
        ],
      },
    },
    nextNode: 'b08bb1d4-ee66-494f-86a3-9a16abd737d1',
  },
  q23: {
    sectionTitle: 'Lead Conversion Rate',
    sectionId: 'b08bb1d4-ee66-494f-86a3-9a16abd737d1',
    firstField: '49ce43ea-581f-4c70-8d66-f8faba3026b3',
    fields: {
      leadConversionRate: {
        id: '49ce43ea-581f-4c70-8d66-f8faba3026b3',
        type: 'dropdown',
        label: 'What is your current lead-to-customer conversion rate?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_20_not_tracked',
            value: 'Below 20% or not tracked',
          },
          {
            id: '20_29_percent',
            value: '20%-29%',
          },
          {
            id: '30_39_percent',
            value: '30%-39%',
          },
          {
            id: '40_plus_industry_leading',
            value: '40%+ (Industry-leading conversion)',
          },
        ],
      },
    },
    nextNode: '6e239a70-d452-4bc8-8e34-46c28c80ba2e',
  },
  q24: {
    sectionTitle: 'Website Conversion Rate',
    sectionId: '6e239a70-d452-4bc8-8e34-46c28c80ba2e',
    firstField: 'a1e7253f-0e10-4eaf-a9b5-7f60cc6b99ef',
    fields: {
      websiteConversionRate: {
        id: 'a1e7253f-0e10-4eaf-a9b5-7f60cc6b99ef',
        type: 'dropdown',
        label: 'What is your website or landing page conversion rate?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_10_not_tracked',
            value: 'Below 10% or not tracked',
          },
          {
            id: '10_14_percent',
            value: '10%-14%',
          },
          {
            id: '15_19_percent',
            value: '15%-19%',
          },
          {
            id: '20_plus_percent',
            value: '20%+',
          },
        ],
      },
    },
    nextNode: '81f8efd7-a2cf-47ed-8212-5e0d35a31ab1',
  },
  q25: {
    sectionTitle: 'AI Conversion Optimization',
    sectionId: '81f8efd7-a2cf-47ed-8212-5e0d35a31ab1',
    firstField: '56d0a36a-bfb9-4af3-8a6c-bfe1b4d6851b',
    fields: {
      aiConversionOptimization: {
        id: '56d0a36a-bfb9-4af3-8a6c-bfe1b4d6851b',
        type: 'dropdown',
        label:
          'Do you use AI-driven personalization and predictive analytics to improve conversion rates?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_ai_driven_conversion',
            value: 'No AI-driven conversion optimization',
          },
          {
            id: 'some_ai_no_predictive',
            value: 'We use some AI tools but not predictive analytics',
          },
          {
            id: 'ai_driven_personalization',
            value:
              'Yes, AI-driven personalization and automated lead nurturing',
          },
        ],
      },
    },
    nextNode: '99d1bd9a-139e-4b91-ad56-76768de5a7f5',
  },
  q26: {
    sectionTitle: 'Paid vs Organic Conversions',
    sectionId: '99d1bd9a-139e-4b91-ad56-76768de5a7f5',
    firstField: '235b3ffc-2e54-4ba4-ad02-ab82b6f6e414',
    fields: {
      paidVsOrganicConversions: {
        id: '235b3ffc-2e54-4ba4-ad02-ab82b6f6e414',
        type: 'dropdown',
        label:
          'What percentage of conversions come from paid vs. organic channels?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_20_not_tracked',
            value: 'Below 20% or not tracked',
          },
          {
            id: '20_39_organic',
            value: '20%-39% organic',
          },
          {
            id: '40_59_organic',
            value: '40%-59% organic',
          },
          {
            id: '60_plus_organic',
            value: '60%+ from organic (SEO, content, referrals)',
          },
        ],
      },
    },
    nextNode: '8207e19d-85de-450d-8006-067ded77f453',
  },
  q27: {
    sectionTitle: 'Abandoned Cart Rate',
    sectionId: '8207e19d-85de-450d-8006-067ded77f453',
    firstField: '79eb3c02-b421-4995-86a3-0aea6aea1edd',
    fields: {
      abandonedCartRate: {
        id: '79eb3c02-b421-4995-86a3-0aea6aea1edd',
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
    nextNode: 'e3be792b-3f6e-4dce-ba45-163e83343f23',
  },
  q28: {
    sectionTitle: 'Conversion Optimization Strategies',
    sectionId: 'e3be792b-3f6e-4dce-ba45-163e83343f23',
    firstField: '247c54c7-09c7-4659-b4cd-eba93e71666a',
    fields: {
      conversionOptimizationStrategies: {
        id: '247c54c7-09c7-4659-b4cd-eba93e71666a',
        type: 'dropdown',
        label:
          'What optimization strategies have you implemented to improve conversion rates?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_conversion_optimization',
            value: 'No structured conversion optimization',
          },
          {
            id: 'ab_testing_landing_ads',
            value: 'A/B testing for landing pages & ads',
          },
          {
            id: 'automated_chatbots_nurturing',
            value: 'Automated chatbots & lead nurturing',
          },
          {
            id: 'ai_driven_predictive_scoring',
            value: 'AI-driven predictive lead scoring',
          },
        ],
      },
    },
    nextNode: '1bfec9a4-f4d0-4c66-9a66-92aea7553dee',
  },
  q29: {
    sectionTitle: 'Monthly Marketing Budget',
    sectionId: '1bfec9a4-f4d0-4c66-9a66-92aea7553dee',
    firstField: 'c622f1b4-3730-4f47-86ca-34a097741e98',
    fields: {
      monthlyMarketingBudget: {
        id: 'c622f1b4-3730-4f47-86ca-34a097741e98',
        type: 'dropdown',
        label: 'What is your total monthly marketing budget?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_500k',
            value: 'Below $500,000',
          },
          {
            id: '500k_999k',
            value: '$500,000 - $999,999',
          },
          {
            id: '1m_4_999m',
            value: '$1,000,000 - $4,999,999',
          },
          {
            id: '5m_plus',
            value: '$5,000,000+',
          },
        ],
      },
    },
    nextNode: 'c3beac6c-4d3d-45e1-9226-549a563c0922',
  },
  q30: {
    sectionTitle: 'Marketing Budget Percentage',
    sectionId: 'c3beac6c-4d3d-45e1-9226-549a563c0922',
    firstField: '4452ab7f-33cd-4681-a449-24c6194d6f7e',
    fields: {
      marketingBudgetPercentage: {
        id: '4452ab7f-33cd-4681-a449-24c6194d6f7e',
        type: 'dropdown',
        label: 'What percentage of total revenue is allocated to marketing?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_20_not_tracked',
            value: 'Below 20% or not tracked',
          },
          {
            id: '20_29_percent',
            value: '20%-29%',
          },
          {
            id: '30_39_percent',
            value: '30%-39%',
          },
          {
            id: '40_plus_percent',
            value: '40%+',
          },
        ],
      },
    },
    nextNode: '74bf66c9-734d-4a7b-a13c-f838382d7d03',
  },
  q31: {
    sectionTitle: 'Marketing Budget Distribution',
    sectionId: '74bf66c9-734d-4a7b-a13c-f838382d7d03',
    firstField: 'c82c046e-71d3-4ac9-ad5c-4bde59434833',
    fields: {
      marketingBudgetDistribution: {
        id: 'c82c046e-71d3-4ac9-ad5c-4bde59434833',
        type: 'dropdown',
        label:
          'How is your marketing budget distributed across different channels?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'performance_marketing',
            value: 'Performance Marketing (Google, Facebook, LinkedIn, etc.)',
          },
          {
            id: 'brand_awareness',
            value: 'Brand Awareness (PR, Sponsorships, Events)',
          },
          {
            id: 'content_marketing',
            value: 'Content Marketing (SEO, blogs, video production)',
          },
          {
            id: 'influencer_partnership',
            value: 'Influencer & Partnership Marketing',
          },
          {
            id: 'other',
            value: 'Other (please specify)',
          },
        ],
      },
    },
    nextNode: '960a53a4-498c-4d44-9546-7db7e6e817aa',
  },
  q32: {
    sectionTitle: 'Dynamic Budget Adjustment',
    sectionId: '960a53a4-498c-4d44-9546-7db7e6e817aa',
    firstField: '20149472-f6a6-4edf-88b2-b9ca00db6ead',
    fields: {
      dynamicBudgetAdjustment: {
        id: '20149472-f6a6-4edf-88b2-b9ca00db6ead',
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
            id: 'quarterly_reallocations',
            value: 'Quarterly reallocations',
          },
          {
            id: 'monthly_performance_based',
            value: 'Monthly performance-based budget adjustments',
          },
          {
            id: 'real_time_ai_driven',
            value: 'Yes, real-time AI-driven budget reallocation',
          },
        ],
      },
    },
    nextNode: 'cc58df69-8d28-428e-9167-65ba757561fd',
  },
  q33: {
    sectionTitle: 'Cost Per Acquisition Channel',
    sectionId: 'cc58df69-8d28-428e-9167-65ba757561fd',
    firstField: 'c128f709-1392-40a9-a406-cddcc5b83a08',
    fields: {
      costPerAcquisitionChannel: {
        id: 'c128f709-1392-40a9-a406-cddcc5b83a08',
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
            id: 'below_50_per_customer',
            value: 'Below $50 per customer',
          },
        ],
      },
    },
    nextNode: '44de6beb-2e02-4416-9425-80e4bd360551',
  },
  q34: {
    sectionTitle: 'Budget Reallocation Frequency',
    sectionId: '44de6beb-2e02-4416-9425-80e4bd360551',
    firstField: '93fd7305-5e1b-4e72-aaea-876441e67b1a',
    fields: {
      budgetReallocationFrequency: {
        id: '93fd7305-5e1b-4e72-aaea-876441e67b1a',
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
    nextNode: 'aef09916-25cc-4d26-9fba-62c1515b0338',
  },
  q35: {
    sectionTitle: 'Marketing Budget EBITDA Impact',
    sectionId: 'aef09916-25cc-4d26-9fba-62c1515b0338',
    firstField: '18184b25-7e27-4db4-8b28-a86c776f22ba',
    fields: {
      marketingBudgetEbitdaImpact: {
        id: '18184b25-7e27-4db4-8b28-a86c776f22ba',
        type: 'dropdown',
        label:
          'How does your marketing budget impact your EBITDA and overall financial performance?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_link_kpis',
            value:
              'No structured link between marketing spend and financial KPIs',
          },
          {
            id: 'tracked_separately',
            value:
              'Marketing is tracked separately, not linked to financial performance',
          },
          {
            id: 'key_driver_not_linked_ebitda',
            value:
              'Marketing is a key driver of revenue, but not linked to EBITDA tracking',
          },
          {
            id: 'directly_linked_ebitda',
            value: 'Directly linked to EBITDA growth and profitability',
          },
        ],
      },
    },
    nextNode: '244c5d69-e74e-4b6f-b5bb-357fc226620e',
  },
  q36: {
    sectionTitle: 'Customer Acquisition Cost',
    sectionId: '244c5d69-e74e-4b6f-b5bb-357fc226620e',
    firstField: '435f59d9-8166-4019-9972-ba41436bc010',
    fields: {
      customerAcquisitionCost: {
        id: '435f59d9-8166-4019-9972-ba41436bc010',
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
    nextNode: 'bfec063f-047d-48d2-bf06-4df50463826c',
  },
  q37: {
    sectionTitle: 'Return on Ad Spend',
    sectionId: 'bfec063f-047d-48d2-bf06-4df50463826c',
    firstField: '0c31374f-459d-4d08-8f86-401ffdfddf7e',
    fields: {
      returnOnAdSpend: {
        id: '0c31374f-459d-4d08-8f86-401ffdfddf7e',
        type: 'dropdown',
        label:
          'What is your current Return on Ad Spend (ROAS)? (Revenue generated per $1 spent on paid ads.)',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_5x_not_tracked',
            value: 'Below 5x or not tracked',
          },
          {
            id: '5x_6_9x',
            value: '5x-6.9x ROI',
          },
          {
            id: '7x_9_9x',
            value: '7x-9.9x ROI',
          },
          {
            id: '10x_plus',
            value: '10x+ ROI',
          },
        ],
      },
    },
    nextNode: '7ab240d5-ca2a-4224-9d77-0dacb901097e',
  },
  q38: {
    sectionTitle: 'Revenue Attribution Marketing',
    sectionId: '7ab240d5-ca2a-4224-9d77-0dacb901097e',
    firstField: '771445d6-05d2-41de-ab44-b1c415d075fc',
    fields: {
      revenueAttributionMarketing: {
        id: '771445d6-05d2-41de-ab44-b1c415d075fc',
        type: 'dropdown',
        label:
          'What percentage of total revenue is directly attributed to marketing efforts?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_30_not_tracked',
            value: 'Below 30% or not tracked',
          },
          {
            id: '30_49_percent',
            value: '30%-49%',
          },
          {
            id: '50_69_percent',
            value: '50%-69%',
          },
          {
            id: '70_plus_total_revenue',
            value: '70%+ of total revenue',
          },
        ],
      },
    },
    nextNode: '2b8e8516-c451-492c-bdcb-1e941e306316',
  },
  q39: {
    sectionTitle: 'Marketing Efficiency Ratio',
    sectionId: '2b8e8516-c451-492c-bdcb-1e941e306316',
    firstField: 'b97acbe4-ae5e-4b94-b6dc-3f76d451bc1f',
    fields: {
      marketingEfficiencyRatio: {
        id: 'b97acbe4-ae5e-4b94-b6dc-3f76d451bc1f',
        type: 'dropdown',
        label:
          'What is your Marketing Efficiency Ratio (MER)? (Total revenue generated ÷ total marketing spend.)',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_5x_not_tracked',
            value: 'Below 5x or not tracked',
          },
          {
            id: '5x_6_9x',
            value: '5x-6.9x',
          },
          {
            id: '7x_9_9x',
            value: '7x-9.9x',
          },
          {
            id: '10x_plus',
            value: '10x+',
          },
        ],
      },
    },
    nextNode: '0c9be347-fc5b-4797-893a-a884a4a1e535',
  },
  q40: {
    sectionTitle: 'Marketing Spend Optimization',
    sectionId: '0c9be347-fc5b-4797-893a-a884a4a1e535',
    firstField: 'c6d243af-d388-4d54-8d1e-a3272dbfc9fd',
    fields: {
      marketingSpendOptimization: {
        id: 'c6d243af-d388-4d54-8d1e-a3272dbfc9fd',
        type: 'dropdown',
        label:
          'How do you optimize marketing spend based on profitability data?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_spend_optimization',
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
            id: 'automated_reallocation_roi',
            value: 'Automated reallocation of spend based on ROI',
          },
        ],
      },
    },
    nextNode: 'afe0f77c-8b94-4541-8332-7b0f3e70e6bd',
  },
  q41: {
    sectionTitle: 'Marketing Profitability EBITDA',
    sectionId: 'afe0f77c-8b94-4541-8332-7b0f3e70e6bd',
    firstField: '0b7a85ea-da3f-47e6-bad9-8067e95887a5',
    fields: {
      marketingProfitabilityEbitda: {
        id: '0b7a85ea-da3f-47e6-bad9-8067e95887a5',
        type: 'dropdown',
        label:
          'How does your marketing profitability impact your EBITDA and financial valuation?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_link_valuation',
            value:
              'No structured link between marketing profitability and valuation',
          },
          {
            id: 'tracked_separately_financial',
            value: 'Marketing is tracked separately from financial performance',
          },
          {
            id: 'contributes_revenue_not_linked',
            value:
              'Marketing contributes to revenue, but not directly linked to EBITDA',
          },
          {
            id: 'directly_linked_pre_ipo',
            value: 'Directly linked to EBITDA and Pre-IPO valuation metrics',
          },
        ],
      },
    },
    nextNode: 'e1f7445c-2ab0-4868-90a7-966f9f2522e8',
  },
  q42: {
    sectionTitle: 'Social Media Follower Count',
    sectionId: 'e1f7445c-2ab0-4868-90a7-966f9f2522e8',
    firstField: '21ccda11-e045-4818-ab20-69124bfc5e55',
    fields: {
      socialMediaFollowerCount: {
        id: '21ccda11-e045-4818-ab20-69124bfc5e55',
        type: 'dropdown',
        label:
          'What is your total social media follower count across all platforms?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_500k_not_tracked',
            value: 'Below 500,000 or not tracked',
          },
          {
            id: '500k_999k',
            value: '500,000 - 999,999',
          },
          {
            id: '1m_4_999m',
            value: '1,000,000 - 4,999,999',
          },
          {
            id: '5m_plus',
            value: '5,000,000+',
          },
        ],
      },
    },
    nextNode: 'bd590c2a-49c1-4893-b471-157cb3e973c3',
  },
  q43: {
    sectionTitle: 'Social Media Engagement Rate',
    sectionId: 'bd590c2a-49c1-4893-b471-157cb3e973c3',
    firstField: '1a93f74e-b0cc-4457-8ad8-b2f7ffaf687d',
    fields: {
      socialMediaEngagementRate: {
        id: '1a93f74e-b0cc-4457-8ad8-b2f7ffaf687d',
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
    nextNode: 'cfcb59f2-3b6a-4c74-8390-d27a65f84549',
  },
  q44: {
    sectionTitle: 'Content Posting Frequency',
    sectionId: 'cfcb59f2-3b6a-4c74-8390-d27a65f84549',
    firstField: '1064198c-1944-41c7-bd51-01a83192fcfa',
    fields: {
      contentPostingFrequency: {
        id: '1064198c-1944-41c7-bd51-01a83192fcfa',
        type: 'dropdown',
        label: 'How frequently do you post new content across your platforms?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'less_than_weekly_irregular',
            value: 'Less than once a week or irregular',
          },
          {
            id: '3_5_times_per_week',
            value: '3-5 times per week',
          },
          {
            id: 'daily',
            value: 'Daily',
          },
          {
            id: 'multiple_times_daily',
            value: 'Multiple times per day',
          },
        ],
      },
    },
    nextNode: '788e82c9-535d-4ae8-9720-3e0b6983bb82',
  },
  q45: {
    sectionTitle: 'Influencer Partnerships Social',
    sectionId: '788e82c9-535d-4ae8-9720-3e0b6983bb82',
    firstField: 'f56e5029-efcf-4254-ac46-d04ec82aaee4',
    fields: {
      influencerPartnershipsSocial: {
        id: 'f56e5029-efcf-4254-ac46-d04ec82aaee4',
        type: 'dropdown',
        label:
          'Do you use influencer partnerships or paid social media campaigns to boost reach?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_influencer_paid_social',
            value: 'No influencer collaborations or paid social ads',
          },
          {
            id: 'work_with_influencers_unstructured',
            value: "We work with influencers, but it's not structured",
          },
          {
            id: 'structured_influencer_paid_strategy',
            value: 'Yes, structured influencer and paid ad strategy',
          },
        ],
      },
    },
    nextNode: '5b80fae0-da3b-4b65-9be7-03c5469d82dd',
  },
  q46: {
    sectionTitle: 'Social Media Campaign Effectiveness',
    sectionId: '5b80fae0-da3b-4b65-9be7-03c5469d82dd',
    firstField: 'c564e0a7-651f-4a1a-b7a5-8d5e891777e0',
    fields: {
      socialMediaCampaignEffectiveness: {
        id: 'c564e0a7-651f-4a1a-b7a5-8d5e891777e0',
        type: 'dropdown',
        label:
          'How do you measure the effectiveness of your social media campaigns?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_tracking_social',
            value: 'No structured tracking of social media impact',
          },
          {
            id: 'follower_growth_virality',
            value: 'Follower growth & content virality metrics',
          },
          {
            id: 'conversion_tracking_clicks_sales',
            value: 'Conversion tracking (e.g., clicks to sales)',
          },
          {
            id: 'ai_driven_engagement_sentiment',
            value: 'AI-driven engagement & sentiment analysis',
          },
        ],
      },
    },
    nextNode: '29d24a96-1ccd-4e20-bf74-89e046cef510',
  },
  q47: {
    sectionTitle: 'Social Media Investor Relations',
    sectionId: '29d24a96-1ccd-4e20-bf74-89e046cef510',
    firstField: 'b7a5a643-f542-4c62-86e3-b07b276bf46e',
    fields: {
      socialMediaInvestorRelations: {
        id: 'b7a5a643-f542-4c62-86e3-b07b276bf46e',
        type: 'dropdown',
        label:
          'Do you integrate social media marketing with investor relations and corporate branding efforts?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_integration_corporate',
            value:
              'No structured integration between social and corporate branding',
          },
          {
            id: 'partially_integrated_not_optimized',
            value: 'Partially integrated, but not optimized',
          },
          {
            id: 'fully_integrated_corporate_pr',
            value:
              'Yes, fully integrated with corporate PR, investor messaging, and reputation management',
          },
        ],
      },
    },
    nextNode: 'b7ddb100-b9a0-4c50-b335-7fe63f734f2d',
  },
  q48: {
    sectionTitle: 'Social Media Traffic Leads',
    sectionId: 'b7ddb100-b9a0-4c50-b335-7fe63f734f2d',
    firstField: '3d48b5c9-794d-4451-8809-5fdfd7630e58',
    fields: {
      socialMediaTrafficLeads: {
        id: '3d48b5c9-794d-4451-8809-5fdfd7630e58',
        type: 'dropdown',
        label:
          'What percentage of website traffic and leads are generated from social media channels?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_5_not_tracked',
            value: 'Below 5% or not tracked',
          },
          {
            id: '5_14_percent',
            value: '5%-14%',
          },
          {
            id: '15_29_percent',
            value: '15%-29%',
          },
          {
            id: '30_plus_total_traffic',
            value: '30%+ of total traffic',
          },
        ],
      },
    },
    nextNode: '3e3088ef-ccc5-40dc-b495-4ba30c29375d',
  },
  q49: {
    sectionTitle: 'Media Coverage Recognition',
    sectionId: '3e3088ef-ccc5-40dc-b495-4ba30c29375d',
    firstField: 'e7badfcc-7aaf-4238-b97e-aa64e68e402b',
    fields: {
      mediaCoverageRecognition: {
        id: 'e7badfcc-7aaf-4238-b97e-aa64e68e402b',
        type: 'dropdown',
        label:
          'Have you received any media coverage, press mentions, or industry recognition?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_media_presence_plans',
            value: 'No media presence and no plans yet',
          },
          {
            id: 'no_major_coverage_working',
            value: 'No major press coverage yet, but we are working on it',
          },
          {
            id: 'some_mentions_niche_regional',
            value: 'Some media mentions, but mostly niche or regional coverage',
          },
          {
            id: 'tier1_global_publications',
            value:
              'Yes, featured in Tier 1 global publications (Forbes, Bloomberg, TechCrunch, Financial Times, WSJ)',
          },
        ],
      },
    },
    nextNode: '99361967-943a-4b20-9f33-0b0566e9b517',
  },
  q50: {
    sectionTitle: 'Brand Sentiment Reputation Tracking',
    sectionId: '99361967-943a-4b20-9f33-0b0566e9b517',
    firstField: '36cebae3-6e77-4327-87c9-47d12684fe2b',
    fields: {
      brandSentimentReputationTracking: {
        id: '36cebae3-6e77-4327-87c9-47d12684fe2b',
        type: 'dropdown',
        label: 'How do you track brand sentiment and external reputation?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_reputation_monitoring',
            value: 'No structured brand reputation monitoring',
          },
          {
            id: 'manual_tracking_press_feedback',
            value: 'Manual tracking of press & customer feedback',
          },
          {
            id: 'ai_driven_sentiment_media_social',
            value:
              'AI-driven sentiment analysis across media & social channels',
          },
        ],
      },
    },
    nextNode: 'da81eea2-7416-4a13-ae66-f510ded60e1e',
  },
  q51: {
    sectionTitle: 'Positive Feedback Percentage',
    sectionId: 'da81eea2-7416-4a13-ae66-f510ded60e1e',
    firstField: '4f73e364-2e9b-44bf-8261-ca786892bf4c',
    fields: {
      positiveFeedbackPercentage: {
        id: '4f73e364-2e9b-44bf-8261-ca786892bf4c',
        type: 'dropdown',
        label:
          'What percentage of your online reviews and public feedback are positive?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_60_not_tracked',
            value: 'Below 60% or not tracked',
          },
          {
            id: '60_79_positive',
            value: '60%-79% positive',
          },
          {
            id: '80_94_positive',
            value: '80%-94% positive',
          },
          {
            id: '95_plus_positive_reviews',
            value: '95%+ positive reviews',
          },
        ],
      },
    },
    nextNode: 'b0c194ee-0aa9-4a52-ac29-5fd63c42d6f1',
  },
  q52: {
    sectionTitle: 'Crisis Communication Strategy',
    sectionId: 'b0c194ee-0aa9-4a52-ac29-5fd63c42d6f1',
    firstField: '1d3bcc4e-bd36-4b2c-bea3-29be174fee6d',
    fields: {
      crisisCommunicationStrategy: {
        id: '1d3bcc4e-bd36-4b2c-bea3-29be174fee6d',
        type: 'dropdown',
        label:
          'Do you have a structured crisis communication strategy in place?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_crisis_management',
            value: 'No structured crisis management plan',
          },
          {
            id: 'handle_pr_reactively',
            value: 'We handle PR issues reactively, not proactively',
          },
          {
            id: 'dedicated_pr_crisis_team',
            value: 'Yes, with a dedicated PR and crisis response team',
          },
        ],
      },
    },
    nextNode: '0733787e-29ab-4ad9-8835-4da9b80d4f32',
  },
  q53: {
    sectionTitle: 'Global Partnerships',
    sectionId: '0733787e-29ab-4ad9-8835-4da9b80d4f32',
    firstField: '735ebeb9-ca5e-45dc-b213-c23d293582e6',
    fields: {
      globalPartnerships: {
        id: '735ebeb9-ca5e-45dc-b213-c23d293582e6',
        type: 'dropdown',
        label:
          'Have you established partnerships with globally recognized brands, investors, or thought leaders?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_partnerships_collaborations',
            value: 'No partnerships or collaborations',
          },
          {
            id: 'no_partnerships_working_on_it',
            value: 'No partnerships yet, but we are working on it',
          },
          {
            id: 'some_partnerships_not_global',
            value: 'We have some partnerships, but they are not yet global',
          },
          {
            id: 'multiple_high_impact_partnerships',
            value: 'Yes, multiple high-impact partnerships',
          },
        ],
      },
    },
    nextNode: 'f206e94a-ff75-49cd-9fe9-df9325fd6eaa',
  },
  q54: {
    sectionTitle: 'Industry Events Participation',
    sectionId: 'f206e94a-ff75-49cd-9fe9-df9325fd6eaa',
    firstField: '1216243b-3d2b-45c5-8487-f24811d4f0aa',
    fields: {
      industryEventsParticipation: {
        id: '1216243b-3d2b-45c5-8487-f24811d4f0aa',
        type: 'dropdown',
        label:
          'Have you participated in major industry events, awards, or sponsorships to enhance your reputation?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_involvement_industry_events',
            value: 'No involvement in industry-related events or sponsorships',
          },
          {
            id: 'no_participation_planning',
            value: 'No industry participation yet, but we are planning to',
          },
          {
            id: 'attend_not_leverage_branding',
            value:
              "We attend some events but don't actively leverage them for branding",
          },
          {
            id: 'actively_participating_global_events',
            value:
              'Yes, actively participating in global industry events and sponsorships',
          },
        ],
      },
    },
    nextNode: '72cee4ec-5755-4b53-867b-0824a1d71687',
  },
  q55: {
    sectionTitle: 'Negative PR Management',
    sectionId: '72cee4ec-5755-4b53-867b-0824a1d71687',
    firstField: '63378d0a-fe99-4315-a9c6-6bba472890bf',
    fields: {
      negativePrManagement: {
        id: '63378d0a-fe99-4315-a9c6-6bba472890bf',
        type: 'dropdown',
        label:
          'How do you manage and respond to negative PR or reputation risks?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_reputation_management',
            value: 'No structured reputation management strategy',
          },
          {
            id: 'respond_reactively_not_proactively',
            value: 'We respond to issues reactively, not proactively',
          },
          {
            id: 'dedicated_pr_team_proactive',
            value: 'A dedicated PR team manages crises proactively',
          },
          {
            id: 'ai_driven_brand_monitoring',
            value:
              'AI-driven brand monitoring with automated risk mitigation strategies',
          },
        ],
      },
    },
    nextNode: null,
  },
};
