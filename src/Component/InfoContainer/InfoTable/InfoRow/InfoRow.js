import React from 'react';
import RowData from './RowData/RowData';

import classes from './InfoRow.css';
import * as actionTypes from "../../../../store/actions/actionTypes";
import * as actions from '../../../../store/actions/index';
import {connect} from "react-redux";

const infoRow = (props) => {

  const clicked = () => {
    props.editClicked();
    props.onSaveId(props.empData.id);
  }

  const decreaseClicked = () => {
    props.onDecreaseQuantity(props.empData.name);
    props.onIncreaseInventory(props.empData.name);
  }

  const purchaseClicked = () => {
    props.purchaseClicked();
    props.onSaveId(props.empData.id);
  }

  const payEmployeeClicked = () => {
    props.payEmplpoyeeClicked();
    props.onSaveId(props.empData.id);
  }

  switch(props.type) {
    case 'employee': {
      return (
        <tr className={classes.InfoRow} onClick={clicked}>

          <RowData>{props.empData.name}</RowData>
          <RowData>{props.empData.surname}</RowData>
          <RowData>{props.empData.birthdate}</RowData>
          <RowData>{props.empData.phone}</RowData>
          <RowData>{props.empData.address}</RowData>
          <RowData>{props.empData.type}</RowData>
          <RowData>{props.empData.password}</RowData>
          <RowData>{props.empData.wage}</RowData>
        </tr>
      )
    }
    case 'supplier': {
      return (
        <tr className={classes.InfoRow} onClick={clicked}>

          <RowData type='supplier'>{props.empData.name}</RowData>
          <RowData type='supplier'>{props.empData.address}</RowData>
          <RowData type='supplier'>{props.empData.phone}</RowData>
        </tr>
      )
    }
    case 'products': {
      return (
        <tr className={classes.InfoRow} onClick={clicked}>

          <RowData>{props.empData.product}</RowData>
          <RowData>{props.empData.category}</RowData>
          <RowData>{props.empData.buyingPrice}</RowData>
          <RowData>{props.empData.sellingPrice}</RowData>
          <RowData>{props.empData.supplier}</RowData>
          <RowData><button onClick={purchaseClicked} className={classes.Button} >Purchase</button></RowData>
        </tr>
      )
    }

    case 'inventory': {
      return (
        <tr className={classes.InfoRow}>

          <RowData>{props.empData.productName}</RowData>
          <RowData>{props.empData.category}</RowData>
          <RowData>{props.empData.supplier}</RowData>
          <RowData>{props.empData.sellingPrice}</RowData>
          <RowData>{props.empData.quantity}</RowData>
        </tr>
      )
    }

    case 'order': {
      return (
        <tr className={classes.InfoRow} onClick={decreaseClicked}>

          <RowData type='order'>{props.empData.name}</RowData>
          <RowData type='order'>{props.empData.quantity}</RowData>
          <RowData type='order'>{props.empData.price }</RowData>
        </tr>
      )
    }
    case 'bill': {
      return (
        <tr className={classes.InfoRow}>

          <RowData type='bill'>{props.empData.date}</RowData>
          <RowData type='bill'>{props.empData.id}</RowData>
          <RowData type='bill'>{props.empData.tableSelected}</RowData>
          <RowData type='bill'>{props.empData.totalPrice }</RowData>
        </tr>
      )
    }
    case 'timeClock': {
      return (
        <tr className={classes.InfoRow}>

          <RowData type='timeClock'>{props.empData.name} </RowData>
          <RowData type='timeClock'>{props.empData.surname} </RowData>
          <RowData type='timeClock'>{props.empData.clockIn} </RowData>
          <RowData type='timeClock'>{props.empData.clockOut }</RowData>
          <RowData type='timeClock'>{props.empData.hoursWorked }</RowData>
          <RowData type='timeClock'>{props.empData.hourlyWage } Lek</RowData>
          <RowData type='timeClock'>{props.empData.accWage } Lek</RowData>
        </tr>
      )
    }
    case 'toBePaid': {
      return (
        <tr className={classes.InfoRow}>

          <RowData type='toBePaid'>{props.empData.name} </RowData>
          <RowData type='toBePaid'>{props.empData.surname} </RowData>
          <RowData type='toBePaid'>{props.empData.hoursWorked }</RowData>
          <RowData type='toBePaid'>{props.empData.hourlyWage } Lek</RowData>
          <RowData type='toBePaid'>{props.empData.accWage } Lek</RowData>
          <RowData><button className={classes.Button} onClick={payEmployeeClicked} >Pay</button></RowData>
        </tr>
      )
    }
    case 'paidEmployees': {
      return (
        <tr className={classes.InfoRow}>

          <RowData type='paidEmployees'>{props.empData.name} </RowData>
          <RowData type='paidEmployees'>{props.empData.surname} </RowData>
          <RowData type='paidEmployees'>{props.empData.hoursWorked }</RowData>
          <RowData type='paidEmployees'>{props.empData.hourlyWage } Lek</RowData>
          <RowData type='paidEmployees'>{props.empData.bonus } Lek</RowData>
          <RowData type='paidEmployees'>{props.empData.totalPayment } Lek</RowData>
          <RowData><span style={{color: 'green'}}>Paid</span></RowData>
        </tr>
      )
    }
    default: return null;
  }

};


const mapStateToProps = state => {
  return {
    emp: state.employees
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveId: (id) => dispatch({type: actionTypes.SAVE_ID, resultPrsId: id}),
    onDecreaseQuantity: (name) => dispatch(actions.decreaseItemQuantity(name)),
    onIncreaseInventory: (name) => dispatch(actions.increaseInventory(name))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(infoRow);