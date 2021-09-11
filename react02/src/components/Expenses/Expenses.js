import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  function handleFilterYear(yr) {
    setFilterYear(yr);
  }
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expenseContent = <p> No item Found</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((x) => (
      <ExpenseItem key={x.key} title={x.title} price={x.price} date={x.date} />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={handleFilterYear}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
