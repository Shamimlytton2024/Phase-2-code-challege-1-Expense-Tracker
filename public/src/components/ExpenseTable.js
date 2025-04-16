import React from "react";
import ExpenseList from './ExpenseList';

const ExpenseTable = ({ expenses }) => {
    return (
        <table border="1" width="100%"
 style={{ marginTop: '1rem'}}>
       <thread>
           <tr>
             <th>Title</th>
             <th> Amount ($)</th>
          </tr>
       </thread>
        <ExpenseList expenses={expenses} />
    </table>
    );
};

export default ExpenseTable;