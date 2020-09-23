import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Login from "./components/Login/index";
import Musica from "./components/musica/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/musica" component={Musica} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
