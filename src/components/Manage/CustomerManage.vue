<template>
    <div>
        <el-button type="primary" @click="addItem()" style="margin-left: 10%;margin-top: 10px;">新建购票人</el-button>
        <el-table
                :data="tableData"
                style="width: 80%;margin: 0 auto;margin-top: 10px;">
            <el-table-column
                    prop="user"
                    label="购票人"
            >
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="证件类型"
            >
            </el-table-column>
            <el-table-column
                    prop="idCard"
                    label="证件号码"
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
        <el-dialog title="添加购票人" :visible.sync="dialogFormVisible" style="width: 50%;margin: 0 auto;">
            <el-form :model="form" :rules="rules">
                <el-form-item label="购票人" :label-width="formLabelWidth" style="width: 90%;" prop="user">
                    <el-input v-model="form.user"></el-input>
                </el-form-item>
                <el-form-item label="证件类型" :label-width="formLabelWidth" style="width: 90%;" prop="type">
                    <el-select v-model="form.type" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="证件号码" :label-width="formLabelWidth" style="width: 90%;" prop="idCard">
                    <el-input v-model="form.idCard" ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleAdd">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="修改购票人" :visible.sync="dialogFormVisible1" style="width: 50%;margin: 0 auto;">
            <el-form :model="formChange" :rules="rules">
                <el-form-item label="购票人" :label-width="formLabelWidth" style="width: 90%;" prop="user">
                    <el-input v-model="formChange.user"></el-input>
                </el-form-item>
                <el-form-item label="证件类型" :label-width="formLabelWidth" style="width: 90%;" prop="type">
                    <el-select v-model="formChange.type" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="证件号码" :label-width="formLabelWidth" style="width: 90%;" prop="idCard">
                    <el-input v-model="formChange.idCard" ></el-input>
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
        name: "CustomerManage",
        data(){
            return{
                tableData: [{
                    user: '王小虎',
                    type: '身份证',
                    idCard: '51722198002155962',
                },
                ],
                options: [{
                    value: '1',
                    label: '身份证'
                }, {
                    value: '2',
                    label: '护照'
                },{
                    value: '3',
                    label: '港澳通行证'
                },],
                form:{
                    user: '',
                    type: '',
                    idCard: '',
                },
                formChange:{
                    user: '',
                    type: '',
                    idCard: '',
                },
                formLabelWidth:'110px',
                dialogFormVisible: false,
                dialogFormVisible1: false,
                rules: {
                    user: [
                        {required: true, message: '请输入收件人', trigger: 'blur'}
                    ],
                    type:[
                        {required: true, message: '请选择证件类型', trigger: 'change'},
                    ],
                    idCard:[
                        {required: true, message: '请输入证件号码', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleEdit(index, row) {
                this.dialogFormVisible1 = true;
                this.formChange.user = row.user;
                this.formChange.type = row.type;
                this.formChange.idCard = row.idCard;
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
