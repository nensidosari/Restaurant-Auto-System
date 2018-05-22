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
import PayEmployee from '../../Component/Employees/PayEmployee/PayEmployee';
import Spinner from '../../Component/UserInterface/Spinner/Spinner';
import Aux from '../../hoc/Auxx/Auxx';

//import classes from './Admin.css';
import axios from "axios/index";
import * as actionTypes from "../../store/actions/actionTypes";
import * as actions from '../../store/actions/index';


class Admin extends Component {

  state = {
    location: 'Admin',
    employees: [],
    suppliers: [],
    products: [],
    inventory: [],
    allBills: [],
    timeClock: [],
    toBePaid:  [],
    paidEmployees: [],
    allCashFlows: [],
    currentCashFlow: {
      revenue: 0,
      wages: 0,
      startingDate: '',
      inventory: 0
    },
    loading: false,
    purchasing: false,
    paying: false,
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
    inventoryPanel: {
      show: false,
      active: false
    },
    billsPanel: {
      show: false,
      active: false
    },
    timeClockPanel: {
      show: false,
      active: false
    },
    toBePaidPanel: {
      show: false,
      active: false
    },
    paidEmployeesPanel: {
      show: false,
      active: false
    },
    currentCashFlowPanel: {
      show: false,
      active: false
    },
    allCashFlowsPanel: {
      show: false,
      active: false
    },
    modal: false,
    form: false,
    edit:false,
    category: false
  };

  componentDidMount(){

  }

  getEmployersHandler = () => {

    let uuid = localStorage.getItem('uuid');
    let auth = {
      headers: {'authorization': uuid }
    };
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
    //TODO: UNCOMMENT BELOW
    /*axios.get('http://192.168.0.114:8080/user/admin/getUsers', auth)
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
    });*/



    this.setState({adminPanel:false,
      employerPanel: {active: true, show: true},
      supplierPanel: {active:false, show:false},
      productsPanel:{active:false, show:false},
      billsPanel:{active:false, show:false},
      timeClockPanel:{active:false, show:false},
      toBePaidPanel:{active:false, show:false},
      paidEmployeesPanel:{active:false, show:false},
      currentCashFlowPanel:{active:false, show:false},
      allCashFlowsPanel:{active:false, show:false},
      inventoryPanel:{active:false, show:false}});

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
      productsPanel:{active:false, show:false},
      billsPanel:{active:false, show:false},
      timeClockPanel:{active:false, show:false},
      toBePaidPanel:{active:false, show:false},
      paidEmployeesPanel:{active:false, show:false},
      currentCashFlowPanel:{active:false, show:false},
      allCashFlowsPanel:{active:false, show:false},
      inventoryPanel:{active:false, show:false}});
  }

  getCategoriesHandler = () => {
    this.props.onGetCategories();
    this.setState({category:false});
  }

  getAdminPanel = () => {
    this.setState({adminPanel:true,
      supplierPanel:{active: false, show: false},
      employerPanel: {active: false, show: false},
      productsPanel:{active:false, show:false},
      billsPanel:{active:false, show:false},
      timeClockPanel:{active:false, show:false},
      toBePaidPanel:{active:false, show:false},
      paidEmployeesPanel:{active:false, show:false},
      currentCashFlowPanel:{active:false, show:false},
      allCashFlowsPanel:{active:false, show:false},
      inventoryPanel:{active:false, show:false}
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
      productsPanel:{active:true, show:true},
      billsPanel:{active:false, show:false},
      timeClockPanel:{active:false, show:false},
      toBePaidPanel:{active:false, show:false},
      paidEmployeesPanel:{active:false, show:false},
      currentCashFlowPanel:{active:false, show:false},
      allCashFlowsPanel:{active:false, show:false},
      inventoryPanel:{active:false, show:false}
    });
  }

  getInventoryHandler = () => {
    this.getCategoriesHandler();
    this.props.onGetInventory();

    this.setState({adminPanel:false,
      supplierPanel:{active: false, show: false},
      employerPanel: {active: false, show: false},
      productsPanel:{active:false, show:false},
      billsPanel:{active:false, show:false},
      timeClockPanel:{active:false, show:false},
      toBePaidPanel:{active:false, show:false},
      paidEmployeesPanel:{active:false, show:false},
      currentCashFlowPanel:{active:false, show:false},
      allCashFlowsPanel:{active:false, show:false},
      inventoryPanel:{active:true, show:true}
    });
  };

  getTimeClockHandler = () => {

    axios.get('https://restaurant-auto-system.firebaseio.com/timeClock.json')
      .then(response => {

        let timeClock = [];
        for (let key in response.data ){
          timeClock.push({
            ...response.data[key],
            id: key
          })
        }
        this.setState({adminPanel:false, timeClock: timeClock,
          supplierPanel:{active: false, show: false},
          employerPanel: {active: false, show: false},
          productsPanel:{active:false, show:false},
          billsPanel:{active:false, show:false},
          timeClockPanel:{active:true, show:true},
          toBePaidPanel:{active:false, show:false},
          paidEmployeesPanel:{active:false, show:false},
          currentCashFlowPanel:{active:false, show:false},
          allCashFlowsPanel:{active:false, show:false},
          inventoryPanel:{active:false, show:false}
        });
      }).catch(error => {
      console.log(error);
    });


  }

  getToBePaidHandler = () => {
    axios.get('https://restaurant-auto-system.firebaseio.com/toBePaid.json')
      .then(response => {

        let toBePaid = [];
        for (let key in response.data ){
          toBePaid.push({
            ...response.data[key],
            id: key
          })
        }
        this.setState({adminPanel:false, toBePaid: toBePaid,
          supplierPanel:{active: false, show: false},
          employerPanel: {active: false, show: false},
          productsPanel:{active:false, show:false},
          billsPanel:{active:false, show:false},
          timeClockPanel:{active:false, show:false},
          toBePaidPanel:{active:true, show:true},
          paidEmployeesPanel:{active:false, show:false},
          currentCashFlowPanel:{active:false, show:false},
          allCashFlowsPanel:{active:false, show:false},
          inventoryPanel:{active:false, show:false}
        });
      }).catch(error => {
      console.log(error);
    });
  };

  getPaidEmployeesHandler = () => {
    axios.get('https://restaurant-auto-system.firebaseio.com/paidEmployees.json')
      .then(response => {

        let paidEmployees = [];
        for (let key in response.data ){
          paidEmployees.push({
            ...response.data[key],
            id: key
          })
        }
        this.setState({adminPanel:false, paidEmployees: paidEmployees,
          supplierPanel:{active: false, show: false},
          employerPanel: {active: false, show: false},
          productsPanel:{active:false, show:false},
          billsPanel:{active:false, show:false},
          timeClockPanel:{active:false, show:false},
          toBePaidPanel:{active:false, show:false},
          paidEmployeesPanel:{active:true, show:true},
          currentCashFlowPanel:{active:false, show:false},
          allCashFlowsPanel:{active:false, show:false},
          inventoryPanel:{active:false, show:false}
        });
      }).catch(error => {
      console.log(error);
    });
  };

  getAllCashFlowsHandler = () => {
    axios.get('https://restaurant-auto-system.firebaseio.com/allCashFlows.json')
      .then(response => {

        let allCashFlows = [];
        for (let key in response.data ){
          allCashFlows.push({
            ...response.data[key],
            id: key
          })
        }
        this.setState({adminPanel:false, allCashFlows: allCashFlows,
          supplierPanel:{active: false, show: false},
          employerPanel: {active: false, show: false},
          productsPanel:{active:false, show:false},
          billsPanel:{active:false, show:false},
          timeClockPanel:{active:false, show:false},
          toBePaidPanel:{active:false, show:false},
          paidEmployeesPanel:{active:false, show:false},
          allCashFlowsPanel:{active:true, show:true},
          currentCashFlowPanel:{active:false, show:false},
          inventoryPanel:{active:false, show:false}
        });
      }).catch(error => {
      console.log(error);
    });
  };

  getCurrentCashFlowHandler = () => {
    axios.get('https://restaurant-auto-system.firebaseio.com/currentCashFlow.json')
      .then(response => {

        let currentCashFlow = {
          revenue: response.data.revenue,
          wages: response.data.wages,
          startingDate: response.data.startingDate,
          inventory: response.data.inventory
        };

        this.setState({adminPanel:false, currentCashFlow: currentCashFlow,
          supplierPanel:{active: false, show: false},
          employerPanel: {active: false, show: false},
          productsPanel:{active:false, show:false},
          billsPanel:{active:false, show:false},
          timeClockPanel:{active:false, show:false},
          toBePaidPanel:{active:false, show:false},
          paidEmployeesPanel:{active:false, show:false},
          currentCashFlowPanel:{active:true, show:true},
          allCashFlowsPanel:{active:false, show:false},
          inventoryPanel:{active:false, show:false}
        });
      }).catch(error => {
      console.log(error);
    });
} ;

  getBillsHandler = () => {
    axios.get('https://restaurant-auto-system.firebaseio.com/orders.json')
      .then(response => {
        let bills = [];
        let counter = 1;
        for (let key in response.data ){
          bills.push({
            ...response.data[key],
            id: counter
          })
          counter++;
        }
        console.log(bills);
        this.setState({adminPanel:false, allBills: bills,
          supplierPanel:{active: false, show: false},
          employerPanel: {active: false, show: false},
          productsPanel:{active:false, show:false},
          billsPanel:{active:true, show:true},
          timeClockPanel:{active:false, show:false},
          toBePaidPanel:{active:false, show:false},
          paidEmployeesPanel:{active:false, show:false},
          currentCashFlowPanel:{active:false, show:false},
          allCashFlowsPanel:{active:false, show:false},
          inventoryPanel:{active:false, show:false}
        });

      }).catch(error => {
      console.log(error);
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
    this.props.onAddCategory(data);
    this.modalCloseHandler();
    this.setState({category:false});
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
    this.setState({modal: false, form:false, edit:false, category:false, purchasing: false, paying:false});
  }

  onPurchaseClicked = () => {
    this.setState({purchasing:true});
  };

  onPayEmployeeClicked = () => {
    console.log('paying');
    this.setState({paying:true, modal: true, form:true});
  };

  payEmployeeHandler = (data) => {
    axios.post('https://restaurant-auto-system.firebaseio.com/paidEmployees.json', data)
      .then(response => {
        this.modalCloseHandler();
        this.getToBePaidHandler();
        this.getPaidEmployeesHandler();
      }).catch(error => {
      this.setState({error: error});
    });
  };

  purchaseProductHandler = (data) => {
    this.setState({loading: true});
    this.props.onAddInventory(data);

  };
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

    let employeePaying='';

    if(this.state.toBePaid && this.props.id && (this.state.edit || this.state.paying)) {
      for(let key in this.state.toBePaid) {
        if (this.state.toBePaid[key].id === this.props.id) {
          employeePaying = Object.values(this.state.toBePaid[key]);
        }
      }
      console.log(employeePaying);
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
        categories={this.props.categories}
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
      form =<ProductPurchase product={product} closeForm={this.modalCloseHandler} savePurchase={this.purchaseProductHandler}/>
    }

    if(this.state.form && this.state.toBePaidPanel.show && this.state.paying){
      form =<PayEmployee employeePaying={employeePaying} closeForm={this.modalCloseHandler} savePayment={this.payEmployeeHandler}/>;
    }

    if(this.state.form && this.state.productsPanel.show && this.state.category){
      form =<AddCategoryForm closeForm={this.modalCloseHandler} saveCategory={this.saveCategoryHandler} />
    }

    if(this.state.loading){
      form=<Spinner/>
    }

    return(
      <Aux>
          <Navbar
            restaurantName={this.props.restaurantName}
            logoutClicked={this.props.onLogout}
            adminPanelClicked={this.getAdminPanel}
            location={this.state.location}/>
          <SideNavbar
            employersClicked={this.getEmployersHandler}
            supplierPanelClicked={this.getSuppliersHandler}
            productsPanelClicked={this.getProductsHandler}
            inventoryPanelClicked={this.getInventoryHandler}
            billsPanelClicked={this.getBillsHandler}
            timeClockPanelClicked={this.getTimeClockHandler}
            toBePaidClicked={this.getToBePaidHandler}
            paidEmployeesClicked={this.getPaidEmployeesHandler}
            currentCashFlowClicked={this.getCurrentCashFlowHandler}
            allCashFlowsClicked={this.getAllCashFlowsHandler}
            setActiveEmp={this.state.employerPanel.active}
            setActiveSupp={this.state.supplierPanel.active}
            setActiveInventory={this.state.inventoryPanel.active}
            setActiveProducts={this.state.productsPanel.active}
            setActiveBills={this.state.billsPanel.active}
            setActiveTimeClock={this.state.timeClockPanel.active}
            setActiveToBePaid={this.state.toBePaidPanel.active}
            setActivePaidEmployees={this.state.paidEmployeesPanel.active}
            setActiveCurrentCashFlow={this.state.currentCashFlowPanel.active}
            setActiveAllCashFlows={this.state.allCashFlowsPanel.active}
            location={this.state.location}/>
          <InfoContainer
            adminPanelClicked={this.state.adminPanel}
            empData={this.state.employees}
            supplierData={this.state.suppliers}
            productsData={this.state.products}
            inventoryData={this.props.inventory}
            billsData={this.state.allBills}
            timeClockData={this.state.timeClock}
            toBePaidData={this.state.toBePaid}
            paidEmployeesData={this.state.paidEmployees}
            currentCashFlowData={this.state.currentCashFlow}
            allCashFlowsData={this.state.allCashFlows}
            registerEmpClicked={this.registerEmployeeClickHandler}
            editClicked={this.editClickHandler}
            addCategoryClicked={this.addCategoryClicked}
            supplierPanel={this.state.supplierPanel.show}
            productsPanel={this.state.productsPanel.show}
            inventoryPanel={this.state.inventoryPanel.show}
            billsPanel={this.state.billsPanel.show}
            timeClockPanel={this.state.timeClockPanel.show}
            toBePaidPanel={this.state.toBePaidPanel.show}
            paidEmployeesPanel={this.state.paidEmployeesPanel.show}
            currentCashFlowPanel={this.state.currentCashFlowPanel.show}
            allCashFlowsPanel={this.state.allCashFlowsPanel.show}
            payEmplpoyeeClicked={this.onPayEmployeeClicked}
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
    id: state.emp.editId,
    categories: state.categories.categories,
    inventory: state.inventory.inventory
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddEmployee: (employee) => dispatch({type: actionTypes.ADD_EMPLOYEE, personData: employee}),
    onDeleteEmployee: (id) => dispatch({type: actionTypes.DELETE_EMPLOYEE, resultPrsId: id}),
    onGetCategories: () => dispatch(actions.getCategories()),
    onAddCategory: (category) => dispatch(actions.addCategories(category)),
    onGetInventory: () => dispatch(actions.getInventory()),
    onAddInventory: (purchased) => dispatch(actions.addInventory(purchased)),
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
