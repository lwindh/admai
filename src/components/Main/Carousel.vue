<template>
    <div class="block lunbo">
        <el-carousel trigger="click" height="320px">
            <el-carousel-item v-for="item in img_list" :key="item">
                <img :src="item">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        data(){
            return{
                img_list:[
                    require("../../assets/Main/01.png"),
                    require("../../assets/Main/02.png"),
                    require("../../assets/Main/03.png")
                ]
            }
        }
    }
</script>

<style scoped>
    .lunbo{
        position: relative;
        margin: 0 auto;
        overflow: hidden;
        width: 1200px;
        height: 320px;
    }
    .lunbo img {
        width: 1200px;
        height: 320px;
        overflow: hidden;
    }
</style>
