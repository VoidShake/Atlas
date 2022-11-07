<template>
   <div class="list">
      <slot />
   </div>
</template>

<style scoped>
.list {
   @apply gap-3 grid mx-auto;
   grid-template-columns: 1fr;
}

@media (min-width: 80rem) {
   .list {
      max-width: calc(80rem + theme(spacing.3));
      grid-template-columns: repeat(auto-fit, 40rem);
   }
}

@media (min-width: 120rem) {
   .list {
      max-width: calc(120rem + theme(spacing.6));
   }
}
</style>
