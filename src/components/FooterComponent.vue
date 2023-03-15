<template>
  <v-footer bottom padless style="height: 4rem; width: 100%; background-color: black;">
    <v-row
        align="baseline"
        justify="space-between"
        no-gutters
        style="font-size: 23px"
    >
      <v-col></v-col>
      <v-col style="text-align: center">
        <router-link class="mx-2" style="color: #e0e0e0" to="/"><strong>Home</strong></router-link>
        <span class="mx-2" style="color: #e0e0e0"><strong>|</strong></span>
        <router-link class="mx-2" style="color: #e0e0e0" to="/impressum"><strong>Impressum</strong></router-link>
      </v-col>
      <v-col class="text-end" style="color: #e0e0e0">
        {{ new Date().getFullYear() }} — <strong>Brickau.de</strong>
      </v-col>
    </v-row>

  </v-footer>
</template>

<script>

export default {
  name: "FooterComponent",
}
</script>

<style scoped>
</style>