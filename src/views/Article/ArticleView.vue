<template>
  <div class="container mx-auto bg-gray-100 p-4 border border-gray-300 rounded">
    <header class="text-center border-b border-gray-300 pb-4 mb-6">
      <div v-for="categorie in article['categories']">
        {{categorie.name}}
      </div>
      <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ article.title }}</h1>
      <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ article.content }}</h1>
    </header>
  </div>
</template>

<script>
import ArticleService from "../../services/article.js";
export default {
  props: ["id"],
  data() {
    return {
      article: null
    };
  },
  async mounted() {
    try {
      const articleService = new ArticleService();
      this.article = await articleService.showArticle(this.id);
      console.log(this.article);
    } catch (error) {

    }
  },
};
</script>