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
        }
    }
</script>

<style scoped>

</style>
