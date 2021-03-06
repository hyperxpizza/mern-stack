import React from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import ContactPage from "./Pages/ContactPage";
import useToken from "./Components/useToken";
import UpdateContactPage from "./Pages/UpdateContactPage.js";

function App() {

  const {token, setToken} = useToken();
  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/add">
            <ContactPage />
          </Route>
          <Route exact path="/update">
            <UpdateContactPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
