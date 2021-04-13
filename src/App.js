import { Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import About from "./components/about";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container-fluid mt-3 p-2">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
