import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import TextField from "@material-ui/core/TextField";

//import ToDoList from '../../ToDoList';
import "./listblock.css";

export default function ListBlock(props) {
  return (
    <div className="list">
      <List width="100%">
        {props.todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemIcon>
              <Checkbox
                checked={todo.completed}
                onClick={(e) => props.handlerCheckingCheckBox(e, todo.id)}
                color="primary"
              />
            </ListItemIcon>
            <ListItemText primary={todo.text} />
            {todo.isEditing ? (
              <TextField
                className="edit-input"
                onKeyDown={(e) => props.handlerEscapeEdition(e, todo.id)}
                onChange={(e) => props.handlerEditText(e)}
                onKeyPress={(e) => {
                  props.handlerEditText(e, todo.id);
                }}
              />
            ) : null}
            <p className="date">{todo.date.split("T")[0]}</p>
            <IconButton
              onClick={(e) => props.handlerCheckIsEditing(e, todo.id)}
              edge="end"
              aria-label="comments"
            >
              <EditOutlinedIcon
                onClick={(e) => props.handlerCheckIsEditing(e, todo.id)}
              />
            </IconButton>
            <IconButton
              onClick={(e) => props.handlerDeleteItem(e, todo.id)}
              edge="end"
              aria-label="comments"
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
