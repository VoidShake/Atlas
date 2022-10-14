<template>
   <div id="menu" :style="{ translate: `${x}px ${y}px` }">
      <p class="p-1 text-center" v-if="options.title">{{ options.title }}</p>
      <FormButton class="rounded-none last:rounded-b-lg first:rounded-t-lg" v-for="button of options.buttons"
         @click="click(button)">
         {{ button.text}}
      </FormButton>
   </div>
</template>

<script lang="ts" setup>
import useMenu, { MenuButton, MenuOptions } from '~/store/useMenu';
const menu = useMenu()

const { options } = defineProps<{
   x: number
   y: number
   options: MenuOptions
}>()

async function click(button: MenuButton) {
   await button.click()
   menu.value = null
}
</script>

<style scoped>
#menu {
   @apply rounded-lg bg-stone-800 shadow-lg;
   position: absolute;
   z-index: 1000;
   top: 0;
   left: 0;
}

.dark-mode #menu {
   @apply bg-slate-700;
}
</style>