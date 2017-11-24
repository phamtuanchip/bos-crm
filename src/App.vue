<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Navigation></Navigation>
    <router-view/>
    <br>
    <!-- // event  -->
    <app-header v-bind:title="title" v-on:changeTile="updateTitle($event)"></app-header>
    <app-names v-bind:names="names"></app-names>
    <app-footer v-bind:title="title"></app-footer>
    <p>Computed: {{reversedMessage}}</p>
  </div>
</template>

<script>
import Vue from 'vue'    
import Vuex from 'vuex'    
import Header from './components/Header';
import Footer from './components/Footer';
import Names from './components/Name';
import Navigation from './components/static/Navigation';
import Authservice from "./service/authservice";
// import Router from 'vue-router'

Vue.use(Authservice)
Vue.use(Vuex)
Vue.component('Navigation', Navigation)
// Vue.use(Router)

export default {
  name: 'app',
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-names':Names
},
data () {
    return {
    names:[
    {name: 'Anh Tuan',speciality:'IT',show:false},
    {name: 'Anh Dat',speciality:'IT',show:false},
    {name: 'Anh Tan',speciality:'IT',show:false},
    {name: 'Anh Quy',speciality:'IT',show:false},
    {name: 'Anh Dung',speciality:'IT',show:false},
    {name: 'Anh Dong',speciality:'Giam doc',show:false},
  
    ],
    title:"Hello Vue"
    }
  }
  ,methods:{
    updateTitle:function(s){
    this.title=s;
    }
  },
  //computed
  computed:{
    reversedMessage: function () {
      // `this`  to the vm instance
      return this.title.split('').reverse().join('')
    }
  },
  created() {
    if(localStorage.getItem('SessionId')){
      Authservice.checkSession().then((data) =>{
        if(!data.UserId){
          this.$router.push('Login')
        }
     });
    } else {
      this.$router.push('Login') 
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
