import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Demo from "./Demo";
import ArticleList from "./ArticleList/ArticleList"

ReactDOM.render(
  <Router>
    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/">
        <App />
      </Route>
      <Route path="/demo">
        <Demo />
      </Route>
      {/* <Route exact path="/articlelist">
        <ArticleList />
      </Route> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
