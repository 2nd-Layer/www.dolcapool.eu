<template>
  <div class="hero-body">
    <div class="container">
      <h2 class="subtitle is-3 is-light is-thin pl-2">Our Partners</h2>
      <div class="columns is-gapless">
        <div class="column is-3">
        </div>
        <div class="column is-3">
        </div>
        <div class="column is-6">
          <h3 class="subtitle has-text-centered is-5 is-light is-thin mb-1">Better Late Than Never Parnership with DOLCA</h3>
          <div class="columns is-vcentered">
            <div class="column">
              <figure class="image">
                <img :src="ouroborosImage" alt="Cardano Ouroboros Image" />
              </figure>
            </div>
            <div class="column">
              <p class="content">
                <strong>Better Late Than Never</strong> Cardano Shelley Incentivized Testnet pools <strong>BLTNA</strong> and <strong>BLTNB</strong> have joined forces with <strong>DOLCA</strong> for the <nuxt-link to="/about-cardano/">Cardano Shelley Mainnet</nuxt-link>.
              </p>
              <p class="content buttons has-addons is-centered">
                <nuxt-link
                  to="/our-partners/better-late-than-never-partnership/"
                  class="button k-button k-primary raised has-gradient is-fat is-bold"
                >
                  <span class="text">Read detailed statement!</span>
                  <span class="front-gradient" />
                </nuxt-link>
              </p>
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
      ouroborosImage: require("@/assets/images/icons/ouroboros.svg"),
    }
  },
}
</script>
