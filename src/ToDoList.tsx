//imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import Filtering from './components/Filtering/Filtering';
import InputField from './components/InputField/InputField';
import ListBlock, { todoInterface } from './components/ListBlock/ListBlock';
import Sorting from './components/Sorting/Sorting';
import Pages from './components/Pages/Pages';
import './ToDoList.css';

export enum sortEnum {
	asc = 'asc',
	desc = 'desc',
}

export default function ToDoList() {
	const [inputText, setInputText] = useState('');
	const [editInput, setEditInput] = useState('');
	const [todos, setTodos] = useState<todoInterface[]>([]);
	const [status, setStatus] = useState<boolean | null>(null);
	const [currPage, setCurrPage] = useState(1);
	const [amountOfPages, setAmountOfPages] = useState(1);
	const [sortBy, setSortBy] = useState<sortEnum>(sortEnum.asc);
	const [errMessage, setErrMessage] = useState('');
	const [isError, setIsError] = useState(false);
	const [isEdit, setIsEdit] = useState('');
	const [amountOfTasks, setAmountOfTasks] = useState<number>(0);
	let history = useHistory();

	const REST_API_URL = process.env.REACT_APP_URL;

	const axiosCustom = axios.create({
		baseURL: REST_API_URL,
		headers: { 'auth-token': localStorage.getItem('token') },
	});
	async function getItem(sort: string, filter: boolean | null, pagination: number) {
		const { data } = await axiosCustom({
			method: 'GET',
			url: '/get',
			params: {
				order: sort,
				filterBy: filter,
				page: pagination,
			},
		});

		setAmountOfPages(Math.ceil(data.count / 5));
		setAmountOfTasks(data.count);
		setTodos([...data.rows]);
	}

	async function editItem(item: todoInterface) {
		await axiosCustom({
			method: 'PATCH',
			url: '/patch',
			params: {
				id: item.id,
			},
			data: {
				name: item.name,
				done: item.done,
			},
		});
		getItem(sortBy, status, currPage);
	}

	const handlerInputText = (e: any) => {
		if (e.key === 'Enter') {
			try {
				if (e.target.value.trim() === '') {
					e.target.value = '';
					throw new Error('Write some task');
				}
				e.preventDefault();
				handlerSubmitTodo();
				setInputText('');
				e.target.value = '';
			} catch (error) {
				setErrMessage(error.message);
				setIsError(true);
			}
		} else {
			setInputText(e.target.value);
		}
	};

	const handlerEditText = (e: any) => {
		if (e.key === 'Enter') {
			try {
				if (e.target.value.trim() === '') {
					e.target.value = '';
					throw new Error('Write some task');
				}
				e.preventDefault();
				setEditInput('');
				handleChangeItemText(e);
				e.target.value = '';
				e.target.focus();
				setIsEdit('');
				getItem(sortBy, status, currPage);
			} catch (error) {
				setErrMessage(error.message);
				setIsError(true);
			}
		} else {
			setEditInput(e.target.value);
		}
	};

	const handlerEscapeEdition = (e: any, index: string) => {
		if (e.key === 'Escape') {
			let updatedTodos = [...todos];
			e.preventDefault();
			setEditInput(inputText);
			const element = updatedTodos.find((item) => item.id === index);
			const prevElement = todos.find((e) => e.id === index);
			if (element && prevElement) {
				element.name = prevElement.name;
			}
			// e.target.value = '';
			// e.target.blur();
			setIsEdit('');
		}
	};

	const handlerSubmitTodo = () => {
		async function postItemRequest() {
			await axiosCustom({
				method: 'POST', //ITHITHER IEUHGG
				url: '/post',
				data: {
					name: inputText,
					done: false,
				},
			});
			getItem(sortBy, status, currPage);
		}
		postItemRequest();
	};

	const handleChangeItemText = (index: string) => {
		const task = todos.find((item) => item.id === index);
		if (task) {
			task.name = editInput;
			editItem(task);
		}
		getItem(sortBy, status, currPage);
	};

	const handlerCheckingCheckBox = (e: any, index: string) => {
		const task = todos.find((e) => e.id === index);
		if (task) {
			task.done = e.target.checked;
			editItem(task);
			getItem(sortBy, status, currPage);
		}
	};

	const handlerDeleteItem = (index: string) => {
		const deletingItem = todos.find((todo) => todo.id === index);

		async function deleteItem() {
			await axiosCustom({
				method: 'DELETE',
				url: '/delete',
				params: {
					id: deletingItem?.id,
				},
			});
			getItem(sortBy, status, currPage);
		}

		deleteItem();
	};

	const handlerPageChange = (page: number) => {
		setCurrPage(page);
	};

	const signOut = (e: any) => {
		localStorage.removeItem('token');
		history.push('/login');
	};

	axios.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			if (error) {
				setErrMessage(error.response.data.errors || error.response.data.error);
				setIsError(true);
			}
			return Promise.reject(error);
		}
	);

	const redirectToLogIn = () => {
		if (errMessage === 'Invalid Token') {
			history.push('/login');
		}
	};

	useEffect(() => {
		getItem(sortBy, status, currPage);
	}, []);

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			history.push('/login');
		}
		getItem(sortBy, status, currPage);
	}, [currPage, status, amountOfPages, sortBy]);

	useEffect(() => {
		redirectToLogIn();
	}, [errMessage]);

	return (
		<section className="main-section">
			<h1>ToDo List</h1>
			<InputField handlerInputText={handlerInputText} />

			<div className="wrapper">
				<Filtering setStatus={setStatus} />
				<Sorting setSortBy={setSortBy} />
			</div>

			<ListBlock
				setIsEdit={setIsEdit}
				isEdit={isEdit}
				todos={todos}
				handlerEscapeEdition={handlerEscapeEdition}
				handlerCheckingCheckBox={handlerCheckingCheckBox}
				handlerDeleteItem={handlerDeleteItem}
				handlerEditText={handlerEditText}
			/>
			{amountOfTasks > 5 ? (
				<Pages handlerPageChange={handlerPageChange} amountOfPages={amountOfPages} />
			) : null}
			<button
				onClick={(e) => {
					signOut(e);
				}}
				className="button sign-out-btn"
			>
				Sign out
			</button>

			{isError ? (
				<Snackbar open={isError} onClose={() => setIsError(false)} autoHideDuration={2000}>
					<Alert onClose={() => setIsError(false)} severity="error">
						{errMessage}
					</Alert>
				</Snackbar>
			) : null}
		</section>
	);
}
