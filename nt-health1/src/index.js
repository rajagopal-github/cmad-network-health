import React from "react";
import ReactDOM from 'react-dom';
import NetworkHealth from "./components/NetworkHealth";
import {fetchCounters,fetchSyslogsBeforeTimestamp, scheduleFetchSyslogCounters,fetchSyncInterval} from "./rest/syslog_ajax";


function loadInitialState() {
    fetchSyncInterval();
    fetchCounters();
    const currentTimeStamp = Date.now();
    // scheduleFetchSyslogCounters();
    // fetchSyslogsBeforeTimestamp(currentTimeStamp);
}

function Test() {
    return <div> <h1>Hello Test</h1></div>;
}
loadInitialState();
ReactDOM.render(<NetworkHealth/>, document.getElementById('root'));