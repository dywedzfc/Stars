<template>
  <div class="desktop-components">
    <el-container class="desktop-container">
      <el-header class="desktop-header" style="height: 28px;">
        <el-menu default-active="1" class="desktopTopToolMenu" mode="horizontal">
          <el-menu-item class="logo el-icon-edit" index="0"></el-menu-item>
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4">订单管理</el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="desktop-main" ref="desktopMain">
        <div class="desktopItem" v-for="(item, index) in desktopItemList" :key="'desktopItemList_' + index">
          <div class="desktopCard" v-if="item.img && item.name">
            <img class="desktopItemImage" :src="item.img">
            <div class=""><span v-text="item.name"></span></div>
          </div>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import {Container, Header, Main, Footer, Menu, MenuItem, Submenu} from 'element-ui'
export default {
  name: 'Desktop',
  data () {
    return {
      desktopRowNum: 0,
      desktopColNum: 0,
      desktopItemList: [
        {name: '', img: ''},
        {name: 'Lucy', img: '../assets/logo.png'},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: 'jeak', img: '../assets/logo.png'},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''},
        {name: '', img: ''}
      ]
    }
  },
  mounted () {
    let _this = this
    this.calculatedQuantity()
    window.resize = () => {
      console.info('123123123')
      _this.calculatedQuantity()
    }
  },
  methods: {
    calculatedQuantity () {
      let desktopMain = this.$refs.desktopMain.$el
      let desktopMainWidth = desktopMain.offsetWidth
      let desktopMainHeight = desktopMain.offsetHeight
      this.desktopRowNum = Math.floor(desktopMainHeight / 100)
      this.desktopColNum = Math.floor(desktopMainWidth / 75)
      console.info('desktopMain:', this.desktopRowNum, this.desktopColNum)
    },
    desktopItemPosition (data) {
      let desktopItemList = []
      let maxLength = this.desktopRowNum * this.desktopColNum
      for (let i = 0; i < data.length && data.length <= maxLength; i++) {
        let item = data[i]
        if (item.position) {
          let position = item.position.split(',')
          let index = position[0] * this.desktopColNum + position[0]
          desktopItemList[index] = item
        }
      }
      for (let row = 0; row < this.desktopRowNum; row++) {
        desktopItemList.push([])
        for (let col = 0; col < this.desktopColNum; col++) {
          desktopItemList[row].push(null)
        }
      }
    }
  },
  components: {
    [Container.name]: Container,
    [Header.name]: Header,
    [Main.name]: Main,
    [Footer.name]: Footer,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Submenu.name]: Submenu
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  .desktop-components {
    height: 100%;
  }
  .desktop-container {
    height: 100%;
  }
  .desktop-header {
    padding: 0;
  }
  .desktop-header .el-menu--horizontal>.el-menu-item {
    height: 28px;
    line-height: 28px;
  }
  .desktop-header .el-menu--horizontal>.el-submenu .el-submenu__title {
    height: 28px;
    line-height: 28px;
  }
</style>
<style lang="less" rel="stylesheet/less" scoped>
  .desktop-components {
    background-image: url(../assets/HollowRock_ZH-CN11829527473_1920x1080.jpg);
    background-position: center;
    .desktopTopToolMenu {
      background: rgba(255,255,255,0.85);
    }
    .logo {
      width: 40px;
      padding: 0;
      transition: none;
      &.is-active {
        border: none;
      }
    }
    .desktop-main {
      padding: 0;
      .desktopItem {
        float: left;
        width: 75px;
        height: 100px;
        margin: 4px;
      }
      .desktopCard {
        width: 100%;
        height: 100%;
        padding: 5px 2px;
      }
      .desktopItemImage {
        width: 65px;
        height: 65px;
        margin-bottom: 5px;
      }
    }
  }
</style>
