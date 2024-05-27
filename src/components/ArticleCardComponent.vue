<template>
  <router-link :to="'/article/' + article.id" class="max-w-96 bg-white border border-gray-200 rounded-lg shadow m-3">
      <img class="rounded-t-md" v-if="!article.img == null" :src="article.img" alt="" />
      <img class="rounded-t-md" v-else src="../assets/images/placeholderarticle.png" alt="" />
    <div class="p-5">
      <a :href="linkArticle">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 overflow-hidden ">{{ article.title }}</h5>
      </a>
      <div class="flex text-sm text-gray-700 italic flex-nowrap">Publié le {{ formattedDate }}</div>
      <div class="flex text-sm text-gray-700 italic flex-nowrap pb-3">Publié par {{ article.user.pseudo }}</div>
      <p class="clamp mb-3 font-normal text-gray-700 ">{{ article.content }}</p>
      <div class="w-full flex justify-end">
        <a :href="linkArticle" class="inline-flex items-right px-3 py-2 cursor-pointer text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  </router-link>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ArticleCard',
  props: {
    article: Object, // Assurez-vous que le type de la prop est correctement spécifié
  },
  data() {
    return {
      formattedDate: ''
    };
  },
  mounted() {
    // Utilisation de moment.js pour convertir la date
    this.formattedDate = moment(this.article.updated_at).format('DD/MM/YYYY');
  }
};
</script>

<style>
.clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 7;
}
</style>
