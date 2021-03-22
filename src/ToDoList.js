//imports
import React, { useEffect, useState } from 'react';
import DeleteSelected from './components/DeleteSelected/DeleteSelected';
import Filtering from './components/Filtering/Filtering';
import InputField from './components/InputField/InputField';
import ListBlock from './components/ListBlock/ListBlock';
import Sorting from './components/Sorting/Sorting';
import Pages from './components/Pages/Pages';
import './ToDoList.css';

export default function ToDoList() {
  const [inputText, setInputText] = useState('');
  const [editInput, setEditInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(0);
  const [filteredTodos, setFilteredTodos] = useState([...todos]);
  const [status, setStatus] = useState("all");
  const [inputVisible, setInputVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [currPage, setCurrPage] = useState(1);

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

  const handlerEscapeEdition = (e, index) => {
    if(e.key === "Escape") {
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
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, id: todoId, date: new Date(), isEditing: false} 
    ]);
    setTodoId(todoId + 1);
    setStatus("all");
    
  };

  const handlerSetEmptiness = () => {
    if (todos.length === 0) {
      setIsEmpty(true);
      console.log(isEmpty);
    } else if (todos !== 0){
      setIsEmpty(false);
      console.log(isEmpty);
    }
  };

  const handlerDeleteItem = (e, index) => {
    e.preventDefault();
    let updatedTodos = [...todos];
    updatedTodos = updatedTodos.filter( el => el.id !== index);
    setTodos([...updatedTodos]);
  };

  const handlerSortDateToUp = () => {
    todos.sort((a, b) => {
      const aTime = a.date;
      const bTime = b.date;
      return aTime - bTime;
    });
    setFilteredTodos([...todos]);
  };

  const handlerSortDateToDown = () => {
    todos.sort((a, b) => {
      const aTime = a.date;
      const bTime = b.date;
      return bTime - aTime;
    });
    setFilteredTodos([...todos]);
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

  const handlerDeleteSelectedItems = (e) => {
    e.preventDefault();
    let updatedTodos = [...todos];
    updatedTodos = updatedTodos.filter(e => e.completed === false);
    setTodos([...updatedTodos]);
  };

  const handlerFilterTodos = (page) => {
    const cPage = page - 1;
    if (status === "all") {
      setFilteredTodos([...todos.slice(cPage * 5, cPage * 5 + 5)]);
      console.log([...filteredTodos]);
      setStatus("all");
    } else if (status === "done") {
      setFilteredTodos([...todos.slice(cPage * 5, cPage * 5 + 5).filter(e => e.completed === true)]);
      console.log([...filteredTodos]);
    } else if (status === "undone") {
      setFilteredTodos([...todos.slice(cPage * 5, cPage * 5 + 5).filter(e => e.completed === false)]);
    }
  };

  // const saveLocalTodos = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };  

  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let todosLocal = JSON.parse(localStorage.getItem("todos"));
  //     setTodos(todosLocal);
  //   }
  // };

  const handlerCheckIsEditing = (index) => {
    let updatedTodos = [...todos];
    const completedTodo = updatedTodos.find(e => e.id === index);
    console.log(inputVisible);
    completedTodo.isEditing = true;
    console.log(completedTodo.isEditing);
    setTodos([...updatedTodos]);
    setInputVisible(true);
    console.log(inputVisible);
  };  

  const handlerPageCounter = () => {
    if (status === "all") {
      return Math.ceil(filteredTodos.length / 5);
    } else if ( status === "done") {
      return Math.ceil(filteredTodos.length / 5);
    } else if (status === "undone") {
      return Math.ceil(filteredTodos.length / 5);
    }
  };

  const handlerPageChange = (page) => {
    setCurrPage(page);
  };

  // useEffect(() => {
  //   //getLocalTodos();
  // }, []);

  
  useEffect(() => {
    handlerFilterTodos(currPage);
    //saveLocalTodos();
  }, [todos, status]);

  useEffect(() => {
    handlerFilterTodos(currPage);
  }, [currPage]);

  useEffect(() => {
    handlerSortDateToUp();
    handlerSortDateToDown();
    handlerSetEmptiness();
  }, [todos]);

  useEffect(() => {
    handlerPageCounter();
  }, [filteredTodos]);
  
  return (
    <section className="main-section">
      <h1>ToDo</h1>
      <InputField
        handlerInputText = {handlerInputText}
        inputText= {inputText}
      />
      { !isEmpty ? <div className="wrapper">
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

      <Pages
        handlerPageCounter={handlerPageCounter}
        handlerPageChange={handlerPageChange}
      />
      { !isEmpty ? <div className="delete-main-section">
        <DeleteSelected 
          handlerDeleteAllItems={handlerDeleteAllItems}
          handlerDeleteSelectedItems={handlerDeleteSelectedItems}
        />
      </div> : null}
       
    </section> 
  );
}
 
