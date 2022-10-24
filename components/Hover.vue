<template>
   <div @mouseenter="hovered = true" @mouseleave="hovered = false">
      <slot :hovered="hovered" />
   </div>
</template>

<script lang="ts" setup>
const hovered = ref(false)
</script>
