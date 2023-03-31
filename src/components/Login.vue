<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>通用后台管理系统</span>
                <el-form label-width="80px" :model="form" ref="form" :rules="rules">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login('form')">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>




    </div>
</template>
<script>
import { nameRule, passwordRule } from '../utils/validate.js';
// import { login } from '@/api/api.js'
//import { setItem } from '@/utils/setToken.js';
// import { setIToken } from '@/utils/setToken.js';
export default {
    data() {

        return {
            form: {
                username: '',
                password: ''
            }, rules: {
                username: [{ validator: nameRule, trigger: 'blur' }],
                password: [{ validator: passwordRule, trigger: 'blur' }],
            }
        }
    }, methods: {
        login(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    console.log(this.form);
                    this.service.post('/login', this.form)
                        .then(res => {
                            console.log(res)
                        })
                    /*    this.axios.post("https://www.showdoc.com.cn/jinducasey/8321036098744323", this.form)
                           .then(res => {
                               console.log(res)
                               if (res.data.status === 200) {
                                   setIToken.setItem('username', res.data.username)
                                   this.$message({ message: res.data.message, type: 'success' })
                                   this.$router.push('/home')
                               }
   
                           }).catch(err => {
                               console.error(err)
                           }) */
                    // login(this.form)
                    //     .then(res => {
                    //         console.log(res)
                    //         if (res.data.status === 200) {
                    //             setIToken.setItem('username', res.data.username)
                    //             this.$message({ message: res.data.message, type: 'success' })
                    //             this.$router.push('/home')
                    //         }

                    //     })
                    // this.service.post('/login', this.form)
                    //     .then(res => {
                    //         console.log(res)
                    //     })
                } else {
                    console.log(this.form);
                }
            })
        }
    }
}
</script>
<style lang="scss">
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #409EFF;

    .box-card {
        width: 450px;
        margin: 200px auto;

        .el-card__header {
            font-size: 34px;
        }

        .el-button {
            width: 100%;
        }

    }
}
</style>