import React from 'react';

import classes from './Panel.css';

const panel = (props) => (
  <div className={classes.Panel}>
    <label onClick={props.clicked}>{props.location} Panel</label>
  </div>
);

export default panel;