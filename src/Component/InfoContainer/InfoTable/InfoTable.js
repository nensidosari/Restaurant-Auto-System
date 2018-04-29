import React from 'react';
import InfoHeader from './InfoHeader/InfoHeader';
import InfoRow from './InfoRow/InfoRow';

import classes from './InfoTable.css';

const infoTable = (props) => {

  return (
  <table className={classes.InfoTable}>
    <thead>
    <InfoHeader/>
    </thead>
    <tbody>
    {props.empData.map(emp => (
      <InfoRow editEmpClicked={props.editEmpClicked} empData={emp} key={emp.id}/>
    ))}

    </tbody>
  </table>
  );
};

export default infoTable;