<template>
  <div class="mt-9">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Nobility Stats:
    </h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
      <Stat v-bind:name="'Current Price'" v-bind:value="'$' + this.price" />
      <Stat v-bind:name="'Market Cap'" v-bind:value="'$' + this.marketcap + 'M'" />
      <Stat v-bind:name="'24hr Volume'" v-bind:value="'$' + this.volume24hUSD" />
      <Stat v-bind:name="'24hr Change'" v-bind:value="this.priceChange24h" v-bind:colored="true" v-bind:suffix="'%'" />
    </dl>
  </div>
</template>

<script>
import Stat from '../components/internals/Stat.vue'

export default {
  components: {
    Stat
  },
  computed: {
    price() {
      return this.$store.getters.price.toFixed(6)
    },
    priceChange24h() {
      var num = this.$store.getters.priceChange24h;
      return num.toFixed(2)
    },
    volume24hUSD() {
      var num =this.$store.getters.volume24hUSD
      return num.toFixed()
    },
    marketcap() {
      var num = this.$store.getters.marketcap
      return num.toFixed(2)
    },
  },
}
</script>