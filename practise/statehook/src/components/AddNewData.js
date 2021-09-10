import { useState } from "react";

function AddData(props) {
  // hooks
  const [data, setData] = useState({
    name: "",
    batch: "",
    semester: "",
  });

  function handleNameChange(event) {
    setData({
      ...data,
      name: event.target.value,
    });
  }

  function handleBatchChange(event) {
    setData({
      ...data,
      batch: event.target.value,
    });
  }

  function handleSemesterChange(event) {
    setData({
      ...data,
      semester: event.target.value,
    });
  }

  function handleSubmit(event) {
    //   props.appendData()
    event.preventDefault();
    props.appendData(data); 
    // revert back - two way binding 
    setData({
        name: "",
        batch: "",
        semester: "",
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={data.name}
          onChange={handleNameChange}
          placeholder="enter your input"
        ></input>
      </div>
      <div>
        <label>batch</label>
        <input
          type="text"
          value={data.batch}
          onChange={handleBatchChange}
          placeholder="enter your input"
        ></input>
      </div>
      <div>
        <label>semester</label>
        <input
          type="number"
          value = {data.semester}
          onChange={handleSemesterChange}
          placeholder="enter your input"
        ></input>
      </div>
      <div>
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
}

export default AddData;
