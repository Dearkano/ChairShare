import { routerRedux } from "dva/router";
import config from "../config";
export default {
  namespace: "form",

  state: {
    type: "",
    companyName: "",
    website: "",
    employeeNumber: "",
    industry: "",
    subIndustry: "",
    city: "",
    state: "",
    country: "",
    price: [0, 0],
    level: 0,
    renter: "",
    name: "",
    position: "",
    email: "",
    phone: "",
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },
  // const currentState= yield select((state) =>state.currentState);
  effects: {
    *update({ payload }, { put }) {
      yield put({ type: "save", payload: payload });
    },
    *submit({}, { select, put }) {
      const data = yield select((state) => state);
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      console.log("----");
      console.log(config);
      const res = yield fetch(`${config.host}/signup`, {
        method: "post",
        headers: headers,
        body: JSON.stringify(data.form),
      });
      if (res.status === 200) {
        yield put(routerRedux.push("/success"));
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
