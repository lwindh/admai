<template>
    <el-container>
        <Header/>
        <el-header style="margin-top: 40px;">
            <el-steps :active="active" align-center finish-status="success">
                <el-step title="选择商品" description=""></el-step>
                <el-step title="确认订单信息" description=""></el-step>
                <el-step title="支付订单" description=""></el-step>
                <el-step title="收取商品" description=""></el-step>
            </el-steps>
        </el-header>
        <el-main>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>配送方式</span>
                    <el-button style="float: right;" @click="addItem" size="small">使用新地址</el-button>
                </div>
                <div class="text item way-item">
                    <div class="way-image"></div>
                    <div class="way-title">快递</div>
                </div>
                <el-row>
                    <el-col class="express-item"  v-for="(item,index) in orderForm" :key="item.id">
                        <a style="cursor: pointer" @click="changeAddressStatus('address1',index)">
                        <el-card class="select-address express-item address1" >
                                <div class="clearfix">
                                    <span class="time">{{item.name}}</span>
                                    <el-divider></el-divider>
                                    <span class="time">{{ item.location +' '+ item.phone }}</span><br>
                                    <el-button style="padding: 0;" type="text" class="button" @click="changeAddress(item)">修改</el-button>
                                </div>
                        </el-card>
                        </a>
                    </el-col>
                </el-row>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>支付方式</span>
                </div>
                <div class="text item" >
                    <div class="dm-pay-type-list-wrapper" >
                        <div class="dm-pay-type-item-wrapper selected">
                            <div class="img-wrapper" style="margin: 0 auto;margin-top: 28px;">
                                <img src="../assets/zf.png" >
                            </div>
                        </div>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>确认订单信息</span>
                </div>
                <div class="text item">
                    <el-table
                            :data="tableData"
                            style="margin-top: 10px;">
                        <el-table-column
                                label="项目信息"
                        >
                            <template slot-scope="scope">
                                <el-popover trigger="hover" placement="top">
                                    <div>
                                        <div>
                                            {{orderItem.title}}
                                        </div>
                                        <div>
                                            <span>时间:{{new Date(scope.row.time).toLocaleString()}}</span>
                                        </div>
                                        <div>
                                            地点:{{orderItem.location.detail}}
                                        </div>
                                    </div>
                                    <div slot="reference" class="name-wrapper">
                                        <el-tag size="medium">{{orderItem.title }}</el-tag>
                                    </div>
                                </el-popover>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="desc"
                                label="座位信息"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="price"
                                label="单价"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="num"
                                label="数量"
                        >
                        </el-table-column>

                        <el-table-column
                                prop="total"
                                label="小计"
                        >
                        </el-table-column>
                    </el-table>
                    <div class="order-pay-wrapper">
                        <div class="order-pay-top">实付款：<span>￥<em>{{this.$store.state.order.total}}</em></span></div>
                        <div class="delivery-wrapper">
                            <div>
                                <span>寄送至：</span>
                                {{address.location}}
                            </div>
                            <div>
                                <span>收货人：</span>
                                {{address.name}}&nbsp;&nbsp;{{address.phone}}
                            </div>
                        </div>
                    </div>
                    <el-checkbox style="float: right;margin-top: 20px;margin-bottom: 12px;" checked v-model="checked" autocomplete="off">我已阅读并同意
                        <a href="https://x.damai.cn/markets/app/agreements">《大麦网订票服务条款》</a>
                    </el-checkbox>
                </div>
            </el-card>
        </el-main>
        <el-footer>
            <el-button style="float: right;margin-right: 20%;" size="big" @click="next">同意以上协议并提交订单</el-button>
        </el-footer>
        <el-dialog title="添加地址" :visible.sync="dialogFormVisible" style="width: 50%;margin: 0 auto;">
            <el-form :model="form" :rules="rules">
                <el-form-item label="收件人" :label-width="formLabelWidth" style="width: 90%;" prop="user">
                    <el-input v-model="form.user"></el-input>
                </el-form-item>
                <el-form-item label="手机" :label-width="formLabelWidth" style="width: 90%;" prop="phone">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="配送地址" :label-width="formLabelWidth" style="width: 90%;" prop="address">
                    <el-input v-model="form.address" ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleAdd">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="修改地址" :visible.sync="dialogFormVisible1" style="width: 50%;margin: 0 auto;">
            <el-form :model="formChange" :rules="rules">
                <el-form-item label="收件人" :label-width="formLabelWidth" style="width: 90%;" prop="user">
                    <el-input v-model="formChange.user"></el-input>
                </el-form-item>
                <el-form-item label="手机" :label-width="formLabelWidth" style="width: 90%;" prop="phone">
                    <el-input v-model="formChange.phone"></el-input>
                </el-form-item>
                <el-form-item label="配送地址" :label-width="formLabelWidth" style="width: 90%;" prop="address">
                    <el-input v-model="formChange.address"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="handleChange">确 定</el-button>
            </div>
        </el-dialog>
    </el-container>
</template>

<script>
    import Header from "@/components/Main/Header";
    export default {
        name: "Order",
        components:{
            Header
        },
        async mounted(){
            this.order = this.$store.state.order;
            this.tableData.push(this.order);
            await this.change();
            await this.getItem();
            await this.getAll();
            await this.changeAddressStatus('address1',0);
        },
        data() {
            let validatePhone = (rule, value, callback) => {
                var reg=/^1[3456789]\d{9}$/;
                if (!reg.test(value)) {
                    callback(new Error('手机号格式错误'));
                } else{
                    callback();
                }
            };
            return {
                active: 1,
                tableData: [],
                order:{},
                formLabelWidth:'110px',
                dialogFormVisible: false,
                dialogFormVisible1: false,
                orderForm: [],
                address:{},
                checked:true,
                orderItem:{},
                form:{
                    user: '',
                    phone: '',
                    address: '',
                },
                formChange:{
                    user: '',
                    phone: '',
                    address: '',
                    id:''
                },
                jf:'',
                rules: {
                    user: [
                        {required: true, message: '请输入收件人', trigger: 'blur'}
                    ],
                    phone:[
                        {required: true, message: '请输入手机号', trigger: 'blur'},
                        { validator: validatePhone, trigger: 'blur'}
                    ],
                    address:[
                        {required: true, message: '请输入收货地址', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            getItem(){
                this.$axios({
                    method: 'post',
                    url: "http://118.31.7.87:8080/perform/detail/"+this.$store.state.id,
                }).then(res =>{
                    if(res.data.msg === "成功"){
                        this.orderItem = res.data.data;
                    }else{
                        this.$message.error(res.data.msg);
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            changeAddressStatus(val,index){
                let list = document.getElementsByClassName(val);
                for(let j = 0;j < list.length;j++){
                    if(j === index){
                        list[j].className = val+' el-card is-always-shadow select-address express-item selected';
                    }else {
                        list[j].className = val+' el-card is-always-shadow select-address express-item';
                    }
                }
                this.address = this.orderForm[index];
            },
            next() {
                if(this.checked)
                this.$axios({
                    method: 'post',
                    url: "http://118.31.7.87:8080/order/add",
                    data:{
                        "count": this.$store.state.order.num,
                        "performId": this.$store.state.id,
                        "shipId": this.address.id,
                        "ticketId": this.$store.state.order.ticketId,
                        "uid": this.$store.state.user.id
                    }
                }).then(res =>{
                    this.$axios({
                        method: 'post',
                        url: "http://118.31.7.87:8080/order/pay/"+res.data.msg
                    }).then(res1 =>{
                            this.$router.push({path:'/PayOrder',query:{ htmlData: res1.data}})
                    }).catch(err =>{
                        console.log(err);
                    });
                }).catch(err =>{
                    console.log(err);
                });
                else this.$message.error("请勾选同意协议");
            },
            change(){
                document.getElementsByClassName('location-header')[0].style.display = "none";
                let list = document.getElementsByClassName('type-recommend');
                list[0].className = 'type-recommend';
            },
            changeAddress(val){
                this.formChange.address = val.location;
                this.formChange.user = val.name;
                this.formChange.phone = val.phone;
                this.formChange.id =val.id;
                this.dialogFormVisible1 = true;
            },
            handleSelect(index,row){
                console.log(index);
                console.log(row);
            },
            addItem(){
                this.dialogFormVisible = true;
            },
            async getAll() {
                await this.$axios({
                    method: 'post',
                    url: "http://118.31.7.87:8080/ship/list/"+this.$store.state.user.id
                }).then(res =>{
                    if(res.data.msg === '成功'){
                        this.orderForm = res.data.data;
                    }else{
                        this.$message.error(res.data.msg);
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            handleAdd(){
                this.dialogFormVisible = false;
                this.$axios({
                    method: 'post',
                    url: "http://118.31.7.87:8080/ship/save",
                    data: {
                        "location": this.form.address,
                        "name": this.form.user,
                        "phone": this.form.phone,
                        "uid": this.$store.state.user.id
                    }
                }).then(res =>{
                    if(res.data.msg === "保存成功"){
                        this.$message({
                            type: 'success',
                            message: '添加成功!'
                        });
                        this.getAll();
                    }else{
                        this.$message.error(res.data.msg);
                    }
                }).catch(err =>{
                    console.log(err);
                });
            },
            handleChange(){
            this.dialogFormVisible1 = false;
            this.$axios({
                method: 'post',
                url: "http://118.31.7.87:8080/ship/update",
                data: {
                    "location": this.formChange.address,
                    "name": this.formChange.user,
                    "phone": this.formChange.phone,
                    "id": this.formChange.id
                }
            }).then(res =>{
                if(res.data.msg === "更新成功"){
                    this.$message({
                        type: 'success',
                        message: '修改成功!'
                    });
                    this.getAll();
                }else{
                    this.$message.error(res.data.msg);
                }
            }).catch(err =>{
                console.log(err);
            });
        },
        },
        created () {
            // 在页面加载时读取sessionStorage里的状态信息
            if (sessionStorage.getItem('store')) {
                this.$store.replaceState(
                    Object.assign(
                        {},
                        this.$store.state,
                        JSON.parse(sessionStorage.getItem('store'))
                    )
                )
            }

            // 在页面刷新时将vuex里的信息保存到sessionStorage里
            // beforeunload事件在页面刷新时先触发
            window.addEventListener('beforeunload', () => {
                sessionStorage.setItem('store', JSON.stringify(this.$store.state))
            })
        }
    }
</script>

<style scoped>
    .el-divider--horizontal{
        margin: 1px 0;
    }
    .text {
        font-size: 12px;
    }
    .time {
        font-size: 12px;
        color: #999;
    }
    .express-item{
        width: 237px;
        height: 106px;
        margin-right: 14px;
    }
    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 1200px;
        margin: 0 auto;
        margin-top: 10px;
    }
    .way-item {
        margin-right: 60px;
        cursor: pointer;
    }
    .way-image {
        background: url(../assets/kd.png) no-repeat;
        width: 80px;
        height: 80px;
        margin-bottom: 16px;
    }
    .way-title {
        width: 80px;
        height: 20px;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #ff1268;
    }
    .express-item .selected, .select-address:hover {
        background: url(../assets/check.png) no-repeat;
    }
</style>
