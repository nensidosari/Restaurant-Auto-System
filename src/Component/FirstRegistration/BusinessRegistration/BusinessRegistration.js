import React from 'react';
import classes from './BusinessRegistration.css';

const businessRegistration = (props) => {

  let saveInfo = () => {
    props.clickedNext( this.phone.value, this.address.value, this.nipt.value, this.table.value );
  }

  return (

    <div className={classes.BusinessRegistration}>
      <p> {props.restaurantName} </p>
      <div className={classes.InputDiv}>
        <div>
        {/*<span className={classes.CustomFileUpload}ref={c => this.path = c} name="path">
            <input  type="file" />
              Picture QKR...
            <span style={{fontSize: '12px', display: 'block', margin: '5px auto'}}>Click to Upload</span>
          </span>*/}
          <input type="text" ref={c => this.phone = c} placeholder="Enter phone..." name="phone"/>
          <input type="text" ref={c => this.nipt = c} placeholder="Enter nipt..." name="nipt"/>

        </div>
        <div>
          <input type="text" ref={c => this.address = c} placeholder="Enter Address..." name="address"/>
          <input type="number" ref={c => this.table = c} placeholder="Nr of Tables.." name="table"/>
        </div>
      </div>
      <button onClick={saveInfo}> Next >></button>
    </div>
  );
}

export default businessRegistration;