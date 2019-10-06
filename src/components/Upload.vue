<template>
  <div>
    <center>
      <el-upload drag :action="serverUrl" name="files" multiple :beforeUpload="beforeAvatarUpload">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
          <br />单文件大小不可超过3G,多文件大小不可超过10G
          <span style="color: red">
            <br />上传的文件名如果与网盘文件名相同则会覆盖
          </span>
        </div>
      </el-upload>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 后端接口链接
      serverUrl: this.GLOBAL.serverSrc + "api/storage/upload/multi"
    };
  },
  mounted: function() {},
  methods: {
    beforeAvatarUpload(file) {
      const isLt3G = file.size / 1024 / 1024 <= 3072;
      if (!isLt3G) {
        this.$message({
          message: "上传文件大小不能超过 3G!",
          type: "warning"
        });
      }
      return isLt3G;
    }
  }
};
</script>