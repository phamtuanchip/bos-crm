export default{
  demoDynamicForm(){

    return {
      //request options
      // request:{
      //   //post url
      //   url:'/register',
      //   //method
      //   method:'post',
      //   //adding the CSRF Token for laravel applications
      //   headers:new Headers({
      //     'X-CSRF-TOKEN':window.Laraval.csrfToken
      //   }),
      //   //include credentials
      //   credentials:'include'
      // },
      //title
      title:'Demo Form',
      //text of the submit button
      submitText:'Register',
      //inputs
      inputs:[
        {
          type:'text',
          label:'Tên',
          name:'Name',
          class:'form-control',
          value:'Nhập tên',
          ele:'input'
        },
        // {
        //   type:'text',
        //   label:'Lastname',
        //   name:'lastname',
        //   class:'form-control',
        //   value:'',
        //   ele:'input'
        // },
        {
          type:'email',
          label:'Email',
          name:'Email',
          class:'form-control',
          value:'',
          ele:'input'
        },
        {
          type:'password',
          label:'Mật khẩu',
          name:'Password',
          class:'form-control',
          value:'',
          ele:'input'
        },
        {
          type:'password',
          label:'Xác nhận mật khẩu',
          name:'password_confirmation',
          class:'form-control',
          value:'',
          ele:'input'
        },
        {
          type:'date',
          label:'Ngày sinh',
          name:'Birthday',
          class:'form-control',
          value:'',
          ele:'input'
        },
        {
          type:'tel',
          label:'Số điện thoại',
          name:'Phone',
          class:'form-control',
          value:'',
          ele:'input'
        },
        {
          type:'select',
          label:'Giới tính',
          name:'Gender',
          class:'form-control',
          options:['male','female'],
          value:"",
          ele:'select',
          obj:[
            {id:123, text:'Nam'},
            {id:456, text:'Nữ'},
          ]
        },

      ]
    }
  }
}