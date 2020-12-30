<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12" md="2" lg="2" xl="2">
          <v-card rounded elevation="2">
            <v-list nav dense>
              <v-list-item-group color="primary">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-account-cog</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>账号设置</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="my-2"></v-divider>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-star</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>我的收藏</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-shield-lock</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>保险箱</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-delete</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>回收站</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
              <v-divider class="my-2"></v-divider>
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-exit-to-app</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>退出</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>

        <v-col>
          <v-card elevation="2">
            <!-- 工具栏 -->
            <v-toolbar elevation="0">
              <v-btn-toggle class="mr-2">
                <v-btn small outlined>
                  <span>刷新</span>
                </v-btn>
                <v-btn small outlined>
                  <span>上传</span>
                </v-btn>
                <v-btn small outlined>
                  <span>新建文件夹</span>
                </v-btn>
              </v-btn-toggle>
              <v-btn-toggle v-show="toolbar">
                <v-btn small outlined>
                  <span>下载</span>
                </v-btn>
                <v-btn small outlined>
                  <span>分享</span>
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
              hide-default-footer
            >
              <template v-slot:top>
                <!-- 搜索框 -->
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="搜索"
                  class="mx-4"
                  hide-details
                ></v-text-field>
              </template>
              <template v-slot:item.name="{ item }">
                <router-link to="/about" v-if="item.isFolder">
                  {{ item.name }}
                </router-link>
                <template v-else>{{ item.name }}</template>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      class="mr-2"
                      @click="sqlHostId = item.id"
                      v-bind="attrs"
                      v-on="on"
                    >
                      mdi-download
                    </v-icon>
                  </template>
                  <span>下载</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      class="mr-2"
                      @click="sqlHostId = item.id"
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
        </v-col>
      </v-row>
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
      { text: "操作", value: "actions", sortable: false },
      { text: "类型", value: "type", sortable: false },
      { text: "大小", value: "size", sortable: true },
      { text: "上传日期", value: "uploadTime", sortable: true },
      { text: "更新日期", value: "updateTime", sortable: true },
    ],
    // 表体
    items: [
      {
        id: "1",
        name: "测试",
        type: "文件夹",
        isFolder: true,
        size: null,
        uploadTime: "2020-12-24 01:22:55",
        updateTime: "2020-12-24 13:02:55",
      },
      {
        id: "2",
        name: "fasg.jpg",
        type: "图片",
        isFolder: false,
        size: 1024,
        uploadTime: "2020-09-24 01:22:55",
        updateTime: "2020-11-24 13:02:55",
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
