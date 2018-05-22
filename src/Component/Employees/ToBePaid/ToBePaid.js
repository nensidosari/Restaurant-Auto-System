import React from 'react';
import InfoTable from '../../InfoContainer/InfoTable/InfoTable';
import classes from './ToBePaid.css';

import Aux from '../../../hoc/Auxx/Auxx';

const ATTRIBUTES = [
  'Name',
  'Surname',
  'Hours Worked',
  'Hourly Wage',
  'Wage',
  'Pay'
]

const toBePaid = (props) => (

  <Aux>
    <div className={classes.Header}>
                <span>
                  <p>To Be Paid Employees</p>
                </span>
    </div>
    <InfoTable type={props.type}
               empData={props.empData}
               attributes={ATTRIBUTES}
               payEmplpoyeeClicked={props.payEmplpoyeeClicked}
               editClicked={props.editClicked}/>
    {props.children}
  </Aux>
);

export default toBePaid;