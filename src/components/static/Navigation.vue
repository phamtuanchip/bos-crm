<template>
  <div>
      Navigation
      <div> Connected SignalR {{isConnected}}</div>
    </div>
  
</template>
<script>
    import Vue from 'vue'
    import Vuex from 'vuex'
    import VueResource from 'vue-resource'
    import Lodash from 'lodash'    
    import Signalr from 'signalr'
    Vue.use(Vuex)
    Vue.use(VueResource)
    Vue.use(Lodash)
    
    Vue.use(Signalr)
    //var pushSignalR = require('http://push.mn.com.vn/signalr/hubs');
    
    
    export default {
        name : 'Navigation',
        data : function() {
            return {isConnected : false};
        },       
        created: function ()
        {    
            
            this.connection = $.hubConnection('http://push.mn.com.vn/signalr', { useDefaultPath: false, qs: { url: 'http://push.mn.com.vn', soa: 8080, user: 'tuanp' }, logging:true });
            //console.log(connection);
            this.connection.qs = { url: 'http://push.mn.com.vn', soa: 8080, user: 'tuanp' };
             this.proxy = this.connection.createHubProxy('Messenger');
              this.proxy.on('broadcastMessage', function(uid, message) {
             
          });
           this.proxy.on('updateNotificationCountNumber', function(count) {
             
          });
           this.proxy.on('updateSystemNotification', function(uid, message) {
             
          });
           this.proxy.on('updateGroupNotification', function(uid, message) {
            
          });
           this.proxy.on('updateIndividualNotification', function(uid, message) {
             
          });
            
        },
        mounted: function () {
            this.connection.start().done(function() {
            console.log("connected success!");
             this.proxy.invoke('joinGroup', url);
             /*    
            angular.forEach(lstGroupId, function(value) {
              var gname = url + '/' + value;
              proxy.invoke('joinGroup', gname);
            })
            */
          }).fail(function(e) {
            console.log("error !!!!!" + e);
          })
        }
    }
    
</script>