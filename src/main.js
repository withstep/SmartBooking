// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import firebase from "firebase/app"
import "firebase/firestore"
import VueMoment from "vue-moment"
import moment from "moment-timezone"
import Materialize from "materialize-css"
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"
import "vue-awesome/icons/flag"
import "vue-awesome/icons"
import Icon from "vue-awesome/components/Icon"

Vue.config.productionTip = false

Vue.use(VueMoment, {
  moment
})
Vue.use(Materialize)
Vue.component("v-icon", Icon)

var config = {
  apiKey: "AIzaSyAePEgOgtLTLKKG04MpH8j4Ei8TBdOJfIs",
  authDomain: "smartbooking-256df.firebaseapp.com",
  databaseURL: "https://smartbooking-256df.firebaseio.com",
  projectId: "smartbooking-256df",
  storageBucket: "smartbooking-256df.appspot.com",
  messagingSenderId: "290428983358"
}
firebase.initializeApp(config, {timestampsInSnapshots: true})
export const db = firebase.firestore()

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>"
})
