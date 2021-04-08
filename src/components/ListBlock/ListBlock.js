import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";

import "./listblock.css";

export default function ListBlock(props) {
  return (
    <div className="list">
      <List width="100%">
        {props.todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemIcon>
              <Checkbox
                checked={todo.done}
                onClick={(e) => props.handlerCheckingCheckBox(e, todo.id)}
                color="primary"
              />
            </ListItemIcon>
            <ListItemText
              primary={todo.name}
              onDoubleClick={() => {
                props.setIsEdit(todo.id);
              }}
            />
            {props.isEdit === todo.id ? (
              <TextField
                className="edit-input"
                onKeyDown={(e) => props.handlerEscapeEdition(e, todo.id)}
                onChange={(e) => props.handlerEditText(e)}
                onKeyPress={(e) => {
                  props.handlerEditText(e, todo.id);
                }}
              />
            ) : null}

            {<p className="date">{todo.createdAt.split("T")[0]}</p>}
            <IconButton
              onClick={(e) => props.handlerDeleteItem(todo.id)}
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
