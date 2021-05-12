<template>
    <div>
        <el-page-header @back="goBack" content="发布演出" style="margin-left: 20%;margin-top: 10px;">
        </el-page-header>
        <el-form ref="form" :rules="rules" :model="form" label-width="100px" style="width: 40%;margin: 0 auto;margin-top: 20px;" class="demo-ruleForm from">
            <el-form-item label="演出标题" style="width: 70%;" prop="title">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="艺术家/团队">
                <el-select v-model="form.art" @change="checkAddArtist" filterable allow-create default-first-option placeholder="请选择艺术家/团队">
                    <el-option
                            v-for="item in artists"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="演出城市" prop="city">
                <el-select @change="getPosition" v-model="form.city" allow-create filterable default-first-option placeholder="请选择城市">
                    <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                    </el-option>
                </el-select>
                <el-select v-model="form.position" @change="checkAddPosition" allow-create filterable default-first-option placeholder="请选择城市地点">
                    <el-option
                            v-for="item in position"
                            :key="item.id"
                            :label="item.detail"
                            :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="演出类别" style="width: 80%;" prop="type">
                <el-select @change="getSmallType" v-model="form.type" filterable placeholder="请选择演出类别">
                    <el-option
                            v-for="item in types"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                    </el-option>
                </el-select>
                <el-select v-model="form.sType" filterable placeholder="请选择演出类别子类" v-if="sType.length !== 0">
                    <el-option
                            v-for="item in sType"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="演出介绍" prop="desc">
                <el-input type="textarea" :rows="7" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="购票须知" prop="ticketNotice">
                <el-input type="textarea" :rows="7" v-model="form.ticketNotice"></el-input>
            </el-form-item>
            <el-form-item label="观影须知" prop="viewNotice">
                <el-input type="textarea" :rows="7" v-model="form.viewNotice"></el-input>
            </el-form-item>
            <el-form-item label="封面">
                <el-upload
                        class="upload-demo"
                        action="http://118.31.7.87:8080/file/upload/"
                        header="application/json"
                        :limit="1"
                        :on-success="handleSuccess"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
            <el-form-item style="margin-left: 38%;">
                <el-button type="primary" @click="onSubmit('form')">立即添加</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "AddShow",
        mounted(){
            this.getCity();
            this.getTypes();
            this.getArt();
        },
        data() {
            return {
                form: {
                    title: '',
                    city: '',
                    type:'',
                    desc:'',
                    sType:'',
                    position:'',
                    art:'',
                    viewNotice:'',
                    ticketNotice:'',
                    file: '',
                },
                performId:'',
                options:[],
                types:[],
                sType:[],
                position:[],
                artists:[],
                fileList: [],
                rules: {
                    title: [
                        { required: true, message: '请输入演出标题', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择演出城市', trigger: 'change' }
                    ],
                    position: [
                        { required: true, message: '请选择演出地点', trigger: 'change' }
                    ],
                    type: [
                        { required: true, message: '请选择演出类型', trigger: 'change' }
                    ],
                    sType: [
                        { required: true, message: '请选择演出类型子类', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入演出介绍', trigger: 'blur' }
                    ],
                    viewNotice: [
                        { required: true, message: '请输入观影须知', trigger: 'blur' }
                    ],
                    ticketNotice: [
                        { required: true, message: '请输入购票须知', trigger: 'blur' }
                    ],
                },
                pickerOptions: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            }
            }
        },
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(typeof(this.form.art) === "string"){
                            this.artists.find((item) => {
                                if(item.name === this.form.art){
                                    this.form.art = item.id;
                                    return item.id;
                                }
                            });
                        }
                        if(isNaN(parseInt(this.form.city))){
                            this.options.find((item) => {
                                if(item.name === this.form.city){
                                    this.form.city = item.id;
                                    return item.id;
                                }
                            });
                        }
                        if(isNaN(parseInt(this.form.position))){
                            this.position.find((item) => {
                                if(item.detail === this.form.position){
                                    this.form.position = item.id;
                                    return item.id;
                                }
                            });
                        }
                        this.$axios({
                            method:"post",
                            url:"http://118.31.7.87:8080/perform/add",
                            headers:{
                                'Content-Type': 'application/json'
                            },
                            data:{
                                "artistId": this.form.art,
                                "categoryId": this.form.type,
                                "cityId": this.form.city,
                                "content": this.form.desc,
                                "cover": this.form.file,
                                "locationId": this.form.position,
                                "subclassId": this.form.sType,
                                "ticketNotice": this.form.ticketNotice,
                                "title": this.form.title,
                                "viewNotice": this.form.viewNotice
                            }
                        }).then(res =>{
                            if(res.data.code === 200){
                                this.$message({
                                    type: 'success',
                                    message: '添加成功!'
                                });
                                this.goBack();
                            }else{
                                this.$message.error('添加失败!');
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
            getCity() {
                this.$axios.get("http://118.31.7.87:8080/city/list"
                ).then(res =>{
                    // console.log(res);
                    if(res.data.msg === '成功'){
                        this.options = res.data.data;
                    }else{
                        this.$message.error('获取城市失败!');
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            getTypes() {
                this.$axios.get("http://118.31.7.87:8080/category/list"
                ).then(res =>{
                    // console.log(res);
                    if(res.data.msg === '成功'){
                        this.types = res.data.data;
                    }else{
                        this.$message.error('获取演出类型失败!');
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            getSmallType(){
                this.$axios.get("http://118.31.7.87:8080/subclass/all?id="+this.form.type
                ).then(res =>{
                    // console.log(res);
                    if(res.data.msg === '成功'){
                        this.sType = res.data.data;
                    }else{
                        this.$message.error('获取子类失败!');
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            getP(){
                this.$axios.get("http://118.31.7.87:8080/location/all?id="+this.form.city
                ).then(res =>{
                    // console.log(res);
                    if(res.data.msg === '成功'){
                        this.position = res.data.data;
                    }else{
                        this.$message.error('获取演出地址失败!');
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            getPosition(){
                this.checkAddCity();
                this.getP();
            },
            getArt(){
                this.$axios.get("http://118.31.7.87:8080/artist/all"
                ).then(res =>{
                    // console.log(res);
                    if(res.data.msg === '成功'){
                        this.artists = res.data.data;
                    }else{
                        this.$message.error('获取艺术家失败!');
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            handleRemove(file, fileList) {
                console.log(file);
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file.response.msg);
            },
            handleSuccess(file) {
                this.form.file = file.msg;
            },
            goBack() {
                this.$router.push({
                    path: `/Add`
                });
            },
            checkAddArtist(){
                if(typeof(this.form.art) === "string"){
                    this.$axios.post("http://118.31.7.87:8080/artist/add/"+this.form.art
                    ).then(res =>{
                        // console.log(res);
                        if(res.data.msg === '新增成功'){
                            this.getArt();
                        }
                    }).catch(err =>{
                        console.log(err);
                    });
                }
            },
            checkAddCity(){
                if(isNaN(parseInt(this.form.city))){
                    this.$axios.post("http://118.31.7.87:8080/city/add/"+this.form.city
                    ).then(res =>{
                        if(res.data.msg === '新增成功'){
                            this.getCity();
                        }
                    }).catch(err =>{
                        console.log(err);
                    });
                }
            },
            checkAddPosition(){
                if(isNaN(parseInt(this.form.position))){
                    let a = {
                        id:'',
                        name:''
                    };
                    if(isNaN(parseInt(this.form.city))){
                        a = this.options.find((item) => {
                            if(item.name === this.form.city){
                                return item.id;
                            }
                        });
                    }else {
                        a.id = this.form.city;
                    }
                    this.$axios.post("http://118.31.7.87:8080/location/add/"+a.id+"/"+this.form.position
                    ).then(res =>{
                        // console.log(res);
                        if(res.data.msg === '新增成功'){
                            this.getP();
                        }
                    }).catch(err =>{
                        console.log(err);
                    });
                }
            },

        }
    }
</script>

<style scoped>

</style>
