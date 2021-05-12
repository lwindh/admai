<template>
    <div class="search-box">
        <div class="search-box-top">
            <span v-if="this.$route.query.searchItem !== undefined">搜索“<span class="search-box-keyword">{{this.$route.query.searchItem}}</span>”，</span>
            共<span class="search-box-keyword">{{total}}</span>个商品
        </div>
        <div class="search-box-flex">
            <div class="search-main">
                <div class="search-factor">
                    <div class="factor-item">
                        <span class="factor-title">
                            城 市：
                        </span>
                        <div class="factor-content">
                            <div class="factor-selected">当前选中城市
                                <span class="factor-selected-city">全国</span>
                            </div>
                            <div class="factor-content-main">
                                <span class="factor-content-item city factor-content-item-active" @click="changCityStatus('全国',$event,0)">全国</span>
                                <div class="factor-content">
                                    <span class="factor-content-item city" @click="changCityStatus(item.name,$event,item.id)" v-for="item in city" :key="item.id">{{item.name}}</span>
                                </div>
                                <!--<div class="factor-more">更多</div>-->
                            </div>
                        </div>
                    </div>
                    <div class="factor-item">
                        <span class="factor-title">
                            分 类：
                        </span>
                        <div class="factor-content">
                            <div class="factor-content-main">
                                <span class="factor-content-item type factor-content-item-active" @click="changeTypeStatus('type',0)">全部</span>
                                <div class="factor-content">
                                    <span class="factor-content-item type" @click="changeTypeStatus('type',item.id)" v-for="item in type" :key="item.id">{{item.name}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="factor-item" v-if="subclass.length !== 0">
                        <span class="factor-title">
                            子 类：
                        </span>
                        <div class="factor-content">
                            <div class="factor-content-main">
                                <span class="factor-content-item subclass1 factor-content-item-default factor-content-item-active" @click="changeTypeStatus('subclass1',0)">全部</span>
                                <div class="factor-content" @click="changeTypeStatus('subclass1',index+1)" v-for="(item,index) in subclass" :key="item.id">
                                    <span class="factor-content-item subclass1">{{item.name}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="factor-item">
                        <span class="factor-title">
                            时 间：
                        </span>
                        <div class="factor-content">
                            <div class="factor-content-main">
                                <span class="factor-content-item time factor-content-item-active" @click="changeTypeStatus('time',0)">全部</span>
                                <div class="factor-content">
                                    <span class="factor-content-item time" @click="changeTypeStatus('time',item.id)" v-for="item in time" :key="item.id">{{item.name}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="search-sort search-main-sort">
                    <div class="search-sort_fl">
                        <span class="search-sort-item" @click="changeTabStatus('search-sort-item',item.id)" v-for="item in tab" :key="item.id">{{item.name}}</span>
                    </div>
                    <div class="pagination-top search-sort_fr">
                        <a @click="handleClick('prev')" class="sort__prev sort__prev_gray"></a>
                        <div class="sort__num">
                            <span>{{currentPage}}</span>/<span>{{page}}</span>
                        </div>
                        <a @click="handleClick('next')" class="sort__next"></a>
                    </div>
                </div>
                <div class="search__itemlist">
                    <div class="item__main" >
                        <div class="item__box">
                            <div @click="toShow(j.id)" class="items" v-for="j in showList" :key="j.id">
                                <a @click="toShow(j.id)" class="items__img">
                                    <span class="items__img__tag">{{j.category.name}}</span>
                                    <img alt="项目图片" :src="j.cover">
                                </a>
                                <div class="items__txt">
                                    <div class="items__txt__title">
                                        <span>【{{j.city.name}}】</span>
                                        <a @click="toShow(j.id)">
                                            {{j.title}}
                                        </a>
                                    </div>
                                    <div class="items__txt__time" v-if="j.artist != null">
                                        艺人：{{j.artist.name}}
                                    </div>
                                    <div class="items__txt__time">
                                        <a @click="toShow(j.id)" class="items__txt__venue__icon"></a>
                                        {{j.city.name}} | {{j.location.detail}}
                                    </div>
                                    <div class="items__txt__time">
                                        <a @click="toShow(j.id)" class="items__txt__time__icon"></a>
                                        {{new Date(j.time).toLocaleString()}}
                                    </div>
                                    <div class="items__txt__price">
                                        <span>{{j.money}}<i>元起</i></span>售票中
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="page">
                        <el-pagination
                                @current-change="handleCurrentChange"
                                background
                                :current-page="currentPage"
                                layout="prev, pager, next"
                                :page-size="30"
                                :total="total">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/style/Type.css'
    import $ from "jquery";
    export default {
        name: "TypeDetail",
        data(){
            return{
                value1:'',
                currentPage:1,
                total:100,
                page:4,
                showList:[],
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
                tab:[
                    {id:1,name:'相关度排序'},
                    {id:2,name:'推荐排序'},
                    {id:3,name:'最新上架'},
                ],
                city:[],
                subclass:[],
                times:'',
                time:[
                    {id:1,name:'今天'},
                    {id:2,name:'明天'},
                    {id:3,name:'本周末'},
                    {id:4,name:'一个月内'},
                ],
                orderType:0,
                info:{},
                cityId:'',
                categoryId:'',
                subclassId:'',
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                }
            }
        },
        beforeMount(){
            this.city = this.$store.state.cityList;
            this.$store.state.city.id === 0 ? delete this.info.city_id : this.info.city_id = this.$store.state.city.id;
            this.$store.state.type.id === 0 ? delete this.info.category_id : this.info.category_id = this.$store.state.type.id;
        },
        async mounted(){
            document.documentElement.scrollTop = 0;
            await this.changeTypeStatus('time',0);
            await this.initCityStatus(this.$store.state.city.name);
            await this.changeTypeStatus('type',this.$store.state.type.id);
            await this.changeTabStatus('search-sort-item',2);
        },
        methods:{
            handleCurrentChange(val) {
                this.currentPage = val;
                this.changStatus();
                this.getAll(this.currentPage,this.orderType);
            },
            handleClick(val) {
                if(val === 'next'){
                    this.currentPage ++;
                }else {
                    this.currentPage --;
                }
                this.changStatus();
                this.getAll(this.currentPage,this.orderType);
            },
            changStatus() {
                let i = document.getElementsByClassName('sort__prev')[0];
                let j = document.getElementsByClassName('sort__next')[0];
                if(this.currentPage === this.item.page){
                    i.style.pointerEvents = 'auto';
                    j.style.pointerEvents = 'none';
                }else if(this.currentPage === 1){
                    i.style.pointerEvents = 'none';
                    j.style.pointerEvents = 'auto';
                }else{
                    i.style.pointerEvents = 'auto';
                    j.style.pointerEvents = 'auto';
                }
            },
            async changeTypeStatus(val,index){
                if(val === 'type' && index === 0){
                    delete this.info.category_id;
                }else if(val === 'type'){
                    this.categoryId = index;
                    this.info.category_id = index;
                   await this.getSubclass(index);
                }
                if(val === 'subclass1'&&index === 0){
                    delete this.info.subclass_id;
                }else if(val === 'subclass1'){
                    this.subclassId = this.subclass[index-1].id;
                    this.info.subclass_id = this.subclass[index-1].id;
                }
                if(val === 'time'&&index === 0){
                    delete this.info.time;
                }else if(val === 'time'){
                    this.times = index-1;
                    this.info.time = index-1;
                }
                let list = $('.'+val);
                for(let j = 0;j < list.length;j++){
                    if(j === index){
                        list[j].className = val+' factor-content-item factor-content-item-active';
                    }else {
                        list[j].className = val+' factor-content-item';
                    }
                }
                await this.getAll(this.currentPage,this.orderType);
            },
            changCityStatus(val,e,index){
                if(val === '全国'){
                    delete this.info.city_id;
                }else {
                    this.info.city_id = index;
                }
                let list = $('.city');
                for(let j = 0;j < list.length;j++){
                    list[j].className = 'city factor-content-item';
                }
                e.target.className = 'city factor-content-item factor-content-item-active';
                $('.factor-selected-city').html(e.target.innerHTML);
                this.getAll(this.currentPage,this.orderType);
            },
            initCityStatus(val){
                let list = document.getElementsByClassName('city');
                for(let i = 0;i < list.length;i++){
                    if(list[i].innerHTML === val){
                        list[i].className = 'city factor-content-item factor-content-item-active';
                    }else{
                        list[i].className = 'city factor-content-item';
                    }
                }
                $('.factor-selected-city').html(val);
            },
            changeTabStatus(val,index){
                let list = $('.'+val);
                for(let j = 0;j < list.length;j++){
                    if(j === index - 1){
                        list[j].className = val+' search-sort-item-active';
                    }else {
                        list[j].className = val;
                    }
                }
                if(index === 1){
                    this.orderType = 0;
                }
                if(index === 2){
                    this.orderType = 0;
                }
                if(index === 3){
                    this.orderType = 1;
                }
                this.getAll(this.currentPage,this.orderType);
            },
            getAll(val,index){
                console.log(JSON.stringify(this.info) === '{}');
                let u = "http://118.31.7.87:8080/perform/all/"+val+"?orderType="+index;
                if(this.$route.query.searchItem !== undefined)u = "http://118.31.7.87:8080/perform/search/"+val+"/"+this.$route.query.searchItem+"?orderType="+index;
                if(JSON.stringify(this.info) === '{}') {
                    this.$axios({
                        method: 'post',
                        url: u,
                        data: {}
                    }).then(res => {
                        if (res.data.msg === '成功') {
                            this.showList = res.data.data.data;
                            this.page = res.data.data.totalPage;
                            this.total = parseInt(res.data.data.total);
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    }).catch(err => {
                        console.log(err);
                    });
                } else{
                    this.$axios({
                        method: 'post',
                        url: u,
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        data:JSON.stringify(this.info)
                    }).then(res =>{
                        if(res.data.msg === '成功'){
                            this.showList = res.data.data.data;
                            this.page = res.data.data.totalPage;
                            this.total = parseInt(res.data.data.total);
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    }).catch(err =>{
                        console.log(err);
                    });
                }
            },
            async getSubclass(val){
                await this.$axios({
                    method: 'get',
                    url: "http://118.31.7.87:8080/subclass/all?id="+val,
                    headers:{
                        'Content-Type': 'application/json'
                    },
                }).then(res =>{
                    if(res.data.msg === '成功'){
                        this.subclass = res.data.data;
                        if(res.data.data.length === 0)this.subclassId = '';
                    }else{
                        this.$message.error(res.data.msg);
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            toShow(val){
                this.$store.commit('getId',val);
                this.$router.push({
                    path: `/Perform`
                });
            },
        }
    }
</script>
