import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/static/Login'
import Dashboard from '@/components/static/Dashboard'
import Upload from '@/components/static/FilesUpload'
import DateTime from '@/components/static/DateTimePicker'
import Form from '@/components/static/Form'
import Request from '@/components/Request'
import DynamicForm from '@/components/dynamic/dynamic-form'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload,
      meta: { requiresAuth: true }
    },
    {
      path: '/request',
        name: 'Request',
        component: Request,
        meta: { requiresAuth: true }
    },
     {
       path: '/datetimepicker',
       name: 'DateTime Picker',
       component: DateTime,
       meta: { requiresAuth: true }
    },
    {
       path: '/dynamicform',
       name: 'Dynamic Form',
       component: DynamicForm,
       meta: { requiresAuth: true }
    },
    {
       path: '/form',
       name: 'Form',
       component: Form,
       meta: { requiresAuth: true }
    },

  ],

})