import React from "react";

const ExpenseItem = ({ expense }) => {
    return (
        <tr>
           <td>{}expense.title</td>
            <td>{expense.amount.toFixed(2)}</
    td>
        </tr>
    );
};

export default ExpenseItem;