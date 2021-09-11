<template>
  <div class="bg-white shadow sm:rounded-lg mt-5">
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
          <i>This calculator does not include compounding rates. For example, if
            you were to reinvest your reflections into Nobility, these amount
            would increase.</i>
        </p>
      </div>
      <form class="mt-5 sm:flex flex-col">
        <dl class="grid grid-cols-1 sm:grid-cols-2">
          <div class="w-full sm:max-w-xs">
            Tokens Held:
            <label for="email" class="sr-only">tokens</label>
            <input v-model="tokens" type="text" name="tokens" id="email" class=" shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>

          <div class="w-full sm:max-w-xs">
            24hr Volume:
            <label for="email" class="sr-only">volume</label>
            <input v-model="volume" type="text" name="volume" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </dl>
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
          <div
            v-for="item in stats"
            :key="item.name"
            class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
          >
            <dt class="text-sm font-medium text-gray-500 truncate">
              {{ item.name }}
            </dt>
            <dd class="mt-1 text-xl font-semibold text-gray-900">
              {{ item.stat }}
            </dd>
          </div>
        </dl>
      </form>
    </div>
  </div>
</template>
<script>
const stats = [
  { name: "Daily", stat: "this.daily" },
  { name: "Weekly", stat: "this.weekly" },
  { name: "Monthly", stat: "this.monthly" },
  { name: "Yearly", stat: "this.yearly" },
];
export default {
  data() {
    return {
      tokens: 200000,
      volume: this.current24HourVolume
    }
  },
  computed: {
    daily() {
      return (this.$store.getters.volume24hUSD * .07) * (this.tokens / this.$store.getters.supply)
    },
    weekly() {
      return this.daily * 7
    },
    monthly() {
      return this.weekly * 52 / 12
    },
    yearly() {
      return this.monthly * 12
    },
    current24HourVolume() {
      return this.$store.getters.volume24hUSD;
    }
  },
  setup() {
    return {
      stats,
    };
  },
};
</script>
