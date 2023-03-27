<template>
  <v-card class="ml-10 mr-10 mt-10 mb-10" style="min-height: 70vh; border-radius: 30px">
    <v-card-item>
      <div id="fileExplorer">
        <v-card>
          <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="search"
                hide-details
                label="Search"
                single-line
            ></v-text-field>
          </v-card-title>
          <v-data-table
              :headers="headers"
              :items="files"
              :search="search"
              class="elevation-1"
              item-value="name"
              style="cursor: pointer"
              @click:row="downloadFile"
          ></v-data-table>
        </v-card>
      </div>
    </v-card-item>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "FileExplorerView",
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.umleitung();

    this.getFiles();
  },
  data: () => ({
    search: '',
    headers: [
      {
        title: 'Name',
        align: 'start',
        key: 'name',
      },
      {title: 'Typ', key: 'type'},
    ],
    userPath: "/ISM/",
    files: [],
  }),
  methods: {
   async umleitung() {
     console.log(this.user)

      if (!this.user) {
        this.$router.push('/')
      }
    },
    async getFiles() {
      try {
        const response = await axios.get(
            "http://leandro-graf.de:8080/auth/alleDateien", {}
        );
        let fileNames = [];
        response.data.forEach((dateiObjekt) => {
          if (this.user.pfad.includes(dateiObjekt.ordner)) {
            fileNames.push(dateiObjekt.name)
          }
        });
        this.convertFilePathNamesToFiles(fileNames);

      } catch (error) {
        console.log("error");
        return [];
      }
    },
    downloadFile(value) {
      let name = value.target.parentNode.firstElementChild.innerHTML;
      let type = this.files.filter((e) => e.name === name)[0].type
      let path = this.user.pfad + name + '.' + type;
      console.log(path)
      const link = document.createElement("a");
      link.href = path;
      link.download = name + "." + type;
      link.click();
    },
    convertFilePathNamesToFiles(filePathNames) {
      filePathNames.forEach((filePath) => {
        let pos = filePath.lastIndexOf('.');
        if (pos <= filePath.length - 1) {
          this.files.push({
            name: filePath.substring(0, pos),
            type: filePath.substring(pos, filePath.length).replace('.', '')
          });
        }
      });
    }
  }
}
</script>

<style scoped>
</style>
