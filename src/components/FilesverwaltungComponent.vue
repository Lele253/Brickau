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
              link
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
              <td class="text-center">
                <icon class="icon" icon="line-md:close-circle" @click="deleteFolder(item)"></icon>
              </td>
            </tr>
            </tbody>
          </v-table>


        </v-card>
      </v-col>

      <v-col cols="3">
        <v-card
            height="470px"
            style="border-radius: 20px">
          <h1
              class="text-center mt-2">
            Upload
          </h1>
          <v-divider
              :thickness="3"></v-divider>
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
    ausgewaehlterOrdner: 'Admin',
    files: []
  }),
  computed: {
    filesArray: function () {
      let result = [];
      this.files.forEach((i) => {
        if (i.ordner == this.ausgewaehlterOrdner) {
          result.push(i)
        }
      })
      return result;
    }
  },
  methods: {
    async getAllData() {
      const response = await axios.get("http://leandro-graf.de:8080/auth/alleDateien", {});
      this.files = response.data
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
</style>