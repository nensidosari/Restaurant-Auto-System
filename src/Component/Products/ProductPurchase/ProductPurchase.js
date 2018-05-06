import React from 'react';

import classes from './ProductPurchase.css';


const productPurchase = (props) => {

  console.log(props.product);

  let totalPrice = 0;

  const purchaseClick = () => {
    totalPrice = this.quantity.value * props.product[0];
  }

  return(
    <form className={classes.ProductPurchase}>
      <p>Purchasing Product</p>
      <span className={classes.LeftDiv}>
          <label>Product Name :</label>
          <label style={{color: 'red'}}> {props.product[2]} </label>
        <br/>

          <label>Buying Price : </label>
          <label style={{color: 'red'}}> {props.product[0]} </label>
        <br/>

      </span>
      <span className={classes.RightDiv}>

        <div>
          <label>Category :</label>
          <label style={{color: 'red'}}> {props.product[1]} </label>
          <br/>

        </div>
        <div>
          <label>Supplier :</label>
          <label style={{color: 'red'}}> {props.product[4]} </label>
          <br/>

        </div>

        <div>
          <label>Quantity :</label>
          <input type="number" ref={c => this.quantity = c}
               placeholder="Enter buying quantity" name="quantity" />
          <br/>

        </div>

        <div>
          <label>Total Price :</label>
          <label style={{color: 'red'}}> {totalPrice} </label>
          <br/>

        </div>


        <div>
          <button onClick={props.closeForm} className={classes.ButtonCancel}>Cancel</button>
          <button className={classes.ButtonRegister} >Purchase</button>
        </div>
      </span>
    </form>
  );
}

export default productPurchase;
