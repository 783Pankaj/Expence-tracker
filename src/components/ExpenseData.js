import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DisplayExpense from './DisplayExpense';

const getLocalItem = () => {
    let list = localStorage.getItem('lists')
    console.log(list)
    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return []
    }
}

const ExpenseData = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [text, setText] = useState("");
    const [price, setPrice] = useState(0);
    const [store, setStore] = useState(getLocalItem());
    // console.log(text)
    // console.log(startDate)
    // console.log(price)

    const subFun = (e) => {
        e.preventDefault();
        const allExpenseData = {
            userText: text,
            UserPrice: price,
            userDate: new Date(startDate)
        }
        // console.log(allExpenseData)
        setStore([...store, allExpenseData])
        setText('')
        setPrice('')
    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(store))
    }, [store])

    // console.log(store)

    const deleteItem = (key) => {
        let newItem = [...store];
        newItem.splice(key, 1)
        setStore([...newItem])
    }
    return (
        <div className='mainDiv'>
            <form onSubmit={subFun}>
                <div>
                    <labe>Select Date</labe>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='date' />
                </div>
                <div className='divs'>
                    <label>Enter Item </label>
                    <input type='text'
                        placeholder='enter here your Data'
                        className='text'
                        value={text}
                        onChange={(e) => { setText(e.target.value) }}
                    />
                    <div>
                        <label>Enter Price</label>
                        <input type='number'
                            placeholder='enter amount'
                            className='price'
                            value={price}
                            onChange={(e) => { setPrice(e.target.value) }}
                        />
                    </div>
                    <button className="submit"  >Submit</button>
                    <br />
                    <br />
                    {
                        store.map((val, i) => {
                            return (

                                <DisplayExpense
                                key={i}
                                index={i}
                                    date={val.userDate}
                                    text={val.userText}
                                    price={val.UserPrice}
                                    deleteItem={deleteItem}
                                />

                            )
                        }
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default ExpenseData
