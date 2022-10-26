<template>
   <button>
      <slot />
   </button>
</template>

<style lang="scss" scoped>
button {
   @apply bg-accent-600 transition-colors text-white;
   @apply absolute right-5 top-5;
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
