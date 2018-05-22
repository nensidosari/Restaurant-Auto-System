import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem';
import Panel from '../Panel/Panel';
import Settings from '../Settings/Settings';
import Logo from '../Logo/Logo';
import classes from './Navbar.css';
import Bill_Icon from '../../../assets/icons/Bill.png';
//import {Link} from 'react-router-dom';


const navbar = (props) => (
  <div className={classes.Navbar}>
    <Logo restaurantName={props.restaurantName}/>
    <Panel clicked={props.adminPanelClicked || props.serverPanelClicked} location={props.location}/>
    <img src={Bill_Icon} title='Bills' onClick={props.viewBillsClicked}/>
    <Settings/>
    <NavbarItem link='/logout' logoutClicked={props.logoutClicked}>Logout</NavbarItem>
  </div>
);

export default navbar;