<template>
  <div class="flex justify-center p-8">
    <h1 class="bold text-2xl -z-30">TITRE CATEGORY</h1>
  </div>
  <div class="flex flex-wrap justify-center px-8">
    <div v-for="(article, index) in articles" :key="index">
      <ArticleCardComponent :article="article"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ArticleCardComponent from "../components/ArticleCardComponent.vue";

export default {
  components: {
    ArticleCardComponent
  },

  data() {
    return {
      articles: []
    };
  },
  // http://127.0.0.1:8000/api/articles/index

  mounted() {
    // Charger les articles depuis le serveur dès que le composant est monté
    axios.get('http://127.0.0.1:8000/api/articles/index')
        .then(response => {
          // Mettre à jour la liste des articles avec les données du serveur
          this.articles = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des articles :', error);
        });
  }
};
</script>