import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [title,changeTitle] = useState("");
  // const [price,ChangePrice] = useState(0.5)
  // const [date,ChangeDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    date: "",
  });

  const titleChange = (event) => {
    setUserInput({
      ...userInput,
      title: event.target.value,
    });
    // console.log(event.target.value);
    // changeTitle(event.target.value);
  };

  const priceChange = (event) => {
    setUserInput({
      ...userInput,
      price: event.target.value,
    });
  };

  const dateChange = (event) => {
    // ChangeDate(event.target.value);
    setUserInput({
      ...userInput,
      date: event.target.value,
    });
  };

  console.log(userInput.date);

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.title,
      price: userInput.price,
      date: new Date(userInput.date),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput({ title: "", price: "", date: "" });
};
    return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>TITLE</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChange}
            placeholder="enter your label"
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            value={userInput.price}
            min="0.01"
            step="0.01"
            onChange={priceChange}
            placeholder="enter your Price"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.date}
            smin="2001-01-01"
            max="2080-01-01"
            onChange={dateChange}
            placeholder="enter your Date"
          ></input>
        </div>
      </div>

      <div class="new-expense__actions">
        <button type="submit">Add Expense</button>

        <p> {userInput.title}</p>
        <p> {userInput.price}</p>
      </div>
    </form>
  );
};

export default ExpenseForm;
