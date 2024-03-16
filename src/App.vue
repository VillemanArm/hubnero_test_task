<script>
// import Navbar from "@/components/Navbar.vue"

  export default  {
    // components: {Navbar},
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
  <div id="app">
    <aside>
      {{ link }}
      {{ this.$store.state.asideLink }}
      {{ this.$store.state.team.link }}
    </aside>
    <div class="main">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view/>
    </div>

    </div>
</template>



<style>

</style>

<style lang='sass'>
  @import './assets/main.sass'

</style>
<!-- <script>

export default  {
  components: {},
  props: {
    propsTemplate: {
      type: Function,
      required: true,
    },
    },
  data() {
    return {
    
    }
  },
  methods: {

  },
}
</script>

<template>

</template>

<style scoped lang='sass'>
  @import '../assets/constants.sass'

</style> -->