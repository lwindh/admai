<template>
    <div>
        <LoginHeader class="header"/>
        <LoginContent class="content"/>
    </div>
</template>

<script>
    import LoginHeader from "@/components/Login/LoginHeader";
    import LoginContent from "@/components/Login/LoginContent";
    export default {
        name: "Login",
        components: {
            LoginHeader,
            LoginContent
        },
    }
</script>

<style scoped>
    .header{
        height: 90px;
    }
</style>
