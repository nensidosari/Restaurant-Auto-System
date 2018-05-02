import React from 'react';

import classes from './AddCategoryForm.css';

const addCategoryForm = (props) => {

  const saveData = () => {
    const data = {
      name: this.name.value,
    }


    props.saveCategory(data);
  }

  return(
    <div className={classes.AddCategoryForm}>
      <p>Add the new Category name</p>
      <span className={classes.LeftDiv}>
          <label>Name</label>
          <input type="text" ref={c => this.name = c} placeholder="Enter category" name="name" />

        <div>
          <button onClick={props.closeForm} className={classes.ButtonCancel}>Cancel</button>
          <button onClick={saveData} className={classes.ButtonRegister}>Save</button>
        </div>
      </span>
    </div>
  );
};


export default addCategoryForm;
