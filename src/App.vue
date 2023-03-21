<template>
  <v-app id="app">
    <HeaderComponent/>
    <div id="home" style="background-color: rgba(0,0,0,0.74)">
      <v-main class="mt-3"
              style="min-height: 80vh;">
        <router-view/>
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
    const response = await axios.get('/server/getUser.php');
    await this.$store.dispatch('user', response.data.user);
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
