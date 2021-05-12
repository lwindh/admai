<template>
    <div>
        <el-button type="primary" @click="addItem()" style="margin-left: 10%;margin-top: 10px;">发布演出</el-button>
        <el-table
                :data="tableData"
                style="width: 80%;margin: 0 auto;margin-top: 10px;">
            <el-table-column
                    prop="category.name"
                    label="类别"
            >
            </el-table-column>
            <el-table-column
                    prop="title"
                    label="演出标题"
            >
            </el-table-column>
            <el-table-column
                    prop="artist.name"
                    label="艺术家/团队"
            >
            </el-table-column>
            <el-table-column
                    prop="city.name"
                    label="演出城市"
            >
            </el-table-column>
            <el-table-column
                    prop="location.detail"
                    label="演出地点"
            >
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="添加"
                    width="195px"
            >
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="primary"
                            @click="handleAddTime(scope.row)">添加时间</el-button>
                    <el-button
                            size="mini"
                            type="primary"
                            @click="handleAddTicket(scope.row)">添加票务</el-button>
                </template>
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
            >
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.row)">修改</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                @current-change="handleCurrentChange"
                style="margin-right: 10%;float: right;"
                layout="total,prev, pager, next"
                :page-size="30"
                :total="total">
        </el-pagination>
        <el-dialog title="添加时间" :visible.sync="dialogFormVisible" style="width: 60%;margin: 0 auto;">
            <el-form :model="form" :inline="true" class="demo-ruleForm from">
                <el-form-item
                        v-for="(time, index) in form.times"
                        :label="'演出时间' + index"
                        :key="time.key"
                        :prop="'times.' + index + '.value'"
                        :rules="{required: true, message: '演出时间不能为空', trigger: 'blur'}"
                >
                    <el-date-picker
                            v-model="time.value"
                            type="datetime"
                            style="width: 200px;"
                            :picker-options="pickerOptions"
                            value-format="timestamp">
                    </el-date-picker>
                   <el-button @click.prevent="removeTime(time)">删除</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button @click="addTime">新增演出时间</el-button>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleAddTime1">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="添加票档" :visible.sync="dialogFormVisible1" style="width: 800px;margin: 0 auto;">
            <el-form :model="formTicket" :inline="true" class="demo-ruleForm from">
                <el-form-item
                        v-for="(ticket, index) in formTicket.tickets"
                        :label="'票档' + index"
                        :key="ticket.key"
                        :prop="'tickets.' + index + '.num'"
                        :rules="{required: true, message: '票档不能为空', trigger: 'blur'}"
                >
                    <el-input type="number" style="width: 260px;" v-model="ticket.num" placeholder="请输入票数">
                        <template slot="prepend">共</template>
                        <template slot="append">张票</template>
                    </el-input>
                    <el-input type="number" style="width: 260px;" v-model="ticket.money" placeholder="请输入单价">
                        <template slot="prepend">每张</template>
                        <template slot="append">元</template>
                    </el-input>
                    <el-input type="text" style="width: 260px;" v-model="ticket.description" placeholder="请输入位置">
                        <template slot="prepend">座位</template>
                    </el-input>
                    <el-button @click.prevent="removeTicket(ticket)">删除</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button @click="addTicket">新增票档</el-button>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="handleAddTicket1">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "AddPerform",
        data(){
            return{
                tableData: [],
                nowPage:1,
                search: '',
                total:1,
                form:{
                    times: [{
                        value: ''
                    }],
                },
                formTicket:{
                    tickets: [{
                        num: '',
                        money:'',
                        description:''
                    }],
                },
                performId:'',
                dialogFormVisible:false,
                dialogFormVisible1:false,
                formLabelWidth:'80px',
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                }
            }
        },
        mounted(){
            this.getShowList(1);
        },
        methods: {
            handleEdit(row) {
                this.$router.push({
                    path: `/ChangeShow`,
                    query:{
                        uid:row.id
                    }
                });
            },
            handleDelete(row) {
                console.log(row);
                this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.post("http://118.31.7.87:8080/perform/delete/"+row.id)
                        .then(res =>{
                            if(res.data.msg === '删除成功'){
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                                this.getShowList(this.nowPage);
                                this.$axios.post("http://118.31.7.87:8080/time/delete/"+row.id)
                                    .then(res =>{
                                        console.log(res.data);
                                        this.$axios.post("http://118.31.7.87:8080/ticket/delete/"+row.id)
                                            .then(res =>{
                                                console.log(res.data);
                                            }).catch(err =>{
                                            console.log(err);
                                        });
                                    }).catch(err =>{
                                    console.log(err);
                                });
                            }else{
                                this.$message.error(res.data.msg);
                            }
                        }).catch(err =>{
                        console.log(err);
                    });

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handleAddTime(row){
                this.performId = row.id;
                this.dialogFormVisible = true;
            },
            handleAddTime1(){
                let data = [];
                this.form.times.forEach((value)=>{
                    let a = {"performId": this.performId,"time":value.value};
                    data.push(a);
                });
                this.$axios({
                    method:"post",
                    url:"http://118.31.7.87:8080/time/add",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    data:JSON.stringify(data)
                }).then(res =>{
                    if(res.data.msg === "新增成功"){
                        this.dialogFormVisible = false;
                        this.$message({
                            type: 'success',
                            message: '添加时间成功!'
                        });
                    }else{
                        this.$message.error('添加时间失败!');
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            handleAddTicket(row){
                this.performId = row.id;
                this.dialogFormVisible1 = true;
            },
            handleAddTicket1(){
                console.log(this.formTicket.tickets);
                let data = [];
                this.formTicket.tickets.forEach((value)=>{
                    let a = {
                        "performId": this.performId,
                        "count": value.num,
                        "description": value.description,
                        "money": value.money
                    };
                    data.push(a);
                });

                this.$axios({
                    method:"post",
                    url:"http://118.31.7.87:8080/ticket/add",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    data:JSON.stringify(data)
                }).then(res =>{
                    console.log(res.data);
                    if(res.data.msg === "新增成功"){
                        this.dialogFormVisible1 = false;
                        this.$message({
                            type: 'success',
                            message: '添加票档成功!'
                        });
                    }else{
                        this.$message.error('添加票档失败!');
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            addItem(){
                this.$router.push({
                    path: `/AddShow`
                });
            },
            getShowList(val){
                this.$axios({
                    method:"post",
                    url:"http://118.31.7.87:8080/perform/"+val,
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    data:{
                    }
                }).then(res =>{
                    if(res.data.msg === '成功'){
                        this.tableData = res.data.data.data;
                        this.total = parseInt(res.data.data.total);
                    }else{
                        this.$message.error('获取失败!');
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            handleCurrentChange(val) {
                this.nowPage = val;
                this.getShowList(val);
            },
            removeTime(item) {
                var index = this.form.times.indexOf(item);
                if (index !== -1) {
                    this.form.times.splice(index, 1)
                }
            },
            addTime() {
                this.form.times.push({
                    value: '',
                    key: Date.now()
                });
            },
            removeTicket(item) {
                var index = this.formTicket.tickets.indexOf(item);
                if (index !== -1) {
                    this.formTicket.tickets.splice(index, 1)
                }
            },
            addTicket() {
                this.formTicket.tickets.push({
                    num: '',
                    money:'',
                    description:'',
                    key: Date.now()
                });
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
