<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-200">
    <div class="bg-white p-4 sm:p-8 rounded shadow-md max-w-xl w-full">
      <h1 class="text-2xl font-semibold mb-4">Ajouter un nouvel article</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="title" class="block text-gray-700 font-bold mb-2">Titre de l'article:</label>
          <input type="text" id="title" v-model="article.title" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Titre de l'article" required>
        </div>
        <div class="mb-4">
          <label for="content" class="block text-gray-700 font-bold mb-2">Contenu de l'article:</label>
          <textarea id="content" v-model="article.content" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="6" placeholder="Contenu de l'article" required></textarea>
        </div>
        <div class="mb-4">
          <label for="image" class="block text-gray-700 font-bold mb-2">Image de l'article:</label>
          <input type="file" id="image" @change="handleImageChange" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" accept="image/*" required>
        </div>
        <div class="mb-4">
          <label for="categories" class="block text-gray-700 font-bold mb-2">Catégories:</label>
          <select id="categories" v-model="article.categories" multiple class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="category1">Catégorie 1</option>
            <option value="category2">Catégorie 2</option>
            <option value="category3">Catégorie 3</option>
          </select>
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline w-full sm:w-auto">Ajouter l'article</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: '',
        content: '',
        image: null,
        categories: []
      }
    };
  },
  methods: {
    handleImageChange(event) {
      this.article.image = event.target.files[0];
    },
    submitForm() {
      // Envoyer les données à votre backend ici
      console.log('Article soumis :', this.article);
      // Réinitialiser le formulaire après soumission
      this.article.title = '';
      this.article.content = '';
      this.article.image = null;
      this.article.categories = [];
    }
  }
};
</script>

<style scoped>
/* Styles spécifiques au composant */
input[type="text"],
textarea,
select {
  /* Styles spécifiques aux champs de texte */
}

button {
  /* Styles spécifiques au bouton */
}
</style>
