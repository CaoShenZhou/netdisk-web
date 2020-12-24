<template>
  <v-app>
    <!-- 页头 -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>曹贼网盘</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- 主体 -->
    <v-main>
      <router-view> </router-view>
    </v-main>

    <!-- 页脚 -->
    <v-footer fixed padless dark>
      <v-card flat tile width="100%" class="primary text-center">
        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
          {{ link }}
        </v-btn>
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Mr.Cao</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    icons: ["mdi-github", "mdi-qqchat", "mdi-wechat", "mdi-google"],
    links: ["首页", "关于", "团队", "服务", "博客", "联系"],
    items: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "About", icon: "mdi-forum" },
    ],
  }),
};
</script>
