import React from 'react'
import NewForm from './NewForm';
import './AddNew.css';

function AddNew(props) {

  function saveDataHandler(formData){
      const enteredData = {
        ...formData
      }
      // console.log(enteredData);
      props.onAddData(enteredData);
  }
  return (
    <div className='new'>
        <NewForm onSaveFormData={saveDataHandler}></NewForm>
    </div>
  )
}

export default AddNew;