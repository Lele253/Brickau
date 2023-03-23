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
          :item-children="row_classes"
          :items="files"
          :search="search"
          class="elevation-1 myFiles"
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
    this.convertFilePathNamesToFiles(this.getFiles());
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
    async getFiles() {
      try {
        const response = await axios.get(
            "http://localhost:8080/auth/test", {}
        );
        return response.data;
      } catch (error) {
        console.log("error");
        return [];
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
    row_classes() {
      return "dataRow";
    },
    convertFilePathNamesToFiles(filePathNames) {
      for (let filePath in filePathNames) {
        let filePathArray = filePath.split('.');
        this.files.push({name: filePathArray[0], type: filePathArray[1]});
        console.log(filePathNames + "|" + filePathArray);
      }
      console.log(this.files);
    }
  }
}
</script>

<style scoped>
</style>
