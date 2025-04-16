import React from "react";
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => ( { expenses }) => {
    return (
        <tbody>
        {expenses.map( (expense) => (
            <ExpenseItem key={expense.id} 
    expense={expense} />       
        ))}
        </tbody>
    );
};

export default ExpenseList