import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header"
import Container from "./pages/Container";
import NotFound from "./pages/NotFound"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Container} />
        <Route path="/edit/:id" component={Container} />
        <Route exact path="/add" component={Container} />
        <Route component ={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
