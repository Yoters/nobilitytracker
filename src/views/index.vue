<template>
<div class="min-h-full">
  <div class="body mx-auto">
    <Stats/>
    <ReflectionsCalculator/>
    <ExpectedReflections/>
  </div>
</div>
</template>
<script>
import Stats from '../components/Stats.vue'
import ReflectionsCalculator from '../components/ReflectionsCalculator.vue'
import ExpectedReflections from '../components/ExpectedReflections.vue'

export default {
  components: {
    Stats,
    ReflectionsCalculator,
    ExpectedReflections
  }
}
</script>
