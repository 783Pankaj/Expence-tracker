import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ExpenseData = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [text, setText] = useState("");
    const [price, setPrice] = useState(0);
    const [store, setStore] = useState([]);
    console.log(text)
    console.log(startDate)
    console.log(price)

    const subFun=()=>{
        setStore([...store ,,text, price])
        setText('')
        setPrice('')
    }
    console.log(store)
    return (
        <div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

            <input type='text'
                placeholder='enter here your Data'
                value={text}
               onChange={(e)=>{setText(e.target.value)}}
            />
            <input type='number'
                placeholder='enter amount'
                value={price}
                onChange={(e)=>{setPrice(e.target.value)}}
            />
            <button onClick={subFun} >Submit</button>
            <br/>
            <br/>
            <p>{store}</p>
        </div>
    )
}

export default ExpenseData
