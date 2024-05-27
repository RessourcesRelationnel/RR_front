<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Barre de navigation latérale -->
    <aside class="bg-gray-800 text-gray-300 w-64 flex-shrink-0">
      <div class="p-4">
        <h2 class="text-xl font-semibold mb-4">Tableau de bord</h2>
        <nav>
          <ul>
            <li class="mb-2"><router-link to="/dashboard" class="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600">Accueil</router-link></li>
            <li class="mb-2"><router-link to="/dashboard/users" class="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-600">Utilisateurs</router-link></li>
            <li class="mb-2"><router-link to="/dashboard/posts" class="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-600">Publications</router-link></li>
            <!-- Ajoutez d'autres liens ici -->
          </ul>
        </nav>
      </div>
    </aside>

    <!-- Contenu principal -->
    <main class="flex-1 p-4">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h1 class="text-2xl font-semibold mb-4">Bienvenue sur votre tableau de bord</h1>
        <p>Ici, vous pouvez gérer les utilisateurs, les publications, etc.</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  // Ajoutez des fonctionnalités spécifiques à votre tableau de bord ici
};
</script>

<style scoped>
/* Styles spécifiques au composant */
/* Vous pouvez ajouter des styles supplémentaires ici */
</style>
