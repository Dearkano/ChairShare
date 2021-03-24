import { routerRedux } from "dva/router";
import config from "../config";
export default {
  namespace: "admin",

  state: {
    users: [],
    contacts: [],
    partners: [],
    isLogin: false,
  },

  effects: {
    *getUsers({ payload }, { put }) {
      const res = yield fetch(`${config.host}/getUsers`);
      const data = yield res.json();
      yield put({ type: "saveUsers", payload: data });
    },
    *getContacts({ payload }, { put }) {
      const res = yield fetch(`${config.host}/getContacts`);
      const data = yield res.json();
      yield put({ type: "saveContacts", payload: data });
    },
    *getPartners({ payload }, { put }) {
      const res = yield fetch(`${config.host}/getPartners`);
      const data = yield res.json();
      yield put({ type: "savePartners", payload: data });
    },
    *login({ payload }, { put }) {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const res = yield fetch(`${config.host}/login`, {
        method: "post",
        headers: headers,
        body: JSON.stringify({ pwd: payload }),
      });
      if (res.status === 200) yield put({ type: "changeLogin", payload: true });
    },
  },

  reducers: {
    saveUsers(state, action) {
      return { ...state, users: action.payload };
    },
    savePartners(state, action) {
      return { ...state, partners: action.payload };
    },
    saveContacts(state, action) {
      return { ...state, contacts: action.payload };
    },
    changeLogin(state, action) {
      return { ...state, isLogin: action.payload };
    },
  },
};
