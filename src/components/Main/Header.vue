<template>
    <div class="m-header">
        <div class="m-header-box">
            <a href="/">
                <img alt="大麦网" src="../../assets/Main/MainLeft.png" class="i-log">
            </a>
            <div class="location-header" @mouseenter="enter('city-header-wrap')" @mouseleave="leave('city-header-wrap')">
                <img class="i-icon-location" src="../../assets/Main/position.png" alt="定位">
                <span class="city-location">全国</span>
                <img class="i-arrow-location" src="../../assets/Main/point.png" alt="箭头">
                <div class="city-header-wrap">
                    <div class="city-header">
                        <div class="now-city">
                            <span class="title-city">当前城市:</span>
                            <span class="name-city select-city">全国</span>
                        </div>
                        <div class="hot-city">
                            <span class="title-city">热门城市:</span>
                            <div class="list-other">
                                <span class="name-city" v-for="item in hotCitys" :key="item.name" @click="clickCity($event)">{{item.name}}</span>
                            </div>
                        </div>
                        <div class="other-city">
                            <span class="title-city">其他城市:</span>
                            <div class="list-other">
                                <span class="name-city" v-for="item in otherCitys" :key="item.id" @click="clickCity($event)">{{item.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recommend-header">
                <a href="/" class="type-recommend select">首页</a>
                <a class="type-recommend" @click = "clickFun()">分类</a>
            </div>
            <div class="right-header">
                <div class="box-header user-header" @mouseenter="enter('list-wrap')" @mouseleave="leave('list-wrap')">
                    <router-link to="/Manage" v-if="user.nickName != null">
                        <img class="i-box-header i-user" :src="user.avatar">
                    </router-link>
                    <router-link to="/Login" v-else>
                        <img class="i-box-header i-user" src="../../assets/Main/user.png">
                    </router-link>
                    <router-link to="/Manage" v-if="user.nickName != null">
                        <div class="span-box-header name-user show">{{user.nickName}}</div>
                    </router-link>
                    <div class="login-user show" v-else>
                        <a @click="toLogin()">
                            <span class="span-box-header span-user">登录</span>
                        </a>
                    </div>
                    <div class="list-wrap" v-if="user.nickName != null">
                        <div class="list-login">
                            <router-link to="/Manage" class="li-login select">个人信息</router-link>
                            <router-link to="/Manage" class="li-login">账号设置</router-link>
                            <router-link to="/Manage" class="li-login">订单管理</router-link>
                            <span @click="exit()" class="li-login">退出登录</span>
                        </div>
                    </div>
                    <div class="list-wrap" v-else>
                        <div class="list-login">    <!--this.$route.path-->
                            <span @click="toLogin()" class="li-login select">个人信息</span>
                            <span @click="toLogin()" class="li-login">账号设置</span>
                            <span @click="toLogin()" class="li-login">订单管理</span>
                        </div>
                    </div>
                </div>
                <div class="box-header download-header" @mouseenter="enter('ewm-download')" @mouseleave="leave('ewm-download')">
                    <img class="i-box-header i-download" src="../../assets/Main/down.png" alt="下载">
                    <span class="span-box-header">下载</span>
                    <div class="ewm-download">
                        <img class="i-ewm" src="../../assets/Main/downB.jpg">
                    </div>
                </div>
                <div class="box-header">
                    <a href="//en.damai.cn/">
                        <img class="i-box-header" src="../../assets/Main/english.png" alt="英文站">
                        <span class="span-box-header">English</span>
                    </a>
                </div>
            </div>
            <div class="search-header">
                <img class="i-search" src="../../assets/Main/search.png" alt="搜索">
                <input class="input-search" placeholder="搜索明星、演出、体育赛事">
                <div class="btn-search">搜索</div>
                <div class="list-search-wrap">
                    <div class="list-search">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/style/mainHeader.css'
    import $ from 'jquery'
    export default {
        name: "Header",
        data(){
            return{
                type:{id:0,name:'全部'},
                city:'',
                otherCitys:[],
                hotCitys:[
                    {name:'全国'},
                    {name:'北京'},
                    {name:'上海'},
                    {name:'深圳'},
                    {name:'广州'},
                    {name:'杭州'},
                    {name:'天津'},
                    {name:'重庆'},
                    {name:'成都'},
                    {name:'中国香港'},
                ],
                user:{}
            }
        },
        mounted(){
            if(this.$store.state.cityList[0] == null){
                this.getCity();
            }else{
                this.otherCitys = this.$store.state.cityList;
            }
            this.user = this.$store.state.user;
        },
        methods:{
            enter(item){
                document.getElementsByClassName(item)[0].style.display = "block";
            },
            leave(item){
                document.getElementsByClassName(item)[0].style.display = "none";
            },
            getCity(){
                this.$axios.get("http://118.31.7.87:8080/city/list"
                ).then(res =>{
                    // console.log(res);
                    if(res.data.msg === '成功'){
                        this.otherCitys = res.data.data;
                        this.$store.commit('setCityList',res.data.data);
                    }else{
                        this.msg="用户名或密码错误";
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            clickFun() {
                this.$store.commit("changeType",this.type);
                this.$router.push({
                    path: `/Type`,
                })
            },
            clickCity(e) {
                this.city = e.target.innerHTML;// 是你点击的元素
                this.$store.commit('changeCity',this.city);
                $(".city-location").html(this.city);
                $('.select-city').html(this.city);
            },
            exit(){
                this.$store.commit("getUser",this.user);
                this.user = {};
            },
            toLogin(){
                this.$router.push({
                    path: `/Login`,
                    query:{
                        path:this.$route.path
                    }
                })
            }
        }
    }
</script>
