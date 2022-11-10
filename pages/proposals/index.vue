<template>
   <section>
      <StyledTitle> View proposed drafts </StyledTitle>
      <NuxtLink v-for="link in links" :key="link.label" :to="`/proposals/${link.to}`">
         <StyledPanel class="my-3 text-3xl">
            <InlineIcon> <component :is="link.icon" /> </InlineIcon>
            <span class="ml-5"> {{ link.label }} </span>
         </StyledPanel>
      </NuxtLink>
   </section>
</template>

<script lang="ts" setup>
import { MapPinIcon, BookOpenIcon } from '@heroicons/vue/24/outline'

const links = [
   { to: 'locations', label: 'Locations', icon: MapPinIcon },
   { to: 'tales', label: 'Tales', icon: BookOpenIcon },
]

definePageMeta({
   layout: 'confined',
})
</script>
