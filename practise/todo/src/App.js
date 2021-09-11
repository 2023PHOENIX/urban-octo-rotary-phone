import "./App.css";
import PrintItems from "./Components/PrintItems";
import InputList from "./Components/InputList.js";
import { useState } from "react";

const lsp = [];

function App() {
  const [list, setList] = useState(lsp);

  const appendItem = (item,index) => {

    if(item.length!==0){
    setList((prevState) => {
      return [item, ...prevState];
    });
  }

    console.log(list);
  };



  return (
    <div className="appFile">
      <h1> Hello world</h1>
      <InputList addItem={appendItem} />
      <PrintItems list={list} />
    </div>
  );
}

export default App;
