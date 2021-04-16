import ToDoList from "./ToDoList";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/login">
        <Router>
          <Switch>
            <Route path="/todos" component={ToDoList}></Route>
            <Route path="/login" component={SignIn}></Route>
            <Route path="/register" component={SignUp}></Route>
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
}
