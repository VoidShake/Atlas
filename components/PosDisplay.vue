<template>
   <span class="py-1 px-3 bg-black/10 rounded-lg">
      {{ formatPos(pos) }}
   </span>
</template>

<script lang="ts" setup>
const pos = withDefaults(
   defineProps<{
      x: number
      y: number | null
      z: number
   }>(),
   {
      y: null,
   },
)
</script>
