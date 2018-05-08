import React from 'react';

import classes from './RowData.css';

const rowData = (props) => {
  let className = classes.RowData;

  if(props.type === 'order'){
    className =classes.RowDataOrder
  }
  return (
  <td className={className}>{props.children}</td>
);
}

export default rowData;