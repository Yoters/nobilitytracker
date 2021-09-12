<template>
  <div class="flex flex-col items-center">
      <div class="px-4 py-5 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden max-w-xs sm:p-6 w-full">
      <dt class="text-sm font-medium text-gray-500 truncate">
        {{ name }}
      </dt>
      <dd class="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-300">
        {{ stat }}
      </dd>
    </div>
  </div>
</template>
<script>

export default {
  props: ["name", "stat"]
}
</script>
