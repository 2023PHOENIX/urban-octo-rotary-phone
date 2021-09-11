import { useState } from "react";
import "./InputList.css";
const InputList = (props) => {

  const [inputText,setInputText] = useState('');
  
  function changeInput(event){
    setInputText(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    props.addItem(inputText);
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <label> Add Item</label>
        <input type="text" onChange={changeInput} placeholder="enter your work"></input>
        <button className="button">ADD</button>
      </div>

      <p> {inputText}</p>
    </form>
  );
};

export default InputList;
