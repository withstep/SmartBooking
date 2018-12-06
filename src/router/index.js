import Vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld"
import SelectedHour from "@/components/SelectedHour"
import SelectedMinute from "@/components/SelectedMinute"
import Reserve from "@/components/Reserve"

Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/selected-hour",
      name: "SelectedHour",
      component: SelectedHour
    },
    {
      path: "/selected-minute",
      name: "SelectedMinute",
      component: SelectedMinute
    },
    {
      path: "/reserve",
      name: "Reserve",
      component: Reserve
    }
  ]
})
