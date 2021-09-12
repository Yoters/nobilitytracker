<template>
  <div class="bg-white shadow sm:rounded-lg mt-5">
    <VolumeModal ref="volumemodal" />
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Reflections Calculator
      </h3>
      <div class="mt-2 max-w-xl text-sm text-gray-500">
        <p>
          This calculator can help you to determine how much you will make in
          BUSD reflections from holding Nobility.
        </p>
        <p>
          <b>**Please Remember** You <u>MUST</u> hold 200k tokens or more to receive reflections!</b>
        </p>
        <br>
        <p>
          <i>This calculator does not include compounding rates. For example, if
            you were to reinvest your reflections into Nobility, these amount
            would increase.</i>
        </p>
        <p>
          <i>All predictions made by this calculator are just that; purely predictions. Always do your own research.</i>
        </p>
      </div>
      <form class="mt-5 sm:flex flex-col">
        <dl class="grid grid-cols-1 sm:grid-cols-2">
          <div class="w-full sm:max-w-xs mt-4">
            <div class="flex">
            Tokens Held:
            <div v-if="tokens < 200000" class="ml-4 font-semibold text-red-500">Tokens must be over 200k!</div>
            </div>
            <label for="number" class="sr-only">tokens</label>
            <input v-model="tokensUnformated" type="text" name="tokens" id="tokens" class=" shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm bg-purple-200 border-gray-300 rounded-md p-1"/>
          </div>

          <div class="w-full sm:max-w-xs mt-4">
            <div class="flex">
            <svg class="mr-1 cursor-pointer" style="width:24px;height:24px" viewBox="0 0 24 24" @click.prevent="toggleModal">
              <path fill="currentColor" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
            24hr Volume:
            </div>
            <label for="number" class="sr-only">volume</label>
            <input v-model="volumeUnformated" type="text" name="volume" id="volume" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 bg-purple-200 rounded-md p-1"/>
          </div>
        </dl>
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <ReflectionsCalMetric :name="'Total Price:'" :stat="'$' + this.yourPrice" />
          <ReflectionsCalMetric :name="'Daily'" :stat="'$' + this.daily" />
          <ReflectionsCalMetric :name="'Weekly'" :stat="'$' + this.weekly" />
          <ReflectionsCalMetric :name="'Monthly'" :stat="'$' + this.monthly" />
          <ReflectionsCalMetric :name="'Yearly'" :stat="'$' + this.yearly" />
          <ReflectionsCalMetric :name="'5 Years'" :stat="'$' + this.fiveyear" />
        </dl>
      </form>
    </div>
  </div>
</template>
<script>
import ReflectionsCalMetric from './internals/ReflectionsCalMetric.vue'
import VolumeModal from '../components/VolumeModal.vue'
export default {
  components: {
    ReflectionsCalMetric,
    VolumeModal
  },
  data() {
    return {
      tokens: 200000,
      volume: 0,
      volumeUnformated: "",
      tokensUnformated: "200,000"
    }
  },
  watch: {
    volumeUnformated(newValue) {
      const result = Number(this.getNumber(newValue));
      this.volumeUnformated = (result == 0 ? "": result.toLocaleString())
      this.volume = result
    },
    tokensUnformated(newValue) {
      const result = Number(this.getNumber(newValue));
      this.tokensUnformated = (result == 0 ? "": result.toLocaleString())
      this.tokens = result
    },
    hasDataLoaded(newValue) {
      if(newValue) {
        this.volumeUnformated = this.current24HourVolume.toFixed(0).toString()
      }
    }
  },
  methods: {
    toggleModal() {
      this.$refs.volumemodal.open = true
    },
    getNumber(number) {
      // https://codepen.io/tsunet111/pen/GbpwZa
      const arr = number.split('');
      let out = new Array();
      for(let cnt=0;cnt<arr.length;cnt++){
        if(isNaN(arr[cnt])==false){
          out.push(arr[cnt]);
        }
      }

      return out.join('')
    }
  },
  computed: {
    daily() {
      if(this.tokens < 200000) {
        return 0
      } else {
        return ((this.volume * .07) * (this.tokens / this.$store.getters.supply)).toFixed(2)
      }
    },
    weekly() {
      return (this.daily * 7).toFixed(2)
    },
    monthly() {
      return (this.weekly * 52 / 12).toFixed(2)
    },
    yearly() {
      return (this.monthly * 12).toFixed(2)
    },
    fiveyear() {
      return (this.monthly * 60).toFixed(2)
    },
    yourPrice() {
      return (this.$store.getters.price * this.tokens).toFixed(2)
    },
    current24HourVolume() {
      return this.$store.getters.volume24hUSD
    },
    hasDataLoaded() {
      return this.$store.getters.dataLoaded
    }
  },
};
</script>
