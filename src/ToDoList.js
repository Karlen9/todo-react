//imports
import React, { useEffect, useState } from 'react';
import DeleteSelected from './components/DeleteSelected/DeleteSelected';
import Filtering from './components/Filtering/Filtering';
import InputField from './components/InputField/InputField';
import ListBlock from './components/ListBlock/ListBlock';
import Sorting from './components/Sorting/Sorting';
import './ToDoList.css';

export default function ToDoList() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(0);
  const [filteredTodos, setFilteredTodos] = useState([...todos]);
  const [status, setStatus] = useState("all");

  const handlerInputText = (e) => {
    if(e.key === "Enter") {
      if(e.target.value === '') {
        alert('Write some task...');
      } else {
        e.preventDefault();
        handlerSubmitTodo(e);
        setInputText('');
        e.target.value = '';
      }
    }
    else {
      setInputText(e.target.value);
    }
  };

  const handlerSubmitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, id: todoId, date: new Date().toLocaleString()} 
    ]);
    setTodoId(todoId + 1);
    setStatus("all");
  };

  const handlerDeleteItem = (e, index) => {
    e.preventDefault();
    let updatedTodos = [...todos];
    updatedTodos = updatedTodos.filter( el => el.id !== index);
    setTodos([...updatedTodos]);
  };

  const handlerCheckingCheckBox = (e, index) => {
    let updatedTodos = [...todos];
    const completedTodo = updatedTodos.find(e => e.id === index);
    completedTodo.completed = e.target.checked;
    setTodos([...updatedTodos]);
  };

  const handlerDeleteAllItems = () => {
    setTodos([]);

  };


  const handlerFilterTodos = () => {
    if (status === "all") {
      setFilteredTodos([...todos]);
    } else if (status === "done") {
      setFilteredTodos([...todos.filter(e => e.completed === true)]);
    } else if (status === "undone") {
      setFilteredTodos([...todos.filter(e => e.completed === false)]);
    }
  };

  // const handlerEditTodoItem = (e, index) => {
  //   let updatedTodos = [...todos];
  //   const completedTodo = updatedTodos.find(e => e.id === index);
  //   completedTodo.text = 
  // }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosLocal);
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    handlerFilterTodos();
    saveLocalTodos();
  }, [todos, status]);
  
  return (
    <section className="main-section">
      <h1>ToDo</h1>
      <InputField
        handlerInputText = {handlerInputText}
        inputText= {inputText}
      />
      <div className="wrapper">
        <Filtering 
          setStatus = {setStatus}
        />
        <Sorting />
      </div>
      <ListBlock 
        handlerCheckingCheckBox = {handlerCheckingCheckBox}
        handlerDeleteItem = {handlerDeleteItem}
        filteredTodos = {filteredTodos}
      />     
      <DeleteSelected 
        handlerDeleteAllItems={handlerDeleteAllItems}
      />
    </section> 
  );
}
 
