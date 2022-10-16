<template>
   <NuxtLayout>
      <NuxtPage />
      <Menu v-if="menu" :x="menu.x" :y="menu.y" :options="menu.options" />
      <div :class="{ visible: showCurtain }" id="backdrop" @click="closeDialog" />
   </NuxtLayout>
</template>

<script lang="ts" setup>
import { closeDialog, useIsDialogOpen } from '~/store/useDialog';
import useMenu from '~/store/useMenu';

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