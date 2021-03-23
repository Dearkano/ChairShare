import React from "react";
import { Router, Route, Switch } from "dva/router";
import Header from "./components/Header";
import IndexPage from "./routes/IndexPage";
import SurveyPage from "./routes/SurveyPage";

function RouterConfig({ history }) {
  return (
    <>
      <Header />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/signup" component={SurveyPage} />
        </Switch>
      </Router>
    </>
  );
}

export default RouterConfig;
