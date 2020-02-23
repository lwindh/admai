<template>
    <div>
        <el-table
                :show-header=false
                border
                :data="tableData"
                style="width: 60%;margin-top: 100px;margin-left: 50px;">
            <el-table-column
                    prop="lab"
                    label="名称"
                    width="100px"
            >
            </el-table-column>
            <el-table-column
                    prop="desc"
                    label="描述"

            >
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width='100px'
            >
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :title="lab" :visible.sync="dialogFormVisible1" style="width: 50%;margin: 0 auto;">
            <el-form :model="formChange" :rules="rules" v-if="lab === '登录密码'">
                <el-form-item label="密码" :label-width="formLabelWidth" style="width: 90%;" prop="password">
                    <el-input type="password" v-model="formChange.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" :label-width="formLabelWidth" style="width: 90%;" prop="checkPassword">
                    <el-input type="password" v-model="formChange.checkPassword" placeholder="再次输入密码"></el-input>
                </el-form-item >
            </el-form>
            <el-form :model="formChange" :rules="rules" v-else-if="lab === '邮箱验证'">
                <el-form-item label="邮箱" :label-width="formLabelWidth" style="width: 90%;" prop="email">
                    <el-input v-model="formChange.email"></el-input>
                </el-form-item>
            </el-form>
            <el-form :model="formChange" :rules="rules" v-else-if="lab === '手机验证'">
                <el-form-item label="手机" :label-width="formLabelWidth" style="width: 90%;" prop="phone">
                    <el-input v-model="formChange.phone"></el-input>
                </el-form-item>
            </el-form>
            <el-form :model="formChange" :rules="rules" v-else>
                <el-form-item label="手机" :label-width="formLabelWidth" style="width: 90%;" prop="phone">
                    <el-input v-model="formChange.phone"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="click">取 消</el-button>
                <el-button type="primary" @click="handleChange">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "AccountSetting",
        data(){
            let validatePhone = (rule, value, callback) => {
                var reg=/^1[3456789]\d{9}$/;
                if (!reg.test(value)) {
                    callback(new Error('手机号格式错误'));
                } else{
                    callback();
                }
            };
            let validateEmail = (rule, value, callback) => {
                var emreg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
                if (!emreg.test(value)) {
                    callback(new Error('格式错误'));
                } else {
                    callback();
                }
            };
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if(value.length<6 || value.length>20){
                    callback(new Error('密码格式不正确'));
                }
                else {
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formChange.password) {
                    callback(new Error('密码不一致!'));
                } else {
                    callback();
                }
            };
            return{
                tableData: [
                    {
                        lab: '登录密码',
                        desc: '',
                    },
                    {
                        lab: '邮箱验证',
                        desc: '验证邮箱可帮助您快速找回密码，并可接收订单、演出通知、促销活动等提醒',
                    },
                    {
                        lab: '手机验证',
                        desc: '验证手机可帮助您快速找回密码，并可接收订单、演出通知、促销活动等提醒',
                    },
                    {
                        lab: '实名认证',
                        desc: '认证您的实名信息，提高安全等级',
                    },
                ],
                formChange:{
                    password:'',
                    checkPassword:'',
                    email: '',
                    phone:''
                },
                formLabelWidth:'110px',
                dialogFormVisible1: false,
                lab:'',
                rules: {
                    phone:[
                        {required: true, message: '请输入手机号', trigger: 'blur'},
                        { validator: validatePhone, trigger: 'blur'}
                    ],
                    password:[
                        { validator: validatePass, required: true, trigger: 'blur' }
                    ],
                    checkPassword: [
                        { validator: validatePass2, required: true, trigger: 'blur' }
                    ],
                    email:[
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                        { validator: validateEmail, trigger: 'blur'}
                    ],
                }
            }
        },
        methods: {
            click(){
                this.dialogFormVisible1 = false;
                this.formChange.password = '';
                this.formChange.checkPassword = '';
                this.formChange.phone = '';
                this.formChange.email = '';
            },
            handleEdit(index, row) {
                this.dialogFormVisible1 = true;
                this.lab = row.lab;
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
