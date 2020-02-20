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
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=全国">全国</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=北京">北京</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=上海">上海</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=深圳">深圳</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=广州">广州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=杭州">杭州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=天津">天津</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=重庆">重庆</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=成都">成都</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=中国香港">中国香港</span>
                            </div>
                        </div>
                        <div class="other-city">
                            <span class="title-city">其他城市:</span>
                            <div class="list-other">
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=上海">上海</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=北京">北京</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=深圳">深圳</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=杭州">杭州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=天津">天津</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=广州">广州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=成都">成都</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=南京">南京</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=武汉">武汉</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=苏州">苏州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=重庆">重庆</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=西安">西安</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=宁波">宁波</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=青岛">青岛</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=长沙">长沙</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=郑州">郑州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=贵阳">贵阳</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=合肥">合肥</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=沈阳">沈阳</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=佛山">佛山</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=厦门">厦门</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=石家庄">石家庄</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=济南">济南</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=无锡">无锡</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=宜昌">宜昌</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=大连">大连</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=昆明">昆明</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=泉州">泉州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=哈尔滨">哈尔滨</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=烟台">烟台</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=呼和浩特">呼和浩特</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=福州">福州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=温州">温州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=长春">长春</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=东莞">东莞</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=常州">常州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=南宁">南宁</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=太原">太原</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=兴安盟">兴安盟</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=中国香港">中国香港</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=珠海">珠海</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=株洲">株洲</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=国际及港澳台">国际及港澳台</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=惠州">惠州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=金华">金华</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=舟山">舟山</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=保定">保定</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=南昌">南昌</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=绍兴">绍兴</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=中国澳门">中国澳门</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=海口">海口</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=黄冈">黄冈</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=兰州">兰州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=陵水">陵水</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=柳州">柳州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=南通">南通</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=泰州">泰州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=潍坊">潍坊</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=徐州">徐州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=河源">河源</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=湖州">湖州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=丽水">丽水</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=马鞍山">马鞍山</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=绵阳">绵阳</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=台州">台州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=乌鲁木齐">乌鲁木齐</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=扬州">扬州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=银川">银川</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=鞍山">鞍山</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=桂林">桂林</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=衡水">衡水</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=江门">江门</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=廊坊">廊坊</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=聊城">聊城</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=三亚">三亚</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=蚌埠">蚌埠</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=包头">包头</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=滨州">滨州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=朝阳">朝阳</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=大理">大理</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=大同">大同</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=鄂尔多斯">鄂尔多斯</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=抚顺">抚顺</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=赣州">赣州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=鹤壁">鹤壁</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=黄石">黄石</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=吉林">吉林</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=金昌">金昌</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=荆州">荆州</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=连云港">连云港</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=洛阳">洛阳</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=南充">南充</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=秦皇岛">秦皇岛</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=宿迁">宿迁</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=唐山">唐山</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=芜湖">芜湖</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=武威">武威</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=西宁">西宁</span>
                                <span class="name-city" data-spm="dselectcity&amp;clicktitle=伊春">伊春</span>
                                <span class="name-city">岳阳</span>
                                <span class="name-city">湛江</span>
                                <span class="name-city">张家口</span>
                                <span class="name-city">肇庆</span>
                                <span class="name-city">中山</span>
                                <span class="name-city">驻马店</span>
                                <span class="name-city">淄博</span>
                                <span class="name-city">遵义</span>
                                <span class="name-city">国际及港澳台</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recommend-header">
                <a href="/" class="type-recommend select">首页</a>
                <router-link to="/Type" class="type-recommend">分类</router-link>
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
    export default {
        name: "Header",
        methods:{
            enter(item){
                document.getElementsByClassName(item)[0].style.display = "block";
            },
            leave(item){
                document.getElementsByClassName(item)[0].style.display = "none";
            }
        }
    }
</script>
