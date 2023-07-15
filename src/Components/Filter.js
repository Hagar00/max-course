import React from 'react';
import './Filter.css';
function Filter(props) {

    function ChangeFilterHandler(e){
       props.onFilterData(e.target.value);
    }
  return (
    <div>
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={ChangeFilterHandler} value={props.selected}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Filter