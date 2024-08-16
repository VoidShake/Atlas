<template>
   <NuxtLayout>
      <NuxtPage />
      <Menu v-if="menu" :x="menu.x" :y="menu.y" :options="menu.options" />
      <div id="backdrop" :class="{ visible: showCurtain }" @click="closeDialog" />
   </NuxtLayout>
</template>

<script lang="ts" setup>
const showCurtain = useIsDialogOpen()

useHead({
   titleTemplate: s => (s ? `Atlas - ${s}` : 'Atlas'),
})

const menu = useMenu()
</script>

<style scoped>
#backdrop {
   @apply transition-colors;
   pointer-events: none;
   position: fixed;
   z-index: 1001;
   top: 0;
   left: 0;
   height: 100vh;
   width: 100vw;
}

#backdrop.visible {
   pointer-events: unset;
   background: #0003;
}
</style>

<style>
body {
   @apply bg-solid-800 transition-colors;

   @apply text-black;
   @apply accent-accent-500;
   color-scheme: light;

   --solid-50: theme(colors.solid.light-50);
   @for $i from 100 to 900 by 100 {
      --solid-$(i): theme(colors.solid.light-$(i));
      --accent-$(i): theme(colors.accent.light-$(i));
   }
}

.dark-mode body {
   @apply text-white;
   color-scheme: dark;

   --solid-50: theme(colors.solid.dark-50);
   @for $i from 100 to 900 by 100 {
      --solid-$(i): theme(colors.solid.dark-$(i));
      --accent-$(i): theme(colors.accent.dark-$(i));
   }
}

.sepia-mode body {
   @apply text-white;
   color-scheme: dark;

   --solid-50: theme(colors.solid.sepia-50);
   @for $i from 100 to 900 by 100 {
      --solid-$(i): theme(colors.solid.sepia-$(i));
      --accent-$(i): theme(colors.accent.sepia-$(i));
   }
}

h1 {
   @apply text-e-5xl pb-5 font-bold;
}

h2 {
   @apply text-e-4xl pb-4 font-bold;
}

h3 {
   @apply text-e-3xl pb-3;
}

h4 {
   @apply text-e-2xl pb-2;
}

h5 {
   @apply text-e-xl pb-1;
}

h6 {
   @apply text-e-base;
}

::-webkit-scrollbar {
   width: 10px;
}

::-webkit-scrollbar-track {
   background: var(--solid-600);
   border-radius: 9999px;
}

::-webkit-scrollbar-thumb {
   background: var(--solid-400);
   border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
   background: var(--solid-300);
}
</style>
