import { routerRedux } from "dva/router";
import config from "../config";
export default {
  namespace: "matching",

  state: {
    type: "",
    name: "",
    companyName: "",
    logo: "",
    address: "",
    website: "",
    employeeNumber: "",
    industry: "",
    description: "",
    officeCulture: "",
    preferredIndustry: "",
    leaseLength: "",
    moveinDate: "",
    officeType: "",
    officeStyle: "",
    rules: "",
    renters: "",
    price: 0,
    privacyLevel: 0,
    photos: [],
  },

  effects: {
    *getMatching({ payload }, { put }) {
      const res = yield fetch(`${config.host}/getMatching?id=${payload.id}`);
      const data = yield res.json();
      yield put({ type: "save", payload: data.Item });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
