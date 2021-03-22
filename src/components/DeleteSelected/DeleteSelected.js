import './deleteSelected.css';


export default function DeleteSelected(props) {
  
  
  return(
    <div className="delete-section">
      <button className="button selected-button" onClick={ (e) => props.handlerDeleteSelectedItems(e)}>Delete select</button>
      <button className="button all-button" onClick={() =>  props.handlerDeleteAllItems() } value="del-all" >Delete all</button>
    </div>
  )
}