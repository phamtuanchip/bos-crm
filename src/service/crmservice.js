import Vue from "vue"
import VueResource from "vue-resource"

export default {

	searchCustomer() {

	},
	insertCustomer(){
	    
	},
  
  	post(params, ignoreSession, baseUri) {
      return new Promise((resolve, reject) => {
      		if (params.TotalRequests != 0) {
      			if (!ignoreSession)
			      params.SessionId = localStorage.getItem('SessionId');
			  	let url = 'http://man-uat.mn.com.vn/xRequest.ashx';
			  	// let params = {RequestClass: "BPM",RequestAction: "SignIn"};
			  	let  headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
			  	let data = params;        
			  	var form_data = new FormData();
			    for ( var key in data ) {
			        form_data.append(key, data[key]);
			    }
			    var arrDelete = ['id', 'leaf', 'text', 'cls', 'level', 'expanded', 'uid', 'parent_uid', 'LeftIndex', 'RightIndex', 'Data', '$$hashKey'];
			    for ( var key in arrDelete ) {
			        if (params.TotalRequests) {
				        for (var i = 1; i <= params.TotalRequests; i++) {
				          delete params['R' + i + '_' + key];
				        }
				    } else
				        delete params[key];
			    }
	      	Vue.http.post(url, form_data, headers)
		      .then(response => {
		            resolve(response.data);
		      }, function (response) {
		        reject('Error!:', response.data);
		    });   
		}
    // return {};
  		})
    }

}