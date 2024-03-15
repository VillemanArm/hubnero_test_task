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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
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