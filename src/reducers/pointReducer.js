export default function pointReducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_POINT':
            console.log(action.type);
            return {
                ...state,
                points: [action.point, ...state.points]
            };
        case 'CHANGE_R':
            console.log(action.type, action.r);
            return {
                ...state,
                r: action.r
            };
        case 'POINT_SUCCESS':
        case 'POINT_ERROR':
            console.log(action.type);
            return {
                ...state,
                serverSuccess: action.serverSuccess,
                serverError: action.serverError
            };
        case 'GET_POINTS_SUCCESS':
            console.log(action.type);
            action.points = action.points.map((point) => {
                point.result = point.result.toString();
                return point;
            });
            return {
                ...state,
                points: [...action.points, ...state.points]
            };
        default:
            return state;
    }
}