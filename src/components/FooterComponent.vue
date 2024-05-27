<template>
  <div class="bg-white">
    <div class="w-full p-4 md:py-8">
      <div class="flex sm:flex sm:items-center sm:justify-between w-full xl:px-72 lg:px-40 md:px-32 sm:px-16 justify-between">
        <a href="#" class="flex  items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse w-1/2">
           <img class="lg:h-52 md:h-30 sm:h-20 ease-in-out duration-300 btn-ghosthover:shadow-lg " :src="logoMinistere" alt="Logo du Ministère des Solidarités et de la Famille"/>
        </a>

        <ul class="flex bold flex-wrap items-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 w-1/2 justify-end">
          <li>
            <a href="https://handicap.gouv.fr" target="_blank" class="me-6 text-normal leading-10 hover:underline" rel="nofollow noopener" title="handicap.gouv.fr - Ouverture dans une nouvelle fenêtre">handicap.gouv.fr</a>
          </li>
          <li>
            <a href="https://www.legifrance.gouv.fr/" target="_blank" class="me-6 text-normal leading-10 hover:underline" rel="nofollow noopener" title="legifrance.gouv.fr - Ouverture dans une nouvelle fenêtre">legifrance.gouv.fr</a>
          </li>
          <li>
            <a href="https://www.service-public.fr/" target="_blank" class="me-6 text-normal leading-10 hover:underline" rel="nofollow noopener" title="service-public.fr - Ouverture dans une nouvelle fenêtre">service-public.fr</a>
          </li>
          <li>
            <a href="https://www.gouvernement.fr/" target="_blank" class="me-6 text-normal leading-10 hover:underline" rel="nofollow noopener" title="gouvernement.fr - Ouverture dans une nouvelle fenêtre">gouvernement.fr</a>
            <v-icon icon="$vuetify"></v-icon>          </li>
          <li>
            <a href="https://www.data.gouv.fr/fr/" target="_blank" class="me-6 text-normal leading-10 hover:underline" rel="nofollow noopener" title="data.gouv.fr - Ouverture dans une nouvelle fenêtre">data.gouv.fr</a>
            <v-icon icon="$vuetify"></v-icon>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="flex justify-start text-xs light divide-x-2 xl:px-72 lg:px-56 md:px-32 sm:px-16">
        <a href="/mention" class="pl-3 pr-3">Mentions légales</a>
        <a href="#" class="pl-3 pr-3">Données personnelles</a>
        <a href="#" class="pl-3 pr-3">Gestion des cookies</a>
      </div>
    </div>
  </div>
</template>

<script setup>
   import logoMinistere from '../assets/images/logo_ministere.png';
</script>