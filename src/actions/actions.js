import axios from '../utils/axiosSettings';
import history from "../utils/history";

export const changeR = (rad) => {
    return {
        type: 'CHANGE_R',
        r: rad
    }
};

export const addPoint = (pointX, pointY, pointR, pointRes) => {
    return dispatch => {
        axios.post(`/points`, {
            x: pointX,
            y: pointY,
            r: pointR,
            result: pointRes
        })
            .then(response => {
                dispatch(pointSuccess());
            })
            .catch(error => {
                console.log(error.message);
                if (error.response) {
                    dispatch(pointError(error.response.data));
                } else
                    dispatch(pointError(error.message));
            })
            .finally(() => dispatch(addPointToList(pointX, pointY, pointR, pointRes.toString())))
    };
};

export const getPoints = () => {
    console.log('GET_POINTS');
    return dispatch => {
        axios.get(`/points`, {responseType: 'json'})
            .then(response => {
                dispatch(getPointsSuccess(response.data));
            })
            .catch(error => {
                console.log(error.message);
                if (error.response) {
                    dispatch(pointError(error.response.data));
                } else
                    dispatch(pointError(error.message));
            });
    };
};

export const getUsername = () => {
    console.log('GET_USERNAME');
    return dispatch => {
        axios.get(`/username`)
            .then(response => {
                console.log(response.data);
                dispatch(usernameSuccess(response.data));
            })
            .catch(error => {
                console.log(error.message);
                if (error.response) {
                    dispatch(usernameError(error.response.data));
                } else
                    dispatch(usernameError(error.message));
            });
    };
};

export const logOut = () => {
    console.log('LOG_OUT');
    return dispatch => {
        axios.get(`/logout`)
            .then(response => {
                dispatch(logOutSuccess());
                history.push('/');
            })
            .catch(error => {
                if (error.response) {
                    dispatch(logOutError(error.response.data));
                } else
                    dispatch(logOutError(error.message));
            });
    };
};

export const authenticate = (username, password) => {
    console.log('AUTH_USER');
    let userData = new FormData();
    userData.append('username', username);
    userData.append('password', password);
    return dispatch => {
        axios.post(`/login`, userData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(username));
                history.push('/main');
            })
            .catch(error => {
                if (error.response) {
                    dispatch(authError("Wrong username or password"));
                } else
                    dispatch(authError(error.message));
            });
    };
};

export const register = (username, password) => {
    console.log('REGISTER_USER');
    return dispatch => {
        axios.post(`/registration`, {
            username,
            password
        })
            .then(response => {
                console.log(response.status);
                dispatch(registrationSuccess(response.data));
                history.push('/');
            })
            .catch(error => {
                if (error.response) {
                    dispatch(registrationError(error.response.data));
                } else
                    dispatch(registrationError(error.message));
            })
    };
};

export const authError = (answer) => {
    return {
        type: 'AUTH_ERROR',
        isAuthenticated: false,
        serverError: answer,
    }
};

export const authSuccess = (username) => {
    return {
        type: 'AUTH_SUCCESS',
        isAuthenticated: true,
        username,
        serverError: null
    }
};

export const registrationError = (answer) => {
    return {
        type: 'REGISTRATION_ERROR',
        serverError: answer,
    }
};

export const registrationSuccess = () => {
    return {
        type: 'REGISTRATION_SUCCESS',
        serverError: null
    }
};

export const pointError = (answer) => {
    return {
        type: 'POINT_ERROR',
        serverError: answer,
    }
};

export const pointSuccess = () => {
    return {
        type: 'POINT_SUCCESS',
        serverError: null
    }
};

export const getPointsSuccess = (points) => {
    return {
        type: 'GET_POINTS_SUCCESS',
        points
    }
};

export const addPointToList = (pointX, pointY, pointR, pointRes) => {
    return {
        type: 'ADD_POINT',
        point: {
            x: pointX,
            y: pointY,
            r: pointR,
            result: pointRes
        }
    }
};

export const usernameError = () => {
    return {
        type: 'USERNAME_ERROR',
        isAuthenticated: false,
    }
};

export const usernameSuccess = (username) => {
    return {
        type: 'USERNAME_SUCCESS',
        isAuthenticated: true,
        username,
    }
};

export const logOutError = (answer) => {
    return {
        type: 'LOGOUT_ERROR',
        serverError: answer,
    }
};

export const logOutSuccess = () => {
    return {
        type: 'LOGOUT_SUCCESS',
        username: null,
        serverError: null,
        isAuthenticated: false,
    }
};

export const resetError = () => {
    return {
        type: 'RESET_ERROR',
        serverError: null,
    }
};
