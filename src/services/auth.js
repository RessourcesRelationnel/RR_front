import axios from "axios";
import router from "../router.js";
import TokenService from "./tokenService.js";

export default class AuthService {
    tokenservice = new TokenService();
    login(email, password) {
        return axios.post('/api/login', {
            email: email,
            password: password,
        })
            .then((result) => {
                console.log(result.data.user)

                this.tokenservice.RegisterToken(result.data.token, result.data.user.id)

                router.push({name: 'Home'});
                return result.data;
            })
            .catch((err) => {
                console.log(err);
                throw err; // rejet de la promesse pour gérer les erreurs dans les composants Vue
            });
    }

    //A continuer
    register(email, password, pseudo) {
        return axios.post('/api/register', {
            email: email,
            password: password,
        })
            .then((result) => {
                this.tokenservice.RegisterToken(result.data.token, result.data.user.id)
                router.push({name: 'home'});
                return result.data; // si vous souhaitez renvoyer des données supplémentaires
            })
            .catch((err) => {
                console.log(err);
                throw err; // rejet de la promesse pour gérer les erreurs dans les composants Vue
            });
    }

    logout() {
       this.tokenservice.ClearSession();
    }

    checkConnexion() {
        if (this.tokenservice.GetToken()){
            if(this.tokenservice.GetUserId()){
                return false;
            }
            return true;
        }
        return true;
    }

    getUser() {
        return axios.get('/api/getUser')
            .then((result) => {
                return result.data;
            })
            .catch((err) => {
                console.log(err);
                throw err;
            });
    }

}
