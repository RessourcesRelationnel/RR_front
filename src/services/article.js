import axios from "axios";

export default class ArticleService {
    getAllArticles() {
        return axios.get('/api/articles/index')
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log(err);
                throw err; // rejet de la promesse pour gérer les erreurs dans les composants Vue
            });
    }

    //A continuer
    showArticle(article) {
        return axios.get(`/api/article/${article}`)
            .then((result) => {
                return result.data;
            })
            .catch((err) => {
                console.log(err);
                throw err; // rejet de la promesse pour gérer les erreurs dans les composants Vue
            });
    }
}