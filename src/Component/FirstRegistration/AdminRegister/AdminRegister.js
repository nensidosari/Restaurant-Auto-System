import React from 'react';
import classes from './AdminRegister.css';

const adminRegister= (props) => {

  let saveInfo = () => {
    props.clickedNext( this.name.value,  this.surname.value,
      this.phone.value,  this.address.value, this.birthdate.value, this.password.value );
  }

  return (

    <div className={classes.BusinessRegistration}>
      <p> Please Enter Admin Information </p>
      <div className={classes.InputDiv}>
        <div>
          <input type="text" ref={c => this.name = c} placeholder="Enter name..." name="name"/>
          <input type="text" ref={c => this.surname = c} placeholder="Enter surname..." name="surname"/>
          <input type="text" ref={c => this.phone = c} placeholder="Enter phone..." name="phone" />

        </div>
        <div>
          <input type="text" ref={c => this.address = c} placeholder="Enter Address..." name="address"/>
          <input type="date" ref={c => this.birthdate = c} placeholder="Enter birthdate..."  title="Enter birthdate" name="birthdate"/>
          <input type="password" ref={c => this.password = c} placeholder="Enter Password..." name="password"/>
        </div>
      </div>
      <button onClick={saveInfo}> Next >></button>
    </div>
  );
}

export default adminRegister;