<template>
  <v-app-bar class="header bg-teal-accent-2" elevate-on-scroll elevation="10" fixed>
    <v-row>
      <v-col class="d-flex align-center" style="height: 70px">
        <v-app-bar-title class="titel-name text-black mt-2 ml-15">
          <h4 class="Brickau" @click="$router.push('/')">Prof. Dr. Ralf A. Brickau</h4>
        </v-app-bar-title>
      </v-col>
      <v-col></v-col>
      <v-col class="d-flex justify-end align-center" style="height: 70px">
        <v-app-bar-nav-icon class="mr-15 mt-2">
          <Icon class="icon" icon="mdi:hamburger-menu" style="cursor: pointer" @click="drawer=!drawer"/>
        </v-app-bar-nav-icon>
      </v-col>
      <!--      <v-col class="d-flex justify-end align-center">

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
            </v-col>-->
    </v-row>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" fixed location="right"
                       style="background-color: grey; width: 20%; height: 100vh" temporary>


    <v-list>
      <v-divider></v-divider>
      <v-list-item v-for="i in list" :key="i" class="d-flex align-center" link style="height: 80px"
                   @click="$router.push(i.path)">
        <v-row>
          <v-col cols="1">
            <Icon :icon="i.icon" style="font-size: 30px"/>
          </v-col>
          <v-col cols="9">
            <p class="ml-2" style="font-size: 20px">
              {{ i.name }}
            </p></v-col>
        </v-row>
      </v-list-item>
      <v-list-item class="d-flex justify-center">
        <v-btn style="margin-top: 600px; width: 200px" @click="drawer=!drawer">
          Logout
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>


  </v-navigation-drawer>

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
      list: [
        {name: 'Home', icon: 'ic:baseline-home', path: '/'},
        {name: 'Impressum', icon: 'material-symbols:text-snippet', path: '/impressum'},
      ],
      dialog: false,
      drawer: false,
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

.titel-name {
  font-size: 30px;
}

.Brickau:hover {
  color: grey;
}
</style>