export default function login({ username, password }) {
    return (dispatch, getState) => console.log(`username: ${username}`, `username: ${password}`);
}
