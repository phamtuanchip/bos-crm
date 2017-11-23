<template>
  <!-- <datetime format="DD-MM-YYYY h:i:s" width="300px" @update:date-value="val => dob = val"></datetime> -->
  <div>
    <datetime format="DD-MM-YYYY h:i:s" @update:date-value="val => dob = val"></datetime>
    <button @click='alertVal'>Alert current date value</button>
  </div>
</template>

<script>
import datetime from 'vuejs-datetimepicker';
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components: { datetime },
   methods: {
    alertVal () {
      alert(this.dob)
    }
  }
}
</script>

<style lang="scss">

</style>
