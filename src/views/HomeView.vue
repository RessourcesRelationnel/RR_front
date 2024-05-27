<template>
  <div class="w-full flex flex-col items-center gap-y-4 xl:px-52 lg:px-28 md:px-14 sm:px-6">
    <h1 class="text-3xl font-semibold">Ressources Relationnelles</h1>

    <div class="bg-white p-4 rounded-lg">
      <h1 class="text-2xl font-medium text-gray-800">Les dernières ressources disponibles</h1>
    </div>
      <!-- Afficher le spinner si les articles sont en cours de chargement -->
      <div v-if="loading">
        <p>Chargement en cours...</p>
      </div>
      <!-- Afficher les articles s'ils sont chargés -->
      <div class="flex  " v-else>
        <div class="flex flex-row flex-wrap justify-center" v-if="articles.length > 0">
          <ArticleCardComponent v-for="article in articles" :key="article.id" :article="article" />
        </div>
        <div v-else>
          <p>Aucune ressource disponible pour le moment.</p>
        </div>
      </div>


  </div>
</template>
<script setup>
import ArticleService from "../services/article.js";
import ArticleCardComponent from "../components/ArticleCardComponent.vue";

import { ref, onMounted } from 'vue';

// Définir une référence réactive pour stocker les articles
let articles = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const articleService = new ArticleService();
    const response = await articleService.getAllArticles();
    // Mettre à jour les articles avec la réponse de la requête
    articles = response.data.success;
    loading.value = false;
    console.log(articles);
  } catch (error) {
    console.error('Erreur lors de la requête GET:', error);
    // Indiquer que le chargement est terminé même en cas d'erreur
    loading.value = false;
  }
});
</script>
