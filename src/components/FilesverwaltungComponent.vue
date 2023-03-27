<template>
  <div class="text-white">
    <v-row class="ma-0">
      <v-col cols="3">

        <!--        <v-list
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
                      link
                      @click="this.ausgewaehlterOrdner = item"
                  >
                    {{ item }}
                    <v-divider></v-divider>
                  </v-list-item>
                </v-list>-->

        <v-table
            fixed-header
            height="470px"
            style="border-radius: 20px"
        >
          <thead>
          <tr>
            <th class="text-h5 mt-2 text-center text-black">
              Ordner auswählen
            </th>
            <v-divider
                :thickness="5">
            </v-divider>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in ordner"
              :key="item"
          >
            <td style="cursor: pointer"
                @click="ausgewaehlterOrdner = item"
            >{{ item }}
            </td>
          </tr>
          </tbody>
        </v-table>


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
              <td>{{ file.name }}
              </td>
              <td class="text-center">
                <icon class="icon" icon="line-md:close-circle" style="cursor: pointer"
                      @click="deleteDatei(file.path)"></icon>
              </td>
            </tr>
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
            <Icon icon="line-md:cloud-upload-loop" style="font-size: 175px"/>
          </v-card-item>
          <v-card-actions>
            <v-file-input
                id="files"
                ref="files"
                v-model="uploadFile"
                chips
                class="mr-3"
                label="Bitte wählen Sie eine Datei aus" multiple
                type="file" v-on:change="handleFilesUpload()"

            ></v-file-input>
          </v-card-actions>
          <v-card-actions v-if="error !== ''" class="pb-5 mx-5">
            <v-alert color="red">{{ error }}</v-alert>
          </v-card-actions>
          <v-card-actions class="d-flex justify-center">
            <v-btn
                color="white"
                style="background-color: black"
                @click="submitFiles">
              Upload
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>
  </div>
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
    ausgewaehlterOrdner: 'Admin',
    allFiles: [],
    files: [],
    error: '',
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
      console.log(this.files)
    },
    deleteDatei(pfad) {
      let löschpfad = pfad
      axios.post('http://leandro-graf.de:8080/auth/deleteFile', {message: löschpfad})
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
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append('files', file);

      }
      console.log(this.ausgewaehlterOrdner)
      await axios.post('http://leandro-graf.de:8080/auth/ordnerName', {
        message: this.ausgewaehlterOrdner
      })
      await axios.post('http://leandro-graf.de:8080/auth/upload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
          }
      ).then(function () {
        console.log('jap')
        console.log('Dateien wurden erfolgreich hochgeladen.')
      })
          .catch(function () {
            console.log('FAILURE!!');
          });
      await this.getAllData()
      this.uploadFile = []
    },
    async getAllData() {
      const response = await axios.get("http://leandro-graf.de:8080/auth/alleDateien", {});
      this.allFiles = response.data
      console.log(response)
    },
    async getOrdner() {
      this.ordner = [];
      try {
        const response = await axios.get(
            "http://leandro-graf.de:8080/auth/ordner", {}
        );
        let x = response.data
        x.forEach((i) => {
          if (i != '.DS_Store') {
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

html {
  overflow: hidden !important;
}

.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: auto;
}
</style>