import React, { Component } from "react";
import { browserHistory, Route, IndexRoute, Router } from "react-router";

import Index from "../components/index";
import SignIn from "../components/signin";
import SignOut from "../components/signout";
import UserView from "../components/userview";
import Messages from "../components/message";

const Roots = ({ children }) => <div>{children}</div>;

const RouteConfig = (
  <Router history={browserHistory}>
    <Route path="/" component={Roots}>
      <IndexRoute component={Index} />
      <Route path="signin" component={SignIn} />
      <Route path="signout" component={SignOut} />
      <Route path="user/:loginname" component={UserView} />
      <Route path="my/messages" component={Messages} />
    </Route>
  </Router>
);

export default RouteConfig;
