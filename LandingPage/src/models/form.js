import { routerRedux } from "dva/router";
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
    price: 0,
    level: 0,
    renter: 10,
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
      const res = yield fetch("http://3.114.141.73:7001/signup", {
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
