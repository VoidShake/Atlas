<template>
   <div>
      <h1>Lore</h1>
      <p v-if="result">Found {{ result.tales.totalCount }} total tales</p>
      <ul v-if="result">
         <NuxtLink v-for="tale in result.tales.nodes" :key="tale.id" :to="`/lore/${tale.id}`">
            <li>
               {{ tale.title }}
            </li>
         </NuxtLink>
      </ul>
   </div>
</template>

<script lang="ts" setup>
import { GetTalesDocument } from '~/graphql/generated';

const { result } = useQuery(GetTalesDocument)

</script>