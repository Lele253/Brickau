<template>
  <v-app-bar class="header bg-teal-accent-2" elevate-on-scroll elevation="10" fixed>
    <v-row>
      <v-col class="d-flex align-center" style="height: 70px">
        <v-app-bar-title class="titel-name text-black mt-2 ml-sm-5">
          <v-btn class="text-sm-h4" @click="$router.push('/#home')"><b>Prof. Dr. Ralf A. Brickau</b></v-btn>
        </v-app-bar-title>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-app-bar>

</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  computed: {
    ...mapGetters(['user'])
  },
  name: "HeaderComponent",
  components: {},
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
  height: 4.5rem;
  width: 100%;
  box-shadow: 2px 2px 10px #484848;
}

.icon {
  font-size: 35px;
}

v-btn {
  font-size: 5em;
}
</style>