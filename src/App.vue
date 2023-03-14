<template>
  <v-app id="app">
    <div id="home">
      <HeaderComponent/>
      <v-main>
        <router-view/>
      </v-main>
      <FooterComponent/>
    </div>
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
