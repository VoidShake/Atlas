<template>
   <button :class="`hover:bg-${color} text-${color}`">
      <InlineIcon>
         <slot />
      </InlineIcon>
   </button>
</template>

<script lang="ts" setup>
defineProps<{
   color: string
}>()
</script>