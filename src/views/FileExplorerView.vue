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
    this.getFiles()
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
    files1: [],
    files: [
      {
        name: 'BWL ein mal eins',
        type: 'PDF'
      },
      {
        name: 'BWL for Dummies',
        type: 'EPUB'
      },
      {
        name: 'BWL1-Skript-ITC-WS 19_20',
        type: 'pdf',
      }
    ],
  }),
  methods: {
    async getFiles() {
      try {
        const response = await axios.get(
            "http://localhost:8080/auth/test", {}
        );
        this.files1 = response.data;
        console.log(this.files1)
      } catch (error) {
        console.log("error");
      }
    },
    downloadFile(value) {
      let name = value.target.parentNode.firstElementChild.innerHTML;
      let path = this.userPath + name + '.' + this.files.filter((e) => e.name == name)[0].type;
      const link = document.createElement("a");
      link.href = path;
      link.download = path;
      link.click();
    },
    convertFilePathNamesToFiles(filePathNames) {
      for (let filePath in filePathNames) {
        let filePathArray = filePath.split('.');
        this.files.push({name: filePathArray[0], type: filePathArray[1]});
      }
    }
  }
}
</script>

<style scoped>
</style>
