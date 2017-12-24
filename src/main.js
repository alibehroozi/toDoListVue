import Vue from 'vue'
import VueRouter from 'vue-router'
import VueRes from 'vue-resource'
import App from './App.vue'
import allTasks from './allTasks.vue'
import Home from './Home.vue'

Vue.use(VueRouter);
Vue.use(VueRes);

const routes = [
  { path: '/allTasks', component: allTasks, props: true },
  { path: '/', component: Home, props: true }
];
const router = new VueRouter({
  routes
});



var tod = new Vue({
  el: '#app',
  data: {
    tasks:[]
  },

  router,
  render: h => h(App),
});
