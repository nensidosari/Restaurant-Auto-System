import React from 'react';

import classes from './RowData.css';

const rowData = (props) => {
  let className = classes.RowData;

  if(props.type === 'order'){
    className =classes.RowDataOrder
  }

  if(props.type === 'supplier'){
    className =classes.RowDataOrder
  }

  if(props.type === 'timeClock'){
    className =classes.RowDataTimeClock
  }

  if(props.type === ('toBePaid'||'paidEmployees')){
    className =classes.RowDataToBePaid
  }

  return (
  <td className={className}>{props.children}</td>
);
}

export default rowData;