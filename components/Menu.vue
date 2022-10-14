<template>
   <div id="menu" :style="{ translate: `${x}px ${y}px` }">
      <p class="p-1 text-center" v-if="options.title">{{ options.title }}</p>
      <button v-for="button of options.buttons" @click="click(button)">
         {{ button.text}}
      </button>
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

<style lang="scss" scoped>
#menu {
   @apply rounded-lg bg-stone-800 shadow-lg;
   position: absolute;
   z-index: 1000;
   top: 0;
   left: 0;

   button {
      @apply p-2 transition;

      &:first-child {
         @apply rounded-t-lg
      }

      &:last-child {
         @apply rounded-b-lg
      }
   }
}

.dark-mode #menu {
   @apply bg-slate-700;

   button {
      @apply bg-slate-700;

      &:hover {
         @apply bg-slate-500;
      }
   }
}
</style>