<template>
    <div>
        <div class="sidebar">
            <div class="item">
                <a class="alime" href="//online.damai.cn/alime/index?from=damai_pc_item&amp;v=3" target="_blank">
                    <div class="icon service"></div>
                    <p>在线客服</p>
                </a>
            </div>
            <div class="item" style="border-bottom-width: 1px;" @mouseenter="enter('qrcode')" @mouseleave="leave('qrcode')">
                <a href="javascript:void(0)" target="_blank">
                    <div class="icon damai"></div>
                    <p>APP下载</p>
                    <div class="qrcode"></div>
                </a>
            </div>
            <div class="item J_GoTop" @click="backTop()">
                <div class="icon gotop"></div>
                <p>回到顶部</p>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/style/BackTop.css'
    export default {
        name: "BackTop",
        mounted () {
            window.addEventListener('scroll', this.scrollToTop)
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollToTop)
        },
        methods:{
            backTop () {
                const that = this
                let timer = setInterval(() => {
                    let ispeed = Math.floor(-that.scrollTop / 5)
                    document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                    if (that.scrollTop === 0) {
                        clearInterval(timer)
                    }
                }, 16)
            },
            scrollToTop () {
                const that = this
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                that.scrollTop = scrollTop
                if (that.scrollTop > 150) {
                    document.getElementsByClassName("J_GoTop")[0].style.display = "block";
                } else {
                    document.getElementsByClassName("J_GoTop")[0].style.display = "none";
                }
            },
            enter(item){
                document.getElementsByClassName(item)[0].style.display = "block";
            },
            leave(item){
                document.getElementsByClassName(item)[0].style.display = "none";
            }
        }
    }
</script>

