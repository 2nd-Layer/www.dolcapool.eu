<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-multiline is-1">
        <div class="column is-7">
          <figure class="image">
            <img :src="dolcaPoolTopology" style="filter: invert(100%);" />
          </figure>
        </div>
        <div class="column is-5">
          <h1 class="title is-2 is-light is-semibold is-spaced main-title">Our Technology</h1>
          <p class="content mb-1">
            At <strong>DOLCA Stake Pool</strong> we leverage <nuxt-link to="/dolca-stake-pool-team/">our team, and our expert knowledge</nuxt-link> to design and support best-in-class architecture for our <strong>Stake Pool</strong>, not only to maximize delegates returns, but to also ensure state-of-the-art security and maximize contributions to <nuxt-link to="/about-cardano">Cardano project</nuxt-link>.
          </p>
          <p class="content pt-2 mb-1">
            While the Cardano Ouroboros Proof-of-Stake protocol is designed to keep user funds secure during delegation, and the funds of <nuxt-link to="/dolca-stake-pool-team/">the pool owners</nuxt-link> are reasonably secure if proper security practices are applied. Overall <strong>network security</strong> and <strong>network stability</strong> relies on the ability of <strong>pool operators</strong> to keep their <strong>relays</strong> and <strong>block producers</strong> secure from an attacker.
          </p>
          <p class="content pt-2">
            At <strong>DOLCA</strong> we took our know-how of enterprise application infrastructure architecture and deployed a 4 tier network topology. We have fully isolated <strong>block producer</strong>, two primary types of <strong>relay nodes</strong>, two production and one staging relay nodes. In addition, our <strong>staging relay node</strong> is also connected to <strong>testing relay node</strong>.
          </p>
        </div>
        <div class="column">
          <h2 class="subtitle is-5 is-light is-thin mb-1">Testing Relay Node</h2>
          <p class="content pt-2 mb-1">
            Having experienced Network Engineeers, DevOps, IT Governance and Haskell developers in our team enables us to use Continuous Integration pipeline to test early <code>cardano-node</code> releases in isolated, and safe environment, on the several testnet networks and early on production network as a 4<sup>th</sup> tier relay server. Software we deploy is thus tested several times before being deployed to <strong>staging</strong> and <strong>production</strong> environments.
          </p>
          <p class="content pt-2 mb-1">
            This level of technical sophistication and automation does not only benefit us and our delegates, but also all <strong>Cardano developers</strong> as it enables us to discover and report any issues with significant notice in order to ensure that the <strong>production releases</strong> used by majority of operators are rock solid when released for general use.
          </p>
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
      dolcaPoolTopology: require("@/assets/images/schemas/dolca-pool-topology.svg"),
    }
  },
}
</script>
