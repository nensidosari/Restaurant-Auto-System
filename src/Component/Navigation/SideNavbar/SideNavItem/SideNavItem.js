import React from 'react';
import classes from './SideNavItem.css';

const sideNavItem = (props) => {

  const clicked = () => {
    props.clicked(props.name);
  }

  let link = <a
    onClick={props.clicked}
    href={props.link}
    className={props.active ? classes.active : null}>
    {props.children}</a>;

  if(props.location === 'Server') {
    link = <a
      onClick={clicked}
      href={props.link}
      className={props.active ? classes.active : null}>
      {props.children}</a>;
  }
  return (
    <div className={classes.SideNavItem}>
      {link}
    </div>
  );
}

export default sideNavItem;