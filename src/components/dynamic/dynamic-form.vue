<template>
  <div>
    <!--
        custom html element
        custom atribute formdata is required
     -->
    <dynamic-form :formdata="formdata"></dynamic-form>
  </div>
</template>

<script>
  //import the library
  import dynamicForm from 'vue-dynamic-forms'

  import { demoDynamicForm } from './form'

  export default {

    name: 'demo',
    components:{
      //add the dynamicForm to the components section
      dynamicForm
    }
    data () {
      return {
        //get the configuration and initialize it
        formdata:demoDynamicForm()
      };
    }
  };
</script>

<style lang="css" scoped>
</style>
