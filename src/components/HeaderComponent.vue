<template>
  <v-app-bar class="header" elevate-on-scroll elevation="0" fixed>
    <v-row>
      <v-col class="d-flex align-center" style="height: 70px">
        <v-app-bar-title class="titel-name text-black mt-2 ml-sm-5">
          <v-btn class="text-sm-h4" @click="$router.push('/')"><b>Prof. Dr. Ralf A. Brickau</b></v-btn>
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
          <v-card-title class="text-center">
            <span class="text-h5">Anmelden</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                      v-model="email"
                      label="Nutzername"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      v-model="password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      label="Passwort"
                      required
                      @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-col>
                <v-col v-if="error !== ''" cols="12">
                  <v-alert v-if="error == 'AxiosError: Request failed with status code 401'" color="red">Der Nutzername oder das Passwort ist falsch!</v-alert>
                  <v-alert v-else class="text-center" color="red">Es bestehen
                    derzeit
                    Serverprobleme.
                    Bitte wenden Sie sich an den Administrator der Website, um das Problem zu beheben!
                  </v-alert>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                variant="text"
                @click="loginDialog = false, error = ''"
                color="red"
            >
              Close
            </v-btn>
            <v-btn
                v-if="!loadAnzeige"
                variant="text"
                @click="login"
                color="green"
            >
              Login
            </v-btn>
            <Icon v-if="loadAnzeige" icon="line-md:loading-twotone-loop" style="font-size: 40px"/>
          </v-card-actions>
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
      loadAnzeige: false,
      showPassword: false,
      list: [
        {name: 'Home', icon: 'ic:baseline-home', path: '/'},
        {name: 'Impressum', icon: 'material-symbols:text-snippet', path: '/impressum'},
      ],
      dialog: false,
      drawer: false,
      loginDialog: false,
      email: '',
      password: '',
      error: ''
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
        this.loadAnzeige = true;
        const response = await axios.post('https://leandro-graf.de:8085/auth/login',
            {
              email: this.email,
              password: this.password
            });
        localStorage.setItem('token', response.data)
        await this.$store.dispatch('user', response.data.user)

        await location.reload()
        this.loadAnzeige = false;
      } catch (e) {
        this.loadAnzeige = false;
        this.error = e;
      }
    },
  }
}
</script>

<style scoped>
.header {
  height: 4.5rem;
  width: 100%;
  background-color: lightskyblue;
}

.icon {
  font-size: 45px;
}
</style>
