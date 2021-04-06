//imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteSelected from "./components/DeleteSelected/DeleteSelected";
import Filtering from "./components/Filtering/Filtering";
import InputField from "./components/InputField/InputField";
import ListBlock from "./components/ListBlock/ListBlock";
import Sorting from "./components/Sorting/Sorting";
import Pages from "./components/Pages/Pages";
import { Snackbar } from "@material-ui/core";
import "./ToDoList.css";
import Alert from "@material-ui/lab/Alert";

export default function ToDoList() {
  const [inputText, setInputText] = useState("");
  const [editInput, setEditInput] = useState("");
  const [todos, setTodos] = useState([]);
  //const [todoId, setTodoId] = useState(0);
  //const [filteredTodos, setFilteredTodos] = useState([...todos]);
  const [status, setStatus] = useState("all");
  const [inputVisible, setInputVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [currPage, setCurrPage] = useState(1);
  const [amountOfPages, setAmountOfPages] = useState(1);
  const [sortTrigger, setSortTrigger] = useState("asc");
  const [errMessage, setErrMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const REST_API_URL = process.env.REACT_APP_BASE_URL;
  const REST_API_URL_GET = process.env.REACT_APP_GET_URL;

  const handlerInputText = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() === "") {
        alert("Write some task...");
      } else {
        e.preventDefault();
        handlerSubmitTodo(e);
        setInputText("");
        e.target.value = "";
      }
    } else {
      setInputText(e.target.value);
    }
  };

  const handlerEditText = (e, index) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() === "") {
        alert("Write some task...");
      } else {
        e.preventDefault();
        setEditInput("");
        handleChangeItemText(e, index);
        e.target.value = "";
      }
    } else {
      setEditInput(e.target.value);
    }
  };

  const handlerEscapeEdition = (e, index) => {
    if (e.key === "Escape") {
      let updatedTodos = [...todos];
      e.preventDefault();
      setEditInput(inputText);
      const element = updatedTodos.find((e) => e.id === index);
      const prevElement = todos.find((e) => e.id === index);
      element.text = prevElement.text;
      element.isEditing = false;
    }
  };

  const handlerSubmitTodo = (e) => {
    async function postItemRequest() {
      console.log("posted");
      const todo = { name: inputText, done: false };
      await axios.post(REST_API_URL + "/task", todo);
      getItem();
    }
    postItemRequest();
  };

  async function getItem(sort, filter, pagination) {
    const { data } = await axios.get(REST_API_URL_GET, {
      params: {
        order: sort,
        filterBy: filter,
        page: pagination,
      },
    });
    setTodos(data.rows);
  }

  const handlerSetEmptiness = () => {
    if (todos.length === 0) {
      setIsEmpty(true);
    } else if (todos !== 0) {
      setIsEmpty(false);
    }
  };

  const handlerSortDateToUp = () => {
    setSortTrigger("asc");
    getItem();
  };

  const handlerSortDateToDown = () => {
    setSortTrigger("desc");
    getItem();
  };

  const handleChangeItemText = (e, index) => {
    const editingItem = todos.find((e) => e.id === index);

    editItemRequest(editingItem, editInput);

    editingItem.isEditing = false;

    getItem();
  };

  async function editItemRequest(item, itemName) {
    //try {
    await axios.patch(REST_API_URL + "/task/" + item.id, {
      name: itemName,
    });
    //} catch (error) {
    //handlerErrors(error);
    //}
  }

  const handlerCheckingCheckBox = (e, index) => {
    let updatedTodos = [...todos];
    const completedTodo = updatedTodos.find((e) => e.id === index);
    completedTodo.completed = e.target.checked;
    setTodos([...updatedTodos]);
  };

  const handlerDeleteItem = (e, index) => {
    const deletingItem = todos.find((e) => e.id === index);

    async function deleteItem() {
      await axios.delete(REST_API_URL + "/task/" + deletingItem.id);
      getItem();
    }

    deleteItem();
  };

  const handlerDeleteAllItems = () => {
    setTodos([]);
  };

  const handlerDeleteAllServerItems = () => {
    //try {
    for (let i = 0; i < todos.length; i++) {
      const deletingItem = todos.find((e) => e.id === i);

      async function deleteItem() {
        await axios.delete(REST_API_URL + "/task/" + deletingItem.id);
        getItem();
      }
      deleteItem();
    }
  };

  const handlerDeleteSelectedItems = (e) => {
    e.preventDefault();
    let updatedTodos = [...todos];
    updatedTodos = updatedTodos.filter((e) => e.completed === false);
    setTodos([...updatedTodos]);
  };

  const handlerFilterTodos = (status, page) => {
    switch (status) {
      case "all":
        getItem(sortTrigger, null, currPage);
        break;
      case "done":
        getItem(sortTrigger, true, currPage);
        break;
      case "undone":
        getItem(sortTrigger, false, currPage);
        break;
      default:
        break;
    }
  };

  const handlerCheckIsEditing = (e, index) => {
    let updatedTodos = [...todos];
    const completedTodo = updatedTodos.find((e) => e.id === index);
    completedTodo.isEditing = true;
    setTodos([...updatedTodos]);
    setInputVisible(true);
  };

  const handlerPageCounter = (stat) => {
    switch (stat) {
      case "all":
        setAmountOfPages(Math.ceil(todos.length / 5));
        break;
      case "done":
        setAmountOfPages(
          Math.ceil(todos.filter((e) => e.completed === true).length / 5)
        );
        break;
      case "undone":
        setAmountOfPages(
          Math.ceil(todos.filter((e) => e.completed === false).length / 5)
        );
        break;
      default:
        break;
    }
  };

  const handlerPageChange = (e, page) => {
    setCurrPage(page);
  };

  axios.interceptors.response.use(
    (response) => {
      // Do something before request is sent\
      return response;
    },
    (error) => {
      if (error.response) {
        setErrMessage(error.message);
        console.log(error.message);
        setIsError(true);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    handlerFilterTodos(status, currPage);
    //saveLocalTodos();
  }, [todos, status]);

  useEffect(() => {
    handlerSetEmptiness();
    handlerPageCounter(status);
  }, [todos]);

  useEffect(() => {
    getItem();
  }, []);

  // useEffect(() => {
  //   setIsError(true);
  // }, [errMessage]);

  useEffect(() => {
    handlerFilterTodos(status, currPage);
  }, [currPage]);

  useEffect(() => {
    handlerFilterTodos(status, currPage);
    setCurrPage(1);
  }, [status]);

  useEffect(() => {});

  useEffect(() => {
    handlerPageCounter(status);
  }, [status, todos]);

  return (
    <section className="main-section">
      <h1>ToDo</h1>
      <InputField handlerInputText={handlerInputText} inputText={inputText} />
      {!isEmpty ? (
        <div className="wrapper">
          <Filtering setStatus={setStatus} />
          <Sorting
            handlerSortDateToUp={handlerSortDateToUp}
            handlerSortDateToDown={handlerSortDateToDown}
          />
        </div>
      ) : null}

      <ListBlock
        todos={todos}
        handlerEscapeEdition={handlerEscapeEdition}
        handlerCheckIsEditing={handlerCheckIsEditing}
        handlerCheckingCheckBox={handlerCheckingCheckBox}
        handlerDeleteItem={handlerDeleteItem}
        //filteredTodos={filteredTodos}
        inputVisible={inputVisible}
        handlerEditText={handlerEditText}
        handleChangeItemText={handleChangeItemText}
      />

      {!isEmpty ? (
        <Pages
          handlerPageCounter={handlerPageCounter}
          handlerPageChange={handlerPageChange}
          amountOfPages={amountOfPages}
        />
      ) : null}

      {!isEmpty ? (
        <div className="delete-main-section">
          <DeleteSelected
            handlerDeleteAllServerItems={handlerDeleteAllServerItems}
            handlerDeleteAllItems={handlerDeleteAllItems}
            handlerDeleteSelectedItems={handlerDeleteSelectedItems}
          />
        </div>
      ) : null}

      {isError ? (
        <Snackbar
          open={isError}
          onClose={() => setIsError(false)}
          autoHideDuration={5000}
        >
          <Alert onClose={() => setIsError(false)} severity="error">
            {errMessage}
          </Alert>
        </Snackbar>
      ) : null}
    </section>
  );
}
