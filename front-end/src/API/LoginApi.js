import API from "./Api";
import FormData from 'form-data';


const login = (username, password) => {
    var body = new FormData();
    body.append('username', username);
    body.append('password', password);
    
    return API.post("/login", body);
}

const api = {login};
export default api;