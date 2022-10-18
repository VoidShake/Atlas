<template>
   <div id="meter">
      <div id="filled" :style="{ width: `${current / total * 100}%` }" />
   </div>
</template>

<script lang="ts" setup>
defineProps<{
   total: number
   current: number
}>()
</script>

<style lang="scss" scoped>
#meter {
   @apply bg-stone-900 rounded-full w-32 h-3;

   #filled {
      @apply bg-purple-500 rounded-full h-3 min-w-3 max-w-full transition-[width];
   }
}

.dark-mode #meter {
   @apply bg-slate-900;
}
</style>