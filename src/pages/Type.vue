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
        data(){
            return{

            }
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
        }
    }
</script>

<style scoped>

</style>
