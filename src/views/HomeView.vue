<template>
  <div class="home">
    <HeaderComponent></HeaderComponent>
    <v-row style="height: 800px;width: 100vw; background-color: white"></v-row>

    <v-row style="height: 600px; width: 100vw">
      <v-col cols="4" style="background-color: black" xs="12"></v-col>
      <v-col cols="4" style="background-color: aquamarine" xs="12"></v-col>
      <v-col cols="4" style="background-color: aqua" xs="12"></v-col>
    </v-row>

    <v-row style="height: 800px;width: 100vw; background-color: white"></v-row>

    <v-row style="height: 600px">
      <v-col cols="6">
        <v-img src="../assets/logo.png" style="max-height: 600px"/>
      </v-col>
      <v-col cols="6" style="background-color: aqua"></v-col>
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
