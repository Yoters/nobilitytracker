<template>
<div class="bg-gray-400 min-h-full">
  <Navbar />
  <div class="body mx-auto">
    <Stats/>
    <ReflectionsCalculator/>
    <StatsModal/>
  </div>
  <Footer/>
</div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Stats from './components/Stats.vue'
import ReflectionsCalculator from './components/ReflectionsCalculator.vue'
import Footer from './components/Footer.vue'
import StatsModal from './components/StatsModal.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Stats,
    ReflectionsCalculator,
    Footer,
    StatsModal,
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
