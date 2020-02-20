<template>
    <div>
        <Header/>
        <Carousel/>
        <Category/>
        <MainDetail/>
        <BackTop/>
    </div>
</template>

<script>
    import Header from '@/components/Main/Header'
    import Carousel from '@/components/Main/Carousel'
    import Category from '@/components/Main/Category'
    import MainDetail from '@/components/Main/MainDetail'
    import BackTop from "@/components/BackTop";
    export default {
        name: 'index',
        components: {
            Header,
            Carousel,
            Category,
            MainDetail,
            BackTop
        }
    }
</script>

<style>
    body{
        padding: 0;
        margin: 0;
    }
</style>
