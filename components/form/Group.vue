<template>
   <div class="my-2 grid gap-1">
      <label class="text-start" v-if="label">{{ label }}</label>
      <slot />
   </div>
</template>

<script lang="ts" setup>
defineProps<{
   label?: string
}>()
</script>
