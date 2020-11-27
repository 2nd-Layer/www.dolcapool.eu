<template>
  <div class="container">
    <section class="hero is-medium">
      <div class="hero-body pl-0">
        <div class="container">
          <h1 class="title main-title is-size-2">Our team</h1>
          <div class="divider"></div>
          <h2 class="subtitle is-light is-size-4">
            Meet our heros who are running the DOLCA Stake Pool on Cardano
          </h2>
        </div>
      </div>
    </section>
    <section class="section mb-6">
      <div class="columns">
        <div class="column is-one-third">
          <figure class="image is-square">
            <img class="is-rounded" :src="tomas_drastich" />
          </figure>
          <h4 class="title is-2 my-6 has-text-centered">Tomáš Drastich</h4>
          <p class="is-light">
            Tomáš has an Information Technology experience since 2003, when he
            established his own Wireless Internet Service Provider
            (<strong>WISP</strong>) during the early days of building the
            Internet infrastructure of Czech Republic. He lives, just like Mark,
            in the city of Ostrava, Czech Republic. In addition to his job as an
            Internet Service Provider, he also works in the Networking
            department of a major European Information Technology Company -
            <a href="https://www.tieto.com/">TietoEVRY</a>.
          </p>
          <span
            class="is-block has-text-centered has-text-weight-bold mt-5 mb-2"
          >
            Connect with Tomáš
          </span>
          <p class="has-text-centered">
            <a
              href="https://www.linkedin.com/in/tomáš-drastich-2b4a806b/"
              target="_blank"
              class="is-inline-block mx-4"
            >
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-linkedin"></i>
                </span>
              </span>
            </a>
            <a
              href="https://t.me/dolcapool"
              target="_blank"
              class="is-inline-block mx-4"
            >
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-telegram-plane"></i>
                </span>
              </span>
            </a>
          </p>
        </div>
        <div class="column">
          <figure class="image is-square m-3">
            <img class="is-rounded" :src="mark_stopka" />
          </figure>
          <h4 class="title is-2 my-6 has-text-centered">Mark Stopka</h4>
          <p class="is-light p-6">
            Mark has IT experience since about a year 2000, he is an contributor
            to open-source software since he was 15 years old and started
            working in Information Technology in 2009. His professional career
            gave him an opportunity to work for few major players in the
            industry such as <a href="https://www.tieto.com/">Tieto</a>,
            <a href="https://www.netapp.com/">NetApp</a>.
          </p>
          <p class="is-light pt-2">
            Later he took a role of an Indepentent Consultant in the areas of
            Data Storage, Business Continuity, Disaster Recovery and IT
            Governance as a whole. During the little free time he has, he enjoys
            spending time with his lovely Jack Russell named Jarvis and his
            friends, likes beer and thinks a lot about how Distributed Ledger
            Technology and Cryptocurrencies can lead to better, more fair future
            for all.
          </p>
          <span
            class="is-block has-text-centered has-text-weight-bold mt-5 mb-2"
          >
            Connect with Mark
          </span>
          <p class="has-text-centered">
            <a
              href="https://www.linkedin.com/in/markstopka/"
              target="_blank"
              class="is-inline-block mx-4"
            >
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-linkedin"></i>
                </span>
              </span>
            </a>
            <a
              href="https://github.com/mark-stopka/"
              target="_blank"
              class="is-inline-block mx-4"
            >
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-github"></i>
                </span>
              </span>
            </a>
            <a
              href="https://twitter.com/LiberalMark/"
              target="_blank"
              class="is-inline-block mx-4"
            >
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-twitter"></i>
                </span>
              </span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCp-grc_OkwssH4XcSU7Loyw/"
              target="_blank"
              class="is-inline-block mx-4"
            >
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-youtube"></i>
                </span>
              </span>
            </a>
          </p>
        </div>
        <div class="column">
          <figure class="image is-square m-3">
            <img class="is-rounded" :src="cody_butz" />
          </figure>
          <h4 class="title is-2 my-6 has-text-centered">Cody Butz</h4>
          <p class="is-light">
            Cody is an outgoing, enthusiastic web application developer who
            aspires to learn new technologies everyday. His love for Cardano
            grew in 2018 when watching Sebastien Guillemot's update videos on
            YouTube. When not busy at working on
            <nuxt-link to="/">DOLCA</nuxt-link>, Cody loves to go out boating,
            fishing, and having a great time with his beloved dog, family and
            friends.
          </p>
          <span
            class="is-block has-text-centered has-text-weight-bold mt-5 mb-2"
          >
            Connect with Cody
          </span>
          <p class="has-text-centered">
            <a
              href="https://www.linkedin.com/in/cody-butz-b4b16a37/"
              target="_blank"
              class="is-inline-block mx-4"
            >
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-linkedin"></i>
                </span>
              </span>
            </a>
            <a
              href="https://github.com/codybutz/"
              target="_blank"
              class="is-inline-block mx-4"
            >
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-github"></i>
                </span>
              </span>
            </a>
            <a
              href="https://twitter.com/codyjbutz/"
              target="_blank"
              class="is-inline-block mx-4"
            >
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-twitter"></i>
                </span>
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tomas_drastich: require("@/assets/images/our_team/tomas_drastich.png"),
      mark_stopka: require("@/assets/images/our_team/mark_stopka.png"),
      cody_butz: require("@/assets/images/our_team/cody_butz.png"),
    }
  },
}
</script>
