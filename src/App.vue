<template>
  <div id="app">
    <img src="./assets/logo.png">
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
import Header from './components/Header';
import Footer from './components/Footer';
import Names from './components/Name';


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
