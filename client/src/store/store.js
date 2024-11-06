import { createStore } from "vuex";
import user from "./user/User";
export default createStore({
  modules: {
    user,
  },
});
