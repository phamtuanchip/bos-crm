<template>
  <div v-if="arrPages.length > 0">
      <ul>
        <li > <router-link to="/">Home</router-link></li>
        <li > <router-link to="/dashboard">Dashboard</router-link></li>
        <li > <router-link to="/login">Login</router-link></li>
        <li > <router-link to="/upload">Upload</router-link></li>   
        <li > <router-link to="/request">Request</router-link></li>  
        <li > <router-link to="/datetimepicker">DateTime Picker</router-link></li>
        <li > <router-link to="/form">Form</router-link></li>  
        <li > <router-link to="/dynamicform">Dynamic Form</router-link></li>  
      </ul>
      <ol>
        <li v-for="n in arrPages" v-if="n.IsShowOnMenu == 'true' || n.IsShowOnMenu"> <router-link :to="n.UrlPage">{{n.Caption}}</router-link></li>
      </ol>
      <div> Connected SignalR {{isConnected}}</div>
    </div>
  
</template>
<script>
    import Vue from 'vue'
    import Vuex from 'vuex'
    import VueResource from 'vue-resource'
    import Lodash from 'lodash'    
    import Signalr from 'signalr'
    import Authservice from "@/service/authservice"
    import CRMservice from "@/service/crmservice"

    Vue.use(Authservice)
    Vue.use(CRMservice)
    Vue.use(Vuex)
    Vue.use(VueResource)
    Vue.use(Lodash)
    
    Vue.use(Signalr)
    //var pushSignalR = require('http://push.mn.com.vn/signalr/hubs');
    
    
    export default {
        name : 'Navigation',
        data : function() {
            return {isConnected : false, arrPages: []};
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
          if(localStorage.getItem('SessionId')){
            var params = {
              RequestClass: 'xBase',
              RequestAction: 'Request',
              TotalRequests: 1,
              R1_AssignedUser: localStorage.getItem('SessionId'),
              R1_RequestTemplate: 'SettingNew.SearchSetting',
              R1_ParentCode: "xSetting.Project.Page"
            };
            CRMservice.post(params).then((data) =>{
              if(data.R) {
              this.arrPages = (data.R1.Data && data.R1.Data.DynamicDS.Setting) ? data.R1.Data.DynamicDS.Setting : [];
              if(this.arrPages.length > 0){
                this.arrPages.forEach(function(item){
                  var Description = JSON.parse(item.Description)
                  delete item.Description;
                  for (var key in Description){
                    if (Description.hasOwnProperty(key)) {
                      item[key] = Description[key];
                      if(key == "UrlPage"){
                        item[key] = "/" + Description[key];
                      }
                    }
                  }
                  var i = Lodash.clone(item.Level)
                  while(i > 4){
                    item.Caption = "-- " + item.Caption;
                    i--
                  }
                })
              }
              console.log(this.arrPages)
              localStorage.setItem('ListPages', JSON.stringify(this.arrPages));
              }
            });
          }
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