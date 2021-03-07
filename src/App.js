import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header"
import Container from "./pages/Container";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Container} />
        <Route exact path="/edit" component={Container} />
        <Route exact path="/add" component={Container} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
