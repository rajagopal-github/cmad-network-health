function syslog_reducer(state = {
    syslog: [], counters: [], total_count: 0
}, action) {
    switch (action.type) {
        case 'fetched_before':
            console.log("reducer syslog before", action.syslog)
            return {
                syslog: action.syslog,
                counters: state.counters,
                total_count: state.total_count
            }
        case 'fetched_after':
            console.log("reducer syslog after", action.syslog)
            return {
                syslog: action.syslog,
                counters: state.counters,
                total_count: state.total_count
            }
        case 'fetched_counters':
            console.log("fetched counters", action.counters);
            let total = 0;
            action.counters.forEach(element => {
                total += element.count;
            });
            console.log("total count" , total);
            return {
                counters: action.counters,
                total_count: total,
                syslog: state.syslog
            }
        default:
            return state;
    }
}

export default syslog_reducer;