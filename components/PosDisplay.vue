<template>
   <Pill>
      {{ formatPos(pos) }}
   </Pill>
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
