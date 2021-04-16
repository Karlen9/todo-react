import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import React from "react";

import "./listblock.css";

interface todoInterface{
  id:string,
  done:boolean,
  name:string,
  createdAt:string,
}

interface ListBlockProps{
  handlerCheckingCheckBox:(item:todoInterface, index:string) => void,
  handlerEscapeEdition:(e:React.KeyboardEvent<HTMLDivElement>, index:string) => void,
  handlerEditText:(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | React.KeyboardEvent<HTMLDivElement>, index:string) => void,
  handlerDeleteItem:(index:string) => void,
  isEdit: string,
  setIsEdit:React.Dispatch<React.SetStateAction<string>>,
  todos:todoInterface[]
}


export default function ListBlock(props:ListBlockProps) {
  return (
    <div className="list">
      <List>
        {props.todos.map((todo: todoInterface) => (
          <ListItem key={todo.id}>
            <ListItemIcon>
              <Checkbox
                checked={todo.done}
                onClick={(e) => props.handlerCheckingCheckBox(todo, todo.id)}
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
                onChange={(e) => props.handlerEditText(e, todo.id)}
                onKeyPress={(e) => {
                  props.handlerEditText(e, todo.id)
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
