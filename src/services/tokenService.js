import axios from "axios";
import router from "../router.js";

export default class TokenService {
    GetToken (){
        return localStorage.getItem('usertoken');
    }
    GetUserId (){
        return localStorage.getItem('user_id');
    }
    RegisterToken(token, user_id){
        localStorage.clear('usertoken')
        localStorage.clear('user_id')

        localStorage.setItem('usertoken', token);
        localStorage.setItem('user_id', user_id)
        return localStorage.getItem('usertoken', token) + localStorage.getItem('usertoken', token);
    }

    ClearSession(){
        localStorage.clear('usertoken')
        localStorage.clear('user_id')
    }


}
