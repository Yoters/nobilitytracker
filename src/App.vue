<template>
<div class="bg-gray-400">
  <Navbar />
  <div class="body mx-auto">
    <Stats/>
    <ReflectionsCalculator/>
  </div>
  <div>
    <p></p>
  </div>
</div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Stats from './components/Stats.vue'
import ReflectionsCalculator from './components/ReflectionsCalculator.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Stats,
    ReflectionsCalculator,
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
