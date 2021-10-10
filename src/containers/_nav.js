import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Master']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Cetegory',
    to: '/master/cetegory',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Brand',
    to: '/master/brand',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Discount',
    to: '/master/discount',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Product',
    to: '/master/product',
    icon: 'cil-pencil',
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Operation']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Operation',
    to: '/operation/operation',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Production',
    to: '/operation/production',
    icon: 'cil-pencil',
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Report']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Report',
    to: '/report/report-one',
    icon: 'cil-pencil',
  },
 


 

  
  
 
  
 
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
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
