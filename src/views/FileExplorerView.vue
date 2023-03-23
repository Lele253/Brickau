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
            "http://localhost:8080/auth/test", {}
        );
        this.convertFilePathNamesToFiles(response.data);

      } catch (error) {
        console.log("error");
        return [];
      }
    },
    downloadFile(value) {
      let name = value.target.parentNode.firstElementChild.innerHTML;
      let path = this.user.pfad + name + '.' + this.files.filter((e) => e.name == name)[0].type;
      console.log(path)
      const link = document.createElement("a");
      link.href = path;
      console.log(link)
      link.download = path;
      link.click();
    },
    convertFilePathNamesToFiles(filePathNames) {
      filePathNames.forEach((element) => {
        let filePathArray = element.split('.');
        this.files.push({name: filePathArray[0], type: filePathArray[1]});
      });

    }
  }
}
</script>

<style scoped>
</style>
