import React from 'react';

import classes from './SupplierRegForm.css';


const supplierRegForm = (props) => {

  const saveData = () => {

    const data = {
      name: this.name.value,
      phone: this.phone.value,
      address: this.address.value,
    }

    props.saveSupplier(data);
  }

  return(
    <div className={classes.SupplierRegForm}>
      <p>Please fill in this form</p>
      <span className={classes.LeftDiv}>

          <label>Company Name</label>
          <input type="text" ref={c => this.name = c} placeholder="Enter company name" name="name" />

         <label>Address</label>
          <input type="text" ref={c => this.address = c}
                 name="address" placeholder="Enter address"/>

          <label>Phone</label>
          <input type="text" ref={c => this.phone = c} name="phone"
                 placeholder="Enter phone nr"/>

        <button onClick={props.closeForm} className={classes.ButtonCancel}>Cancel</button>
        <button onClick={saveData} className={classes.ButtonRegister}>Save</button>
      </span>


    </div>
  );
};

export default supplierRegForm;
