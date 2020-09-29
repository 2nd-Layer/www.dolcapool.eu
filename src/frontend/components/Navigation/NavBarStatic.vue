<template>
  <!-- Static navbar -->
  <nav class="navbar is-light">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <strong class="has-text-white">DOLCA stake pool</strong>
        </nuxt-link>
        <!-- Responsive toggle -->
        <ResponsiveToggle/>
      </div>
      <!-- Menu -->
      <div id="navbarMenu" :class="navMenuClass">
        <NavContent/>
      </div>
    </div>
  </nav>
  <!-- /Static navbar -->
</template>

<script>
  import NavContent from "./NavContent";
  import ResponsiveToggle from "./ResponsiveToggle";
  import { mapState } from 'vuex';

  export default {
    components: {
      NavContent,
      ResponsiveToggle
    },
    computed: {
      navMenuClass() {
        return ['navbar-menu', this.isMobileMenuToggled ? 'is-active' : '']
      },
      ...mapState({
        isMobileMenuToggled: 'responsive-toggle/isMobileMenuToggled'
      })
    },
  }
</script>
