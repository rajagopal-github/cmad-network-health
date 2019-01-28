import React from 'react';
import DisplaySyslogCounters from './DisplaySyslogCounters.jsx';
// import DisplaySyslog from './DisplaySyslog.jsx';
import SyncInterval from './SyncInterval.jsx';
class NetworkHealth extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <SyncInterval/>
          <DisplaySyslogCounters/> 
        </div>);
    }
}

export default NetworkHealth;