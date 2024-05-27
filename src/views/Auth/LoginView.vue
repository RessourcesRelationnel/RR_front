<template>
  <div class="flex flex-col">
    <section class=" flex flex-col bg-white w-1/2 m-auto ">
      <article class=" flex flex-col justify-center items-center gap-y-5">
        <h3 class="colorText text-center text-2xl sm:text-3xl"> Se connecter </h3>

        <form class="flex flex-col gap-y-5" v-on:submit.prevent="login">
          <input id="email" v-model="email" name="email" type="email" placeholder=" E-mail" class="flex  border border-black px-4 py-1 rounded">
          <input id="password" v-model="password" name="password" type="password" placeholder=" Mot de passe" class="flex border border-black px-4 py-1 rounded">

          <div class="flex justify-center gap-x-4 items-center">
            <label class="colorText ">Rester connecté</label>
              <input type="checkbox">
            </div>

          <div class="flex justify-center">
            <button class="colorText  text-xl border border-black p-1 rounded"> Valider </button>
          </div>
        </form>

      </article>
    </section>
    <div class="flex justify-center p-5">
      <a id="leBouton" href="#" @click.prevent="loginWithFranceConnect">
        <img src="../../assets/images/logo-fc.svg" height="60" width="200" alt="S'identifier avec FranceConnect"></a>
    </div>

  </div>
</template>

<script>
import AuthService from "../../services/auth.js";
// import('../assets/login.css');
export default {
  props: ['lang_fr'],
  data()
  {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        const authService = new AuthService();
        const result = await authService.login(this.email, this.password);
        this.$router.push('/');
        window.location.reload();
      } catch (error) {
      }
    },
    loginWithFranceConnect() {
    }
  },

};

// mail: nathan@gmail.com
// pass: nathan123
</script>


