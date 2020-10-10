<template>
  <div class="hero-body">
    <div class="columns has-text-left">
      <div class="column is-narrow is-offset-2">
        <div class="token-image mb-40">
          <img :src="cardanoLogo" alt="Cardano Logo">
        </div>
      </div>
      <div class="column">
        <h2 class="subtitle is-3 is-light is-thin pl-2">
          About Cardano
        </h2>
        <p class="content pl-2">
          Cardano is a 3<sup>rd</sup> generation blockchain, project started in 2015 and debuted publicly in late 2017. Cardano uses Proof-of-Stake consensus and relies heavily on peer-reviewed science. Cardano uses unique, provably secure Proof-of-Stake consensus algorithm from the Ouroboros family. Native token enabling stakeholders to participate in consensus is <strong class="has-text-white">ADA</strong>, with symbol <strong class="has-text-white">₳</strong>.
        </p>
        <!-- CTA -->
        <p class="content buttons has-addons is-centered">
          <nuxt-link to="/begin-staking-now/" class="button k-button k-primary raised has-gradient is-fat is-bold">
            <span class="text">Stake your <strong class="has-text-white">₳</strong> now</span>
            <span class="front-gradient"></span>
          </nuxt-link>
        </p>
        <!-- CTA end -->
        <p>
          In addition similarly to Bitcoin, <strong class="has-text-white">Cardano</strong> usses <strong class="has-text-white">UTXO</strong> accounting model, <strong class="has-text-white">Extended UTXO</strong> (<strong class="has-text-white">eUTXO</strong> - <a href="https://iohk.io/en/research/library/papers/the-extended-utxo-model/">pre-print paper - The Extended UTXO Model</a> [<a href="https://link.springer.com/chapter/10.1007/978-3-030-54455-3_37">Springer Link</a>]) specifically to enable <strong class="has-text-white">Proof-of-Stake</strong> and formally verifiable <strong class="has-text-white">Plutus Smart Contracts</strong>. Compared to <strong class="has-text-white">Account based</strong> accounting model, <strong class="has-text-white">eUTXO</strong> accounting model provides greater opportunities for scaling on both <strong class="has-text-white">Layer 1</strong> and <strong class="has-text-white">Layer 2</strong>.
        </p>
      </div>
    </div>
    <div class="columns has-text-left">
      <div class="column is-offset-2">
        <h3 class="subtitle is-4 is-light is-thin pr-2">
          About Ouroboros Proof-of-Stake
        </h3>
        <p class="content pl-2">
          Provably secure Proof-of-Stake consensus protocol Ouroboros was first introduced in the paper <a href="https://eprint.iacr.org/2016/889">Ouroboros: A Provably Secure Proof-of-Stake Blockchain Protocol</a> now simply referred to as <strong class="has-text-white">Ouroboros Classic</strong>, since then, many iterations of Ouroboros protocol have been published improving different properties and making certain trade-offs... Other papers from the Ouroboros series include:
          <ul>
            <li><a href="https://eprint.iacr.org/2017/573">Ouroboros Praos: An adaptively-secure, semi-synchronous proof-of-stake blockchain</a></li>
            <li><a href="https://eprint.iacr.org/2018/378">Ouroboros Genesis: Composable Proof-of-Stake Blockchains with Dynamic Availability</a></li>
            <li><a href="https://eprint.iacr.org/2018/1132">Ouroboros Crypsinous: Privacy-Preserving Proof-of-Stake</a></li>
            <li><a href="https://eprint.iacr.org/2019/838">Ouroboros Chronos: Permissionless Clock Synchronization via Proof-of-Stake</a></li>
            <li><a href="https://eprint.iacr.org/2019/942">Ouroboros Clepsydra: Ouroboros Praos in the Universally Composable Relative Time Model</a></li>
          </ul>
        </p>
        <p class="content pl-2">
          Current Cardano Shelley Mainnet operates using <a href="https://eprint.iacr.org/2017/573">Ouroboros Praos</a> Proof-of-Stake consensus mechanism. Two major values influencing the network topology are <code>k</code> which controls the amount of stakepools the system should converge to, that is currently set to <strong class="has-text-white">150</strong>, based on Cardano Shelley Incentivized Testnet, this should bring effective amount of pools to <i>250</i> - <i>300</i>. Another such important parameter is <code>a0</code> which drives the influence of <strong class="has-text-white">owners stake</strong>  (also called <strong class="has-text-white">pledge</strong> on rewards for himself and his delegates. With current setting of <code>a0</code> set to <i>0.3</i>.
        </p>
        <!-- CTA -->
        <p>
          <nuxt-link to="/begin-staking-now/" class="button k-button k-primary raised has-gradient is-fat is-bold">
            <span class="text">Begin Staking Now</span>
            <span class="front-gradient"></span>
          </nuxt-link>
        </p>
        <!-- CTA end -->
      </div>
      <div class="column is-narrow">
        <div class="token-image mb-40" style="filter: invert(100%);">
          <img src="/_nuxt/img/ouroboros.fad40a7.svg" alt="Ouroboros Image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardanoLogo: require('@/assets/images/coins/Cardano-coin-ADA-symbol.svg'),
      ouroborosImage: require('@/assets/images/icons/ouroboros.svg')
    }
  }
}
</script>