import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/static/Login'
import Dashboard from '@/components/static/Dashboard'
import Upload from '@/components/static/FilesUpload'
import DateTime from '@/components/static/DateTimePicker'
import Request from '@/components/Request'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }  
    ,
    {
      path: '/request',
        name: 'Request',
        component: Request

    },
     {
       path: '/datetimepicker',
       name: 'DateTime Picker',
       component: DateTime
     }

  ]
})
