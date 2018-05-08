import React from 'react';

import classes from './ServerSelect.css';
import Item from './Item/Item';



const serverSelect = (props) => {

  let main = '';
  let selecting = '';
  let tablesArray = [];

  for(let i=0; i<props.tableNr; i++){
    tablesArray.push(i+1);
  }

  if(props.otherPanel){
    let items = [];
    for(let key in props.otherPanel){
      if(props.otherPanel[key].show){
        selecting = 'from ' + props.otherPanel[key].name+ ' '+ ' Category';

        for(let product in props.inventory){
          if(props.otherPanel[key].name === props.inventory[product].category){
            items.push({name: props.inventory[product].productName, quantity: props.inventory[product].quantity});
          }
        }
      }


    }

    main = (
      items.map(key => (
        <Item key={key.name} clicked={props.itemClicked} name={key.name}>{key.name} ({key.quantity})</Item>
      ))
    );
  }

  if(props.tablesPanel){
    selecting = 'a Table';
    main = (
      tablesArray.map(key => (
        <Item key={key} clicked={props.tableClicked} number={key}>Table {key}</Item>
      ))
    );

  }

  return (

    <div className={classes.ServerSelect}>
      <p>Please Select {selecting}</p>
      {main}

    </div>
  );
};

export default serverSelect;