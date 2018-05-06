import React from 'react';
import InfoTable from '../InfoContainer/InfoTable/InfoTable';
import classes from './Products.css';

import Aux from '../../hoc/Auxx/Auxx';

const ATTRIBUTES = [
  'Product',
  'Category',
  'Buying Price',
  'Selling Price',
  'Supplier',
  'Purchase'
]

const product = (props) => (

  <Aux>
    <div className={classes.Header}>
                <span>
                  <p>Products Dashboard</p>
                  <button style={{width: '210px', marginLeft: 0}} onClick={props.registerClicked}>+ Add Product</button>

                </span>

      <button style={{width: '210px', marginRight: '20px', backgroundColor: '#FFC107'}}
              onClick={props.addCategoryClicked}>+ Add Category</button>
    </div>



    <InfoTable type={props.type}
               empData={props.empData}
               attributes={ATTRIBUTES}
               purchaseClicked={props.purchaseClicked}
               editClicked={props.editClicked}/>
    {props.children}

  </Aux>
);

export default product;