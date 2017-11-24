<template>
  <footer>
  <p>{{aaa}}  {{ftitle}}</p>
  </footer>
</template>

<script>
import{bus} from '../main';
export default {
props:{
  title:{
    type:String,
  }
},
  data () {
    return {
    aaa:'Xin chao',
    ftitle:''
    }
  }
  ,created(){
    bus.$on('titleChange',(data)=>{
      this.ftitle=data;
    });
    this.ftitle = this.title;
  }
}
</script>
<style scoped>
footer{
background: #222;
padding: 6px;
}
p{
color:lightgreen;
text-align: center;
}
</style>