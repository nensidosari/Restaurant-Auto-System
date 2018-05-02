import React from 'react';
import HeaderData from './HeaderData/HeaderData';

import classes from './InfoHeader.css';

const infoHeader = (props) => (
  <tr className={classes.InfoHeader}>
    {props.attributes.map(att => (
      <HeaderData key={att}>{att}</HeaderData>
    ))}

  </tr>
);

export default infoHeader;