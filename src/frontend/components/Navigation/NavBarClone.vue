<template>
  <nav id="navbar-clone" :class="navBarCloneClass">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <strong class="has-text-white">DOLCA stake pool</strong>
        </nuxt-link>
        <ResponsiveToggle/>
      </div>
      <!-- Menu -->
      <div id="cloneNavbarMenu" :class="navMenuClass">
        <NavContent/>
      </div>
    </div>
  </nav>
  <!-- /Cloned navbar -->
</template>

<script>
  import NavContent from "./NavContent";
  import ResponsiveToggle from "./ResponsiveToggle";
  import {mapState} from 'vuex';

  export default {
    components: {
      NavContent,
      ResponsiveToggle
    },
    computed: {
      navBarCloneClass() {
        return ['navbar', 'is-fixed', 'is-dark', this.scrollPosition > 50 || this.isMobileMenuToggled ? 'is-active' : ''];
      },
      navMenuClass() {
        return ['navbar-menu', this.isMobileMenuToggled ? 'is-active' : '']
      },
      ...mapState('responsive-toggle', ['isMobileMenuToggled'])
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    data() {
      return {
        scrollPosition: 0,
      };
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll(event) {
        this.scrollPosition = window.top.scrollY;
      }
    }
  }
</script>
