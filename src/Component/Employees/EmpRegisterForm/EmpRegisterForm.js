import React from 'react';

import classes from './EmpRegisterForm.css';
import {connect} from "react-redux";
import * as actionTypes from "../../../store/actions/actionTypes";

const empRegisterForm = (props) => {

  const saveData = () => {
    const data = {
      name: this.name.value,
      surname: this.surname.value,
      phone: this.phone.value,
      address: this.address.value,
      birthdate: this.date.value,
      password: this.password.value,
      type: this.type.value,
      wage: this.wage.value
    }

    props.onAddEmployee(data);
    props.saveEmployee(data);
  }

  return(
    <div className={classes.EmpRegisterForm}>
      <p>Please fill in this form</p>
      <span className={classes.LeftDiv}>
          <label>Name</label>
          <input type="text" ref={c => this.name = c} placeholder="Enter name" name="name" />

          <label>Surname</label>
          <input type="text" ref={c => this.surname = c}
                 name="surname" placeholder="Enter surname" />

          <label>Phone</label>
          <input type="text" ref={c => this.phone = c} name="phone"
                 placeholder="Enter phone nr"/>

          <label>Address</label>
          <input type="text" ref={c => this.address = c}
                 name="address" placeholder="Enter address"/>

      </span>
      <span className={classes.RightDiv}>
        <div>
          <label>Birthdate</label>
          <input type="date" ref={c => this.date = c}
                 name="date" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" ref={c => this.password = c}
                 name="password" placeholder="Enter password"/>
        </div>
        <div>
          <label>Type</label>
          <input type="number" ref={c => this.type = c}
                 name="type" placeholder="1 for admin or 2 for server"/>
        </div>
        <div>
          <label>Wage</label>
          <input type="number" ref={c => this.wage = c}
                 name="wage" placeholder="Enter the hourly wage of the employee"/>
        </div>
        <div>
          <button onClick={props.closeForm} className={classes.ButtonCancel}>Cancel</button>
          <button onClick={saveData} className={classes.ButtonRegister}>Save</button>
        </div>
      </span>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    emp: state.emp.ingredients
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddEmployee: (data) => dispatch({type: actionTypes.ADD_EMPLOYEE, personData: data}),
    onDeleteEmployee: (id) => dispatch({type: actionTypes.DELETE_EMPLOYEE, resultPrsId: id}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(empRegisterForm);
