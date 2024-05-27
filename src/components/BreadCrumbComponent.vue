<template>
  <nav class="flex absolute left-32 top-64" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li v-for="(route, index) in $route.matched" :key="index" :aria-current="index === $route.matched.length - 1 ? 'page' : null">
        <div class="flex items-center">
          <svg v-if="index > 0" class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <router-link :to="route.path" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{{ route.meta.breadcrumb }}</router-link>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  // La propriété $route est automatiquement mise à jour par Vue Router pour refléter la route actuelle
};
</script>
