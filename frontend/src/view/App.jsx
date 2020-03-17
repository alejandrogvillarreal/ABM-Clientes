import React from "react";
import { Route } from "react-router-dom";
import Routes from "../routes";

const App = props => {
  return <Route path="/" component={Routes} />
};

export default App;
