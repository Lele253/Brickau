<template>
  <div class="home">
    <HeaderComponent></HeaderComponent>
    <v-row style="height: 600px;width: 100%; background-color: white">
    </v-row>
<v-row style="height: 400px; width: 100%" >
  <v-col cols="4" style="background-color: black"></v-col>
  <v-col cols="4" style="background-color: aquamarine"></v-col>
  <v-col cols="4" style="background-color: aqua"></v-col>
</v-row>

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
