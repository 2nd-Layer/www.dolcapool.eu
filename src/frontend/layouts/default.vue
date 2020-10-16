<template>
  <div class="page-wrapper">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "#5507fc",
    }
  },
  head() {
    return {
      title: "DOLCA Stake Pool",
    }
  },
}
</script>
