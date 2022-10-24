<template>
   <span class="pill">
      <InlineIcon>
         <slot name="icon" />
      </InlineIcon>
      <span class="text">
         <slot />
      </span>
   </span>
</template>

<style scoped>
.pill {
   @apply py-1 px-2 rounded-lg mx-1;
   @apply bg-stone-400;
}

.text {
   @apply pl-1;
}

.dark-mode .pill {
   @apply bg-slate-900;
}
</style>
