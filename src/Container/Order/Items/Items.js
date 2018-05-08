import React from 'react';

import classes from './Items.css';
import InfoHeader from '../../../Component/InfoContainer/InfoTable/InfoHeader/InfoHeader';
import InfoRow from '../../../Component/InfoContainer/InfoTable/InfoRow/InfoRow';
import {connect} from "react-redux";
import * as actions from "../../../store/actions";

const ATTRIBUTES = [
  'Product __ ',
  'Quantity __ ',
  'Price __ '
];

const items = (props) => {

  let row =<tr><td aria-colspan="3">No Products Selected</td></tr>;

  if(props.empData[0] !== ""){

    row = props.empData.map(emp => (
      <InfoRow type='order'
               editClicked={props.editClicked}
               empData={emp}
               key={emp.name}/>
    ))
   }

  return (

    <div className={classes.Items}>
      <table className={classes.InfoTable}>
        <thead style={{position:'fixed'}}>
        <InfoHeader  attributes={ATTRIBUTES}/>
        </thead>
        <tbody>
          <tr style={{width: '52px'}}><td style={{color: 'transparent'}} aria-colspan="3">
            khkhkhjhdbjfhdjfhjdhgkjhfkjh dfbfjdmbgjfmdbgmbfmg dfmbgmfdmbggjgjgjgjy kjh </td></tr>
          {row}
        </tbody>
      </table>
    </div>
  );
};



const mapStateToProps = state => {
  return {
    table: state.order.tableSelected,
    items: state.order.items,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (item) => dispatch(actions.addItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(items);
