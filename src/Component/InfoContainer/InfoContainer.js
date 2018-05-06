import React from 'react';
import Coffee from '../../assets/images/coffee.png';
import classes from './InfoContainer.css';
import Employees from '../Employees/Employees';
import Supplier from '../Supplier/Supplier';
import Products from '../Products/Products';



const infoContainer = (props) => {

  let main = <img src={Coffee} alt="coffee"/>;

  if(props.empData && !props.adminPanelClicked && !props.supplierPanel && !props.productsPanel){
    main =<Employees
      registerClicked={props.registerEmpClicked}
      empData={props.empData}
      editClicked={props.editClicked}
      type="employee"> {props.children}</Employees>;

  }

  if(!props.adminPanelClicked && props.supplierPanel && !props.productsPanel){
    main = <Supplier
      registerClicked={props.registerEmpClicked}
      empData={props.supplierData}
      editClicked={props.editClicked}
      type="supplier"> {props.children} </Supplier>;

  }

  if(!props.adminPanelClicked && !props.supplierPanel && props.productsPanel){
    main =  <Products
      registerClicked={props.registerEmpClicked}
      empData={props.productsData}
      editClicked={props.editClicked}
      addCategoryClicked={props.addCategoryClicked}
      purchaseClicked={props.purchaseClicked}
      type="products"> {props.children} </Products>;

  }

  return (

    <div className={classes.InfoContainer}>
      {main}

    </div>
  );
};

export default infoContainer;