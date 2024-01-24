import { createStore } from "vuex";

import poker from './modules/poker';

export default createStore({
  modules: {
    poker
  }
});