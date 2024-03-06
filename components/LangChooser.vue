<template>
   <FormKit :value="locale" type="select" label="Change language" :options="options" @input="setLocale" />
</template>

<script lang="ts" setup>
import { type FormKitOptionsItem } from '@formkit/inputs';

const { locale, locales, setLocale } = useI18n()
const options = computed(() =>
   locales.value.map<FormKitOptionsItem>(it => {
      if (typeof it === 'string') return { value: it, label: it }
      else return { label: it.name ?? it.code, value: it.code }
   }),
)
</script>
