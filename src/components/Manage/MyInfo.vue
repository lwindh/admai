<template>
    <div style="width: 30%;margin-top: 10px;">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item :label-width="formLabelWidth" label="昵称：" style="width: 90%;" prop="nickName">
                <el-input v-model="ruleForm.nickName"></el-input>
            </el-form-item>
            <el-form-item :label-width="formLabelWidth" style="width: 90%;" label="真实姓名：">
                <el-input v-model="ruleForm.actualName" disabled></el-input>
            </el-form-item>
            <el-form-item :label-width="formLabelWidth" style="width: 90%;" label="性别：" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                    <el-radio :label="true">男</el-radio>
                    <el-radio :label="false">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item :label-width="formLabelWidth" label="出生日期：" prop="birthday">
                <el-date-picker
                        v-model="ruleForm.birthday"
                        type="date"
                        value-format="timestamp"
                        style="width: 150px;"
                        placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item :label-width="formLabelWidth"  label="身份证号：">
                <el-input v-model.number="ruleForm.idNumber" disabled></el-input>
            </el-form-item>
            <el-form-item :label-width="formLabelWidth">
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "MyInfo",
        mounted(){
            this.getMyItem();
        },
        data(){
            return{
                ruleForm: {},
                formLabelWidth:'200px',
                rules: {
                    nickName: [
                        {required: true, message: '请输入昵称', trigger: 'blur'},
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'change'},
                    ],
                    birthday: [
                        {required: true, message: '请选择出生日期', trigger: 'change'},
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios({
                            method:"post",
                            url:"http://118.31.7.87:8080/user/info",
                            headers:{
                                'Content-Type': 'application/json'
                            },
                            data:{
                                "birthday": this.ruleForm.birthday,
                                "nickName": this.ruleForm.nickName,
                                "sex": this.ruleForm.sex,
                                "uid": this.$store.state.user.id
                            }
                        }).then(res =>{
                            if(res.data.msg === "修改成功"){
                                this.$message({
                                    type: 'success',
                                    message: '修改成功!'
                                });
                                this.$store.commit("changeUserName",this.ruleForm.nickName)
                            }else{
                                this.$message.error('修改失败!');
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
            getMyItem(){
                //this.$axios.defaults.headers.common['Authorization'] = this.$store.state.user.token;
                this.$axios.get("http://118.31.7.87:8080/user/info?uid="+this.$store.state.user.id
                ).then(res =>{
                    console.log(res.data);
                    if(res.data.msg === '成功'){
                        this.ruleForm = res.data.data;
                    }else{
                        this.$message.error('获取个人信息失败!');
                    }
                }).catch(err =>{
                    console.log(err);
                });
            }
        }
    }
</script>

<style scoped>

</style>
