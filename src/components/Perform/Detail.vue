<template>
    <div class="perform">
        <div class="w1200 box flex">
            <div class="flex1">
                <div class="hd">
                    <div class="cont">
                        <div class="cover">
                            <img class="poster" :src="show.cover" >
                        </div>
                        <div class="order">
                            <div class="title">
                                <span class="tip">总票代</span>
                                <span>【{{show.city.name}}】{{show.title}} {{show.city.name}}站</span>
                            </div>
                            <div class="address">
                                <div class="time">时间：{{new Date(show.times[0].time).toLocaleString()}}</div>
                                <div class="place">
                                    <div class="addr">场馆：{{show.city.name}}市 | {{show.location.detail}}</div>
                                </div>
                            </div>
<!--                            <div class="perform-notice">
                                <div class="perform-notice-prefix">
                                    <span >预售</span>
                                </div>
                                <div class="perform-notice-content hastitle">
                                    <div >本商品为预售商品，正式开票后将第一时间为您配票</div>
                                    <div class="perform-notice-content-detail">
                                        预售期间，由于主办未正式开票，下单后无法立即为您配票。一般于演出前2-6周开票，待正式开票后，请您通过订单详情页或者票夹详情，查看票品信息、取票方式等演出相关信息
                                    </div>
                                </div>
                            </div>-->
                            <div class="citys">
                                <label>城市</label>
                                <div class="citylist">
                                    <div class="cityitem" @click="changeCityStatus('cityitem',index,item.name)" v-for="(item,index) in citys" :key="index">{{item.name}}</div>
                                </div>
                            </div>
                            <div class="perform__order__box">
                                <div class="notice-time">
                                    <img src="../../assets/perform/p3.png" class="notice-time-icon">场次时间均为演出当地时间</div>
                                <div class="perform__order__select perform__order__select__performs">
                                    <div class="select_left">场次</div>
                                    <div class="select_right">
                                        <div class="select_right_list" >
                                            <div class="select_right_list_item times active" @click="changeTimeStatus('times',index)" v-for="(item,index) in time" :key="item.id">
                                                <!--<span class="presell">预售</span>-->
                                                <span>{{new Date(item.time).toLocaleString()}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="perform__order__select">
                                    <div class="select_left">票档</div>
                                    <div class="select_right">
                                        <div class="select_right_list">
                                            <div class="select_right_list_item sku_item" v-for="(item,index) in tickets" :key="item.id" @click="changePageStatus('sku_item',index)">
                                                <span class="notticket" v-if="item.count === 0">已售完</span>
                                                <div class="skuname" v-if='item.description === ""'>{{item.money}}元</div>
                                                <div class="skuname" v-else>{{item.money}}元({{item.description}})</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="perform__order__price">
                                    <div class="number_left">数量</div>
                                    <div class="number_right">
                                        <div class="number_right_info">
                                            <el-input-number
                                                    size="small"
                                                    v-model="num"
                                                    @change="handleChange"
                                                    :min="1"
                                                    :max="6"
                                                    style="width: 104px;margin: 0 auto;"
                                                    label="每笔订单限购6张">
                                            </el-input-number>
                                        </div>
                                        <span class="number_right_limit">每笔订单限购6张</span>
                                    </div>
                                </div>
                                <div class="perform__desc__info perform__desc__info__active">
                                    <p>按付款顺序配票，优先连座配票</p>
                                </div>
                                <div class="perform__order__price">
                                    <div class="number_left">合计</div>
                                    <div class="number_right">
                                        <span class="totol__price">
                                            <i>￥</i>{{sum}}</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="buybtn" @click="toOrder" v-if="this.$store.state.user.nickName != null">立即预订</div>
                                    <div class="buybtn" @click="toLogin" v-else>立即预订</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="perform__bd">
                    <div class="notice">
                        <div class="notice-nav-fixed">
                            <div class="notice-nav-fixed-wrap">
                                <span class="notice-nav-item notice-nav-item-active" @click="toPosition('detail',0)">
                                    项目详情
                                    <span class="notice-nav-item-flag"></span>
                                </span>
                                <span class="notice-nav-item" @click="toPosition('notice0',1)">
                                    购票须知
                                    <span class="notice-nav-item-flag" style="display: none;"></span>
                                </span>
                                <span class="notice-nav-item" @click="toPosition('notice1',2)">
                                    观演须知
                                    <span class="notice-nav-item-flag" style="display: none;"></span>
                                </span>
                                <span class="notice-nav-item" @click="toPosition('notice2',3)">
                                    评论
                                    <span class="notice-nav-item-flag" style="display: none;"></span>
                                </span>
                            </div>
                        </div>
                        <div class="notice-nav">
                            <span class="notice-nav-item notice-nav-item-active" @click="toPosition('detail',0)">
                                项目详情
                                <span class="notice-nav-item-flag" style=""></span>
                            </span>
                            <span class="notice-nav-item" @click="toPosition('notice0',1)">
                                购票须知
                                <span class="notice-nav-item-flag" style="display: none;"></span>
                            </span>
                            <span class="notice-nav-item" @click="toPosition('notice1',2)">
                                观演须知
                                <span class="notice-nav-item-flag" style="display: none;"></span>
                            </span>
                            <span class="notice-nav-item" @click="toPosition('notice2',3)">
                                评论
                                <span class="notice-nav-item-flag" style="display: none;"></span>
                            </span>
                        </div>
                        <div class="notice-content">
                            <div class="detail">
                                <div id="detail" class="list">
                                    <div class="title">演出介绍</div>
                                    <div class="words">
                                            <div style="clear: both" v-html='show.content.replace(/\n/g,"<br>")'></div>
                                    </div>
                                </div>
                                <div id="notice0" class="list">
                                    <div class="title">购票须知</div>
                                    <div class="words" v-html="show.ticketNotice.replace(/\n/g,'<br>')"></div>
                                </div>
                                <div id="notice1" class="list">
                                    <div class="title">观演须知</div>
                                    <div class="words" v-html="show.viewNotice.replace(/\n/g,'<br>')"></div>
                                </div>
                                <div id="notice2" class="list">
                                    <div class="title">评论</div>
                                    <div class="words">
                                        <el-row type="flex" class="row-bg" style="margin-top: 10px;" justify="center" v-for="item in comments" :key="item.id">
                                            <el-col :span="20" >
                                                <el-card shadow="never">
                                                    <div class="demo-basic--circle" style="width: 30px;float: left;">
                                                        <div class="block">
                                                            <el-avatar size="small" :src="item.user.avatar">{{item.user.nickName}}</el-avatar>
                                                        </div>
                                                    </div>
                                                    <div style="float: left;">
                                                        <span style="font-size:12px;color: green;fontWeight:bold;">{{item.user.nickName}} - {{new Date(item.createTime).toLocaleString()}}</span>
                                                        <br>
                                                        <div style="margin-top: 10px;"></div>
                                                        <span v-html="item.content.replace(/\n/g,'<br>')"></span>
                                                    </div>
                                                </el-card>
                                            </el-col>
                                        </el-row>
                                        <el-row type="flex" class="row-bg" style="margin-top: 10px;">
                                            <el-col :span="22" >
                                                <el-pagination
                                                        @current-change="handleCurrentChange"
                                                        background
                                                        layout="prev, pager, next"
                                                        :page-size="30"
                                                        style="float: right;"
                                                        :total="total">
                                                </el-pagination>
                                            </el-col>
                                        </el-row>
                                        <el-row type="flex" class="row-bg" style="margin-top: 10px;" justify="center" v-if="status === '可以评论'">
                                            <el-col :span="20" >
                                                <el-card shadow="never">
                                                    <div>
                                                        <div class="form-group">
                                                            <label>评论内容</label>
                                                            <el-input type="textarea" :rows="4" v-model="content"></el-input>
                                                        </div>
                                                        <div>
                                                            <el-button style="float: right;" type="success" @click="postComments" plain>发表评论</el-button>
                                                        </div>
                                                    </div>
                                                </el-card>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-right">
                <div class="right-content">
                    <div class="service">
                        <div class="service-note">
                            <div class="service-note-name">
                                <i class="support-icon support-no"></i>不支持退
                            </div>
                            <div class="service-note-desc">票品为有价证券，非普通商品，其背后承载的文化服务具有时效性，稀缺性等特征，不支持退换。</div>
                        </div>
                        <div class="service-note">
                            <div class="service-note-name">
                                <i class="support-icon support-no"></i>不支持选座
                            </div>
                            <div class="service-note-desc">本项目不支持自主选座，同一个订单优先连座</div>
                        </div>
                        <div class="service-note">
                            <div class="service-note-name">
                                <i class="support-icon support-yes"></i>快递票
                            </div>
                            <div class="service-note-desc">快递票：纸质票会在开票后快递到您留下的收货地址，需您承担邮寄费用。注：离开演时间仅3天时，不再寄送快递票，支持在指定取票地点取票（具体以下单后票夹信息为准）</div>
                        </div>
                        <div class="service-note">
                        <div class="service-note-name">
                            <i class="support-icon support-yes"></i>纸质发票
                        </div>
                            <div class="service-note-desc">该项目支持开具纸质发票，请您在演出开始前通过订单页补开，发票将在演出结束后1个月左右，统一由主办方提供</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/style/Perform.css'
    export default {
        name: "Detail",
        data(){
            return{
                num:1,
                price:380,
                show:[],
                tickets:[],
                time:[],
                description:'',
                sTime:'',
                citys:[],
                ticketId:'',
                content:'',
                nowPage:1,
                comments:[],
                total:10,
                status:'',
            }
        },
        computed:{
            sum:function(){
                return this.num * this.price;
            },
        },
        async created(){
            await this.getShow(this.$store.state.id);
            await this.getCitys(this.show.title);
            await this.changeCityStatus('cityitem',this.$store.state.id,this.show.city.name);
            this.getCommentSates();
        },
        mounted(){
            window.addEventListener('scroll', this.scrollToTop);
            this.getComments();
        },
        destroyed(){
            window.removeEventListener('scroll', this.scrollToTop);
        },
        methods:{
            handleCurrentChange(val) {
                this.nowPage = val;
                this.getComments();
            },
            postComments(){
                if(this.content !== '') {
                    let time = new Date().getTime();
                    this.$axios({
                        method: 'post',
                        url: "http://118.31.7.87:8080/comment/add",
                        data: {
                            "content": this.content,
                            "createTime": time,
                            "performId": this.$store.state.id,
                            "userId": this.$store.state.user.id
                        }
                    }).then(res => {
                        console.log(res.data);
                        if (res.data.msg === "新增成功") {
                            this.$message({
                                type: 'success',
                                message: '评论成功!'
                            });
                            this.getComments();
                            this.content = '';
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    }).catch(err => {
                        console.log(err);
                    });
                }else {
                    this.$message.error('请输入评论内容');
                }
            },
            getComments(){
                this.$axios({
                    method: 'post',
                    url: "http://118.31.7.87:8080/comment/"+this.$store.state.id+"/"+this.nowPage,
                }).then(res =>{
                    console.log(res.data);
                    if(res.data.msg === '成功'){
                        this.comments = res.data.data.data;
                        this.total =parseInt(res.data.data.total);
                    }else{
                        this.$message.error(res.data.msg);
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            toPosition(val,index){
                this.changeTab(index);
                let li = document.getElementById(val);
                li.scrollIntoView();
            },
            changeTab(index){
                let aList = document.getElementsByClassName('notice-nav-item');
                let bList = document.getElementsByClassName('notice-nav-item-flag');
                for(let i = 0;i < aList.length;i++){
                    if(i === index || i === index+4){
                        aList[i].className = 'notice-nav-item notice-nav-item-active';
                    }else {
                        aList[i].className = 'notice-nav-item';
                    }
                }
                for(let j = 0;j < bList.length;j++){
                    if(j === index || j === index+4){
                        bList[j].style.display = '';
                    }else {
                        bList[j].style.display = 'none';
                    }
                }
            },
            getCommentSates(){
                this.$axios({
                    method: 'get',
                    url: "http://118.31.7.87:8080/comment/able?performId="+this.$store.state.id+"&userId="+this.$store.state.user.id,
                }).then(res =>{
                    console.log(res.data);
                    this.status = res.data.msg;
                }).catch(err =>{
                    console.log(err);
                });
            },
            handleChange(value) {
                console.log(value);
            },
            scrollToTop () {
                const that = this;
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                that.scrollTop = scrollTop;

                if(that.scrollTop > document.getElementById('detail').offsetTop-150){
                    this.changeTab(0);
                    document.getElementsByClassName("notice-nav-fixed")[0].style.display = "block";
                }else{
                    document.getElementsByClassName("notice-nav-fixed")[0].style.display = "none";
                }
                if(that.scrollTop > document.getElementById('notice0').offsetTop-150){
                    this.changeTab(1);
                }
                if(that.scrollTop > document.getElementById('notice1').offsetTop-150){
                    this.changeTab(2);
                }
                if(that.scrollTop > document.getElementById('notice2').offsetTop-150){
                    this.changeTab(3);
                }
            },
            changeCityStatus(val,index,key){
                let list = document.getElementsByClassName(val);
                for(let j = 0;j < list.length;j++){
                    if(list[j].innerHTML === key){
                        list[j].className = val+' active';
                    }else {
                        list[j].className = val;
                    }
                }
                this.$store.commit("getId",index);
                this.getShow(index);
            },
            changeTimeStatus(val,index){
                let list = document.getElementsByClassName(val);
                this.sTime = this.time[index].time;
                for(let j = 0;j < list.length;j++){
                    if(j === index){
                        list[j].className = val+' select_right_list_item active';
                    }else {
                        list[j].className = val+' select_right_list_item';
                    }
                }
            },
            changePageStatus(val,index){
                let list = document.getElementsByClassName(val);
                if(this.show.tickets[index].count !== 0){
                    for(let j = 0;j < list.length;j++){
                        if(j === index){
                            list[j].className = val+' select_right_list_item active';
                        }else {
                            list[j].className = val+' select_right_list_item';
                        }
                    }
                    this.price = this.show.tickets[index].money;
                    this.description = this.tickets[index].description;
                    this.ticketId = this.tickets[index].id;
                    this.num = 1;
                    console.log(this.ticketId);
                }
            },
            async getShow(val){
                await this.$axios({
                    method: 'post',
                    url: "http://118.31.7.87:8080/perform/detail/"+val,
                }).then(res =>{
                    console.log(res.data);
                    if(res.data.msg === '成功'){
                        this.show = res.data.data;
                        this.tickets = res.data.data.tickets;
                        this.time = res.data.data.times;
                    }else{
                        this.$message.error(res.data.msg);
                    }
                }).catch(err =>{
                    console.log(err);
                });
                this.changeTimeStatus('times',0);
                for(let i =0;i<this.tickets.length;i++){
                    if(this.tickets.count !== 0) {
                        return this.changePageStatus('sku_item', i);
                    }
                }
            },
            toOrder(){
                let order={
                    total:this.sum,
                    num:this.num,
                    price:this.price,
                    desc:this.description,
                    time:this.sTime,
                    ticketId:this.ticketId
                };
                this.$store.commit("getOrder",order);
                this.$router.push({
                    path: `/Order`
                })
            },
            async getCitys(val){
                await this.$axios({
                    method: 'post',
                    url: "http://118.31.7.87:8080/perform/city/"+val,
                }).then(res =>{
                    console.log(res.data);
                    if(res.data.msg === '成功'){
                        this.citys = res.data.data;
                    }else{
                        this.$message.error(res.data.msg);
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            toLogin(){
                this.$router.push({
                    path: `/Login`,
                    query:{
                        path:this.$route.path
                    }
                })
            },
        },

    }
</script>

