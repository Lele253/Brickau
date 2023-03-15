<template>
  <div id="fileExplorer">
    <v-table>
      <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Typ
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="file in files"
          :key="file.name" @click="downloadFile(file.name)"
      >
        <td>{{ file.name }}</td>
        <td>{{ file.type }}</td>
      </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  name: "FileExplorerView",
  data: () => ({
    userPath: "/ISM/",
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
    downloadFile(name) {
      let path = this.userPath + name + '.' + this.files.filter((e) => e.name == name)[0].type;
      const link = document.createElement("a");
      link.href = path;
      link.download = path;
      link.click();
    }
  }
}
</script>

<style scoped>

</style>