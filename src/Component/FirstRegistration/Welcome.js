import React from 'react';
import classes from './Welcome.css';


const welcome = (props)=> {

  let name = '';
  let saveName = () => {
    name = this.name.value;
    props.clickedNext(name);
  }


  return (
    <div className={classes.Welcome}>
      <p> Welcome to Restaurant Automation System </p>
      <label>Enter Your Restaurant Name: </label>
      <div className={classes.Input}>
        <input type="text" ref={c => this.name = c} placeholder="Restaurant Name..." name="name"/>
      </div>
      <button onClick={saveName} >Next >> </button>
    </div>
  );
};

export default welcome;