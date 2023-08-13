const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: 'tabler:smart-home',
      badgeContent: 'new',
      badgeColor: 'error',
      children: [
        {
          title: 'Analytics',
          path: '/dashboards/analytics'
        },
        {
          title: 'CRM',
          path: '/dashboards/crm'
        },
        {
          title: 'eCommerce',
          path: '/dashboards/ecommerce'
        }
      ]
    },
    {
      sectionTitle: 'User'
    },
    {
      title: 'Manage Users',
      icon: 'tabler:user',
      children: [
        {
          title: 'List',
          path: '/apps/user/list'
        },
        {
          title: 'Roles and Permissions',
          path: '/apps/roles'
        },
        {
          title: 'Reporting/Flagging',
          path: '/apps/reporting'
        },
        {
          title: 'Bans and Suspension',
          path: '/apps/bans'
        }
      ]
    },
    {
      title: 'Analytics/Insights',
      icon: 'tabler:brand-google-analytics',
      children: [
        {
          title: 'Activity',
          path: '/apps/invoice/list'
        },
        {
          title: 'Analytics',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Data Export',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      sectionTitle: 'Events'
    },
    {
      title: 'Creation/Editing',
      icon: 'tabler:timeline-event-plus',
      children: [
        {
          title: 'Create Event',
          path: '/apps/events/creation'
        },
        {
          title: 'Event List',
          path: '/apps/events/list'
        }
      ]
    },
    {
      title: 'Info/Analytics',
      icon: 'tabler:timeline-event-exclamation',
      children: [
        {
          title: 'List',
          path: '/apps/invoice/list'
        },
        {
          title: 'Details',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Analytics',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Organization/Promotion',
      icon: 'tabler:timeline-event-text',
      children: [
        {
          title: 'Categories/Tags:',
          path: '/apps/invoice/list'
        },
        {
          title: 'Search/Filtering:',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Moderation',
          path: '/apps/invoice/edit'
        },
        {
          title: 'Promotion',
          path: '/apps/invoice/add'
        }
      ]
    },
    {
      title: 'Ticketing/Revenue',
      icon: 'tabler:ticket',
      children: [
        {
          title: 'Sales and Pricing',
          path: '/apps/invoice/list'
        },
        {
          title: 'Options',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Revenue/Financial Reports:',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Attendee/Engagment',
      icon: 'tabler:users-group',
      children: [
        {
          title: 'List',
          path: '/apps/invoice/list'
        },
        {
          title: 'Registration Review',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Feedback and Ratings',
          path: '/apps/invoice/edit'
        },
        {
          title: 'Notifications',
          path: '/apps/invoice/add'
        }
      ]
    },
    {
      sectionTitle: 'Contents'
    },
    {
      title: 'Creation/Editing',
      icon: 'tabler:arrow-autofit-content',
      children: [
        {
          title: 'Static Pages',
          path: '/apps/invoice/list'
        },
        {
          title: 'Creation',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Editing',
          path: '/apps/invoice/edit'
        },
        {
          title: 'Approval',
          path: '/apps/invoice/add'
        }
      ]
    },
    {
      title: 'Organization',
      icon: 'tabler:brackets-contain',
      children: [
        {
          title: 'Categories',
          path: '/apps/invoice/list'
        },
        {
          title: 'Search and Filtering',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Versioning',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Publication/Promotion',
      icon: 'tabler:ease-in-out-control-points',
      children: [
        {
          title: 'Publishing Schedule',
          path: '/apps/invoice/list'
        },
        {
          title: 'Promotion',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Analytics',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Moderation/Reporting',
      icon: 'tabler:container',
      children: [
        {
          title: 'Moderation',
          path: '/apps/invoice/list'
        },
        {
          title: 'Reporting',
          path: '/apps/invoice/preview'
        }
      ]
    },
    {
      sectionTitle: 'Apps'
    },
    {
      title: 'Platform Performance',
      icon: 'tabler:cloud-computing',
      children: [
        {
          title: 'Dashboard',
          path: '/apps/invoice/list'
        },
        {
          title: 'User Analytics',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Event Analytics',
          path: '/apps/invoice/edit'
        },
        {
          title: 'Content Analytics',
          path: '/apps/invoice/add'
        }
      ]
    },
    {
      title: 'Financial Reporting',
      icon: 'material-symbols:finance',
      children: [
        {
          title: 'Revenue Reports',
          path: '/apps/invoice/list'
        },
        {
          title: 'Financial Statements',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Transaction Logs',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'User Reporting/Moderation',
      icon: 'tabler:report',
      children: [
        {
          title: 'User Reports',
          path: '/apps/invoice/list'
        },
        {
          title: 'Activity Logs',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Feedback/Ratings',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Event Reporting',
      icon: 'material-symbols:event-note-outline',
      children: [
        {
          title: 'Event Reports',
          path: '/apps/invoice/list'
        },
        {
          title: 'Attendance and Feedback',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Moderation Logs',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Reporting/Moderation',
      icon: 'simple-icons:modrinth',
      children: [
        {
          title: 'Content Reports',
          path: '/apps/invoice/list'
        },
        {
          title: 'Moderation Logs',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Performance Metrics',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Data Export/Integration',
      icon: 'tabler:database-export',
      children: [
        {
          title: 'Data Export',
          path: '/apps/invoice/list'
        },
        {
          title: 'API Integration',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Data Privacy/Compliance',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      sectionTitle: 'Cloud Functions'
    },
    {
      title: 'Messaging',
      icon: 'tabler:device-mobile-message',
      children: [
        {
          title: 'Inbox',
          path: '/apps/invoice/list'
        },
        {
          title: 'Conversations',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Message Templates',
          path: '/apps/invoice/edit'
        },
        {
          title: 'Message Broadcasting',
          path: '/apps/invoice/add'
        }
      ]
    },
    {
      title: 'Notifications',
      icon: 'tabler:notification',
      children: [
        {
          title: 'Notification Management',
          path: '/apps/invoice/list'
        },
        {
          title: 'User Notifications',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Notification Templates',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Email Communication',
      icon: 'tabler:brand-mailgun',
      children: [
        {
          title: 'Email Templates',
          path: '/apps/invoice/list'
        },
        {
          title: 'Email Campaigns',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Email Analytics',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Push Notifications',
      icon: 'tabler:stack-push',
      children: [
        {
          title: 'Notification Management',
          path: '/apps/invoice/list'
        },
        {
          title: 'User Push Notifications',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Push Notification Analytics',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Real-time Communication',
      icon: 'tabler:brand-hipchat',
      children: [
        {
          title: 'Live Chat',
          path: '/apps/invoice/list'
        },
        {
          title: 'Video Conferencing',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Webinar Management',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Social Media Integeration',
      icon: 'tabler:brand-wechat',
      children: [
        {
          title: 'Social Media Sharing',
          path: '/apps/invoice/list'
        },
        {
          title: 'Social Media Analytics',
          path: '/apps/invoice/preview'
        }
      ]
    },
    {
      title: 'Help Desk and Support',
      icon: 'tabler:help-circle',
      children: [
        {
          title: 'Help Desk Ticketing',
          path: '/apps/invoice/list'
        },
        {
          title: 'Support Knowledge Base',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Support Analytics',
          path: '/apps/invoice/edit'
        },
        {
          title: 'Add',
          path: '/apps/invoice/add'
        }
      ]
    },
    {
      sectionTitle: 'Payment Gateway'
    },
    {
      title: 'Payment Gateway Integration',
      icon: 'tabler:brand-paypal',
      children: [
        {
          title: 'Payment Gateway Configuration',
          path: '/apps/invoice/list'
        },
        {
          title: 'Payment Methods',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Payment Settings',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Transaction Management',
      icon: 'database-dollar',
      children: [
        {
          title: 'Transaction Logs',
          path: '/apps/invoice/list'
        },
        {
          title: 'Refunds and Cancellations',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Dispute Resolution',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Revenue Reports',
      icon: 'tabler:report-money',
      children: [
        {
          title: 'Revenue Reports',
          path: '/apps/invoice/list'
        },
        {
          title: 'Financial Statements',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Transaction History',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Invoicing/Billing',
      icon: 'tabler:file-invoice',
      children: [
        {
          title: 'Invoice Generation',
          path: '/apps/invoice/list'
        },
        {
          title: 'Billing Cycles and Reminders',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Billing Cycles and Reminders',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Payouts/Settlements',
      icon: 'tabler:brand-alipay',
      children: [
        {
          title: 'Payout Management',
          path: '/apps/invoice/list'
        },
        {
          title: 'Payout Reports',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Payout Schedule',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Financial Settings',
      icon: 'tabler:cash-banknote',
      children: [
        {
          title: 'Financial Settings',
          path: '/apps/invoice/list'
        },
        {
          title: 'Tax Management',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Data Privacy and Compliance',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      sectionTitle: 'Regulations'
    },
    {
      title: 'Content Moderation',
      icon: 'mdi-light:content-cut',
      children: [
        {
          title: 'Moderation Dashboard',
          path: '/apps/invoice/list'
        },
        {
          title: 'Generated Content',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Flagged Content',
          path: '/apps/invoice/edit'
        },
        {
          title: 'Moderation Logs',
          path: '/apps/invoice/add'
        }
      ]
    },
    {
      title: 'Event Moderation',
      icon: 'material-symbols:event-note-outline',
      children: [
        {
          title: 'Event Approval',
          path: '/apps/invoice/list'
        },
        {
          title: 'Event Reports',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Flagged Events',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'User Moderation',
      icon: 'pixelarticons:user',
      children: [
        {
          title: 'Bans and Suspension',
          path: '/apps/invoice/list'
        },
        {
          title: 'User Reports',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Flagged Users',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Content Compliance',
      icon: 'material-symbols:rate-review-outline',
      children: [
        {
          title: 'Content Guidelines',
          path: '/apps/invoice/list'
        },
        {
          title: 'Content Reporting',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Compliance Checks',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Moderation Tools',
      icon: 'ant-design:tool-outlined',
      children: [
        {
          title: 'Moderation Settings',
          path: '/apps/invoice/list'
        },
        {
          title: 'Automated Moderation',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Moderation Analytics',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      sectionTitle: 'Settings'
    },
    {
      title: 'General Settings',
      icon: 'uil:setting',
      children: [
        {
          title: 'Platform Information',
          path: '/apps/invoice/list'
        },
        {
          title: 'Platform Appearance',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Language and Localization',
          path: '/apps/invoice/edit'
        },
        {
          title: 'Timezone and Date Formats',
          path: '/apps/invoice/add'
        }
      ]
    },
    {
      title: 'User Management',
      icon: 'mingcute:user-setting-line',
      children: [
        {
          title: 'User Registration',
          path: '/apps/invoice/list'
        },
        {
          title: 'Roles and Permissions',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Privacy Settings',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Event Settings',
      icon: 'material-symbols:event-list-outline',
      children: [
        {
          title: 'Creation Rules',
          path: '/apps/invoice/list'
        },
        {
          title: 'Categories and Tags',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Ticketing Options',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Payment Settings',
      icon: 'streamline:money-wallet-money-payment-finance-wallet',
      children: [
        {
          title: 'Gateway Integration',
          path: '/apps/invoice/list'
        },
        {
          title: 'Fees and Revenue Share',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Payout Settings',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Notification Settings',
      icon: 'uiw:notification',
      children: [
        {
          title: 'Email Templates:',
          path: '/apps/invoice/list'
        },
        {
          title: 'Push Notification Configuration',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Help Desk and Support',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Content Settings',
      icon: 'icon-park-outline:setting-config',
      children: [
        {
          title: 'Moderation Guidelines',
          path: '/apps/invoice/list'
        },
        {
          title: 'Content Filtering and Automated Moderation',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Compliance and Data Privacy',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'API Settings',
      icon: 'ic:outline-integration-instructions',
      children: [
        {
          title: 'API Access and Integration',
          path: '/apps/invoice/list'
        },
        {
          title: 'Webhooks and Event Triggers',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Analytics and Tracking Codes:',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      sectionTitle: 'Help'
    },
    {
      title: 'Knowledge Base',
      icon: 'carbon:share-knowledge',
      children: [
        {
          title: 'Help Articles',
          path: '/apps/invoice/list'
        },
        {
          title: 'Categories and Tags',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Search and Filtering',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Help Desk',
      icon: 'carbon:help',
      children: [
        {
          title: 'Ticket Management',
          path: '/apps/invoice/list'
        },
        {
          title: 'Ticket Assignment and Escalation',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Ticket Status and Updates',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'FAQs',
      icon: 'wpf:faq',
      children: [
        {
          title: 'FAQ Management',
          path: '/apps/invoice/list'
        },
        {
          title: 'Categorization and Tagging',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Search and Filtering',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Support/Live Chat',
      icon: 'fluent:chat-28-regular',
      children: [
        {
          title: 'Chat Interface',
          path: '/apps/invoice/list'
        },
        {
          title: 'Agent Availability and Routing',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Chat History and Transcripts',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'User Guides',
      icon: 'ri:guide-line',
      children: [
        {
          title: 'User Onboarding Guides:',
          path: '/apps/invoice/list'
        },
        {
          title: 'Video Tutorials:',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Step-by-Step Instructions:',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Community Forums',
      icon: 'healthicons:forum-outline',
      children: [
        {
          title: 'Forum Categories and Topics',
          path: '/apps/invoice/list'
        },
        {
          title: 'Moderation and User Management',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Forum Notifications and Subscriptions',
          path: '/apps/invoice/edit'
        }
      ]
    },
    {
      title: 'Support Analytics',
      icon: 'material-symbols:support-agent-rounded',
      children: [
        {
          title: 'Ticket Metrics/Analysis',
          path: '/apps/invoice/list'
        },
        {
          title: 'Knowledge Base Usage',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Chat Response Times',
          path: '/apps/invoice/edit'
        }
      ]
    }
  ]
}

export default navigation
