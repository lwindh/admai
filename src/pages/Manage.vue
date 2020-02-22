<template>
    <div>
        <BackTop/>
        <Header/>
        <Lab/>
    </div>

</template>

<script>
    import Lab from '@/components/Manage/ManageTab'
    import BackTop from "@/components/BackTop";
    import Header from "@/components/Main/Header";

    export default {
        name: "Manager",
        components:{
            Lab,
            BackTop,
            Header,
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
            // 在页面加载时读取sessionStorage
            if (sessionStorage.getItem('store')) {
                this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
            }
            // 在页面刷新时将store保存到sessionStorage里
            window.addEventListener('beforeunload', () => {
                sessionStorage.setItem('store', JSON.stringify(this.$store.state))
            })
        }
    }
</script>

<style scoped>

</style>
