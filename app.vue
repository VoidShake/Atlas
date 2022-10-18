<template>
   <NuxtLayout>
      <NuxtPage />
      <Menu v-if="menu" :x="menu.x" :y="menu.y" :options="menu.options" />
      <div :class="{ visible: showCurtain }" id="backdrop" @click="closeDialog" />
   </NuxtLayout>
</template>

<script lang="ts" setup>

const showCurtain = useIsDialogOpen()

useHead({
   titleTemplate: (s) => s ? `Atlas - ${s}` : 'Atlas'
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
   @apply bg-stone-200 text-black;
}

.dark-mode body {
   @apply bg-slate-800 text-white;
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
</style>