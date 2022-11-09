<template>
   <section class="panel">
      <slot />
   </section>
</template>

<style scope>
.panel {
   @apply bg-solid-700 py-2 px-3 rounded-lg transition-colors;
}

.panel:hover {
   @apply bg-solid-600;
}

.dark-mode .panel:hover {
   @apply bg-solid-600;
}
</style>