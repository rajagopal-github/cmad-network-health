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

export function setSyncInterval(interval) {
    var user_pref = { 'user' : 'admin','property' : 'interval','value':interval};
    $.ajax({
        url: "http://localhost:8080/network/v1/health/user-preference",
        type: "PUT",
        crossDomain: true,
        data:JSON.stringify(user_pref),
        dataType: "json",
        success: function (data) {
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
export function scheduleFetchSyslogCounters(delay){
    let timer = setTimeout( function myTimer() {
        console.log("Creating timer");
        fetchCounters();
        timer = setTimeout(myTimer,delay);
    },16000);

    setTimeout(() => {
        console.log("Cancelling timer");
        clearTimeout(timer)
    },60000);
}



