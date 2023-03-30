<template>
  <v-div class="footer " padless>
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-2" cols="12">
        <router-link class="mx-2 text-black" to="/"><strong>Home</strong></router-link>
        <span class="mx-2"><strong>|</strong></span>
        <router-link class="mx-2 text-black" to="/impressum"><strong>Impressum</strong></router-link>
      </v-col>
      <v-col class="text-center mt-0 " style="max-height: 100%" cols="12">
        {{ new Date().getFullYear() }} — <strong>Brickau.de</strong>
      </v-col>
    </v-row>
  </v-div>
</template>

<script>


export default {
  name: "FooterComponent",
  components: {}
}
</script>

<style scoped>
.footer {
  position: fixed;
  background-color: lightskyblue;
  height: 60px;
  width: 100%;
  bottom: 0px;
}
</style>
