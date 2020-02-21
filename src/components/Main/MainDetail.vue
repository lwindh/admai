<template>
    <div class="dm-content-wrap">
        <div class="dm-content" style="display: block;" v-for="j in item" :key="j.title">
            <div class="head">
                <span class="head-title">{{j.title}}</span>
                <a target="_blank">
                    <span class="head-more" @click = "clickFun($event,j.title)">查看全部</span>
                </a>
            </div>
            <div class="box">
                <a href="" class="box-left" target="_blank">
                    <img class="box-left__bg" :src="j.img">
                    <div class="box-left__info">
                        <div class="title">{{j.title1}}</div>
                        <div class="details">¥{{j.price}}<span>起</span></div>
                    </div>
                </a>
                <div class="box-right">
                    <a href="" class="box-right__item" target="_blank" v-for="i in j.child" :key="i.title">
                        <div class="itemimg">
                            <img :src="i.img">
                        </div>
                        <div class="iteminfo" >
                            <div class="title" :title="i.title">{{i.title}}</div>
                            <div class="venue">{{i.position}}</div>
                            <div class="showtime">{{i.time}}</div>
                            <div class="showtime"></div>
                            <div class="price">¥{{i.price}}<span>起</span></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/style/MainContent.css'
    export default {
        name: "MainContent",
        data(){
            return{
                item:[
                    {
                        title:'演唱会',
                        img:require("../../assets/Main/list/11.jpg"),
                        title1:'蔡依林 Ugly Beauty 2020 世界巡回演唱会佛山站 ',
                        price:'399',
                        child:[
                            {img:require("../../assets/Main/list/12.jpg"),title:'“My Love刘德华巡回演唱会 2020”官方周边商品', price:'295', position:'大麦网北京站', time:'2020.01.11-2021.01.09'},
                            {img:require("../../assets/Main/list/13.jpg"),title:'My Beautiful Live 杨千嬅世界巡回演唱会-厦门站', price:'280', position:'厦门体育中心体育场', time:'2020.04.11 周六 19:30'},
                            {img:require("../../assets/Main/list/14.jpg"),title:'刘若英2020「飞行日」巡回演唱会郑州站', price:'480', position:'郑州奥林匹克体育中心体育馆', time:'2020.04.11 周六 19:00'},
                            {img:require("../../assets/Main/list/15.jpg"),title:'2020张杰「未·LIVE」巡回演唱会 合肥站', price:'280', position:'合肥体育中心体育场', time:'2020.04.11 周六 19:00'},
                            {img:require("../../assets/Main/list/16.jpg"),title:'2020陈粒“洄游”全国巡回演唱会-南京站', price:'399', position:'南京奥体中心体育馆', time:'2020.04.18 周六 19:30'},
                            {img:require("../../assets/Main/list/17.jpg"),title:'2020任贤齐【齐迹】巡回演唱会-沈阳站', price:'399', position:'辽宁体育馆(奥体中心西侧)', time:'2020.05.23 周六 19:30'}
                        ]
                    },
                    {
                        title:'话剧歌剧',
                        img:require("../../assets/Main/list/21.jpg"),
                        title1:'蔡依林 Ugly Beauty 2020 世界巡回演唱会佛山站 ',
                        price:'399',
                        child:[
                            {img:require("../../assets/Main/list/22.jpg"),title:'“My Love刘德华巡回演唱会 2020”官方周边商品', price:'295', position:'大麦网北京站', time:'2020.01.11-2021.01.09'},
                            {img:require("../../assets/Main/list/23.jpg"),title:'My Beautiful Live 杨千嬅世界巡回演唱会-厦门站', price:'280', position:'厦门体育中心体育场', time:'2020.04.11 周六 19:30'},
                            {img:require("../../assets/Main/list/24.jpg"),title:'刘若英2020「飞行日」巡回演唱会郑州站', price:'480', position:'郑州奥林匹克体育中心体育馆', time:'2020.04.11 周六 19:00'},
                            {img:require("../../assets/Main/list/25.jpg"),title:'2020张杰「未·LIVE」巡回演唱会 合肥站', price:'280', position:'合肥体育中心体育场', time:'2020.04.11 周六 19:00'},
                            {img:require("../../assets/Main/list/26.jpg"),title:'2020陈粒“洄游”全国巡回演唱会-南京站', price:'399', position:'南京奥体中心体育馆', time:'2020.04.18 周六 19:30'},
                            {img:require("../../assets/Main/list/27.jpg"),title:'2020任贤齐【齐迹】巡回演唱会-沈阳站', price:'399', position:'辽宁体育馆(奥体中心西侧)', time:'2020.05.23 周六 19:30'}
                        ]
                    },
                    {
                        title:'体育',
                        img:require("../../assets/Main/list/31.jpg"),
                        title1:'蔡依林 Ugly Beauty 2020 世界巡回演唱会佛山站 ',
                        price:'399',
                        child:[
                            {img:require("../../assets/Main/list/32.jpg"),title:'“My Love刘德华巡回演唱会 2020”官方周边商品', price:'295', position:'大麦网北京站', time:'2020.01.11-2021.01.09'},
                            {img:require("../../assets/Main/list/33.jpg"),title:'My Beautiful Live 杨千嬅世界巡回演唱会-厦门站', price:'280', position:'厦门体育中心体育场', time:'2020.04.11 周六 19:30'},
                            {img:require("../../assets/Main/list/34.jpg"),title:'刘若英2020「飞行日」巡回演唱会郑州站', price:'480', position:'郑州奥林匹克体育中心体育馆', time:'2020.04.11 周六 19:00'},
                            {img:require("../../assets/Main/list/35.jpg"),title:'2020张杰「未·LIVE」巡回演唱会 合肥站', price:'280', position:'合肥体育中心体育场', time:'2020.04.11 周六 19:00'},
                            {img:require("../../assets/Main/list/36.jpg"),title:'2020陈粒“洄游”全国巡回演唱会-南京站', price:'399', position:'南京奥体中心体育馆', time:'2020.04.18 周六 19:30'},
                            {img:require("../../assets/Main/list/37.jpg"),title:'2020任贤齐【齐迹】巡回演唱会-沈阳站', price:'399', position:'辽宁体育馆(奥体中心西侧)', time:'2020.05.23 周六 19:30'}
                        ]
                    },
                    {
                        title:'儿童亲子',
                        img:require("../../assets/Main/list/41.jpg"),
                        title1:'蔡依林 Ugly Beauty 2020 世界巡回演唱会佛山站 ',
                        price:'399',
                        child:[
                            {img:require("../../assets/Main/list/42.jpg"),title:'“My Love刘德华巡回演唱会 2020”官方周边商品', price:'295', position:'大麦网北京站', time:'2020.01.11-2021.01.09'},
                            {img:require("../../assets/Main/list/43.jpg"),title:'My Beautiful Live 杨千嬅世界巡回演唱会-厦门站', price:'280', position:'厦门体育中心体育场', time:'2020.04.11 周六 19:30'},
                            {img:require("../../assets/Main/list/44.jpg"),title:'刘若英2020「飞行日」巡回演唱会郑州站', price:'480', position:'郑州奥林匹克体育中心体育馆', time:'2020.04.11 周六 19:00'},
                            {img:require("../../assets/Main/list/45.jpg"),title:'2020张杰「未·LIVE」巡回演唱会 合肥站', price:'280', position:'合肥体育中心体育场', time:'2020.04.11 周六 19:00'},
                            {img:require("../../assets/Main/list/46.jpg"),title:'2020陈粒“洄游”全国巡回演唱会-南京站', price:'399', position:'南京奥体中心体育馆', time:'2020.04.18 周六 19:30'},
                            {img:require("../../assets/Main/list/47.jpg"),title:'2020任贤齐【齐迹】巡回演唱会-沈阳站', price:'399', position:'辽宁体育馆(奥体中心西侧)', time:'2020.05.23 周六 19:30'}
                        ]
                    }
                ],
                li:{id:0,name:''},
                type:[
                    {id:1,name:'音乐会'},
                    {id:2,name:'话剧歌剧'},
                    {id:3,name:'展览休闲'},
                    {id:4,name:'演唱会'},
                    {id:5,name:'曲苑杂坛'},
                    {id:6,name:'舞蹈芭蕾'},
                    {id:7,name:'体育'},
                    {id:8,name:'儿童亲子'},
                    {id:9,name:'旅游展览'},
                    {id:10,name:'二次元'},
                ]
            }
        },
        methods:{
            clickFun(e,index) {
                const res = this.type.find((item) => {
                    if(item.name === index)
                    return item.id;
                });
                this.li.id = res.id;
                this.li.name = index;
                this.$store.commit("changeType",this.li);
                this.$router.push({
                    path: `/Type`,
                })
            }
        }
    }
</script>

