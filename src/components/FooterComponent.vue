<template>
  <div class="footer">
    <p class="text-white text-center mt-3" style="font-size: 25px">
      <router-link style="color: #e0e0e0" to="/">Home</router-link>
      |
      <router-link style="color: #e0e0e0" to="/">Impressum</router-link>
    </p>
  </div>
</template>

<script>

export default {
  name: "FooterComponent",
}
</script>

<style scoped>
.footer {
  height: 75px;
  width: 100%;
  background-color: black;
}
</style>