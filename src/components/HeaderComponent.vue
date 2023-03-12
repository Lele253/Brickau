<template>
  <v-app-bar class="header bg-teal-accent-2" elevation="10" fixed>
    <v-row>
      <v-col class="d-flex align-center" style="height: 70px">
        <Icon class="icon ml-6 mt-3" icon="mdi:hamburger-menu" style="cursor: pointer" @click="$router.push('/')"/>
      </v-col>
      <v-col></v-col>
      <v-col class="d-flex justify-end align-center">

        <Icon v-if="!user" class="icon mt-3 mr-3" icon="oi:account-login" style="cursor: pointer"
              @click="$router.push('/login')"/>
        <v-dialog
            v-model="dialog"
            max-width="290"
            persistent
        >
          <template v-slot:activator="{ on, attrs }">
            <Icon v-if="user" class="icon mt-3 mr-3" icon="oi:account-logout" style="cursor: pointer"
                  v-bind="attrs" @click="dialog=true" v-on="on"/>
          </template>
          <v-card>
            <v-card-text class="text-h5">
              <span>Möchtest du dich<br> wirklich Abmelden?</span>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="green darken-1"
                  text
                  @click="dialog = false"
              >
                Nein
              </v-btn>
              <v-btn
                  color="green darken-1"
                  text
                  @click="logout"
              >
                Ja
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import {Icon} from '@iconify/vue';
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  computed: {
    ...mapGetters(['user'])
  },
  name: "HeaderComponent",
  components: {
    Icon,
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    async logout() {
      const response = await axios.post('/server/endSession.php');
      if (response.status !== 205) {
        alert('Abmelden fehlgeschlagen!');
        return;
      }
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      this.dialog = false;
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.header {
  height: 75px;
  width: 100%;
  box-shadow: 2px 2px 10px #484848;
}

.icon {
  font-size: 35px;
}
</style>