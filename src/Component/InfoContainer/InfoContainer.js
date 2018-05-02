import React from 'react';
import Coffee from '../../assets/images/coffee.png';
import classes from './InfoContainer.css';
import Employees from '../Employees/Employees';
import Supplier from '../Supplier/Supplier';



const infoContainer = (props) => {

  let main = <img src={Coffee} alt="coffee"/>;

  if(props.empData && !props.adminPanelClicked && !props.supplierPanel){
    main =<Employees
      registerClicked={props.registerEmpClicked}
      empData={props.empData}
      editClicked={props.editClicked}
      type="employee"> {props.children}</Employees>;

  }

  if(!props.adminPanelClicked && props.supplierPanel){
    main = <Supplier
      registerClicked={props.registerEmpClicked}
      empData={props.supplierData}
      editClicked={props.editClicked}
      addCategoryClicked={props.addCategoryClicked}
      type="supplier"> {props.children} </Supplier>;

  }

  return (

    <div className={classes.InfoContainer}>
      {main}

    </div>
  );
};

export default infoContainer;