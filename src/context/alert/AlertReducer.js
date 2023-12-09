const alertReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALERT':
            return { type: action.payload.type, data: action.payload.msg };
        case 'REMOVE_ALERT':
            return null;
        default:
            return state;
    }
}

export default alertReducer;