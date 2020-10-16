<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-vcentered">
        <!-- Landing page Title -->
        <div class="column is-6 landing-caption">
          <h1 class="title is-1 is-light is-semibold is-spaced main-title">
            {{ $t("homepageWelcome") }}
          </h1>
          <h2 class="subtitle is-6 is-light is-thin">
            <strong>{{ $t("homepageText1") }}</strong>
            {{ $t("homepageText2") }}
            <nuxt-link :to="localePath('/about-cardano/')">
              {{ $t("homepageText3") }}
            </nuxt-link>
            {{ $t("homepageText4") }}
          </h2>
          <!-- CTA -->
          <p>
            <nuxt-link
              :to="localePath('/begin-staking-now/')"
              class="button k-button k-primary raised has-gradient is-fat is-bold"
            >
              <span class="text">{{ $t("getStarted") }}</span>
              <span class="front-gradient"></span>
            </nuxt-link>
          </p>
        </div>
        <!-- Hero image -->
        <div class="column is-6">
          <div class="video-wrapper">
            <div class="video-container">
              <div class="video-button levitate">
                <img :src="playButton" alt="Play Button" />
              </div>
              <h2 class="text-center">
                {{ $t("introComingSoon") }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "landing",
  data() {
    return {
      playButton: require("@/assets/images/icons/play.svg"),
    }
  },
}
</script>
