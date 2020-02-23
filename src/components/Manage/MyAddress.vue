<template>
    <div>
        <el-button type="primary" @click="addItem()" style="margin-left: 10%;margin-top: 10px;">创建新地址</el-button>
        <el-table
                :data="tableData"
                style="width: 80%;margin: 0 auto;margin-top: 10px;">
            <el-table-column
                    prop="user"
                    label="收件人"
            >
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="手机"
            >
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="配送地址"
            >
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
            >
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="添加地址" :visible.sync="dialogFormVisible" style="width: 50%;margin: 0 auto;">
            <el-form :model="form" :rules="rules">
                <el-form-item label="收件人" :label-width="formLabelWidth" style="width: 90%;" prop="user">
                    <el-input v-model="form.user"></el-input>
                </el-form-item>
                <el-form-item label="手机" :label-width="formLabelWidth" style="width: 90%;" prop="phone">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="配送地址" :label-width="formLabelWidth" style="width: 90%;" prop="address">
                    <el-input v-model="form.address" ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleAdd">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="修改地址" :visible.sync="dialogFormVisible1" style="width: 50%;margin: 0 auto;">
            <el-form :model="formChange" :rules="rules">
                <el-form-item label="收件人" :label-width="formLabelWidth" style="width: 90%;" prop="user">
                    <el-input v-model="formChange.user"></el-input>
                </el-form-item>
                <el-form-item label="手机" :label-width="formLabelWidth" style="width: 90%;" prop="phone">
                    <el-input v-model="formChange.phone"></el-input>
                </el-form-item>
                <el-form-item label="配送地址" :label-width="formLabelWidth" style="width: 90%;" prop="address">
                    <el-input v-model="formChange.address"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="handleChange">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "MyAddress",
        data(){
            let validatePhone = (rule, value, callback) => {
                var reg=/^1[3456789]\d{9}$/;
                if (!reg.test(value)) {
                    callback(new Error('手机号格式错误'));
                } else{
                    callback();
                }
            };
            return{
                tableData: [{
                    user: '王小虎',
                    phone: '18012347895',
                    address: '天津市静海区',
                },
                ],
                form:{
                    user: '',
                    phone: '',
                    address: '',
                },
                formChange:{
                    user: '',
                    phone: '',
                    address: '',
                },
                formLabelWidth:'110px',
                dialogFormVisible: false,
                dialogFormVisible1: false,
                rules: {
                    user: [
                        {required: true, message: '请输入收件人', trigger: 'blur'}
                    ],
                    phone:[
                        {required: true, message: '请输入手机号', trigger: 'blur'},
                        { validator: validatePhone, trigger: 'blur'}
                    ],
                    address:[
                        {required: true, message: '请选择收货地址', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleEdit(index, row) {
                this.dialogFormVisible1 = true;
                this.formChange.user = row.user;
                this.formChange.phone = row.phone;
                this.formChange.address = row.address;
            },
            handleDelete(index, row) {
                console.log(row,index);
                this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.post("")
                        .then(res =>{
                            if(res.data.status === 'success'){
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                                this.$axios.post("")
                                    .then(res =>{
                                        this.tableData = res.data.data.list;
                                        this.totalPage=res.data.data.total;
                                    }).catch(err =>{
                                    console.log(err);
                                });
                            }else{
                                this.$message.error('删除失败!');
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
            handleAdd(){
                this.dialogFormVisible = false;
                this.$axios.post(""
                ).then(res =>{
                    if(res.data.status === 'success'){
                        this.$message({
                            type: 'success',
                            message: '添加成功!'
                        });
                        this.$axios.post("")
                            .then(res =>{
                                this.tableData = res.data.data.list;
                            }).catch(err =>{
                            console.log(err);
                        });
                    }else{
                        this.$message.error('添加失败!');
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            addItem(){
                this.dialogFormVisible = true;
            },
            handleChange(){
                this.dialogFormVisible1 = false;
                this.$axios.post(""
                ).then(res =>{
                    if(res.data.status === 'success'){
                        this.$message({
                            type: 'success',
                            message: '添加成功!'
                        });
                        this.$axios.post("")
                            .then(res =>{
                                this.tableData = res.data.data.list;
                            }).catch(err =>{
                            console.log(err);
                        });
                    }else{
                        this.$message.error('添加失败!');
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
