<template>
  <div>
    <el-table :data="fileList" border style="width: 100%" v-loading="loading">
      <el-table-column prop="name" label="名称">
        <template slot-scope="scope">
          <a href="#" @click="download(scope.row.name)">{{scope.row.name}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="length" label="大小(KB)"></el-table-column>
      <el-table-column prop="lastModified" label="最后修改时间" sortable></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      // 文件列表
      fileList: [],
      // 后端接口链接
      serverUrl: this.GLOBAL.serverSrc + "api/storage/"
    };
  },
  mounted: function() {
    this.getStorage();
  },
  methods: {
    getStorage: function() {
      var _this = this;
      // let path = this.$route.query.path;

      this.axios
        .get(this.serverUrl + "view")
        .then(function(response) {
          _this.fileList = response.data.data.fileList;
          _this.loading = false;
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    download: function(name) {
      window.open(this.serverUrl + name);
    }
  }
};
</script>