<template>
  <div id="app">
    <Navbar nav-title="스마트예약"></Navbar>
    <transition>
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
  }
};
</script>

<style>
</style>
