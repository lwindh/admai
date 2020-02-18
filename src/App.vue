<template>
  <div id="app">
    <Header/>
    <Carousel/>
  </div>
</template>

<script>
import Header from './components/Main/Header'
import Carousel from './components/Main/Carousel'
export default {
  name: 'App',
  components: {
      Header,
      Carousel
  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }
</style>
