import React, {Component} from 'react';
import Welcome from '../../Component/FirstRegistration/Welcome';
import BusinessRegistration from '../../Component/FirstRegistration/BusinessRegistration/BusinessRegistration';
import AdminRegister from '../../Component/FirstRegistration/AdminRegister/AdminRegister';
import RegisterTrigger from '../../Component/FirstRegistration/RegisterTrigger/RegisterTrigger';
import classes from './RestaurantBuilder.css';
import axios from 'axios';

class RestaurantBuilder extends Component {

  state = {
    restaurant: {
      name: null,
      address: null,
      qkr: null,
      tableNr: null
    },
    next: null,
    admin: null,
    error: null
  }

 newRestaurantClickedHandler = () => {
   this.setState({next: 1});
 }


  nameSavingHandler = (name) => {
    this.setState({restaurant: {name: name}});
    this.changeState(2);
  }


  changeState = (nr) => {
    this.setState({next: nr});
  }

  businessInfoSavingHandler = (...info) => {
    //TODO: PICTURE BUTTON WORKING
    //this.setState({restaurant: { picQKR: info[0],qkr: info, address: info.addr, tableNr: number}});
    let data = {
      name: this.state.restaurant.name,
      phonenr: info[0],
      address: info[1],
      qkr: info[2],
      tableNr: parseInt(info[3])
    };

    console.log(data);

    this.setState({restaurant: data});

    axios.post('https://restaurant-auto-system.firebaseio.com/restaurantCreated.json', data)
      .then(response => {

      })
      .catch(error => {
        this.setState({error: error});
      });

    //TODO: THIS IS THE REAL REQUEST
    /*axios.post('http://192.168.0.114:8080/createRestaurant', data)
      .then(response => {
          console.log(response);
      })
      .catch(error => {
        console.log(error);
        this.setState({error: error});
      });*/

    this.changeState(3);

  }

  adminInfoSavingHandler = (...info) => {

    const date = new Date();
    const fullDate = date.getFullYear() + '-' + date.getMonth()+1 + '-' + date.getDate();
    let data = {
      name: info[0],
      surname: info[1],
      phone: info[2],
      address: info[3],
      birthdate: info[4],
      password: info[5],
      hiredate: fullDate,
      type:1
    }

    this.setState({admin: data});
    this.props.businessSaving(this.state.restaurant);

    axios.post('https://restaurant-auto-system.firebaseio.com/adminCreated.json', data)
      .then(response => {

      })
      .catch(error => {
        this.setState({error: error});
      });

    //TODO: UNCOMMENT THIS
   /* axios.post('http://192.168.0.114:8080/firstAdmin', data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        this.setState({error: error});
      });*/

    this.changeState(null);
  }


  render (){

   let newRestaurant = '';

   if(this.state.next === null){
     newRestaurant = <RegisterTrigger clicked={this.newRestaurantClickedHandler}/>;
   }

    let welcome = '';

    if(this.state.next === 1){
      welcome = <Welcome clickedNext={this.nameSavingHandler}/>;
    }

    let businessReg = '';

    if(this.state.next === 2){
      businessReg = <BusinessRegistration
        clickedNext={this.businessInfoSavingHandler}
        restaurantName={this.state.restaurant.name}/>;

    }

    let adminRegister = '';

    if(this.state.next === 3){
      adminRegister = <AdminRegister  clickedNext={this.adminInfoSavingHandler} />;
    }

    return (
      <div className={classes}>

        {welcome}
        {businessReg}
        {adminRegister}
        {newRestaurant}

      </div>
    );
  }

}

export default RestaurantBuilder;