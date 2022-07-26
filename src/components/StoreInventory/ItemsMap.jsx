import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
/*This is the child component that maps the Items table 
  in Items.jsx and handles the button functions.
*/

export const ItemsMap = ({e, setTable}) => {

    const handleDelete = async () => {
        try {                                 // Need to change later
            const s = await axios.delete(`http://localhost:8080/id=${e.id}`);
             setEmp(e.filter((employee) => {return e.expenseId !== employee.id}));
         }
         catch (err) {
             console.log(err);
         }
    }

    const handleEdit = async () => {
        try {                                 // Need to change later
            const s = await axios.handleEdit(`http://localhost:8080/id=${e.id}`)
             setEmp(e.filter((employee) => {return e.expenseId !== employee.id}));
         }
         catch (err) {
             console.log(err);
         }
    }

    return (
    <tr>
        <td>{e.id}</td>
        <td>{e.category}</td>
        <td>{e.description}</td>
        <td>{e.price}</td>
        <td>{e.storeLocation}</td>
        <td>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        </td>
    </tr>

    );
}