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
                                <span class="name-city" v-for="item in otherCitys" :key="item.city" @click="clickCity($event)">{{item.city}}</span>
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
                    <a href="javascript:void(0)">
                        <img class="i-box-header i-user" src="../../assets/Main/user.png">
                    </a>
                    <div class="login-user show">
                        <RouterLink to="/Login">
                            <span class="span-box-header span-user">登录</span>
                        </RouterLink>
                    </div>
                    <div class="list-wrap">
                        <div class="list-login">
                            <a href="//passport.damai.cn/accountinfo/myinfo" class="li-login select">个人信息</a>
                            <a href="//my.damai.cn/account/accountSafe" class="li-login">账号设置</a>
                            <a href="//orders.damai.cn/orderList" class="li-login">订单管理</a>
                            <a href="//passport.damai.cn/account/logout" class="li-login out-login">退出登录</a>
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
                otherCitys:[
                    {
                        city: '上海'
                    }, {
                        city: '北京'
                    }, {
                        city: '深圳'
                    }, {
                        city: '杭州'
                    }, {
                        city: '天津'
                    }, {
                        city: '广州'
                    }, {
                        city: '成都'
                    }, {
                        city: '南京'
                    }, {
                        city: '武汉'
                    }, {
                        city: '苏州'
                    }, {
                        city: '重庆'
                    }, {
                        city: '西安'
                    }, {
                        city: '宁波'
                    }, {
                        city: '青岛'
                    }, {
                        city: '长沙'
                    }, {
                        city: '郑州'
                    }, {
                        city: '贵阳'
                    }, {
                        city: '合肥'
                    }, {
                        city: '沈阳'
                    }, {
                        city: '佛山'
                    }, {
                        city: '厦门'
                    }, {
                        city: '石家庄'
                    }, {
                        city: '济南'
                    }, {
                        city: '无锡'
                    }, {
                        city: '宜昌'
                    }, {
                        city: '大连'
                    }, {
                        city: '昆明'
                    }, {
                        city: '泉州'
                    }, {
                        city: '哈尔滨'
                    }, {
                        city: '烟台'
                    }, {
                        city: '呼和浩特'
                    }, {
                        city: '福州'
                    }, {
                        city: '温州'
                    }, {
                        city: '长春'
                    }, {
                        city: '东莞'
                    }, {
                        city: '常州'
                    }, {
                        city: '南宁'
                    }, {
                        city: '太原'
                    }
                ],
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
                ]
            }
        },
        methods:{
            enter(item){
                document.getElementsByClassName(item)[0].style.display = "block";
            },
            leave(item){
                document.getElementsByClassName(item)[0].style.display = "none";
            },
            clickFun() {
                this.$store.commit("changeType",this.type);
                this.$router.push({
                    path: `/Type`,
                })
            },
            clickCity(e) {
                this.city = e.target.innerHTML;// 是你点击的元素
                $(".city-location").html(this.city);
                $('.select-city').html(this.city);
            }
        }
    }
</script>
