import { FieldType } from '@/components/Zustand store data/MainFlow/flow';

export const M_Advanced_VC_Flow = {
  q1: {
    sectionTitle: 'CRM System Level',
    sectionId: 'crm-system-level',
    firstField: 'crmSystemLevel',
    fields: {
      crmSystemLevel: {
        id: 'crm-system-level',
        type: FieldType.dropdown,
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
    nextNode: 'crm-automation-level',
  },

  q2: {
    sectionTitle: 'CRM Automation Level',
    sectionId: 'crm-automation-level',
    firstField: 'crmAutomationLevel',
    fields: {
      crmAutomationLevel: {
        id: 'crm-automation-level',
        type: FieldType.dropdown,
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
    nextNode: 'crm-integration-level',
  },

  q3: {
    sectionTitle: 'CRM Integration Level',
    sectionId: 'crm-integration-level',
    firstField: 'crmIntegrationLevel',
    fields: {
      crmIntegrationLevel: {
        id: 'crm-integration-level',
        type: FieldType.dropdown,
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
    nextNode: 'global-crm-strategy',
  },

  q4: {
    sectionTitle: 'Global CRM Strategy',
    sectionId: 'global-crm-strategy',
    firstField: 'globalCrmStrategy',
    fields: {
      globalCrmStrategy: {
        id: 'global-crm-strategy',
        type: FieldType.dropdown,
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
    nextNode: 'customer-satisfaction-measurement',
  },

  q5: {
    sectionTitle: 'Customer Satisfaction Measurement',
    sectionId: 'customer-satisfaction-measurement',
    firstField: 'customerSatisfactionMeasurement',
    fields: {
      customerSatisfactionMeasurement: {
        id: 'customer-satisfaction-measurement',
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
    nextNode: 'current-nps-score',
  },

  q6: {
    sectionTitle: 'Current NPS Score',
    sectionId: 'current-nps-score',
    firstField: 'currentNpsScore',
    fields: {
      currentNpsScore: {
        id: 'current-nps-score',
        type: FieldType.dropdown,
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
    nextNode: 'feedback-collection-analysis',
  },

  q7: {
    sectionTitle: 'Feedback Collection and Analysis',
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
    nextNode: 'customer-satisfaction-rate-input',
  },

  q8: {
    sectionTitle: 'Customer Satisfaction Rate Input',
    sectionId: 'customer-satisfaction-rate-input',
    firstField: 'customerSatisfactionRateInput',
    fields: {
      customerSatisfactionRateInput: {
        id: 'customer-satisfaction-rate-input',
        type: FieldType.text,
        label:
          'What is your customer satisfaction rate? Enter a percentage number between 0% and 100%',
        required: true,
        nextField: null,
        min: 0,
        max: 100,
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
            id: 'weekly_real_time',
            value:
              'Weekly or real-time adjustments based on live customer sentiment',
          },
        ],
      },
    },
    nextNode: 'dissatisfied-customer-handling',
  },

  q10: {
    sectionTitle: 'Dissatisfied Customer Handling',
    sectionId: 'dissatisfied-customer-handling',
    firstField: 'dissatisfiedCustomerHandling',
    fields: {
      dissatisfiedCustomerHandling: {
        id: 'dissatisfied-customer-handling',
        type: FieldType.dropdown,
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
    nextNode: 'monthly-churn-rate',
  },

  q12: {
    sectionTitle: 'Monthly Churn Rate',
    sectionId: 'monthly-churn-rate',
    firstField: 'monthlyChurnRate',
    fields: {
      monthlyChurnRate: {
        id: 'monthly-churn-rate',
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
    nextNode: 'retention-customer-segmentation',
  },

  q14: {
    sectionTitle: 'Retention Customer Segmentation',
    sectionId: 'retention-customer-segmentation',
    firstField: 'retentionCustomerSegmentation',
    fields: {
      retentionCustomerSegmentation: {
        id: 'retention-customer-segmentation',
        type: FieldType.dropdown,
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
    nextNode: 'customer-retention-rate-input',
  },

  q16: {
    sectionTitle: 'Customer Retention Rate Input',
    sectionId: 'customer-retention-rate-input',
    firstField: 'customerRetentionRateInput',
    fields: {
      customerRetentionRateInput: {
        id: 'customer-retention-rate-input',
        type: FieldType.text,
        label:
          'What is your customer retention rate? Enter a percentage number between 0% and 100%',
        required: true,
        nextField: null,
        min: 0,
        max: 100,
      },
    },
    nextNode: 'current-clv-estimate',
  },

  q17: {
    sectionTitle: 'Current CLV Estimate',
    sectionId: 'current-clv-estimate',
    firstField: 'currentClvEstimate',
    fields: {
      currentClvEstimate: {
        id: 'current-clv-estimate',
        type: FieldType.dropdown,
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
    nextNode: 'clv-vs-cac-ratio',
  },

  q18: {
    sectionTitle: 'CLV vs CAC Ratio',
    sectionId: 'clv-vs-cac-ratio',
    firstField: 'clvVsCacRatio',
    fields: {
      clvVsCacRatio: {
        id: 'clv-vs-cac-ratio',
        type: FieldType.dropdown,
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
    nextNode: 'clv-optimization-strategies',
  },

  q21: {
    sectionTitle: 'CLV Optimization Strategies',
    sectionId: 'clv-optimization-strategies',
    firstField: 'clvOptimizationStrategies',
    fields: {
      clvOptimizationStrategies: {
        id: 'clv-optimization-strategies',
        type: FieldType.dropdown,
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
    nextNode: 'customer-lifetime-value-input',
  },

  q22: {
    sectionTitle: 'Customer Lifetime Value Input',
    sectionId: 'customer-lifetime-value-input',
    firstField: 'customerLifetimeValueInput',
    fields: {
      customerLifetimeValueInput: {
        id: 'customer-lifetime-value-input',
        type: FieldType.text,
        label:
          'What is your customer lifetime value? Enter a finite number in USD',
        required: true,
        nextField: null,
        min: 0,
      },
    },
    nextNode: 'repeat-customer-revenue-percentage',
  },

  q23: {
    sectionTitle: 'Repeat Customer Revenue Percentage',
    sectionId: 'repeat-customer-revenue-percentage',
    firstField: 'repeatCustomerRevenuePercentage',
    fields: {
      repeatCustomerRevenuePercentage: {
        id: 'repeat-customer-revenue-percentage',
        type: FieldType.dropdown,
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
    nextNode: 'lead-to-customer-conversion',
  },

  q24: {
    sectionTitle: 'Lead to Customer Conversion',
    sectionId: 'lead-to-customer-conversion',
    firstField: 'leadToCustomerConversion',
    fields: {
      leadToCustomerConversion: {
        id: 'lead-to-customer-conversion',
        type: FieldType.dropdown,
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
    nextNode: 'website-conversion-rate',
  },

  q25: {
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
    nextNode: 'ai-conversion-optimization',
  },

  q26: {
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
    nextNode: 'paid-vs-organic-conversions',
  },

  q27: {
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
    nextNode: 'abandoned-cart-rate',
  },

  q28: {
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

  q29: {
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
    sectionId: 'budget-optimization',
    firstField: 'budgetOptimization',
    fields: {
      budgetOptimization: {
        id: 'budget-optimization',
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
    nextNode: 'cost-per-acquisition',
  },

  q31: {
    sectionTitle: 'Cost Per Acquisition',
    sectionId: 'cost-per-acquisition',
    firstField: 'costPerAcquisition',
    fields: {
      costPerAcquisition: {
        id: 'cost-per-acquisition',
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
            id: 'below_50',
            value: 'Below $50 per customer',
          },
        ],
      },
    },
    nextNode: 'budget-reallocation-frequency',
  },

  q32: {
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
    nextNode: 'customer-acquisition-cost',
  },

  q33: {
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

  q34: {
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
    nextNode: 'revenue-attribution',
  },

  q35: {
    sectionTitle: 'Revenue Attribution',
    sectionId: 'revenue-attribution',
    firstField: 'revenueAttribution',
    fields: {
      revenueAttribution: {
        id: 'revenue-attribution',
        type: FieldType.dropdown,
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
    nextNode: 'marketing-efficiency-ratio',
  },

  q36: {
    sectionTitle: 'Marketing Efficiency Ratio',
    sectionId: 'marketing-efficiency-ratio',
    firstField: 'marketingEfficiencyRatio',
    fields: {
      marketingEfficiencyRatio: {
        id: 'marketing-efficiency-ratio',
        type: FieldType.dropdown,
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
    nextNode: 'ai-driven-profitability',
  },

  q37: {
    sectionTitle: 'AI-Driven Profitability Models',
    sectionId: 'ai-driven-profitability',
    firstField: 'aiDrivenProfitability',
    fields: {
      aiDrivenProfitability: {
        id: 'ai-driven-profitability',
        type: FieldType.dropdown,
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
    nextNode: 'spend-optimization',
  },

  q38: {
    sectionTitle: 'Spend Optimization',
    sectionId: 'spend-optimization',
    firstField: 'spendOptimization',
    fields: {
      spendOptimization: {
        id: 'spend-optimization',
        type: FieldType.dropdown,
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
    nextNode: 'social-media-followers',
  },

  q39: {
    sectionTitle: 'Social Media Followers',
    sectionId: 'social-media-followers',
    firstField: 'socialMediaFollowers',
    fields: {
      socialMediaFollowers: {
        id: 'social-media-followers',
        type: FieldType.dropdown,
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
    nextNode: 'engagement-rate',
  },

  q40: {
    sectionTitle: 'Engagement Rate',
    sectionId: 'engagement-rate',
    firstField: 'engagementRate',
    fields: {
      engagementRate: {
        id: 'engagement-rate',
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

  q41: {
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
    nextNode: 'influencer-partnerships',
  },

  q42: {
    sectionTitle: 'Influencer Partnerships',
    sectionId: 'influencer-partnerships',
    firstField: 'influencerPartnerships',
    fields: {
      influencerPartnerships: {
        id: 'influencer-partnerships',
        type: FieldType.dropdown,
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
    nextNode: 'social-media-effectiveness',
  },

  q43: {
    sectionTitle: 'Social Media Effectiveness',
    sectionId: 'social-media-effectiveness',
    firstField: 'socialMediaEffectiveness',
    fields: {
      socialMediaEffectiveness: {
        id: 'social-media-effectiveness',
        type: FieldType.dropdown,
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
    nextNode: 'social-media-integration',
  },

  q44: {
    sectionTitle: 'Social Media Integration',
    sectionId: 'social-media-integration',
    firstField: 'socialMediaIntegration',
    fields: {
      socialMediaIntegration: {
        id: 'social-media-integration',
        type: FieldType.dropdown,
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
    nextNode: 'media-coverage',
  },

  q45: {
    sectionTitle: 'Media Coverage',
    sectionId: 'media-coverage',
    firstField: 'mediaCoverage',
    fields: {
      mediaCoverage: {
        id: 'media-coverage',
        type: FieldType.dropdown,
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
    nextNode: 'brand-sentiment-tracking',
  },

  q46: {
    sectionTitle: 'Brand Sentiment Tracking',
    sectionId: 'brand-sentiment-tracking',
    firstField: 'brandSentimentTracking',
    fields: {
      brandSentimentTracking: {
        id: 'brand-sentiment-tracking',
        type: FieldType.dropdown,
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
    nextNode: 'positive-feedback-percentage',
  },

  q47: {
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
    nextNode: 'crisis-communication-strategy',
  },

  q48: {
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
    nextNode: 'global-partnerships',
  },

  q49: {
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
    nextNode: 'industry-events-participation',
  },

  q50: {
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
