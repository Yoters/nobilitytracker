<template>
  <div class="flex flex-col items-center">
      <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 max-w-xs w-full">
      <dt class="text-sm font-medium text-gray-500 truncate">
        {{ name }}
      </dt>
      <dd 
        class="mt-1 text-3xl font-semibold text-grey-900" 
        :class="{ 'text-red-600': colored && !green, 'text-green-600': colored && green }">
        {{ value }}{{ suffix }}
      </dd>
    </div>
  </div>
</template>
<script>
  export default {
    props:["name", "value", "colored", "suffix"],
    computed: {
      green() {
        return (this.value >= 0 ? true:false)
      }
    }
  }
</script>