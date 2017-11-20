
<template>
<form  @submit.prevent="doLongin()">
  <p>
    <label>Bây giờ:</label>
    <span>{{currentTime}}</span>
  </p>
  <label>Username</label>
  <input type='text' v-model="user.Username"/>
  <label>Password</label>
  <input type='password' v-model="user.Password"/>
  <input type='submit' />
 </form>
</template>
<script>
import Vue from "vue"
import Router from 'vue-router'
import Authservice from "@/service/authservice"
import CRMservice from "@/service/crmservice"

Vue.use(Authservice)
Vue.use(CRMservice)
Vue.use(Router)
Vue.use(require('vue-moment'));

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to login form',
      user: {Username: 'admin', Password: '123456789'},
      currentTime: null
    }
  },
   methods: {
    doLongin() {
     Authservice.login(this.user).then((data) =>{
      console.log(data);
      if(data.success){
        alert('Đăng nhập thành công tài khoản ' + this.user.Username);
        // this.$router.replace('/');
      } else {
        alert('Nhập sai tên đăng nhập hoặc mật khẩu');
      }
     });
      if(localStorage.getItem('SessionId')){
        var params = {
          RequestClass: "xBase",
          RequestAction: "SearchBinary",
          // Parent: $attrs.parent,
          ConditionFields: 'Parent',
          StaticFields: 'Name;Created;Modified;FileName;FileExtension;FileSize;CreatedBy;Description;Parent;FileSize',
          DynamicFields: 'CreatedByName;SignatureVerified'
        };
        CRMservice.post(params).then((data) =>{
          console.log(data);
        });
      }
     // this.$router.replace('dashboard');
    },
    updateCurrentTime() {
      this.currentTime = new Date().toLocaleString();
    }
  },
  created() {
    this.currentTime = new Date().toLocaleString();
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>