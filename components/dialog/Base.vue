<template>
   <div id="dialog">
      <H1 v-if="title">{{ title }}</H1>
      <slot />
   </div>
</template>

<script lang="ts" setup>

defineProps<{
   title: string
}>()
</script>

<style scoped>
#dialog {
   @apply p-8 rounded-lg bg-stone-800 text-center shadow-xl;
   position: absolute;
   z-index: 1001;
   top: 50%;
   left: 50%;
   translate: -50% -50%;
}

.dark-mode #dialog {
   @apply bg-slate-700;
}
</style>