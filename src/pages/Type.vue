<template>
    <div>
        <BackTop/>
        <Header/>
        <TypeDetail/>
    </div>
</template>

<script>
    import BackTop from "@/components/BackTop";
    import Header from "@/components/Main/Header";
    import TypeDetail from "@/components/Type/TypeDetail";
    export default {
        name: "Type",
        components:{
            BackTop,
            TypeDetail,
            Header
        },
        mounted(){
            this.change();
        },
        methods:{
            change(){
                document.getElementsByClassName('location-header')[0].style.display = "none";
                let list = document.getElementsByClassName('type-recommend');
                list[0].className = 'type-recommend';
                list[1].className = 'type-recommend select';
            },
        },
        created () {
            // 在页面加载时读取sessionStorage里的状态信息
            if (sessionStorage.getItem('store')) {
                this.$store.replaceState(
                    Object.assign(
                        {},
                        this.$store.state,
                        JSON.parse(sessionStorage.getItem('store'))
                    )
                )
            }

            // 在页面刷新时将vuex里的信息保存到sessionStorage里
            // beforeunload事件在页面刷新时先触发
            window.addEventListener('beforeunload', () => {
                sessionStorage.setItem('store', JSON.stringify(this.$store.state))
            })
        }
    }
</script>


