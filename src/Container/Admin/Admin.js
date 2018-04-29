import React, {Component} from 'react';
import Navbar from '../../Component/Navigation/Navbar/Navbar';
import SideNavbar from '../../Component/Navigation/SideNavbar/SideNavbar';
import InfoContainer from '../../Component/InfoContainer/InfoContainer';
import Modal from '../../Component/UserInterface/Modal/Modal';
import EmpRegisterForm from '../../Component/EmpRegisterForm/EmpRegisterForm';
import EmpEditForm from '../../Component/EmpEditForm/EmpEditForm';
import Aux from '../../hoc/Auxx/Auxx';
import classes from './Admin.css';
import axios from "axios/index";

class Admin extends Component {

  state = {
    employees: [],
    active: false,
    adminPanel: true,
    modal: false,
    form: false,
    edit:false,
  }

  componentDidMount(){

  }

  getEmployersHandler = () => {
    axios.get('https://restaurant-auto-system.firebaseio.com/employees.json')
      .then(response => {
        const employees = [];
        console.log(response.data);
        for (let key in response.data ){
          employees.push({
            ...response.data[key],
            id: key
          })
        }
        this.setState({employees: employees});
      }).catch(error => {
      this.setState({error: error});
    });

    this.setState({active: true,  adminPanel:false});

  }

  getAdminPanel = () => {
    this.setState({adminPanel:true, active:false});
  }

  registerEmployeeClickHandler = () => {
    this.setState({modal: true, form:true});
  }

  editEmployerClickHandler = () => {
    this.setState({modal: true, form:true, edit:true});
  }

  saveEmployeeHandler = (data) => {

    axios.post('https://restaurant-auto-system.firebaseio.com/employees.json', data)
      .then(response => {
        this.modalCloseHandler();
        this.getEmployersHandler();
      }).catch(error => {
      this.setState({error: error});
    });

  }

  modalCloseHandler = () => {
    this.setState({modal: false, form:false, edit:false});
  }
  render (){

    let employees = '';

    if(this.state.employees) {
      employees = Object.values(this.state.employees);
    }

    let form = '';

    if(this.state.form && !this.state.edit){
      form =<EmpRegisterForm closeForm={this.modalCloseHandler} saveEmployee={this.saveEmployeeHandler} />
    }

    if(this.state.edit && this.state.form){
      form =<EmpEditForm employees={employees} closeForm={this.modalCloseHandler}/>
    }

    return(
      <Aux>
          <Navbar
            restaurantName={this.props.restaurantName}
            logoutClicked={this.props.logoutClicked}
            adminPanelClicked={this.getAdminPanel}/>
          <SideNavbar
            employersClicked={this.getEmployersHandler}
            setActive={this.state.active} />
          <InfoContainer
            adminPanelClicked={this.state.adminPanel}
            empData={this.state.employees}
            registerEmpClicked={this.registerEmployeeClickHandler}
            editEmpClicked={this.editEmployerClickHandler}>
            <Modal show={this.state.modal} modalClosed={this.modalCloseHandler}>
              {form}
            </Modal>
          </InfoContainer>
      </Aux>
    );
  }
}

export default Admin;
