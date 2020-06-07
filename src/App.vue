<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/shopcart">ShopCart</router-link>
        </div>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  #app{
   .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    .nav{
    width: 100%;
    text-align: center;
  }
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
}
}
</style>
