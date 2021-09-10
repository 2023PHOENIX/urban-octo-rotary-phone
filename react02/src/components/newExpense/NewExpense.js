import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";



const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random()
    };
    props.appendExpense(expenseData);
    
    // console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
