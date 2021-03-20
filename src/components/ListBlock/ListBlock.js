import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './ListBlock.css';

export default function ListBlock(props) {
  return (
    <div className="list">
      <List width="100%">
      { props.filteredTodos.map((todo) => (
        <ListItem key={todo.id} >
          <ListItemIcon>
            <Checkbox checked={todo.completed} onClick={ (e) => props.handlerCheckingCheckBox(e, todo.id)} color="primary"/>
          </ListItemIcon>
          <ListItemText primary={todo.text} />
         
          <IconButton onClick={(e) => props.handlerCheckIsEditing(e, todo.id)}  edge="end" aria-label="comments">
            <EditIcon />
          </IconButton>
          <IconButton onClick={ (e) => props.handlerDeleteItem(e, todo.id) }  edge="end" aria-label="comments">
            <DeleteIcon />
          </IconButton>
        </ListItem>
        )) }
      </List>
      </div>
  );
}