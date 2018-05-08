import React from 'react';
import Coffee from '../../assets/images/coffee.png';
import Server from '../../assets/images/server.jpg';
import classes from './InfoContainer.css';
import Employees from '../Employees/Employees';
import Supplier from '../Supplier/Supplier';
import Products from '../Products/Products';
import Inventory from '../Inventory/Inventory';



const infoContainer = (props) => {

  let main = <img src={Coffee} alt="coffee"/>;

  if(props.location === 'Server'){
    main = <div><span style={{color: '#0078D7', fontSize: '27px', marginLeft:'20%'}}>Welcome to Work &  Have a Good Day ! :) </span>
      <br/>
      <img  src={Server} alt="server"/></div>
  }

  if(props.empData && !props.adminPanelClicked && !props.supplierPanel && !props.productsPanel && !props.inventoryPanel){
    main =<Employees
      registerClicked={props.registerEmpClicked}
      empData={props.empData}
      editClicked={props.editClicked}
      type="employee"> {props.children}</Employees>;

  }

  if(!props.adminPanelClicked && props.supplierPanel && !props.productsPanel && !props.inventoryPanel){
    main = <Supplier
      registerClicked={props.registerEmpClicked}
      empData={props.supplierData}
      editClicked={props.editClicked}
      type="supplier"> {props.children} </Supplier>;

  }

  if(!props.adminPanelClicked && !props.supplierPanel && props.productsPanel && !props.inventoryPanel){
    main =  <Products
      registerClicked={props.registerEmpClicked}
      empData={props.productsData}
      editClicked={props.editClicked}
      addCategoryClicked={props.addCategoryClicked}
      purchaseClicked={props.purchaseClicked}
      type="products"> {props.children} </Products>;

  }

  if(!props.adminPanelClicked && !props.supplierPanel && !props.productsPanel && props.inventoryPanel){
    main =  <Inventory
      empData={props.inventoryData}
      type="inventory"> {props.children} </Inventory>;

  }

  return (

    <div className={classes.InfoContainer}>
      {main}

    </div>
  );
};

export default infoContainer;