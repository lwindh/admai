<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 80%;margin: 0 auto;margin-top: 10px;">
            <el-table-column
                    prop="order"
                    label="订单信息"
                    >
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="单价"
                    >
            </el-table-column>
            <el-table-column
                    prop="num"
                    label="数量"
                    >
            </el-table-column>

            <el-table-column
                    prop="total"
                    label="小计"
                    >
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
                    >
            </el-table-column>
            <el-table-column
                    prop="status"
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
    </div>
</template>

<script>
    export default {
        name: "OrderList",
        data(){
            return{
                tableData: [{
                    order: '王小虎',
                    price: 180,
                    num: 2,
                    total: 360,
                    status: '已支付',
                    date: '2016-05-02',
                },
                ],
            }
        },
        methods: {
            handleClick(row) {
                console.log(row);
            }
        },
    }
</script>

<style scoped>

</style>
