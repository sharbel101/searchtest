import { FieldType } from '@/components/Zustand store data/MainFlow/flow';

export const M_Early_VC_Flow = {
  q1: {
    sectionTitle: 'CRM System',
    sectionId: 'crm-system',
    firstField: 'crmSystem',
    fields: {
      crmSystem: {
        id: 'crm-system',
        type: FieldType.dropdown,
        label: 'What CRM system do you currently use?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_crm',
            value: 'No structured CRM system',
          },
          {
            id: 'excel_manual_tracking',
            value: 'Excel/Google Sheets/manual tracking',
          },
          {
            id: 'custom_built_crm',
            value: 'Custom-built CRM system',
          },
          {
            id: 'top_tier_crm',
            value:
              'Salesforce, HubSpot, Zoho, Pipedrive, or other top-tier CRM',
          },
        ],
      },
    },
    nextNode: 'active-customer-contacts',
  },

  q2: {
    sectionTitle: 'Active Customer Contacts',
    sectionId: 'active-customer-contacts',
    firstField: 'activeCustomerContacts',
    fields: {
      activeCustomerContacts: {
        id: 'active-customer-contacts',
        type: FieldType.dropdown,
        label:
          'How many active customer contacts are currently stored in your CRM?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_1000',
            value: 'Below 1,000',
          },
          {
            id: '1000_4999',
            value: '1,000 - 4,999',
          },
          {
            id: '5000_9999',
            value: '5,000 - 9,999',
          },
          {
            id: '10000_plus',
            value: '10,000+',
          },
        ],
      },
    },
    nextNode: 'crm-automation',
  },

  q3: {
    sectionTitle: 'CRM Automation',
    sectionId: 'crm-automation',
    firstField: 'crmAutomation',
    fields: {
      crmAutomation: {
        id: 'crm-automation',
        type: FieldType.dropdown,
        label:
          'How automated is your CRM workflow (e.g., lead scoring, automated follow-ups, pipeline tracking)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'minimal_automation',
            value: 'Minimal automation (manual entry, limited reporting)',
          },
          {
            id: 'partially_automated',
            value:
              'Partially automated (email workflows, lead tracking, but no AI insights)',
          },
          {
            id: 'fully_automated',
            value:
              'Fully automated (AI-driven, predictive analytics, real-time tracking)',
          },
        ],
      },
    },
    nextNode: 'crm-integration',
  },

  q4: {
    sectionTitle: 'CRM Integration',
    sectionId: 'crm-integration',
    firstField: 'crmIntegration',
    fields: {
      crmIntegration: {
        id: 'crm-integration',
        type: FieldType.dropdown,
        label:
          'How well is your CRM integrated with other tools (email marketing, social media, sales pipelines, etc.)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_integration',
            value: 'No integration, CRM operates in isolation',
          },
          {
            id: 'partially_integrated',
            value: 'Partially integrated (some tools connected, but not all)',
          },
          {
            id: 'fully_integrated',
            value: 'Fully integrated across multiple platforms',
          },
        ],
      },
    },
    nextNode: 'customer-satisfaction-measurement',
  },

  // B) Customer Satisfaction Rate

  q5: {
    sectionTitle: 'Customer Satisfaction Measurement',
    sectionId: 'customer-satisfaction-measurement',
    firstField: 'customerSatisfactionMeasurement',
    fields: {
      customerSatisfactionMeasurement: {
        id: 'customer-satisfaction-measurement',
        type: FieldType.dropdown,
        label: 'How do you currently measure customer satisfaction?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_tracking',
            value: 'No structured tracking',
          },
          {
            id: 'online_reviews_testimonials',
            value: 'Online reviews/testimonials',
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
    nextNode: 'net-promoter-score',
  },

  q6: {
    sectionTitle: 'Net Promoter Score',
    sectionId: 'net-promoter-score',
    firstField: 'netPromoterScore',
    fields: {
      netPromoterScore: {
        id: 'net-promoter-score',
        type: FieldType.dropdown,
        label: 'What is your current Net Promoter Score (NPS)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_30_not_measured',
            value: 'Below 30 or not measured',
          },
          {
            id: '30_49_average',
            value: '30-49 (Average)',
          },
          {
            id: '50_69_very_good',
            value: '50-69 (Very good)',
          },
          {
            id: '70_plus_world_class',
            value: '70+ (World-class)',
          },
        ],
      },
    },
    nextNode: 'positive-reviews-percentage',
  },

  q7: {
    sectionTitle: 'Positive Reviews Percentage',
    sectionId: 'positive-reviews-percentage',
    firstField: 'positiveReviewsPercentage',
    fields: {
      positiveReviewsPercentage: {
        id: 'positive-reviews-percentage',
        type: FieldType.dropdown,
        label:
          'What percentage of customers leave positive reviews or testimonials?',
        required: true,
        nextField: 'customerSatisfactionRate',
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
      customerSatisfactionRate: {
        id: 'customer-satisfaction-rate',
        type: FieldType.text,
        label:
          'What is your customer satisfaction rate? Enter a percentage number between 0% and 100%',
        required: true,
        nextField: null,
        min: 0,
        max: 100,
        suffix: '%',
      },
    },
    nextNode: 'feedback-adjustment-frequency',
  },

  q8: {
    sectionTitle: 'Feedback Adjustment Frequency',
    sectionId: 'feedback-adjustment-frequency',
    firstField: 'feedbackAdjustmentFrequency',
    fields: {
      feedbackAdjustmentFrequency: {
        id: 'feedback-adjustment-frequency',
        type: FieldType.dropdown,
        label:
          'How frequently do you adjust your product/service based on customer feedback?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'rarely_make_changes',
            value: 'We rarely make changes based on feedback',
          },
          {
            id: 'adjust_periodically',
            value: 'We adjust periodically based on major feedback',
          },
          {
            id: 'continuous_improvement',
            value:
              'We have a continuous improvement loop (weekly/monthly updates)',
          },
        ],
      },
    },
    nextNode: 'customer-retention-rate',
  },

  // C) Customer Retention Rate

  q9: {
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
            id: '80_plus_strong',
            value: '80%+ (Strong retention)',
          },
        ],
      },
    },
    nextNode: 'customer-churn-rate',
  },

  q10: {
    sectionTitle: 'Customer Churn Rate',
    sectionId: 'customer-churn-rate',
    firstField: 'customerChurnRate',
    fields: {
      customerChurnRate: {
        id: 'customer-churn-rate',
        type: FieldType.dropdown,
        label: 'What is the average customer churn rate per month?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'above_20_not_tracked',
            value: 'Above 20% or not tracked',
          },
          {
            id: '10_20_percent',
            value: '10%-20%',
          },
          {
            id: '5_10_percent',
            value: '5%-10%',
          },
          {
            id: 'below_5_percent',
            value: 'Below 5%',
          },
        ],
      },
    },
    nextNode: 'retention-segmentation',
  },

  q11: {
    sectionTitle: 'Retention Segmentation',
    sectionId: 'retention-segmentation',
    firstField: 'retentionSegmentation',
    fields: {
      retentionSegmentation: {
        id: 'retention-segmentation',
        type: FieldType.dropdown,
        label: 'Do you segment customers based on retention behavior?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_segmentation',
            value: 'No segmentation based on retention behavior',
          },
          {
            id: 'segment_not_systematic',
            value: "We segment customers but don't act on it systematically",
          },
          {
            id: 'advanced_segmentation',
            value: 'Yes, we have advanced retention segmentation',
          },
        ],
      },
    },
    nextNode: 'churn-reasons',
  },

  q12: {
    sectionTitle: 'Churn Reasons',
    sectionId: 'churn-reasons',
    firstField: 'churnReasons',
    fields: {
      churnReasons: {
        id: 'churn-reasons',
        type: FieldType.dropdown,
        label:
          'What are the top reasons customers leave your service? (Multiple choices allowed.)',
        required: true,
        nextField: 'customerRetentionRateInput',
        options: [
          {
            id: 'pricing',
            value: 'Pricing',
          },
          {
            id: 'poor_user_experience',
            value: 'Poor user experience',
          },
          {
            id: 'lack_product_market_fit',
            value: 'Lack of product-market fit',
          },
          {
            id: 'dont_track_churn',
            value: "We don't track reasons for churn",
          },
        ],
      },
      customerRetentionRateInput: {
        id: 'customer-retention-rate-input',
        type: FieldType.text,
        label:
          'What is your customer retention rate? Enter a percentage number between 0% and 100%',
        required: true,
        nextField: null,
        min: 0,
        max: 100,
        suffix: '%',
      },
    },
    nextNode: 'retention-strategies',
  },

  q13: {
    sectionTitle: 'Retention Strategies',
    sectionId: 'retention-strategies',
    firstField: 'retentionStrategies',
    fields: {
      retentionStrategies: {
        id: 'retention-strategies',
        type: FieldType.dropdown,
        label:
          'What retention strategies are currently in place? (Select all that apply.)',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_strategy',
            value: 'No structured retention strategy',
          },
          {
            id: 'email_sms_campaigns',
            value: 'Email/SMS re-engagement campaigns',
          },
          {
            id: 'proactive_support',
            value: 'Proactive customer support & engagement',
          },
          {
            id: 'loyalty_programs',
            value: 'Loyalty programs/referral incentives',
          },
        ],
      },
    },
    nextNode: 'customer-lifetime-value',
  },

  // D) Customer Lifetime Value (CLV)

  q14: {
    sectionTitle: 'Customer Lifetime Value',
    sectionId: 'customer-lifetime-value',
    firstField: 'customerLifetimeValue',
    fields: {
      customerLifetimeValue: {
        id: 'customer-lifetime-value',
        type: FieldType.dropdown,
        label: 'What is your current estimated Customer Lifetime Value (CLV)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_200_not_calculated',
            value: 'Below $200 or not calculated',
          },
          {
            id: '200_499',
            value: '$200 - $499',
          },
          {
            id: '500_999',
            value: '$500 - $999',
          },
          {
            id: '1000_plus',
            value: '$1,000+',
          },
        ],
      },
    },
    nextNode: 'clv-vs-cac',
  },

  q15: {
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
        nextField: 'customerLifetimeValueInput',
        options: [
          {
            id: 'clv_equal_lower_cac',
            value: 'CLV is equal to or lower than CAC',
          },
          {
            id: 'clv_2x_cac',
            value: 'CLV is 2x CAC',
          },
          {
            id: 'clv_3x_4_9x_cac',
            value: 'CLV is 3x-4.9x CAC',
          },
          {
            id: 'clv_5x_plus_cac',
            value: 'CLV is 5x+ CAC',
          },
        ],
      },
      customerLifetimeValueInput: {
        id: 'customer-lifetime-value-input',
        type: FieldType.text,
        label:
          'What is your customer lifetime value? Enter a finite number in USD',
        required: true,
        nextField: null,
        min: 0,
        prefix: '$',
      },
    },
    nextNode: 'clv-segmentation',
  },

  q16: {
    sectionTitle: 'CLV Segmentation',
    sectionId: 'clv-segmentation',
    firstField: 'clvSegmentation',
    fields: {
      clvSegmentation: {
        id: 'clv-segmentation',
        type: FieldType.dropdown,
        label:
          'Do you segment customers based on CLV (e.g., high-value vs. low-value customers)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_clv_segmentation',
            value: "No, we don't track CLV segmentation",
          },
          {
            id: 'some_clv_no_strategy',
            value: 'We have some CLV segmentation but no structured strategy',
          },
          {
            id: 'segment_prioritize_high_value',
            value:
              'Yes, we segment customers and prioritize high-value accounts',
          },
        ],
      },
    },
    nextNode: 'clv-improvement-strategies',
  },

  q17: {
    sectionTitle: 'CLV Improvement Strategies',
    sectionId: 'clv-improvement-strategies',
    firstField: 'clvImprovementStrategies',
    fields: {
      clvImprovementStrategies: {
        id: 'clv-improvement-strategies',
        type: FieldType.dropdown,
        label:
          'What strategies have you implemented to increase CLV? (Select all that apply.)',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_clv_strategy',
            value: 'No structured CLV improvement strategy',
          },
          {
            id: 'loyalty_retention_programs',
            value: 'Customer loyalty & retention programs',
          },
          {
            id: 'subscription_recurring_revenue',
            value: 'Subscription models & recurring revenue',
          },
          {
            id: 'upselling_cross_selling',
            value: 'Upselling & cross-selling',
          },
        ],
      },
    },
    nextNode: 'repeat-customer-revenue',
  },

  q18: {
    sectionTitle: 'Repeat Customer Revenue',
    sectionId: 'repeat-customer-revenue',
    firstField: 'repeatCustomerRevenue',
    fields: {
      repeatCustomerRevenue: {
        id: 'repeat-customer-revenue',
        type: FieldType.dropdown,
        label: 'What percentage of your revenue comes from repeat customers?',
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

  // E) Conversion Rates

  q19: {
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
            id: 'below_5_not_tracked',
            value: 'Below 5% or not tracked',
          },
          {
            id: '5_9_percent',
            value: '5%-9%',
          },
          {
            id: '10_19_percent',
            value: '10%-19%',
          },
          {
            id: '20_plus_strong',
            value: '20%+ (Strong conversion)',
          },
        ],
      },
    },
    nextNode: 'website-conversion-rate',
  },

  q20: {
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
            id: 'below_2_not_tracked',
            value: 'Below 2% or not tracked',
          },
          {
            id: '2_4_9_percent',
            value: '2%-4.9%',
          },
          {
            id: '5_9_9_percent',
            value: '5%-9.9%',
          },
          {
            id: '10_plus_percent',
            value: '10%+',
          },
        ],
      },
    },
    nextNode: 'high-converting-channels',
  },

  q21: {
    sectionTitle: 'High Converting Channels',
    sectionId: 'high-converting-channels',
    firstField: 'highConvertingChannels',
    fields: {
      highConvertingChannels: {
        id: 'high-converting-channels',
        type: FieldType.dropdown,
        label:
          'Which marketing channels provide the highest conversion rates? (Select the primary sources of high-converting leads.)',
        required: true,
        nextField: null,
        options: [
          {
            id: 'paid_ads',
            value: 'Paid ads (Google, Facebook, LinkedIn, etc.)',
          },
          {
            id: 'organic_search',
            value: 'Organic search (SEO, content marketing)',
          },
          {
            id: 'referral_partnerships',
            value: 'Referral & partnerships',
          },
          {
            id: 'email_marketing',
            value: 'Email marketing',
          },
          {
            id: 'other',
            value: 'Other (please specify)',
          },
        ],
      },
    },
    nextNode: 'abandoned-cart-rate',
  },

  q22: {
    sectionTitle: 'Abandoned Cart Rate',
    sectionId: 'abandoned-cart-rate',
    firstField: 'abandonedCartRate',
    fields: {
      abandonedCartRate: {
        id: 'abandoned-cart-rate',
        type: FieldType.dropdown,
        label: 'What is your abandoned cart rate (if applicable)?',
        required: true,
        nextField: null,
        options: [
          {
            id: '60_plus_not_tracked',
            value: '60%+ or not tracked',
          },
          {
            id: '40_59_percent',
            value: '40%-59%',
          },
          {
            id: '20_39_percent',
            value: '20%-39%',
          },
          {
            id: 'below_20_percent',
            value: 'Below 20%',
          },
        ],
      },
    },
    nextNode: 'conversion-optimization-strategies',
  },

  q23: {
    sectionTitle: 'Conversion Optimization Strategies',
    sectionId: 'conversion-optimization-strategies',
    firstField: 'conversionOptimizationStrategies',
    fields: {
      conversionOptimizationStrategies: {
        id: 'conversion-optimization-strategies',
        type: FieldType.dropdown,
        label:
          'What strategies have you implemented to improve conversion rates? (Select all that apply.)',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_optimization',
            value: 'No structured conversion optimization strategy',
          },
          {
            id: 'retargeting_lost_leads',
            value: 'Retargeting lost leads',
          },
          {
            id: 'optimized_checkout',
            value: 'Optimized checkout process',
          },
          {
            id: 'personalization_segmentation',
            value: 'Personalization & segmentation',
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

  // F) Marketing Budget

  q24: {
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
            id: 'below_20000',
            value: 'Below $20,000',
          },
          {
            id: '20000_49999',
            value: '$20,000 - $49,999',
          },
          {
            id: '50000_99999',
            value: '$50,000 - $99,999',
          },
          {
            id: '100000_plus',
            value: '$100,000+',
          },
        ],
      },
    },
    nextNode: 'marketing-revenue-percentage',
  },

  q25: {
    sectionTitle: 'Marketing Revenue Percentage',
    sectionId: 'marketing-revenue-percentage',
    firstField: 'marketingRevenuePercentage',
    fields: {
      marketingRevenuePercentage: {
        id: 'marketing-revenue-percentage',
        type: FieldType.dropdown,
        label: 'What percentage of total revenue is allocated to marketing?',
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
            id: '10_19_percent',
            value: '10%-19%',
          },
          {
            id: '20_plus_percent',
            value: '20%+',
          },
        ],
      },
    },
    nextNode: 'marketing-budget-distribution',
  },

  q26: {
    sectionTitle: 'Marketing Budget Distribution',
    sectionId: 'marketing-budget-distribution',
    firstField: 'marketingBudgetDistribution',
    fields: {
      marketingBudgetDistribution: {
        id: 'marketing-budget-distribution',
        type: FieldType.dropdown,
        label:
          'How is your marketing budget distributed across different channels? (Select all that apply, with approximate percentage allocation.)',
        required: true,
        nextField: null,
        options: [
          {
            id: 'paid_ads',
            value: 'Paid Ads (Google, Facebook, LinkedIn, etc.)',
          },
          {
            id: 'content_marketing',
            value: 'Content Marketing (SEO, blogs, video production)',
          },
          {
            id: 'social_media',
            value: 'Social Media (organic and influencer collaborations)',
          },
          {
            id: 'offline_marketing',
            value: 'Offline Marketing (events, PR, partnerships)',
          },
          {
            id: 'other',
            value: 'Other (please specify)',
          },
        ],
      },
    },
    nextNode: 'marketing-effectiveness-measurement',
  },

  q27: {
    sectionTitle: 'Marketing Effectiveness Measurement',
    sectionId: 'marketing-effectiveness-measurement',
    firstField: 'marketingEffectivenessMeasurement',
    fields: {
      marketingEffectivenessMeasurement: {
        id: 'marketing-effectiveness-measurement',
        type: FieldType.dropdown,
        label: 'How do you measure the effectiveness of your marketing budget?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_tracking',
            value: 'No structured marketing budget tracking',
          },
          {
            id: 'lead_conversion_tracking',
            value: 'Lead generation & conversion tracking',
          },
          {
            id: 'cac_vs_clv',
            value: 'Customer Acquisition Cost (CAC) vs. CLV',
          },
          {
            id: 'roi_per_channel',
            value: 'ROI per channel',
          },
        ],
      },
    },
    nextNode: 'budget-adjustment-frequency',
  },

  q28: {
    sectionTitle: 'Budget Adjustment Frequency',
    sectionId: 'budget-adjustment-frequency',
    firstField: 'budgetAdjustmentFrequency',
    fields: {
      budgetAdjustmentFrequency: {
        id: 'budget-adjustment-frequency',
        type: FieldType.dropdown,
        label:
          'How frequently do you adjust your marketing budget based on performance?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_adjustments',
            value: 'No structured budget adjustments',
          },
          {
            id: 'biannual_adjustments',
            value: 'Biannual adjustments',
          },
          {
            id: 'quarterly_revisions',
            value: 'Quarterly budget revisions',
          },
          {
            id: 'monthly_data_based',
            value: 'Monthly based on data',
          },
        ],
      },
    },
    nextNode: 'customer-acquisition-cost',
  },
  // G) Marketing Profitability

  q29: {
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

  q30: {
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
            id: 'below_1_5x_not_tracked',
            value: 'Below 1.5x or not tracked',
          },
          {
            id: '1_5x_2_9x_roi',
            value: '1.5x-2.9x ROI',
          },
          {
            id: '3x_4_9x_roi',
            value: '3x-4.9x ROI',
          },
          {
            id: '5x_plus_roi',
            value: '5x+ ROI',
          },
        ],
      },
    },
    nextNode: 'revenue-attributed-marketing',
  },

  q31: {
    sectionTitle: 'Revenue Attributed to Marketing',
    sectionId: 'revenue-attributed-marketing',
    firstField: 'revenueAttributedMarketing',
    fields: {
      revenueAttributedMarketing: {
        id: 'revenue-attributed-marketing',
        type: FieldType.dropdown,
        label:
          'What percentage of total revenue is directly attributed to marketing efforts?',
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
            id: '50_plus_revenue',
            value: '50%+ of total revenue',
          },
        ],
      },
    },
    nextNode: 'marketing-efficiency-ratio',
  },

  q32: {
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
            id: 'below_1_5x_not_tracked',
            value: 'Below 1.5x or not tracked',
          },
          {
            id: '1_5x_2_9x',
            value: '1.5x-2.9x',
          },
          {
            id: '3x_4_9x',
            value: '3x-4.9x',
          },
          {
            id: '5x_plus',
            value: '5x+',
          },
        ],
      },
    },
    nextNode: 'marketing-profitability-strategies',
  },

  q33: {
    sectionTitle: 'Marketing Profitability Strategies',
    sectionId: 'marketing-profitability-strategies',
    firstField: 'marketingProfitabilityStrategies',
    fields: {
      marketingProfitabilityStrategies: {
        id: 'marketing-profitability-strategies',
        type: FieldType.dropdown,
        label:
          'What strategies have you implemented to improve marketing profitability?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_optimization',
            value: 'No structured profitability optimization',
          },
          {
            id: 'cost_cutting_campaigns',
            value: 'Cost-cutting on low-performing campaigns',
          },
          {
            id: 'ai_driven_automation',
            value: 'AI-driven marketing automation',
          },
          {
            id: 'performance_based_optimization',
            value: 'Performance-based ad optimization',
          },
        ],
      },
    },
    nextNode: 'social-media-follower-count',
  },

  // H) Social Media Presence

  q34: {
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
            id: 'below_10000_not_tracked',
            value: 'Below 10,000 or not tracked',
          },
          {
            id: '10000_49999',
            value: '10,000 - 49,999',
          },
          {
            id: '50000_99999',
            value: '50,000 - 99,999',
          },
          {
            id: '100000_plus',
            value: '100,000+',
          },
        ],
      },
    },
    nextNode: 'social-media-engagement-rate',
  },

  q35: {
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
            id: 'below_1_not_tracked',
            value: 'Below 1% or not tracked',
          },
          {
            id: '1_2_9_percent',
            value: '1%-2.9%',
          },
          {
            id: '3_4_9_percent',
            value: '3%-4.9%',
          },
          {
            id: '5_plus_percent',
            value: '5%+',
          },
        ],
      },
    },
    nextNode: 'content-posting-frequency',
  },

  q36: {
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
            id: 'less_than_once_week_irregular',
            value: 'Less than once a week or irregular',
          },
          {
            id: 'once_week',
            value: 'Once a week',
          },
          {
            id: '3_5_times_week',
            value: '3-5 times per week',
          },
          {
            id: 'daily',
            value: 'Daily',
          },
        ],
      },
    },
    nextNode: 'paid-social-media-ads',
  },

  q37: {
    sectionTitle: 'Paid Social Media Ads',
    sectionId: 'paid-social-media-ads',
    firstField: 'paidSocialMediaAds',
    fields: {
      paidSocialMediaAds: {
        id: 'paid-social-media-ads',
        type: FieldType.dropdown,
        label:
          'Do you use paid social media ads to increase reach and engagement?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_organic_only',
            value: 'No, we only rely on organic social media',
          },
          {
            id: 'tested_not_regular',
            value: "We have tested ads but don't use them regularly",
          },
          {
            id: 'yes_structured_campaigns',
            value: 'Yes, we run structured ad campaigns',
          },
        ],
      },
    },
    nextNode: 'social-media-effectiveness',
  },

  q38: {
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
            id: 'follower_growth_trends',
            value: 'Follower growth trends',
          },
          {
            id: 'engagement_analytics',
            value: 'Engagement analytics',
          },
          {
            id: 'conversion_tracking',
            value: 'Conversion tracking (e.g., clicks to sales)',
          },
        ],
      },
    },
    nextNode: 'media-coverage',
  },

  // I) External Image & Reputation

  q39: {
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
            id: 'no_media_no_plans',
            value: 'No media presence and no plans yet',
          },
          {
            id: 'no_coverage_working_on_it',
            value: 'No press coverage yet, but we are working on it',
          },
          {
            id: 'some_mentions_not_mainstream',
            value: 'Some media mentions, but not mainstream coverage',
          },
          {
            id: 'yes_major_publications',
            value:
              'Yes, featured in major publications (Forbes, TechCrunch, Bloomberg, etc.)',
          },
        ],
      },
    },
    nextNode: 'positive-reviews-percentage',
  },

  q40: {
    sectionTitle: 'Positive Reviews Percentage',
    sectionId: 'positive-reviews-percentage',
    firstField: 'positiveReviewsPercentage',
    fields: {
      positiveReviewsPercentage: {
        id: 'positive-reviews-percentage',
        type: FieldType.dropdown,
        label:
          'What percentage of your online reviews or testimonials are positive?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_50_not_tracked',
            value: 'Below 50% or not tracked',
          },
          {
            id: '50_74_positive',
            value: '50%-74% positive',
          },
          {
            id: '75_89_positive',
            value: '75%-89% positive',
          },
          {
            id: '90_plus_positive',
            value: '90%+ positive reviews',
          },
        ],
      },
    },
    nextNode: 'brand-partnerships',
  },

  q41: {
    sectionTitle: 'Brand Partnerships',
    sectionId: 'brand-partnerships',
    firstField: 'brandPartnerships',
    fields: {
      brandPartnerships: {
        id: 'brand-partnerships',
        type: FieldType.dropdown,
        label:
          'Have you established partnerships with reputable brands, influencers, or investors?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_partnerships_collaborations',
            value: 'No partnerships or collaborations',
          },
          {
            id: 'no_partnerships_working_on_it',
            value: 'No partnerships yet, but working on it',
          },
          {
            id: 'some_partnerships_early_stage',
            value: 'We have some partnerships, but they are still early-stage',
          },
          {
            id: 'yes_multiple_strategic',
            value: 'Yes, multiple strategic partnerships',
          },
        ],
      },
    },
    nextNode: 'reputation-management',
  },

  q42: {
    sectionTitle: 'Reputation Management',
    sectionId: 'reputation-management',
    firstField: 'reputationManagement',
    fields: {
      reputationManagement: {
        id: 'reputation-management',
        type: FieldType.dropdown,
        label:
          'How do you manage and respond to negative feedback or PR risks?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_structured_plan',
            value:
              "We don't have a structured plan for handling reputation risks",
          },
          {
            id: 'respond_as_arise',
            value: 'We respond to issues as they arise',
          },
          {
            id: 'structured_crisis_plan',
            value: 'We have a structured crisis communication plan',
          },
        ],
      },
    },
    nextNode: 'industry-events-participation',
  },

  q43: {
    sectionTitle: 'Industry Events Participation',
    sectionId: 'industry-events-participation',
    firstField: 'industryEventsParticipation',
    fields: {
      industryEventsParticipation: {
        id: 'industry-events-participation',
        type: FieldType.dropdown,
        label:
          'Have you participated in any industry events, awards, or sponsorships to enhance your reputation?',
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
            id: 'participated_not_consistently',
            value: 'We have participated in some events, but not consistently',
          },
          {
            id: 'yes_actively_participate',
            value:
              'Yes, we actively participate in major industry events and sponsorships',
          },
        ],
      },
    },
    nextNode: null,
  },
};
