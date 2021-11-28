import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Master']
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Cetegory',
  //   to: '/master/cetegory',
  //   icon: 'cil-pencil',
  // },

  //Components
  {
    _tag: 'CSidebarNavItem',
    name: 'Add Booking',
    to: '/add-booking',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Add User',
    to: '/add-user',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'View Booking',
    to: '/view-booking',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'View Users',
    to: '/view-users',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Create Email List',
    to: '/create-email-list',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Profit Calculator',
    to: '/profit-calculator',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Account Summary',
    to: '/account-summary',
    icon: 'cil-pencil',
  },

{
    _tag: 'CSidebarNavDropdown',
    name: 'Authentication',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
      },

    ],
  },

  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },


]

export default _nav
