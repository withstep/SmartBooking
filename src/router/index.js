import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import HelloWorld from '@/components/HelloWorld'

Vue.config.productionTip = false

require('@/assets/css/reset.css')

Vue.use(Router)

var config = {
  apiKey: 'AIzaSyAePEgOgtLTLKKG04MpH8j4Ei8TBdOJfIs',
  authDomain: 'smartbooking-256df.firebaseapp.com',
  databaseURL: 'https://smartbooking-256df.firebaseio.com',
  projectId: 'smartbooking-256df',
  storageBucket: 'smartbooking-256df.appspot.com',
  messagingSenderId: '290428983358'
}
firebase.initializeApp(config)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }]
})
