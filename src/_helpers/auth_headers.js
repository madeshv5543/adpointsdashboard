export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    let token = localStorage.getItem('token')

    if(user && token) {
         return { 'x-access-token':  token};
    }else {
        return {};
    }
}