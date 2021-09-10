import ShowData from "./components/ShowData"
import AddData from "./components/AddNewData";

import "./App.css";
function App() {
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


  function appendData(data){
    myData.push(data);
    console.log(myData);
  }
  return (
    <div className="App">
      <h1> Hello world</h1>

      {/* Render myData */}
      <ShowData data={myData} />
      <AddData appendData = {appendData}/>
    </div>
  );
}

export default App;
