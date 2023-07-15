import React, { useState } from 'react';
import './NewForm.css';
function NewForm(props) {

    const [userInput , setUserInput]=useState({
        title:'',
        amount: '',
        date:''
    });
    // const [ title, setTitle ] = useState('');
    // const [Amount , setAmount] = useState('');
    // const [date,setDate] = useState('');

    const titleHandler = (e)=>{
        setUserInput({
            ...userInput,
            title: e.target.value
        })
    }
    const amountHandler = (e)=>{
        setUserInput({
            ...userInput,
            amount: e.target.value
        })
    }

    const DateHandler = (e)=>{
        setUserInput({
            ...userInput,
            date: e.target.value
        })
    }

    const submitHandler =(e)=>{
        e.preventDefault();

        const NewItem={
            title : userInput.title ,
            amount : userInput.amount,
            date : new Date(userInput.date)
        }

        // console.log(NewItem);
        props.onSaveFormData(NewItem);
        setUserInput({
            ...userInput,
            date:"",
            title:"",
            amount:''
        })
    }
  return (
    <form onSubmit={submitHandler}>
        <div className='controls'>
            <div className='control'>
                <label>Title</label>
                <input type="text" value={userInput.title} onChange={titleHandler}></input>
            </div>
            <div className='control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={userInput.amount} onChange={amountHandler}></input>
            </div>
            <div className='control'>
                <label>Date</label>
                <input type='date' min='2022-1-1' max='2023-6-1' value={userInput.date} onChange={DateHandler}></input>
            </div>
        </div>
        <div className='action'>
            <button type='submit'> Add New  </button>
        </div>

    </form>
  )
}

export default NewForm