import React from 'react';
import syslog_event_store from '../store/syslog_event_store.js';

class DisplaySyslogCounters extends React.Component {
    constructor(props) {
        super(props);
        syslog_event_store.subscribe(() => {
            this.forceUpdate();
            this.render();
        })

    }
    render() {
        var counterList = syslog_event_store.getState().counters;
        console.log("CounterList ",counterList);
        var divList = null;
        if( counterList !== undefined && counterList !== null && counterList.length > 0 ) {
            console.log("Returning the counters");
            console.log("counterlist[0]",counterList[0]);
            // console.log("type",counterList[0].type);

            return (<div class="container-fluid">
            <div class="row counterContainer">
            <div class="col-lg-4 text-center" id="errorDiv">
                <div class="counterLabel"><label id="errorLabel">{counterList[2].type}</label></div>
                <div class="counterBoxError" id="counterBoxError"><label id="2">{counterList[2].count}</label></div>

            </div>
            <div class="col-lg-4 text-center">
                <div class="counterLabel"><label>{counterList[1].type}</label></div>
                <div class="counterBoxWarning"><label>{counterList[1].count}</label></div>

            </div>
            <div class="col-lg-4 text-center">
                <div class="counterLabel"><label>{counterList[0].type}</label></div>
                <div class="counterBoxInfo"><label>{counterList[0].count}</label></div>

            </div>

        </div> </div>);
            // return ( <div><table>
            // <tr>
            //     <th>{counterList[0].type}</th>
            //     <th>{counterList[1].type}</th>
            //     <th>{counterList[2].type}</th>
            // </tr>
            // <tr>
            //     <td>{counterList[0].count}</td>
            //     <td>{counterList[1].count}</td>
            //     <td>{counterList[2].count}</td>
            // </tr>
            // </table> </div>);
        }

        return <div/>;
    }
}

export default DisplaySyslogCounters;