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
          <h1 class="title is-2 is-light is-semibold is-spaced main-title">{{ $t('cardanoStakePool') }}</h1>
          <h2 class="subtitle is-5 is-light is-thin">
            {{ $t('cardanoStakePoolText') }}
          </h2>
          <!-- CTA -->
          <p>
            <a href="start" class="button k-button k-primary raised has-gradient is-fat is-bold">
              <span class="text">{{ $t('moreDetails') }}</span>
              <span class="front-gradient"></span>
            </a>
          </p>
        </div>
        <div class="column is-6">
          <div v-if="pool" class="box primary-gradient">
            <h2 class="title is-2 is-light is-semibold is-spaced main-title">
              <span>{{ $t('livePoolStats') }}</span>
              <span class="has-text-weight-light">- {{$t('rank')}}: {{ rank }}</span>
            </h2>
            <div class="columns is-vcentered">
              <div class="column is-6">
                <p><b>{{ $t('currentEpochStake') }}:</b> {{ currentEpochStake }} ₳</p>
                <p><b>{{ $t('lastRewardEpoch') }}:</b> {{ lastRewardEpoch }}</p>
                <p><b>{{ $t('taxRatio') }}:</b> {{ taxRatio }}%</p>
                <p><b>{{ $t('taxFixed') }}:</b> {{ taxFixed }} ₳</p>
              </div>
              <div class="column is-6">
                <p><b><abbr :title="$t('returnOnAssets')">{{ $t('roa') }}</abbr>:</b> {{ roa }}%</p>
                <p><b>{{ $t('blocksLifetime') }}:</b> {{ blocksLifetime }}</p>
                <p><b>{{ $t('blocksEpoch') }}:</b> {{ blocksEpoch }}</p>
                <p><b>{{ $t('pledge') }}:</b> {{ pledge }} ₳</p>
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
                  <h3 class="title is-4 is-light">{{ $t('networkGovernance') }}</h3>
                  <div class="divider"></div>
                  <p class="is-light my-3"><nuxt-link to="/dolca-stake-pool-team/">As a team of Stake Pool Owners and Operators</nuxt-link>, we feel obliged to provide expert advice to our <strong>stake delegates</strong> about on-chain Governance in the areas of both the <nuxt-link to="/about-cardano/">Technicals of Cardano Blockchain</nuxt-link>, as well as investments in <a href="https://iohk.io/en/blog/posts/2020/09/10/project-catalyst-voltaire-bring-power-to-the-people/">Project Catalyst</a> ideas.</p>
                  <p class="is-light my-3">Our team comprises of experts in the fields of Networking, IT infrastructure, <nuxt-link to="/partnership-with-dCloud/">Cloud</nuxt-link>, DevOps and <nuxt-link to="/about-cardano/">Blockchain Technology</nuxt-link> as well as Software Development...</p>
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
                  <h3 class="title is-4 is-light">{{ $t('increasedSecurity') }}</h3>
                  <div class="divider"></div>
                  <p class="is-light my-3">{{ $t('increasedSecurityText1') }}</p>
                </div>
              </div>
            </div>

            <div class="columns is-vcentered">
              <!-- Feature content -->
              <div class="column is-5 is-offset-1">
                <div class="side-feature-content">
                  <h3 class="title is-4 is-light">{{ $t('valueStacking') }}</h3>
                  <div class="divider"></div>
                  <p class="is-light my-3">{{ $t('valueStackingText1') }}</p>
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
