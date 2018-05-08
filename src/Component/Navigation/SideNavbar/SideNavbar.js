import React from 'react';
import SideNavItem from './SideNavItem/SideNavItem';

import classes from './SideNavbar.css';

const sideNavbar = (props) => {
    switch (props.location) {
      case 'Admin':
          return (
            <div className={classes.SideNavbar}>
              <SideNavItem clicked={props.employersClicked} active={props.setActiveEmp}>Employees</SideNavItem>
              <SideNavItem clicked={props.supplierPanelClicked} active={props.setActiveSupp}>Suppliers</SideNavItem>
              <SideNavItem clicked={props.productsPanelClicked} active={props.setActiveProducts}>Products</SideNavItem>
              <SideNavItem clicked={props.inventoryPanelClicked} active={props.setActiveInventory}>Inventory</SideNavItem>
              <SideNavItem>Orders</SideNavItem>
              <SideNavItem>Cash Flows</SideNavItem>
            </div>
          );
      case 'Server':
        return (
          <div className={classes.SideNavbar}>
            <SideNavItem clicked={props.tablesClicked} active={props.setActiveTables}>Tables</SideNavItem>
            {props.categories.map(cat => (
              <SideNavItem key={cat.name}
                           clicked={props.othersClicked}
                           active={cat.active}
                           location={props.location}
                           name={cat.name}>{cat.name}</SideNavItem>
            ))}

          </div>
        );
      default: return null;
    }
};

export default sideNavbar;