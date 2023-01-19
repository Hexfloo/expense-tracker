import { useState } from "react";
import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("2023");

  const yearDropdownHandler = function (pickedYear) {
    setYear(pickedYear);
  };

  // Logic for filtering by year, based on state. Passed on to ExpensesList component.
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearChange={yearDropdownHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

/*
ANOTHER WAY OF OUTPUTTING THE CONDITIONAL CONTENT IS:
{filteredExpenses.length === 0 && <p>No expenses found.</p>}
{filteredExpenses.length > 0 && allFilteredExpenses}
*/

export default Expenses;
