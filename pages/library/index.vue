<template>
   <section>
      <h1 class="text-center">Browse the Libary</h1>
      <template v-if="result">
         <p class="py-4 text-center">
            <i> Found {{ result.connection.totalCount }} total tales </i>
         </p>
         <div id="tales">
            <NuxtLink v-for="tale in result.connection.nodes" :key="tale.id" :to="`/library/${tale.id}`">
               <TalePreview :key="tale.id" :tale="tale" />
            </NuxtLink>
         </div>
         <ListControls
            :connection="result.connection"
            :page-size="result.connection.nodes.length"
            @next="next"
            @previous="previous"
         />
      </template>
   </section>
</template>

<script lang="ts" setup>
import { GetTalesDocument } from '~/graphql/generated'

const limit = ref(10)

const { result, next, previous } = usePagination(GetTalesDocument, limit)
</script>

<style scoped>
#tales {
   @apply gap-3 grid mx-auto;
   grid-template-columns: 1fr;
}

@media (min-width: 80rem) {
   #tales {
      max-width: calc(80rem + theme(spacing.3));
      grid-template-columns: repeat(auto-fit, 40rem);
   }
}

@media (min-width: 120rem) {
   #tales {
      max-width: calc(120rem + theme(spacing.6));
   }
}
</style>
