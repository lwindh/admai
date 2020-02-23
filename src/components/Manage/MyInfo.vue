<template>
    <div style="width: 30%;margin-top: 10px;">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item :label-width="formLabelWidth" label="昵称：" style="width: 90%;" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item :label-width="formLabelWidth" style="width: 90%;" label="真实姓名：">
                <el-input v-model="ruleForm.name" disabled></el-input>
            </el-form-item>
            <el-form-item :label-width="formLabelWidth" style="width: 90%;" label="性别：" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="男">男</el-radio>
                    <el-radio label="女">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item :label-width="formLabelWidth" label="出生日期：" prop="birthday">
                <el-date-picker
                        v-model="ruleForm.birthday"
                        type="date"
                        style="width: 150px;"
                        placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item :label-width="formLabelWidth"  label="身份证号：">
                <el-input v-model.number="ruleForm.idCard" disabled></el-input>
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
            this.ruleForm.username = this.$store.state.user.nickName;
        },
        data(){
            return{
                ruleForm: {
                    username:'',
                    name: '',
                    sex: '男',
                    birthday: '2000-01-01',
                    idCard:''
                },
                formLabelWidth:'200px',
                rules: {
                    username: [
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
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style scoped>

</style>
