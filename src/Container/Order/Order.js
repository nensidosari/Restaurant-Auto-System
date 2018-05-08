import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './Order.css';
import Items from './Items/Items';

class Order extends Component {

  render() {
    let tableNr = this.props.table;

    return (

      <div className={classes.Order}>
        <p>Order</p>
        <div>
          <label>Table Number: </label> <label style={{color: 'red', float: 'right'}}>{tableNr}</label>
        </div>
        <Items empData={this.props.items}/>
        <div>
          <label style={{fontSize: '24px'}}>Total Price: </label>
          <label style={{color: 'red', float: 'right', fontSize: '24px'}}>{this.props.totalPrice}</label>
        </div>
        <button className={classes.ButtonRegister} onClick={this.props.checkoutClicked}>CheckOut</button>
        <button className={classes.ButtonCancel} onClick={this.props.dismissClicked}>Dismiss</button>

      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    table: state.order.tableSelected,
    items: state.order.items,
    totalPrice: state.order.totalPrice
  }
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
