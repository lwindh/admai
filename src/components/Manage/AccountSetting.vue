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
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :title="lab" :visible.sync="dialogFormVisible1" style="width: 50%;margin: 0 auto;">
            <el-form ref="formChange" :model="formChange" :rules="rules" v-if="lab === '登录密码'">
                <el-form-item label="旧密码" :label-width="formLabelWidth" style="width: 90%;" prop="oldPassword">
                    <el-input type="password" v-model="formChange.oldPassword" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="新密码" :label-width="formLabelWidth" style="width: 90%;" prop="password">
                    <el-input type="password" v-model="formChange.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" :label-width="formLabelWidth" style="width: 90%;" prop="checkPassword">
                    <el-input type="password" v-model="formChange.checkPassword" placeholder="请再次输入密码"></el-input>
                </el-form-item >
            </el-form>
            <el-form ref="formChange" :model="formChange" :rules="rules" v-else-if="lab === '邮箱验证'">
                <el-form-item label="邮箱" :label-width="formLabelWidth" style="width: 90%;" prop="email">
                    <el-input @blur="checkEmail" type="email" v-model="formChange.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
            </el-form>
            <el-form ref="formChange" :model="formChange" :rules="rules" v-else-if="lab === '手机验证'">
                <el-form-item label="手机" :label-width="formLabelWidth" style="width: 90%;" prop="phone">
                    <el-input @blur="checkPhone" v-model="formChange.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth" style="width: 90%;" prop="oldPassword">
                    <el-input type="password" v-model="formChange.oldPassword" placeholder="请输入密码"></el-input>
                </el-form-item>
            </el-form>
            <el-form ref="formChange" :model="formChange" :rules="rules" v-else>
                <el-form-item label="真实姓名" :label-width="formLabelWidth" style="width: 90%;" prop="name">
                    <el-input v-model="formChange.name"></el-input>
                </el-form-item>
                <el-form-item label="身份证号" :label-width="formLabelWidth" style="width: 90%;" prop="idCard">
                    <el-input v-model="formChange.idCard"></el-input>
                </el-form-item>
                <span class="el-icon-info" style="font-family: PingFangSC-Regular;font-size: 12px;color: #8890A0;">点击保存表示您已阅读并同意以下内容</span><br>
                <span style="font-family: PingFangSC-Regular;font-size: 10px;color: #BBBBBB;">根据法律规定以及国内公安部门对大型活动中购票用户或观演用户实名制的要求，实名制的项目在购票时需要提供你的实名信息，包括（姓名、身份证、护照、港澳居民来往内地通行证、台湾居民来往大陆通行证）。为方便您迅速下单，您可选择在购票前提前添加或在购票过程中提交购票人实名信息。为保证信息的真实性和唯一性，我们会基于您所提供的信息通过征信平台或其他惯常方式进行实名验证。</span>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="click">取 消</el-button>
                <el-button type="primary" @click="handleChange(lab)">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "AccountSetting",
        mounted(){
            if(this.$store.state.user.email != null)this.tableData[1].desc = '您验证的邮箱：'+this.$store.state.user.email;
            if(this.$store.state.user.idNumber != null)this.tableData[3].desc = '您已经实名验证成功:姓名:'+this.$store.state.user.actualName+' '+ this.$store.state.user.idNumber;
            this.tableData[2].desc += this.$store.state.user.phoneNumber;
            this.formChange.phone = this.$store.state.user.phoneNumber;
            this.formChange.email = this.$store.state.user.email;
        },
        data(){
            let validatePhone = (rule, value, callback) => {
                var reg=/^1[3456789]\d{9}$/;
                if (!reg.test(value)) {
                    callback(new Error('手机号格式错误'));
                } else if(this.status){
                    callback(new Error('手机号已被注册'));
                } else{
                    callback();
                }
            };
            let validateEmail = (rule, value, callback) => {
                var emreg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
                if (!emreg.test(value)) {
                    callback(new Error('邮箱格式错误'));
                } else if(this.emailStatus){
                    callback(new Error('邮箱已被注册'));
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
            let validateIdCard = (rule, value, callback) => {
                let idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
                if (!idcardReg.test(value)) {
                    callback(new Error('身份证不合法'));
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
                        desc: '您验证的手机：',
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
                    phone:'',
                    name: '',
                    idCard: '',
                    oldPassword:''
                },
                formLabelWidth:'110px',
                dialogFormVisible1: false,
                lab:'',
                status:false,
                emailStatus:false,
                rules: {
                    phone:[
                        {required: true, message: '请输入手机号', trigger: 'blur'},
                        { validator: validatePhone, trigger: 'blur'}
                    ],
                    password:[
                        { validator: validatePass, required: true, trigger: 'blur' }
                    ],
                    oldPassword:[
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    checkPassword: [
                        { validator: validatePass2, required: true, trigger: 'blur' }
                    ],
                    email:[
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                        { validator: validateEmail, trigger: 'blur'}
                    ],
                    name: [
                        {required: true,message: '请输入真实姓名', trigger: 'blur' }
                    ],
                    idCard:[
                        {required: true, message: '请输入身份证号码', trigger: 'blur'},
                        { validator: validateIdCard, trigger: 'blur'}
                    ],
                }
            }
        },
        methods: {
            click(){
                this.dialogFormVisible1 = false;
                this.formChange.oldPassword = '';
                this.formChange.password = '';
                this.formChange.checkPassword = '';
                this.formChange.email = this.$store.state.user.email;
                this.formChange.phone = this.$store.state.user.phoneNumber;
                this.formChange.name = '';
                this.formChange.idCard = '';
            },
            handleEdit(index, row) {
                this.lab = row.lab;
                if(row.lab === '实名认证' && this.$store.state.user.idNumber != null)
                    this.$message('你已经实名认证成功无法修改信息');
                if(row.lab === '实名认证' && this.$store.state.user.idNumber == null)
                    this.dialogFormVisible1 = true;
                if(row.lab !== '实名认证')this.dialogFormVisible1 = true;
            },
            handleChange(val){
                this.dialogFormVisible1 = false;
                if(val === '登录密码'){
                    this.$axios.post("http://118.31.7.87:8080/user/pwd/modify?uid="+this.$store.state.user.id+"&oldPwd="+this.formChange.oldPassword+"&newPwd="+this.formChange.password
                    ).then(res =>{
                        if(res.data.msg === '修改成功'){
                            this.$message({
                                type: 'success',
                                message: '修改密码成功!'
                            });
                        }else{
                            this.$message.error('修改密码失败!');
                        }
                    }).catch(err =>{
                        console.log(err);
                    });
                }
                else if(val === '邮箱验证'){
                    this.$axios({
                        method:'post',
                        url:"http://118.31.7.87:8080/user/bind/email",
                        data:{
                            "email": this.formChange.email,
                            "id": this.$store.state.user.id
                        }
                    }).then(res =>{
                        console.log(res.data);
                        if(res.data.msg === "绑定/更新成功"){
                            this.$message({
                                type: 'success',
                                message: '绑定/更新成功!'
                            });
                            this.$store.commit('changeEmail',this.formChange.email);
                            this.tableData[1].desc = '您验证的邮箱：'+this.$store.state.user.email;
                        }else{
                            this.$message.error('绑定/更新失败!');
                        }
                    }).catch(err =>{
                        console.log(err);
                    });
                }
                else if(val === '手机验证'){
                    this.$axios.post("http://118.31.7.87:8080/user/phone?uid="+this.$store.state.user.id+"&phone="+this.formChange.phone+"&pwd="+this.formChange.oldPassword
                    ).then(res =>{
                        console.log(res.data);
                        if(res.data.msg === '更改成功'){
                            this.$message({
                                type: 'success',
                                message: '修改成功!'
                            });
                            this.$store.commit('changePhone',this.formChange.phone);
                            this.tableData[2].desc = '您验证的手机：' + this.$store.state.user.phoneNumber;
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    }).catch(err =>{
                        console.log(err);
                    });
                }
                else {
                    this.$axios({
                        method: 'post',
                        url: "http://118.31.7.87:8080/user/bind/real",
                        data: {
                            "id": this.$store.state.user.id,
                            "actualName": this.formChange.name,
                            "idNumber": this.formChange.idCard
                        }
                    }).then(res =>{
                        console.log(res.data);
                        if(res.data.msg === '认证成功'){
                            this.$message({
                                type: 'success',
                                message: '实名验证成功!'
                            });
                            let a={name:this.formChange.name,id:this.formChange.idCard};
                            this.$store.commit('changeIdCard',a);
                            this.tableData[3].desc = '您已经实名验证成功:姓名:'+this.$store.state.user.actualName+' '+ this.$store.state.user.idNumber;
                        }else{
                            this.$message.error('实名验证失败!');
                        }
                    }).catch(err =>{
                        console.log(err);
                    });
                }
            },
            checkPhone(){
                if(this.formChange.phone !== this.$store.state.user.phoneNumber)
                this.$axios.get("http://118.31.7.87:8080/user/register/phone?phoneNumber="+this.formChange.phone
                ).then(res =>{
                    if(res.data.msg === '手机号未注册'){
                        this.status = false;
                    }else{
                        this.status = true;
                    }
                    this.$refs['formChange'].validateField('phone');
                }).catch(err =>{
                    console.log(err);
                });
            },
            checkEmail(){
                if(this.formChange.email !== this.$store.state.user.email)
                    this.$axios.get("http://118.31.7.87:8080/user/register/email?email="+this.formChange.email
                    ).then(res =>{
                        if(res.data.msg === '邮箱未绑定'){
                            this.emailStatus = false;
                        }else{
                            this.emailStatus = true;
                        }
                        this.$refs['formChange'].validateField('email');
                    }).catch(err =>{
                        console.log(err);
                    });
            }
        },
    }
</script>

<style scoped>

</style>
