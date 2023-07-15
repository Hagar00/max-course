import React, {useState} from 'react';
import './TestOne.css';
import Date from './Date';
import Filter from './Filter';

function TestOne(props) {
  const [selectedYear , setSelectedYear]= useState('2020');

  const [textInfo, setTxtInfo]= useState('2020');
  
  // let textInfo = '2020';
  // if(selectedYear === '2020'){
  //   textInfo='2020';
  // }else if (selectedYear==='2021'){
  //   textInfo ='2021 ';
  // }else{
  //   textInfo = selectedYear
  // }

  const filterHandler =(selectedYear)=>{
    console.log(selectedYear);
    if(selectedYear === '2020'){
    setTxtInfo('you selected 2020');
  }else if(selectedYear === '2021'){
    setTxtInfo('you selected 2021');
  }else{
    setTxtInfo('2019');
  }
  // setTxtInfo(selectedYear)
    setSelectedYear(selectedYear);
  }

  return (
    <div>
       <Filter onFilterData={filterHandler} selected = {selectedYear}></Filter>
       <p> {textInfo}</p>
       {props.data.map((item)=>(
          <div className='container' key={item.amount}>
            <Date date={item.date}></Date>
            <div className='description'>
                <h2> {item.title} </h2>
                <div className='price'> {item.amount} </div>
                
            </div>
        </div>
       ))}
        

        {/* <div className='container'>
            <Date date={props.data[1].date}></Date>
            <div className='description'>
                <h2> {props.data[1].title} </h2>
                <div className='price'> ${props.data[1].price} </div>
                
            </div>
        </div> */}
        
    </div>
  )
}

export default TestOne