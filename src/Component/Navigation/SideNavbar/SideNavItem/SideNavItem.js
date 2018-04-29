import React from 'react';
import classes from './SideNavItem.css';

const sideNavItem = (props) => (
  <div className={classes.SideNavItem}>
    <a
      onClick={props.clicked}
      href={props.link}
      className={props.active ? classes.active : null}>
      {props.children}</a>
  </div>
);

export default sideNavItem;