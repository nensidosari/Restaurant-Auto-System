import React from 'react';
import classes from './RegisterTrigger.css';

const registerTrigger = (props) => (
  <div className={classes.RegisterTrigger}>
    <button onClick={props.clicked} >+ Register New Restaurant</button>
  </div>
)

export default registerTrigger;