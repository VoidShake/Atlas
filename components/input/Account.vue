<template>
   <FormKit type="multi" :loading="!result" :options="options" />
</template>

<script lang="ts" setup>
import type { FormKitOptionsItem } from '@formkit/inputs'
import { GetAccountsDocument } from '~~/graphql/generated'

const { result } = useQuery(GetAccountsDocument)

const options = computed(
   () =>
      result.value?.accounts.nodes.map<FormKitOptionsItem>(it => ({ value: it.id, label: it.username ?? it.email })) ??
      [],
)
</script>
