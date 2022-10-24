<template>
   <span class="icon">
      <slot />
   </span>
</template>

<style scoped>
.icon:deep(svg) {
   @apply inline-block;
   align-self: start;
   height: 1em;
   margin-top: -0.2em;
}
</style>
