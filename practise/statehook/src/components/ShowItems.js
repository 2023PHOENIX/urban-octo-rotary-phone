

function ShowItems(props){
    console.log('this is ' + props.name);
    return (
        <div> 
            
            <p> {props.name}</p>
            <p> {props.batch}</p>
            <p> {props.semester}</p>
        </div>
    )
}


export default ShowItems;