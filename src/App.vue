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
              <router-view />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- 页脚 -->
    <v-footer fixed padless dark>
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

