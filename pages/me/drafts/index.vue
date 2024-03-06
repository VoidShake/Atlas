<template>
   <section>
      <StyledTitle> Your Drafts </StyledTitle>

      <div class="links">
         <NuxtLink to="/me/drafts/places">
            <StyledButton>
               <InlineIcon>
                  <MapPinIcon />
               </InlineIcon>
               Places
            </StyledButton>
         </NuxtLink>
         <NuxtLink to="/me/drafts/tales">
            <StyledButton>
               <InlineIcon>
                  <BookOpenIcon />
               </InlineIcon>
               Tales
            </StyledButton>
         </NuxtLink>
      </div>
   </section>
</template>

<script lang="ts" setup>
import { BookOpenIcon, MapPinIcon } from '@heroicons/vue/24/solid';

definePageMeta({
   layout: 'profile',
})
</script>

<style lang="scss" scoped>
.links {
   @apply grid gap-2 justify-center;
   grid-template-columns: repeat(auto-fill, 20em);

   button {
      @apply p-6 text-e-2xl w-full;
   }
}
</style>
