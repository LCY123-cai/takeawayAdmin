<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="22">
            <h3>安心外卖管理平台</h3>
          </el-col>
          <el-col :span="2">
            <h4 @click="loginOut">退出</h4>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <tap-bar></tap-bar>
        </el-aside>
        <el-main class="mainBox">
          <el-collapse-transition>
            <router-view />
          </el-collapse-transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

import TapBar from '../components/TapBar'
export default {
  name: 'Home',
  components: {
    TapBar
  },
  methods:{
    loginOut(){
      localStorage.removeItem('token')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
