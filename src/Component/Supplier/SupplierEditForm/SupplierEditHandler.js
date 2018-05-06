import React from 'react';

import classes from './SupplierEditHandler.css';

const supplierEditForm = (props) => {


  let inputChangedHandler = () => {

  };
  return(
    <form className={classes.SupplierEditForm}>
      <p>Detailed Information</p>
      <span className={classes.LeftDiv}>
          <label>Name</label>
          <input type="text" ref={c => this.name = c}
                 value={props.suppliers[1]}
                 onChange={inputChangedHandler} placeholder="Enter company name" name="name" />

          <label>Address</label>
          <input type="text" ref={c => this.address = c}
                 value={props.suppliers[0]}
                 name="address" placeholder="Enter address" onChange={inputChangedHandler}  />

          <label>Phone</label>
          <input type="text" ref={c => this.phone = c} name="phone"
                 value={props.suppliers[2]}
                 onChange={inputChangedHandler}
                 placeholder="Enter phone nr"/>


      </span>

        <div>
          <button onClick={props.closeForm} className={classes.ButtonCancel}>Delete</button>
          <button className={classes.ButtonRegister}>Edit</button>
        </div>

    </form>
  );
}

export default supplierEditForm;