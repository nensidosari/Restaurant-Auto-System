import React, {Component} from 'react';
import RestaurantBuilder from '../RestaurantBuilder/RestaurantBuilder';
//import {Route, Redirect, Switch,Link} from 'react-router-dom';
import Login from '../../Component/Login/Login';
import Admin from '../Admin/Admin';
import Server from '../Server/Server';
import Aux from '../../hoc/Auxx/Auxx';
import axios from "axios/index";
import {connect} from "react-redux";
import * as actions from "../../store/actions";

class Layout extends Component {

  state = {
    restaurant: {
      name: '0',
      address: '0',
      phonenr: '0',
      qkr: '0',
      tableNr: '0'
    },
    login: false,
    loggedIn: false,
    error: null,
    type: '0'
  }

  //TODO: CHANGE LOGGEDIN TO FALSE


  componentDidMount() {
    this.props.onCheckAuth();

    axios.get('https://restaurant-auto-system.firebaseio.com/restaurant.json')
      .then(response => {
        console.log(response);
        this.setState({restaurant: response.data});

      }).then(response => {
        if(this.state.restaurant) {
          this.setState({login: true});
        }
      }).catch(error => {
        this.setState({error: error});
      });

    //TODO: BELOW THE REAL REQUEST

    /*axios.get('http://192.168.0.114:8080/restaurant')
      .then(response => {
        this.setState({restaurant: response.data.restaurant});
            console.log(response);
      }).then(response => {
      if(this.state.restaurant) {
        this.setState({login: true});
      }
    }).catch(error => {
      console.log(error);
      this.setState({error: error});
    });*/
  }

  checkLoginCredentials = (username, password) => {

    this.props.onLogin(username,password);



  }

  noRestaurantHandler = () => {
    this.setState({login: false});
  }

  businessSavingHandler = (data) => {
    this.setState({restaurant: data, login: true});
  }

  /*getEmployerLoggedInType = () =>{
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
  }*/

  logoutButtonHandler = () => {
    this.setState({login: true, loggedIn: false});
  }

  render (){

    let login = '';

    if(!localStorage.getItem('uuid')){
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

    if(localStorage.getItem('uuid')){
        if(this.props.admin === 1){
          admin =  <Admin restaurantName={this.state.restaurant.name} logoutClicked={this.logoutButtonHandler}/>;
        }
        if(this.props.admin === 2){
          server =  <Server restaurantName={this.state.restaurant.name}
                            tableNr={this.state.restaurant.tableNr}
                            logoutClicked={this.logoutButtonHandler}/>;
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


const mapStateToProps = state => {
  return {
    uuid: state.login.uuid,
    admin: state.login.admin,
    userId: state.login.userId,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username,password) => dispatch(actions.login(username, password)),
    onCheckAuth: () => dispatch(actions.checkAuthState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);