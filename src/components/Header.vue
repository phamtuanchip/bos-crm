<template>
<header>
  <h1 v-on:click="changeTile">{{title}}</h1>
</header>
</template>

<script>
// import bus 
import{bus} from '../main';

export default {
props:{
title:{
  type:String
}
},
  data () {
    return {
    title:'SME hospital'
    }
  },
  methods:{
  changeTile:function(){
      //this.$emit('changeTile','hoang duc');
      // thay đổi cả header và Footer
      //this.title='duc goodly';
      // thay đổi thằng Footer
      bus.$emit('titleChange','duc goodly');
    }
  }
}
</script>
<style scoped>
header{
background: lightgreen;
padding: 10px;
}
h1{
color:#222;
text-align:center;
}
</style>
