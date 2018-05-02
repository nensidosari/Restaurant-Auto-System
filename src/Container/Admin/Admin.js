import React, {Component} from 'react';
import {connect} from 'react-redux';

import Navbar from '../../Component/Navigation/Navbar/Navbar';
import SideNavbar from '../../Component/Navigation/SideNavbar/SideNavbar';
import InfoContainer from '../../Component/InfoContainer/InfoContainer';
import Modal from '../../Component/UserInterface/Modal/Modal';
import EmpRegisterForm from '../../Component/Employees/EmpRegisterForm/EmpRegisterForm';
import SupplierRegistrationForm from '../../Component/Supplier/SupplierRegisterForm/SupplierRegisterForm';
import EmpEditForm from '../../Component/Employees/EmpEditForm/EmpEditForm';
import AddCategoryForm from '../../Component/Supplier/AddCategoryForm/AddCategoryForm';
import SupplierEditForm from '../../Component/Supplier/SupplierEditForm/SupplierEditHandler';
import Aux from '../../hoc/Auxx/Auxx';

//import classes from './Admin.css';
import axios from "axios/index";
import * as actionTypes from "../../store/actions";
import employee from "../../Component/Employees/Employees";

class Admin extends Component {

  state = {
    employees: [],
    suppliers: [],
    adminPanel: true,
    supplierPanel: {
      show: false,
      active: false
    },
    employerPanel: {
      show: false,
      active: false
    },
    modal: false,
    form: false,
    edit:false,
    category: false,
    categories: []
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
        console.log(employees);
        this.setState({employees: employees});
        this.props.onAddEmployee(employees);
      }).catch(error => {
      this.setState({error: error});
    });



    this.setState({adminPanel:false, employerPanel: {active: true, show: true}, supplierPanel: {active:false, show:false}});

  }

  getSuppliersHandler = () => {

    axios.get('https://restaurant-auto-system.firebaseio.com/suppliers.json')
      .then(response => {
        const suppliers = [];
        console.log(response.data);
        for (let key in response.data ){
          suppliers.push({
            ...response.data[key],
            id: key
          })
        }
        this.setState({suppliers: suppliers});
      }).catch(error => {
      this.setState({error: error});
    });
    this.getCategoriesHandler();
    this.setState({adminPanel:false, supplierPanel:{active: true, show: true}, employerPanel: {active: false, show: false}});
  }

  getCategoriesHandler = () => {
    axios.get('https://restaurant-auto-system.firebaseio.com/categories.json')
      .then(response => {
        const categories = [];
        console.log(response.data);
        for (let key in response.data ){
          categories.push({
            ...response.data[key],
            id: key
          })
        }
        this.setState({categories: categories, category:false});
      }).catch(error => {
      this.setState({error: error});
    });
  }

  getAdminPanel = () => {
    this.setState({adminPanel:true,supplierPanel:{active: false, show: false}, employerPanel: {active: false, show: false}});
  }

  registerEmployeeClickHandler = () => {
    this.setState({modal: true, form:true});
  }

  editClickHandler = () => {
    this.setState({modal: true, form:true, edit:true});
  }

  addCategoryClicked = () => {
    this.setState({modal: true, form:true, category:true});
  }

  saveCategoryHandler = (data) => {
    axios.post('https://restaurant-auto-system.firebaseio.com/categories.json', data)
      .then(response => {
        this.modalCloseHandler();
        this.getCategoriesHandler();
        this.setState({category:false});
      }).catch(error => {
      this.setState({error: error, category:false});
    });
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

  saveSuppliersHandler = (data) => {

    axios.post('https://restaurant-auto-system.firebaseio.com/suppliers.json', data)
      .then(response => {
        this.modalCloseHandler();
        this.getSuppliersHandler();
      }).catch(error => {
      this.setState({error: error});
    });

  }

  modalCloseHandler = () => {
    this.setState({modal: false, form:false, edit:false, category:false});
  }
  render (){

    let employees = '';

    if(this.state.employees) {
      employees = Object.values(this.state.employees);
    }

    let supplier = '';

    if(this.state.suppliers) {
      supplier = Object.values(this.state.suppliers);
    }

    let form = '';

    if(this.state.form && !this.state.edit && this.state.employerPanel.show){
      form =<EmpRegisterForm closeForm={this.modalCloseHandler} saveEmployee={this.saveEmployeeHandler} />
    }

    if(this.state.form && !this.state.edit && this.state.supplierPanel.show){
      form =<SupplierRegistrationForm
        categories={this.state.categories}
        closeForm={this.modalCloseHandler}
        saveSupplier={this.saveSuppliersHandler} />
    }

    if(this.state.edit && this.state.form && this.state.employerPanel.show){
      form =<EmpEditForm employees={employees} closeForm={this.modalCloseHandler}/>
    }

    if(this.state.edit && this.state.form && this.state.supplierPanel.show){
      form =<SupplierEditForm suppliers={supplier} closeForm={this.modalCloseHandler}/>
    }

    if(this.state.form && this.state.supplierPanel.show && this.state.category){
      form =<AddCategoryForm closeForm={this.modalCloseHandler} saveCategory={this.saveCategoryHandler} />
    }

    return(
      <Aux>
          <Navbar
            restaurantName={this.props.restaurantName}
            logoutClicked={this.props.logoutClicked}
            adminPanelClicked={this.getAdminPanel}/>
          <SideNavbar
            employersClicked={this.getEmployersHandler}
            supplierPanelClicked={this.getSuppliersHandler}
            setActiveEmp={this.state.employerPanel.active}
            setActiveSupp={this.state.supplierPanel.active}/>
          <InfoContainer
            adminPanelClicked={this.state.adminPanel}
            empData={this.state.employees}
            supplierData={this.state.suppliers}
            registerEmpClicked={this.registerEmployeeClickHandler}
            editClicked={this.editClickHandler}
            addCategoryClicked={this.addCategoryClicked}
            supplierPanel={this.state.supplierPanel.show}>
            <Modal show={this.state.modal} modalClosed={this.modalCloseHandler}>
              {form}
            </Modal>
          </InfoContainer>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    emp: state.employees
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddEmployee: (employee) => dispatch({type: actionTypes.ADD_EMPLOYEE, personData: employee}),
    onDeleteEmployee: (id) => dispatch({type: actionTypes.DELETE_EMPLOYEE, resultPrsId: id}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
