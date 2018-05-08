import React from 'react';
import classes from './Login.css';

//import {Link} from 'react-router-dom';
import Aux from '../../hoc/Auxx/Auxx';

const login = (props) => {
  let main = '';

  const checkLoginCredentials = () => {
    props.clicked(this.username.value, this.password.value);
  }

  if(!props.restaurantName ) {
    props.changeLogin();
    console.log(props.restaurantName);
  }

  if(props.restaurantName && props.restaurantQkr){
    main = (
      <Aux>
        <p>Bar Caffee and Restaurant {props.restaurantName}</p>
        <div className={classes.DivLogin}>
           <input className={classes.InpUsername}
                  ref={c => this.username = c}
                  name="username"
                  type="text" placeholder="Enter Username..."/>
          <input ref={c => this.password = c} name="password" type="password" placeholder="Enter Password..."/>
          <button onClick={checkLoginCredentials}>Log In</button>
        </div>
      </Aux>)
  }

  return (
    <div className={classes.Login}>
      {main}

    </div>
  );

}

export default login;