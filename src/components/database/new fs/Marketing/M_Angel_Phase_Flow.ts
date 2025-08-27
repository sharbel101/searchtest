const M_AngelPhase = {
  q1: {
    sectionTitle: 'CRM System Usage',
    sectionId: '315ea7b1-e3aa-43d3-a959-8cb4b961c341',
    firstField: '8a960c2f-e6b8-4d25-911a-ee4cb27cfb2f',
    fields: {
      crmSystemUsage: {
        id: '8a960c2f-e6b8-4d25-911a-ee4cb27cfb2f',
        type: 'dropdown',
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
    nextNode: 'aa3e0ce6-f03e-4e9b-b6b3-80b65d76659e',
  },
  q2: {
    sectionTitle: 'Customer Contacts Count',
    sectionId: 'aa3e0ce6-f03e-4e9b-b6b3-80b65d76659e',
    firstField: '6991f401-4d58-442a-8cef-cc3dad478dce',
    fields: {
      customerContactsCount: {
        id: '6991f401-4d58-442a-8cef-cc3dad478dce',
        type: 'dropdown',
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
    nextNode: '802788cf-38ab-4dc2-a459-f2a85b409cb2',
  },
  q3: {
    sectionTitle: 'Customer Engagement Frequency',
    sectionId: '802788cf-38ab-4dc2-a459-f2a85b409cb2',
    firstField: '38d021c7-a754-4bab-bb02-e595c5ddfd0c',
    fields: {
      customerEngagementFrequency: {
        id: '38d021c7-a754-4bab-bb02-e595c5ddfd0c',
        type: 'dropdown',
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
    nextNode: 'e77e2b2d-db45-455d-a1d8-7a4677d4295e',
  },
  q4: {
    sectionTitle: 'Customer Segmentation',
    sectionId: 'e77e2b2d-db45-455d-a1d8-7a4677d4295e',
    firstField: '9a65a089-f883-4764-b24f-f1c21a4d0040',
    fields: {
      customerSegmentation: {
        id: '9a65a089-f883-4764-b24f-f1c21a4d0040',
        type: 'dropdown',
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
    nextNode: 'f2fbd9a4-d495-4171-aa44-58dfd628ff8a',
  },
  q5: {
    sectionTitle: 'Feedback Collection',
    sectionId: 'f2fbd9a4-d495-4171-aa44-58dfd628ff8a',
    firstField: 'f0d131ac-4ce3-4d6b-83ff-910618f28034',
    fields: {
      feedbackCollection: {
        id: 'f0d131ac-4ce3-4d6b-83ff-910618f28034',
        type: 'dropdown',
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
    nextNode: '99f67dcf-08d9-40ae-a070-cb749abb3cb8',
  },
  q6: {
    sectionTitle: 'Customer Satisfaction Rating',
    sectionId: '99f67dcf-08d9-40ae-a070-cb749abb3cb8',
    firstField: 'b17221cc-c421-448a-9406-a9dab6b9a022',
    fields: {
      customerSatisfactionRating: {
        id: 'b17221cc-c421-448a-9406-a9dab6b9a022',
        type: 'dropdown',
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
    nextNode: '072609d1-d0de-4c60-a9a5-fc72ba0ff481',
  },
  q7: {
    sectionTitle: 'Net Promoter Score',
    sectionId: '072609d1-d0de-4c60-a9a5-fc72ba0ff481',
    firstField: '1a47af45-9d63-4687-81ef-e73887e7f7ec',
    fields: {
      netPromoterScore: {
        id: '1a47af45-9d63-4687-81ef-e73887e7f7ec',
        type: 'dropdown',
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
    nextNode: 'ea8c1514-5db1-45b1-91f7-a62afc200588',
  },
  q8: {
    sectionTitle: 'Negative Feedback Handling',
    sectionId: 'ea8c1514-5db1-45b1-91f7-a62afc200588',
    firstField: 'f2b9773b-0fe6-4899-b158-b4816a5e686c',
    fields: {
      negativeFeedbackHandling: {
        id: 'f2b9773b-0fe6-4899-b158-b4816a5e686c',
        type: 'dropdown',
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
    nextNode: 'a3a2db6b-ae62-45ec-98d6-a92d644632a9',
  },
  q9: {
    sectionTitle: 'Customer Retention Rate',
    sectionId: 'a3a2db6b-ae62-45ec-98d6-a92d644632a9',
    firstField: '6e0aed4a-232e-463c-8d92-e06896eada6f',
    fields: {
      customerRetentionRate: {
        id: '6e0aed4a-232e-463c-8d92-e06896eada6f',
        type: 'dropdown',
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
    nextNode: 'fe209582-586c-42ca-ab4d-b8cff2c7b1c0',
  },
  q10: {
    sectionTitle: 'Customer Churn Reasons',
    sectionId: 'fe209582-586c-42ca-ab4d-b8cff2c7b1c0',
    firstField: '6b56e668-8c6b-4243-9163-f70e211025d0',
    fields: {
      customerChurnReasons: {
        id: '6b56e668-8c6b-4243-9163-f70e211025d0',
        type: 'dropdown',
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
    nextNode: '097fd18f-4ed2-4a76-a5fe-4b9909a0fd68',
  },
  q11: {
    sectionTitle: 'Retention Strategies',
    sectionId: '097fd18f-4ed2-4a76-a5fe-4b9909a0fd68',
    firstField: '6f9608f2-f4f6-4918-8087-3f62cc41ee7f',
    fields: {
      retentionStrategies: {
        id: '6f9608f2-f4f6-4918-8087-3f62cc41ee7f',
        type: 'dropdown',
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
    nextNode: 'd9c97e7c-caaa-4c19-95a0-b030ae5a9b2f',
  },
  q12: {
    sectionTitle: 'Customer Lifespan Tracking',
    sectionId: 'd9c97e7c-caaa-4c19-95a0-b030ae5a9b2f',
    firstField: '2ea108f6-56c3-4317-a754-4d4e8113d011',
    fields: {
      customerLifespanTracking: {
        id: '2ea108f6-56c3-4317-a754-4d4e8113d011',
        type: 'dropdown',
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
    nextNode: 'ae6215fa-229a-4942-8ccb-505ef9a1500e',
  },
  q13: {
    sectionTitle: 'Estimated CLV',
    sectionId: 'ae6215fa-229a-4942-8ccb-505ef9a1500e',
    firstField: 'b9476c11-b253-4d49-841a-165250221fee',
    fields: {
      estimatedClv: {
        id: 'b9476c11-b253-4d49-841a-165250221fee',
        type: 'dropdown',
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
    nextNode: 'c9eea51b-7d62-43d3-8759-620f52add0fa',
  },
  q14: {
    sectionTitle: 'CLV vs CAC',
    sectionId: 'c9eea51b-7d62-43d3-8759-620f52add0fa',
    firstField: '4fab12c4-9453-428a-8c2f-bb8831880479',
    fields: {
      clvVsCac: {
        id: '4fab12c4-9453-428a-8c2f-bb8831880479',
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
    nextNode: 'ed84b0c7-f1a3-4d3e-9349-9a10cb468eff',
  },
  q15: {
    sectionTitle: 'CLV Increase Strategies',
    sectionId: 'ed84b0c7-f1a3-4d3e-9349-9a10cb468eff',
    firstField: '7c8b6627-6c25-46c1-8cc4-a05637c82fff',
    fields: {
      clvIncreaseStrategies: {
        id: '7c8b6627-6c25-46c1-8cc4-a05637c82fff',
        type: 'dropdown',
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
    nextNode: '2a41a191-447a-41c1-aba3-9377cda3ff24',
  },
  q16: {
    sectionTitle: 'Repeat Purchase Percentage',
    sectionId: '2a41a191-447a-41c1-aba3-9377cda3ff24',
    firstField: 'dc9608e5-21dc-4c17-974d-d36571106d49',
    fields: {
      repeatPurchasePercentage: {
        id: 'dc9608e5-21dc-4c17-974d-d36571106d49',
        type: 'dropdown',
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
    nextNode: '5e558a5b-2622-49cf-acb7-b1b3087566e9',
  },
  q17: {
    sectionTitle: 'Lead Conversion Rate',
    sectionId: '5e558a5b-2622-49cf-acb7-b1b3087566e9',
    firstField: '72a030dd-b1e3-4087-b680-d796d13e0a0a',
    fields: {
      leadConversionRate: {
        id: '72a030dd-b1e3-4087-b680-d796d13e0a0a',
        type: 'dropdown',
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
    nextNode: 'ed1b4a5c-d8d1-4415-86d6-7fa2a3301396',
  },
  q18: {
    sectionTitle: 'Website Conversion Rate',
    sectionId: 'ed1b4a5c-d8d1-4415-86d6-7fa2a3301396',
    firstField: '21b9dac3-5f9e-4ccd-9875-8ba083a24699',
    fields: {
      websiteConversionRate: {
        id: '21b9dac3-5f9e-4ccd-9875-8ba083a24699',
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
    nextNode: 'd898bac0-96cd-4021-a4d5-33c0cd0f35bc',
  },
  q19: {
    sectionTitle: 'Conversion Optimization Strategies',
    sectionId: 'd898bac0-96cd-4021-a4d5-33c0cd0f35bc',
    firstField: '78b11290-eaa0-4d91-a3c0-0f1d83519260',
    fields: {
      conversionOptimizationStrategies: {
        id: '78b11290-eaa0-4d91-a3c0-0f1d83519260',
        type: 'dropdown',
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
    nextNode: 'ee4de35f-a89e-4a8e-96fb-48a9c138cae7',
  },
  q20: {
    sectionTitle: 'Lost Leads Retargeting',
    sectionId: 'ee4de35f-a89e-4a8e-96fb-48a9c138cae7',
    firstField: 'cc63c5c2-d7a5-4793-8e50-79682e55fdd0',
    fields: {
      lostLeadsRetargeting: {
        id: 'cc63c5c2-d7a5-4793-8e50-79682e55fdd0',
        type: 'dropdown',
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
    nextNode: '1d86bd34-b509-4f79-aa79-244eccc5750c',
  },
  q21: {
    sectionTitle: 'Monthly Marketing Budget',
    sectionId: '1d86bd34-b509-4f79-aa79-244eccc5750c',
    firstField: 'f36f4738-dfba-4c6e-a423-966f3dc043c1',
    fields: {
      monthlyMarketingBudget: {
        id: 'f36f4738-dfba-4c6e-a423-966f3dc043c1',
        type: 'dropdown',
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
    nextNode: '7acbda64-de7e-4ca1-80d9-5f7b7f86813f',
  },
  q22: {
    sectionTitle: 'Marketing Budget Percentage',
    sectionId: '7acbda64-de7e-4ca1-80d9-5f7b7f86813f',
    firstField: 'a3a87d67-0c64-4c5a-8bc8-80325aa2268b',
    fields: {
      marketingBudgetPercentage: {
        id: 'a3a87d67-0c64-4c5a-8bc8-80325aa2268b',
        type: 'dropdown',
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
    nextNode: 'b524ae7e-bae8-41c2-abb6-f87a05f8e5f3',
  },
  q23: {
    sectionTitle: 'Marketing Budget Distribution',
    sectionId: 'b524ae7e-bae8-41c2-abb6-f87a05f8e5f3',
    firstField: '5b56933c-32b0-4641-9afd-8ed533ae4158',
    fields: {
      marketingBudgetDistribution: {
        id: '5b56933c-32b0-4641-9afd-8ed533ae4158',
        type: 'dropdown',
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
    nextNode: 'bb7b3b65-1849-4323-be8e-e7eaf290368e',
  },
  q24: {
    sectionTitle: 'Marketing ROI Tracking',
    sectionId: 'bb7b3b65-1849-4323-be8e-e7eaf290368e',
    firstField: '511cff83-30cb-4e27-8be3-072e388abf5b',
    fields: {
      marketingRoiTracking: {
        id: '511cff83-30cb-4e27-8be3-072e388abf5b',
        type: 'dropdown',
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
    nextNode: 'ba45c603-f1db-4b37-8fc6-05e392b88df6',
  },
  q25: {
    sectionTitle: 'Customer Acquisition Cost',
    sectionId: 'ba45c603-f1db-4b37-8fc6-05e392b88df6',
    firstField: 'e714e3e3-6cd7-4d3e-82a0-a7ba609ac33b',
    fields: {
      customerAcquisitionCost: {
        id: 'e714e3e3-6cd7-4d3e-82a0-a7ba609ac33b',
        type: 'dropdown',
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
    nextNode: '9b1fe558-4355-4e70-bf09-0b71e34d08c1',
  },
  q26: {
    sectionTitle: 'Return on Ad Spend',
    sectionId: '9b1fe558-4355-4e70-bf09-0b71e34d08c1',
    firstField: '24fb8829-f2b7-48c4-bb45-670968c00415',
    fields: {
      returnOnAdSpend: {
        id: '24fb8829-f2b7-48c4-bb45-670968c00415',
        type: 'dropdown',
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
    nextNode: '5866771c-bf19-43f1-917a-4fe0ccca1a71',
  },
  q27: {
    sectionTitle: 'Marketing Attributed Revenue',
    sectionId: '5866771c-bf19-43f1-917a-4fe0ccca1a71',
    firstField: 'c059c778-6cf1-4404-8c9c-9353fd0a5187',
    fields: {
      marketingAttributedRevenue: {
        id: 'c059c778-6cf1-4404-8c9c-9353fd0a5187',
        type: 'dropdown',
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
    nextNode: '91bc12d8-3be2-4f92-bb10-5fed5f7dca53',
  },
  q28: {
    sectionTitle: 'Marketing Efficiency Ratio',
    sectionId: '91bc12d8-3be2-4f92-bb10-5fed5f7dca53',
    firstField: 'abe220d2-20e9-40b8-9edb-1bc451e714c1',
    fields: {
      marketingEfficiencyRatio: {
        id: 'abe220d2-20e9-40b8-9edb-1bc451e714c1',
        type: 'dropdown',
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
    nextNode: 'f4524bc1-838f-46cb-9c27-eca0b79afb94',
  },
  q29: {
    sectionTitle: 'Social Media Followers',
    sectionId: 'f4524bc1-838f-46cb-9c27-eca0b79afb94',
    firstField: '36bf8a8a-844d-4cd8-8567-c3ca1f9894e5',
    fields: {
      socialMediaFollowers: {
        id: '36bf8a8a-844d-4cd8-8567-c3ca1f9894e5',
        type: 'dropdown',
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
    nextNode: '6eebc4a9-3105-4bf4-bf6f-e9666faf2ea7',
  },
  q30: {
    sectionTitle: 'Social Media Engagement Rate',
    sectionId: '6eebc4a9-3105-4bf4-bf6f-e9666faf2ea7',
    firstField: 'df3a7cf7-9c19-4939-9495-11db0c279edc',
    fields: {
      socialMediaEngagementRate: {
        id: 'df3a7cf7-9c19-4939-9495-11db0c279edc',
        type: 'dropdown',
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
    nextNode: '1046ae70-19fd-4374-a87a-fc7d20fe4d21',
  },
  q31: {
    sectionTitle: 'Content Posting Frequency',
    sectionId: '1046ae70-19fd-4374-a87a-fc7d20fe4d21',
    firstField: '812d659f-9f42-418c-823d-f1619eb2f44f',
    fields: {
      contentPostingFrequency: {
        id: '812d659f-9f42-418c-823d-f1619eb2f44f',
        type: 'dropdown',
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
    nextNode: '0fc41f77-7892-48af-91c8-6eb17486348e',
  },
  q32: {
    sectionTitle: 'Paid Social Media Ads',
    sectionId: '0fc41f77-7892-48af-91c8-6eb17486348e',
    firstField: 'b2acf15c-fa2b-43d2-ae35-929c92884b89',
    fields: {
      paidSocialMediaAds: {
        id: 'b2acf15c-fa2b-43d2-ae35-929c92884b89',
        type: 'dropdown',
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
    nextNode: 'bf3f22f7-7f45-467e-8745-3249a390db9a',
  },
  q33: {
    sectionTitle: 'Media Coverage',
    sectionId: 'bf3f22f7-7f45-467e-8745-3249a390db9a',
    firstField: 'a47f6824-6e21-41d1-a264-e35cecdf13ea',
    fields: {
      mediaCoverage: {
        id: 'a47f6824-6e21-41d1-a264-e35cecdf13ea',
        type: 'dropdown',
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
    nextNode: '14aa3656-2b04-4f49-808a-f9299707ee30',
  },
  q34: {
    sectionTitle: 'Online Reviews',
    sectionId: '14aa3656-2b04-4f49-808a-f9299707ee30',
    firstField: '9543ef5c-61ad-4400-acdc-f19a3ed964d8',
    fields: {
      onlineReviews: {
        id: '9543ef5c-61ad-4400-acdc-f19a3ed964d8',
        type: 'dropdown',
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
    nextNode: 'ad66d1fb-e24a-4e66-aebc-35ad0493f120',
  },
  q35: {
    sectionTitle: 'Brand Partnerships',
    sectionId: 'ad66d1fb-e24a-4e66-aebc-35ad0493f120',
    firstField: '913f4118-4473-42d8-8e24-bcf141281e38',
    fields: {
      brandPartnerships: {
        id: '913f4118-4473-42d8-8e24-bcf141281e38',
        type: 'dropdown',
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
    nextNode: '7b8bce45-cdb0-4813-8458-7943279bd297',
  },
  q36: {
    sectionTitle: 'Reputation Management',
    sectionId: '7b8bce45-cdb0-4813-8458-7943279bd297',
    firstField: 'fc9263e0-14b7-4e2e-940e-01170b43fc24',
    fields: {
      reputationManagement: {
        id: 'fc9263e0-14b7-4e2e-940e-01170b43fc24',
        type: 'dropdown',
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
