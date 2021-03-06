import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route pat="/register">
        <RegisterPage />
      </Route>
    </Switch>
  );
}

export default App;
