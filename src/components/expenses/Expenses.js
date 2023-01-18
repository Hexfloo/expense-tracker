import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("2022");

  const yearDropdownHandler = function (pickedYear) {
    setYear(pickedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearChange={yearDropdownHandler} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
