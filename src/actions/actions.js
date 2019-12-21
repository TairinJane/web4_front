export const changePassword = (password) => (
    {
        type: 'SET_PASSWORD',
        password
    }
);

export const changeUsername = (username) => (
    {
        type: 'SET_USERNAME',
        username
    }
);

export const authenticate = (username, password) => (
    {
        type: 'AUTH_USER',
        username,
        password
    }
);
