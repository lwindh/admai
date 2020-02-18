<template>
  <div id="app">
    <Header/>
    <Carousel/>
    <Category/>
    <MainDetail/>
  </div>
</template>

<script>
import Header from './components/Main/Header'
import Carousel from './components/Main/Carousel'
import Category from './components/Main/Category'
import MainDetail from './components/Main/MainDetail'
export default {
  name: 'App',
  components: {
    Header,
    Carousel,
    Category,
    MainDetail
  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }
</style>
