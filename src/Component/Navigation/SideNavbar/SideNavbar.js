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
              <SideNavItem clicked={props.billsPanelClicked} active={props.setActiveBills}>Orders</SideNavItem>
              <SideNavItem clicked={props.timeClockPanelClicked} active={props.setActiveTimeClock} >Employee Time Clock</SideNavItem>
              <SideNavItem clicked={props.toBePaidClicked} active={props.setActiveToBePaid}>To Be Paid</SideNavItem>
              <SideNavItem clicked={props.paidEmployeesClicked} active={props.setActivePaidEmployees}>Paid Employees</SideNavItem>
              <SideNavItem clicked={props.currentCashFlowClicked} active={props.setActiveCurrentCashFlow} >Current Cash Flows</SideNavItem>
              <SideNavItem clicked={props.allCashFlowsClicked} active={props.setActiveAllCashFlows}>All Cash Flows</SideNavItem>
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