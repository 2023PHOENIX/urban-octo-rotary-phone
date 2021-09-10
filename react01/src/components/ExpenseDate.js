import './ExpenseDate.css';



function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-us', { month: 'long' });
    const day = props.date.toLocaleString('en-us', { date: '2-digit' });
    const year = props.date.getFullYear();
    console.log();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day.split(",")[0]}</div>
        </div>)
}

export default ExpenseDate;