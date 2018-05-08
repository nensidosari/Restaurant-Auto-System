import React from 'react';
import InfoTable from '../InfoContainer/InfoTable/InfoTable';
import classes from './Inventory.css';

import Aux from '../../hoc/Auxx/Auxx';

const ATTRIBUTES = [
  'Product',
  'Category',
  'Supplier',
  'Selling Price',
  'Quantity Available'
]

const product = (props) => (

  <Aux>
    <div className={classes.Header}>
                <span>
                  <p>Inventory Dashboard</p>

                </span>

    </div>



    <InfoTable type={props.type}
               empData={props.empData}
               attributes={ATTRIBUTES}
               />
    {props.children}

  </Aux>
);

export default product;