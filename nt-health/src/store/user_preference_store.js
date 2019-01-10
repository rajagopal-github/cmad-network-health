import {createStore} from "redux";
import user_pref_reducer from "../reducers/user_preference_reducer.js";

const user_pref_store = createStore(user_pref_reducer);
export default user_pref_store;