<template>
  <div>
      <h1 @click="löschpfad = x.path " v-for="x in dateien" :key="x" class="text-white">{{x.name}}  befindet sich im ordner:  {{x.ordner}}</h1>
    {{löschpfad}}
  </div>
  <v-btn @click="delteDatei">delete</v-btn>
</template>

<script>
import axios from "axios";

export default {
  created() {
    this.getAllData()
  },
  name: "DateiManager",
  data(){
    return{
    dateien:[],
      löschpfad:'teasdajhd'
    }
  },
  methods:{
    delteDatei(){
       axios.post('http://leandro-graf.de:8080/auth/deleteFile', { message: this.löschpfad })
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
        const response = await axios.get("http://leandro-graf.de:8080/auth/alleDateien", {

            }
        );
        this.dateien = response.data
        console.log(response)
      },
  }
}
</script>

<style scoped>

</style>
