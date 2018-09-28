export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Settings',
    url: '/settings',
    icon: 'icon-settings',
    children: [
      {
        name: 'Institution Details',
        url: '/buttons/buttons',
        // icon: 'icon-cursor'
      },
      {
        name: 'Academic Details',
        url: '/settings/academicDetails',
        // icon: 'icon-cursor'
      },
      {
        name: 'Student Import',
        url: '/buttons/brand-buttons',
        // icon: 'icon-cursor'
      },
      {
        name: 'Employee Import',
        url: '/buttons/brand-buttons',
        // icon: 'icon-cursor'
      },
      {
        name: 'Application List',
        url: '/buttons/brand-buttons',
        // icon: 'icon-cursor'
      },
      {
        name: 'Employee Application',
        url: '/buttons/brand-buttons',
        // icon: 'icon-cursor'
      }
      // {
      //   name: 'Student Import',
      //   url: '/buttons/brand-buttons',
      //   icon: 'icon-cursor'
      // }
    ]
  },
  {
    name: 'Academic',
    url: '/buttons',
    icon: 'icon-people',
    children: [
      {
        name: 'Cource & Batch',
        url: '/buttons/buttons',
        // icon: 'icon-cursor'
      },
      {
        name: 'Subjects',
        url: '/buttons/dropdowns',
        // icon: 'icon-cursor'
      },
      {
        name: 'Lesson Planing',
        url: '/buttons/brand-buttons',
        // icon: 'icon-cursor'
      },
      {
        name: 'Time Table',
        url: '/buttons/brand-buttons',
        // icon: 'icon-cursor'
      },
      {
        name: 'Exams',
        url: '/buttons/brand-buttons',
        // icon: 'icon-cursor'
      },
      {
        name: 'Assignments & Notes',
        url: '/buttons/brand-buttons',
        // icon: 'icon-cursor'
      },
      {
        name: 'Caricular',
        url: '/buttons/brand-buttons',
        // icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'HR/Payroll',
    url: '/buttons',
    icon: 'icon-wallet',
    children: [
      {
        name: 'Employee Management',
        url: '/buttons',
        // icon: 'icon-cursor', 
        children: [
          {
            name: 'Add User Type',
            url: '/buttons',
            // icon: 'icon-cursor', 
            
          },
          {
            name: 'Add Employee',
            url: '/buttons/dropdowns',
            // icon: 'icon-cursor'
          },
          {
            name: 'Add Department',
            url: '/buttons/brand-buttons',
            // icon: 'icon-cursor'
          },
          {
            name: 'Add Designation',
            url: '/buttons/brand-buttons',
            // icon: 'icon-cursor'
          },
          {
            name: 'Employee List',
            url: '/buttons/brand-buttons',
            // icon: 'icon-cursor'
          },
          {
            name: 'Add Bank Details',
            url: '/buttons/brand-buttons',
            // icon: 'icon-cursor'
          },
          {
            name: 'Print List',
            url: '/buttons/brand-buttons',
            // icon: 'icon-cursor'
          },
          {
            name: 'Employee Attandence',
            url: '/buttons/brand-buttons',
            // icon: 'icon-cursor'
          }
        ]
      },
      {
        name: 'Payroll',
        url: '/buttons/dropdowns',
        // icon: 'icon-cursor'
        children: [
          {
            name: 'Pay Head',
            url: '/buttons/buttons'
            // icon: 'icon-cursor'
          },
          {
            name: 'Payment Types',
            url: '/buttons/dropdowns'
            // icon: 'icon-cursor'
          },
          {
            name: 'Salary Settings',
            url: '/buttons/brand-buttons'
            // icon: 'icon-cursor'
          },
          {
            name: 'Employee Salary',
            url: '/buttons/brand-buttons'
            // icon: 'icon-cursor'
          },
          {
            name: 'generate Pay Slip',
            url: '/buttons/brand-buttons'
            // icon: 'icon-cursor'
          },
          {
            name: 'Salary Statement',
            url: '/buttons/brand-buttons'
            // icon: 'icon-cursor'
          }
        ]
      },
      {
        name: 'Leave Management',
        url: '/buttons/brand-buttons',
        // icon: 'icon-cursor'
        children: [
          {
            name: 'Leave Category',
            url: '/buttons/buttons'
            // icon: 'icon-cursor'
          },
          {
            name: 'Leave Details',
            url: '/buttons/dropdowns'
            // icon: 'icon-cursor'
          },
          {
            name: 'Leave Application',
            url: '/buttons/brand-buttons'
            // icon: 'icon-cursor'
          },
          {
            name: 'Leave Approvals',
            url: '/buttons/brand-buttons'
            // icon: 'icon-cursor'
          },
          {
            name: 'generate Pay Slip',
            url: '/buttons/brand-buttons'
            // icon: 'icon-cursor'
          },
          {
            name: 'Salary Statement',
            url: '/buttons/brand-buttons'
            // icon: 'icon-cursor'
          }
        ]
      },
      {
        name: 'Attendance',
        url: '/buttons/brand-buttons',
        // icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Students',
    url: '/base',
    icon: 'icon-user',
    children: [
      {
        name: 'Student Category',
        url: '/base/cards'
      },
      {
        name: 'Students Addmission',
        url: '/base/carousels'
      },
      {
        name: 'Student List',
        url: '/base/collapses'
      },
      {
        name: 'Student Attandance',
        url: '/base/forms'
      },
      {
        name: 'Print List',
        url: '/base/paginations'
      },
      {
        name: 'Gardian List',
        url: '/base/popovers'
      },
      {
        name: 'Roll Number',
        url: '/base/progress'
      },
      {
        name: 'Student Attandance Import',
        url: '/base/switches'
      },
      {
        name: 'Student Gate Pass',
        url: '/base/tables'
      },
      {
        name: 'Student ID Card',
        url: '/base/tabs'
      }
    ]
  },
  {
    name: 'Finance',
    url: '/buttons',
    icon: 'icon-wallet',
    children: [
      {
        name: 'Fees',
        url: '/buttons',
        // icon: 'icon-cursor', 
        children: [
          {
            name: 'Fee Category',
            url: '/buttons',
            // icon: 'icon-cursor', 
            
          },
          {
            name: 'Fee Sub Category',
            url: '/buttons/dropdowns',
            // icon: 'icon-cursor'
          },
          {
            name: 'Fee Sub Category Fine',
            url: '/buttons/brand-buttons',
            // icon: 'icon-cursor'
          },
          {
            name: 'Fee Waiver',
            url: '/buttons/brand-buttons',
            // icon: 'icon-cursor'
          },
          {
            name: 'Fee Template',
            url: '/buttons/brand-buttons',
            // icon: 'icon-cursor'
          },
          {
            name: 'Fee Allocation',
            url: '/buttons/brand-buttons',
            // icon: 'icon-cursor'
          },
          {
            name: 'Fee Collection',
            url: '/buttons/brand-buttons',
            // icon: 'icon-cursor'
          },
          {
            name: 'Quick Payment',
            url: '/buttons/brand-buttons',
            // icon: 'icon-cursor'
          },
          {
            name: 'Reports',
            url: '/buttons/brand-buttons',
            // icon: 'icon-cursor'
          }
        ]
      },
      {
        name: 'Accounting',
        url: '/buttons/dropdowns',
        // icon: 'icon-cursor'
        children: [
          {
            name: 'Accounting Group',
            url: '/buttons/buttons'
            // icon: 'icon-cursor'
          },
          {
            name: 'Voucher Master',
            url: '/buttons/dropdowns'
            // icon: 'icon-cursor'
          },
          {
            name: 'Voucher Head',
            url: '/buttons/brand-buttons'
            // icon: 'icon-cursor'
          },
          {
            name: 'Create Voucher',
            url: '/buttons/brand-buttons'
            // icon: 'icon-cursor'
          },
          {
            name: 'Day Book',
            url: '/buttons/brand-buttons'
            // icon: 'icon-cursor'
          },
          {
            name: 'Cash Book',
            url: '/buttons/brand-buttons'
            // icon: 'icon-cursor'
          },
          {
            name: 'Bank Book',
            url: '/buttons/brand-buttons'
            // icon: 'icon-cursor'
          },
          {
            name: 'Report',
            url: '/buttons/brand-buttons'
            // icon: 'icon-cursor'
          }
        ]
      }
    ]
  },
  {
    name: 'Library',
    url: '/base',
    icon: 'icon-notebook',
    children: [
      {
        name: 'Add Category',
        url: '/base/cards'
      },
      {
        name: 'Add Books',
        url: '/base/carousels'
      },
      {
        name: 'Issue Book',
        url: '/base/collapses'
      },
      {
        name: 'Request Details',
        url: '/base/forms'
      },
      {
        name: 'Book Return',
        url: '/base/paginations'
      },
      {
        name: 'Reports',
        url: '/base/popovers'
      }
    ]
  },
  {
    name: 'Transports',
    url: '/base',
    icon: 'icon-plane',
    children: [
      {
        name: 'Add Vehicle',
        url: '/base/cards'
      },
      {
        name: 'Add Driver',
        url: '/base/carousels'
      },
      {
        name: 'Add Route',
        url: '/base/collapses'
      },
      {
        name: 'Add Destination',
        url: '/base/forms'
      },
      {
        name: 'Transport Allocation',
        url: '/base/paginations'
      },
      {
        name: 'Fee Collection',
        url: '/base/popovers'
      }
    ]
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  }
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success'
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger'
  // }
];
