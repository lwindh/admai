<template>
        <el-menu
                :default-active="this.$store.state.path"
                class="el-menu-vertical-demo menu"
                router
                @open="handleOpen"
                @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-goods"></i>
                    <span>交易中心</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="OrderList">订单管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-user"></i>
                    <span>账户中心</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="MyAddress">收货地址</el-menu-item>
                    <el-menu-item index="AccountSetting">账号设置</el-menu-item>
                    <el-menu-item index="MyInfo">个人信息</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
</template>

<script>
    export default {
        name: "Lab",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
    }
</script>

<style scoped>
    .el-menu{
        margin-left: 10%;
        margin-top: 20px;
        overflow: hidden;
        border: 1px solid #efefef;
    }
</style>
