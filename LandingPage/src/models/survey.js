export default {
  namespace: "survey",

  state: {
    form: {},
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },
  // const currentState= yield select((state) =>state.currentState);
  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "save" });
    },
    *updateContact({ payload }, { put }) {
      yield put({ type: "saveContact", payload: payload });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    saveContact(state, action) {
      return { ...state, form: action.payload };
    },
  },
};
