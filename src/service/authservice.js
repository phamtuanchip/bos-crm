
import Vue from "vue"
import VueResource from "vue-resource"
import Utils from "@/service/utils"

Vue.use(VueResource)

export default {
  
   
  login(credential, success, error) {
      let url = 'http://man-uat.mn.com.vn/xRequest.ashx';
      let params = {RequestClass: "BPM",RequestAction: "SignIn"};
      let  headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
      let data = params;       
       
      data.Account = credential.Username;
      data.Password = credential.Password;   
      var form_data = new FormData();
        for ( var key in data ) {
            form_data.append(key, data[key]);
        }
      
      Vue.http.post(url, form_data, headers)
      .then(response => {
        console.log('Success!:', response.data);        
        if(response.data.success) {
              
              let user = { userId : credential.Username , sessionId : data.Data, authenticated : true };
            //this.$store.state.user = this.user;
            //localStorage.setItem('id_token', data.Data)
            localStorage.setItem('logedOnUser',JSON.stringify(user))
            //localStorage.setItem('access_token', data.Data)
            return localStorage.getItem('logedOnUser');
             
        }  
      }, function (response) {
                console.log('Error!:', response.data);
            });
   
    return {};
  } 
  
}