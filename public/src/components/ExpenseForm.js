import React, {useState} from "react";

const ExpenseForm = ( { onAddExpense }) => {
    const [title, setTittle] = useState('');
    const [amount, setAmount] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!title || !amount) return;

        onAddExpense({ title , amount: parseFloat(amount)});
        setAmount('');
        setAmount('');
    };

return( 
    <form onSubmit={handlesubmit}>
      <nput
          type="text"
          placeholder="Expense title"
          value={title}
          onChange={(e) =>
setTittle(e.target.value)} 
          required
        />      
       <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => 
setAmount(e.target.value)} 
          required
        />
        <button type="submit">Add Expense</
 button>
        </form>   
    );    
};
 export default ExpenseForm;