<template>
  <v-app id="app">
    <HeaderComponent/>
    <div id="home" style="background-color: rgba(0,0,0,0.74)">
      <v-main class="mt-3"
              style="min-height: 90vh; margin-bottom: 65px">
        <router-view style=""></router-view>
      </v-main>
    </div>
    <FooterComponent/>
  </v-app>
</template>

<script>
import axios from "axios";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },

  async created() {
    const respons = await axios.get('https://leandro-graf.de:8085/auth/user');
    await this.$store.dispatch('user', respons.data);
  },
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style scoped>
#app {
  background-color: #cb1a1a;
  background-image: url("assets/background.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
