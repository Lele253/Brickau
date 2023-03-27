<template>
  <div>
    <v-card>
      <h1 v-for="x in dateien" :key="x" @click="löschpfad = x.path ">{{ x.name }} befindet sich im ordner:
        {{ x.ordner }}</h1>
      {{ löschpfad }}
      <v-btn @click="delteDatei">delete</v-btn>
    </v-card>


    <v-card class="mt-3">
      <v-card-title> User</v-card-title>
      <h1 v-for="x in allUser" :key="x">{{ x }}</h1>
<v-btn @click="delteOrdner('alle1')">order löschen</v-btn>
    </v-card>

  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    this.getAllData(),
        this.getAllUser()
  },
  name: "DateiManager",
  data() {
    return {
      allUser: [],
      dateien: [],
      löschpfad: 'teasdajhd',

    }
  },
  methods: {
    delteDatei() {
      axios.post('http://leandro-graf.de:8080/auth/deleteFile', {message: this.löschpfad})
          .then(response => {
            console.log(response.data);
            this.getAllData()
            return response.data;
          })
          .catch(error => {
            console.error(error);
          });
    },

    delteOrdner(ordnername) {
      axios.post('http://localhost:8080/auth/deleteFolder', {message: ordnername})
          .then(response => {
            console.log(response.data);
            this.getAllData()
            return response.data;
          })
          .catch(error => {
            console.error(error);
          });
    },

    async getAllData() {
      const response = await axios.get("http://leandro-graf.de:8080/auth/alleDateien", {}
      );
      this.dateien = response.data
      console.log(response)
    },
    async getAllUser() {
      const response = await axios.get("http://leandro-graf.de:8080/auth/user/all", {}
      );
      this.allUser = response.data
      console.log(this.allUser)
    },
  }


}
</script>

<style scoped>

</style>
