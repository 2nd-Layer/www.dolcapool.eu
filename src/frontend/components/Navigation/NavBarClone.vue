<template>
  <nav id="navbar-clone" :class="navBarCloneClass">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <img :src="logo" alt="DOLCA Staking Services Logo" />
        </nuxt-link>
        <ResponsiveToggle />
      </div>
      <!-- Menu -->
      <div id="cloneNavbarMenu" :class="navMenuClass">
        <NavContent />
      </div>
    </div>
  </nav>
  <!-- /Cloned navbar -->
</template>

<script>
import NavContent from "./NavContent"
import ResponsiveToggle from "./ResponsiveToggle"
import { mapState } from "vuex"

export default {
  components: {
    NavContent,
    ResponsiveToggle,
  },
  data() {
    return {
      logo: require("@/assets/images/logos/logo-header-no-symbol-white.svg"),
      scrollPosition: 0,
    }
  },
  computed: {
    navBarCloneClass() {
      return [
        "navbar",
        "is-fixed",
        "is-dark",
        this.scrollPosition > 50 || this.isMobileMenuToggled ? "is-active" : "",
      ]
    },
    navMenuClass() {
      return ["navbar-menu", this.isMobileMenuToggled ? "is-active" : ""]
    },
    ...mapState("responsive-toggle", ["isMobileMenuToggled"]),
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.top.scrollY
    },
  },
}
</script>
