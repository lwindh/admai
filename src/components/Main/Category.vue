<template>
    <div class="category">
        <a class="category__list" @click = "clickFun($event,4)">
            <span class="category__icon category__icon__ych"></span>
            <p class="category__info">演唱会</p>
        </a>
        <a class="category__list" @click = "clickFun($event,2)">
            <span class="category__icon category__icon__gjhj"></span>
            <p class="category__info">话剧歌剧</p>
        </a>
        <a class="category__list" @click = "clickFun($event,7)">
            <span class="category__icon category__icon__tyjj"></span>
            <p class="category__info">体育</p>
        </a>
        <a class="category__list" @click = "clickFun($event,8)">
            <span class="category__icon category__icon__qz"></span>
            <p class="category__info">儿童亲子</p>
        </a>
        <a class="category__list" @click = "clickFun($event,3)">
            <span class="category__icon category__icon__zlxx"></span>
            <p class="category__info">展览休闲</p>
        </a>
        <a class="category__list" @click = "clickFun($event,1)">
            <span class="category__icon category__icon__yyh"></span>
            <p class="category__info">音乐会</p>
        </a>
        <a class="category__list" @click = "clickFun($event,5)">
            <span class="category__icon category__icon__xsxq"></span>
            <p class="category__info">曲苑杂坛</p>
        </a>
        <a class="category__list" @click = "clickFun($event,6)">
            <span class="category__icon category__icon__wdbl"></span>
            <p class="category__info">舞蹈芭蕾</p>
        </a>
        <a class="category__list" @click = "clickFun($event,10)">
            <span class="category__icon category__icon__dm"></span>
            <p class="category__info">二次元</p>
        </a>
        <a class="category__list" @click = "clickFun($event,9)">
            <span class="category__icon category__icon__lyzl"></span>
            <p class="category__info">旅游展览</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "Category",
        data(){
            return{
                type:{id:'',name:''}
                ,
            }
        },
        methods:{
            clickFun(e,index) {
                this.type.id = index;
                this.type.name = e.currentTarget.lastChild.innerHTML;// 是你绑定事件的元素
                this.$store.commit("changeType",this.type);
                this.$router.push({
                    path: `/Type`,
                })
            }
        }
    }
</script>

<style scoped>
    body{
        padding: 0;
        margin: 0;
    }
    img{
        border: 0;
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    a {
        text-decoration: none;
    }
    .category{
        margin-top: 15px!important;
        padding: 22px 0 25px 0;
        border: 1px solid #EBEBEB;
        zoom: 1;
        width: 1200px;
        height: 68px;
        margin: 0 auto;
    }
    .category__list {
        float: left;
        display: block;
        width: 120px;
        text-align: center;
    }
    .category__icon__ych {
        background-position: 0 0;
    }
    .category__icon {
        display: block;
        width: 48px;
        height: 48px;
        margin: 0 auto;
        background: url(../../assets/Main/type.png) no-repeat;
        background-size: 100% auto;
    }
    .category__info {
        font-size: 16px;
        color: #111;
        text-align: center;
        margin: 0;
    }
    .category__icon__gjhj {
        background-position: 0 -64px;
    }
    .category__icon__tyjj {
        background-position: 0 -120px;
    }
    .category__icon__qz {
        background-position: 0 -180px;
    }
    .category__icon__zlxx {
        background-position: 0 -240px;
    }
    .category__icon__yyh {
        background-position: 0 -297px;
    }
    .category__icon__xsxq {
        background-position: 0 -360px;
    }
    .category__icon__wdbl {
        background-position: 0 -420px;
    }
    .category__icon__dm {
        background-position: 0 -480px;
    }
    .category__icon__lyzl {
        background-position: 0 -540px;
    }
    .category__info:hover {
        color: #ff1268;
    }
</style>
