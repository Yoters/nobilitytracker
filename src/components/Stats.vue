<template>
  <div class="mt-9">
    <StatsModal id="statsmodal" />
    <div class="flex">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Nobility Stats 
    </h3>
    
      <svg class="ml-1" style="width:24px;height:24px" viewBox="0 0 24 24" @click.prevent="toggleModal">
        <path fill="currentColor" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </svg>
    </div>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 mx-auto content-center">
      <Stat v-bind:name="'Current Price'" v-bind:value="'$' + this.price" />
      <Stat v-bind:name="'Market Cap'" v-bind:value="'$' + this.marketcap + 'M'" />
      <Stat v-bind:name="'24hr Volume'" v-bind:value="'$' + this.volume24hUSD" />
      
    </dl>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 mx-auto">
      <Stat class="max-w-xs" v-bind:name="'24hr Change'" v-bind:value="this.priceChange24h" v-bind:colored="true" v-bind:suffix="'%'" />
      <Stat class="max-w-xs" v-bind:name="'Holders'" v-bind:value="'' + this.holders" />
      <Stat class="max-w-xs" v-bind:name="'Circulating Supply'" v-bind:value="'' + this.supply + 'B'" />
    </dl>
  </div>
</template>

<script>
import Stat from '../components/internals/Stat.vue'
import StatsModal from '../components/StatsModal.vue'

export default {
  data() {
    return{
      modal: false
    }
  },
  components: {
    Stat,
    StatsModal,
  },
  methods: {
    toggleModal() {
      this.$refs.statsmodal.open = true
      // this.modal = !this.modal
    }
  },
  computed: {
    price() {
      return this.$store.getters.price.toFixed(6)
    },
    priceChange24h() {
      const num = this.$store.getters.priceChange24h * 100;
      return num.toFixed(2)
    },
    volume24hUSD() {
      const num =this.$store.getters.volume24hUSD
      return num.toFixed()
    },
    marketcap() {
      const num = this.$store.getters.marketcap
      return num.toFixed(2)
    },
    holders() {
      return this.$store.getters.holders
    },
    supply() {
      return (this.$store.getters.supply / 1000000000).toFixed(2)
    },
  },
}
</script>