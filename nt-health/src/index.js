import React from "react";
import ReactDOM from 'react-dom';
import NetworkHealth from "./components/NetworkHealth.jsx";
import {fetchCounters,fetchSyslogsBeforeTimestamp} from "./rest/syslog_ajax.js";


function loadInitialState() {
    fetchCounters();
    const currentTimeStamp = Date.now();
    fetchSyslogsBeforeTimestamp(currentTimeStamp);
}

function Test() {
    return <div> <h1>Hello Test</h1></div>;
}
loadInitialState();
ReactDOM.render(<NetworkHealth/>, document.getElementById('root'));