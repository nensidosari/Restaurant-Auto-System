import React from 'react';

import classes from './Item.css';

const item = (props) => {

  let clicked = () => {
    if(props.number){
      props.clicked(props.number);
    }

    if(props.name){
      props.clicked(props.name);
    }


  };

  return (

    <div className={classes.Item} onClick={clicked}>
      {props.children}
    </div>
  );
};

export default item;