import Vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld"
import SelectedTime from "@/components/SelectedTime"
import Reserve from "@/components/Reserve"

Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/selected-time",
      name: "SelectedTime",
      component: SelectedTime
    },
    {
      path: "/reserve",
      name: "Reserve",
      component: Reserve
    }
  ]
})
