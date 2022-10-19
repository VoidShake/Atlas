<template>
   <section>
      <h1 class="text-center">Lore</h1>
      <template v-if="result">
         <p class="py-4 text-center">
            <i> Found {{ result.tales.totalCount }} total tales </i>
         </p>
         <div id="tales">
            <NuxtLink v-for="tale in result.tales.nodes" :key="tale.id" :to="`/lore/${tale.id}`">
               <TalePreview :key="tale.id" :tale="tale" />
            </NuxtLink>
         </div>
         <ListControls
            :total="result.tales.totalCount"
            :page-size="limit"
            :current="result.tales.nodes.length + offset"
            @next="offset += limit"
            @previous="offset -= limit"
         />
      </template>
   </section>
</template>

<script lang="ts" setup>
import { GetTalesDocument } from '~/graphql/generated'

const limit = 30
const offset = useState('offset', () => 0)

const { result } = useQuery(GetTalesDocument, () => ({ offset: offset.value }))
</script>

<style scoped>
#tales {
   @apply gap-3 grid mx-auto;
   max-width: calc(120rem + theme(spacing.6));
   grid-template-columns: 1fr;
}

@media (min-width: 80rem) {
   #tales {
      grid-template-columns: repeat(auto-fit, 40rem);
   }
}
</style>
