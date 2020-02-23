<template>
    <div>
        <el-button type="primary" @click="addItem()" style="margin-left: 10%;margin-top: 10px;">发布演出</el-button>
        <el-table
                :data="tableData"
                style="width: 80%;margin: 0 auto;margin-top: 10px;">
            <el-table-column
                    prop="showItem"
                    label="演出标题"
            >
            </el-table-column>
            <el-table-column
                    prop="showContent"
                    label="演出内容"
            >
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="演出城市"
            >
            </el-table-column>
            <el-table-column
                    prop="area"
                    label="演出地点"
            >
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="演出类别"
            >
            </el-table-column>
            <el-table-column
                    prop="sang"
                    label="演出艺术家"
            >
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="演出时间"
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
        <el-dialog title="添加演出" :visible.sync="dialogFormVisible" style="width: 50%;margin: 0 auto;">
            <el-form :model="form" :rules="rules">
                <el-form-item label="演出标题" :label-width="formLabelWidth" style="width: 90%;" prop="showItem">
                    <el-input v-model="form.showItem"></el-input>
                </el-form-item>
                <el-form-item label="演出类别" :label-width="formLabelWidth" style="width: 90%;" prop="type">
                    <el-select v-model="form.type" placeholder="请选择">
                        <el-option
                                v-for="item in type"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="演出内容" :label-width="formLabelWidth" style="width: 90%;" prop="showContent">
                    <el-input type="textarea" v-model="form.showContent" ></el-input>
                </el-form-item>
                <el-form-item label="演出城市" :label-width="formLabelWidth" style="width: 90%;" prop="city">
                    <el-input v-model="form.city" ></el-input>
                </el-form-item>
                <el-form-item label="演出地点" :label-width="formLabelWidth" style="width: 90%;" prop="area">
                    <el-input v-model="form.area" ></el-input>
                </el-form-item>
                <el-form-item label="演出艺术家" :label-width="formLabelWidth" style="width: 90%;" prop="sang">
                    <el-input v-model="form.sang" ></el-input>
                </el-form-item>
                <el-form-item label="演出时间" :label-width="formLabelWidth" style="width: 90%;" prop="time">
                    <el-date-picker
                            v-model="form.time"
                            align="right"
                            type="date"
                            placeholder="选择日期"
                            size="small"
                            style="width: 100%;"
                            :picker-options="pickerOptions">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleAdd">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="修改演出" :visible.sync="dialogFormVisible1" style="width: 50%;margin: 0 auto;">
            <el-form :model="formChange" :rules="rules">
                <el-form-item label="演出标题" :label-width="formLabelWidth" style="width: 90%;" prop="showItem">
                    <el-input v-model="formChange.showItem"></el-input>
                </el-form-item>
                <el-form-item label="演出类别" :label-width="formLabelWidth" style="width: 90%;" prop="type">
                    <el-select v-model="formChange.type" placeholder="请选择">
                        <el-option
                                v-for="item in type"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="演出内容" :label-width="formLabelWidth" style="width: 90%;" prop="showContent">
                    <el-input type="textarea" v-model="formChange.showContent" ></el-input>
                </el-form-item>
                <el-form-item label="演出城市" :label-width="formLabelWidth" style="width: 90%;" prop="city">
                    <el-input v-model="formChange.city" ></el-input>
                </el-form-item>
                <el-form-item label="演出地点" :label-width="formLabelWidth" style="width: 90%;" prop="area">
                    <el-input v-model="formChange.area" ></el-input>
                </el-form-item>
                <el-form-item label="演出艺术家" :label-width="formLabelWidth" style="width: 90%;" prop="sang">
                    <el-input v-model="formChange.sang" ></el-input>
                </el-form-item>
                <el-form-item label="演出时间" :label-width="formLabelWidth" style="width: 90%;" prop="time">
                    <el-date-picker
                            v-model="formChange.time"
                            align="right"
                            type="date"
                            placeholder="选择日期"
                            size="small"
                            style="width: 100%;"
                            :picker-options="pickerOptions">
                    </el-date-picker>
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
        name: "AddPerform",
        data(){
            return{
                tableData: [{
                    showItem: '王小虎',
                    showContent: '111',
                    city: '北京',
                    area: '111',
                    type: '音乐会',
                    sang: '111',
                    time:'2020-03-21'
                },
                ],
                type:[
                    {value:1,label:'音乐会'},
                    {value:2,label:'话剧歌剧'},
                    {value:3,label:'展览休闲'},
                    {value:4,label:'演唱会'},
                    {value:5,label:'曲苑杂坛'},
                    {value:6,label:'舞蹈芭蕾'},
                    {value:7,label:'体育'},
                    {value:8,label:'儿童亲子'},
                    {value:9,label:'旅游展览'},
                    {value:10,label:'二次元'},
                ],
                form:{
                    showItem: '',
                    showContent: '',
                    city: '',
                    area: '',
                    type: '',
                    sang: '',
                    time:''
                },
                formChange:{
                    showItem: '',
                    showContent: '',
                    city: '',
                    area: '',
                    type: '',
                    sang: '',
                    time:''
                },
                formLabelWidth:'110px',
                dialogFormVisible: false,
                dialogFormVisible1: false,
                rules: {
                    showItem: [
                        {required: true, message: '请输入收件人', trigger: 'blur'}
                    ],
                    showContent:[
                        {required: true, message: '请输入演出内容', trigger: 'blur'},
                    ],
                    city:[
                        {required: true, message: '请输入城市', trigger: 'blur'}
                    ],
                    area: [
                        {required: true, message: '请输入地址', trigger: 'change'}
                    ],
                    type:[
                        {required: true, message: '请选择演出类型', trigger: 'change'},
                    ],
                    sang:[
                        {required: true, message: '请输入演出艺术家', trigger: 'blur'}
                    ],
                    time:[
                        {required: true, message: '请选择时间', trigger: 'change'}
                    ]
                },
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                }
            }
        },
        methods: {
            handleEdit(index, row) {
                this.dialogFormVisible1 = true;
                this.formChange.showItem = row.showItem;
                this.formChange.showContent = row.showContent;
                this.formChange.city = row.city;
                this.formChange.area = row.area;
                this.formChange.type = row.type;
                this.formChange.sang = row.sang;
                this.formChange.time = row.time;
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
