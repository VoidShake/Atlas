<template>
   <div id="preview" v-html="rendered" />
</template>

<script lang="ts" setup>
import { marked } from 'marked';

const props = defineProps<{
   value: string
}>()

const rendered = computed(() => marked(props.value, { sanitize: true }))
</script>

<style lang="scss" scoped>
#preview {
   @apply p-2 text-start;
}
</style>