import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestComponents from '../pages/testComponents/testComponents.vue'
import TestElement from '../pages/elementTest/elementTest.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/testComponents',
          name: 'testComponents',
          component: TestComponents,
        },
        {
          path: '/testElement',
          name: 'testElement',
          component: TestElement,
        }
      ]
    }
  ]
})
