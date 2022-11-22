<template>
   <FormKit type="multi" placeholder="Select Locations" :loading="!result" :options="options" />
</template>

<script lang="ts" setup>
import { GetLocationsDocument } from '~/graphql/generated'

const { result } = useQuery(GetLocationsDocument)

const options = computed(
   () =>
      result.value?.connection.nodes.map(it => ({
         value: it.id,
         label: it.name,
      })) ?? [],
)
</script>