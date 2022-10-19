<template>
   <button>
      <slot />
   </button>
</template>

<style lang="scss" scoped>
button {
   @apply py-2 px-3;
   @apply rounded;
   @apply transition;
}

.dark-mode button {
   @apply bg-slate-500 ring-purple-500 ring-0;

   &:hover {
      @apply bg-purple-800 ring-2;
   }
}
</style>
