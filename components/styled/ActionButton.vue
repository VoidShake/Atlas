<template>
   <Teleport to="#action-buttons">
      <button @click="$emit('click')">
         <slot />
      </button>
   </Teleport>
</template>

<script lang="ts" setup>
defineEmits<{
   (e: 'click'): void
}>()
</script>

<style lang="scss" scoped>
button {
   @apply bg-accent-600 transition-colors text-white;
   @apply rounded-full grid justify-center items-center h-16 w-16 shadow-lg shadow-[#0003];

   &:hover {
      @apply bg-accent-500;
   }

   &:deep(svg) {
      @apply text-2xl;
      height: 1em;
   }
}
</style>
