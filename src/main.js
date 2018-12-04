// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
// import firestore from 'firebase/firestore'

var config = {
  apiKey: 'AIzaSyAePEgOgtLTLKKG04MpH8j4Ei8TBdOJfIs',
  authDomain: 'smartbooking-256df.firebaseapp.com',
  databaseURL: 'https://smartbooking-256df.firebaseio.com',
  projectId: 'smartbooking-256df',
  storageBucket: 'smartbooking-256df.appspot.com',
  messagingSenderId: '290428983358'
}
firebase.initializeApp(config)

require('@/assets/css/reset.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
