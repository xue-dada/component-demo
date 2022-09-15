<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ rating }}</h1>
    <el-button type="warning" @click="saveAll()">保存全部</el-button>
    <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName">
      <el-table-column
          prop="id"
          label="ID"
          width="180">
        <template slot-scope="scope">
          <el-input type="text" v-model="scope.row.id" v-show="scope.row.iseditor"/>
          <span v-show="!scope.row.iseditor">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
        <template slot-scope="scope">
          <el-input type="text" v-model="scope.row.name" v-show="scope.row.iseditor"/>
          <span v-show="!scope.row.iseditor">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="地址"
          width="180">
        <template slot-scope="scope">
          <el-input type="text" v-model="scope.row.date" v-show="scope.row.iseditor"/>
          <span v-show="!scope.row.iseditor">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="warning" @click="edit(scope.row, scope)">编辑</el-button>
          <el-button type="danger" @click="save(scope.row)">保存</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: ["title", "rating"],
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    edit(row, index) {
      console.log("123")
      console.log(row.iseditor)
      row.iseditor = true;
    },
    save(row, index) {
      console.log("456")
      console.log(row.iseditor)
      row.iseditor = false;
    },
    saveAll() {
      this.$http.post("/user/list/save", this.tableData).then((response) => {
        console.log(response)
      })
    }
  },
  created() {
    this.$http("/user/list").then((response) => {
      response.data.forEach(item => {
        item.iseditor = false;
      })
      this.tableData = response.data
      console.log(this.tableData)
    })
  },
  data() {
    return {
      tableData: []
    }
  },

}
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>