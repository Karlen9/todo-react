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
import { RedoTwoTone } from "@material-ui/icons";

export default function ToDoList() {
  const [inputText, setInputText] = useState("");
  const [editInput, setEditInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [amountOfPages, setAmountOfPages] = useState(1);
  const [sortTrigger, setSortTrigger] = useState("asc");
  const [errMessage, setErrMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isEdit, setIsEdit] = useState("");

  const REST_API_URL = process.env.REACT_APP_URL;
  const REST_API_URL_GET = process.env.REACT_APP_URL_GET;

  async function getItem(sort, filter, pagination) {
    const { data } = await axios.get(REST_API_URL_GET, {
      params: {
        order: sort,
        filterBy: filter,
        page: pagination,
      },
    });

    setAmountOfPages(Math.ceil(data.count / 5));
    setTodos([...data.rows]);
  }

  async function editItemText(item) {
    await axios.patch(REST_API_URL + "/" + item.id, {
      name: editInput,
    });
    getItem(sortTrigger, status, currPage);
  }

  async function editItemDone(item) {
    await axios.patch(REST_API_URL + "/" + item.id, {
      done: item.done,
    });
    getItem(sortTrigger, status, currPage);
  }

  const handlerInputText = (e) => {
    if (e.key === "Enter") {
      try {
        if (e.target.value.trim() === "") {
          e.target.value = "";
          throw new Error("Write some task");
        } else {
          e.preventDefault();
          handlerSubmitTodo(e);
          setInputText("");
          e.target.value = "";
        }
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
        } else {
          e.preventDefault();
          setEditInput("");
          handleChangeItemText(e, index);
          e.target.value = "";
          setIsEdit("");
          getItem(sortTrigger, status, currPage);
        }
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
      const todo = { name: inputText, done: false };
      await axios.post(REST_API_URL, todo);
      getItem(sortTrigger, status, currPage);
      console.log("posted");
    }
    postItemRequest();
  };

  const handleChangeItemText = (e, index) => {
    const editingItem = todos.find((e) => e.id === index);

    editItemText(editingItem);
    getItem(sortTrigger, status, currPage);
  };

  const handlerCheckingCheckBox = (item, index) => {
    let updatedTodos = [...todos];
    const task = updatedTodos.find((e) => e.id === index);
    task.done = item.target.checked;
    setTodos([...updatedTodos]);
    editItemDone(task);
    getItem(sortTrigger, status, currPage);
  };

  const handlerDeleteItem = (index) => {
    const deletingItem = todos.find((todo) => todo.id === index);

    async function deleteItem() {
      await axios.delete(REST_API_URL + "/" + deletingItem.id);
      getItem(sortTrigger, status, currPage);
    }

    deleteItem();
  };

  // const handlerDeleteAllServerItems = () => {
  //   todos.forEach((todo) => {
  //     async function deleteItem() {
  //       await axios.delete(REST_API_URL + "/" + todo.id);
  //     }
  //     deleteItem();
  //   });
  //   getItem(sortTrigger, status, currPage);
  // };

  // const handlerDeleteSelectedItems = (e) => {
  //   let newTodos = todos.filter((todo) => todo.done === true);
  //   newTodos.forEach((todo) => {
  //     async function deleteItem() {
  //       await axios.delete(REST_API_URL + "/" + todo.id);
  //     }
  //     deleteItem();
  //   });
  //   getItem(sortTrigger, status, currPage);
  // };

  const handlerPageChange = (e, page) => {
    setCurrPage(page);
  };

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error) {
        setErrMessage(error.response.data.errors);
        setIsError(true);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    getItem(sortTrigger, status, currPage);
  }, []);

  useEffect(() => {
    getItem(sortTrigger, status, currPage);
    console.log(sortTrigger);
  }, [sortTrigger]);

  useEffect(() => {
    getItem(sortTrigger, status, currPage);
  }, [currPage, status]);

  useEffect(() => {
    setCurrPage(1);
    getItem(sortTrigger, status, currPage);
  }, [status]);

  return (
    <section className="main-section">
      <h1>ToDo</h1>
      <InputField handlerInputText={handlerInputText} inputText={inputText} />
      <div className="wrapper">
        <Filtering setStatus={setStatus} />
        <Sorting setSortTrigger={setSortTrigger} />
      </div>

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

      <Pages
        handlerPageChange={handlerPageChange}
        amountOfPages={amountOfPages}
      />

      {/* <div className="delete-main-section">
        <DeleteSelected
          handlerDeleteAllServerItems={handlerDeleteAllServerItems}
          handlerDeleteSelectedItems={handlerDeleteSelectedItems}
        />
      </div> */}

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
