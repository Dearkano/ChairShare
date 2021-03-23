import React from "react";
import { Router, Route, Switch } from "dva/router";
import Header from "./components/Header";
import IndexPage from "./routes/IndexPage";
import SurveyPage from "./routes/SurveyPage";
import SuccessPage from "./routes/SurveyPage/success";
import ContactPage from "./routes/ContactPage";
import PartnerPage from "./routes/PartnerPage";

function RouterConfig({ history }) {
  return (
    <>
      <Header />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/signup" component={SurveyPage} />
          <Route path="/success" component={SuccessPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/partners" component={PartnerPage} />
        </Switch>
      </Router>
    </>
  );
}

export default RouterConfig;
