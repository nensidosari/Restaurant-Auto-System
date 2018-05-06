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
import ProductRegisterForm from '../../Component/Products/ProductRegisterForm/ProductRegisterForm';
import ProductEditForm from '../../Component/Products/ProductEditForm/ProductEditForm';
import ProductPurchase from '../../Component/Products/ProductPurchase/ProductPurchase';
import Aux from '../../hoc/Auxx/Auxx';

//import classes from './Admin.css';
import axios from "axios/index";
import * as actionTypes from "../../store/actions";
import employee from "../../Component/Employees/Employees";

class Admin extends Component {

  state = {
    employees: [],
    suppliers: [],
    products: [],
    purchasing: false,
    adminPanel: true,
    supplierPanel: {
      show: false,
      active: false
    },
    employerPanel: {
      show: false,
      active: false
    },
    productsPanel: {
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



    this.setState({adminPanel:false,
      employerPanel: {active: true, show: true},
      supplierPanel: {active:false, show:false},
      productsPanel:{active:false, show:false}});

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

    this.setState({adminPanel:false,
      supplierPanel:{active: true, show: true},
      employerPanel: {active: false, show: false},
      productsPanel:{active:false, show:false}});
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
    this.setState({adminPanel:true,
      supplierPanel:{active: false, show: false},
      employerPanel: {active: false, show: false},
      productsPanel:{active:false, show:false}
    });
  }

  getProductsHandler = () => {
    this.getCategoriesHandler();
    this.getSuppliersHandler();

    axios.get('https://restaurant-auto-system.firebaseio.com/products.json')
      .then(response => {
        const products = [];
        for (let key in response.data ){
          products.push({
            ...response.data[key],
            id: key
          })
        }
        this.setState({products: products});
      }).catch(error => {
      this.setState({error: error});
    });

    this.setState({adminPanel:false,
      supplierPanel:{active: false, show: false},
      employerPanel: {active: false, show: false},
      productsPanel:{active:true, show:true}
    });
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

  saveProductHandler = (data) => {

    axios.post('https://restaurant-auto-system.firebaseio.com/products.json', data)
      .then(response => {
        this.modalCloseHandler();
        this.getProductsHandler();
      }).catch(error => {
      this.setState({error: error});
    });
  }

  modalCloseHandler = () => {
    this.setState({modal: false, form:false, edit:false, category:false});
  }

  onPurchaseClicked = () => {
    this.setState({purchasing:true});
  }
  render (){

    let employees = '';

    if(this.state.employees && this.props.id && this.state.edit) {

      for(let key in this.state.employees){
          if(this.state.employees[key].id === this.props.id){
            employees = Object.values(this.state.employees[key]);

          }
      }

    }

    let supplier = '';

    if(this.state.suppliers && this.props.id && this.state.edit) {
      for(let key in this.state.suppliers){
        if(this.state.suppliers[key].id === this.props.id){
          supplier = Object.values(this.state.suppliers[key]);
        }
      }
      console.log(supplier);



    }

    let product = '';

    console.log(this.state.edit +''+ this.state.purchasing);

    if(this.state.products && this.props.id && (this.state.edit || this.state.purchasing)) {
      for(let key in this.state.products) {
        if (this.state.products[key].id === this.props.id) {
          product = Object.values(this.state.products[key]);
        }
      }
      console.log(product);
    }

    let form = '';

    if(this.state.form && !this.state.edit && this.state.employerPanel.show){
      form =<EmpRegisterForm closeForm={this.modalCloseHandler} saveEmployee={this.saveEmployeeHandler} />
    }

    if(this.state.form && !this.state.edit && this.state.supplierPanel.show){
      form =<SupplierRegistrationForm
        closeForm={this.modalCloseHandler}
        saveSupplier={this.saveSuppliersHandler} />
    }

    if(this.state.form && !this.state.edit && this.state.productsPanel.show){
      form =<ProductRegisterForm
        categories={this.state.categories}
        suppliers={this.state.suppliers}
        closeForm={this.modalCloseHandler}
        saveProduct={this.saveProductHandler} />
    }

    if(this.state.edit && this.state.form && this.state.employerPanel.show){
      form =<EmpEditForm employees={employees} closeForm={this.modalCloseHandler}/>
    }

    if(this.state.edit && this.state.form && this.state.supplierPanel.show){
      form =<SupplierEditForm suppliers={supplier} closeForm={this.modalCloseHandler}/>
    }

    if(this.state.edit && this.state.form && this.state.productsPanel.show && !this.state.purchasing){
      form =<ProductEditForm product={product} closeForm={this.modalCloseHandler}/>
    }

    if(this.state.edit && this.state.form && this.state.productsPanel.show && this.state.purchasing){
      form =<ProductPurchase product={product} closeForm={this.modalCloseHandler}/>
    }

    if(this.state.form && this.state.productsPanel.show && this.state.category){
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
            productsPanelClicked={this.getProductsHandler}
            setActiveEmp={this.state.employerPanel.active}
            setActiveSupp={this.state.supplierPanel.active}
            setActiveProducts={this.state.productsPanel.active}/>
          <InfoContainer
            adminPanelClicked={this.state.adminPanel}
            empData={this.state.employees}
            supplierData={this.state.suppliers}
            productsData={this.state.products}
            registerEmpClicked={this.registerEmployeeClickHandler}
            editClicked={this.editClickHandler}
            addCategoryClicked={this.addCategoryClicked}
            supplierPanel={this.state.supplierPanel.show}
            productsPanel={this.state.productsPanel.show}
            purchaseClicked={this.onPurchaseClicked}>
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
    employee: state.emp.employees,
    id: state.emp.editId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddEmployee: (employee) => dispatch({type: actionTypes.ADD_EMPLOYEE, personData: employee}),
    onDeleteEmployee: (id) => dispatch({type: actionTypes.DELETE_EMPLOYEE, resultPrsId: id}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
