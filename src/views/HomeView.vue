<template>
  <div class="home">
    <HeaderComponent></HeaderComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/HeaderComponent";

export default {
  name: 'HomeView',
  components: {
    HeaderComponent
  }
}
</script>
