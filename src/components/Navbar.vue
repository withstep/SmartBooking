<template>
  <nav id="navbar">
    <div class="nav-wrapper">
      <span class="brand-logo center">{{ navTitle }}</span>
      <ul class="left" v-if="isHome">
        <li>
          <a href="javascript:history.go(-1)" class="backlink">
            <v-icon name="chevron-left"></v-icon>
            <span>이전</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    navTitle: {
      type: String
    }
  },
  computed: {
    isHome: function() {
      if (this.$route.path === "/") {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.backlink span {
  font-size: 1.4em;
}
</style>
