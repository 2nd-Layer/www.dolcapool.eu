<template>
  <div class="hero-body">
    <div class="columns has-text-centered">
      <div class="column is-narrow is-offset-3">
        <div class="token-image mb-40">
          <img :src="cardanoLogo" alt="Cardano Logo">
        </div>
      </div>
      <div class="column">
        <h2 class="subtitle has-text-left is-3 is-light is-thin pl-2">
          About Cardano
        </h2>
        <p class="content has-text-left pl-2">
          Cardano is a 3<sup>rd</sup> generation blockchain, project started in 2015 and debuted publicly in late 2017. Cardano uses proof-of-stake consensus and relies heavily on peer-reviewed science. Cardano uses unique, provably secure Proof-of-stake consensus algorithm from the Ouroboros family.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardanoLogo: require('@/assets/images/coins/Cardano-coin-ADA-symbol.svg')
    }
  }
}
</script>
