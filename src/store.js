import { createStore } from "vuex";

const store = createStore({
    state () {
      return {
        authKey: null
      }
    },
    actions: {
      loadAuthKey(state) {
        state.authKey = localStorage.getItem("authKey");
      }
    }
});

export default store;