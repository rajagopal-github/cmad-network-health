import React from 'react';
import user_pref_store from '../store/user_preference_store.js';
import {setSyncInterval} from '../rest/syslog_ajax.js';

export default class SyncInterval extends React.Component {
    constructor(props) {
        super(props);
        user_pref_store.subscribe(() => {
            this.forceUpdate();
            this.render();
        })
        this.onChange = (e) => {
            document.getElementById("interval").value = "" + e.target.value;
            setSyncInterval(e.target.value);
        }
    }
    render() {
        return (
        <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
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

