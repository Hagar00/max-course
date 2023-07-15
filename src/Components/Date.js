import React from 'react';
import './Dtae.css'

function Date(props) {

    const month = props.date.toLocaleString('en-us', {month:'long'});
    const day = props.date.toLocaleString('en-us', {day:'2-digit'});
    const year = props.date.getFullYear();
    
  return (
    <div>   
        <div className='date'>
            <div className='day'> {day} </div>
            <div className='month'> {month} </div>
            <div className='year'> {year} </div>
        </div>
    </div>
  )
}

export default Date