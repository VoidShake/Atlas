<template>
  <MapView>
    <template v-if="result">
      <h1>{{ result.location.name }}</h1>
      <div v-for="tale of result.location.tales">
        <h3>{{ tale.title }}</h3>
        <MarkdownPreview :value="tale.text" />
      </div>
    </template>
    <p v-else>Loading...</p>
  </MapView>
</template>

<script lang="ts" setup>
import { GetLocationDocument } from '~/graphql/generated';

const { params } = useActiveRoute()

const { result } = useQuery(GetLocationDocument, { slug: params.slug })
</script>