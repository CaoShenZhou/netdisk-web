<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="navigation=1">首页</el-menu-item>
      <el-menu-item index="2" @click="navigation=2">下载</el-menu-item>
      <el-menu-item index="3" @click="navigation=3">上传</el-menu-item>
    </el-menu>

    <div v-if="navigation == 1">
      <center>
        <h1>网盘</h1>
      </center>
    </div>
    <div v-if="navigation == 2">
      <download></download>
    </div>
    <div v-if="navigation == 3">
      <upload></upload>
    </div>
  </div>
</template>

<script>
import Download from "../components/Download";
import Upload from "../components/Upload";
export default {
  data() {
    return {
      navigation: 1,
      activeIndex: "1"
    };
  },
  methods: {},
  components: {
    Download,
    Upload
  }
};
</script>
