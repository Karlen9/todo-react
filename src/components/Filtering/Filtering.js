import './filtering.css';

export default function Filtering(props) {  
  return (
    <div>
       <div className="selection-bar">
          <button className="button all-button" onClick={() =>  props.setStatus("all") } value="all" >All</button>
          <button className="button done-button" onClick={() => props.setStatus("done")} value="done">Done</button>
          <button className="button undone-button" onClick={() => props.setStatus("undone")} value="undone">Undone</button>
        </div>
    </div>
  );
}