import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = function (props) {
  let allFilteredExpenses = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return (
    <ul className="expenses-list">
      {props.items.length === 0 ? (
        <h2 className="expenses-list__fallback">No expenses found.</h2>
      ) : (
        allFilteredExpenses
      )}
    </ul>
  );
};

export default ExpensesList;
