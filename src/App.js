
import { useState } from 'react';
import './App.css';
import AddNew from './Components/AddNew/AddNew';
// import Filter from './Components/Filter';

// import MainTable from './mainTable/MainTable';
import TestOne from './Components/TestOne';

const data = [
    {
      title: "car insurance",
      amount: 200,
      date : new Date(Date.UTC(2023,6,25))
    },
    {
      title:"hagar developer",
      amount: 300,
      date: new Date(Date.UTC(2023,7,1))
    }
  ]


function App() {

  const [newItem, setNewItem]= useState(data);

  function addDataHandler(item){
   console.log("data added");
   setNewItem((prevItem)=>{
    return [item, ...prevItem]
   })
   
  }

  return (
    // <MainTable></MainTable>
    <>
      <AddNew onAddData={addDataHandler}></AddNew>
      <TestOne data={newItem}></TestOne>
    </>
    
    
  );
}

export default App;
