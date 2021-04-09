import ToDoList from "./ToDoList";
import Nav from "./NavBar";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TodayOutlined } from "@material-ui/icons";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="main-wrapper">
          <Route path="/todos" component={ToDoList} />
          <ToDoList />
        </div>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}
