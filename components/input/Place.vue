<template>
   <FormKit type="multi" placeholder="Select Places" :loading="!result" :options="options" />
</template>

<script lang="ts" setup>
import { GetPlacesDocument } from '~/graphql/generated';

const { result } = useQuery(GetPlacesDocument)

const options = computed(
   () =>
      result.value?.connection.nodes.map(it => ({
         value: it.id,
         label: it.name,
      })) ?? [],
)
</script>
