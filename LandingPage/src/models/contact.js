import { routerRedux } from "dva/router";
export default {
  namespace: "contact",

  state: {
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
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
      console.log("====");
      const data = yield select((state) => state);
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const res = yield fetch("http://3.114.141.73/contact", {
        method: "post",
        headers: headers,
        body: JSON.stringify(data.contact),
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
