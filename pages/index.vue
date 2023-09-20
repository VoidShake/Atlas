<template>
   <section class="layout">
      <img src="~/assets/emblem/icon.svg" alt="The Atlas" />
      <div>
         <StyledTitle> Atlas </StyledTitle>
         <NuxtLink v-for="link in links" :key="link.label" :to="link.to">
            <StyledPanel class="my-3 text-3xl">
               <InlineIcon>
                  <component :is="link.icon" />
               </InlineIcon>
               <span class="ml-5"> {{ link.label }} </span>
            </StyledPanel>
         </NuxtLink>
      </div>
   </section>
</template>

<script lang="ts" setup>
import { BookOpenIcon, MapIcon } from '@heroicons/vue/24/outline'

const links = [
   { to: '/map', label: 'Map', icon: MapIcon },
   { to: '/library', label: 'Library', icon: BookOpenIcon },
]

definePageMeta({
   layout: 'center',
})
</script>

<style scoped>
.layout {
   @apply grid justify-center gap-20;
   grid-template-columns: 1fr 1fr;
}
</style>
