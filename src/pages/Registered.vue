<template>
    <div>
        <LoginHeader class="header"/>
        <div>
            <div class="register-form">
                <div class="fm-content">
                    <el-row type="flex" class="row-bg" justify="center">
                        <el-col :span="8"><div class="grid-content bg-purple">
                            <el-form status-icon label-width="100px" :model="form" :rules="rules" ref="form" class="demo-ruleForm from" >
                                <el-form-item label="手机号" prop="username">
                                    <el-input @change="checkPhone" v-model="form.username"></el-input>
                                </el-form-item>
                                <el-form-item label="输入密码" prop="password">
                                    <el-tooltip class="item" effect="dark" content="6-20个字符" placement="right">
                                        <el-input type="password" v-model="form.password" placeholder="输入密码" autocomplete="off"></el-input>
                                    </el-tooltip>
                                </el-form-item>
                                <el-form-item label="确认密码" prop="checkPassword">
                                    <el-input type="password" v-model="form.checkPassword" placeholder="再次输入密码" autocomplete="off"></el-input>
                                </el-form-item >
                                <el-form-item label="滑动验证码" prop="check1">
                                    <CheckedImg @patch="getStatus"/>
                                </el-form-item>
                                <el-form-item prop="check">
                                    <el-checkbox @change="checkedChange" v-model="checked" name="zc" autocomplete="off">我已阅读并同意 <a href="https://sale.damai.cn/contents/4677/13574.html">《会员协议》</a>和
                                        <a href="https://sale.damai.cn/contents/4677/13572.html">《隐私权条款》</a></el-checkbox>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('form')">同意并注册</el-button>
                                </el-form-item>
                            </el-form>
                        </div></el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginHeader from "@/components/Login/LoginHeader";
    import CheckedImg from "@/components/Register/CheckedImg";
    export default {
        name: "Registered",
        components:{
            LoginHeader,
            CheckedImg
        },
        data(){
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if(value.length<6 || value.length>20){
                    callback(new Error('密码格式不正确'));
                }
                else {
                    if (this.form.checkPassword !== '') {
                        this.$refs.form.validateField('checkPassword');
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.form.password) {
                    callback(new Error('密码不一致!'));
                } else {
                    callback();
                }
            };
            let validateChecked1 = (rule, value, callback) => {
                if (value === 0) {
                    callback(new Error('滑动验证不通过'));
                } else {
                    callback();
                }
            };
            let validateChecked = (rule, value, callback) => {
                if (value === 0) {
                    callback(new Error('请同意注册协议'));
                } else {
                    callback();
                }
            };
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
            return {
                form: {
                    username:'',
                    password:'',
                    checkPassword:'',
                    verification:"",
                    check:0,
                    check1:0
                },
                status:false,
                checked: false,
                rules: {
                    username:[
                        { required: true, message: '请输入手机号', trigger: 'blur'},
                        { validator: validatePhone, trigger: 'blur'}
                    ],
                    password: [
                        { validator: validatePass, required: true, trigger: 'blur' }
                    ],
                    checkPassword: [
                        { validator: validatePass2, required: true, trigger: 'blur' }
                    ],
                    check1:[
                        {validator: validateChecked1, trigger: 'change'}
                    ],
                    check:[
                        {validator: validateChecked, trigger: 'change'}
                    ]
                }
            }
        },
        methods: {
            getStatus(data){
                this.form.check1 = data ? 1:0;
                this.$refs['form'].validateField('check1')
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid && this.check1 !== 0) {
                        this.$axios({
                            method:"post",
                            url:"http://118.31.7.87:8080/user/register",
                            headers:{
                            'Content-Type': 'application/json'
                            },
                            data:{
                                "password": this.form.password,
                                "phoneNumber": this.form.username
                            }
                        }).then(res =>{
                            if(res.data.msg === "注册成功"){
                                this.$axios.post("http://118.31.7.87:8080/user/login",
                                    {
                                        account: this.form.username,
                                        password: this.form.password
                                    }
                                ).then(res1 =>{
                                    // console.log(res);
                                    if(res1.data.msg === '成功'){
                                        this.$store.commit('getUser',res1.data.data);
                                        if(this.$route.query.path != null){
                                            this.$router.push({
                                                path: this.$route.query.path
                                            })
                                        }else {
                                            this.$router.push({
                                                path: `/`
                                            })
                                        }
                                    }
                                }).catch(err =>{
                                    console.log(err);
                                });
                            }else{
                                this.$message.error('注册失败!');
                            }
                        }).catch(err =>{
                            console.log(err);
                        });
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
                //
            },
            checkedChange(){
                this.form.check = this.checked ? 1:0;
            },
            checkPhone(){
                this.$axios.get("http://118.31.7.87:8080/user/register/phone?phoneNumber="+this.form.username
                ).then(res =>{
                    console.log(res);
                    if(res.data.msg === '手机号未注册'){
                        this.status = false;
                    }else{
                        this.status = true;
                    }
                    this.$refs['form'].validateField('username')
                }).catch(err =>{
                    console.log(err);
                });
            }
        }
    }
</script>

<style scoped>
    .header{
        height: 90px;
    }
    .register-form{
        background-color: #f8f8f8;
        padding-top: 40px;
        padding-bottom: 50px;
    }
    .fm-content{
        width: 1200px;
        height: 500px;
        background: #fff;
        padding-top: 40px;
        margin: 0 auto;
    }
    a{
        color: #5584ff;
        text-decoration: none;
    }
    a:link,a:visited{
        color: #5584ff;
    }
</style>
