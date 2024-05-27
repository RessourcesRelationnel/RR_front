import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import RegisterView from "./views/Auth/RegisterView.vue";
import LoginView from "./views/Auth/LoginView.vue";
import ArticleView from "./views/Article/ArticleView.vue";
import CatalogueView from "./views/CatalogueView.vue";
import LegalMentionView from "./views/LegalMentionView.vue";
import PersonalDataView from "./views/ProfilView.vue";
import ArticleCreateView from "./views/Article/ArticleCreateView.vue";
import DashboardHomeView from "./views/Dashboard/DashboardHomeView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'Home',
      meta: {
        breadcrumb: 'Accueil'
      }
    },
    {
      path:'/login',
      component: LoginView,
      name: 'Login',
      meta: {
        breadcrumb: 'Login'
      }
    },
    {
      path:'/register',
      component: RegisterView,
      name: 'Register',
      meta: {
        breadcrumb: 'Inscription'
      }
    },
    {
      path:'/catalogue',
      component: CatalogueView,
      meta: {
        breadcrumb: 'Category'
      }
    },
    {
      path:'/mention',
      name: 'Mention',
      component: LegalMentionView,
      meta: {
        breadcrumb: 'Mentions Légale'
      }
    },
    {
      path:'/profil',
      name: 'Profil',
      component: PersonalDataView,
      meta: {
        breadcrumb: 'Profil'
      }
    },
    {
      path:'/article/create',
      name: 'articleCreate',
      component: ArticleCreateView,
      meta: {
        breadcrumb: 'Créer un article'
      }
    },
    {
      //path:'/category/article/',
      path:'/article/:id',
      name: 'articleView',
      component: ArticleView,
      props: true,
      meta: {
        breadcrumb: 'Voir un article'
      }
    },
    {
      path:'/dashboard/home',
      name: 'dashboardHome',
      component: DashboardHomeView,
      meta: {
        breadcrumb: 'Dashboard'
      }
    },
  ],
})
