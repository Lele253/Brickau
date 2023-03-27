<template>
  <div class="hidden-md-and-down" style="margin-top: -4px; background: transparent">
    <v-divider></v-divider>
    <h1 class="toolbar d-flex justify-center">
      Verwaltung
    </h1>
    <v-toolbar class="toolbar">
      <v-toolbar-items class="d-flex justify-center" style="width: 100%">
        <v-btn
            v-for="item in menuItems"
            :key="item.title"
            style="  margin: 0px 50px 0px 50px;"
            @click="componentSwitchen(item.title)">
          <icon :icon=item.icon class="icon"></icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div class="d-flex justify-center" style="height: 100%; margin-top: 50px">
      <v-card style="background: transparent; width: 90vw; min-height: 500px">
        <OrdnerverwaltungComponent v-if="menuItems[0].component"></OrdnerverwaltungComponent>
        <NutzerverwaltungComponent v-if="menuItems[1].component"></NutzerverwaltungComponent>
        <FilesverwaltungComponent v-if="menuItems[2].component"></FilesverwaltungComponent>
      </v-card>
    </div>
  </div>

</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import {Icon} from '@iconify/vue';
import OrdnerverwaltungComponent from "@/components/OrdnerverwaltungComponent";
import FilesverwaltungComponent from "@/components/FilesverwaltungComponent";
import NutzerverwaltungComponent from "@/components/NutzerverwaltungComponent";
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.setStatus()
  },
  mounted() {
    this.umleitung()
  },
  name: "VerwaltungsView",
  data() {
    return {
      appTitle: 'Verwaltung',
      sidebar: false,
      user1: '',
      menuItems: [
        {title: 'Ordner', component: false, icon: 'material-symbols:folder'},
        {title: 'Nutzer', component: false, icon: 'mdi:user'},
        {title: 'Dateien', component: true, icon: 'ph:files-bold'},

      ],
    }
  },
  methods: {
    async umleitung() {
      console.log(this.user.status == 'Admin')
      if (!this.user) {
        this.$router.push('/')
      }
    },
    setStatus() {
      this.user1 = this.user.status
    },
    componentSwitchen(titel) {
      this.menuItems.forEach(function (e) {
        if (e.title === titel) {
          e.component = true
        } else {
          e.component = false
        }
      })
    }
  },
  components: {
    Icon,
    OrdnerverwaltungComponent,
    NutzerverwaltungComponent,
    FilesverwaltungComponent,
  },
};
</script>

<style scoped>
.navbar {
  align-items: center;
  display: flex;
}

.icon {
  font-size: 35px;
}

.toolbar {
  background-color: lightskyblue;
}
</style>
