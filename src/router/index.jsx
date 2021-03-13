import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Blog from "@/pages/blog";
import Content from "@/pages/content";

export default () => (
  <HashRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/index-page"></Redirect>}
      ></Route>
      <Route exact path="/index-page" component={Blog}></Route>
      <Route exact path="/blog" component={Blog}></Route>
      <Route exact path="/content" component={Content}></Route>
    </Switch>
  </HashRouter>
);
