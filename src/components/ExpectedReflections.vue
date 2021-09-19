<template>
    <div class="bg-white dark:bg-gray-600 shadow sm:rounded-lg mt-6">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-500">
          Expected Reflections
        </h3>
        <div>
          <div class="w-full sm:max-w-xs mt-4">
            <div class="flex">
            Address:
            <div v-if="tokens < 200000" class="ml-6 font-semibold text-red-500">Tokens must be over 200k!</div>
            </div>
            <label for="number" class="sr-only">tokens</label>
            <input v-model="address" placeholder="0x968437732br327r32rjg8438577243h787" type="text" class="pl-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm bg-purple-200 border-gray-300 dark:text-gray-900 rounded-md p-1"/>
          </div>
          <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 mx-auto w-full">
            <ReflectionsCalMetric v-bind:name="'Already Recieved'" v-bind:stat="'$' + this.totalRecieved + ''" />
            <ReflectionsCalMetric v-bind:name="'Total Due'" v-bind:stat="'$' + this.totalDue + ''" />
            <ReflectionsCalMetric v-bind:name="'Total'" v-bind:stat="'$' + this.total + ''" />
          </div>
          <button class="px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-500 rounded-lg mt-8" @click.prevent="getResult">Query</button>
        </div>
      </div>
    </div>
</template>
<script>
import Web3 from "web3";
import Config from '../../config.json'

import ReflectionsCalMetric from '../components/internals/ReflectionsCalMetric.vue'

export default {
  components: {
    ReflectionsCalMetric
  },
  data() {
    return {
      address: "",
      totalRecieved: 0,
      totalDue: 0,
      total: 0
    }
  },
  methods: {
    async getResult() {
      const web3 = new Web3("https://bsc-dataseed.binance.org/");
      const contract = new web3.eth.Contract(Config.abi, Config.token);
      contract.methods.getAccountDividendsInfo(this.address).call().then(res => {
        this.total = this.toUsd(res[4]).toFixed(2) 
        this.totalDue = this.toUsd(res[3]).toFixed(2) 
        this.totalRecieved = (this.total != this.totalDue ? (this.total - this.totalDue) : 0).toFixed(2) 
        
      })
    },
    toUsd(value) {
      return (value / 1000000000000000000)
    }
  }
}
</script>