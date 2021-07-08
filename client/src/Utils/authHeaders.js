
function getAuthHeader(){
    const tokenString = JSON.parse(localStorage.getItem('token'));
    const options = { headers: {'Authorization': `Bearer ${tokenString.token}`} };
    return options;
}

export default getAuthHeader;