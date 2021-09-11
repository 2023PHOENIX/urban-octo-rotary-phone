import PrintItem from "./PrintItem"
import './PrintItems.css';
const PrintItems=(props)=>{
    

    return (
        <div className="classList">

        { props.list.map(x=> 
            <PrintItem x = {x}/> 
        )}
        </div>
    )
}


export default PrintItems;