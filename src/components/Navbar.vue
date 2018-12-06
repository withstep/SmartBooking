<template>
  <nav id="navbar">
    <div class="nav-wrapper">
      <span class="brand-logo center">{{ navTitle }}</span>
      <ul class="right" v-if="!isHome">
        <li>
          <router-link to="/" class="home">
            <v-icon name="home"></v-icon>&nbsp;처음
          </router-link>
        </li>
      </ul>
      <ul class="left" v-if="!isHome">
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
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.backlink span {
  font-size: 1.4em;
}
.home {
  font-size: 1.4em;
}
</style>
