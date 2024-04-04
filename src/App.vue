<script>
import NavPanel from "@/components/NavPanel/NavPanel.vue"
import HeaderPanel from "@/components/HeaderPanel/HeaderPanel.vue"

export default {
  components: { NavPanel, HeaderPanel },
}
</script>

<template>
  <div id="app" class="app">
    <NavPanel />

    <HeaderPanel class="header" />

    <router-view class="router" />

  </div>
</template>

<style lang='scss'>
@import './assets/main.sass';

.app {
  width: 100vw;
  display: grid;
  grid-template-areas:
    "nav header"
    "nav router";
  grid-template-columns: 72rem 1fr;
  grid-template-rows: 76rem 1fr;

  border-radius: 16rem;
}

.nav {
  grid-area: nav;

  background-color: $block-background-color;
}

.header {
  grid-area: header;

  background-color: $block-background-color;
}

.router {
  grid-area: router;

}
</style>
