<template>
  <v-footer class="bg-black h-25" padless>
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" cols="12">
        <router-link class="mx-2" style="color: #e0e0e0" to="/"><strong>Home</strong></router-link>
        <span class="mx-2" style="color: #e0e0e0"><strong>|</strong></span>
        <router-link class="mx-2" style="color: #e0e0e0" to="/impressum"><strong>Impressum</strong></router-link>
      </v-col>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Brickau.de</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>


export default {
  name: "FooterComponent",
  components: {}
}
</script>

<style scoped>
</style>