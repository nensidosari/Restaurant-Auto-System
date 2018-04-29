import React from 'react';
import HeaderData from './HeaderData/HeaderData';

import classes from './InfoHeader.css';

const infoHeader = (props) => (
  <tr className={classes.InfoHeader}>
    <HeaderData>Name</HeaderData>
    <HeaderData>Surname</HeaderData>
    <HeaderData>Birthdate</HeaderData>
    <HeaderData>Phone</HeaderData>
    <HeaderData>Address</HeaderData>
    <HeaderData>Type</HeaderData>
    <HeaderData>Password</HeaderData>
  </tr>
);

export default infoHeader;