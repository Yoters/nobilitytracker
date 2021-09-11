<template>
<div class="bg-gray-400 min-h-screen">
  <Navbar />
  <div class="body mx-auto">
    <Stats/>
    <ReflectionsCalculator/>
    <div class="m-9">
    </div>
  </div>
    <Footer/>
  <div>
    <p></p>
  </div>
</div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Stats from './components/Stats.vue'
import ReflectionsCalculator from './components/ReflectionsCalculator.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Stats,
    ReflectionsCalculator,
    Footer,
  },
  
  mounted() {
    this.$store.dispatch("updateStats");
    setInterval(() => {
      this.$store.dispatch("updateStats");
    },30000)
  }
}

</script>

<style>
.body {
  max-width: 800px;

}
</style>
