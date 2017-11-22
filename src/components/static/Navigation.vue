<template>
  <div>Navigation</div>
  <div> Connected SignalR {{isConnected}}</div>
</template>
<script>
    import Vue from 'vue'
    import Vuex from 'vuex'
    import VueResource from 'vue-resource'
    import Lodash from 'lodash'
    
    Vue.use(Vuex)
    Vue.use(VueResource)
    Vue.use(Lodash)
   
    
    
    export default {
        name : 'Navigation',
        data : () => {
            isConnected : false
        }
    }
    
</script>