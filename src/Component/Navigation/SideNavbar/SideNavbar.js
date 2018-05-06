import React from 'react';
import SideNavItem from './SideNavItem/SideNavItem';

import classes from './SideNavbar.css';

const sideNavbar = (props) => (
  <div className={classes.SideNavbar}>
    <SideNavItem clicked={props.employersClicked} active={props.setActiveEmp}>Employees</SideNavItem>
    <SideNavItem clicked={props.supplierPanelClicked} active={props.setActiveSupp}>Suppliers</SideNavItem>
    <SideNavItem clicked={props.productsPanelClicked} active={props.setActiveProducts}>Products</SideNavItem>
    <SideNavItem>Inventory</SideNavItem>
    <SideNavItem>Orders</SideNavItem>
    <SideNavItem>Cash Flows</SideNavItem>
  </div>
);

export default sideNavbar;