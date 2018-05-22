import React from 'react';
import InfoTable from '../InfoContainer/InfoTable/InfoTable';
import classes from './Bills.css';
import Card from '../UserInterface/Card/Card';

import Aux from '../../hoc/Auxx/Auxx';

const ATTRIBUTES = [
  'Date Purchased',
  'Id',
  'Table Nr',
  'Total Price'
];

const bills = (props) => {
  let totalRevenue = 0;
  let counter = 0;
  for(let key in props.empData) {

    totalRevenue = totalRevenue + props.empData[key].totalPrice;
    counter++;
  }

  return (

    <Aux>
      <div className={classes.Header}>
                <span>
                  <p>Bills Dashboard</p>
                </span>
      </div>
      <div>
        <div className={classes.LeftDiv}>
          <InfoTable type={props.type}
                     empData={props.empData}
                     attributes={ATTRIBUTES}
                     editClicked={props.editClicked}/>
        </div>
        <div className={classes.RightDiv}>
          <Card title='Revenue' cnt={totalRevenue}/>
          <Card title='Nr.Bills' cnt={counter}/>
        </div>
      </div>
      {props.children}
    </Aux>
  );
}

export default bills;