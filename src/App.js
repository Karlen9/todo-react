import ToDoList from "./ToDoList";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/todos">
            <ToDoList />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
