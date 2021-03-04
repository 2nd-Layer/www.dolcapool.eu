<template>
  <header>
    <NavBarClone />
    <NavBarStatic />
  </header>
</template>

<script>
import NavBarClone from "~/components/Navigation/NavBarClone"
import NavBarStatic from "~/components/Navigation/NavBarStatic"

export default {
  name: "App",

  components: { NavBarClone, NavBarStatic }
}
</script>
