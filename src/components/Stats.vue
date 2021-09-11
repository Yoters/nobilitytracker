<template>
  <div class="mt-9">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Nobility Stats:
    </h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
      <div v-for="item in stats" :key="item.name" class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <dt class="text-sm font-medium text-gray-500 truncate">
          {{ item.name }}
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          {{ item.stat }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
const stats = [
  { name: 'Current Price', stat: '$0.00968' },
  { name: 'Market Cap', stat: '$69.69M' },
  { name: '24hr Volume', stat: '$500,000' },
  { name: '24hr Change', stat: '24.57%' },
]

export default {
  computed: {
    
  },
  setup() {
    return {
      stats,
    }
  },
}
</script>