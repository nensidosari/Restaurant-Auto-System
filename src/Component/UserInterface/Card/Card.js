import React from 'react';

import classes from './Card.css';
import Bills from '../../../assets/icons/Bills.png';
import Revenue from '../../../assets/icons/Revenue.png';

const card = (props) => {
  let icon = '';

  if (props.title === 'Revenue') {
      icon = Revenue;
    }

  if (props.title === 'Nr.Bills') {
    icon = Bills;
  }


  return (
    <div className={classes.Card}>
      <div className={classes.CardDiv}>
        <div className={classes.CardTitle}>{props.title}</div>
        <div className={classes.CardText}>
          <img src={icon} className={classes.Img} alt={props.title}/>
          <span style={{fontSize:'60px'}}>{props.cnt}</span>
        </div>
      </div>
    </div>
  );
};

export default card;