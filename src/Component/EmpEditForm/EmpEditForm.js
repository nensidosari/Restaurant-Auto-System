import React from 'react';

import classes from './EmpEditForm.css';

const empEditForm = (props) => {

  return(
    <div className={classes.EmpEditForm}>
      <p>Please fill in this form</p>
      <span className={classes.LeftDiv}>
          <label>Name</label>
          <input type="text" ref={c => this.name = c} placeholder="Enter name" name="name" value={props.employees[2]}/>

          <label>Surname</label>
          <input type="text" ref={c => this.surname = c}
                 name="surname" placeholder="Enter surname" value={props.employees[5]} />

          <label>Phone</label>
          <input type="text" ref={c => this.phone = c} name="phone"
                 value={props.employees[4]}
                 placeholder="Enter phone nr"/>

          <label>Address</label>
          <input type="text" ref={c => this.address = c}
                 value={props.employees[0]}
                 name="address" placeholder="Enter address"/>

      </span>
      <span className={classes.RightDiv}>
        <div>
          <label>Birthdate</label>
          <input type="text" ref={c => this.date = c}
                 value={props.employees[1]}
                 name="date" />
        </div>
        <div>
          <label>Password</label>
          <input type="text" ref={c => this.password = c}
                 value={props.employees[3]}
                 name="password" placeholder="Enter password"/>
        </div>
        <div>
          <label>Type</label>
          <input type="number" ref={c => this.type = c}
                 value={props.employees[6]}
                 name="type" placeholder="1 for admin or 2 for server"/>
        </div>
        <div>
          <button onClick={props.closeForm} className={classes.ButtonCancel}>Delete</button>
          <button className={classes.ButtonRegister}>Edit</button>
        </div>
      </span>
    </div>
  );
}

export default empEditForm;