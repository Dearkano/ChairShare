import React from "react";
import { Router, Route, Switch } from "dva/router";
import Header from "./components/Header";
import IndexPage from "./routes/IndexPage";
import SurveyPage from "./routes/SurveyPage";
import SuccessPage from "./routes/SurveyPage/success";
import ContactPage from "./routes/ContactPage";
import PartnerPage from "./routes/PartnerPage";
import AdminPage from "./routes/AdminPage";
import InformationPage from "./routes/InformationPage";
import MatchingPage from "./routes/MatchingPage";
import TestPage from "./routes/InformationPage/page5";
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
          <Route path="/admin" component={AdminPage} />
          <Route path="/information" component={InformationPage} />
          <Route path="/matching" component={MatchingPage} />
          <Route path="/test" component={TestPage} />
        </Switch>
      </Router>
    </>
  );
}

export default RouterConfig;
