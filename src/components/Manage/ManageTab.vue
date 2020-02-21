<template>
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-goods"></i>
                <span>交易中心</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">订单管理</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-user"></i>
                <span>账户中心</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="2-1">收货地址</el-menu-item>
                <el-menu-item index="2-2">账号设置</el-menu-item>
                <el-menu-item index="2-3">个人信息</el-menu-item>
                <el-menu-item index="2-4">常用购票人</el-menu-item>
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
        }
    }
</script>

<style scoped>

</style>
