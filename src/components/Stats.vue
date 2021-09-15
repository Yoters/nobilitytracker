<template>
  <div class="mt-9">
    <StatsModal ref="statsmodal" />
    <lBankModal ref="lBankModal" />
    <PcsModal ref="PcsModal" />
    <div class="flex justify-center lg:justify-start">
      <h3 class="text-2xl leading-6 font-medium text-gray-900 dark:text-gray-300">
        Nobility Stats 
      </h3>
      <svg class="ml-1 cursor-pointer" style="width:24px;height:24px" viewBox="0 0 24 24" @click.prevent="toggleModal">
        <path fill="currentColor" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </svg>
    </div>

    <hr class="mt-6">
    <div class="flex justify-center lg:justify-start mt-2">
      <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">Pancake Swap</h3>
      <svg class="ml-1 cursor-pointer" style="width:24px;height:24px" viewBox="0 0 24 24" @click.prevent="togglePcsModal">
        <path fill="currentColor" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </svg>
      <a href="https://pancakeswap.finance/swap" target="_blank">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="ml-1">
          <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
        </svg>
      </a>
    </div>
    <dl class="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 mx-auto">
      <Stat v-bind:name="'Current Price'" v-bind:value="'$' + this.price" />
      <Stat v-bind:name="'Market Cap'" v-bind:value="'$' + this.marketcap + 'M'" />
      <Stat v-bind:name="'24hr Volume'" v-bind:value="'$' + this.volume24hUSD" />
      <Stat v-bind:name="'24hr Change'" v-bind:value="this.priceChange24h" v-bind:colored="true" v-bind:suffix="'%'" />
      <Stat v-bind:name="'Holders'" v-bind:value="'' + this.holders" />
      <Stat v-bind:name="'Circulating Supply'" v-bind:value="'' + this.supply + 'B'" />
    </dl>
    <hr class="mt-6">
    <div class="flex justify-center lg:justify-start mt-2">
      <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">LBank</h3>
      <svg class="ml-1 cursor-pointer" style="width:24px;height:24px" viewBox="0 0 24 24" @click.prevent="togglelBankModal">
        <path fill="currentColor" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </svg>
      <a href="https://www.lbank.info/exchange/nbl/usdt" target="_blank">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="ml-1">
          <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
        </svg>
      </a>
    </div>
    <dl class="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 mx-auto">
      <Stat v-bind:name="'Price'" v-bind:value="'$' + this.lBankPrice + ''" />
      <Stat v-bind:name="'Volume'" v-bind:value="'$' + this.lBank + ''" />
      <Stat v-bind:name="'24hr Change'" v-bind:value="this.lBankChange" v-bind:colored="true" v-bind:suffix="'%'" />
    </dl>
    <hr class="mt-6">
  </div>
</template>

<script>
import Stat from '../components/internals/Stat.vue'
import StatsModal from '../components/StatsModal.vue'
import lBankModal from '../components/lBankModal.vue'
import PcsModal from '../components/PcsModal.vue'

export default {
  data() {
    return{
      modal: false
    }
  },
  components: {
    Stat,
    StatsModal,
    lBankModal,
    PcsModal,
  },
  methods: {
    toggleModal() {
      this.$refs.statsmodal.open = true
    },
    togglelBankModal() {
      this.$refs.lBankModal.open = true
    },
    togglePcsModal() {
      this.$refs.PcsModal.open = true
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
      return num.toLocaleString()
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
    lBankPrice() {
      var price = _.get(this.$store.getters.lBank, 'data[0].ticker.latest')
      return price
    },
    lBankChange() {
      return _.get(this.$store.getters.lBank, 'data[0].ticker.change')
    },
    lBank() {
      var vol = _.get(this.$store.getters.lBank, 'data[0].ticker.vol')
      return (vol * this.lBankPrice).toFixed(2)
    },
  },
}
var _ = require('lodash');
</script>