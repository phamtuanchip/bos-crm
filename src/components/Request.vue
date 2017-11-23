<template>
  <div id="req">
    <add-blog></add-blog>
    <br>
    <get-res></get-res>
  </div>
</template>

<script>
import GetRequest from './components/request/GetRequest'
import AddBlog from './components/request/AddBlog'

export default {
  components:{
    'add-blog':AddBlog,
    'get-res':GetRequest
  },
  name: 'req',
  data () {
    return {
     
    }
  }
}
</script>

<style >

</style>
