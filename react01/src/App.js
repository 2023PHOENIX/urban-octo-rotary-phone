import ExpenseItem from "./components/ExpenseItem"


// function 
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: '$289.32',
      date: new Date(2020,7,14)
    },
    {
      id: 'e2',
      title: 'New Tv',
      amount: '$3237.99',
      date: new Date(2020,9,19)

    },
    {
      id: 'e3',
      title: 'Fridge',
      amount: '$2991.99',
      date: new Date(2021,1,29)

    }
  ];

  return (

    <div>

        
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />

      {/* <h1>
        Hello world
      </h1> */}


      </B

    </div>

  );
}

export default App;
