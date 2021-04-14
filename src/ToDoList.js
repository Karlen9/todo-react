//imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import Filtering from "./components/Filtering/Filtering";
import InputField from "./components/InputField/InputField";
import ListBlock from "./components/ListBlock/ListBlock";
import Sorting from "./components/Sorting/Sorting";
import Pages from "./components/Pages/Pages";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

import "./ToDoList.css";

export default function ToDoList(props) {
  const [inputText, setInputText] = useState("");
  const [editInput, setEditInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [amountOfPages, setAmountOfPages] = useState(1);
  const [sortBy, setSortBy] = useState("asc");
  const [errMessage, setErrMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isEdit, setIsEdit] = useState("");
  const [amountOfTasks, setAmountOfTasks] = useState(0);

  const REST_API_URL = process.env.REACT_APP_BASE_HEROKU;
  const REST_API_URL_GET = process.env.REACT_APP_GET_HEROKU;

  axios.defaults.baseURL = REST_API_URL;

  let history = useHistory();

  async function getItem(sort, filter, pagination) {
    const { data } = await axios.get(REST_API_URL_GET, {
      params: {
        order: sort,
        filterBy: filter,
        page: pagination,
      },
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });

    setAmountOfPages(Math.ceil(data.count / 5));
    setAmountOfTasks(data.count);
    setTodos([...data.rows]);
  }

  async function editItem(item) {
    await axios({
      method: "PATCH",
      url: "/task/patch",
      params: {
        id: item.id,
      },
      data: {
        name: item.name,
        done: item.done,
      },
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    getItem(sortBy, status, currPage);
  }

  const handlerInputText = (e) => {
    if (e.key === "Enter") {
      try {
        if (e.target.value.trim() === "") {
          e.target.value = "";
          throw new Error("Write some task");
        }
        e.preventDefault();
        handlerSubmitTodo(e);
        setInputText("");
        e.target.value = "";
      } catch (error) {
        setErrMessage(error.message);
        setIsError(true);
      }
    } else {
      setInputText(e.target.value);
    }
  };

  const handlerEditText = (e, index) => {
    if (e.key === "Enter") {
      try {
        if (e.target.value.trim() === "") {
          e.target.value = "";
          throw new Error("Write some task");
        }
        e.preventDefault();
        setEditInput("");
        handleChangeItemText(e, index);
        e.target.value = "";
        e.target.focus();
        setIsEdit("");
        getItem(sortBy, status, currPage);
      } catch (error) {
        setErrMessage(error.message);
        setIsError(true);
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
      e.target.value = "";
      e.target.blur();
      setIsEdit("");
    }
  };

  const handlerSubmitTodo = (e) => {
    async function postItemRequest() {
      await axios({
        method: "POST",
        url: "/task/post",
        data: {
          name: inputText,
          done: false,
        },
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      });
      getItem(sortBy, status, currPage);
      console.log("posted");
    }
    postItemRequest();
  };

  const handleChangeItemText = (item, index) => {
    const task = todos.find((item) => item.id === index);
    task.name = editInput;
    editItem(task);
    getItem(sortBy, status, currPage);
  };

  const handlerCheckingCheckBox = (item, index) => {
    const task = todos.find((e) => e.id === index);
    task.done = item.target.checked;
    editItem(task);
    getItem(sortBy, status, currPage);
  };

  const handlerDeleteItem = (index) => {
    const deletingItem = todos.find((todo) => todo.id === index);

    async function deleteItem() {
      await axios({
        method: "DELETE",
        url: "/task/delete",
        params: {
          id: deletingItem.id,
        },
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      });
      getItem(sortBy, status, currPage);
    }

    deleteItem();
  };

  const handlerPageChange = (e, page) => {
    setCurrPage(page);
  };

  const signOut = (e) => {
    e.preventDefault = false;
    localStorage.removeItem("token");
    history.push("/login");
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
    if (
      errMessage === "Token is invalid, please log in" ||
      errMessage === "Invalid Token"
    ) {
      history.push("/login");
    }
  };

  useEffect(() => {
    getItem(sortBy, status, currPage);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/login");
    }
    getItem(sortBy, status, currPage);
  }, [currPage, status, amountOfPages, sortBy]);

  useEffect(() => {
    redirectToLogIn();
  }, [errMessage]);

  return (
    <section className="main-section">
      <h1>ToDo List</h1>
      <InputField handlerInputText={handlerInputText} inputText={inputText} />

      {amountOfTasks >= 1 ? (
        <div className="wrapper">
          <Filtering setStatus={setStatus} />
          <Sorting setSortBy={setSortBy} />
        </div>
      ) : null}

      <ListBlock
        setIsEdit={setIsEdit}
        isEdit={isEdit}
        todos={todos}
        handlerEscapeEdition={handlerEscapeEdition}
        handlerCheckingCheckBox={handlerCheckingCheckBox}
        handlerDeleteItem={handlerDeleteItem}
        handlerEditText={handlerEditText}
        handleChangeItemText={handleChangeItemText}
      />
      {amountOfTasks > 5 ? (
        <Pages
          handlerPageChange={handlerPageChange}
          amountOfPages={amountOfPages}
        />
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
        <Snackbar
          open={isError}
          onClose={() => setIsError(false)}
          autoHideDuration={2000}
        >
          <Alert onClose={() => setIsError(false)} severity="error">
            {errMessage}
          </Alert>
        </Snackbar>
      ) : null}
    </section>
  );
}
