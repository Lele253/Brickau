<template>
  <v-app id="app">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
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
