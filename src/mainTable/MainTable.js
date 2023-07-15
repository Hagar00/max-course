import React , { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import data from '../Api/data.json';
import './MainTable.css';

function MainTable() {

   const [rows, setRows] = useState([]);

   useEffect(() => {
      setRows(data); // set the rows state variable to the data
    }, []);
  
    const columns = [
    { field: 'id', headerName: 'ID' , width:70},
    { field: 'name', headerName: 'Name' , width:200},
    { field: 'description', headerName: 'description',width: 300},
    { field: 'status', headerName: 'status' , width: 250}
   ];

    

  return (
    <div className='container'>
      <div className='row main-table'>

          
          <DataGrid rows={rows} columns={columns} checkboxSelection disableRowSelectionOnClick {...rows} className='data-grid' />
    
        
      
      </div>
    </div>
  )
}

export default MainTable