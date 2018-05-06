import React from 'react';

import classes from './ProductRegisterForm.css';


const productRegisterForm = (props) => {

  const saveData = () => {
    let e = document.getElementById("category");
    let category = e.options[e.selectedIndex].value;

    let i = document.getElementById("supplier");
    let supplier = i.options[i.selectedIndex].value;
    const data = {
      product: this.product.value,
      buyingPrice: this.buyingPrice.value,
      sellingPrice: this.sellingPrice.value,
      category: category,
      supplier: supplier,
    }

    props.saveProduct(data);
  }

  return(
    <div className={classes.ProductRegisterForm}>
      <p>Please fill in this form</p>
      <div style={{display: 'block'}}>
        <span className={classes.LeftDiv}>

            <label>Product Name</label>
            <input type="text" ref={c => this.product = c} placeholder="Enter product name" name="product" />

           <label>Buying Price</label>
            <input type="text" ref={c => this.buyingPrice = c}
                   name="buyingPrice" placeholder="Enter buying Price"/>

            <label>Selling Price</label>
            <input type="text" ref={c => this.sellingPrice = c} name="sellingPrice"
                   placeholder="Enter selling Price"/>

        </span>
        <span className={classes.RightDiv}>
          <div>
            <label>Category</label>
            <select id='category'>
              {props.categories.map(cat => (
                <option key={cat.id} ref={c => this.category = c} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Supplier</label>
            <select id='supplier'>
              {props.suppliers.map(sup => (
                <option key={sup.id} ref={c => this.supplier = c} value={sup.name}>{sup.name}</option>
              ))}
            </select>
          </div>
        </span>
      </div>

      <div style={{paddingTop: '120px', marginTop:'100px', marginRight: '170px'}}>
        <button onClick={props.closeForm} className={classes.ButtonCancel}>Cancel</button>
        <button onClick={saveData} className={classes.ButtonRegister}>Save</button>
      </div>
    </div>
  );
};

export default productRegisterForm;
