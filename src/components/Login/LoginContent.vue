<template>
    <div class="bg">
        <div class="login">
            <a class="ad">
                <img src="../../assets/LoginContent.jpg" class="img">
            </a>
            <div class="container">
                <div id="login">
                    <div class="login-tabs">
                        <p>密码登录</p>
                    </div>
                    <div class="login-content">
                        <div id="login-error">
                            <i class="icon-warning el-icon-warning"></i>
                            <div class="login-error-msg">{{msg}}</div>
                        </div>
                        <div class="login-form">
                            <div class="fm-field">
                                <div>
                                    <label class="fm-label-icon">
                                        <i class="el-icon-user" title="用户名"></i>
                                    </label>
                                </div>
                                <div>
                                    <input type="text" class="fm-text" placeholder="请输入用户名" v-model="form.username">
                                </div>
                            </div>
                            <div class="fm-field">
                                <div>
                                    <label class="fm-label-icon">
                                        <i class="el-icon-lock" title="密码"></i>
                                    </label>
                                </div>
                                <div>
                                    <input type="text" class="fm-text" placeholder="请输入登录密码" v-model="form.password">
                                </div>
                            </div>
                            <div>
                                <button class="fm-btn" @click="onSubmit()">登录</button>
                            </div>
                            <div class="login-blocks">
                                <a href="">忘记密码</a>
                                <RouterLink to="/Register">免费注册</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "../../style/Login.css"
    export default {
        name: "LoginContent",
        data(){
            return{
                form:{
                    username: '',
                    password: ''
                },
                msg:''
            }
        },
        methods:{
            onSubmit(){
                let l = document.getElementById("login-error");
                if(this.form.username === ""){
                    l.style.display="block";
                    this.msg="请输入用户名";
                }else if(this.form.password === ""){
                    l.style.display="block";
                    this.msg="请输入密码";
                }else{
                    this.$axios({
                        method: "post",
                        url: "http://chenkl.cn:3036/api/basecontent/update/info",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            username: this.form.username,
                            password: this.form.password
                        }
                    })
                        .then(res =>{
                            console.log(res.data);
                            if(res.data.status === 'success'){
                                this.$router.push({
                                    name:"index",
                                    query: {
                                        username: this.form.username
                                    }
                                });
                            }else{
                                l.style.display="block";
                                this.msg="用户名或密码不正确";
                            }
                        })
                        .catch(err =>{
                            console.log(err);
                        });
                }
            }
        }
    }
</script>
