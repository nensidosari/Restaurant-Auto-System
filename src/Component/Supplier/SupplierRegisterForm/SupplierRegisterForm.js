import React from 'react';

import classes from './SupplierRegForm.css';


const supplierRegForm = (props) => {

  const saveData = () => {
    let e = document.getElementById("category");
    let category = e.options[e.selectedIndex].value;
    const data = {
      name: this.name.value,
      phone: this.phone.value,
      address: this.address.value,
      product: this.product.value,
      category: category,
      price: this.price.value,
    }

    props.saveSupplier(data);
  }

  console.log('categories',props.categories);

  return(
    <div className={classes.SupplierRegForm}>
      <p>Please fill in this form</p>
      <span className={classes.LeftDiv}>

          <label>Company Name</label>
          <input type="text" ref={c => this.name = c} placeholder="Enter company name" name="name" />

         <label>Address</label>
          <input type="text" ref={c => this.address = c}
                 name="address" placeholder="Enter address"/>

          <label>Phone</label>
          <input type="text" ref={c => this.phone = c} name="phone"
                 placeholder="Enter phone nr"/>

      </span>
      <span className={classes.RightDiv}>
        <div>
          <label>Product</label>
          <input type="text" ref={c => this.product = c}
                 name="product" />
        </div>
        <div>
          <label>Category</label>
          <select id='category'>
            {props.categories.map(cat => (
              <option key={cat.id} ref={c => this.category = c} value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Price</label>
          <input type="number" ref={c => this.price = c}
                 name="price" placeholder="Enter Price"/>
        </div>
        <div>
          <button onClick={props.closeForm} className={classes.ButtonCancel}>Cancel</button>
          <button onClick={saveData} className={classes.ButtonRegister}>Save</button>
        </div>
      </span>
    </div>
  );
};

export default supplierRegForm;
