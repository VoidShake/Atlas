<template>
  <MapView>
    <template v-if="result">
      <H1>{{ result.poi.name }}</H1>
      <div v-for="tale of result.poi.tales">
        <H3>{{ tale.title }}</H3>
        <p>{{ tale.text }}</p>
      </div>
    </template>
    <p v-else>Loading...</p>
  </MapView>
</template>

<script lang="ts" setup>
import { GetPoiDocument } from '~/graphql/generated';

const { params } = useActiveRoute()

const { result } = useQuery(GetPoiDocument, { slug: params.slug })
</script>