<template>
  <form>
    <h3>Biểu mẫu</h3>
    <!--
        custom html element
        custom atribute formdata is required
     -->
    <div>
      <label>Tên: </label>
      <input type="text"  v-model="model.Name" debounce="500">
      <label>Email: </label>
      <input type="email"  v-model="model.Email" debounce="500">
      <label>Địa chỉ: </label>
      <input type="text"  v-model="model.Address" debounce="500">
      <label>Mật khẩu: </label>
      <input type="password"  v-model="model.Password" debounce="500">
      <label>Ngày sinh: </label>
      <input type="date"  v-model="model.BirthDay" debounce="500">
      <label>Giới tính: </label>
      <select  v-model="model.Gender" debounce="500">
        <option v-for="obj in gender" v-bind:value="obj">{{obj.text}}</option>
        }
      </select>
    </div>
    <button type="submit" v-on:click="doSubmit(model)">Cập nhật</button>
    <!-- <dynamic-form :formdata="formdata"></dynamic-form> -->
  </form>
</template>

<script>
  //import the library

  export default {

    // name: 'demo',
    data () {
      return {
        model: {},
        //get the configuration and initialize it
        // formdata: demoDynamicForm.demoDynamicForm(),
        gender: [{id:'123', text:'Nam'},{id:'098', text:'Nữ'}]        
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

    }
  };
</script>

<style lang="css" scoped>
</style>
