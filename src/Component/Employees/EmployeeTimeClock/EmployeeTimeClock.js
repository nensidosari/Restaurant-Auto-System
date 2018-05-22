import React from 'react';
import InfoTable from '../../InfoContainer/InfoTable/InfoTable';
import classes from './EmployeeTimeClock.css';

import Aux from '../../../hoc/Auxx/Auxx';

const ATTRIBUTES = [
  'Name',
  'Surname',
  'ClockIn',
  'ClockOut',
  'Hours Worked',
  'Hourly Wage',
  'Accumulated Wage'
]

const employeeTimeClock = (props) => (

  <Aux>
    <div className={classes.Header}>
                <span>
                  <p>Employees Time Clock</p>
                </span>
    </div>
    <InfoTable type={props.type} empData={props.empData} attributes={ATTRIBUTES} editClicked={props.editClicked}/>
    {props.children}
  </Aux>
);

export default employeeTimeClock;