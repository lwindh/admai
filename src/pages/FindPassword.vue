<template>
    <div>
        <div id="header">
            <div class="header-layout">
                <h1 class="logo">
                    <router-link to="/">大麦</router-link>
                </h1>
                <h2 class="logo-title"> 找回密码 </h2>
                <ul class="header-nav">
                    <li class="nav-first"><router-link to="/Register"> 注册 </router-link></li>
                    <li><router-link to="/Login"> 登录 </router-link></li>
                </ul>

            </div>
        </div>
        <div id="content">
            <div class="content-layout">
                <div class="maincenter">
                    <div class="maincenter-box">
                        <div class="maincenter-box-tip">
                            <p class="ui-tiptext ui-tiptext-message ft-14">
                                <i class="ui-tiptext-icon iconfont el-icon-warning" title=" 提示 "></i>
                                请输入你需要找回登录密码的手机号
                            </p>
                        </div>
                        <el-form status-icon :rules="rules" class="ui-form ui-form-item" ref="form" :model="form" label-width="80px">
                            <el-form-item label="登录名:" prop="phone">
                                <el-input v-model="form.phone" placeholder="手机号"></el-input>
                            </el-form-item>
                            <el-form-item label="输入密码" prop="password">
                                <el-tooltip class="item" effect="dark" content="6-20个字符" placement="right">
                                    <el-input type="password" v-model="form.password" placeholder="输入密码" autocomplete="off"></el-input>
                                </el-tooltip>
                            </el-form-item>
                            <el-form-item label="确认密码" prop="checkPassword">
                                <el-input type="password" v-model="form.checkPassword" placeholder="再次输入密码" autocomplete="off"></el-input>
                            </el-form-item >
                            <el-form-item label="验证:" prop="check">
                                <CheckedImg @patch="getStatus"/>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('form')">确定</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/style/FindPassword.css'
    import CheckedImg from "@/components/Register/CheckedImg";
    export default {
        name: "FindPassword",
        components:{
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
            let validatePhone = (rule, value, callback) => {
                var reg=/^1[3456789]\d{9}$/;
                var emreg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
                if (!reg.test(value) &&  !emreg.test(value)) {
                    callback(new Error('格式错误'));
                } else {
                    callback();
                }
            };
            return{
                form:{
                    phone:'',
                    check:0,
                    password:'',
                    checkPassword:''
                },
                rules: {
                    phone:[
                        { required: true, message: '请输入手机号', trigger: 'blur'},
                        { validator: validatePhone, trigger: 'blur'}
                    ],
                    check:[
                        {validator: validateChecked1, trigger: 'change'}
                    ],
                    password: [
                        { validator: validatePass, required: true, trigger: 'blur' }
                    ],
                    checkPassword: [
                        { validator: validatePass2, required: true, trigger: 'blur' }
                    ],
                }
            }
        },
        methods:{
            getStatus(data){
                this.form.check = data ? 1:0;
                this.$refs['form'].validateField('check')
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid && this.form.check !== 0) {
                                this.$axios({
                                    method:"post",
                                    url:"http://118.31.7.87:8080/user/pwd/find?phone="+this.phone+"&pwd="+this.password,
                                }).then(res =>{
                                    if(res.data.msg === "成功"){
                                        this.$message.error('修改密码成功!');
                                        this.$router.push({
                                            path: '/Login'
                                        })
                                    }else{
                                        this.$message.error('注册失败!');
                                    }
                                }).catch(err =>{
                                    console.log(err);
                                });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>
