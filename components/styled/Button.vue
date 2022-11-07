<template>
   <button>
      <slot />
   </button>
</template>

<style lang="scss" scoped>
button {
   @apply py-2 px-3;
   @apply rounded select-none;
   @apply transition ring-0;
   @apply bg-solid-600 ring-accent-400;

   &:hover {
      @apply ring-2;
      @apply bg-accent-600 text-white;
   }

   &:disabled {
      @apply bg-solid-700 opacity-75 ring-0 cursor-not-allowed;
   }
}
</style>
