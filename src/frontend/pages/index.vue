<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-vcentered">
        <!-- Landing page Title -->
        <div class="column is-6 landing-caption">
          <h1 class="title is-1 is-light is-semibold is-spaced main-title">Cardano (ADA) Staking Services</h1>
          <h2 class="subtitle is-5 is-light is-thin">
            <b>DOLCA</b> is a value-added Staking Services provider for Proof of Stake
            <nuxt-link to="/about-cardano/">cryptocurrency Cardano</nuxt-link>
            .
          </h2>
          <!-- CTA -->
          <p>
            <a href="/begin-staking-now/" class="button k-button k-primary raised has-gradient is-fat is-bold">
              <span class="text">Get Started</span>
              <span class="front-gradient"></span>
            </a>
          </p>
        </div>
        <!-- Hero image -->
        <div class="column is-6">
          <div v-if="pool" class="box primary-gradient">
            <h2 class="title is-2 is-light is-semibold is-spaced main-title">Live Pool Stats</h2>
            <div class="columns is-vcentered">
              <div class="column is-6">
                <p><b>Total Stake:</b> {{ totalStake }}</p>
                <p><b>Last Reward Epoch:</b> {{ lastRewardEpoch }}</p>
                <p><b>Tax Ratio:</b> {{ taxRatio }}</p>
                <p><b>Tax Fixed:</b> {{ taxFixed }}</p>
              </div>
              <div class="column is-6">
                <p><b>ROA:</b> {{ roa }}</p>
                <p><b>Blocks Lifetime:</b> {{ blocksLifetime }}</p>
                <p><b>Blocks Epoch:</b> {{ blocksEpoch }}</p>
                <p><b>Pledge:</b> {{ pledge }}</p>
                <p><b>Rank:</b> {{ rank }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  layout: 'landing',

  computed: {
    totalStake() {
      return this.lovelaceToAda(this.pool.active_stake);
    },
    lastRewardEpoch() {
      return this.pool.rewards_epoch;
    },
    taxRatio() {
      return this.pool.tax_ratio;
    },
    taxFixed() {
      return this.lovelaceToAda(this.pool.tax_fix);
    },
    roa() {
      return this.pool.roa;
    },
    blocksLifetime() {
      return this.pool.blocks_lifetime;
    },
    blocksEpoch() {
      return this.pool.blocks_epoch;
    },
    pledge() {
      return this.lovelaceToAda(this.pool.pledge);
    },
    rank() {
      return this.pool.rank;
    }
  },

  data() {
    return {
      pool: null,
      playButton: require('@/assets/images/icons/play.svg')
    };
  },

  methods: {
    lovelaceToAda(lovelace) {
      return Math.floor(lovelace / Math.pow(10, 6))
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  mounted() {
    axios.get('https://js.adapools.org/pools/550f5dc96814537404c7544175d348262699e448d74005dfa26540d3/summary.json').then((resp) => {
      if (resp.status === 200 && resp.data.data) {
        this.pool = resp.data.data;
      }
    });
  }
}
</script>
