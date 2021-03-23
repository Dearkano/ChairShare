import dva from "dva";
import createLoading from "dva-loading";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
app.model(require("./models/form").default);
app.model(require("./models/contact").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
