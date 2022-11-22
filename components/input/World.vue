<template>
   <FormKit label="World" type="select" :options="options" />
</template>

<script lang="ts" setup>
import type { FormKitOptionsItem } from '@formkit/inputs'
import { GetWorldsDocument } from '~~/graphql/generated'

const { result } = useQuery(GetWorldsDocument)

const options = computed(() => [
   { value: null, label: 'any' },
   ...(result.value?.worlds.map<FormKitOptionsItem>(it => ({ value: it.id, label: it.name })) ?? []),
])
</script>