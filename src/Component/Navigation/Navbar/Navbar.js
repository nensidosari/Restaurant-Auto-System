import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem';
import Panel from '../Panel/Panel';
import Settings from '../Settings/Settings';
import Logo from '../Logo/Logo';
import classes from './Navbar.css';


const navbar = (props) => (
  <div className={classes.Navbar}>
    <Logo restaurantName={props.restaurantName}/>
    <Panel clicked={props.adminPanelClicked || props.serverPanelClicked} location={props.location}/>
    <Settings/>
    <NavbarItem link='/' logoutClicked={props.logoutClicked}>Logout</NavbarItem>
  </div>
);

export default navbar;