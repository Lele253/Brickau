<template>
<div style=" height: 90vh" class="d-flex justify-center align-center">
  <v-card class="card">
      <v-row justify="center" style="width: 100%">
        <v-col cols="12">
          <h3 class="text-center mt-3"> Wählen Sie den Ordner und die Dateien die sie Uploaden möchten</h3>
        </v-col>
        <v-col  cols="10">
          <v-select
              variant="solo"
              v-model="ordnerAuswahl"
              :items="ordner"
              label="Ordner wählen">
          </v-select>
        </v-col>
        <v-col cols="10">
          <div class="container">
            <div class="large-12 medium-12 small-12 cell">
              <label>
                <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()"/>
              </label>
              <v-btn @click="submitFiles">Upload</v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="10" class="d-flex justify-center">
        </v-col>
        <v-col cols="10">
          <div v-for="x in files" :key="x" class="mb-1 auflistung">
            <p class="ml-1"> Dateiname: &nbsp;{{x.name}}  </p>
          </div>
        </v-col>
      </v-row>
  </v-card>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "UploadView",
  data: () =>({
    ordnerAuswahl:'',
    ordner:[],
    files: [],
  }),
  created() {
    this.getOrdner()
  },
  methods:{
    handleFilesUpload(){
      this.files = this.$refs.files.files;
      console.log(this.files)

    },
    submitFiles(){
      let formData = new FormData();
      for( var i = 0; i < this.files.length; i++ ){
        let file = this.files[i];
        formData.append('files', file);

      }
      console.log(this.ordnerAuswahl)
      axios.post('http://localhost:8080/auth/ordnerName',{
        message: this.ordnerAuswahl
      })
      axios.post( 'http://localhost:8080/auth/upload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
          }
      ).then(function(){
        console.log('jap')
        alert('Dateien wurden erfolgreich hochgeladen.')
      })
          .catch(function(){
            console.log('FAILURE!!');
          });
    },
    async getOrdner() {
      try {
        const response = await axios.get(
            "http://localhost:8080/auth/ordner", {}
        );
        let x = response.data
        x.forEach((i) => {
          console.log(i == '.DS_Store')
          if (i != '.DS_Store') {
            this.ordner.push(i)
          }
        })
      } catch (error) {
        console.log("error");
      }
    },
  }
}
</script>

<style scoped>
.card{
  width: 60%;
  min-height: 50%;
}
.auflistung{
  border: black solid 1px;
  border-radius: 10px;
}
</style>
