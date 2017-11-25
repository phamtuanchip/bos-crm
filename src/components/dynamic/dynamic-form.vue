<template>
  <form>
    <h3>{{formdata.title}}</h3>
    <!--
        custom html element
        custom atribute formdata is required
     -->
    <div v-for="inp in formdata.inputs">
      <label>{{inp.label}}: </label>
      <input :type="inp.type" :class="inp.class" v-model="vmodel[inp.name]" v-if="inp.ele=='input'" debounce="500">{{vmodel[inp.name]}}
      <select :class="inp.class" v-model="vmodel[inp.name]" v-if="inp.ele=='select'" debounce="500">
        <option v-for="obj in inp.obj" v-bind:value="obj">{{obj.text}}</option>
        }
      </select>
    </div>
    <button type="submit" v-on:click="doSubmit(vmodel)">{{formdata.submitText}}</button>
    <!-- <dynamic-form :formdata="formdata"></dynamic-form> -->
  </form>
</template>

<script>
  //import the library

  import demoDynamicForm from './form'

  export default {

    // name: 'demo',
    data () {
      return {
        vmodel: {},
        //get the configuration and initialize it
        formdata: demoDynamicForm.demoDynamicForm(),
      };
    },
    methods: {
      doSubmit(data) {
        console.log(data)
        // data.forEach(input => {
        //     console.log(data)
        // })
      },
    },
    mounted () {
      // At some point, we decide to create a custom form from some data
    },
    created() {
      console.log(this.formdata.inputs)
      this.formdata.inputs.forEach(input =>{ 
        if(input.value){
          this['vmodel.' + input.name] = input.value;
        }
      })
    }
  };
</script>

<style lang="css" scoped>
</style>
