import React, {Component} from 'react';
import RestaurantBuilder from '../RestaurantBuilder/RestaurantBuilder';
//import {Route, Redirect, Switch,Link} from 'react-router-dom';
import Login from '../../Component/Login/Login';
import Admin from '../Admin/Admin';
import Aux from '../../hoc/Auxx/Auxx';
import axios from "axios/index";

class Layout extends Component {

  state = {
    restaurant: {
      name: '0',
      address: '0',
      qkr: '0',
      tableNr: '0'
    },
    login: false,
    loggedIn: true,
    error: null,
    admin: '0'
  }

  //TODO: CHANGE LOGGEDIN TO FALSE


  componentDidMount() {
    axios.get('https://restaurant-auto-system.firebaseio.com/restaurant.json')
      .then(response => {
        this.setState({restaurant: response.data});

      }).then(response => {
        if(this.state.restaurant) {
          this.setState({login: true});
        }
      }).catch(error => {
        this.setState({error: error});
      });
  }

  checkLoginCredentials = (username, password) => {
    let data = {
      username: username,
      password: password
    }

    axios.post('https://restaurant-auto-system.firebaseio.com/loginCredentials.json', data)
      .then(response => {
        if(response.status === 200) {
          this.setState({login: false, loggedIn: true});
        }
      }).catch(error => {
      this.setState({error: error});
    });

  }

  noRestaurantHandler = () => {
    this.setState({login: false});
  }

  businessSavingHandler = (data) => {
    this.setState({restaurant: data, login: true});
  }

  getEmployerLoggedInType = () =>{
    axios.get('https://restaurant-auto-system.firebaseio.com/employer.json')
      .then(response => {
        if(response.data.typeId === 1){
          this.setState({admin:1});
        }
        if(response.data.typeId === 0){
          this.setState({admin:0});
        }
      }).catch(error => {
      this.setState({error: error});
    });
  }

  logoutButtonHandler = () => {
    this.setState({login: true, loggedIn: false});
  }

  render (){

    let login = '';

    if(this.state.login && !this.state.loggedIn){
      login = <Login
        restaurantName={this.state.restaurant.name}
        changeLogin={this.noRestaurantHandler}
        restaurantQkr={this.state.restaurant.qkr}
        clicked={this.checkLoginCredentials}/>;
    }

    let restaurantBuilder = '';

    if(!this.state.login && !this.state.loggedIn && !this.state.restaurant.name){
      restaurantBuilder =  <RestaurantBuilder businessSaving={this.businessSavingHandler}/>;
    }
    let admin = "";
    let server = "";

    if(this.state.loggedIn){
      this.getEmployerLoggedInType();
        if(this.state.admin === 1){
          admin =  <Admin restaurantName={this.state.restaurant.name} logoutClicked={this.logoutButtonHandler}/>;
        }
        if(this.state.admin === 0){
          server = <div> server page </div>
        }
    }


    return (
      <Aux>

          {restaurantBuilder}
          {login}
          {admin}
          {server}

      </Aux>
    );
  }
}

export default Layout;