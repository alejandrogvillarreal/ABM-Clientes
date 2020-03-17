import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home";
import NewClient from "../components/NewClient";
import Clients from "../components/Clients";

const Routes = props => {
  return (
    <div>
      <Navbar />
      <div id="main-routes" className="container">
        <div className="row">
          <div className="col-12">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/clientes/cargar" component={NewClient} />
              <Route exact path="/clientes/:id" component={NewClient} />
              <Route exact path="/clientes" component={Clients} />
              <Redirect from="/" to="/" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes;
