import React from 'react';

const itemsTable = (props) => {

  return (
    <table>
      <thead >
      <tr>
        <th style={{borderBottom:'1px solid black'}}>Product</th>
        <th style={{borderBottom:'1px solid black'}}>Quantity</th>
        <th style={{borderBottom:'1px solid black'}}>Price</th>
      </tr>
      </thead>
      <tbody>
      {props.items.map(item => (
        <tr key={item.name} >
          <td style={{borderBottom:'1px solid lightgray'}}>{item.name}</td>
          <td style={{borderBottom:'1px solid lightgray', textAlign: 'right'}}>{item.quantity}</td>
          <td style={{borderBottom:'1px solid lightgray', textAlign: 'right'}}>{item.price}</td>
        </tr>
      ))}

      </tbody>
    </table>
  );
};

export default itemsTable;