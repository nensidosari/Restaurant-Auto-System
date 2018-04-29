import React from 'react';

import classes from './RowData.css';

const rowData = (props) => (
  <td className={classes.RowData}>{props.children}</td>
);

export default rowData;