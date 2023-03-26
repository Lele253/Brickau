<template>
  <div>
      <h1 v-for="x in dateien" :key="x" class="text-white">{{x.name}}  befindet sich im ordner:  {{x.ordner}}</h1>
  </div>
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

    }
  },
  methods:{
    async getAllData() {
        const response = await axios.get("http://localhost:8080/auth/alleDateien", {

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
