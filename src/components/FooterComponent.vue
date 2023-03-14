<template>
  <v-footer padless style="height: 60px; width: 100%; background-color: black;">
    <p class="text-white text-center pt-4" style="font-size: 25px">
      <router-link style="color: #e0e0e0" to="/">Home</router-link>
      |
      <router-link style="color: #e0e0e0" to="/impressum">Impressum</router-link>
    </p>
  </v-footer>
</template>

<script>

export default {
  name: "FooterComponent",
}
</script>

<style scoped>
</style>