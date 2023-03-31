<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menu />
      <el-container>
        <el-main>
          Main
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>


  </div>
  <!-- <div class="hello"> -->
  <!--   <h1>hello</h1>
    <el-button>hello</el-button>
    <el-button type="info">hello</el-button>
    <el-button type="primary">hello</el-button>
    <el-button type="danger">hello</el-button>
    <el-button type="success">hello</el-button>
    <el-button type="warning">hello</el-button>
    <el-tag>hahahahaha</el-tag>
    <i class="fa fa-users"></i> -->
  <!-- </div> -->
</template>

<script>
import Header from './common/Header.vue';
import Menu from './common/Menu.vue';
import Footer from './common/Footer.vue';

export default {
  components: {
    Header,
    Menu,
    Footer
  }, data() {
    return {

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  width: 100%;
  height: 100%;

  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
  }
}

/* .el-button {
  color: red;
} */
</style>
