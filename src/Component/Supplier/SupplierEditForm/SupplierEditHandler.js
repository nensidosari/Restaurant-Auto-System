import React from 'react';

import classes from './SupplierEditHandler.css';

const supplierEditForm = (props) => {


  let inputChangedHandler = () => {

  };

  return(
    <form className={classes.EmpEditForm}>
      <p>Detailed Information</p>
      <span className={classes.LeftDiv}>
          <label>Name</label>
          <input type="text" ref={c => this.name = c}
                 onChange={inputChangedHandler} placeholder="Enter company name" name="name" />

          <label>Address</label>
          <input type="text" ref={c => this.address = c}
                 name="address" placeholder="Enter address" onChange={inputChangedHandler}  />

          <label>Phone</label>
          <input type="text" ref={c => this.phone = c} name="phone" onChange={inputChangedHandler}
                 placeholder="Enter phone nr"/>


      </span>
      <span className={classes.RightDiv}>
        <div>
          <label>Product</label>
          <input type="text" ref={c => this.product = c} onChange={inputChangedHandler}
                 name="product" />
        </div>
        <div>
          <label>Category</label>
          <input type="text" ref={c => this.category = c} onChange={inputChangedHandler}
                 name="category" placeholder="Enter category"/>
        </div>
        <div>
          <label>Price</label>
          <input type="number" ref={c => this.price = c} onChange={inputChangedHandler}
                 name="price" placeholder="Enter price"/>
        </div>
        <div>
          <button onClick={props.closeForm} className={classes.ButtonCancel}>Delete</button>
          <button className={classes.ButtonRegister}>Edit</button>
        </div>
      </span>
    </form>
  );
}

export default supplierEditForm;