export default function userReducer(state = {}, action) {
    switch (action.type) {
        case 'AUTH_USER':
            console.log(action.type);
            return {
                ...state,
                username: action.username,
            };
        case 'AUTH_ERROR':
            console.log(action.type);
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
                serverSuccess: action.serverSuccess,
                serverError: action.serverError
            };
        case 'AUTH_SUCCESS':
            console.log(action.type);
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
                username: action.username,
                serverSuccess: action.serverSuccess,
                serverError: action.serverError
            };
        case 'REGISTRATION_SUCCESS':
        case 'REGISTRATION_ERROR':
            console.log(action.type);
            return {
                ...state,
                serverSuccess: action.serverSuccess,
                serverError: action.serverError
            };
        case 'USERNAME_ERROR':
            console.log(action.type);
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            };
        case 'USERNAME_SUCCESS':
            console.log(action.type);
            return {
                ...state,
                username: action.username,
                isAuthenticated: action.isAuthenticated
            };
        case 'LOGOUT_SUCCESS':
            console.log(action.type);
            return {
                ...state,
                username: action.username,
                serverError: action.serverError,
                isAuthenticated: action.isAuthenticated,
            };
        case 'LOGOUT_ERROR':
            console.log(action.type);
            return {
                ...state,
                serverError: action.serverError,
            };
        default:
            return state;
    }
}