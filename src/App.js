import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header"
import Listings from "./pages/Listings";
import AddEdit from "./pages/AddEdit"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Listings} />
        <Route exact path="/add-edit" component={AddEdit} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
