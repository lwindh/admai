<template>
    <div class="dm-content-wrap">
        <div class="dm-content" style="display: block;">
            <div class="head">
                <span class="head-title">演唱会</span>
                <a target="_blank">
                    <span class="head-more" @click = "clickFun(4,'演唱会')">查看全部</span>
                </a>
            </div>
            <div class="box">
                <a @click="toShow(concertShowList[6].id)" class="box-left" target="_blank">
                    <img class="box-left__bg" :src="concertShowList[6].cover">
                    <div class="box-left__info">
                        <div class="title">{{concertShowList[6].title}}</div>
                        <div class="details">¥{{concertShowList[6].money}}<span>起</span></div>
                    </div>
                </a>
                <div class="box-right">
                    <a @click="toShow(i.id)" class="box-right__item" target="_blank" v-for="i in concertShowList" :key="i.id">
                        <div class="itemimg">
                            <img :src="i.cover">
                        </div>
                        <div class="iteminfo" >
                            <div class="title" :title="i.title">{{i.title}}</div>
                            <div class="venue">{{i.location.detail}}</div>
                            <div class="showtime">{{new Date(i.time).toLocaleString()}}</div>
                            <div class="showtime"></div>
                            <div class="price">¥{{i.money}}<span>起</span></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="dm-content" style="display: block;">
            <div class="head">
                <span class="head-title">话剧歌剧</span>
                <a target="_blank">
                    <span class="head-more" @click = "clickFun(2,'话剧歌剧')">查看全部</span>
                </a>
            </div>
            <div class="box">
                <a @click="toShow(song[6].id)" class="box-left" target="_blank">
                    <img class="box-left__bg" :src="song[6].cover">
                    <div class="box-left__info">
                        <div class="title">{{song[6].title}}</div>
                        <div class="details">¥{{song[6].money}}<span>起</span></div>
                    </div>
                </a>
                <div class="box-right">
                    <a @click="toShow(i.id)" class="box-right__item" target="_blank" v-for="i in song" :key="i.id">
                        <div class="itemimg">
                            <img :src="i.cover">
                        </div>
                        <div class="iteminfo" >
                            <div class="title" :title="i.title">{{i.title}}</div>
                            <div class="venue">{{i.location.detail}}</div>
                            <div class="showtime">{{new Date(i.time).toLocaleString()}}</div>
                            <div class="showtime"></div>
                            <div class="price">¥{{i.money}}<span>起</span></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="dm-content" style="display: block;">
            <div class="head">
                <span class="head-title">体育</span>
                <a target="_blank">
                    <span class="head-more" @click = "clickFun(7,'体育')">查看全部</span>
                </a>
            </div>
            <div class="box">
                <a @click="toShow(pe[6].id)" class="box-left" target="_blank">
                    <img class="box-left__bg" :src="pe[6].cover">
                    <div class="box-left__info">
                        <div class="title">{{pe[6].title}}</div>
                        <div class="details">¥{{pe[6].money}}<span>起</span></div>
                    </div>
                </a>
                <div class="box-right">
                    <a @click="toShow(i.id)" class="box-right__item" v-for="i in pe" :key="i.id">
                        <div class="itemimg">
                            <img :src="i.cover">
                        </div>
                        <div class="iteminfo" >
                            <div class="title" :title="i.title">{{i.title}}</div>
                            <div class="venue">{{i.location.detail}}</div>
                            <div class="showtime">{{new Date(i.time).toLocaleString()}}</div>
                            <div class="showtime"></div>
                            <div class="price">¥{{i.money}}<span>起</span></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="dm-content" style="display: block;">
            <div class="head">
                <span class="head-title">儿童亲子</span>
                <a target="_blank">
                    <span class="head-more" @click = "clickFun(8,'儿童亲子')">查看全部</span>
                </a>
            </div>
            <div class="box">
                <a @click="toShow(child[6].id)" class="box-left" target="_blank">
                    <img class="box-left__bg" :src="child[6].cover">
                    <div class="box-left__info">
                        <div class="title">{{child[6].title}}</div>
                        <div class="details">¥{{child[6].money}}<span>起</span></div>
                    </div>
                </a>
                <div class="box-right">
                    <a @click="toShow(i.id)" class="box-right__item" target="_blank" v-for="i in child" :key="i.id">
                        <div class="itemimg">
                            <img :src="i.cover">
                        </div>
                        <div class="iteminfo" >
                            <div class="title" :title="i.title">{{i.title}}</div>
                            <div class="venue">{{i.location.detail}}</div>
                            <div class="showtime">{{new Date(i.time).toLocaleString()}}</div>
                            <div class="showtime"></div>
                            <div class="price">¥{{i.money}}<span>起</span></div>
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
                concertShowList:[],
                li:{id:'',name:''},
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
                ],
                pe:[],
                song:[],
                child:[],
            }
        },
        mounted(){
            this.getSong(2);
            this.getItem(7);
            this.getShow(4);
            this.getCf(8);
        },
        methods:{
            clickFun(val,index) {
                this.li.id = val;
                this.li.name = index;
                this.$store.commit("changeType",this.li);
                this.$router.push({
                    path: `/Type`,
                })
            },
            getShow(val){
                this.$axios({
                    method: 'post',
                    url: "http://118.31.7.87:8080/perform/recommend/"+val,
                }).then(res =>{
                    if(res.data.msg === '成功'){
                        this.concertShowList = res.data.data;
                    }else{
                        this.$message.error(res.data.msg);
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            getItem(val){
                this.$axios({
                    method: 'post',
                    url: "http://118.31.7.87:8080/perform/recommend/"+val,
                }).then(res =>{
                    if(res.data.msg === '成功'){
                        this.pe = res.data.data;
                    }else{
                        this.$message.error(res.data.msg);
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            getSong(val){
                this.$axios({
                    method: 'post',
                    url: "http://118.31.7.87:8080/perform/recommend/"+val,
                }).then(res =>{
                    if(res.data.msg === '成功'){
                        this.song = res.data.data;
                    }else{
                        this.$message.error(res.data.msg);
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            getCf(val){
                this.$axios({
                    method: 'post',
                    url: "http://118.31.7.87:8080/perform/recommend/"+val,
                }).then(res =>{
                    if(res.data.msg === '成功'){
                        this.child = res.data.data;
                    }else{
                        this.$message.error(res.data.msg);
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            toShow(val){
                console.log(val);
                this.$store.commit('getId',val);
                this.$router.push({
                    path: `/Perform`
                });
            },
        }
    }
</script>

