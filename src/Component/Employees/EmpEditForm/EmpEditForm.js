import React from 'react';

import classes from './EmpEditForm.css';
import * as actionTypes from "../../../store/actions";
import {connect} from "react-redux";

const empEditForm = (props) => {

  let inputChangedHandler = () => {

  };

  return(
    <form className={classes.EmpEditForm}>
      <p>Detailed Information</p>
      <span className={classes.LeftDiv}>
          <label>Name</label>
          <input type="text" ref={c => this.name = c} value={props.employees[2]}
                 onChange={inputChangedHandler} placeholder="Enter name" name="name" />

          <label>Surname</label>
          <input type="text" ref={c => this.surname = c} value={props.employees[5]}
                 name="surname" placeholder="Enter surname" onChange={inputChangedHandler} />

          <label>Phone</label>
          <input type="text" ref={c => this.phone = c} name="phone" onChange={inputChangedHandler}
                 value={props.employees[4]}
                 placeholder="Enter phone nr"/>

          <label>Address</label>
          <input type="text" ref={c => this.address = c} onChange={inputChangedHandler}
                 value={props.employees[0]}
                 name="address" placeholder="Enter address"/>

      </span>
      <span className={classes.RightDiv}>
        <div>
          <label>Birthdate</label>
          <input type="text" ref={c => this.date = c} onChange={inputChangedHandler}
                 value={props.employees[1]}
                 name="date" />
        </div>
        <div>
          <label>Password</label>
          <input type="text" ref={c => this.password = c} onChange={inputChangedHandler}
                 value={props.employees[3]}
                 name="password" placeholder="Enter password"/>
        </div>
        <div>
          <label>Type</label>
          <input type="number" ref={c => this.type = c} onChange={inputChangedHandler}
                 value={props.employees[6]}
                 name="type" placeholder="1 for admin or 2 for server"/>
        </div>
        <div>
          <button onClick={props.closeForm} className={classes.ButtonCancel}>Delete</button>
          <button className={classes.ButtonRegister}>Edit</button>
        </div>
      </span>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    emp: state.emp.employees
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddEmployee: (employee) => dispatch({type: actionTypes.ADD_EMPLOYEE, personData: employee}),
    onDeleteEmployee: (id) => dispatch({type: actionTypes.DELETE_EMPLOYEE, resultPrsId: id}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(empEditForm);