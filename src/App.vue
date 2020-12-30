<template>
  <v-app>
    <!-- 页头 -->
    <v-app-bar app flat color="primary" dark elevation="2">
      <v-container class="py-0 fill-height d-none d-md-flex">
        <v-avatar class="mr-10" color="blue darken-1" size="38"></v-avatar>
        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text>
          登录
        </v-btn>
        <v-btn text>
          注册
        </v-btn>
        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
      <v-container style="width: unset" class="d-flex d-md-none">
        <v-btn text>曹贼网盘</v-btn>
      </v-container>
    </v-app-bar>

    <!-- 主体 -->
    <v-main style="background: #eeeeee">
      <router-view />
    </v-main>

    <!-- 页脚 -->
    <v-footer padless dark>
      <v-card flat tile width="100%" class="primary text-center">
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
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
    links: ["首页", "关于", "团队", "服务", "博客", "联系"],
  }),
};
</script>

<style lang="scss" scoped>
.v-application a {
  color: white;
  text-decoration: none;
}
</style>

