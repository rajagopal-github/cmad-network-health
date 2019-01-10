function user_pref_reducer(state = {
    sync_interval: 600
}, action) {
    switch (action.type) {
        case 'fetched_sync_interface':
                console.log("reducer syslog after", action.syslog)
                return {
                     sync_interval: action.sync_interval
                }
        default:
                return state;
    }
}

export default user_pref_reducer;