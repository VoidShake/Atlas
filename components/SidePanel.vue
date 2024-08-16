<template>
   <aside>
      <h1>
         <span>
            <slot name="title" />
         </span>
         <NuxtLink href="/map">
            <IconButton color="inherit text-3xl">
               <XMarkIcon />
            </IconButton>
         </NuxtLink>
      </h1>
      <section class="overflow-y-scroll pr-2">
         <slot>
            <i class="opacity-50">no content yet</i>
         </slot>
      </section>
   </aside>
</template>

<script lang="ts" setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'
</script>

<style scoped>
aside {
   @apply px-4 grid;
   grid-template-rows: auto 1fr;
   width: 40rem;
   height: calc(100vh - theme(spacing.36));

   h1 {
      @apply my-2 grid items-center;
      grid-template-columns: 1fr auto;
   }
}
</style>
