import { FieldType } from '@/components/data/MainFlow/flow';

export const M_Angel_Phase_Flow = {
  q1: {
    sectionTitle: 'CRM System Usage',
    sectionId: 'crm-system-usage',
    firstField: 'crmSystemUsage',
    fields: {
      crmSystemUsage: {
        id: 'crm-system-usage',
        type: FieldType.Dropdown,
        label:
          'Do you currently use a CRM system to track customer interactions and data?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_crm_system',
            value: "No, we don't have a CRM system yet",
          },
          {
            id: 'manual_system',
            value: 'Yes, but we use a manual system (Excel, Google Sheets)',
          },
          {
            id: 'structured_crm_tool',
            value:
              'Yes, we use a structured CRM tool (Salesforce, HubSpot, Zoho, etc.)',
          },
        ],
      },
    },
    nextNode: 'customer-contacts-count',
  },

  q2: {
    sectionTitle: 'Customer Contacts Count',
    sectionId: 'customer-contacts-count',
    firstField: 'customerContactsCount',
    fields: {
      customerContactsCount: {
        id: 'customer-contacts-count',
        type: FieldType.Dropdown,
        label:
          'How many customer contacts do you currently have in your CRM database?',
        required: true,
        nextField: null,
        options: [
          {
            id: '1_50',
            value: '1-50',
          },
          {
            id: '51_200',
            value: '51-200',
          },
          {
            id: '201_500',
            value: '201-500',
          },
          {
            id: '500_plus',
            value: '500+',
          },
        ],
      },
    },
    nextNode: 'customer-engagement-frequency',
  },

  q3: {
    sectionTitle: 'Customer Engagement Frequency',
    sectionId: 'customer-engagement-frequency',
    firstField: 'customerEngagementFrequency',
    fields: {
      customerEngagementFrequency: {
        id: 'customer-engagement-frequency',
        type: FieldType.Dropdown,
        label:
          'How frequently do you engage with customers through CRM tools (email, SMS, follow-ups)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'rarely_never',
            value: 'Rarely/never',
          },
          {
            id: 'monthly',
            value: 'Monthly',
          },
          {
            id: 'weekly',
            value: 'Weekly',
          },
          {
            id: 'daily',
            value: 'Daily',
          },
        ],
      },
    },
    nextNode: 'customer-segmentation',
  },

  q4: {
    sectionTitle: 'Customer Segmentation',
    sectionId: 'customer-segmentation',
    firstField: 'customerSegmentation',
    fields: {
      customerSegmentation: {
        id: 'customer-segmentation',
        type: FieldType.Dropdown,
        label:
          'Do you segment your customers in your CRM (by behavior, demographics, spending, etc.)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_segmentation',
            value: "No, we don't use customer segmentation",
          },
          {
            id: 'basic_segmentation',
            value: 'We segment at a basic level',
          },
          {
            id: 'advanced_segmentation',
            value: 'Yes, we have advanced segmentation',
          },
        ],
      },
    },
    nextNode: 'feedback-collection',
  },

  q5: {
    sectionTitle: 'Feedback Collection',
    sectionId: 'feedback-collection',
    firstField: 'feedbackCollection',
    fields: {
      feedbackCollection: {
        id: 'feedback-collection',
        type: FieldType.Dropdown,
        label:
          'Do you actively collect customer feedback to measure satisfaction?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_feedback_collection',
            value: "No, we don't collect customer feedback yet",
          },
          {
            id: 'informal_feedback',
            value: 'Yes, but feedback is collected informally',
          },
          {
            id: 'structured_surveys',
            value: 'Yes, through structured surveys and reviews',
          },
        ],
      },
    },
    nextNode: 'customer-satisfaction-rating',
  },

  q6: {
    sectionTitle: 'Customer Satisfaction Rating',
    sectionId: 'customer-satisfaction-rating',
    firstField: 'customerSatisfactionRating',
    fields: {
      customerSatisfactionRating: {
        id: 'customer-satisfaction-rating',
        type: FieldType.Dropdown,
        label:
          'What is your current average customer satisfaction rating (from surveys, reviews, or feedback)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_50_not_measured',
            value: 'Below 50% or not measured',
          },
          {
            id: '50_74_satisfied',
            value: '50%-74% satisfied customers',
          },
          {
            id: '75_89_satisfied',
            value: '75%-89% satisfied customers',
          },
          {
            id: '90_plus_satisfied',
            value: '90%+ satisfied customers',
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
        type: FieldType.Dropdown,
        label: 'What is your Net Promoter Score (NPS) from customers?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_30_not_measured',
            value: 'Below 30 or not measured',
          },
          {
            id: '30_49_neutral_at_risk',
            value: '30-49 (Neutral, at risk of churn)',
          },
          {
            id: '50_69_good_needs_improvement',
            value: '50-69 (Good, but needs improvement)',
          },
          {
            id: '70_plus_highly_recommended',
            value: '70+ (Highly recommended)',
          },
        ],
      },
    },
    nextNode: 'negative-feedback-handling',
  },

  q8: {
    sectionTitle: 'Negative Feedback Handling',
    sectionId: 'negative-feedback-handling',
    firstField: 'negativeFeedbackHandling',
    fields: {
      negativeFeedbackHandling: {
        id: 'negative-feedback-handling',
        type: FieldType.Dropdown,
        label:
          'Have you received any negative reviews or customer complaints? If so, how do you handle them?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_negative_feedback',
            value: 'No, we have not received any negative feedback yet',
          },
          {
            id: 'complaints_reactive_handling',
            value: "We've had complaints but handle them reactively",
          },
          {
            id: 'structured_response_process',
            value:
              'Yes, we have received complaints and have a structured response process',
          },
        ],
      },
    },
    nextNode: 'customer-retention-rate',
  },

  q9: {
    sectionTitle: 'Customer Retention Rate',
    sectionId: 'customer-retention-rate',
    firstField: 'customerRetentionRate',
    fields: {
      customerRetentionRate: {
        id: 'customer-retention-rate',
        type: FieldType.Dropdown,
        label: 'What is your current customer retention rate?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_30_not_measured',
            value: 'Below 30% or not measured',
          },
          {
            id: '30_49_retention',
            value: '30%-49% retention',
          },
          {
            id: '50_74_retention',
            value: '50%-74% retention',
          },
          {
            id: '75_plus_retention',
            value: '75%+ retention',
          },
        ],
      },
    },
    nextNode: 'customer-churn-reasons',
  },

  q10: {
    sectionTitle: 'Customer Churn Reasons',
    sectionId: 'customer-churn-reasons',
    firstField: 'customerChurnReasons',
    fields: {
      customerChurnReasons: {
        id: 'customer-churn-reasons',
        type: FieldType.Dropdown,
        label:
          'What is the most common reason customers leave or stop using your product/service?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'pricing',
            value: 'Pricing',
          },
          {
            id: 'lack_product_market_fit',
            value: 'Lack of product-market fit',
          },
          {
            id: 'poor_customer_experience',
            value: 'Poor customer experience',
          },
          {
            id: 'no_major_churn_issues',
            value: 'No major churn issues',
          },
        ],
      },
    },
    nextNode: 'retention-strategies',
  },

  q11: {
    sectionTitle: 'Retention Strategies',
    sectionId: 'retention-strategies',
    firstField: 'retentionStrategies',
    fields: {
      retentionStrategies: {
        id: 'retention-strategies',
        type: FieldType.Dropdown,
        label: 'What strategies have you implemented to improve retention?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_retention_strategy',
            value: 'No retention strategy in place',
          },
          {
            id: 'some_efforts_not_structured',
            value: 'Some retention efforts, but not structured',
          },
          {
            id: 'loyalty_programs_personalization',
            value: 'Loyalty programs, personalization, or proactive engagement',
          },
        ],
      },
    },
    nextNode: 'customer-lifespan-tracking',
  },

  q12: {
    sectionTitle: 'Customer Lifespan Tracking',
    sectionId: 'customer-lifespan-tracking',
    firstField: 'customerLifespanTracking',
    fields: {
      customerLifespanTracking: {
        id: 'customer-lifespan-tracking',
        type: FieldType.Dropdown,
        label:
          'Do you track how long customers typically stay with your company?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_measure_lifespan',
            value: "No, we don't measure customer lifespan",
          },
          {
            id: 'some_idea_not_formal',
            value: "We have some idea but haven't tracked it formally",
          },
          {
            id: 'yes_have_data_lifespan',
            value: 'Yes, we have data on customer lifespan',
          },
        ],
      },
    },
    nextNode: 'estimated-clv',
  },

  q13: {
    sectionTitle: 'Estimated CLV',
    sectionId: 'estimated-clv',
    firstField: 'estimatedClv',
    fields: {
      estimatedClv: {
        id: 'estimated-clv',
        type: FieldType.Dropdown,
        label: 'What is your estimated Customer Lifetime Value (CLV)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_50_not_calculated',
            value: 'Below $50 or not calculated',
          },
          {
            id: '50_199',
            value: '$50 - $199',
          },
          {
            id: '200_499',
            value: '$200 - $499',
          },
          {
            id: '500_plus',
            value: '$500+',
          },
        ],
      },
    },
    nextNode: 'clv-vs-cac',
  },

  q14: {
    sectionTitle: 'CLV vs CAC',
    sectionId: 'clv-vs-cac',
    firstField: 'clvVsCac',
    fields: {
      clvVsCac: {
        id: 'clv-vs-cac',
        type: FieldType.Dropdown,
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
            id: 'clv_2x_cac',
            value: 'CLV is 2x CAC',
          },
          {
            id: 'clv_at_least_3x_cac',
            value: 'CLV is at least 3x CAC',
          },
        ],
      },
    },
    nextNode: 'clv-increase-strategies',
  },

  q15: {
    sectionTitle: 'CLV Increase Strategies',
    sectionId: 'clv-increase-strategies',
    firstField: 'clvIncreaseStrategies',
    fields: {
      clvIncreaseStrategies: {
        id: 'clv-increase-strategies',
        type: FieldType.Dropdown,
        label: 'What strategies have you implemented to increase CLV?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_active_clv_strategies',
            value: 'No active CLV strategies',
          },
          {
            id: 'some_efforts_not_structured',
            value: 'Some efforts but not structured',
          },
          {
            id: 'upselling_cross_selling_subscriptions',
            value:
              'Upselling, cross-selling, subscriptions, or loyalty programs',
          },
        ],
      },
    },
    nextNode: 'repeat-purchase-percentage',
  },

  q16: {
    sectionTitle: 'Repeat Purchase Percentage',
    sectionId: 'repeat-purchase-percentage',
    firstField: 'repeatPurchasePercentage',
    fields: {
      repeatPurchasePercentage: {
        id: 'repeat-purchase-percentage',
        type: FieldType.Dropdown,
        label:
          'What percentage of your customers make repeat purchases or renew subscriptions?',
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

  q17: {
    sectionTitle: 'Lead Conversion Rate',
    sectionId: 'lead-conversion-rate',
    firstField: 'leadConversionRate',
    fields: {
      leadConversionRate: {
        id: 'lead-conversion-rate',
        type: FieldType.Dropdown,
        label:
          'What is your current conversion rate from leads to paying customers?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_2_not_tracked',
            value: 'Below 2% or not tracked',
          },
          {
            id: '2_4_percent',
            value: '2%-4%',
          },
          {
            id: '5_9_percent',
            value: '5%-9%',
          },
          {
            id: '10_plus_percent',
            value: '10%+',
          },
        ],
      },
    },
    nextNode: 'website-conversion-rate',
  },

  q18: {
    sectionTitle: 'Website Conversion Rate',
    sectionId: 'website-conversion-rate',
    firstField: 'websiteConversionRate',
    fields: {
      websiteConversionRate: {
        id: 'website-conversion-rate',
        type: FieldType.Dropdown,
        label: 'What is your website or landing page conversion rate?',
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
            id: '30_plus_percent',
            value: '30%+',
          },
        ],
      },
    },
    nextNode: 'conversion-optimization-strategies',
  },

  q19: {
    sectionTitle: 'Conversion Optimization Strategies',
    sectionId: 'conversion-optimization-strategies',
    firstField: 'conversionOptimizationStrategies',
    fields: {
      conversionOptimizationStrategies: {
        id: 'conversion-optimization-strategies',
        type: FieldType.Dropdown,
        label:
          'What strategies have you implemented to improve conversion rates?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_conversion_optimization',
            value: 'No conversion optimization strategy',
          },
          {
            id: 'some_tactics_not_structured',
            value: 'Some conversion tactics, but not structured',
          },
          {
            id: 'ab_testing_optimization_ads',
            value: 'A/B testing, landing page optimization, targeted ads',
          },
        ],
      },
    },
    nextNode: 'lost-leads-retargeting',
  },

  q20: {
    sectionTitle: 'Lost Leads Retargeting',
    sectionId: 'lost-leads-retargeting',
    firstField: 'lostLeadsRetargeting',
    fields: {
      lostLeadsRetargeting: {
        id: 'lost-leads-retargeting',
        type: FieldType.Dropdown,
        label:
          "Do you retarget lost leads (potential customers who didn't convert)?",
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_track_retarget',
            value: "No, we don't track or retarget lost leads",
          },
          {
            id: 'some_efforts_not_consistent',
            value: 'We have some retargeting efforts, but not consistently',
          },
          {
            id: 'yes_email_remarketing_followups',
            value: 'Yes, we use email, remarketing ads, or follow-ups',
          },
        ],
      },
    },
    nextNode: 'monthly-marketing-budget',
  },

  q21: {
    sectionTitle: 'Monthly Marketing Budget',
    sectionId: 'monthly-marketing-budget',
    firstField: 'monthlyMarketingBudget',
    fields: {
      monthlyMarketingBudget: {
        id: 'monthly-marketing-budget',
        type: FieldType.Dropdown,
        label: 'What is your total monthly marketing budget?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_5k_not_defined',
            value: 'Below $5,000 or not defined',
          },
          {
            id: '5k_9999',
            value: '$5,000 - $9,999',
          },
          {
            id: '10k_19999',
            value: '$10,000 - $19,999',
          },
          {
            id: '20k_plus',
            value: '$20,000+',
          },
        ],
      },
    },
    nextNode: 'marketing-budget-percentage',
  },

  q22: {
    sectionTitle: 'Marketing Budget Percentage',
    sectionId: 'marketing-budget-percentage',
    firstField: 'marketingBudgetPercentage',
    fields: {
      marketingBudgetPercentage: {
        id: 'marketing-budget-percentage',
        type: FieldType.Dropdown,
        label:
          'What percentage of your total revenue is allocated to marketing?',
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
    nextNode: 'marketing-budget-distribution',
  },

  q23: {
    sectionTitle: 'Marketing Budget Distribution',
    sectionId: 'marketing-budget-distribution',
    firstField: 'marketingBudgetDistribution',
    fields: {
      marketingBudgetDistribution: {
        id: 'marketing-budget-distribution',
        type: FieldType.Dropdown,
        label:
          'How is your marketing budget distributed across different channels?',
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
    nextNode: 'marketing-roi-tracking',
  },

  q24: {
    sectionTitle: 'Marketing ROI Tracking',
    sectionId: 'marketing-roi-tracking',
    firstField: 'marketingRoiTracking',
    fields: {
      marketingRoiTracking: {
        id: 'marketing-roi-tracking',
        type: FieldType.Dropdown,
        label:
          'How do you track the return on investment (ROI) for your marketing spend?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_track_roi',
            value: "We don't track ROI or marketing effectiveness",
          },
          {
            id: 'track_some_not_consistent',
            value: 'We track some marketing results, but not consistently',
          },
          {
            id: 'calculate_roi_each_campaign',
            value: 'We calculate ROI for each campaign and channel',
          },
        ],
      },
    },
    nextNode: 'customer-acquisition-cost',
  },

  q25: {
    sectionTitle: 'Customer Acquisition Cost',
    sectionId: 'customer-acquisition-cost',
    firstField: 'customerAcquisitionCost',
    fields: {
      customerAcquisitionCost: {
        id: 'customer-acquisition-cost',
        type: FieldType.Dropdown,
        label: 'What is your current Customer Acquisition Cost (CAC)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'above_200_not_calculated',
            value: 'Above $200 or not calculated',
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

  q26: {
    sectionTitle: 'Return on Ad Spend',
    sectionId: 'return-on-ad-spend',
    firstField: 'returnOnAdSpend',
    fields: {
      returnOnAdSpend: {
        id: 'return-on-ad-spend',
        type: FieldType.Dropdown,
        label: 'What is your current Return on Ad Spend (ROAS)?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_1_5x_not_tracked',
            value: 'Below 1.5x or not tracked',
          },
          {
            id: '1_5x_2_9x',
            value: '1.5x-2.9x ROI',
          },
          {
            id: '3x_4_9x',
            value: '3x-4.9x ROI',
          },
          {
            id: '5x_plus',
            value: '5x+ ROI',
          },
        ],
      },
    },
    nextNode: 'marketing-attributed-revenue',
  },

  q27: {
    sectionTitle: 'Marketing Attributed Revenue',
    sectionId: 'marketing-attributed-revenue',
    firstField: 'marketingAttributedRevenue',
    fields: {
      marketingAttributedRevenue: {
        id: 'marketing-attributed-revenue',
        type: FieldType.Dropdown,
        label:
          'How much revenue is directly attributed to your marketing efforts in the last 3 months?',
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
            id: '50_plus_total_revenue',
            value: '50%+ of total revenue',
          },
        ],
      },
    },
    nextNode: 'marketing-efficiency-ratio',
  },

  q28: {
    sectionTitle: 'Marketing Efficiency Ratio',
    sectionId: 'marketing-efficiency-ratio',
    firstField: 'marketingEfficiencyRatio',
    fields: {
      marketingEfficiencyRatio: {
        id: 'marketing-efficiency-ratio',
        type: FieldType.Dropdown,
        label: 'What is your current Marketing Efficiency Ratio (MER)?',
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
    nextNode: 'social-media-followers',
  },

  q29: {
    sectionTitle: 'Social Media Followers',
    sectionId: 'social-media-followers',
    firstField: 'socialMediaFollowers',
    fields: {
      socialMediaFollowers: {
        id: 'social-media-followers',
        type: FieldType.Dropdown,
        label:
          'How many followers do you have on your most active social media platform?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'below_1k_not_tracked',
            value: 'Below 1,000 or not tracked',
          },
          {
            id: '1k_4999',
            value: '1,000 - 4,999 followers',
          },
          {
            id: '5k_9999',
            value: '5,000 - 9,999 followers',
          },
          {
            id: '10k_plus',
            value: '10,000+ followers',
          },
        ],
      },
    },
    nextNode: 'social-media-engagement-rate',
  },

  q30: {
    sectionTitle: 'Social Media Engagement Rate',
    sectionId: 'social-media-engagement-rate',
    firstField: 'socialMediaEngagementRate',
    fields: {
      socialMediaEngagementRate: {
        id: 'social-media-engagement-rate',
        type: FieldType.Dropdown,
        label:
          'What is your average engagement rate on your social media content?',
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
  q31: {
    sectionTitle: 'Content Posting Frequency',
    sectionId: 'content-posting-frequency',
    firstField: 'contentPostingFrequency',
    fields: {
      contentPostingFrequency: {
        id: 'content-posting-frequency',
        type: FieldType.Dropdown,
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

  q32: {
    sectionTitle: 'Paid Social Media Ads',
    sectionId: 'paid-social-media-ads',
    firstField: 'paidSocialMediaAds',
    fields: {
      paidSocialMediaAds: {
        id: 'paid-social-media-ads',
        type: FieldType.Dropdown,
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
    nextNode: 'media-coverage',
  },

  q33: {
    sectionTitle: 'Media Coverage',
    sectionId: 'media-coverage',
    firstField: 'mediaCoverage',
    fields: {
      mediaCoverage: {
        id: 'media-coverage',
        type: FieldType.Dropdown,
        label:
          'Have you received any media coverage, press mentions, or external recognition?',
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
            id: 'some_mentions_not_major',
            value: 'We have some media mentions but not major coverage',
          },
          {
            id: 'yes_major_publications',
            value: "Yes, we've been featured in major publications",
          },
        ],
      },
    },
    nextNode: 'online-reviews',
  },

  q34: {
    sectionTitle: 'Online Reviews',
    sectionId: 'online-reviews',
    firstField: 'onlineReviews',
    fields: {
      onlineReviews: {
        id: 'online-reviews',
        type: FieldType.Dropdown,
        label:
          'How many online reviews or testimonials do you have from customers?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'less_than_5_not_tracked',
            value: 'Less than 5 reviews or not tracked',
          },
          {
            id: '5_19_positive',
            value: '5-19 positive reviews',
          },
          {
            id: '20_49_positive',
            value: '20-49 positive reviews',
          },
          {
            id: '50_plus_positive',
            value: '50+ positive reviews',
          },
        ],
      },
    },
    nextNode: 'brand-partnerships',
  },

  q35: {
    sectionTitle: 'Brand Partnerships',
    sectionId: 'brand-partnerships',
    firstField: 'brandPartnerships',
    fields: {
      brandPartnerships: {
        id: 'brand-partnerships',
        type: FieldType.Dropdown,
        label:
          'Have you partnered with any reputable brands, investors, or influencers to boost credibility?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_partnerships_yet',
            value: 'No partnerships yet',
          },
          {
            id: 'some_not_established',
            value: 'We have some partnerships, but not well established',
          },
          {
            id: 'yes_strong_partnerships',
            value: 'Yes, we have strong partnerships',
          },
        ],
      },
    },
    nextNode: 'reputation-management',
  },

  q36: {
    sectionTitle: 'Reputation Management',
    sectionId: 'reputation-management',
    firstField: 'reputationManagement',
    fields: {
      reputationManagement: {
        id: 'reputation-management',
        type: FieldType.Dropdown,
        label: 'How do you handle negative feedback or reputation risks?',
        required: true,
        nextField: null,
        options: [
          {
            id: 'no_plan',
            value: "We don't have a plan for handling reputation risks",
          },
          {
            id: 'respond_as_arise',
            value: 'We respond to issues as they arise',
          },
          {
            id: 'structured_crisis_plan',
            value: 'We have a structured crisis management plan',
          },
        ],
      },
    },
    nextNode: null,
  },
};
