import React,{Component} from 'react';

import classes from './PayEmployee.css';


class PayEmployee extends Component {

  state = {
    totalPayment: this.props.employeePaying[0],
    bonus: 0
  };

  totalPayment = (event) => {

    if(event.target.value >= '0'){
      let bonus = parseInt(event.target.value);
      let totalPayment = this.props.employeePaying[0] +  bonus;
      this.setState({totalPayment: totalPayment, bonus: bonus});
    }else{
      this.setState({totalPayment: this.props.employeePaying[0]});
    }

  };

  paying = () => {
    let data = {
      name: this.props.employeePaying[3],
      surname: this.props.employeePaying[4],
      hoursWorked:this.props.employeePaying[2],
      hourlyWage:this.props.employeePaying[1],
      bonus: this.state.bonus,
      totalPayment: this.state.totalPayment
    };

    this.props.savePayment(data);
  };
 // [112, 7, 16, "Dajana", "Hoxhaj", "-LD2f8UiMiNZiZ2pjySq"]
  render() {
    console.log('pay employee form');
    return (
      <form className={classes.PayEmployee}>
        <p>Paying Employee</p>
        <span className={classes.LeftDiv}>
          <div>
            <label>Name :</label>
            <label style={{color: 'red'}}>{this.props.employeePaying[3]}</label>
          </div>

          <div>
            <label>Surname : </label>
            <label style={{color: 'red'}}> {this.props.employeePaying[4]}</label>
          </div>

          <div>
            <label>Total Hours :</label>
            <label style={{color: 'red'}} id='totalHours'>{this.props.employeePaying[2]} </label>
          </div>

          <div>
            <label>Hourly Wage :</label>
            <label style={{color: 'red'}} id='hourlyWage'>{this.props.employeePaying[1]} </label>
          </div>

          <div>
            <label>Bonus :</label>
            <input type="number" id="bonus"
                   placeholder="Enter employee bonus"
                   name="bonus"
                   onChange={(event) => this.totalPayment(event)}/>
          </div>

          <div>
            <label>Total Payment :</label>
            <label style={{color: 'red'}}>   {this.state.totalPayment} Lek</label>
          </div>

          <div>
            <button onClick={this.props.closeForm} className={classes.ButtonCancel}>Cancel</button>
            <button className={classes.ButtonRegister} onClick={this.paying}>Pay</button>
          </div>

      </span>

      </form>
    );
  }
}

export default PayEmployee;
