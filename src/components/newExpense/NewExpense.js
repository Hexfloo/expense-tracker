import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = function (props) {
  // State for rendering "add expense" button or form.
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const addingExpenseHandler = function () {
    setIsAddingExpense(true);
  };
  const abandonExpenseHandler = function () {
    setIsAddingExpense(false);
  };

  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      {isAddingExpense ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onAbandonForm={abandonExpenseHandler}
        />
      ) : (
        <button onClick={addingExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
