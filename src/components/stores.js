import { createStore } from "redux";
const initalStatus = {
    councer: 0,
}

const reduce = (state = initalStatus, action) => {
    switch (action.type) {
        case 'deposit':
            return { ...state, councer: state.councer + 1 }
            break;
        case 'withdraw':
            return { ...state, councer: state.councer - 1 }
        default:
            return state;
    }
}

const store = createStore(reduce)
export default store;