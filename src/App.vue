<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less" rel="stylesheet/less">
  @import "assets/reset.css";
  @import "assets/iconfont.css";

  html, body, #app {
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .loginInput input {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.04);
  }
</style>
