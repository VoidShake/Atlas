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
   @apply bg-solid-600;
}

.text {
   @apply pl-1;
}

.dark-meode .pill {
   @apply bg-solid-dark-900;
}
</style>
