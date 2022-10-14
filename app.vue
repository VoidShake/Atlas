<template>
   <NuxtLayout>
      <NuxtPage />
      <Menu v-if="menu" :x="menu.x" :y="menu.y" :options="menu.options" />
   </NuxtLayout>
</template>

<script lang="ts" setup>
import useMenu from './store/useMenu';

useHead({
   titleTemplate: (s) => s ? `Atlas - ${s}` : 'Atlas'
})

const menu = useMenu()
</script>