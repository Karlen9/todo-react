import ToDoList from "./ToDoList";
import Nav from "./NavBar";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        {/* <Nav /> */}
        <Route path="/todos" component={ToDoList} />

        <Route path="/signin" component={SignIn} />
        <Route path="/auth" component={SignUp} />
      </Router>
    </div>
  );
}
