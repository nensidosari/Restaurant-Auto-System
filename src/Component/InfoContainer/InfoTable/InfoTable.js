import React from 'react';
import InfoHeader from './InfoHeader/InfoHeader';
import InfoRow from './InfoRow/InfoRow';

import classes from './InfoTable.css';

const infoTable = (props) => {

  return (
  <table className={classes.InfoTable}>
    <thead>
    <InfoHeader  attributes={props.attributes}/>
    </thead>
    <tbody>
    {props.empData.map(emp => (
      <InfoRow type={props.type} editClicked={props.editClicked} empData={emp} key={emp.id}/>
    ))}

    </tbody>
  </table>
  );
};

export default infoTable;