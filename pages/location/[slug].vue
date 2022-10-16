<template>
  <MapView>
    <template v-if="result">
      <H1>{{ result.location.name }}</H1>
      <div v-for="tale of result.location.tales">
        <H3>{{ tale.title }}</H3>
        <p>{{ tale.text }}</p>
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