import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((data) => (
        <ExpenseItem
          key={data.id}
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
