import React from 'react';
import InfoTable from '../InfoContainer/InfoTable/InfoTable';
import classes from './Supplier.css';

import Aux from '../../hoc/Auxx/Auxx';

const ATTRIBUTES = [
  'Company Name',
  'Address',
  'Phone',
]

const supplier = (props) => (

  <Aux>
    <div className={classes.Header}>
                <span>
                  <p>Supplier Dashboard</p>
                  <button style={{width: '220px', marginLeft: 0}} onClick={props.registerClicked}>+ Register Supplier</button>

                </span>
    </div>



    <InfoTable type={props.type} empData={props.empData} attributes={ATTRIBUTES} editClicked={props.editClicked}/>
    {props.children}

  </Aux>
);

export default supplier;