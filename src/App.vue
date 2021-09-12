<template>
<div class="bg-gray-400 dark:bg-gray-900 min-h-full dark:text-gray-200">
  <Navbar />
  <router-view />
  <Footer/>
</div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  
  mounted() {
    this.$store.dispatch("updateStats");
    setInterval(() => {
      this.$store.dispatch("updateStats");
    },15000)
  }
}

</script>

<style>
.body {
  max-width: 800px;
}
</style>
