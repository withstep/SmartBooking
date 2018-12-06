<template>
  <div id="app">
    <Navbar nav-title="스마트예약"></Navbar>
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
  }
};
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.time-picker-preview {
  display: none;
}
.interval-container {
  text-align: center;
  font-size: 1.1em;
}
.outside-click-container {
  left: 0;
  right: 0;
  margin: auto;
}
.time-picker-modal-container {
  width: auto !important;
}

p.description {
  font-size: 1.2em;
  margin: 0 0 20px 0;
  padding: 5px;
  background: #eeeeee;
}
.datebox {
  text-align: center;
  font-size: 1.6em;
}
div.nextbtn {
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}
</style>
