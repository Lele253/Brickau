<template>
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
          @click:row="downloadFile"
      ></v-data-table>
    </v-card>
  </div>
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
    this.convertFilePathNamesToFiles(this.files)
    this.getFiles()
    console.log(this.files)
    this.umleitung();
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
    umleitung() {
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
        response.data.forEach(function (e) {
          if (this.user.pfad.includes(e.ordner)) {
            fileNames.push(e.name)
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
