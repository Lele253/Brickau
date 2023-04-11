<template>
  <div>
    <v-card class="desktop hidden-sm-and-down ml-10 mr-10 mt-10 mb-10" style="min-height: 70vh; border-radius: 30px">
      <v-card-item>
        <div id="fileExplorer">
          <v-card>
            <v-card-title class="text-center mt-2">
              Hallo {{ user.email }}, diese Dateien stehen Ihnen zur Verfügung
              <v-divider :thickness="3" class="mt-2"></v-divider>
            </v-card-title>
            <v-table
                fixed-header
                style="border-radius: 20px"
            >
              <tbody>
              <tr
                  v-for="file in filesArray"
                  :key="file"
              >
                <td>{{ file.name }}</td>
                <td style="width: 30px; padding-left: 0">
                  <a :href="'..' +user.pfad + file.name" target="_blank">
                    <Icon class="downloadIcon" icon="ph:file-magnifying-glass-bold"/>
                  </a>
                </td>
                <td style="width: 30px; padding-left: 0">
                  <a :href="'..'+user.pfad+ file.name" download>
                    <Icon class="downloadIcon" icon="material-symbols:download-for-offline-outline"/>
                  </a>
                </td>
              </tr>
              <h1 v-if="filesArray.length == 0" class="text-center mt-10">Ihnen stehen zur Zeit keine Dateien zur
                Verfügung</h1>
              </tbody>
            </v-table>
          </v-card>
        </div>
      </v-card-item>
    </v-card>

    <v-card class="mobile  hidden-md-and-up my-2" style="min-height: 73vh; margin-right: 5%; margin-left: 5%">
      <v-card-text class="text-center mt-2 " style="font-size: 2vh">
        Hallo {{ user.email }}, diese Dateien stehen Ihnen zur Verfügung
        <v-divider :thickness="3" class="mt-2"></v-divider>
      </v-card-text>
      <v-table
          fixed-header
          height="100%"
          style="border-radius: 20px"
      >
        <tbody>
        <tr
            v-for="file in filesArray"
            :key="file"
        >
          <td style="font-size: 15px; max-width: 20px">{{ file.name }}</td>
          <td style="width: 30px; padding-left: 0">
            <a :href="'..' +user.pfad + file.name" target="_blank">
              <Icon class="mobileIcon" icon="ph:file-magnifying-glass-bold"/>
            </a>
          </td>
          <td style="width: 30px; padding-left: 0">
            <a :href="'..'+user.pfad+ file.name" download>
              <Icon class="mobileIcon" icon="material-symbols:download-for-offline-outline"/>
            </a>
          </td>
        </tr>
        <h1 v-if="filesArray.length == 0" class="text-center mt-10">Ihnen stehen zur Zeit keine Dateien zur
          Verfügung</h1>
        </tbody>
      </v-table>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";
import {Icon} from '@iconify/vue';
import router from "@/router";

export default {
  data: () => ({
    allFiles: [],
  }),
  created() {
    this.getAllData()
    this.umleitung()
  },
  computed: {
    ...mapGetters(['user']),
    filesArray: function () {
      let result = [];
      this.allFiles.forEach((i) => {
        if (i.ordner == this.user.pfad.substring(5, this.user.pfad.length - 1)) {
          result.push(i)
        }
      })
      return result;
    }
  },
  components: {
    Icon,
  },
  name: "FilesView",
  methods: {
    umleitung() {
      if (this.user == null) {
        router.push('/')
      }
    },
    async getAllData() {
      const response = await axios.get("http://brickau.de:8080/auth/alleDateien", {});
      this.allFiles = response.data
      console.log(response)
    },
  }
}
</script>

<style scoped>
.downloadIcon {
  font-size: 35px;
  color: #000000;
}

.mobileIcon {
  font-size: 30px;
  color: #000000;
}
</style>
