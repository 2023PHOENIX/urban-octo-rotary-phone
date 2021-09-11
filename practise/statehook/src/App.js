import ShowData from "./components/ShowData"
import AddData from "./components/AddNewData";

import "./App.css";
import { useState } from "react";
const myData = [
  {
    name: "abhishek",
    batch: "Ai & ML",
    semester: "5",
  },
  {
    name: "Batman",
    batch: "cloud",
    semester: "3",
  },
  {
    name: "superman",
    batch: "Astrophysics",
    semester: "7",
  },
];
function App() {

    
  const [expense,setExpenses] = useState(myData);


  function appendData(data){
    setExpenses(prevExpense =>{
      return [data , ...prevExpense];
    })
  }
  return (
    <div className="App">
      <h1> Hello world</h1>

      {/* Render myData */}
      <ShowData data={expense} />
      <AddData appendData = {appendData}/>
    </div>
  );
}

export default App;
