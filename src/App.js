import { useState } from "react";

import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/expenses/Expenses";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Pet Insurance",
    amount: 439,
    date: new Date(2022, 1, 12),
  },
  {
    id: "e6",
    title: "Computer Screen",
    amount: 400,
    date: new Date(2022, 3, 23),
  },
  {
    id: "e6",
    title: "Pet Insurance",
    amount: 439,
    date: new Date(2023, 1, 13),
  },
  {
    id: "e7",
    title: "Birthday Party Decorations",
    amount: 107,
    date: new Date(2023, 0, 2),
  },
  {
    id: "e8",
    title: "Shoes",
    amount: 87,
    date: new Date(2023, 0, 15),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = function (enteredExpenseData) {
    setExpenses((prevExpenses) => {
      return [enteredExpenseData, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onSaveExpenseData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
