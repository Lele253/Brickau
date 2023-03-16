<template>
  <v-app id="app">
    <HeaderComponent/>
    <div id="home">
      <v-main class="mt-3" style="min-height: 80vh">
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
  background-color: #e0e0e0;
}
</style>
