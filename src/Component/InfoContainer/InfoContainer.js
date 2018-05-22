import React from 'react';
import Coffee from '../../assets/images/coffee.png';
import Server from '../../assets/images/server.jpg';
import classes from './InfoContainer.css';
import Employees from '../Employees/Employees';
import Supplier from '../Supplier/Supplier';
import Products from '../Products/Products';
import Inventory from '../Inventory/Inventory';
import Bills from '../Bills/Bills';
import EmployeeTimeClock from '../Employees/EmployeeTimeClock/EmployeeTimeClock';
import ToBePaid from '../Employees/ToBePaid/ToBePaid';
import PaidEmployees from '../Employees/PaidEmployees/PaidEmployees';
import AllCashFlows from '../CashFlows/AllCashFlows/AllCashFlows';
import Aux from '../../hoc/Auxx/Auxx';



const infoContainer = (props) => {

  let main = <img src={Coffee} alt="coffee"/>;

  if(props.location === 'Server'){

    if(props.viewBills){
      main = <Bills type='bill' empData={props.empData} editClicked={props.editClicked}>{props.children}</Bills>;
    }else {
      main = <div>
        {props.status ?
          <Aux>
            <span style={{color: '#0078D7', fontSize: '27px', marginLeft: '20%'}}>Don't Forget to Clock Out Before you Leave Work :)</span>
            <button
              title='Clock Out to end your shift'
              style={{backgroundColor: 'red', width: '150px', float: 'right', borderRadius: '10px'}}
              onClick={props.clockedOut}>Clock Out
            </button>
          </Aux> :

          <Aux>
            <span style={{color: '#0078D7', fontSize: '27px', marginLeft: '20%'}}>Welcome to Work &  Have a Good Day ! :) </span>
            <button
              title='Clock In to start your shift'
              style={{width: '150px', float: 'right', borderRadius: '10px'}}
              onClick={props.clockedIn}>Clock In
            </button>
          </Aux>

        }
        <br/>
        <img src={Server} alt="server"/>

      </div>
    }
  }else {

    if(props.currentCashFlowPanel){
      main = 'current';
    }

    if(props.allCashFlowsPanel){
      main = <AllCashFlows type='allCashFlows'
                           empData={props.allCashFlowsData}
                           editClicked={props.editClicked}>{props.children}</AllCashFlows>;
    }

    if(props.paidEmployeesPanel){
      main = <PaidEmployees type='paidEmployees'
                            empData={props.paidEmployeesData}
                            editClicked={props.editClicked}>{props.children}</PaidEmployees>;
    }

    if(props.toBePaidPanel){
      main = <ToBePaid type='toBePaid'
                       empData={props.toBePaidData}
                       payEmplpoyeeClicked={props.payEmplpoyeeClicked}
                       editClicked={props.editClicked}>{props.children}</ToBePaid>;
    }

    if(props.timeClockPanel){
      main = <EmployeeTimeClock type='timeClock' empData={props.timeClockData} editClicked={props.editClicked}>{props.children}</EmployeeTimeClock>;
    }

    if(props.billsPanel ){
      main = <Bills type='bill' empData={props.billsData} editClicked={props.editClicked}>{props.children}</Bills>;
    }

    if (props.empData && !props.allCashFlowsPanel && !props.currentCashFlowPanel &&
        !props.paidEmployeesPanel && !props.toBePaidPanel && !props.timeClockPanel &&
        !props.adminPanelClicked && !props.supplierPanel && !props.productsPanel &&
        !props.inventoryPanel && !props.billsPanel ) {
      main = <Employees
        registerClicked={props.registerEmpClicked}
        empData={props.empData}
        editClicked={props.editClicked}
        type="employee"> {props.children}</Employees>;

    }

    if ( props.supplierPanel ) {
      main = <Supplier
        registerClicked={props.registerEmpClicked}
        empData={props.supplierData}
        editClicked={props.editClicked}
        type="supplier"> {props.children} </Supplier>;

    }

    if (props.productsPanel  ) {
      main = <Products
        registerClicked={props.registerEmpClicked}
        empData={props.productsData}
        editClicked={props.editClicked}
        addCategoryClicked={props.addCategoryClicked}
        purchaseClicked={props.purchaseClicked}
        type="products"> {props.children} </Products>;

    }

    if ( props.inventoryPanel  ) {
      main = <Inventory
        empData={props.inventoryData}
        type="inventory"> {props.children} </Inventory>;

    }
  }

  return (

    <div className={classes.InfoContainer}>
      {main}

    </div>
  );
};

export default infoContainer;