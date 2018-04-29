import React from 'react';
import InfoTable from './InfoTable/InfoTable';
import Coffee from '../../assets/images/coffee.png';
import classes from './InfoContainer.css';

import Aux from '../../hoc/Auxx/Auxx';

const infoContainer = (props) => {

  let main = <img src={Coffee} alt="coffee"/>;

  if(props.empData && !props.adminPanelClicked){
    main = <Aux>
              <div className={classes.Header}>
                <span>
                  <p>Employees Dashboard</p>
                  <button onClick={props.registerEmpClicked}>+ Register Employee</button>
                </span>
              </div>
            <InfoTable empData={props.empData} editEmpClicked={props.editEmpClicked}/>
             {props.children}
          </Aux>;

  }

  return (

    <div className={classes.InfoContainer}>
      {main}

    </div>
  );
};

export default infoContainer;