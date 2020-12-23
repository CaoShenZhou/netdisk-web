module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '曹贼网盘'
        return args
      })
  }
};
