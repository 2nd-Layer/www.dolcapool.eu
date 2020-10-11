<template>
  <div class="navbar-end">
    <!-- Menu item -->
    <div class="navbar-item is-nav-link">
      <nuxt-link class="is-centered-responsive" :to="localePath('/')">
        {{ $t('overview') }}
      </nuxt-link>
    </div>

    <!-- Menu item -->
    <div class="navbar-item is-nav-link">
      <nuxt-link class="is-centered-responsive" :to="localePath('/cardano-stake-pool')">
        {{ $t('cardanoStakePool') }}
      </nuxt-link>
    </div>

    <!-- Menu item -->
    <div class="navbar-item is-nav-link">
      <nuxt-link class="is-centered-responsive" :to="localePath('/better-late-than-never-partnership')">
        {{ $t('bltnPartnership') }}
      </nuxt-link>
    </div>

    <!-- Stake Now -->
    <div class="navbar-item is-nav-link">
      <nuxt-link :to="localePath('/begin-staking-now')" class="button k-button k-primary raised has-gradient slanted">
        <span class="text">{{ $t('beginStakingNow') }}</span>
        <span class="front-gradient"></span>
      </nuxt-link>
    </div>

    <div class="navbar-item is-nav-link">
      <a href="https://twitter.com/dolcapool">
        <i class="fab fa-twitter is-size-3"></i>
      </a>
    </div>

    <div class="navbar-item is-nav-link">
      <a href="https://t.me/dolcapool">
        <i class="fab fa-telegram-plane is-size-3"></i>
      </a>
    </div>

    <div class="navbar-item">
      <div class="field">
        <div class="control">
          <div class="select locale-switcher">
            <select v-model="locale">
              <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code">
                {{ localeName(locale.code) }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex';

  export default {
    computed: {
      availableLocales () {
        return this.$i18n.locales
      }
    },

    data() {
      return {
        locale: this.$i18n.locale
      }
    },

    name: 'NavContent',
    mounted() {

    },

    methods: {
      localeName(code) {
        switch (code) {
        case 'en':
          return 'English';
        case 'cs':
          return 'Czech';
        }
        return 'N/A';
      },
      ...mapMutations('modals', ['toggleGetStartedModal'])
    },

    watch: {
      locale() {
        window.location = this.switchLocalePath(this.locale);
      }
    }
  }
</script>
