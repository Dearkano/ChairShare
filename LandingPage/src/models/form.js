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
    officeCulture: "",
    description: "",
    preference: "",
    address: "",
    zip: "",
    squarefootage: 1200,
    leaseLength: "6-12 months",
    moveinDate: "",
    officeType: "",
    amenties: [],
    rules: "",
    photos: [],
    officeStyles: "",
    signupTime: "",
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
    *submit({ onComplete }, { select, put }) {
      const data = yield select((state) => state);
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const res = yield fetch(`${config.host}/signup`, {
        method: "post",
        headers: headers,
        body: JSON.stringify(data.form),
      });
      if (res.status === 200 && onComplete) {
        onComplete();
      }
    },
    *upload({ payload, onComplete }, { put }) {
      const promises = [];
      console.log(payload);
      const fileList = [];
      for (const id in payload) {
        const file = payload[id];
        const res1 = yield fetch(`${config.host}/presign?type=${file.type}`);
        const preSign = yield res1.json();
        fileList.push(preSign.fields.key);
        const headers = new Headers();
        headers.append("Content-Type", "multipart/form-data");
        const formData = new FormData();
        Object.keys(preSign.fields).forEach((key) => {
          formData.append(key, preSign.fields[key]);
        });
        formData.append("file", file);
        promises.push(
          fetch(preSign.url, {
            method: "POST",
            body: formData,
          })
        );
      }
      yield Promise.all(promises);
      yield put({ type: "save", payload: { photos: fileList } });
      onComplete();
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
