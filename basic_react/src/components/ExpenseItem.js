import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <>
      <div className="expense-item">2022/04/18</div>
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </>
  );
}

export default ExpenseItem;
