import React,{Component} from 'react';

import classes from './CheckoutForm.css';
import ItemsTable from './ItemsTable/ItemsTable';

class checkoutForm extends Component {

  closeClicked = () => (
    this.props.closeForm()
);

  saveClicked = () => (
    this.props.saveOrder()
)

  render() {
    let noTaxPrice = this.props.totalPrice*0.8;

    return (
      <form className={classes.CheckoutForm}>
        <p>Checking Out Order</p>
        <span className={classes.LeftDiv}>
          <div>
            <label>Table Number :</label>
            <label style={{color: 'red'}}> {this.props.table} </label>
          </div>

          <div style={{maxHeight: '200px', overflowY: 'auto'}}>
            <ItemsTable items={this.props.items}/>
          </div>

          <div>
            <label>Total Price :</label>
            <label style={{color: 'red'}}>   {this.props.totalPrice} Lek</label>
          </div>
          <div>
            <label style={{fontSize: '16px'}}>Tax : </label>
            <label style={{fontSize: '16px'}}> 20% </label>
          </div>
          <div>
            <label style={{fontSize: '16px'}}>Price Without Tax : </label>
            <label style={{fontSize: '16px'}}> {noTaxPrice} </label>
          </div>
          <div>
            <button onClick={this.closeClicked} className={classes.ButtonCancel}>Cancel</button>
            <button className={classes.ButtonRegister} onClick={this.saveClicked}>Proceed</button>
          </div>

      </span>

      </form>
    );
  }
}

export default checkoutForm;
