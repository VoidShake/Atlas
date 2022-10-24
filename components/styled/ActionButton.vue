<template>
   <button>
      <slot />
   </button>
</template>

<style lang="scss" scoped>
button {
   @apply bg-purple-700 transition-colors;
   @apply absolute right-5 top-5;
   @apply rounded-full grid justify-center items-center h-16 w-16 shadow-lg;

   &:hover {
      @apply bg-purple-600;
   }

   &:deep(svg) {
      @apply text-2xl;
      height: 1em;
   }
}

.dark-mode button {
   @apply shadow-slate-900;
}
</style>
