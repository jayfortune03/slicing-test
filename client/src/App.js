import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
}

export default App;
