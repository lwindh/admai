<template>
    <div class="perform">
        <div class="w1200 box flex">
            <div class="flex1">
                <div class="hd">
                    <div class="cont">
                        <div class="cover">
                            <img class="poster" src="" >
                        </div>
                        <div class="order">
                            <div class="title">
                                <span class="tip">总票代</span>
                                <span>【厦门】My Beautiful Live 杨千嬅世界巡回演唱会-厦门站</span>
                            </div>
                            <div class="address">
                                <div class="time">时间：2020.04.11 周六 19:30</div>
                                <div class="place">
                                    <div class="addr">场馆：厦门市 | 厦门体育中心体育场</div>
                                </div>
                            </div>
                            <div class="perform-notice">
                                <div class="perform-notice-prefix">
                                    <span >预售</span>
                                </div>
                                <div class="perform-notice-content hastitle">
                                    <div >本商品为预售商品，正式开票后将第一时间为您配票</div>
                                    <div class="perform-notice-content-detail">
                                        预售期间，由于主办未正式开票，下单后无法立即为您配票。一般于演出前2-6周开票，待正式开票后，请您通过订单详情页或者票夹详情，查看票品信息、取票方式等演出相关信息
                                    </div>
                                </div>
                            </div>
                            <div class="citys">
                                <label>城市</label>
                                <div class="citylist">
                                    <div class="cityitem" @click="changeCityStatus('cityitem',item.id)" v-for="item in city" :key="item.name">{{item.name}}</div>
                                </div>
                            </div>
                            <div class="perform__order__box">
                                <div class="notice-time">
                                    <img src="../../assets/perform/p3.png" class="notice-time-icon">场次时间均为演出当地时间</div>
                                <div class="perform__order__select perform__order__select__performs">
                                    <div class="select_left">场次</div>
                                    <div class="select_right">
                                        <div class="select_right_list">
                                            <div class="select_right_list_item active">
                                                <span class="presell">预售</span>
                                                <span>2020-04-11 周六 19:30</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="perform__order__select">
                                    <div class="select_left">票档</div>
                                    <div class="select_right">
                                        <div class="select_right_list">
                                            <div class="select_right_list_item sku_item" v-for="item in page" :key="item.id" @click="changePageStatus('sku_item',item.id)">
                                                <div class="skuname">{{item.price}}元</div>
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
                                    <div class="buybtn">立即预订</div>
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
                        </div>
                        <div class="notice-content">
                            <div class="detail">
                                <div id="detail" class="list">
                                    <div class="title">演出介绍</div>
                                    <div class="words">
                                            <div style="clear: both">
                                                <div style="clear: both;">
                                                    <span>1月16日10:18预售</span>
                                                </div>
                                                <div style="clear: both;"><br></div>
                                                <div style="clear: both;">
                                                    2020年杨千嬅全新巡回《My&nbsp;Beautiful&nbsp;Live杨千嬅世界巡回演唱会》，引起各方歌迷热烈回响。这次千嬅带着她的Beautiful&nbsp;Live来到厦门！这是杨千嬅出道24年来在厦门办个唱，喜欢她的歌迷千万不要错过。
                                                </div>
                                                <div style="clear: both;">
                                                    为了这场演唱会，杨千嬅费尽心思，从演唱会制作、由挑选歌曲到舞台设计和造型都参与其中。"不管是粤语歌，还是国语歌，或者是自己演唱的经典影视剧的主题歌，或者是别的歌手的经典曲目。"&nbsp;杨千嬅希望借助这次《My&nbsp;Beautiful&nbsp;Live世界巡回演唱会》透过音乐和自己的歌声,去表达美丽人生拥有的不同阶段，将自己的人生乐章与大家分享。希望为听众带来新一轮的音乐盛宴，相信这场努力准备和充满诚意的演唱会将为歌迷带来连连惊喜！
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div id="notice0" class="list">
                                    <div class="title">购票须知</div>
                                    <div class="words"><div>
                                        <p class="item_title">限购规则</p>
                                        <ul>
                                            <li>每笔订单最多购买6张</li>
                                        </ul>
                                    </div>
                                        <div>
                                            <p class="item_title">退票/换票规则</p>
                                            <ul>
                                                <li>票品为有价证券，非普通商品，其背后承载的文化服务具有时效性，稀缺性等特征，不支持退换。</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">优惠券使用规则</p>
                                            <ul>
                                                <li>本项目不支持除大麦网VIP会员优惠券及指定膨胀金以外的其他优惠券购票，敬请理解</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">入场规则</p>
                                            <ul>
                                                <li>须携带纸质门票验票入场。</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">儿童购票</p>
                                            <ul>
                                                <li>1.2米以上凭成人票入场，1.2米以下谢绝入场</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">发票说明</p>
                                            <ul>
                                                <li>演出开始前，去【APP-订单详情页】提交发票申请。演出结束后1个月左右邮寄给你，需自付邮费。</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">实名购票规则</p>
                                            <ul>
                                                <li>一个订单对应一个证件；证件支持：台湾居民来往大陆通行证/护照/身份证/港澳居民来往内地通行证</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">异常排单说明</p>
                                            <ul>
                                                <li>对于异常订购行为，大麦网有权在订单成立或者生效之后取消相应订单。异常订购行为包括但不限于以下情形：
                                                （1）通过同一ID订购超出限购张数的订单。
                                                （2）经合理判断认为非真实消费者的下单行为，包括但不限于通过批量相同或虚构的支付账号、收货地址（包括下单时填写及最终实际收货地址）、收件人、电话号码订购超出限购张数的订单。
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="notice1" class="list">
                                    <div class="title">观演须知</div>
                                    <div class="words">
                                        <div>
                                            <p class="item_title">演出时长</p>
                                            <ul>
                                                <li>约120分钟（以现场为准）</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">入场时间</p>
                                            <ul>
                                                <li>请于开始前约90分钟入场</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">最低演出曲目</p>
                                            <ul>
                                                <li>约20首</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">主要演员</p>
                                            <ul>
                                                <li>杨千嬅</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">最低演出时长</p>
                                            <ul>
                                                <li>约120分钟</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">禁止携带物品</p>
                                            <ul>
                                                <li>由于安保和版权的原因，大多数演出、展览及比赛场所禁止携带食品、饮料、专业摄录设备、打火机等物品，请您注意现场工作人员和广播的提示，予以配合。</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">寄存说明</p>
                                            <ul>
                                                <li>无寄存处,请自行保管携带物品，谨防贵重物品丢失。</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">大麦网初始开售时全场可售门票总张数</p>
                                            <ul>
                                                <li>25000</li>
                                            </ul>
                                        </div>
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
    import $ from 'jquery'
    export default {
        name: "Detail",
        data(){
            return{
                num:1,
                price:380,
                page:[
                    {
                    id:1,
                    price:280,
                },
                    {
                    id:2,
                    price:380,
                },
                    {
                    id:3,
                    price:480,
                },
                    {
                    id:4,
                    price:580,
                },
                    {
                    id:5,
                    price:780,
                },
                    {
                    id:6,
                    price:980,
                }
                ],
                city:[
                    {id:1,name:'柳州站'},
                    {id:2,name:'厦门站'}]
            }
        },
        computed:{
            sum:function(){
                return this.num * this.price;
            },
        },
        mounted(){
            window.addEventListener('scroll', this.scrollToTop);
            this.changeCityStatus('cityitem',2);
            this.changePageStatus('sku_item',2)
        },
        destroyed(){
            window.removeEventListener('scroll', this.scrollToTop);
        },
        methods:{
            toPosition(val,index){
                let li = document.getElementById(val);
                li.scrollIntoView();
                this.changeTab(index);
            },
            changeTab(index){
                let aList = document.getElementsByClassName('notice-nav-item');
                let bList = document.getElementsByClassName('notice-nav-item-flag');
                for(let i = 0;i < aList.length;i++){
                    if(i === index || i === index+3){
                        aList[i].className = 'notice-nav-item notice-nav-item-active';
                    }else {
                        aList[i].className = 'notice-nav-item';
                    }
                }
                for(let j = 0;j < bList.length;j++){
                    if(j === index || j === index+3){
                        bList[j].style.display = '';
                    }else {
                        bList[j].style.display = 'none';
                    }
                }
            },
            handleChange(value) {
                console.log(value);
            },
            scrollToTop () {
                const that = this;
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                that.scrollTop = scrollTop;

                if(that.scrollTop > document.getElementById('detail').offsetTop){
                    this.changeTab(0);
                    document.getElementsByClassName("notice-nav-fixed")[0].style.display = "block";
                }else{
                    document.getElementsByClassName("notice-nav-fixed")[0].style.display = "none";
                }
                if(that.scrollTop > document.getElementById('notice0').offsetTop){
                    this.changeTab(1);
                }
                if(that.scrollTop > document.getElementById('notice1').offsetTop){
                    this.changeTab(2);
                }
            },
            changeCityStatus(val,index){
                let list = $('.'+val);
                for(let j = 0;j < list.length;j++){
                    if(j === index - 1){
                        list[j].className = val+' active';
                    }else {
                        list[j].className = val;
                    }
                }
            },
            changePageStatus(val,index){
                let list = $('.'+val);
                for(let j = 0;j < list.length;j++){
                    if(j === index - 1){
                        list[j].className = val+' select_right_list_item active';
                    }else {
                        list[j].className = val+' select_right_list_item';
                    }
                }
                this.price = this.page[index-1].price;
                this.num = 1;
            }
        },

    }
</script>

