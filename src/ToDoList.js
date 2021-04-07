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
import { TocOutlined } from "@material-ui/icons";

export default function ToDoList() {
  const [inputText, setInputText] = useState("");
  const [editInput, setEditInput] = useState("");
  const [todos, setTodos] = useState([]);
  //const [todoId, setTodoId] = useState(0);
  //const [filteredTodos, setFilteredTodos] = useState([...todos]);
  const [status, setStatus] = useState();
  const [inputVisible, setInputVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [currPage, setCurrPage] = useState(1);
  const [amountOfPages, setAmountOfPages] = useState(1);
  const [sortTrigger, setSortTrigger] = useState("asc");
  const [errMessage, setErrMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const REST_API_URL = process.env.REACT_APP_URL;
  const REST_API_URL_GET = process.env.REACT_APP_URL_GET;

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
      const todo = { name: inputText, done: false };
      await axios.post(REST_API_URL, todo);
      getItem(sortTrigger, null, currPage);
      console.log("posted");
    }
    postItemRequest();
  };

  async function getItem(sort, filter, pagination) {
    console.log(123);
    const { data } = await axios.get(REST_API_URL_GET, {
      params: {
        order: sort,
        filterBy: filter,
        page: pagination,
      },
    });

    let arr = [...data.rows].map((todo) => {
      return { ...todo, isEditing: false };
    });
    setTodos([...arr]);

    console.log("🚀 ~ file: ToDoList.js ~ line 103 ~ getItem ~ todos", todos);
  }
  const handlerSetEmptiness = () => {
    if (todos.length === 0) {
      setIsEmpty(false);
    } else if (todos !== 0) {
      setIsEmpty(false);
    }
  };

  const handlerSortDateToUp = () => {
    setSortTrigger("asc");
    getItem(sortTrigger, null, currPage);
  };

  const handlerSortDateToDown = () => {
    setSortTrigger("desc");
    getItem(sortTrigger, null, currPage);
  };

  const handleChangeItemText = (e, index) => {
    const editingItem = todos.find((e) => e.id === index);

    editItemRequest(editingItem, editInput);

    editingItem.isEditing = false;

    getItem();
  };

  async function editItemRequest(item, itemName) {
    await axios.patch(REST_API_URL + "/" + item.id, {
      name: itemName,
    });
  }

  const handlerCheckingCheckBox = (e, index) => {
    let updatedTodos = [...todos];
    const completedTodo = updatedTodos.find((e) => e.id === index);
    completedTodo.done = e.target.checked;
    setTodos([...updatedTodos]);
  };

  const handlerDeleteItem = (index) => {
    const deletingItem = todos.find((todo) => todo.id === index);

    async function deleteItem() {
      await axios.delete(REST_API_URL + "/" + deletingItem.id);
      getItem(sortTrigger, null, currPage);
    }

    deleteItem();
  };

  const handlerDeleteAllServerItems = () => {
    //try {
    todos.forEach((todo) => {
      async function deleteItem() {
        await axios.delete(REST_API_URL + "/" + todo.id);
        getItem(sortTrigger, null, currPage);
      }
      deleteItem();
    });
  };

  const handlerDeleteSelectedItems = (e) => {
    let newTodos = todos.filter((todo) => todo.done === true);
    newTodos.forEach((todo) => {
      async function deleteItem() {
        await axios.delete(REST_API_URL + "/" + todo.id);
        getItem(sortTrigger, null, currPage);
      }
      deleteItem();
    });
  };

  const handlerFilterTodos = (status) => {
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

  // const handlerCheckIsEditing = (e, index) => {
  //   let updatedTodos = [...todos];
  //   const completedTodo = updatedTodos.find((e) => e.id === index);
  //   completedTodo.isEditing = true;
  //   setTodos([...updatedTodos]);
  //   setInputVisible(true);
  // };

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

  // useEffect(() => {
  //   handlerFilterTodos(status, currPage);
  //   //saveLocalTodos();
  // }, [todos, status]);

  useEffect(() => {
    handlerSetEmptiness();
    handlerPageCounter(status);
  }, [todos]);

  useEffect(() => {
    getItem(sortTrigger, status, currPage);
  }, []);

  // useEffect(() => {
  //   setIsError(true);
  // }, [errMessage]);

  // useEffect(() => {
  //   handlerFilterTodos(status, currPage);
  // }, [currPage]);

  useEffect(() => {
    handlerFilterTodos(status, currPage);
    setCurrPage(1);
  }, [status]);

  // useEffect(() => {
  //   handlerPageCounter(status);
  // }, [status, todos]);

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
        //handlerCheckIsEditing={handlerCheckIsEditing}
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
