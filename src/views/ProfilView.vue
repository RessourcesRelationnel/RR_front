<template>
  <div class="flex justify-center items-center mt-12">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xl">
      <h1 class="text-3xl font-bold mb-8 text-center">Profil Utilisateur</h1>
      <div class="mb-4">
        <label for="username" class="block text-gray-700 font-bold mb-2">Nom d'utilisateur:</label>
        <input type="text" id="username" v-model="user.username" readonly class="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-6">
        <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
        <input type="email" id="email" v-model="user.email" readonly class="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="lastname" class="block text-gray-700 font-bold mb-2">Nom:</label>
        <input type="text" id="lastname" v-model="user.lastname" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="firstname" class="block text-gray-700 font-bold mb-2">Prénom:</label>
        <input type="text" id="firstname" v-model="user.firstname" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="age" class="block text-gray-700 font-bold mb-2">Date de naissance:</label>
        <input type="date" id="age" v-model="user.age" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>

      <!-- Ajoutez d'autres champs de profil ici -->
      <div class="text-center">
        <button @click="saveChanges" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">Enregistrer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: 'Utilisateur',
        lastname: '',
        firstname: '',
        age: '',
        email: 'utilisateur@example.com',
        // Autres champs de profil
      }
    };
  },
  methods: {
    saveChanges() {
      // Logique pour enregistrer les modifications du profil
      console.log('Modifications enregistrées', this.user);
    }
  }
};
</script>

<style scoped>
/* Styles spécifiques au composant */
input[type="text"],
input[type="email"],
input[type="date"] {
  /* Styles spécifiques aux champs de texte */
}
button {
  /* Styles spécifiques au bouton */
}
</style>
