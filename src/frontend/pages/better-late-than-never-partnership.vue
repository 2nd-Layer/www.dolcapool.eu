<template>
  <div class="hero-body">
    <div class="columns has-text-centered">
      <div class="column is-6 is-offset-3">
        <h2 class="subtitle is-4 is-light is-thin">
          Better Late Than Never is now part of DOLCA
        </h2>
        <p class="content has-text-left">
          <b>Better Late Than Never</b> (tickers <b>BLTNA</b> and <b>BLTNB</b>)
          was a Cardano Shelley Stake Pool on Cardano Incentivized Testnet, as
          one of the first 10 registered stakepools, our experience with
          incentivized testnet was great for both ourselves and our delegates.
          We've tested many
          <a href="https://github.com/input-output-hk/jormungandr">
            Jormungandr
          </a>
          features, discovered and fixed several bugs and helped plenty of pool
          operators get started.
        </p>
        <p class="content has-text-left">
          However, we have decided that for the Cardano Shelley mainnet, it will
          be beneficial to join forces with other operators to provide even
          better service to our delegates, thus we have chosen
          <a
            href="https://pooltool.io/pool/550f5dc96814537404c7544175d348262699e448d74005dfa26540d3/epochs"
          >
            DOLCA stakepool
          </a>
          as our partner for the mainnet. We work closely with <b>DOLCA</b> pool
          operator, we engage in testing, provide supporting infrastructure and
          help with marketing efforts.
        </p>
        <p class="content has-text-left">
          However, we have decided that for the Cardano Shelley mainnet, it will
          be beneficial to join forces with other operators to provide even
          better service to our delegates, thus we have chosen DOLCA stakepool
          as our partner for the mainnet. We work closely with DOLCA pool
          operator, we engage in testing, provide supporting infrastructure and
          help with marketing efforts.
        </p>
        <h2 class="subtitle is-5 is-light is-thin">
          Why do we partner with DOLCA?
        </h2>
        <p class="content has-text-left">
          <a
            href="https://pooltool.io/pool/550f5dc96814537404c7544175d348262699e448d74005dfa26540d3/epochs"
          >
            DOLCA stakepool
          </a>
          is operated by an operator who lives in the same city as ourselves, we
          do have a close relationship with the operator and this partnership
          frees up our capacity so we can invest our effort into more beneficial
          activities, such as highly experimental testing of Cardano software,
          bug discovery, troubleshooting and code contributions none of which
          would be possible if we would also have to operate primary
          block-producing infrastructure on the mainnet. For more details about
          this decision, please
          <a
            href="https://medium.com/@2ndlayer.eu/better-late-than-never-is-partnering-with-dolca-be511182754e?source=friends_link&sk=2ada1fe5c791ca594c3fdb4b8ee4d697"
          >
            see our press release
          </a>
        </p>
        <h2 class="subtitle is-5 is-light is-thin">Jormungandr Testnet</h2>
        <p class="content has-text-left">
          While we have joinded forces with DOLCA on the mainnet, we still
          operate separately on the Jormungandr testnet network, where we are
          the largest contributors, including coordination work thru
          <a href="https://t.me/CardanoITNv2StakePoolCommunity">
            Jormungandr Reboot Telegram channel
          </a>
        </p>
        <h2 class="subtitle is-5 is-light is-thin">
          About Better Late Than Never
        </h2>
        <p class="content has-text-left">
          <b>Better Late Than Never</b> stakepools on the testnet are still
          operated solely by
          <a href="https://www.2ndlayer.eu"> 2ⁿᵈ Layer </a>
          in partnership with our Infrastructure Provider
          <a href="https://www.perlur.cloud/"> PERLUR Group </a>
          and Internet Service Provider
          <a href="https://www.poda.cz/"> PODA </a>
        </p>
        <div class="container has-text-centered">
          <h2 class="subtitle">Project Partners</h2>
          <div class="columns">
            <div class="column">
              <h3 class="title is-6 is-marginless">Infrastructure Provider</h3>
              <figure class="image">
                <a href="https://www.perlur.cloud/">
                  <img style="height: 3rem" :src="PERLURLogoWhite" />
                </a>
              </figure>
            </div>
            <div class="column">
              <h3 class="title is-6 is-marginless">
                Internet Service Provider
              </h3>
              <figure class="image">
                <a href="https://www.poda.cz/">
                  <img style="height: 3rem" :src="PODALogoWhite" />
                </a>
              </figure>
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
      PERLURLogoWhite: require("@/assets/images/logos/partners/perlur-logo-white.svg"),
      PODALogoWhite: require("@/assets/images/logos/partners/poda-logo-white.svg"),
    }
  },
}
</script>
