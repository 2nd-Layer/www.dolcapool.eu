<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-2">
          <div class="token-image mb-40">
            <nuxt-link to="/about-cardano/">
              <img :src="cardanoLogo" alt="Cardano Logo">
            </nuxt-link>
          </div>
        </div>
        <div class="column is-4">
          <h1 class="title is-2 is-light is-semibold is-spaced main-title">Cardano Stake Pool</h1>
          <h2 class="subtitle is-5 is-light is-thin">
            Cryptocurrency brought to the next level. Join our Stake Pool for supercharged rewards.
          </h2>
          <!-- CTA -->
          <p>
            <a href="start" class="button k-button k-primary raised has-gradient is-fat is-bold">
              <span class="text">More details</span>
              <span class="front-gradient"></span>
            </a>
          </p>
        </div>
        <div class="column is-6">
          <div v-if="pool" class="box primary-gradient">
            <h2 class="title is-2 is-light is-semibold is-spaced main-title">Live Pool Stats <span class="has-text-weight-light">- Rank: {{ rank }}</span></h2>
            <div class="columns is-vcentered">
              <div class="column is-6">
                <p><b>Current Epoch Stake:</b> {{ currentEpochStake }} ₳</p>
                <p><b>Last Reward Epoch:</b> {{ lastRewardEpoch }}</p>
                <p><b>Variable Fee:</b> {{ taxRatio }}%</p>
                <p><b>Fixed Fee:</b> {{ taxFixed }} ₳</p>
              </div>
              <div class="column is-6">
                <p><b><abbr title="Return on Assets">RoA</abbr>:</b> {{ roa }}%</p>
                <p><b>Lifetime Blocks:</b> {{ blocksLifetime }}</p>
                <p><b>Epoch Blocks:</b> {{ blocksEpoch }}</p>
                <p><b>Owner Pledge:</b> {{ pledge }} ₳</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="section is-medium">
        <div class="container">

          <!-- Content wrapper -->
          <div class="content-wrapper">
            <div class="columns is-vcentered">
              <!-- Feature content -->
              <div class="column is-5 is-offset-1">
                <div class="side-feature-content">
                  <h3 class="title is-4 is-light">Network Governance</h3>
                  <div class="divider"></div>
                  <p class="is-light"><nuxt-link to="/docla-stake-poool-team/">As team of Stake Pool Owners and Operators</nuxt-link>, we feel oblighed to provide expert advice to out <strong>stake delegates</strong> about on-chain Governance in the areas of both the <nuxt-link to="/about-cardano/">Technicals of Cardano Blockchain<nuxt-link> as well as investments in <a href="https://iohk.io/en/blog/posts/2020/09/10/project-catalyst-voltaire-bring-power-to-the-people/">Project Catalyst</a.></p>
                  <p class="is-light">Our teamn compises of experts in the fields of Networking, IT infrastructure, <nuxt-link to="/partnership-with-dCloud/">Cloud</nuxt-link>, DevOps and <nuxt-link to="/about-cardano/">Blockchain Technology</a> as well as Software Development..</p>
                </div>
              </div>
              <!-- Feature image -->
              <div class="column is-7">
                <img class="side-feature" src="#" alt="">
              </div>
            </div>
            <div class="columns is-vcentered">
              <!-- Feature image -->
              <div class="column is-7">
                <img class="side-feature" src="#" alt="">
              </div>
              <!-- Feature content -->
              <div class="column is-5">
                <div class="side-feature-content">
                  <h3 class="title is-4 is-light">Value Stacking</h3>
                  <div class="divider"></div>
                  <p class="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit.
                    Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
                </div>
              </div>
            </div>

            <div class="columns is-vcentered">
              <!-- Feature content -->
              <div class="column is-5 is-offset-1">
                <div class="side-feature-content">
                  <h3 class="title is-4 is-light">Increased Security</h3>
                  <div class="divider"></div>
                  <p class="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit.
                    Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
                </div>
              </div>
              <!-- Feature image -->
              <div class="column is-7">
                <img class="side-feature" src="#" alt="">
              </div>
            </div>
          </div>
          <!-- /Content wrapper -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pool: null,
      cardanoLogo: require('@/assets/images/coins/Cardano-coin-ADA-symbol.svg'),
    };
  },
  computed: {
    currentEpochStake() {
      return this.lovelaceToAda(this.pool.active_stake);
    },
    lastRewardEpoch() {
      return this.pool.rewards_epoch;
    },
    taxRatio() {
      return this.pool.tax_ratio * 100;
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
