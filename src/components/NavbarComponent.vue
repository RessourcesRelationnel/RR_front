<script setup>
import DropDownComponent from "./DropDownComponent.vue";
import BreadCrumb from "./BreadCrumbComponent.vue";
</script>

<template>
<nav>
<div class="relative py-4 flex justify-between items-center bg-white border-b-2 xl:px-72 lg:px-40 md:px-32 sm:px-16">
  <a class="text-3xl font-bold leading-none" href="/">
      <img class="h-44 ease-in-out duration-300 btn-ghost  " :src="logoMinistere" alt="Logo du Ministère des Solidarités et de la Famille"/>
  </a>
  <div class="lg:hidden">
    <button class="navbar-burger flex items-center text-blue-600 p-3">
      <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Mobile menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </button>
  </div>
  <div class="lg:flex flex-col hidden max-w-l w-1/3 xl:w-1/2 lg:w-2/3">

  <div v-if=isAuthenticated() class="text-right mb-6 flex">
    <router-link to="/login" class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-100 hover:bg-gray-300 text-sm text-gray-900 font-semibold rounded-xl transition duration-200">Connexion</router-link>
    <router-link to="/register" class="hidden lg:inline-block py-2 px-6  bg-blue-600 hover:bg-blue-300 text-sm text-white font-semibold rounded-xl transition duration-200">S'inscrire</router-link>
  </div>
    <div v-else class="text-right mb-6 flex">
      <router-link to="/profil" class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-blue-600 hover:bg-blue-300 text-sm text-gray-900 font-semibold rounded-xl transition duration-200">Profil</router-link>
      <div v-bind=logout() class="hidden lg:inline-block py-2 px-6  bg-gray-100 hover:bg-gray-200 text-sm text-red-500 font-semibold rounded-xl transition duration-200">Déconnection</div>
    </div>

    <form class="lg:block hidden mx-auto w-full ">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
    </form>

  </div>
</div>

<ul class="hidden whitespace-nowrap bold relative pl-10 pt-10 xl:px-72 lg:px-40 md:px-32 sm:px-16 left-1/2 transform border-b-2 -translate-y-1/2 -translate-x-1/2 text- lg:flex lg:items-center lg:w-auto lg:space-x-6">
  <template v-for="(idCategory, index) in groupedInfos" :key="index">
    <DropDownComponent :infos="idCategory"></DropDownComponent>
  </template>
</ul>

<div class="navbar-menu relative z-50 hidden">
  <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
  <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
    <div class="flex items-center mb-8">
      <a class="mr-auto text-3xl font-bold leading-none" href="#">
        <img class="h-20 ease-in-out duration-300 btn-ghost  " :src="logoMinistere" alt="Logo du Ministère des Solidarités et de la Famille"/>
      </a>
      <button class="navbar-close">
        <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div>
      <ul>
        <li class="mb-1">
        </li>
        <li class="mb-1">
          <router-link class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"  to="/login">Connexion</router-link>
        </li>
        <li class="mb-1">
          <router-link class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"  to="/register">Inscription</router-link>
        </li>
        <li class="mb-1">
          <router-link class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"  to="/catalogue">Catalogue</router-link>
        </li>
        <li class="mb-1">
          <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
        </li>
      </ul>
    </div>
    <div class="mt-auto">
      <div class="pt-6">
        <a class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
        <a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
      </div>
    </div>
  </nav>
</div>
  <!--<BreadCrumb ></BreadCrumb> A décommenter plus tard, non fini-->
</nav>
</template>

<script>
import logoMinistere from '../assets/images/logo_ministere.png';
import {defineComponent} from "vue";
import AuthService from "../services/auth";
import router from "../router.js";

export default defineComponent({
  data() {
    return {
      infos: [
        { idCategory: 'test 1', info: [{"name":"Jean", "CategoryName": "test 1"}] },

      ]
    };
  },
  computed: {
    logoMinistere() {
      return logoMinistere
    },
    groupedInfos() {
      const grouped = {};
      this.infos.forEach((item) => {
        if (!grouped[item.idCategory]) {
          grouped[item.idCategory] = [];
        }
        grouped[item.idCategory].push(item.info);
      });
      return Object.values(grouped);
    }
  },
  methods: {
    async logout() {
      let authService = new AuthService();
      await authService.logout();
    },
    isAuthenticated() {
      let authService = new AuthService();
      var tokens = JSON.parse(authService.checkConnexion());
      return tokens;
    }
}
})

// Burger menus
document.addEventListener('DOMContentLoaded', function() {
  // open
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener('click', function() {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function() {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener('click', function() {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');
        }
      });
    }
  }
});
</script>