/**
 * get user id by username in servrer
 * @param {String} username 
 * @returns {Number} id
 */
export const getUserId = async (username) => {
    const res = await fetch("http://localhost:8000/users/");
    const users = await res.json();
    const userId = users.find(user => user.username === username)?.id;
    return userId;
}