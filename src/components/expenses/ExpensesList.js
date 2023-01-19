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
  console.log(props.items);
  return (
    <ul className="expenses-list">
      {props.items.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        allFilteredExpenses
      )}
    </ul>
  );
};

export default ExpensesList;
