import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function nameChangeHandler() {
    setTitle("updated!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={nameChangeHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
