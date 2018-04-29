import React from 'react';
import RowData from './RowData/RowData';


import classes from './InfoRow.css';

const infoRow = (props) => (
    <tr className={classes.InfoRow} onClick={props.editEmpClicked}>
      <RowData>{props.empData.name}</RowData>
      <RowData>{props.empData.surname}</RowData>
      <RowData>{props.empData.birthdate}</RowData>
      <RowData>{props.empData.phone}</RowData>
      <RowData>{props.empData.address}</RowData>
      <RowData>{props.empData.type}</RowData>
      <RowData>{props.empData.password}</RowData>
    </tr>


);

export default infoRow;