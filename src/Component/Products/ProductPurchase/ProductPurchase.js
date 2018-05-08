import React,{Component} from 'react';

import classes from './ProductPurchase.css';


class productPurchase extends Component {

  state = {
    totalPrice: 0,
    quantity: 0
  }

  purchasePrice = (event) => {

    let quantity = event.target.value;
    let totalPrice = this.props.product[0] * quantity;
    this.setState({totalPrice: totalPrice, quantity: quantity});

  };

  purchasing = () => {
    let data = {
      productName: this.props.product[2],
      quantity: this.state.quantity,
      category:this.props.product[1],
      supplier:this.props.product[4],
      sellingPrice: this.props.product[3]
    }

    this.props.savePurchase(data);
  };

  render() {
    console.log('here');
    return (
      <form className={classes.ProductPurchase}>
        <p>Purchasing Product</p>
        <span className={classes.LeftDiv}>
          <div>
            <label>Product Name :</label>
            <label style={{color: 'red'}}> {this.props.product[2]} </label>
          </div>

          <div>
            <label>Buying Price : </label>
            <label style={{color: 'red'}} id="buyingPrice"> {this.props.product[0]} </label>
          </div>

          <div>
            <label>Category :</label>
            <label style={{color: 'red'}}> {this.props.product[1]} </label>
          </div>

          <div>
            <label>Supplier :</label>
            <label style={{color: 'red'}}> {this.props.product[4]} </label>
          </div>

          <div>
            <label>Quantity :</label>
            <input type="number" id="quantity"
                   placeholder="Enter buying quantity"
                   name="quantity"
                   onChange={(event) => this.purchasePrice(event)}/>
          </div>

          <div>
            <label>Total Price :</label>
            <label style={{color: 'red'}}>   {this.state.totalPrice} Lek</label>
          </div>

          <div>
            <button onClick={this.props.closeForm} className={classes.ButtonCancel}>Cancel</button>
            <button className={classes.ButtonRegister} onClick={this.purchasing}>Purchase</button>
          </div>

      </span>

      </form>
    );
  }
}

export default productPurchase;
