<template>
  <div class="bg-white shadow sm:rounded-lg mt-5">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Reflections Calculator
      </h3>
      <div class="mt-2 max-w-xl text-sm text-gray-500">
        <p>
          This calculator can help you to determine how much you will make in BUSD reflections from holding Nobility.
        </p>
      </div>
      <form class="mt-5 sm:flex sm:items-center">
        <div class="w-full sm:max-w-xs p-2 pr-9">
            Tokens Held:
          <label for="email" class="sr-only">Tokens</label>
          <input type="text" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="200000" />
        </div>

        <div class="w-full sm:max-w-xs p-2 pl-9">
            24hr Volume:
          <label for="email" class="sr-only">Tokens</label>
          <input type="text" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="200000" />
        </div>

      </form>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
