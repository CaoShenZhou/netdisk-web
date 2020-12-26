<template>
  <div class="home">
    <v-container>
      <v-card elevation="0">
        <!-- 工具栏 -->
        <v-toolbar elevation="0">
          <v-btn small outlined class="mr-2">
            <span>刷新</span>
          </v-btn>
          <v-btn small outlined class="mr-2">
            <span>上传</span>
          </v-btn>
          <v-btn small outlined class="mr-2">
            <span>新建文件夹</span>
          </v-btn>
          <v-btn-toggle v-show="toolbar">
            <v-btn small outlined>
              <span>下载</span>
            </v-btn>
            <v-btn small outlined>
              <span>删除</span>
            </v-btn>
            <v-btn small outlined>
              <span>移动到</span>
            </v-btn>
            <v-btn small outlined>
              <span>复制到</span>
            </v-btn>
          </v-btn-toggle>
        </v-toolbar>
        <!-- 文件列表 -->
        <v-data-table
          :headers="headers"
          :items="items"
          :loading="loading"
          :search="search"
          item-key="id"
          show-select
          v-model="selected"
          :items-per-page="-1"
        >
          <template v-slot:top>
            <!-- 搜索框 -->
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="搜索"
              single-line
              class="mx-4"
              hide-details
            ></v-text-field>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  large
                  class="mr-2"
                  @click="
                    randomChar = $common.getRandomChar(4);
                    delSqlHostdialog = true;
                    sqlHostId = item.id;
                  "
                  v-bind="attrs"
                  v-on="on"
                >
                  mdi-delete
                </v-icon>
              </template>
              <span>删除</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    // 搜索内容
    search: "",
    // 是否加载中
    loading: false,
    // 选中项
    selected: [],
    // 是否显示工具栏
    toolbar: false,
    // 表头
    headers: [
      { text: "名称", align: "start", value: "name", sortable: false },
      { text: "类型", value: "type", sortable: false },
      { text: "大小", value: "size", sortable: false },
      { text: "上传日期", value: "uploadTime", sortable: false },
      { text: "更新日期", value: "updateTime", sortable: false },
      { text: "操作", value: "actions", sortable: false },
    ],
    // 表体
    items: [
      {
        id: "1",
        name: "测试",
        type: "文件夹",
        size: null,
        uploadTime: "2020-12-24 01:22:55",
        updateTime: "2020-13-24 13:02:55",
      },
      {
        id: "2",
        name: "测试",
        type: "图片",
        size: 1024,
        uploadTime: "2020-12-24 01:22:55",
        updateTime: "2020-13-24 13:02:55",
      },
    ],
  }),
  watch: {
    selected() {
      this.selected.length == 0
        ? (this.toolbar = false)
        : (this.toolbar = true);
    },
  },
};
</script>
