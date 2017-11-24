
<template>
<form>
  <p>
    <label>Bây giờ:</label>
    <span>{{currentTime}}</span>
  </p>
  <div v-if="!loginName || loginName==''">
    <label>Username</label>
    <input type='text' v-model="user.Username"/>
    <label>Password</label>
    <input type='password' v-model="user.Password"/>
    <input type='submit' v-on:click="doLongin()"/>
  </div>
  <div v-else>
    <label>Bạn đã đăng nhập vào tài khoản {{loginName}}</label>
    <button v-on:click="doLongout()">Đăng xuất</button>
  </div>
 </form>
</template>
<script>
import Vue from "vue"
import Router from 'vue-router'
import Lodash from 'lodash'
import moment from 'vue-moment'
import Authservice from "@/service/authservice"
import CRMservice from "@/service/crmservice"

Vue.use(Authservice)
Vue.use(CRMservice)
Vue.use(Router)
Vue.use(Lodash);
Vue.use(moment);

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to login form',
      user: {Username: 'admin', Password: '123456789'},
      currentTime: null,
      loginName: localStorage.getItem('logedOnUser') ? JSON.parse(localStorage.getItem('logedOnUser')).LoginName : ''
    }
  },
   methods: {
    doLongin() {
     Authservice.login(this.user).then((data) =>{
      console.log(data);
      if(data.success){
        this.loginName = this.user.Username;
        alert('Đăng nhập thành công tài khoản ' + this.user.Username);
        this.$router.push('Dashboard')
        // this.$router.replace('/');
      } else {
        alert('Nhập sai tên đăng nhập hoặc mật khẩu');
      }
     });
      // if(localStorage.getItem('SessionId')){
      //   var params = {
      //     RequestClass: "xBase",
      //     RequestAction: "SearchBinary",
      //     // Parent: $attrs.parent,
      //     ConditionFields: 'Parent',
      //     StaticFields: 'Name;Created;Modified;FileName;FileExtension;FileSize;CreatedBy;Description;Parent;FileSize',
      //     DynamicFields: 'CreatedByName;SignatureVerified'
      //   };
      //   var param = Lodash.clone(params);
      //   params.abc = "abc";
      //   console.log(params);
      //   console.log(param);
      //   CRMservice.post(param).then((data) =>{
      //     console.log(data);
      //   });
      // }
     // this.$router.replace('dashboard');
    },
    doLongout() {
    Authservice.logout()
    this.loginName = '';
     // this.$router.replace('dashboard');
    },
    updateCurrentTime() {
      // this.currentTime = new Date().toLocaleString();
      this.currentTime = Vue.moment().format('LTS');
    }
  },
  created() {
    console.log(JSON.parse(localStorage.getItem('logedOnUser')))
    this.currentTime = Vue.moment().format('LTS');
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