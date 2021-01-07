module.exports = {
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "https://zhsw.sxzltech.com/",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
