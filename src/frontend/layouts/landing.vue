<template>
  <div class="landing-wrapper">
    <particles-bg
      type="cobweb"
      :bg="false"
      :color="color"
      style="position: absolute; top: 0; bottom: 0"
    />
    <div class="hero is-fullheight">
      <div class="hero-header">
        <Header />
      </div>
      <nuxt />
      <div class="hero-footer">
        <!-- Hero footer -->
        <div class="hero-foot">
          <div class="container">
            <div class="is-centered coin-list">
              <a href="https://www.perlur.cloud/">
                <img class="hero-logo" :src="perlurLogo" alt="PERLUR Group Logo" />
              </a>
              <nuxt-link :to="localePath('/about-cardano/')">
                <img class="hero-logo" :src="cardanoLogo" alt="Cardano Logo">
              </nuxt-link>
              <a href="https://www.2ndlayer.eu/">
                <img class="hero-logo" :src="layerLogo" alt="2nd Layer Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: ["#5507fc"],
      cardanoLogo: require("@/assets/images/coins/Cardano-coin-ADA-symbol.svg"),
      layerLogo: require("@/assets/images/logos/2nd-layer-logo-white.svg"),
      perlurLogo: require("@/assets/images/logos/perlur-logo-white.svg"),
      tezosLogo: require("@/assets/images/coins/Tezos-coin-XTZ-symbol.svg"),
    }
  },
  head() {
    return {
      title: "DOLCA Stake Pool",
    }
  },
}
</script>
