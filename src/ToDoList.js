//imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteSelected from './components/DeleteSelected/DeleteSelected';
import Filtering from './components/Filtering/Filtering';
import InputField from './components/InputField/InputField';
import ListBlock from './components/ListBlock/ListBlock';
import Sorting from './components/Sorting/Sorting';
import Pages from './components/Pages/Pages';
import './ToDoList.css';
import EditInput from './components/EditInput/EditInput';


export default function ToDoList() {
  const [inputText, setInputText] = useState('');
  const [editInput, setEditInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(0);
  const [filteredTodos, setFilteredTodos] = useState([...todos]);
  const [status, setStatus] = useState('all');
  const [inputVisible, setInputVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [currPage, setCurrPage] = useState(1);
  const [amountOfPages, setAmountOfPages] = useState(1);
  const [sortTrigger, setSortTrigger] = useState('asc');

  const handlerInputText = (e) => {
    if(e.key === 'Enter') {
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
    if(e.key === 'Enter') {
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

  const handlerEscapeEdition = (e, index) => {
    if(e.key === 'Escape') {
      let updatedTodos = [...todos];
      e.preventDefault();
      setEditInput(inputText);
      const element = updatedTodos.find(e => e.id === index);
      const prevElement = todos.find( e => e.id === index);
      element.text = prevElement.text;
      element.isEditing = false;
    }
  }

  const handlerSubmitTodo = (e) => {
    // e.preventDefault();
    // setTodos([
    //   ...todos, { text: inputText, completed: false, id: todoId, date: new Date(), } 
    // ]);
    // setTodoId(todoId + 1);
    // setStatus("all");

    async function makePostRequest() {
      console.log('hello');
      const todo = {name: inputText, done: false, isEditing: false};
      const res = await axios.post(process.env.REACT_APP_POST_URL, todo);
      makeGetRequest();
    }
    makePostRequest();
  };

  async function makeGetRequest() {
    const {data} = await axios.get(process.env.REACT_APP_GET_URL, {
      params:{
        order: sortTrigger, 
        filterBy: status
      }});
    setTodos(data.map((item, index) => ( {id: index, text: item.name, completed: item.done, date: item.createdAt, uuid: item.uuid, isEditing: item.isEditing})));
  }

  const handlerSetEmptiness = () => {
    if (todos.length === 0) {
      setIsEmpty(true);
      console.log(isEmpty);
    } else if (todos !== 0){
      setIsEmpty(false);
      console.log(isEmpty);
    }
  };

  const handlerSortDateToUp = () => {
    setSortTrigger('asc');
    makeGetRequest();

  };

  const handlerSortDateToDown = () => {
    setSortTrigger('desc');
    makeGetRequest();
  };

  const handleChangeItemText = (e, index) => {
    // e.preventDefault();
    // let updatedTodos = [...todos];
    // const completedTodo = updatedTodos.find((e) => e.id === index);
    // completedTodo.text = editInput;
    // completedTodo.isEditing = false;
    // setTodos([...updatedTodos]);

    const editingItem = todos.find(e => e.id === index);

    editItemRequest(editingItem, EditInput, "name");

    editingItem.isEditing = false;

  };

  async function editItemRequest(item, itemName) {
    await axios.patch(`https://todo-api-learning.herokuapp.com/v1/task` + item.uuid,
      {
        name: itemName
      }
    );
  }

  const handlerCheckingCheckBox = (e, index) => {
    let updatedTodos = [...todos];
    const completedTodo = updatedTodos.find(e => e.id === index);
    completedTodo.completed = e.target.checked;
    setTodos([...updatedTodos]);
  };

  const handlerDeleteItem = (e, index) => {
    // e.preventDefault();
    // let updatedTodos = [...todos];
    // updatedTodos = updatedTodos.filter( el => el.id !== index);
    // setTodos([...updatedTodos]);

    const deletingItem = todos.find(e => e.id === index);

    async function deleteItem() {

      const element = await axios.delete(`https://todo-api-learning.herokuapp.com/v1/task/3/` + deletingItem.uuid);
      makeGetRequest();
      console.log(element);

    }

    deleteItem();
  };

  const handlerDeleteAllItems = () => {
    setTodos([]);
  };

  const handlerDeleteAllServerItems = () => {
    for(let i = 0; i < todos.length; i++) {
      const deletingItem = todos.find(e => e.id === i);

      async function deleteItem() {
        const element = await axios.delete(`https://todo-api-learning.herokuapp.com/v1/task/3/` + deletingItem.uuid);
        makeGetRequest();
        console.log(element);
      }
      deleteItem();
    }
  };

  const handlerDeleteSelectedItems = (e) => {
    e.preventDefault();
    let updatedTodos = [...todos];
    updatedTodos = updatedTodos.filter(e => e.completed === false);
    setTodos([...updatedTodos]);
  };

  const handlerFilterTodos = (status, page) => {
    const cPage = page - 1;
    switch(status) {
      case 'all':
        setFilteredTodos([...todos.slice(cPage * 5, cPage * 5 + 5)]);
        setStatus('all');

        break;
      case 'done':
        setFilteredTodos([...todos.filter(e => e.completed === true).slice(cPage * 5, cPage * 5 + 5)]);
        setStatus('done');
        handlerFilterTodos();

        break;
      case 'undone':
        setFilteredTodos([...todos.filter(e => e.completed === false).slice(cPage * 5, cPage * 5 + 5)]);
        setStatus('undone');
        handlerFilterTodos();

        break;
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

  const handlerPageCounter = (stat) => {
    switch(stat) {
      case "all":
        setAmountOfPages(Math.ceil(todos.length / 5));
        console.log(amountOfPages);
        break;
      case "done":
        setAmountOfPages(Math.ceil(todos.filter(e => e.completed === true).length / 5));
        break;
      case "undone":
        setAmountOfPages(Math.ceil(todos.filter(e => e.completed === false).length / 5));
        break;
      default:
        break;
    }
  };

  const handlerPageChange = (e, page) => {
    setCurrPage(page);
  };

    //localStorage
  
  // const saveLocalTodos = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };  //

  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let todosLocal = JSON.parse(localStorage.getItem("todos"));
  //     setTodos(todosLocal);
  //   }
  // };


  // useEffect(() => {
  //   //getLocalTodos();
  // }, []);

  
  useEffect(() => {
    handlerFilterTodos(status, currPage);
    //saveLocalTodos();
  }, [todos, status]);


  useEffect(() => {
    handlerSetEmptiness();

  }, [todos]);

  useEffect(() => {
    handlerFilterTodos(status, currPage);
  }, [currPage]);

  useEffect(() => {
    handlerFilterTodos(status, currPage);
    setCurrPage(1);

  }, [status]);

  useEffect(() => {
    handlerPageCounter(status);
  }, [status, todos]);
  
  return (
    <section className='main-section'>
      <h1>ToDo</h1>
      <InputField
        handlerInputText = {handlerInputText}
        inputText= {inputText}
      />
      { !isEmpty ? <div className='wrapper'>
        <Filtering 
          setStatus = {setStatus}
        />
        <Sorting handlerSortDateToUp={handlerSortDateToUp} handlerSortDateToDown={handlerSortDateToDown}/>
      </div> : null}
      
      <ListBlock 
        handlerEscapeEdition={handlerEscapeEdition}
        handlerCheckIsEditing = {handlerCheckIsEditing} 
        handlerCheckingCheckBox = {handlerCheckingCheckBox}
        handlerDeleteItem = {handlerDeleteItem}
        filteredTodos = {filteredTodos}
        inputVisible={inputVisible}
        handlerEditText={handlerEditText}
        handleChangeItemText={handleChangeItemText}
        
      />  

      { !isEmpty ? <Pages
        handlerPageCounter={handlerPageCounter}
        handlerPageChange={handlerPageChange}
        amountOfPages={amountOfPages}
      /> : null }

      { !isEmpty ? <div className='delete-main-section'>
        <DeleteSelected 
          handlerDeleteAllServerItems={handlerDeleteAllServerItems}
          handlerDeleteAllItems={handlerDeleteAllItems}
          handlerDeleteSelectedItems={handlerDeleteSelectedItems}
        />
      </div> : null}
       
    </section> 
  );
}
 
