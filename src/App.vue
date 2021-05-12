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
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(
              Object.assign(
                      {},
                      this.$store.state,
                      JSON.parse(sessionStorage.getItem('store'))
              )
      )
    }

    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    // beforeunload事件在页面刷新时先触发
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
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
