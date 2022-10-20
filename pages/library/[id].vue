<template>
   <div>
      <template v-if="result">
         <h1>{{ result.tale.title }}</h1>
         <MarkdownPreview :value="result.tale.text" />
      </template>
   </div>
</template>

<script lang="ts" setup>
import { GetTaleDocument } from '~/graphql/generated'

const route = useActiveRoute()

const { result } = useQuery(GetTaleDocument, () => ({
   id: Number.parseInt(route.params.id as string),
}))

definePageMeta({
   layout: 'confined',
})
</script>
