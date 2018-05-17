<template>
  <div class="login-components">
    <!--<h1 class="title">星&nbsp;辰&nbsp;系&nbsp;统</h1>-->
    <el-card class="loginBox">
      <h2 class="loginTitle">星&nbsp;辰&nbsp;系&nbsp;统</h2>
      <el-form ref="loginForm" :model="loginForm">
        <el-form-item>
          <el-input class="loginInput" placeholder="用户名" prefix-icon="icon-user"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="loginInput" type="password" placeholder="密码" prefix-icon="icon-key"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btnLogin" type="primary" @click="handleLogin">登&ensp;录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {Card, Form, FormItem, Input, Button} from 'element-ui'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin: () => {
      console.info('handleLogin:', this.$router)
      // this.$router.push({ path: '/home' })
      // this.router.push('home')
    }
  },
  components: {
    [Card.name]: Card,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input,
    [Button.name]: Button
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .login-components {
    height: 100%;
    background-image: url(../../assets/HollowRock_ZH-CN11829527473_1920x1080.jpg);
    background-position: center;
    .title {
      position: absolute;
      top: calc(50% - 230px);
      left: 50%;
      margin: -23px -111.5px;
      font-size: 46px;
      font-weight: bold;
      text-shadow: 2px 2px 4px #999999;
      color: #fff;
    }
    .loginBox {
      position: absolute;
      top: calc(50%);
      left: 50%;
      width: 400px;
      margin: -124px -200px;
      border-color: #089c9e;
      background: rgba(0, 0, 0, .3);
    }
    .loginTitle {
      line-height: 38px;
      margin-top: 3px;
      margin-bottom: 28px;
      font-size: 30px;
      font-weight: bold;
      text-shadow: 2px 2px 4px #999999;
      color: #fff;
    }
    .btnLogin {
      display: block;
      width: 100%;
      line-height: 28px;
      padding-top: 5px;
      padding-bottom: 5px;
      font-size: 20px;
      font-weight: bold;
    }
    .el-form-item {
      /*margin-bottom: 15px;*/
    }
    .el-form-item:last-child {
      margin-bottom: 0;
    }
  }
</style>
