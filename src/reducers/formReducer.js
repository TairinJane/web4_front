export default function formReducer(state = {}, action) {
    switch (action.type) {
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.username
            };
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.password
            };
        case 'AUTH_USER':
            console.log('AUTH_USER');
            console.log(state);
            return Object.assign({}, state, {
                username: action.username,
                password: action.password,
                isAuthenticated: true
            });
        default:
            return state;
    }
}