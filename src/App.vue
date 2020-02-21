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
