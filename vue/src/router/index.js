import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import BookList from '@/components/List'
import BookAdd from '@/components/Add'
import BookBuy from '@/components/Buy'
import BookModify from '@/components/Modify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'list',
      component: BookList
    },
    {
      path: '/add',
      name: 'add',
      component: BookAdd
    },
    {
      path: '/buy',
      name: 'buy',
      component: BookBuy
    },
    {  
      path: '/update',
      name: 'update',
      component: BookModify
    }
  ]
})
