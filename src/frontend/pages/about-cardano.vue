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
          Cardano is a 3<sup>rd</sup> generation blockchain, project started in 2015 and debuted publicly in late 2017. Cardano uses proof-of-stake consensus and relies heavily on peer-reviewed science. Cardano uses unique, provably secure Proof-of-stake consensus algorithm from the Ouroboros family.
        </p>
        <p>In addition similarly to Bitcoin, it usses UTXO accounting model, Extended UTXO specifically to enable <strong class="has-text-white">Proof-of-Stake</strong> and <strong class="has-text-white">Smart Contracts</strong>. Compared to <strong class="has-text-white">Account based accounting model<strong class="has-text-white">, it provides greater opportunities for scaling than <strong class="has-text-white">Account based accounting model<strong class="has-text-white">.
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
      </div>
      <div class="column is-narrow">
        <div class="token-image mb-40" style="filter: invert(100%);">
          <img :src="ouroborosImage" alt="Ouroboros Image">
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