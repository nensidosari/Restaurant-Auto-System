import React from 'react';
import InfoTable from '../../InfoContainer/InfoTable/InfoTable';
import classes from './AllCashFlows.css';

import Aux from '../../../hoc/Auxx/Auxx';

const ATTRIBUTES = [
  'Revenue',
  'Expenses',
  'Net Profit',
  'Net Loss'
]

const paidEmployees = (props) => (

  <Aux>
    <div className={classes.Header}>
                <span>
                  <p>All Cash Flows</p>
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