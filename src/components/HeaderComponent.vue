<template>
  <v-app-bar class="header" elevate-on-scroll elevation="10" fixed>
    <v-row>
      <v-col class="d-flex align-center" style="height: 70px">
        <v-app-bar-title class="titel-name text-black mt-2 ml-sm-5">
          <v-btn class="text-sm-h4" @click="$router.push('/#home')"><b>Prof. Dr. Ralf A. Brickau</b></v-btn>
        </v-app-bar-title>
      </v-col>
    </v-row>

    <!--    Icon fürs Einloggen: icon="mdi:emergency-exit"-->

    <Icon v-if="!user" class="icon" icon="ri:login-circle-line" style="cursor: pointer; margin-right: 2%"
          @click="loginDialog = true"/>
    <Icon v-if="user" class="icon" icon="ri:logout-circle-line" style="cursor: pointer; margin-right: 2%"
          @click="logout"/>
  </v-app-bar>

  <template class="login">
    <v-row justify="center">
      <v-dialog
          v-model="loginDialog"
          persistent
          width="512"
      >
        <v-card>
          <v-form @submit.prevent="login">
            <v-card-title>
              <span class="text-h5">Anmelden</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                        v-model="email"
                        label="Email"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                        v-model="password"
                        label="Passwort"
                        required
                        type="password"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <v-alert v-if="error!==''" class="mx-4" color="red">E-Mail oder Passwort falsch!</v-alert>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  variant="text"
                  @click="loginDialog = false"
              >
                Close
              </v-btn>
              <v-btn
                  @click="login"
              >
                Login
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-row>

  </template>

</template>

<script>
import {mapGetters} from "vuex";
import {Icon} from '@iconify/vue';
import axios from "axios";

export default {
  computed: {
    ...mapGetters(['user'])
  },
  name: "HeaderComponent",
  components: {
    Icon
  },
  data() {
    return {
      list: [
        {name: 'Home', icon: 'ic:baseline-home', path: '/'},
        {name: 'Impressum', icon: 'material-symbols:text-snippet', path: '/impressum'},
      ],
      error: '',
      dialog: false,
      loginDialog: false,
      email: '',
      password: '',
    }
  },
  methods: {
    // async logout() {
    //   const response = await axios.post('/server/endSession.php');
    //   if (response.status !== 205) {
    //     alert('Abmelden fehlgeschlagen!');
    //     return;
    //   }
    //   localStorage.removeItem('token');
    //   this.$store.dispatch('user', null);
    //   this.dialog = false;
    //   this.$router.push('/');
    // },
    logout() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      location.reload();
    },
    async login() {
      try {
        const response = await axios.post('http://leandro-graf.de:8080/auth/login',
            {
              email: this.email,
              password: this.password
            });

        localStorage.setItem('token', response.data)
        await this.$store.dispatch('user', response.data.user)
        await location.reload()
      } catch (error) {
        this.error = error
        console.log(error)
      }
    },
  }
}
</script>

<style scoped>
.header {
  height: 4.5rem;
  width: 100%;
  box-shadow: 2px 2px 10px #484848;
  background-color: lightskyblue;
}

.icon {
  font-size: 35px;
}

v-btn {
  font-size: 5em;
}
</style>
