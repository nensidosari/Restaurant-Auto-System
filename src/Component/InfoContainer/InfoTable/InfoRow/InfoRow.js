import React from 'react';
import RowData from './RowData/RowData';


import classes from './InfoRow.css';

const infoRow = (props) => {

  let show = '';

  switch(props.type) {
    case 'employee': {
      return (
        <tr className={classes.InfoRow} onClick={props.editClicked}>

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
        <tr className={classes.InfoRow} onClick={props.editClicked}>

          <RowData>{props.empData.name}</RowData>
          <RowData>{props.empData.address}</RowData>
          <RowData>{props.empData.phone}</RowData>
          <RowData>{props.empData.product}</RowData>
          <RowData>{props.empData.category}</RowData>
          <RowData>{props.empData.price}</RowData>
          <RowData><a href="/">Purchase</a></RowData>
        </tr>
      )
    }
  }


};

export default infoRow;