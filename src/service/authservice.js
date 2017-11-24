
import Vue from "vue"
import VueResource from "vue-resource"
import Utils from "@/service/utils"

Vue.use(VueResource)

export default {
  
   
  login(credential, success, error) {
      let url = 'http://man-uat.mn.com.vn/xRequest.ashx';
      let params = {RequestClass: "BPM",RequestAction: "SignIn"};
      let headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
      let data = params;       
       
      if(localStorage.getItem('SessionId')){
        data.SessionId = localStorage.getItem('SessionId')
      }
      data.Account = credential.Username;
      data.Password = credential.Password;   
      var form_data = new FormData();
      for ( var key in data ) {
          form_data.append(key, data[key]);
      }
      return new Promise((resolve, reject) => {
	      Vue.http.post(url, form_data, headers)
		      .then(response => {
		        console.log('Success!:', response.data);        
		        if(response.data.success) {
                    if(response.data.Data){
                      let params = {
                            RequestAction: "GetUserInformation",
                            RequestClass: "BPM",
                            SessionId: response.data.Data
                      };
                      let fData = new FormData();
                      for ( var key in params ) {
                          fData.append(key, params[key]);
                      }
                     
                      localStorage.setItem('SessionId', response.data.Data)
                      Vue.http.post(url, fData, headers).then(res =>{
                          console.log(res.data);
                          let user = res.data.UserDS.User;
                          user.Groups = res.data.UserDS.Group;
                          localStorage.setItem('logedOnUser',JSON.stringify(user))               
                      }, function(res){
                          reject('Error!:', res.data); 
                      }); 
                    }
                        //let user = { userId : credential.Username , sessionId : response.data.Data, authenticated : true };
		            //this.$store.state.user = this.user;
		            //localStorage.setItem('id_token', data.Data)
		           
		            //localStorage.setItem('access_token', data.Data)
		            resolve(response.data);
		             
		        } else {
              reject({ error: "noUser" });
            }
		      }, function (response) {
		        reject('Error!:', response.data);
		    });   
		})
    // return {};
  },
  logout() {
    var user = {};
    if (localStorage.getItem('logedOnUser') && localStorage.getItem('SessionId')) {
      user.Username = JSON.parse(localStorage.getItem('logedOnUser')).LoginName;
      user.SessionId = localStorage.getItem('SessionId');
      this.login(user).then((data) =>{
        localStorage.clear()
      })
    } else {
      localStorage.clear()
    }
  },
  checkSession() {
    let url = 'http://man-uat.mn.com.vn/xRequest.ashx';
    let params = {
      RequestAction: "GetUserInformation",
      RequestClass: "BPM",
      SessionId: localStorage.getItem('SessionId')
    };
    let  headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
    let data = params;
    var form_data = new FormData();
    for ( var key in data ) {
        form_data.append(key, data[key]);
    }
    return new Promise((resolve, reject) => {
      Vue.http.post(url, form_data, headers).then(response => {
        console.log(response.data)
        if (response.data.UserDS && response.data.UserDS.User) {
          resolve(response.data.UserDS.User);
        } else {
          reject({ error: "noUser" });
        }
      }, function() {
        reject({ error: "noUser" });
      });
    })
  }
  
}