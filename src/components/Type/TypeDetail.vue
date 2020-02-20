<template>
    <div class="search-box">
        <div class="search-box-top">
            共<span class="search-box-keyword">{{item.total}}</span>个商品
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
                                <span class="factor-content-item factor-content-item-default factor-content-item-active">全部</span>
                                <div class="factor-content">
                                    <span class="factor-content-item">上海</span>
                                </div>
                                <div class="factor-more">更多</div>
                            </div>
                        </div>
                    </div>
                    <div class="factor-item">
                        <span class="factor-title">
                            分 类：
                        </span>
                        <div class="factor-content">
                            <div class="factor-content-main">
                                <span class="factor-content-item factor-content-item-default factor-content-item-active">全部</span>
                                <div class="factor-content">
                                    <span class="factor-content-item">上海</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="factor-item" style="display: none">
                        <span class="factor-title">
                            子 类：
                        </span>
                        <div class="factor-content">
                            <div class="factor-content-main">
                                <span class="factor-content-item factor-content-item-default factor-content-item-active">全部</span>
                                <div class="factor-content">
                                    <span class="factor-content-item"></span>
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
                                <span class="factor-content-item factor-content-item-default factor-content-item-active">全部</span>
                                <div class="factor-content">
                                    <span class="factor-content-item">今天</span>
                                    <span class="factor-content-item">明天</span>
                                    <span class="factor-content-item">本周末</span>
                                    <span class="factor-content-item">一个月内</span>
                                    <div class="calendar">
                                        <div class="calendar-slot">
                                            <div class="factor-calendar" >按日历</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="search-sort search-main-sort">
                    <div class="search-sort_fl">
                        <span class="search-sort-item">相关度排序</span>
                        <span class="search-sort-item search-sort-item-active">推荐排序</span>
                        <span class="search-sort-item" >最近开场</span>
                        <span class="search-sort-item">最新上架</span>
                    </div>
                    <div class="pagination-top search-sort_fr">
                        <a @click="handleClick('prev')" class="sort__prev sort__prev_gray"></a>
                        <div class="sort__num">
                            <span>{{currentPage}}</span>/<span>{{item.page}}</span>
                        </div>
                        <a @click="handleClick('next')" class="sort__next"></a>
                    </div>
                </div>
                <div class="search__itemlist">
                    <div class="item__main" >
                        <div class="item__box">
                            <div class="items" v-for="j in item.data" :key="j.img">
                                <a href="" target="_blank" class="items__img">
                                    <span class="items__img__tag">{{j.type}}</span>
                                    <img alt="项目图片" :src="j.img">
                                </a>
                                <div class="items__txt">
                                    <div class="items__txt__title">
                                        <span>【{{j.position}}】</span>
                                        <a href="" target="_blank">
                                            {{j.title}}
                                        </a>
                                    </div>
                                    <div class="items__txt__time" v-if="j.sang !== ''">
                                        艺人：{{j.sang}}
                                    </div>
                                    <div class="items__txt__time" v-if="j.position1 !== ''">
                                        <a href="javascript:;" class="items__txt__venue__icon"></a>
                                        {{j.position}} | {{j.position1}}
                                    </div>
                                    <div class="items__txt__time" v-else>
                                        <a href="javascript:;" class="items__txt__venue__icon"></a>
                                        场馆待定
                                    </div>
                                    <div class="items__txt__time" v-if="j.time !== ''">
                                        <a href="javascript:;" class="items__txt__time__icon"></a>
                                        {{j.time}}
                                    </div>
                                    <div class="items__txt__time" v-else>
                                        <a href="javascript:;" class="items__txt__time__icon"></a>
                                        时间待定
                                    </div>
                                    <div class="items__txt__tags">

                                    </div>
                                    <div class="items__txt__price" v-if="j.price !== ''">
                                        <span>{{j.price}}<i>元</i></span>{{j.status}}
                                    </div>
                                    <div class="items__txt__price" v-else>
                                        <span>价格待定</span>{{j.status}}
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
                                :total="item.total">
                        </el-pagination>
                    </div>
                </div>
            </div>
            <div class="search search-like">
                <div class="search__title">您可能还喜欢</div>
                <div class="search__box">
                    <div class="search__item" v-for="j in like" :key="j.img">
                        <a href="" target="_blank" data-spm="test" class="search__item__poster">
                            <img :src="j.img" alt="">
                        </a>
                        <div class="search__item__info">
                            <a href="" target="_blank" class="search__item__info__title">
                                {{j.title}}
                            </a>
                            <div class="search__item__info__venue">{{j.position}}</div>
                            <div class="search__item__info__venue">{{j.time}}</div>
                            <div class="search__item__info__price">
                                <strong>{{j.price}}元</strong>起
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/style/Type.css'
    export default {
        name: "TypeDetail",
        data(){
            return{
                currentPage:1,
                item:{
                    total:100,
                    page:4,
                    data:[
                        {
                            type:'演唱会',
                            position:'佛山',
                            title:'蔡依林 Ugly Beauty 2020 世界巡回演唱会佛山站',
                            sang:'蔡依林',
                            position1:'佛山国际体育文化演艺中心',
                            time:'2020.04.11 周六 19:30',
                            price:'399-1299',
                            status:'售票中',
                            img:require('../../assets/Type/t1.jpg')
                        },
                        {
                            type:'演唱会',
                            position:'佛山',
                            title:'蔡依林 Ugly Beauty 2020 世界巡回演唱会佛山站',
                            sang:'',
                            position1:'',
                            time:'2020.04.11 周六 19:30',
                            price:'399-1299',
                            status:'售票中',
                            img:require('../../assets/Main/list/13.jpg')
                        },
                        {
                            type:'演唱会',
                            position:'佛山',
                            title:'蔡依林 Ugly Beauty 2020 世界巡回演唱会佛山站',
                            sang:'蔡依林',
                            position1:'佛山国际体育文化演艺中心',
                            time:'',
                            price:'399-1299',
                            status:'售票中',
                            img:require('../../assets/Main/list/14.jpg')
                        },
                        {
                            type:'演唱会',
                            position:'佛山',
                            title:'蔡依林 Ugly Beauty 2020 世界巡回演唱会佛山站',
                            sang:'蔡依林',
                            position1:'佛山国际体育文化演艺中心',
                            time:'2020.04.11 周六 19:30',
                            price:'',
                            status:'未开售',
                            img:require('../../assets/Main/list/12.jpg')
                        },
                    ]
                },
                like:[
                    {img:require('../../assets/Main/list/21.jpg'),title:'周子琰「正确人类的聚会」2020巡回演唱会 北京站',position:'MAO Livehouse北京',time:'2020.05.15 周五 20:30',price:'100.0'},
                    {img:require('../../assets/Main/list/22.jpg'),title:'周子琰「正确人类的聚会」2020巡回演唱会 北京站',position:'MAO Livehouse北京',time:'2020.05.15 周五 20:30',price:'100.0'},
                    {img:require('../../assets/Main/list/23.jpg'),title:'周子琰「正确人类的聚会」2020巡回演唱会 北京站',position:'MAO Livehouse北京',time:'2020.05.15 周五 20:30',price:'100.0'},
                ]
            }
        },
        methods:{
            handleCurrentChange(val) {
                this.currentPage = val;
                this.changStatus();
                console.log(`当前页: ${val}`);
            },
            handleClick(val) {
                if(val === 'next'){
                    this.currentPage ++;
                }else {
                    this.currentPage --;
                }
                this.changStatus();
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
            }

        }
    }
</script>
