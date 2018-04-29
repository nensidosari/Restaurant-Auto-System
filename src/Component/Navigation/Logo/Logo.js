import React from 'react';

import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <label>{props.restaurantName}</label>
  </div>
);

export default logo;