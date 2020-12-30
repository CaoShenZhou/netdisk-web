<template>
  <div>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="10" md="6" lg="4" xl="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>登录</v-toolbar-title>
            </v-toolbar>
            <!-- <v-img height="200px" src="../assets/login/login.jpg"></v-img> -->
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  label="手机号码"
                  prepend-icon="mdi-cellphone"
                  maxlength="11"
                  counter
                  type="text"
                  v-model="mobile"
                  :rules="mobileRules"
                  clearable
                ></v-text-field>
                <v-text-field
                  label="密码"
                  prepend-icon="mdi-lock"
                  maxlength="16"
                  counter
                  :type="showPwd ? 'text' : 'password'"
                  v-model="password"
                  :rules="passwordRules"
                  clearable
                  @keyup.enter="valid ? (dialog = true) : ''"
                  :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPwd = !showPwd"
                ></v-text-field>
                <v-card
                  max-width="130"
                  class="mx-auto text-center"
                  @click="getLoginCaptcha"
                >
                  <v-img max-width="130" :src="captchaImg"></v-img
                  >点击更换验证码
                </v-card>
                <v-text-field
                  label="验证码"
                  prepend-icon="mdi-cloud-lock"
                  maxlength="6"
                  counter
                  type="text"
                  v-model="captchaValue"
                  :rules="captchaValueRules"
                  clearable
                  @keyup.enter="login()"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="warning" @click="reset()">重置</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" :disabled="!valid" @click="login()"
                >登录</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar" top color="error">
        {{ tipsText }}
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="snackbar = false">关闭</v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>