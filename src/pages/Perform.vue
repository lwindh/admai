<template>
    <div>
        <BackTop/>
        <Header/>
        <Detail/>
    </div>
</template>

<script>
    import BackTop from "@/components/BackTop";
    import Header from "@/components/Main/Header";
    import Detail from "@/components/Perform/Detail";
    export default {
        name: "Perform",
        components:{
            BackTop,
            Header,
            Detail
        },
        mounted(){
            this.change();
        },
        methods:{
            change(){
                document.getElementsByClassName('location-header')[0].style.display = "none";
                let list = document.getElementsByClassName('type-recommend');
                list[0].className = 'type-recommend';
            }
        },
        created () {
            //在页面刷新时将vuex里的信息保存到sessionStorage里
            window.addEventListener("beforeunload", () => {
                /*console.log("存vuex前的数据")
                console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))*/

                sessionStorage.setItem("store", JSON.stringify(this.$store.state))

                /*console.log("存vuex后的数据")
                console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))*/
            })
            // 在页面加载时读取sessionStorage里的状态信息
            if (sessionStorage.getItem("store")) {
                /*console.log("读取sessionstorage前的数据")
                console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))*/

                this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))

                /*console.log("读取sessionstorage后的数据")
                console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))*/
            }
        }
    }
</script>

<style scoped>

</style>
