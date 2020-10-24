import actions from './userActions';

const defaultState = {};
export function userReducer(state = defaultState, action: any) {
    switch (action.type) {
        case actions.CONNECT:
            return Object.assign({}, state, action);
        case actions.DISCONNECT:
            return Object.assign({}, state, action);

        default:
            return state;
    }
}
