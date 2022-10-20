<template>
   <section>
      <template v-if="result">
         <h1>{{ result.location.name }}</h1>
         <div v-for="tale of result.location.tales.nodes" :key="tale.id">
            <h3>{{ tale.title }}</h3>
            <MarkdownPreview :value="tale.text" />
         </div>
      </template>
      <p v-else>Loading...</p>
   </section>
</template>

<script lang="ts" setup>
import { GetLocationDocument } from '~/graphql/generated'

definePageMeta({
   layout: 'map',
})

const route = useActiveRoute()

const { result } = useQuery(GetLocationDocument, {
   slug: route.params.slug as string,
})
</script>
