<template>
   <FormKit v-model="locale" type="select" label="Change language" :options="options" />
</template>

<script lang="ts" setup>
import { FormKitOptionsItem } from '@formkit/inputs'

const { locale, locales } = useI18n()
const options = computed(() =>
   locales.value.map<FormKitOptionsItem>(it => {
      if (typeof it === 'string') return { value: it, label: it }
      else return { label: it.name ?? it.code, value: it.code }
   }),
)
</script>