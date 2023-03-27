<template>
  <div class="text-white" style="height: 100%; background: transparent">
    <v-row class="ma-0">
      <v-col cols="8">

        <v-table
            fixed-header
            height="470px"
            style="border-radius: 20px"
        >
          <thead>
          <tr>
            <th>
              Ordner auswählen
            </th>
            <th>
              Anzahl Dateien
            </th>
            <th class="text-center">
              Löschen
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in ordner"
              :key="item"
          >
            <td>{{ item }}</td>
            <td>{{ item.anzahl }}</td>
            <td class="text-center">
              <icon class="icon" icon="line-md:close-circle" style="cursor: pointer"
                    @click="deleteOrdner(item)"></icon>
            </td>
          </tr>
          </tbody>
        </v-table>


      </v-col>

      <v-col cols="4">
        <v-card
            height="470px"
            style="border-radius: 20px">
          <v-card-item class="d-flex justify-center">
            <icon class="folderIcon mt-n5" icon="material-symbols:folder-open"></icon>
            <v-card-text>
              <v-text-field
                  v-model="erstellterOrdner"
                  class="mt-n8"
                  color="black"
                  label="Ordnername angeben"
                  variant="outlined">
              </v-text-field>
            </v-card-text>
          </v-card-item>
          <v-card-actions
              class="d-flex justify-center mt-n5">
            <v-btn
                color="white"
                style="background: black"
                @click="createFolder"
            > erstellen
            </v-btn>
          </v-card-actions>
          <v-card-item v-if="error !== ''" class="d-flex justify-center">
            <v-alert color="red"
            >
              Der Ordnername ist bereits vergeben oder wurde nicht vergeben!
            </v-alert>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import {Icon} from '@iconify/vue';

export default {
  data() {
    return {
      ordner: [],
      error: '',
      erstellterOrdner: ''
    }
  },
  components: {
    Icon,
  },

  created() {
    this.getOrdner();
  },
  methods: {
    deleteOrdner(ordnername) {
      axios.post('http://leandro-graf.de:8080/auth/deleteFolder', {message: ordnername})
          .then(response => {
            console.log(response.data);
            this.getOrdner()
            return response.data;
          })
          .catch(error => {
            this.error = error;
            console.error(error);
          });
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
        this.error = error
      }
    },
    async createFolder() {
      let response = await axios.post('http://leandro-graf.de:8080/auth/ordnerErstellen', {message: this.erstellterOrdner})
      if (response.data !== 'diesen Ordner gibt es bereits') {
        console.log(response.data);
        this.getOrdner();
        this.erstellterOrdner = '';
      } else {
        this.error = 'diesen Ordner gibt es bereits'
      }

    },
  },
  name: "OrdnerverwaltungComponent",
}
</script>

<style scoped>
.icon {
  font-size: 35px;
  color: #c41616;
}

.folderIcon {
  font-size: 250px;
}
</style>