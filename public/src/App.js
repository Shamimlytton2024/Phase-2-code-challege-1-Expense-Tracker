import React,{useState} from '.react';
import ExpenseForm from ',/components/ExpenseForm';
import  ExpenseTable from'../src/components/ExpenseTable';

const App = () => {
    const [expense, setExpenses] =useState([]);

    const addExpense =(expense) => {
      setExpenses((prev)  => [...prev,
  {...expense, id: Date.now() }]);
       };

  return  (
    <div style={{ padding: '2rem '}}>
       <h1>Expense Tracker </h1>
       <ExpenseForm 
onAddExpense={addExpense} />
       <ExpenseTable expenses={expense} />
    </div> 
  );
 };

 export default App;
