<template>
   <client-only>
      <FormKit v-model="$colorMode.preference" type="select" label="Change Theme" :options="options" />
   </client-only>
</template>

<script lang="ts" setup>
import { type FormKitOptionsItem } from '@formkit/inputs'

const options: FormKitOptionsItem[] = [
   { value: 'system', label: 'System' },
   { value: 'light', label: 'Light' },
   { value: 'dark', label: 'Dark' },
   { value: 'sepia', label: 'Sepia' },
]
</script>
