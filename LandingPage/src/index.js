import dva from "dva";
import createLoading from "dva-loading";
import createHistory from "history/createBrowserHistory";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactGA from "react-ga";
ReactGA.initialize("UA-193743180-1");
ReactGA.pageview(window.location.pathname + window.location.search);
// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
app.model(require("./models/form").default);
app.model(require("./models/contact").default);
app.model(require("./models/admin").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
