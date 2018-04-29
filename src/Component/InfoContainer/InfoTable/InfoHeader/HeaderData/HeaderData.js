import React from 'react';

import classes from './HeaderData.css';

const headerData = (props) => (
  <th className={classes.HeaderData}>{props.children}</th>
);

export default headerData;