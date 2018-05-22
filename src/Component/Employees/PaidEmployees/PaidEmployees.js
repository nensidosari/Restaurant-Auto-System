import React from 'react';
import InfoTable from '../../InfoContainer/InfoTable/InfoTable';
import classes from './PaidEmployees.css';

import Aux from '../../../hoc/Auxx/Auxx';

const ATTRIBUTES = [
  'Name',
  'Surname',
  'Hours Worked',
  'Hourly Wage',
  'Bonuses',
  'Total',
  'Status'
]

const paidEmployees = (props) => (

  <Aux>
    <div className={classes.Header}>
                <span>
                  <p>Paid Employees</p>
                </span>
    </div>
    <InfoTable type={props.type}
               empData={props.empData}
               attributes={ATTRIBUTES}
               editClicked={props.editClicked}/>
    {props.children}
  </Aux>
);

export default paidEmployees;