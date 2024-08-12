<template>
   <FormKit type="icon" name="icon_name" :value="initial?.name" placeholder="Search for icons..." />
   <FormKit type="hidden" name="icon_provider" :value="IconProvider.Generated" />
</template>

<script lang="ts" setup>
import { type IconFragment, IconProvider } from '~~/graphql/generated'

defineProps<{
   initial?: Partial<IconFragment>
}>()
</script>
