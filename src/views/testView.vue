<template>
  <div>
    <v-row justify="center">
      <v-dialog
          v-model="dialog"
          max-width="600px"
          persistent
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              class="text-white" style="background-color: black"
              v-bind="attrs"
              variant="outlined"
              @click="dialog=!dialog"
              v-on="on"
          >
            Registrieren
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Registrieren</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-select
                      v-model="ordnerpfad"
                      :items="ordner"
                      label="Ordnerpfad*"
                  ></v-select>
                </v-col>
                <v-col
                    cols="12"
                >
                  <v-select
                      v-model="status"
                      :items="rechte"
                      label="Status*"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      v-model="email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      v-model="password"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    this.getOrdner();
  },
  name: "testView",
  data: () => ({
    dialog: false,
    ordner: [],
    ordnerpfad: '',
  }),
  methods: {
    async getOrdner() {
      try {
        const response = await axios.get(
            "http://leandro-graf.de:8080/auth/ordner", {}
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

</style>