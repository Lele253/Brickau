<template>
  <div class="text-white">
    <v-row class="ma-0">
      <v-col cols="3">

        <v-list
            class="text-center"
            fixed-header
            height="470px"
            style="border-radius: 20px"
        >
          <v-list-item class="text-h5 mt-2">
            <b>Ordnername</b>
            <v-divider
                :thickness="3">
            </v-divider>
          </v-list-item>
          <v-list-item
              v-for="item in ordner"
              :key="item"
              :value="item"
              active-color="green"
              @click="this.ausgewaehlterOrdner = item"
          >
            {{ item }}
            <v-divider></v-divider>
          </v-list-item>
        </v-list>


      </v-col>

      <v-col cols="6">
        <v-card
            height="470px"
            style="border-radius: 20px">
          <h1
              class="text-center mt-2">
            Dateien
          </h1>
          <v-divider
              :thickness="3"></v-divider>


          <v-table
              fixed-header
              height="470px"
              style="border-radius: 20px"
          >
            <tbody>
            <tr
                v-for="file in filesArray"
                :key="file"
            >
              <td>{{ file.name }}</td>
              <td style="width: 30px; padding-left: 0">
                <a :href="'https://leandro-graf.de/Brickau/Ordner/'+ ausgewaehlterOrdner+'/'+ file.name" target="_blank">
                  <Icon class="downloadIcon" icon="ph:file-magnifying-glass-bold"/>
                </a>
              </td>
<!--              <td style="width: 30px; padding-left: 0">
                <a :href="'https://leandro-graf.de/Brickau/Ordner/'+ ausgewaehlterOrdner+'/'+ file.name" download>
                  <Icon class="downloadIcon" icon="material-symbols:download-for-offline-outline"/>
                </a>
              </td>-->
              <td style="width: 30px; padding-left: 0">
                <icon class="icon" icon="line-md:close-circle" style="cursor: pointer"
                      @click="confirmDialog = true; selectedFile = file.path"></icon>
              </td>
            </tr>
            <h1 v-if="filesArray.length == 0" class="text-center mt-10"> {{ ausgewaehlterOrdner }}
            </h1>
            </tbody>
          </v-table>


        </v-card>
      </v-col>

      <v-col cols="3">
        <v-card
            min-height="470px"
            style="border-radius: 20px">
          <h1
              class="text-center mt-2">
            Upload
          </h1>
          <v-divider
              :thickness="3"></v-divider>

          <v-card-item class="text-black text-center">
            Sie befinden sich aktuell in dem Ordner
            <h3>{{ ausgewaehlterOrdner }}</h3>
          </v-card-item>
          <v-card-item class="text-center mt-n7">
            <Icon v-if="!loadAnzeige" icon="line-md:cloud-upload-loop" style="font-size: 175px"/>
            <Icon v-if="loadAnzeige" icon="line-md:loading-twotone-loop" style="font-size: 175px"/>
          </v-card-item>
          <v-card-actions>
            <v-file-input
                id="files"
                ref="files"
                v-model="uploadFile"
                chips
                class="mr-3"
                label="Bitte wählen Sie eine Datei aus"
                type="file" v-on:change="handleFilesUpload()"

            ></v-file-input>
          </v-card-actions>
          <v-card-actions v-if="error !== ''" class="pb-5 mx-5">
            <v-alert color="red">{{ error }}</v-alert>
          </v-card-actions>
          <v-card-actions class="d-flex justify-center" v-if="ausgewaehlterOrdner != 'Bitte wählen sie einen Ordner aus'">
            <v-btn
                v-if="uploadFile != 0 "
                color="white"
                style="background-color: black"
                @click="submitFiles">
              Upload
            </v-btn>
            <v-btn
                v-if="uploadFile.length == 0"
                color="grey"
                style="background-color: black"
                >
              Upload
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>
  </div>

  <template>
    <v-row justify="center">
      <v-dialog
          v-model="confirmDialog"
          persistent
          width="auto"
      >
        <v-card>
          <v-card-title class="text-center text-h5">
            Datei löschen
          </v-card-title>
          <v-card-text>
            Möchten Sie die Datei '{{
              selectedFile.substring(30 + ausgewaehlterOrdner.length)
            }}' wirklich löschen?
          </v-card-text>
          ´
          <v-card-actions class="d-flex justify-center">
            <v-btn
                color="red"
                variant="text"
                @click="confirmDialog = false"
            >
              Abbrechen
            </v-btn>
            <v-btn
                color="green"
                variant="text"
                @click="confirmDialog = false, deleteDatei(selectedFile)"
            >
              Löschen
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

</template>

<script>
import axios from "axios";
import {Icon} from '@iconify/vue';

export default {
  components: {
    Icon,
  },
  name: "FilesverwaltungComponent",
  created() {
    this.getAllData()
    this.getOrdner()
  },
  data: () => ({
    ordner: [],
    uploadFile: [],
    ausgewaehlterOrdner: 'Bitte wählen sie einen Ordner aus',
    allFiles: [],
    files: [],
    error: '',
    leererOrdner: '',
    confirmDialog: false,
    selectedFile: '',
    loadAnzeige: false
  }),
  computed: {
    filesArray: function () {
      let result = [];
      this.allFiles.forEach((i) => {
        if (i.ordner == this.ausgewaehlterOrdner) {
          result.push(i)
        }
      })
      return result;
    }
  },
  methods: {
    handleFilesUpload() {
      this.files = this.$refs.files.files;
    },
    deleteDatei(pfad) {
      let löschpfad = pfad
      axios.post('https://leandro-graf.de:8085/auth/deleteFile', {message: löschpfad})
          .then(response => {

            console.log(response.data);
            this.getAllData()
            return response.data;
          })
          .catch(error => {
            console.error(error);
          });
    },
    async submitFiles() {
      let formData = new FormData();
      this.loadAnzeige = true
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append('files', file);
      }
      await axios.post('https://leandro-graf.de:8085/auth/ordnerName', {
        message: this.ausgewaehlterOrdner
      })
      await axios.post('https://leandro-graf.de:8085/auth/upload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
          }
      ).then(function () {
        console.log('Dateien wurden erfolgreich hochgeladen.')
      })
          .catch(function () {
            console.log('FAILURE!!');
            this.error = 'Bitte wählen Sie einen Ordner aus'
          });
      await this.getAllData()
      this.uploadFile = []
      this.loadAnzeige = false
    },


    async getAllData() {
      const response = await axios.get("https://leandro-graf.de:8085/auth/alleDateien", {});
      this.allFiles = response.data
      console.log(response)
    },
    async getOrdner() {
      this.ordner = [];
      try {
        const response = await axios.get(
            "https://leandro-graf.de:8085/auth/ordner", {}
        );
        let x = response.data
        x.forEach((i) => {
          if (i != '.DS_Store' && i != 'img' && i != 'js' && i != 'fonts' && i != 'css' && i != 'favicon.png' && i != 'index.html') {
            console.log(i)
            this.ordner.push(i)
          }
        })
      } catch (error) {
        console.log("error");
      }
    }
  }
}
</script>

<style scoped>
.icon {
  font-size: 35px;
  color: #c41616;
}

.downloadIcon {
  font-size: 35px;
  color: #000000;
}

html {
  overflow: hidden !important;
}

</style>
