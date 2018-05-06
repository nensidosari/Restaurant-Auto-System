import React from 'react';
import RowData from './RowData/RowData';

import classes from './InfoRow.css';
import * as actionTypes from "../../../../store/actions";
import {connect} from "react-redux";

const infoRow = (props) => {

  const clicked = () => {
    console.log('clicked');
    props.editClicked();
    props.onSaveId(props.empData.id);
  }

  const purchaseClicked = () => {
    console.log('pclicked');
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
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(infoRow);