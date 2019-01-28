import syslog_store from '../store/syslog_event_store.js';
import user_pref_store from '../store/user_preference_store.js';

const $ = window.$;
export function fetchSyslogsBeforeTimestamp(timestamp) {
    console.log("Getting the syslog data");
        $.ajax({
            url: "http://localhost:8080/network/v1/health/events/syslog?offset=" + timestamp,
            type: "GET",
            crossDomain: true,
            // data: JSON.stringify(somejson),
            dataType: "json",
            success: function (data) {
                console.log("ajax syslog data",data);
                syslog_store.dispatch({
                    type: 'fetched_before',
                    syslog:data
                });
            },
            error: function (xhr, status) {
                alert("error");
            }
        });
};


export function fetchSyslogsAfterTimestamp(timestamp) {
    console.log("Getting the syslog data");
    var url = "http://localhost:8080/network/v1/health/events/syslog?offset=" + timestamp  ; //+ "&type=after";
    return $.getJSON(url,function(data){
            syslog_store.dispatch({
                type: 'fetched_after',
                syslog: data
            });
        });
};

export function fetchCounters() {
    console.log("Getting the counters");

    $.ajax({ 
        url: "http://localhost:8080/network/v1/health/events/syslog/counters",
        type: "GET",
        crossDomain: true,
        // data: JSON.stringify(somejson),
        dataType: "json",
        success: function (data) {
            syslog_store.dispatch({
                type: 'fetched_counters',
                counters:data
            });
        },
        error: function (xhr, status) {
            alert("error");
        }
    });
}

export function fetchSyncInterval() {
    console.log("Getting the sync interval");

    $.ajax({ 
        url: "http://localhost:8080/network/v1/health/events/user-preference?property=interval",
        type: "GET",
        crossDomain: true,
        // data: JSON.stringify(somejson),
        dataType: "json",
        success: function (data) {
            console.log("response of fetchSyncInterval",data);
            user_pref_store.dispatch({
                type: 'fetched_sync_interval',
                sync_interval:data
            });
        },
        error: function (xhr, status) {
            alert("error");
        }
    });
}
export function setSyncInterval(interval) {
    // var user_pref = { 'user' : 'admin','property' : 'interval','value':interval.toString()};
    alert(JSON.stringify(interval));
    var method = "PUT";
    if ( interval.id === undefined) {
        method = "POST";
    }
    $.ajax({
        url: "http://localhost:8080/network/v1/health/events/user-preference",
        type: method,
        crossDomain: true,
        data:JSON.stringify(interval),
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
            console.log("Set of interval success" + data);
            user_pref_store.dispatch({
                type: 'fetched_sync_interval',
                sync_interval:data
            });
        },
        error: function (xhr, status) {
            alert("error" + xhr.status);
            console.log("xhr value is " + xhr);
            console.log("status " + status);

        }
    });
}
let timer ;
export function scheduleFetchSyslogCounters(delay){
    timer = setTimeout( function myTimer() {
        console.log("Creating timer",delay);
        fetchCounters();
        timer = setTimeout(myTimer,delay*1000);
    },delay*1000);


}
export function rescheduleTimer(delay) {
    if ( timer != null ) {
        console.log("clearing timeout");
        clearTimeout(timer);
    }
    scheduleFetchSyslogCounters(delay);


}



