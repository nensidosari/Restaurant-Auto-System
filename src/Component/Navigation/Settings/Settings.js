import React from 'react';
import SettingsIcon from '../../../assets/icons/SettingsIcon.png';
import classes from './Setings.css';

const settings = (props) => (
  <div className={classes.Settings}>
    <img src={SettingsIcon} alt="Settings" title="Edit Profile"/>
  </div>
);

export default settings;
