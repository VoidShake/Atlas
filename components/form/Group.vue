<template>
   <div class="my-2 grid gap-1">
      <label v-if="label" class="text-start">{{ label }}</label>
      <slot />
   </div>
</template>

<script lang="ts" setup>
defineProps<{
   label?: string
}>()
</script>
