<template>
  <div id="Terms">
    <div>
      <el-input
        ref="inputSearch"
        placeholder="Search..."
        v-model="search"
        @keyup.native="handlerSearchBlur"
        @keydown.native="handleSearch"
      ></el-input>
    </div>
    <div>
      <Upload />
    </div>
    <h3>Data</h3>
    <el-table
      ref="table"
      :data="getDefinitions"
      border
      style="width: 100%"
      reserve-selection
      @selection-change="selectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="id" label="#" width="180"> </el-table-column>
      <el-table-column prop="title" label="Title" width="180">
      </el-table-column>
      <el-table-column prop="status" label="Completed"> </el-table-column>
      <el-table-column label="Operations">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// const axios = require("axios");
// import _ from "lodash";
import Upload from "./utils/Upload";

export default {
  components: { Upload },
  data() {
    return {
      tableData: [
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
          status: "no",
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false,
          status: "no",
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true,
          status: "yes",
        },
      ],
      selected: [],
      search: "",
      ignoreSelect: false,
      searchFilter() {
        return this.tableData.filter(
          (d) =>
            d.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1,
        );
      },
      error: false,
      loading: false,
    };
  },
  mounted() {},
  computed: {
    getDefinitions() {
      return this.searchFilter();
    },
  },
  methods: {
    handleEdit(scope, row) {
      console.log("handleEdit", scope, row);
    },
    handleDelete(scope, row) {
      console.log("handleDelete", scope, row);
      this.$confirm(
        "This will permanently delete the file. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "Delete completed"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled"
          });
        });
    },
    /**
     * Gestion des selections lors d'une recherche:
     * ---
     * Lorsque l'on tape dans l'input search, il faut desactiver le handleSelection. Ceci n'empeche pas que les cases se decochent visuellement,
     * bien que en memoire, la liste des selected restent correctement conservés.
     *
     * Lorsque l'utilisateur a fini sa recherche, il faut remettre les selected sous forme visuel, c-a-d parcourir toutes les definitions
     * et, pour chacune d'elle, verifier si l'ID est present dans le []selected. Si oui, declencher le $refs.table.toggleRowSelection
     */

    handleSearch() {
      /* observer on user typing keyboard */
      this.ignoreSelect = true;
    },
    handlerSearchBlur() {
      for (let def of this.tableData)
        this.$refs.table.toggleRowSelection(
          def,
          !!this.selected.find((s) => s.id === def.id),
        );

      this.ignoreSelect = false;
    },
    selectionChange(val) {
      /* check if selection in memory should be preserved */
      if (this.ignoreSelect === true) {
        return;
      }

      // this.selected = _.uniq(val.concat(this.selected));
      this.selected = val;
    },
  },
};
</script>
<style scoped>
#Terms {
  margin-top: 20px;
}
</style>