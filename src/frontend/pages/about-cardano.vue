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
      </div>
    </div>
    <div class="columns has-text-left">
      <div class="column is-offset-2">
        <h3 class="subtitle is-4 is-light is-thin pr-2">
          About Ouroboros Proof-of-Stake
        </h3>
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