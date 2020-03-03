<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 80%;margin: 0 auto;margin-top: 10px;">
            <el-table-column
                    label="订单信息"
                    >
                <!--<template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <div>
                            <div>
                                {{orderItem.title}}
                            </div>
                            <div>
                                <span>时间:{{new Date(scope.row.time).toLocaleString()}}</span>
                            </div>
                            <div>
                                地点:{{orderItem.location.detail}}
                            </div>
                        </div>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{orderItem.title }}</el-tag>
                        </div>
                    </el-popover>
                </template>-->
            </el-table-column>
            <el-table-column
                    label="单价"
                    >
            </el-table-column>
            <el-table-column
                    prop="count"
                    label="数量"
                    >
            </el-table-column>

            <el-table-column
                    prop="money"
                    label="小计"
                    >
            </el-table-column>
            <el-table-column
                    label="日期"
                    width="160px">
                <template slot-scope="scope">
                    <el-tag>{{new Date(scope.row.createTime).toLocaleString()}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                    prop="state"
                    label="状态"
                    >
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    >
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">取消</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                @current-change="handleCurrentChange"
                background
                layout="prev, pager, next"
                :page-size="10"
                style="float: right;margin-right: 10%;"
                :total="total">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "OrderList",
        mounted(){
            this.getOrderList(1);
        },
        data(){
            return{
                tableData: [],
                total:10,
                orderItem:[],
            }
        },
        methods: {
            handleClick(row) {
                console.log(row);
            },
            getOrderList(val){
                this.$axios({
                    method: 'get',
                    url: "http://118.31.7.87:8080/order/user?userId="+this.$store.state.user.id+"&pageNum="+val,
                }).then(res =>{
                    this.tableData = res.data.data.data;
                    this.total = parseInt(res.data.data.total);
                }).catch(err =>{
                    console.log(err);
                });
            },
            handleCurrentChange(val) {
                this.getOrderList(val);
            },
            getItem(){
                this.$axios({
                    method: 'post',
                    url: "http://118.31.7.87:8080/perform/detail/"+this.tableData.performId,
                }).then(res =>{
                    if(res.data.msg === "成功"){
                        this.orderItem = res.data.data;
                    }else{
                        this.$message.error(res.data.msg);
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
        },
    }
</script>

<style scoped>

</style>
