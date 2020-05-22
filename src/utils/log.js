// export const login = () => {
//     localStorage.setItem(TOKEN_KEY, 'TestLogin');
// }

// export const logout = () => {
//     localStorage.removeItem(TOKEN_KEY);
// }

export const isLogin = () => {
    if (localStorage.getItem('authToken')) {
        return true;
    }
    return false;
}