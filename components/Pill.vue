<template>
   <span class="pill">
      <span class="icon">
         <slot name="icon" />
      </span>
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

.icon:deep(svg) {
   @apply inline-block;
   align-self: start;
   height: 1em;
   margin-top: -0.2em;
}

.dark-mode .pill {
   @apply bg-slate-900;
}
</style>