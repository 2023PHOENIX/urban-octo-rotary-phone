import React from "react";
import { useState } from "react/cjs/react.development";

import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/newExpense/NewExpense";
const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    price: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    price: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expense, setExpense] = useState(DummyExpenses);
  const addExpenseDataHandler = (data) => {
    setExpense((prevState) => {
      return [data, ...prevState];
    });
  };
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense appendExpense={addExpenseDataHandler} />
      <Expenses items={expense} />
    </div>
  );
};

export default App;
