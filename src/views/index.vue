<template>
<div class="min-h-full">
  <div class="body mx-auto">
    <Stats/>
    <ReflectionsCalculator/>
  </div>
</div>
</template>
<script>
import Stats from '../components/Stats.vue'
import ReflectionsCalculator from '../components/ReflectionsCalculator.vue'

export default {
  components: {
    Stats,
    ReflectionsCalculator,
  }
}
</script>
