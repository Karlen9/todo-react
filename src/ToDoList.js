//imports
import { VerifiedUserRounded } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import DeleteSelected from './components/DeleteSelected/DeleteSelected';
import Filtering from './components/Filtering/Filtering';
import InputField from './components/InputField/InputField';
import ListBlock from './components/ListBlock/ListBlock';
import Sorting from './components/Sorting/Sorting';
import './ToDoList.css';

export default function ToDoList() {
  const [inputText, setInputText] = useState('');
  const [editInput, setEditInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(0);
  const [filteredTodos, setFilteredTodos] = useState([...todos]);
  const [status, setStatus] = useState("all");
  const [inputVisible, setInputVisible] = useState(false);


  const handlerInputText = (e) => {
    if(e.key === "Enter") {
      if(e.target.value.trim() === '') {
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

  const handlerEditText = (e, index) => {
    if(e.key === "Enter") {
      if(e.target.value.trim() === '') {
        alert('Write some task...');
      } else {
        e.preventDefault();
        setEditInput('');
        handleChangeItemText(e, index);
        e.target.value = '';
      }
    }
    else {
      setEditInput(e.target.value);
    }
  }; 

    //date
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = day + '\n'+ month  + '\n' + year;

  const handlerSubmitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, id: todoId, date: output, isEditing: false} 
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

  const handleChangeItemText = (e, index) => {
    e.preventDefault();
    let updatedTodos = [...todos];
    const completedTodo = updatedTodos.find((e) => e.id === index);
    completedTodo.text = editInput;
    completedTodo.isEditing = false;
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

  const handlerCheckIsEditing = (e, index) => {
    let updatedTodos = [...todos];
    const completedTodo = updatedTodos.find(e => e.id === index);
    console.log(inputVisible);
    completedTodo.isEditing = true;
    console.log(completedTodo.isEditing);
    setTodos([...updatedTodos]);
    setInputVisible(true);
    console.log(inputVisible);
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
        handlerCheckIsEditing = {handlerCheckIsEditing} 
        handlerCheckingCheckBox = {handlerCheckingCheckBox}
        handlerDeleteItem = {handlerDeleteItem}
        filteredTodos = {filteredTodos}
        inputVisible={inputVisible}
        handlerEditText={handlerEditText}
        handleChangeItemText={handleChangeItemText}
        
      />     
      <DeleteSelected 
        handlerDeleteAllItems={handlerDeleteAllItems}
      />
    </section> 
  );
}
 
