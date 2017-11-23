<template>
  <footer>
  <p>{{aaa}}  {{title}}</p>
  </footer>
</template>

<script>
import{bus} from '../main';
export default {
props:{
  title:{
    type:String
  }
},
  data () {
    return {
    aaa:'Xin chao'
    }
  }
  ,created(){
    bus.$on('titleChange',(data)=>{
      this.title=data;
    });
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