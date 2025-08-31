import { FieldType } from '@/components/Zustand store data/MainFlow/flow';

export const M_Private_Equity_Flow = {
  q1: {
    sectionTitle: 'CRM System Level',
    sectionId: 'crm-system-level',
    firstField: 'crmSystemLevel',
    fields: {
      crmSystemLevel: {
        id: 'crm-system-level',
        type: FieldType.dropdown,
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
    nextNode: 'crm-integration',
  },

  q2: {
    sectionTitle: 'CRM Integration',
    sectionId: 'crm-integration',
    firstField: 'crmIntegration',
    fields: {
      crmIntegration: {
        id: 'crm-integration',
        type: FieldType.dropdown,
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
    nextNode: 'ai-driven-customer-intelligence',
  },

  q3: {
    sectionTitle: 'AI-Driven Customer Intelligence',
    sectionId: 'ai-driven-customer-intelligence',
    firstField: 'aiDrivenCustomerIntelligence',
    fields: {
      aiDrivenCustomerIntelligence: {
        id: 'ai-driven-customer-intelligence',
        type: FieldType.dropdown,
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
    nextNode: 'clv-tracking',
  },

  q4: {
    sectionTitle: 'CLV Tracking',
    sectionId: 'clv-tracking',
    firstField: 'clvTracking',
    fields: {
      clvTracking: {
        id: 'clv-tracking',
        type: FieldType.dropdown,
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
    nextNode: 'existing-customer-revenue',
  },

  q5: {
    sectionTitle: 'Existing Customer Revenue',
    sectionId: 'existing-customer-revenue',
    firstField: 'existingCustomerRevenue',
    fields: {
      existingCustomerRevenue: {
        id: 'existing-customer-revenue',
        type: FieldType.dropdown,
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
    nextNode: 'customer-satisfaction-methods',
  },

  q6: {
    sectionTitle: 'Customer Satisfaction Methods',
    sectionId: 'customer-satisfaction-methods',
    firstField: 'customerSatisfactionMethods',
    fields: {
      customerSatisfactionMethods: {
        id: 'customer-satisfaction-methods',
        type: FieldType.dropdown,
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
    nextNode: 'net-promoter-score',
  },

  q7: {
    sectionTitle: 'Net Promoter Score',
    sectionId: 'net-promoter-score',
    firstField: 'netPromoterScore',
    fields: {
      netPromoterScore: {
        id: 'net-promoter-score',
        type: FieldType.dropdown,
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
    nextNode: 'feedback-collection-analysis',
  },

  q8: {
    sectionTitle: 'Feedback Collection Analysis',
    sectionId: 'feedback-collection-analysis',
    firstField: 'feedbackCollectionAnalysis',
    fields: {
      feedbackCollectionAnalysis: {
        id: 'feedback-collection-analysis',
        type: FieldType.dropdown,
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
    nextNode: 'feedback-implementation-frequency',
  },

  q9: {
    sectionTitle: 'Feedback Implementation Frequency',
    sectionId: 'feedback-implementation-frequency',
    firstField: 'feedbackImplementationFrequency',
    fields: {
      feedbackImplementationFrequency: {
        id: 'feedback-implementation-frequency',
        type: FieldType.dropdown,
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
    nextNode: 'dissatisfied-customer-management',
  },

  q10: {
    sectionTitle: 'Dissatisfied Customer Management',
    sectionId: 'dissatisfied-customer-management',
    firstField: 'dissatisfiedCustomerManagement',
    fields: {
      dissatisfiedCustomerManagement: {
        id: 'dissatisfied-customer-management',
        type: FieldType.dropdown,
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
    nextNode: 'customer-retention-rate',
  },

  q11: {
    sectionTitle: 'Customer Retention Rate',
    sectionId: 'customer-retention-rate',
    firstField: 'customerRetentionRate',
    fields: {
      customerRetentionRate: {
        id: 'customer-retention-rate',
        type: FieldType.dropdown,
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
    nextNode: 'customer-churn-rate',
  },

  q12: {
    sectionTitle: 'Customer Churn Rate',
    sectionId: 'customer-churn-rate',
    firstField: 'customerChurnRate',
    fields: {
      customerChurnRate: {
        id: 'customer-churn-rate',
        type: FieldType.dropdown,
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
    nextNode: 'ai-churn-prediction',
  },

  q13: {
    sectionTitle: 'AI Churn Prediction',
    sectionId: 'ai-churn-prediction',
    firstField: 'aiChurnPrediction',
    fields: {
      aiChurnPrediction: {
        id: 'ai-churn-prediction',
        type: FieldType.dropdown,
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
    nextNode: 'customer-segmentation-retention',
  },

  q14: {
    sectionTitle: 'Customer Segmentation Retention',
    sectionId: 'customer-segmentation-retention',
    firstField: 'customerSegmentationRetention',
    fields: {
      customerSegmentationRetention: {
        id: 'customer-segmentation-retention',
        type: FieldType.dropdown,
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
    nextNode: 'retention-strategies',
  },

  q15: {
    sectionTitle: 'Retention Strategies',
    sectionId: 'retention-strategies',
    firstField: 'retentionStrategies',
    fields: {
      retentionStrategies: {
        id: 'retention-strategies',
        type: FieldType.dropdown,
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
    nextNode: 'repeat-customer-revenue',
  },

  q16: {
    sectionTitle: 'Repeat Customer Revenue',
    sectionId: 'repeat-customer-revenue',
    firstField: 'repeatCustomerRevenue',
    fields: {
      repeatCustomerRevenue: {
        id: 'repeat-customer-revenue',
        type: FieldType.dropdown,
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
    nextNode: 'estimated-clv',
  },

  q17: {
    sectionTitle: 'Estimated CLV',
    sectionId: 'estimated-clv',
    firstField: 'estimatedClv',
    fields: {
      estimatedClv: {
        id: 'estimated-clv',
        type: FieldType.dropdown,
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
    nextNode: 'clv-vs-cac',
  },

  q18: {
    sectionTitle: 'CLV vs CAC',
    sectionId: 'clv-vs-cac',
    firstField: 'clvVsCac',
    fields: {
      clvVsCac: {
        id: 'clv-vs-cac',
        type: FieldType.dropdown,
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
    nextNode: 'ai-clv-forecasting',
  },

  q19: {
    sectionTitle: 'AI CLV Forecasting',
    sectionId: 'ai-clv-forecasting',
    firstField: 'aiClvForecasting',
    fields: {
      aiClvForecasting: {
        id: 'ai-clv-forecasting',
        type: FieldType.dropdown,
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
    nextNode: 'clv-customer-segmentation',
  },

  q20: {
    sectionTitle: 'CLV Customer Segmentation',
    sectionId: 'clv-customer-segmentation',
    firstField: 'clvCustomerSegmentation',
    fields: {
      clvCustomerSegmentation: {
        id: 'clv-customer-segmentation',
        type: FieldType.dropdown,
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
    nextNode: 'clv-increase-strategies',
  },

  q21: {
    sectionTitle: 'CLV Increase Strategies',
    sectionId: 'clv-increase-strategies',
    firstField: 'clvIncreaseStrategies',
    fields: {
      clvIncreaseStrategies: {
        id: 'clv-increase-strategies',
        type: FieldType.dropdown,
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
    nextNode: 'high-clv-revenue-percentage',
  },

  q22: {
    sectionTitle: 'High CLV Revenue Percentage',
    sectionId: 'high-clv-revenue-percentage',
    firstField: 'highClvRevenuePercentage',
    fields: {
      highClvRevenuePercentage: {
        id: 'high-clv-revenue-percentage',
        type: FieldType.dropdown,
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
    nextNode: 'lead-conversion-rate',
  },

  q23: {
    sectionTitle: 'Lead Conversion Rate',
    sectionId: 'lead-conversion-rate',
    firstField: 'leadConversionRate',
    fields: {
      leadConversionRate: {
        id: 'lead-conversion-rate',
        type: FieldType.dropdown,
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
    nextNode: 'website-conversion-rate',
  },

  q24: {
    sectionTitle: 'Website Conversion Rate',
    sectionId: 'website-conversion-rate',
    firstField: 'websiteConversionRate',
    fields: {
      websiteConversionRate: {
        id: 'website-conversion-rate',
        type: FieldType.dropdown,
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
    nextNode: 'ai-conversion-optimization',
  },

  q25: {
    sectionTitle: 'AI Conversion Optimization',
    sectionId: 'ai-conversion-optimization',
    firstField: 'aiConversionOptimization',
    fields: {
      aiConversionOptimization: {
        id: 'ai-conversion-optimization',
        type: FieldType.dropdown,
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
    nextNode: 'paid-vs-organic-conversions',
  },

  q26: {
    sectionTitle: 'Paid vs Organic Conversions',
    sectionId: 'paid-vs-organic-conversions',
    firstField: 'paidVsOrganicConversions',
    fields: {
      paidVsOrganicConversions: {
        id: 'paid-vs-organic-conversions',
        type: FieldType.dropdown,
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
    nextNode: 'abandoned-cart-rate',
  },

  q27: {
    sectionTitle: 'Abandoned Cart Rate',
    sectionId: 'abandoned-cart-rate',
    firstField: 'abandonedCartRate',
    fields: {
      abandonedCartRate: {
        id: 'abandoned-cart-rate',
        type: FieldType.dropdown,
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
    nextNode: 'conversion-optimization-strategies',
  },

  q28: {
    sectionTitle: 'Conversion Optimization Strategies',
    sectionId: 'conversion-optimization-strategies',
    firstField: 'conversionOptimizationStrategies',
    fields: {
      conversionOptimizationStrategies: {
        id: 'conversion-optimization-strategies',
        type: FieldType.dropdown,
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
    nextNode: 'monthly-marketing-budget',
  },

  q29: {
    sectionTitle: 'Monthly Marketing Budget',
    sectionId: 'monthly-marketing-budget',
    firstField: 'monthlyMarketingBudget',
    fields: {
      monthlyMarketingBudget: {
        id: 'monthly-marketing-budget',
        type: FieldType.dropdown,
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
    nextNode: 'marketing-budget-percentage',
  },

  q30: {
    sectionTitle: 'Marketing Budget Percentage',
    sectionId: 'marketing-budget-percentage',
    firstField: 'marketingBudgetPercentage',
    fields: {
      marketingBudgetPercentage: {
        id: 'marketing-budget-percentage',
        type: FieldType.dropdown,
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
    nextNode: 'marketing-budget-distribution',
  },

  q31: {
    sectionTitle: 'Marketing Budget Distribution',
    sectionId: 'marketing-budget-distribution',
    firstField: 'marketingBudgetDistribution',
    fields: {
      marketingBudgetDistribution: {
        id: 'marketing-budget-distribution',
        type: FieldType.dropdown,
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
    nextNode: 'dynamic-budget-adjustment',
  },

  q32: {
    sectionTitle: 'Dynamic Budget Adjustment',
    sectionId: 'dynamic-budget-adjustment',
    firstField: 'dynamicBudgetAdjustment',
    fields: {
      dynamicBudgetAdjustment: {
        id: 'dynamic-budget-adjustment',
        type: FieldType.dropdown,
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
    nextNode: 'cost-per-acquisition-channel',
  },

  q33: {
    sectionTitle: 'Cost Per Acquisition Channel',
    sectionId: 'cost-per-acquisition-channel',
    firstField: 'costPerAcquisitionChannel',
    fields: {
      costPerAcquisitionChannel: {
        id: 'cost-per-acquisition-channel',
        type: FieldType.dropdown,
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
    nextNode: 'budget-reallocation-frequency',
  },

  q34: {
    sectionTitle: 'Budget Reallocation Frequency',
    sectionId: 'budget-reallocation-frequency',
    firstField: 'budgetReallocationFrequency',
    fields: {
      budgetReallocationFrequency: {
        id: 'budget-reallocation-frequency',
        type: FieldType.dropdown,
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
    nextNode: 'marketing-budget-ebitda-impact',
  },

  q35: {
    sectionTitle: 'Marketing Budget EBITDA Impact',
    sectionId: 'marketing-budget-ebitda-impact',
    firstField: 'marketingBudgetEbitdaImpact',
    fields: {
      marketingBudgetEbitdaImpact: {
        id: 'marketing-budget-ebitda-impact',
        type: FieldType.dropdown,
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
    nextNode: 'customer-acquisition-cost',
  },

  q36: {
    sectionTitle: 'Customer Acquisition Cost',
    sectionId: 'customer-acquisition-cost',
    firstField: 'customerAcquisitionCost',
    fields: {
      customerAcquisitionCost: {
        id: 'customer-acquisition-cost',
        type: FieldType.dropdown,
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
    nextNode: 'return-on-ad-spend',
  },

  q37: {
    sectionTitle: 'Return on Ad Spend',
    sectionId: 'return-on-ad-spend',
    firstField: 'returnOnAdSpend',
    fields: {
      returnOnAdSpend: {
        id: 'return-on-ad-spend',
        type: FieldType.dropdown,
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
    nextNode: 'revenue-attribution-marketing',
  },

  q38: {
    sectionTitle: 'Revenue Attribution Marketing',
    sectionId: 'revenue-attribution-marketing',
    firstField: 'revenueAttributionMarketing',
    fields: {
      revenueAttributionMarketing: {
        id: 'revenue-attribution-marketing',
        type: FieldType.dropdown,
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
    nextNode: 'marketing-efficiency-ratio',
  },

  q39: {
    sectionTitle: 'Marketing Efficiency Ratio',
    sectionId: 'marketing-efficiency-ratio',
    firstField: 'marketingEfficiencyRatio',
    fields: {
      marketingEfficiencyRatio: {
        id: 'marketing-efficiency-ratio',
        type: FieldType.dropdown,
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
    nextNode: 'marketing-spend-optimization',
  },

  q40: {
    sectionTitle: 'Marketing Spend Optimization',
    sectionId: 'marketing-spend-optimization',
    firstField: 'marketingSpendOptimization',
    fields: {
      marketingSpendOptimization: {
        id: 'marketing-spend-optimization',
        type: FieldType.dropdown,
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
    nextNode: 'marketing-profitability-ebitda',
  },

  q41: {
    sectionTitle: 'Marketing Profitability EBITDA',
    sectionId: 'marketing-profitability-ebitda',
    firstField: 'marketingProfitabilityEbitda',
    fields: {
      marketingProfitabilityEbitda: {
        id: 'marketing-profitability-ebitda',
        type: FieldType.dropdown,
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
    nextNode: 'social-media-follower-count',
  },

  q42: {
    sectionTitle: 'Social Media Follower Count',
    sectionId: 'social-media-follower-count',
    firstField: 'socialMediaFollowerCount',
    fields: {
      socialMediaFollowerCount: {
        id: 'social-media-follower-count',
        type: FieldType.dropdown,
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
    nextNode: 'social-media-engagement-rate',
  },

  q43: {
    sectionTitle: 'Social Media Engagement Rate',
    sectionId: 'social-media-engagement-rate',
    firstField: 'socialMediaEngagementRate',
    fields: {
      socialMediaEngagementRate: {
        id: 'social-media-engagement-rate',
        type: FieldType.dropdown,
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
    nextNode: 'content-posting-frequency',
  },

  q44: {
    sectionTitle: 'Content Posting Frequency',
    sectionId: 'content-posting-frequency',
    firstField: 'contentPostingFrequency',
    fields: {
      contentPostingFrequency: {
        id: 'content-posting-frequency',
        type: FieldType.dropdown,
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
    nextNode: 'influencer-partnerships-social',
  },

  q45: {
    sectionTitle: 'Influencer Partnerships Social',
    sectionId: 'influencer-partnerships-social',
    firstField: 'influencerPartnershipsSocial',
    fields: {
      influencerPartnershipsSocial: {
        id: 'influencer-partnerships-social',
        type: FieldType.dropdown,
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
    nextNode: 'social-media-campaign-effectiveness',
  },

  q46: {
    sectionTitle: 'Social Media Campaign Effectiveness',
    sectionId: 'social-media-campaign-effectiveness',
    firstField: 'socialMediaCampaignEffectiveness',
    fields: {
      socialMediaCampaignEffectiveness: {
        id: 'social-media-campaign-effectiveness',
        type: FieldType.dropdown,
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
    nextNode: 'social-media-investor-relations',
  },

  q47: {
    sectionTitle: 'Social Media Investor Relations',
    sectionId: 'social-media-investor-relations',
    firstField: 'socialMediaInvestorRelations',
    fields: {
      socialMediaInvestorRelations: {
        id: 'social-media-investor-relations',
        type: FieldType.dropdown,
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
    nextNode: 'social-media-traffic-leads',
  },

  q48: {
    sectionTitle: 'Social Media Traffic Leads',
    sectionId: 'social-media-traffic-leads',
    firstField: 'socialMediaTrafficLeads',
    fields: {
      socialMediaTrafficLeads: {
        id: 'social-media-traffic-leads',
        type: FieldType.dropdown,
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
    nextNode: 'media-coverage-recognition',
  },

  q49: {
    sectionTitle: 'Media Coverage Recognition',
    sectionId: 'media-coverage-recognition',
    firstField: 'mediaCoverageRecognition',
    fields: {
      mediaCoverageRecognition: {
        id: 'media-coverage-recognition',
        type: FieldType.dropdown,
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
    nextNode: 'brand-sentiment-reputation-tracking',
  },

  q50: {
    sectionTitle: 'Brand Sentiment Reputation Tracking',
    sectionId: 'brand-sentiment-reputation-tracking',
    firstField: 'brandSentimentReputationTracking',
    fields: {
      brandSentimentReputationTracking: {
        id: 'brand-sentiment-reputation-tracking',
        type: FieldType.dropdown,
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
    nextNode: 'positive-feedback-percentage',
  },

  q51: {
    sectionTitle: 'Positive Feedback Percentage',
    sectionId: 'positive-feedback-percentage',
    firstField: 'positiveFeedbackPercentage',
    fields: {
      positiveFeedbackPercentage: {
        id: 'positive-feedback-percentage',
        type: FieldType.dropdown,
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
    nextNode: 'crisis-communication-strategy',
  },

  q52: {
    sectionTitle: 'Crisis Communication Strategy',
    sectionId: 'crisis-communication-strategy',
    firstField: 'crisisCommunicationStrategy',
    fields: {
      crisisCommunicationStrategy: {
        id: 'crisis-communication-strategy',
        type: FieldType.dropdown,
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
    nextNode: 'global-partnerships',
  },

  q53: {
    sectionTitle: 'Global Partnerships',
    sectionId: 'global-partnerships',
    firstField: 'globalPartnerships',
    fields: {
      globalPartnerships: {
        id: 'global-partnerships',
        type: FieldType.dropdown,
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
    nextNode: 'industry-events-participation',
  },

  q54: {
    sectionTitle: 'Industry Events Participation',
    sectionId: 'industry-events-participation',
    firstField: 'industryEventsParticipation',
    fields: {
      industryEventsParticipation: {
        id: 'industry-events-participation',
        type: FieldType.dropdown,
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
    nextNode: 'negative-pr-management',
  },

  q55: {
    sectionTitle: 'Negative PR Management',
    sectionId: 'negative-pr-management',
    firstField: 'negativePrManagement',
    fields: {
      negativePrManagement: {
        id: 'negative-pr-management',
        type: FieldType.dropdown,
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
