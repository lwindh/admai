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
        }
    }
</script>

<style scoped>

</style>
