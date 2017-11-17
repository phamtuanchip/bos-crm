
<template>
<div>
  <label>Username</label>
  <input type='text' v-model="user.uid"/>
  <label>Password</label>
  <input type='password' v-model="user.pwd"/>
  <input type='submit'  v-on:click="doLongin"/>
 </div>
</template>
<script>
import Vue from "vue"
import Router from 'vue-router'
import Authservice from "@/service/authservice"

Vue.use(Authservice)
Vue.use(Router)

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to login form',
      user: {uid: 'admin', pwd: '123456789'}
    }
  },
   methods: {
    doLongin() {       
     var LogedOnUser = Authservice.login(); 
     this.$router.replace('dashboard');
    }}
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