import {createStore} from "redux";
import syslog_reducer from "../reducers/syslog_reducer.js";

const syslog_store = createStore(syslog_reducer);
export default syslog_store;