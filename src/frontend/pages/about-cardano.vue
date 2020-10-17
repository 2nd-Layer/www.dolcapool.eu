<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns has-text-left">
        <div class="column is-narrow">
          <div class="token-image mb-40">
            <img :src="cardanoLogo" alt="Cardano Logo" />
          </div>
        </div>
        <div class="column">
          <h2 class="subtitle is-3 is-light is-thin pl-2">About Cardano</h2>
          <p class="content pl-2">
            Cardano is a 3<sup>rd</sup> generation blockchain, project started
            in 2015 and debuted publicly in late 2017. Cardano uses
            Proof-of-Stake consensus and relies heavily on peer-reviewed
            science. Cardano uses unique, provably secure Proof-of-Stake
            consensus algorithm from the Ouroboros family. Native token enabling
            stakeholders to participate in consensus is <strong>ADA</strong>,
            with symbol <strong>₳</strong>.
          </p>
          <!-- CTA -->
          <p class="content buttons has-addons is-centered">
            <nuxt-link
              to="/begin-staking-now/"
              class="button k-button k-primary raised has-gradient is-fat is-bold"
            >
              <span class="text">Stake your <strong>₳</strong> now</span>
              <span class="front-gradient" />
            </nuxt-link>
          </p>
          <!-- CTA end -->
          <p>
            In addition similarly to Bitcoin, <strong>Cardano</strong> usses
            <strong>UTXO</strong> accounting model,
            <strong>Extended UTXO</strong> (<strong>eUTXO</strong> -
            <a
              href="https://iohk.io/en/research/library/papers/the-extended-utxo-model/"
            >
              pre-print paper - The Extended UTXO Model
            </a>
            [
            <a
              href="https://link.springer.com/chapter/10.1007/978-3-030-54455-3_37"
            >
              Springer Link
            </a>
            ]) specifically to enable <strong>Proof-of-Stake</strong> and
            formally verifiable <strong>Plutus Smart Contracts</strong>.
            Compared to <strong>Account based</strong> accounting model,
            <strong>eUTXO</strong> accounting model provides greater
            opportunities for scaling on both <strong>Layer 1</strong> and
            <strong>Layer 2</strong>.
          </p>
        </div>
      </div>
      <div class="columns has-text-left">
        <div class="column">
          <h3 class="subtitle is-4 is-light is-thin pr-2">
            About Ouroboros Proof-of-Stake
          </h3>
          <p class="content pl-2">
            Provably secure Proof-of-Stake consensus protocol Ouroboros was
            first introduced in the paper
            <a href="https://eprint.iacr.org/2016/889">
              Ouroboros: A Provably Secure Proof-of-Stake Blockchain Protocol
            </a>
            now simply referred to as <strong>Ouroboros Classic</strong>, since
            then, many iterations of Ouroboros protocol have been published
            improving different properties and making certain trade-offs...
            Other papers from the Ouroboros series include:
          </p>
          <div class="ml-2 mb-5">
            <div class="content">
              <ul>
                <li>
                  <a href="https://eprint.iacr.org/2017/573">
                    Ouroboros Praos: An adaptively-secure, semi-synchronous
                    proof-of-stake blockchain
                  </a>
                </li>
                <li>
                  <a href="https://eprint.iacr.org/2018/378">
                    Ouroboros Genesis: Composable Proof-of-Stake Blockchains
                    with Dynamic Availability
                  </a>
                </li>
                <li>
                  <a href="https://eprint.iacr.org/2018/1132">
                    Ouroboros Crypsinous: Privacy-Preserving Proof-of-Stake
                  </a>
                </li>
                <li>
                  <a href="https://eprint.iacr.org/2019/838">
                    Ouroboros Chronos: Permissionless Clock Synchronization via
                    Proof-of-Stake
                  </a>
                </li>
                <li>
                  <a href="https://eprint.iacr.org/2019/942">
                    Ouroboros Clepsydra: Ouroboros Praos in the Universally
                    Composable Relative Time Model
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p class="content pl-2">
            Current Cardano Shelley Mainnet operates using
            <a href="https://eprint.iacr.org/2017/573"> Ouroboros Praos </a>
            Proof-of-Stake consensus mechanism. Two major values influencing the
            network topology are
            <code>k</code>
            which controls the amount of stakepools the system should converge
            to, that is currently set to
            <strong>{{ kValue }}</strong>
            , based on Cardano Shelley Incentivized Testnet, this should bring
            effective amount of pools to <i>250</i> - <i>300</i>. Another such
            important parameter is <code>a0</code> which drives the influence of
            <strong>owners stake</strong> (also called
            <strong>pledge</strong> on rewards for himself and his delegates.
            With current setting of
            <code>a0</code>
            set to
            <strong>{{ a0Value }}</strong>
          </p>
          <!-- CTA -->
          <p>
            <nuxt-link
              to="/begin-staking-now/"
              class="button k-button k-primary raised has-gradient is-fat is-bold"
            >
              <span class="text">Begin Staking Now</span>
              <span class="front-gradient" />
            </nuxt-link>
          </p>
          <!-- CTA end -->
        </div>
        <div class="column is-narrow">
          <div class="token-image mb-40">
            <img :src="ouroborosImage" alt="Cardano Ouroboros Image" />
          </div>
        </div>
      </div>
      <div class="columns has-text-left">
        <div class="column is-narrow">
          <div class="token-image mb-40">
            <img :src="eUTXOImage" alt="Extended UTXO Image" />
          </div>
        </div>
        <div class="column is-offset-2">
          <h3 class="subtitle is-4 is-light is-thin pr-2">
            Extended UTXO Accounting Model
          </h3>
          <p class="content pl-2">
            As you may already know, <strong>Bitcoin</strong> uses UTXO or Unspent Transaction Output accoutning style, in contrast with <strong>Ethereum</strong> or <strong>Tezos</strong> which use account style accounting models.
          </p>
          <p class="content pl-2">
            As it often is, both accounting models offer some advantages and some disadvantages, major advantage of UTXO accounting model is that due to lack of global account state (accounts are emptied during transaction which enables the wallet node to purge it and save memory), on the other hand Account style accounting model is more suitable for smart-contract functionality. However Account style accounting model is also more difficult to scale due to the need to maintain global state of all accounts and their history.
          </p>
          <p class="content pl-2">
            For these reasons, <a href='https://www.iohk.io/'>Input Output Global</a> decided to invent a new model <a href='https://iohk.io/en/research/library/papers/the-extended-utxo-model/'>called Extended UTXO</a> which combines the benefits of both Unspent Transaction Outputs accounting and account style accounting. This unique accounting model enables <a href='#hydra'>Layer 2 scaling technology like later described Hydra channels</a>.
          </p>         
          <!-- CTA -->
          <p>
            <nuxt-link
              to="/begin-staking-now/"
              class="button k-button k-primary raised has-gradient is-fat is-bold"
            >
              <span class="text">Begin Staking Now</span>
              <span class="front-gradient" />
            </nuxt-link>
          </p>
          <!-- CTA end -->
        </div>
      </div>
      <div class="columns has-text-left">
        <div class="column">
          <h3 class="subtitle is-4 is-light is-thin pr-2">
            Marlowe - Domain Specific Language for financial contracts
          </h3>
          <p class="content pl-2" />
          <p class="content pl-2" />
          <!-- CTA -->
          <p>
            <nuxt-link
              to="/begin-staking-now/"
              class="button k-button k-primary raised has-gradient is-fat is-bold"
            >
              <span class="text">Begin Staking Now</span>
              <span class="front-gradient" />
            </nuxt-link>
          </p>
          <!-- CTA end -->
        </div>
        <div class="column is-narrow">
          <div class="token-image mb-40">
            <img :src="marloweImage" alt="Cardano Marlowe Logo" />
          </div>
        </div>
      </div>
      <div class="columns has-text-left">
        <div class="column is-narrow">
          <div class="token-image mb-40">
            <img :src="plutusImage" alt="Cardano Plutus Logo" />
          </div>
        </div>
        <div class="column is-offset-2">
          <h3 class="subtitle is-4 is-light is-thin pr-2">
            Plutus Smart Contracts
          </h3>
          <p class="content pl-2" />
          <p class="content pl-2" />
          <!-- CTA -->
          <p>
            <nuxt-link
              to='/begin-staking-now/'
              class='button k-button k-primary raised has-gradient is-fat is-bold'
            >
              <span class='text'>Begin Staking Now</span>
              <span class='front-gradient' />
            </nuxt-link>
          </p>
          <!-- CTA end -->
        </div>
      </div>
      <div class="columns has-text-left">
        <div class="column">
          <h3 class="subtitle is-4 is-light is-thin pr-2">
            <a name="hydra">
              Hydra 2<sup>nd</sup> Layer scaling for Extended UTXO
            </a>
          </h3>
          <p class="content pl-2" />
          <p class="content pl-2" />
          <!-- CTA -->
          <p>
            <nuxt-link
              to="/begin-staking-now/"
              class="button k-button k-primary raised has-gradient is-fat is-bold"
            >
              <span class="text">Begin Staking Now</span>
              <span class="front-gradient" />
            </nuxt-link>
          </p>
          <!-- CTA end -->
        </div>
        <div class="column is-narrow">
          <div class="token-image mb-40">
            <img :src="hydraImage" alt="Hydra Logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      protocol: null,
      cardanoLogo: require("@/assets/images/coins/Cardano-coin-ADA-symbol.svg"),
      ouroborosImage: require("@/assets/images/icons/ouroboros.svg"),
      eUTXOImage: require("@/assets/images/icons/ouroboros.svg"),
      marloweImage: require("@/assets/images/icons/marlowe.svg"),
      plutusImage: require("@/assets/images/icons/plutus.svg"),
      hydraImage: require("@/assets/images/icons/hydra.svg"),
    }
  },
  computed: {
    a0Value() {
      if (this.protocol !== null) return this.protocol.a0
      return "N/A"
    },
    kValue() {
      if (this.protocol !== null) return this.protocol.nOpt
      return "N/A"
    },
  },
  mounted() {
    axios.get("https://js.adapools.org/protocol.json").then((resp) => {
      if (resp.status === 200 && resp.data) {
        this.protocol = resp.data
      }
    })
  },
}
</script>
