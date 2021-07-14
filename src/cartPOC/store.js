import { createStore } from "redux";
import shopReducer from "./cartRedux/shopReducer";

const store = createStore(shopReducer);
export default store;
