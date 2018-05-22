import React from 'react';
import InfoTable from '../InfoContainer/InfoTable/InfoTable';
import classes from './Employees.css';

import Aux from '../../hoc/Auxx/Auxx';

const ATTRIBUTES = [
  'Name',
  'Surname',
  'Birthdate',
  'Phone',
  'Address',
  'Type',
  'Password',
  'Wage'
]

const employee = (props) => (

  <Aux>
    <div className={classes.Header}>
                <span>
                  <p>Employees Dashboard</p>
                  <button onClick={props.registerClicked}>+ Register Employee</button>
                </span>
    </div>
    <InfoTable type={props.type} empData={props.empData} attributes={ATTRIBUTES} editClicked={props.editClicked}/>
    {props.children}
  </Aux>
);

export default employee;