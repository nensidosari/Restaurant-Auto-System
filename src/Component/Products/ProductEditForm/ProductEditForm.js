import React from 'react';

import classes from './ProductEditForm.css';

const productEditForm = (props) => {

  let inputChangedHandler = () => {

  };
  return(
    <form className={classes.ProductEditForm}>
      <p>Detailed Information</p>
      <span className={classes.LeftDiv}>
          <label>Product Name</label>
          <input type="text" ref={c => this.name = c}
                 value={props.product[2]}
                 onChange={inputChangedHandler} placeholder="Enter product name" name="name" />

          <label>Buying Price</label>
          <input type="text" ref={c => this.buyingPrice = c}
                 value={props.product[0]}
                 name="buyingPrice" placeholder="Enter buying Price" onChange={inputChangedHandler}  />

          <label>Selling Price</label>
          <input type="text" ref={c => this.sellingPrice = c} name="sellingPrice"
                 value={props.product[3]}
                 onChange={inputChangedHandler}
                 placeholder="Enter selling Price"/>


      </span>
      <span className={classes.RightDiv}>

        <div>
          <label>Category</label>
          <input type="text" ref={c => this.category = c}
                 value={props.product[1]}
                 onChange={inputChangedHandler}
                 name="category" placeholder="Enter category"/>
        </div>
        <div>
          <label>Supplier</label>
          <input type="supplier" ref={c => this.supplier = c}
                 value={props.product[4]}
                 onChange={inputChangedHandler}
                 name="supplier" placeholder="Enter supplier"/>
        </div>
        <div>
          <button onClick={props.closeForm} className={classes.ButtonCancel}>Delete</button>
          <button className={classes.ButtonRegister}>Edit</button>
        </div>
      </span>
    </form>
  );
}

export default productEditForm;
