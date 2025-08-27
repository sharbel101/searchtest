const M_EarlyVC = {
  q1: {
    sectionTitle: 'CRM System',
    sectionId: '5e1d4cb9-eab7-4178-b3f0-c0010e17bca9',
    firstField: '2aacf820-46ce-4a05-908e-ff97e66ca833',
    fields: {
      crmSystem: {
        id: '2aacf820-46ce-4a05-908e-ff97e66ca833',
        type: 'dropdown',
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
    nextNode: 'bbffc082-6e58-41b5-9b1d-c22fc1b2c1f1',
  },
  q2: {
    sectionTitle: 'Active Customer Contacts',
    sectionId: 'bbffc082-6e58-41b5-9b1d-c22fc1b2c1f1',
    firstField: 'e6c50c6e-a7bd-40d3-b05b-9fa171c78a9b',
    fields: {
      activeCustomerContacts: {
        id: 'e6c50c6e-a7bd-40d3-b05b-9fa171c78a9b',
        type: 'dropdown',
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
    nextNode: '336b7dea-fa88-4ca9-a06f-ac8e3d3e02c0',
  },
  q3: {
    sectionTitle: 'CRM Automation',
    sectionId: '336b7dea-fa88-4ca9-a06f-ac8e3d3e02c0',
    firstField: 'edae1c54-7db9-4e43-a2f7-527ef57b9343',
    fields: {
      crmAutomation: {
        id: 'edae1c54-7db9-4e43-a2f7-527ef57b9343',
        type: 'dropdown',
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
    nextNode: 'ec7f8fc9-4c48-4315-ab79-39fc676493ec',
  },
  q4: {
    sectionTitle: 'CRM Integration',
    sectionId: 'ec7f8fc9-4c48-4315-ab79-39fc676493ec',
    firstField: '0966ec0b-1c8e-4772-9c1f-40228c9a8b82',
    fields: {
      crmIntegration: {
        id: '0966ec0b-1c8e-4772-9c1f-40228c9a8b82',
        type: 'dropdown',
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
    nextNode: 'c267c73c-73f6-4bbd-a2fa-b8e709a9b9b6',
  },
  q5: {
    sectionTitle: 'Customer Satisfaction Measurement',
    sectionId: 'c267c73c-73f6-4bbd-a2fa-b8e709a9b9b6',
    firstField: '3e03eb9e-7a50-4907-a6c3-284f72b9190d',
    fields: {
      customerSatisfactionMeasurement: {
        id: '3e03eb9e-7a50-4907-a6c3-284f72b9190d',
        type: 'dropdown',
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
    nextNode: 'df831e8c-1b9f-4eeb-98ee-5ca0d7646f51',
  },
  q6: {
    sectionTitle: 'Net Promoter Score',
    sectionId: 'df831e8c-1b9f-4eeb-98ee-5ca0d7646f51',
    firstField: '71c2c210-8d6d-46da-bccf-a1a802d209c7',
    fields: {
      netPromoterScore: {
        id: '71c2c210-8d6d-46da-bccf-a1a802d209c7',
        type: 'dropdown',
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
    nextNode: '5b73f660-5803-465e-8732-c692bedd9daa',
  },
  q7: {
    sectionTitle: 'Positive Reviews Percentage',
    sectionId: '9576be1a-2768-46a6-acca-fc07b48332a3',
    firstField: '8bac6c76-7dbe-4186-99c8-fdd38638b43b',
    fields: {
      positiveReviewsPercentage: {
        id: '8bac6c76-7dbe-4186-99c8-fdd38638b43b',
        type: 'dropdown',
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
        id: '973296b3-2e06-4597-939a-30e36b2a4ce7',
        type: 'text',
        label:
          'What is your customer satisfaction rate? Enter a percentage number between 0% and 100%',
        required: true,
        nextField: null,
        min: 0,
        max: 100,
        suffix: '%',
      },
    },
    nextNode: '7f51e2d3-5098-4b4d-bb0b-247a3fd20f7f',
  },
  q8: {
    sectionTitle: 'Feedback Adjustment Frequency',
    sectionId: '7f51e2d3-5098-4b4d-bb0b-247a3fd20f7f',
    firstField: 'd3e27758-d227-4cd4-9ea3-a1baa53a2b3c',
    fields: {
      feedbackAdjustmentFrequency: {
        id: 'd3e27758-d227-4cd4-9ea3-a1baa53a2b3c',
        type: 'dropdown',
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
    nextNode: '9d874745-c037-4e83-9f2f-b15e4ef5dfed',
  },
  q9: {
    sectionTitle: 'Customer Retention Rate',
    sectionId: '9d874745-c037-4e83-9f2f-b15e4ef5dfed',
    firstField: '440e9343-6d8c-485f-8471-9179ccac6216',
    fields: {
      customerRetentionRate: {
        id: '440e9343-6d8c-485f-8471-9179ccac6216',
        type: 'dropdown',
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
    nextNode: '86fde9ec-8c62-48ce-835f-9c90eca70a85',
  },
  q10: {
    sectionTitle: 'Customer Churn Rate',
    sectionId: '86fde9ec-8c62-48ce-835f-9c90eca70a85',
    firstField: '696882af-7fcb-4545-87b9-685f1b4d8293',
    fields: {
      customerChurnRate: {
        id: '696882af-7fcb-4545-87b9-685f1b4d8293',
        type: 'dropdown',
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
    nextNode: '9d3c74ae-f165-4100-8b8f-455d90e320ef',
  },
  q11: {
    sectionTitle: 'Retention Segmentation',
    sectionId: '9d3c74ae-f165-4100-8b8f-455d90e320ef',
    firstField: '23f32b4f-e2ea-4eb2-8bb3-97a6e8354591',
    fields: {
      retentionSegmentation: {
        id: '23f32b4f-e2ea-4eb2-8bb3-97a6e8354591',
        type: 'dropdown',
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
    nextNode: '63d025bc-256e-443f-af05-e3e91c89cc4a',
  },
  q12: {
    sectionTitle: 'Churn Reasons',
    sectionId: '63d025bc-256e-443f-af05-e3e91c89cc4a',
    firstField: '01518690-1f1c-44e2-afb3-26b54ae49cb8',
    fields: {
      churnReasons: {
        id: '01518690-1f1c-44e2-afb3-26b54ae49cb8',
        type: 'dropdown',
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
        id: '2e01a8eb-a431-47f0-84b0-892899b7f71b',
        type: 'text',
        label:
          'What is your customer retention rate? Enter a percentage number between 0% and 100%',
        required: true,
        nextField: null,
        min: 0,
        max: 100,
        suffix: '%',
      },
    },
    nextNode: 'f71540cc-5ed8-4efd-a90a-05701e188966',
  },
  q13: {
    sectionTitle: 'Retention Strategies',
    sectionId: 'f71540cc-5ed8-4efd-a90a-05701e188966',
    firstField: '4b89847a-2fd8-4f1f-9fed-385e73300381',
    fields: {
      retentionStrategies: {
        id: '4b89847a-2fd8-4f1f-9fed-385e73300381',
        type: 'dropdown',
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
    nextNode: '629ed7b7-a6ee-48ff-a90a-3537eddd9092',
  },
  q14: {
    sectionTitle: 'Customer Lifetime Value',
    sectionId: '629ed7b7-a6ee-48ff-a90a-3537eddd9092',
    firstField: '303f31ec-f707-4db2-911e-6bd1c49af54a',
    fields: {
      customerLifetimeValue: {
        id: '303f31ec-f707-4db2-911e-6bd1c49af54a',
        type: 'dropdown',
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
    nextNode: '68925475-a539-4810-95f5-b0eb762b139f',
  },
  q15: {
    sectionTitle: 'CLV vs CAC',
    sectionId: '68925475-a539-4810-95f5-b0eb762b139f',
    firstField: 'd4902fae-abda-4087-b0fe-05a4b6b2bb49',
    fields: {
      clvVsCac: {
        id: 'd4902fae-abda-4087-b0fe-05a4b6b2bb49',
        type: 'dropdown',
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
        id: '678d1e75-805f-40ba-becc-4cadeaa58a4d',
        type: 'text',
        label:
          'What is your customer lifetime value? Enter a finite number in USD',
        required: true,
        nextField: null,
        min: 0,
        prefix: '$',
      },
    },
    nextNode: '96e00a25-e885-4adb-bf79-e0fe5298d943',
  },
  q16: {
    sectionTitle: 'CLV Segmentation',
    sectionId: '96e00a25-e885-4adb-bf79-e0fe5298d943',
    firstField: '2a240a83-93cc-4d20-b7f9-77c9e2059564',
    fields: {
      clvSegmentation: {
        id: '2a240a83-93cc-4d20-b7f9-77c9e2059564',
        type: 'dropdown',
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
    nextNode: 'b22539e3-663b-41d4-a8b1-6908343c927f',
  },
  q17: {
    sectionTitle: 'CLV Improvement Strategies',
    sectionId: 'b22539e3-663b-41d4-a8b1-6908343c927f',
    firstField: '30bef8c1-59ee-42a2-b698-7ec9e0bdfbee',
    fields: {
      clvImprovementStrategies: {
        id: '30bef8c1-59ee-42a2-b698-7ec9e0bdfbee',
        type: 'dropdown',
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
    nextNode: 'c36ea7a2-34ae-4cc0-b0ca-a5dfdc1b9c76',
  },
  q18: {
    sectionTitle: 'Repeat Customer Revenue',
    sectionId: 'c36ea7a2-34ae-4cc0-b0ca-a5dfdc1b9c76',
    firstField: '0559c662-7f88-42bd-91c8-d44034ea25de',
    fields: {
      repeatCustomerRevenue: {
        id: '0559c662-7f88-42bd-91c8-d44034ea25de',
        type: 'dropdown',
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
    nextNode: '4da5979b-cc67-4b1d-b4f9-405e898b70a9',
  },
  q19: {
    sectionTitle: 'Lead Conversion Rate',
    sectionId: '4da5979b-cc67-4b1d-b4f9-405e898b70a9',
    firstField: '2a4ba116-dd01-42cc-9e69-869faef28fba',
    fields: {
      leadConversionRate: {
        id: '2a4ba116-dd01-42cc-9e69-869faef28fba',
        type: 'dropdown',
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
    nextNode: '668888b8-7152-4e9a-8c7b-ce9202b2c2b1',
  },
  q20: {
    sectionTitle: 'Website Conversion Rate',
    sectionId: '668888b8-7152-4e9a-8c7b-ce9202b2c2b1',
    firstField: '7153eecb-13cc-4f3c-b859-9c03f847ba32',
    fields: {
      websiteConversionRate: {
        id: '7153eecb-13cc-4f3c-b859-9c03f847ba32',
        type: 'dropdown',
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
    nextNode: 'b2afc29c-33ab-4a81-b4ee-01be9b2b963b',
  },
  q21: {
    sectionTitle: 'High Converting Channels',
    sectionId: 'b2afc29c-33ab-4a81-b4ee-01be9b2b963b',
    firstField: '18837eee-9e50-4ef6-a1c7-1d40cfa28ca3',
    fields: {
      highConvertingChannels: {
        id: '18837eee-9e50-4ef6-a1c7-1d40cfa28ca3',
        type: 'dropdown',
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
    nextNode: '86e06f16-9c6e-4caf-a483-4a6f13198918',
  },
  q22: {
    sectionTitle: 'Abandoned Cart Rate',
    sectionId: '86e06f16-9c6e-4caf-a483-4a6f13198918',
    firstField: 'b48edddf-e830-4d48-8362-ced7a81b248f',
    fields: {
      abandonedCartRate: {
        id: 'b48edddf-e830-4d48-8362-ced7a81b248f',
        type: 'dropdown',
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
    nextNode: 'c8cb7c65-cafb-48b0-a1e3-69646d7c06bd',
  },
  q23: {
    sectionTitle: 'Conversion Optimization Strategies',
    sectionId: 'c8cb7c65-cafb-48b0-a1e3-69646d7c06bd',
    firstField: '7c93f55f-fde0-4bc6-b613-5765edaca96a',
    fields: {
      conversionOptimizationStrategies: {
        id: '7c93f55f-fde0-4bc6-b613-5765edaca96a',
        type: 'dropdown',
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
    nextNode: '25af286b-d7d8-425c-abe2-e1499f473c55',
  },
  q24: {
    sectionTitle: 'Monthly Marketing Budget',
    sectionId: '25af286b-d7d8-425c-abe2-e1499f473c55',
    firstField: '50800543-8a16-4f3a-b517-6ca6895f71d3',
    fields: {
      monthlyMarketingBudget: {
        id: '50800543-8a16-4f3a-b517-6ca6895f71d3',
        type: 'dropdown',
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
    nextNode: 'c407b821-7221-4e5c-bfad-9528be69a9db',
  },
  q25: {
    sectionTitle: 'Marketing Revenue Percentage',
    sectionId: 'c407b821-7221-4e5c-bfad-9528be69a9db',
    firstField: '8d7d0e82-6327-48b8-a554-1b768047b007',
    fields: {
      marketingRevenuePercentage: {
        id: '8d7d0e82-6327-48b8-a554-1b768047b007',
        type: 'dropdown',
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
    nextNode: 'e04a8e95-765c-45c0-b050-4a16bdc90ef4',
  },
  q26: {
    sectionTitle: 'Marketing Budget Distribution',
    sectionId: 'e04a8e95-765c-45c0-b050-4a16bdc90ef4',
    firstField: '6a30c519-67b7-4327-8581-08d63a4b0f21',
    fields: {
      marketingBudgetDistribution: {
        id: '6a30c519-67b7-4327-8581-08d63a4b0f21',
        type: 'dropdown',
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
    nextNode: '555d9a56-0007-46c3-9e94-f9908745b187',
  },
  q27: {
    sectionTitle: 'Marketing Effectiveness Measurement',
    sectionId: '555d9a56-0007-46c3-9e94-f9908745b187',
    firstField: 'df74c20e-9419-4b31-949b-39476cbcd4b6',
    fields: {
      marketingEffectivenessMeasurement: {
        id: 'df74c20e-9419-4b31-949b-39476cbcd4b6',
        type: 'dropdown',
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
    nextNode: '2f588602-b9f8-484e-b0e7-6cc9cfbe1f6f',
  },
  q28: {
    sectionTitle: 'Budget Adjustment Frequency',
    sectionId: '2f588602-b9f8-484e-b0e7-6cc9cfbe1f6f',
    firstField: 'f3e0e581-a549-4293-966d-28b079425dd1',
    fields: {
      budgetAdjustmentFrequency: {
        id: 'f3e0e581-a549-4293-966d-28b079425dd1',
        type: 'dropdown',
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
    nextNode: '7acc4719-1843-465a-9fe6-c5538e57c455',
  },
  q29: {
    sectionTitle: 'Customer Acquisition Cost',
    sectionId: '7acc4719-1843-465a-9fe6-c5538e57c455',
    firstField: '9b8f475a-145e-4ad5-b4ad-20fc3f9a5e67',
    fields: {
      customerAcquisitionCost: {
        id: '9b8f475a-145e-4ad5-b4ad-20fc3f9a5e67',
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
    nextNode: '3e3205c3-b765-43fc-b8f5-fbd2b5c3d80d',
  },
  q30: {
    sectionTitle: 'Return on Ad Spend',
    sectionId: '3e3205c3-b765-43fc-b8f5-fbd2b5c3d80d',
    firstField: 'ad619a80-1a94-416d-abeb-fc31bee2f115',
    fields: {
      returnOnAdSpend: {
        id: 'ad619a80-1a94-416d-abeb-fc31bee2f115',
        type: 'dropdown',
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
    nextNode: '87457b94-b1a4-4d49-9c16-60cfb6489c3f',
  },
  q31: {
    sectionTitle: 'Revenue Attributed to Marketing',
    sectionId: '87457b94-b1a4-4d49-9c16-60cfb6489c3f',
    firstField: '4f98d02d-8158-4712-a2e0-826c206d2857',
    fields: {
      revenueAttributedMarketing: {
        id: '4f98d02d-8158-4712-a2e0-826c206d2857',
        type: 'dropdown',
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
    nextNode: 'd3a8a7e7-bf7e-4767-977b-8d93915211c1',
  },
  q32: {
    sectionTitle: 'Marketing Efficiency Ratio',
    sectionId: 'd3a8a7e7-bf7e-4767-977b-8d93915211c1',
    firstField: 'ed9ac006-f54e-4db0-bcc0-51d184387de3',
    fields: {
      marketingEfficiencyRatio: {
        id: 'ed9ac006-f54e-4db0-bcc0-51d184387de3',
        type: 'dropdown',
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
    nextNode: '725b1043-8148-49ec-a49b-02d5115b2b4f',
  },
  q33: {
    sectionTitle: 'Marketing Profitability Strategies',
    sectionId: '725b1043-8148-49ec-a49b-02d5115b2b4f',
    firstField: '1d1ddbb8-9f4d-4161-8017-567f76305755',
    fields: {
      marketingProfitabilityStrategies: {
        id: '1d1ddbb8-9f4d-4161-8017-567f76305755',
        type: 'dropdown',
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
    nextNode: 'e9857dcc-bc04-4bfe-a415-7565d286e826',
  },
  q34: {
    sectionTitle: 'Social Media Follower Count',
    sectionId: 'e9857dcc-bc04-4bfe-a415-7565d286e826',
    firstField: '79761f7d-1eab-4f1f-8fa0-ffb8bd732946',
    fields: {
      socialMediaFollowerCount: {
        id: '79761f7d-1eab-4f1f-8fa0-ffb8bd732946',
        type: 'dropdown',
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
    nextNode: '06849522-7a32-460c-ba05-32ab70c833c3',
  },
  q35: {
    sectionTitle: 'Social Media Engagement Rate',
    sectionId: '06849522-7a32-460c-ba05-32ab70c833c3',
    firstField: '9838e3e6-bf01-4e9b-b88e-f479d74275f7',
    fields: {
      socialMediaEngagementRate: {
        id: '9838e3e6-bf01-4e9b-b88e-f479d74275f7',
        type: 'dropdown',
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
    nextNode: '3a066b29-55d0-4027-88f0-79e9e031262b',
  },
  q36: {
    sectionTitle: 'Content Posting Frequency',
    sectionId: '3a066b29-55d0-4027-88f0-79e9e031262b',
    firstField: 'bda74ddf-b85e-416e-9b8e-4029751d4201',
    fields: {
      contentPostingFrequency: {
        id: 'bda74ddf-b85e-416e-9b8e-4029751d4201',
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
    nextNode: '88b4065c-2488-4f54-a066-3eb0dedc9770',
  },
  q37: {
    sectionTitle: 'Paid Social Media Ads',
    sectionId: '88b4065c-2488-4f54-a066-3eb0dedc9770',
    firstField: 'b215d1df-b01f-4246-b070-24874f6b2ece',
    fields: {
      paidSocialMediaAds: {
        id: 'b215d1df-b01f-4246-b070-24874f6b2ece',
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
    nextNode: '9fd94976-7f3a-439f-a5dc-6caa2aaa6603',
  },
  q38: {
    sectionTitle: 'Social Media Effectiveness',
    sectionId: '9fd94976-7f3a-439f-a5dc-6caa2aaa6603',
    firstField: 'ffd67460-46c4-40bd-80d0-7d027350101a',
    fields: {
      socialMediaEffectiveness: {
        id: 'ffd67460-46c4-40bd-80d0-7d027350101a',
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
    nextNode: '17f5d78c-53e3-4c42-91d0-062cc7e4a964',
  },
  q39: {
    sectionTitle: 'Media Coverage',
    sectionId: '17f5d78c-53e3-4c42-91d0-062cc7e4a964',
    firstField: '45221c7c-1bc0-4cfe-b145-79b9de0ff22f',
    fields: {
      mediaCoverage: {
        id: '45221c7c-1bc0-4cfe-b145-79b9de0ff22f',
        type: 'dropdown',
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
    nextNode: '5b73f660-5803-465e-8732-c692bedd9daa',
  },
  q40: {
    sectionTitle: 'Positive Reviews Percentage',
    sectionId: '5b73f660-5803-465e-8732-c692bedd9daa',
    firstField: '557bd7f7-0427-42b6-9832-99bc743e3dfa',
    fields: {
      positiveReviewsPercentage: {
        id: '557bd7f7-0427-42b6-9832-99bc743e3dfa',
        type: 'dropdown',
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
    nextNode: 'cc047328-f779-4e68-bd3f-6d00fe2c9447',
  },
  q41: {
    sectionTitle: 'Brand Partnerships',
    sectionId: 'cc047328-f779-4e68-bd3f-6d00fe2c9447',
    firstField: '92d8572a-e5b4-4973-8159-3de8ea908bda',
    fields: {
      brandPartnerships: {
        id: '92d8572a-e5b4-4973-8159-3de8ea908bda',
        type: 'dropdown',
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
    nextNode: 'c38a3734-a161-4df7-87e2-9dbba1ef6f5b',
  },
  q42: {
    sectionTitle: 'Reputation Management',
    sectionId: 'c38a3734-a161-4df7-87e2-9dbba1ef6f5b',
    firstField: '2d898bc1-95e0-47b7-97e7-f858c56e80dc',
    fields: {
      reputationManagement: {
        id: '2d898bc1-95e0-47b7-97e7-f858c56e80dc',
        type: 'dropdown',
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
    nextNode: 'ad8941bf-d19c-4dd6-bc97-5cd586ccee6d',
  },
  q43: {
    sectionTitle: 'Industry Events Participation',
    sectionId: 'ad8941bf-d19c-4dd6-bc97-5cd586ccee6d',
    firstField: 'e5351ddb-4e73-4b0c-b6d0-a516347705c7',
    fields: {
      industryEventsParticipation: {
        id: 'e5351ddb-4e73-4b0c-b6d0-a516347705c7',
        type: 'dropdown',
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
