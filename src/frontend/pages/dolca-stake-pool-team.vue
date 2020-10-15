<template>
  <div class="container">
    <section class="hero is-medium">
      <div class="hero-body pl-0">
        <div class="container">
          <h1 class="title main-title is-size-2">
            Our team
          </h1>
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
            <img class="is-rounded" :src="mark_stopka">
          </figure>
          <h4 class="title is-2 my-6 has-text-centered">Tomas Drastich</h4>
          <p class="is-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <span class="is-block has-text-centered has-text-weight-light my-6">
            Connect with Tomas
          </span>
          <p class="has-text-centered">
            <a href="https://www.github.com" target="_blank" class="is-inline-block mx-4">
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-github"></i>
                </span>
              </span>
            </a>
            <a href="https://www.twitter.com" target="_blank" class="is-inline-block mx-4">
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-twitter"></i>
                </span>
              </span>
            </a>
          </p>
        </div>
        <div class="column">
          <figure class="image is-square m-3">
            <img class="is-rounded" :src="mark_stopka">
          </figure>
          <h4 class="title is-2 my-6 has-text-centered">Mark Stopka</h4>
          <p class="is-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <span class="is-block has-text-centered has-text-weight-light my-6">
            Connect with Mark
          </span>
          <p class="has-text-centered">
            <a href="https://www.github.com" target="_blank" class="is-inline-block mx-4">
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-github"></i>
                </span>
              </span>
            </a>
            <a href="https://www.twitter.com" target="_blank" class="is-inline-block mx-4">
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-twitter"></i>
                </span>
              </span>
            </a>
            <a href="https://www.linkedin.com" target="_blank" class="is-inline-block mx-4">
                <span class="icon is-large">
                  <span class="fa-stack fa-lg">
                    <i class="fab fa-3x fa-linkedin"></i>
                  </span>
                </span>
            </a>
          </p>
        </div>
        <div class="column">
          <figure class="image is-square m-3">
            <img class="is-rounded" :src="mark_stopka">
          </figure>
          <h4 class="title is-2 my-6 has-text-centered">Cody Butz</h4>
          <p class="is-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <span class="is-block has-text-centered has-text-weight-light my-6">
            Connect with Cody
          </span>
          <p class="has-text-centered">
            <a href="https://www.github.com" target="_blank" class="is-inline-block mx-4">
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-github"></i>
                </span>
              </span>
            </a>
            <a href="https://www.twitter.com" target="_blank" class="is-inline-block mx-4">
              <span class="icon is-large">
                <span class="fa-stack fa-lg">
                  <i class="fab fa-3x fa-twitter"></i>
                </span>
              </span>
            </a>
            <a href="https://www.linkedin.com" target="_blank" class="is-inline-block mx-4">
                <span class="icon is-large">
                  <span class="fa-stack fa-lg">
                    <i class="fab fa-3x fa-linkedin"></i>
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
      mark_stopka: require('@/assets/images/our_team/mark_stopka.png'),
    };
  }
}
</script>
