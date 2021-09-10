import "./expense.css";
import ExpenseDate from "./ExpenseDate";
import Card from './Card';


// import reactDom from "react-dom";
function ExpenseItem(props) {
 
    return (
        <Card className="expense-item expenses">
            
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2 class="heading"> {props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            
        </Card>
    )
}

export default ExpenseItem;