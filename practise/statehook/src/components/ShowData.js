import ShowItems from "./ShowItems";

function ShowData(props) {
  return (
    <div>
      {props.data.map((x) => (
        <ShowItems name={x.name} batch={x.batch} semester={x.semester} />
      ))}
      {/* <div>
        <p>{props.data[0].name}</p>
        <p>{props.data[0].batch}</p>
        <p>{props.data[0].semester}</p>
      </div>
      <div>
        <p>{props.data[1].name}</p>
        <p>{props.data[1].batch}</p>
        <p>{props.data[1].semester}</p>
      </div>
      <div>
        <p>{props.data[2].name}</p>
        <p>{props.data[2].batch}</p>
        <p>{props.data[2].semester}</p>
      </div> */}
    </div>
  );
}

export default ShowData;
