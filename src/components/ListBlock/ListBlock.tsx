import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import React from 'react';

import './listblock.css';

export interface todoInterface {
	id: string;
	done: boolean;
	name?: string;
	createdAt: string;
}

interface ListBlockProps {
	handlerCheckingCheckBox: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		index: string
	) => void;
	handlerEscapeEdition: (e: any, index: string) => void;
	handlerEditText: (
		e:
			| React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
			| React.KeyboardEvent<HTMLDivElement>,
		index: string
	) => void;
	handlerDeleteItem: (index: string) => void;
	isEdit: string;
	setIsEdit: React.Dispatch<React.SetStateAction<string>>;
	todos: todoInterface[];
}

export default function ListBlock({
	handlerCheckingCheckBox,
	handlerEscapeEdition,
	handlerEditText,
	handlerDeleteItem,
	isEdit,
	setIsEdit,
	todos,
}: ListBlockProps) {
	return (
		<div className="list">
			<List>
				{todos.map((todo: todoInterface) => (
					<ListItem key={todo.id}>
						<ListItemIcon>
							<Checkbox
								checked={todo.done}
								onClick={(e) => handlerCheckingCheckBox(e, todo.id)}
								color="primary"
							/>
						</ListItemIcon>
						<ListItemText
							primary={todo.name}
							onDoubleClick={() => {
								setIsEdit(todo.id);
							}}
						/>
						{isEdit === todo.id ? (
							<TextField
								className="edit-input"
								onKeyDown={(e) => handlerEscapeEdition(e, todo.id)}
								onChange={(e) => handlerEditText(e, todo.id)}
								onKeyPress={(e) => {
									handlerEditText(e, todo.id);
								}}
							/>
						) : null}

						{<p className="date">{todo.createdAt.split('T')[0]}</p>}
						<IconButton
							onClick={(e) => handlerDeleteItem(todo.id)}
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
