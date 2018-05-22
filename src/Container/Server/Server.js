import React, {Component} from 'react';
import {connect} from 'react-redux';

import Navbar from '../../Component/Navigation/Navbar/Navbar';
import SideNavbar from '../../Component/Navigation/SideNavbar/SideNavbar';
import ServerSelect from '../../Component/ServerSelect/ServerSelect';
import InfoContainer from '../../Component/InfoContainer/InfoContainer';
import Order from '../Order/Order';
import CheckoutForm from '../Order/CheckoutForm/CheckoutForm';
import Modal from '../../Component/UserInterface/Modal/Modal';
import Spinner from '../../Component/UserInterface/Spinner/Spinner';
import Aux from '../../hoc/Auxx/Auxx';
import * as actions from "../../store/actions";
import axios from "axios/index";
import {resetOrder} from "../../store/actions/order";


//import classes from './Server.css';



class Server extends Component {

  state = {
    loading: false,
    modal: false,
    tables: {
      show: true,
      active: true
    },
    serverPanel: false,
    viewBills: false,
    location: 'Server',
    clockedIn: false,
    allBills: []
  };

  componentDidMount(){
    this.props.onGetInventory();
    this.props.onGetCategories();
   // this.isClockedInHandler();

    if(!this.state.clockedIn){
      this.forceClockIn();
    }
  }

  isClockedInHandler = () => {

  /*  const uuid = localStorage.getItem('uuid');
       let auth = {
         headers: {'authorization': uuid }
       };

     axios.get('http://192.168.0.114:8080/.....', auth)
       .then(response => {
         if(response.status === 200) {
           this.setState({clockedIn: true});
         }else {
           this.setState({clockedIn: false});
           this.forceClockIn();
         }
       }).catch(error => {
         console.log(error);
     });*/


  };

  clockInHandler = () => {
    this.setState({clockedIn: true});

    axios.post('https://restaurant-auto-system.firebaseio.com/clockIn.json', {clockedIn: true})
      .then(response => {

      }).catch(error => {
      this.setState({error: error});
    });

    /*const uuid = localStorage.getItem('uuid');
    let auth = {
      headers: {'authorization': uuid }
    };

    axios.post('http://192.168.0.114:8080/clockIn',null, auth)
      .then(response => {
        this.isClockedInHandler();
      }).catch(error => {
      console.log(error);
    });*/
  };

  clockOutHandler = () =>{
    this.setState({clockedIn: false});

    axios.post('https://restaurant-auto-system.firebaseio.com/clockOut.json', {clockedIn: false})
      .then(response => {

      }).catch(error => {
      this.setState({error: error});
    });

   /* const uuid = localStorage.getItem('uuid');
    let auth = {
      headers: {'authorization': uuid }
    };

    axios.post('http://192.168.0.114:8080/clockOut',null, auth)
      .then(response => {
        this.isClockedInHandler();
      }).catch(error => {
      console.log(error);
    });*/
  }

  forceClockIn = () => {
    this.setState({viewBills: false,serverPanel: true, tables: {show: false, active: false}});
  }

  viewBillsClicked = () => {
    axios.get('https://restaurant-auto-system.firebaseio.com/orders.json')
      .then(response => {
        let bills = [];
        let counter = 1;
        console.log('data',response.data);
        for (let key in response.data ){
          bills.push({
            ...response.data[key],
            id: counter
          })
          counter++;
        }
        this.setState({viewBills: true, allBills: bills, serverPanel: false, tables: {show: false, active: false}});
      }).catch(error => {
      console.log(error);
    });


  }

  serverPanelClicked = () => {
    this.setState({viewBills: false, serverPanel: true, tables: {show: false, active: false}});
    this.props.onSelectCategory('');
  }

  onTablesClicked = () => {

    this.setState({tables: {show: true, active: true}, serverPanel: false, viewBills: false});
    this.props.onSelectCategory('');
  }

  tableSelectedHandler = (table) => {
    this.props.onTableSelect(table);
  };

  itemSelectedHandler = (item) => {
    this.props.onDecreaseInventory(item);
    this.props.onGetItem(item);

  };

  othersClickedHandler = (name) => {
    this.props.onSelectCategory(name);
    this.setState({tables: {show: false, active: false}, serverPanel: false, viewBills: false});
  };

  checkoutClickedHandler = () => {
    this.setState({modal: true});
  };

  dismissClickedHandler = () => {
    this.props.onGetInventory();
    this.props.onResetOrder();

  };

  modalCloseHandler = () => {
    this.setState({modal: false});
  };

  saveOrderHandler = () => {
    this.props.onSaveOrder(this.props.order);
  }

  viewBillClicked = () => {

  }


  render (){

    let form = '';

    if(isNaN(this.props.order.tableSelected)&& this.props.order.items.length !== 0 ) {
      form = <p style={{textAlign: 'center', color: 'red'}}>Please select a valid table to proceed to Checkout !!</p>;
    }

    if(this.props.order.items.length === 0  && !isNaN(this.props.order.tableSelected)) {
      form = <p style={{textAlign: 'center', color: 'red'}}>Please select valid items to proceed to Checkout !!</p>;
    }

    if(isNaN(this.props.order.tableSelected) && this.props.order.items.length === 0 ){
      form = <p style={{textAlign: 'center', color: 'red'}}>Please select valid items  and table to proceed to Checkout !!</p>;
    }

    if(!isNaN(this.props.order.tableSelected) && this.props.order.items.length !== 0) {
      form = <CheckoutForm table={this.props.order.tableSelected}
                           items={this.props.order.items}
                           totalPrice={this.props.order.totalPrice}
                           closeForm={this.modalCloseHandler}
                           saveOrder={this.saveOrderHandler}/>;
    }

    if(this.state.loading){
      form=<Spinner/>
    }

    let container =  <InfoContainer
                        status={this.state.clockedIn}
                        clockedIn={this.clockInHandler}
                        clockedOut={this.clockOutHandler}
                        viewBills={this.state.viewBills}
                        empData={this.state.allBills}
                        editClicked={this.viewBillClicked}
                        location={this.state.location}/>;


    if(!this.state.serverPanel && this.state.clockedIn && !this.state.viewBills){
      container = (
        <Aux>
          <ServerSelect
            tableNr={this.props.tableNr}
            tableClicked={this.tableSelectedHandler}
            tablesPanel={this.state.tables.show}
            itemClicked={this.itemSelectedHandler}
            otherPanel={this.props.mappedCategories}
            inventory={this.props.inventory}
          />
          <Order checkoutClicked={this.checkoutClickedHandler} dismissClicked={this.dismissClickedHandler}/>
        </Aux>
      );
    }

    return(
      <Aux>
        <Navbar
          restaurantName={this.props.restaurantName}
          logoutClicked={this.props.logoutClicked}
          viewBillsClicked={this.viewBillsClicked}
          serverPanelClicked={this.serverPanelClicked}
          location={this.state.location}/>
        <SideNavbar
          location={this.state.location}
          tablesClicked={this.onTablesClicked}
          othersClicked={this.othersClickedHandler}
          setActiveTables={this.state.tables.active}
          categories={this.props.mappedCategories}
        />
        {container}


          <Modal show={this.state.modal} modalClosed={this.modalCloseHandler}>
            {form}
          </Modal>

      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    mappedCategories: state.categories.mappedCategories,
    inventory: state.inventory.inventory,
    item: state.inventory.item,
    order: state.order
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCategories: () => dispatch(actions.getCategories()),
    onTableSelect: (table) => dispatch(actions.selectTable(table)),
    onSelectCategory: (category) => dispatch(actions.selectCategory(category)),
    onGetInventory: () => dispatch(actions.getInventory()),
    onDecreaseInventory: (item) => dispatch(actions.decreaseInventory(item)),
    onGetItem: (item) => dispatch(actions.getItems(item)),
    onResetOrder: () => dispatch(actions.resetOrder()),
    onSaveOrder: (order) => dispatch(actions.saveOrder(order))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Server);
