<script>
import NavPannel from "@/components/NavPannel.vue"

  export default  {
    components: {NavPannel},
      data() {
        return {
          link: 'link'
        }
      },
    // mounted() {
    //     this.$router.push('/works/blog_vue/')
    // }
}
</script>

<template>
  <div id="app" class="app">
    <NavPannel >
    </NavPannel>

    <header class="header">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </header>
    <router-view class="router"/>


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
