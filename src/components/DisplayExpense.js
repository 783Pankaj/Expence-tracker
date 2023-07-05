
import React from "react";
import './DisplayExpense.css'

const DisplayExpense = (props) => {
    let storeDate = props.date.toString();
    // localStorage.setItem('user',JSON.stringify(storeDate, props.text, props.price))
    // const dataLocal= localStorage.getItem('user')
    // console.log(dataLocal)

    return (
        <>
            <div className="tableDiv">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Item</th>
                            <th>Item Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{storeDate.slice(0, 10)}</td>
                            <td>{props.text}</td>
                            <td>{props.price}</td>
                            <td >
                                <div className="icons">
                                    <span>
                                        <i className="icon-delete" onClick={e => {
                                            props.deleteItem(props.index);
                                        }}>Delete</i>
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default DisplayExpense;