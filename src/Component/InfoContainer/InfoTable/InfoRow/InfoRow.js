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
        </tr>
      )
    }
    case 'supplier': {
      return (
        <tr className={classes.InfoRow} onClick={clicked}>

          <RowData>{props.empData.name}</RowData>
          <RowData>{props.empData.address}</RowData>
          <RowData>{props.empData.phone}</RowData>
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