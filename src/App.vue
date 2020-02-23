<template>
  <div id="app">
    <Index/>
  </div>
</template>

<script>
import Index from '@/pages/index'
export default {
  name: 'App',
  components: {
    Index
  },
  created () {
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      /*console.log("存vuex前的数据")
      console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))*/

      sessionStorage.setItem("store", JSON.stringify(this.$store.state))

      /*console.log("存vuex后的数据")
      console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))*/
    })
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      /*console.log("读取sessionstorage前的数据")
      console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))*/

      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))

      /*console.log("读取sessionstorage后的数据")
      console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))*/
    }
  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }
  body, html {
    font-size: 14px;
    font-family: "\5FAE\8F6F\96C5\9ED1";
  }
  img{
    border: 0;
  }
  a {
    text-decoration: none;
  }
</style>
