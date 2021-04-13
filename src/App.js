import ToDoList from "./ToDoList";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/todos" component={ToDoList} />
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}
