import React from 'react';
import user_pref_store from '../store/user_preference_store.js';
import {setSyncInterval,rescheduleTimer} from '../rest/syslog_ajax.js';

export default class SyncInterval extends React.Component {
    constructor(props) {
        super(props);
        user_pref_store.subscribe(() => {
            // if ( user_pref_store.sync_interval != undefined ) {
            //     this.state.interval = user_pref_store.sync_interval.interval;
            // }
            var interval = user_pref_store.getState().sync_interval.value;
            interval = interval/60;
            console.log("SyncInterval in subscribe" , interval);
            const domValue = document.getElementById("interval").value;
            if ( domValue != "" + interval + " Min") {
                document.getElementById("interval").value = "" + interval + " Min";
                this.forceUpdate();
                rescheduleTimer(interval*60);
            }
            //this.render();
        })
        this.onChange = (e) => {            
            var interval = parseInt((e.target.value).replace("Min","")) * 60 ;
            console.log("store value " , user_pref_store.getState());
            var interval_json = user_pref_store.getState().sync_interval;
            console.log("user_pref value " , interval_json);
            if ( interval_json === undefined ) {
                interval_json = {value : this.state.interval, user: "admin",property: "interval"};
            }
            interval_json.value = interval;
            setSyncInterval(interval_json);
        }
    }
    render() {
        console.log("in render user_pref" + user_pref_store.getState().sync_interval.value);
        return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6">
                <form>
                    <label>Interval </label>
                    <select id="interval" onChange={this.onChange}>
                        <option>1 Min</option>
                        <option>2 Min</option>
                        <option>3 Min</option>
                        <option>4 Min</option>
                        <option selected>5 Min</option>
                        <option>10 Min</option>
                        <option>15 Min</option>
                    </select>
                </form>
            </div>
            </div>
            </div>);
    }
}

