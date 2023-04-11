<template>
  <div class="text-white">
    <v-row class="ma-0">
      <v-col cols="6">

        <v-table
            fixed-header
            height="470px"
            style="border-radius: 20px"
        >
          <thead>
          <tr>
            <th class="text-left">
              Nutzername
            </th>
            <th class="text-left">
              Ordnerpfad
            </th>
            <th>
              Löschen
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in allUser"
              :key="item"
          >
            <td>{{ item.email }}</td>
            <td>{{ item.pfad.substring(5, item.pfad.length - 1) }}</td>
            <td>
              <icon v-if="item.email !== 'Admin'" class="icon ml-3" icon="line-md:account-delete"
                    style="cursor: pointer"
                    @click="confirmDialog = true, selectedUser = item"></icon>
            </td>
          </tr>
          </tbody>
        </v-table>


      </v-col>

      <v-col cols="6">
        <v-card
            min-height="470px"
            style="border-radius: 20px"
        >
          <v-card-title>
            <h2 class="text-center">Nutzer anlegen</h2>
          </v-card-title>
          <v-card-text class="mt-8">
            <div>
              <v-row>

                <v-col
                    cols="6"
                >
                  <v-select
                      v-model="ordnerpfad"
                      :items="ordner"
                      label="Ordnerpfad*"
                      required
                  ></v-select>
                </v-col>
                <v-col
                    cols="6"
                >
                  <v-select
                      v-model="status"
                      :items="rechte"
                      label="Rechte*"
                      required
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      v-model="email"
                      label="Nutzername*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      v-model="password"
                      label="Passwort*"
                      required
                  ></v-text-field>
                </v-col>

              </v-row>
            </div>
            <small>*Pflichtfelder</small>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn
                v-if="überprüfe"
                color="white"
                style="background: black"
                @click="registrieren"
            >
              Registrieren
            </v-btn>
            <v-btn
                v-if="!überprüfe"
                color="grey"
                style="background: black"
                @click="error= 'Bitte alle Felder ausfüllen'"
            >
              Registrieren
            </v-btn>
          </v-card-actions>
          <v-alert v-if="error !== ''" class="text-center mt-5" color="red">{{ error }}</v-alert>
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
            Nutzer löschen
          </v-card-title>
          <v-card-text>Möchten Sie den Nutzer '{{ selectedUser.email }}' wirklich löschen?
          </v-card-text>
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
                @click="confirmDialog = false, deleteUser(selectedUser.nutzerId)"
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
  data: () => ({
    password: '',
    email: '',
    ordnerpfad: '',
    regist: false,
    allUser: [],
    ordner: [],
    rechte: ['Admin', 'Nutzer'],
    status: '',
    error: '',
    confirmDialog: false,
    selectedUser: []
  }),
  computed: {
    überprüfe: function () {
      if (this.email == '' || this.password == '' || this.status == '' || this.ordnerpfad == '') {
        return false;
      } else {
        return true;
      }
    }
  },
  name: "NutzerverwaltungComponent",
  methods: {
    async deleteUser(id) {
      await axios.delete('http://brickau.de:8080/auth/user/all/' + id)
          .then(response => {
            console.log(response);
          });
      await this.getAllUser()
    },
    async registrieren() {
      try {
        await axios.post('http://brickau.de:8080/auth/Regist', {
          email: this.email,
          password: this.password,
          pfad: '/ISM/' + this.ordnerpfad + '/',
          status: this.status,
          username: this.email
        });
      } catch (e) {
        this.error = ''
      }
      await this.getAllUser()
      this.password = '';
      this.email = '';
      this.ordnerpfad = '';
      this.status = ''

    },
    async getAllUser() {
      this.allUser = []
      const response = await axios.get("http://brickau.de:8080/auth/user/all", {}
      );
      this.allUser = response.data
      return response.data
    },
    async getOrdner() {
      this.ordner = [];
      this.error = '';
      try {
        const response = await axios.get(
            "http://brickau.de:8080/auth/ordner", {}
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
  },
  components: {
    Icon
  },
  created() {
    this.getAllUser()
    this.getOrdner()
  }
}
</script>

<style scoped>
.icon {
  font-size: 35px;
  color: #c41616;
}
</style>
