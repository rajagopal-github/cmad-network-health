function user_pref_reducer(state = {
    sync_interval: {'value':600, 'user' : 'admin','property' : 'interval'}
}, action) {
    switch (action.type) {
        case 'fetched_sync_interval':
                console.log("sush reducer syslog after", action.sync_interval)
                return {
                     sync_interval: action.sync_interval
                }
        default:
                return state;
    }
}

export default user_pref_reducer;