<template>
  <footer class="footer">
    <div class="container">
      <!-- Logo -->
      <div class="footer-logo">
        <nuxt-link to="/">
          <img
            class="hero-logo"
            :src="logo"
            alt="DOLCA Stake Pool Logo"
          />
        </nuxt-link>
        <div class="brand-subtitle">Cardano Blockchain Staking Services</div>
      </div>

      <!-- Columns -->
      <div class="columns footer-columns is-vcentered">
        <div class="column is-4">
          <!-- Links group -->
          <ul class="footer-links">
            <li>
              <nuxt-link to="/cardano-stake-pool">
                {{ $t("cardanoStakePool") }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/tezos-bakery">{{ $t("tezosBakery") }}</nuxt-link>
            </li>
          </ul>
        </div>
        <!-- Newsletter -->
        <div class="column is-4">
          <div class="subscribe-block">
            <form>
              <!-- Field -->
              <div class="control">
                <!-- Special input -->
                <input
                  class="krypton-subscribe-input"
                  type="email"
                  name="email"
                  placeholder=""
                />
                <button class="subscribe-button">
                  <span>{{ $t("subscribe") }}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- Links group -->
        <div class="column is-4">
          <ul class="footer-links">
            <li>
              <a href="https://twitter.com/dolcapool">Twitter</a>
            </li>

            <li>
              <a href="https://t.me/dolcapool">Telegram</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Copyright -->
      <p v-if="new Date().getFullYear() > 2020" class="k-copyright">
        © 2020 – {{ new Date().getFullYear() }} | 2ⁿᵈ Layer. All Rights
        Reserved.
      </p>
      <p v-else class="k-copyright">
        © 2020 | DOLCA Stake Pool. All Rights Reserved.
      </p>
      <br />
    </div>

    <!-- Absolute image -->
    <img class="solar-system" :src="solarSystem" alt="N/A" />
  </footer>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/images/logos/logo-white.svg"),
      solarSystem: require("@/assets/images/bg/solar.svg"),
    }
  },
}
</script>
