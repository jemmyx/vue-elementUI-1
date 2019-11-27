<template>
  <div>
    <el-input
      placeholder="Please input"
      v-model="input"
      ref="myInput"
      @keyup.native="testEvent"
      @keydown.native="testEvent2"
    >
    </el-input>

    <el-input
      ref="inputSearch"
      placeholder="Search..."
      v-model="search"
      @keyup.native="handlerSearchBlur"
      @keydown.native="handleSearch"
    ></el-input>
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
    </el-table>
  </div>
</template>

<script>
// const axios = require("axios");
// import _ from "lodash";

export default {
  data() {
    return {
      input: "tagada",
      tableData: [
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
          status: "no"
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false,
          status: "no"
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true,
          status: "yes"
        }
      ],
      selected: [],
      search: "",
      ignoreSelect: false,
      searchFilter() {
        console.log("searchFilter");
        return this.tableData.filter(
          d => d.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
        );
      },
      error: false,
      loading: false
    };
  },
  mounted() {},
  computed: {
    getDefinitions() {
      console.log("getDefinitions");
      return this.searchFilter();
    }
  },
  methods: {
    testEvent() {
      console.log("testEvent fired");
    },
    testEvent2() {
      console.log("testEvent 2 fired");
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

    handleSearch(e) {
      console.log("handleSearch");
      /* observer on user typing keyboard */
      this.ignoreSelect = true;
      console.log("typing... ", e);
    },
    handlerSearchBlur() {
      console.log("handlerSearchBlur");

      for (let def of this.tableData)
        this.$refs.table.toggleRowSelection(
          def,
          !!this.selected.find(s => s.id === def.id)
        );

      this.ignoreSelect = false;
    },
    selectionChange(val) {
      /* check if selection in memory should be preserved */
      if (this.ignoreSelect === true) {
        console.log("ignore selection change");
        return;
      }

      console.log("selectionChange", val);
      // this.selected = _.uniq(val.concat(this.selected));
      this.selected = val;
    }
  }
};
</script>
