<template>
  <div id="ninjas">
  <ul>
    <li v-for="n in names" v-on:click="n.show=!n.show">
      <h2>{{n.name}}</h2>
      <h3 v-show="n.show">{{n.speciality}}</h3>
      </li>
  </ul>
  <button v-on:click="deleteName">Detelte</button>
  </div>
</template>

<script>
export default {
    //kiểu mảng sd props
props:{
  names:{
    type:Array,
    required:true
  }
},
  data () {
    return {

    }
  }
  ,methods:{
      // xóa 1 phần tử
  deleteName:function(){
    this.names.pop();
  }
  }
}
</script>
<style scoped>

</style>
