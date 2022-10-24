<template>
   <div id="preview" v-html="rendered" />
</template>

<script lang="ts" setup>
import { marked } from 'marked'
import sanitize from 'sanitize-html'

const props = defineProps<{
   value: string
}>()

const rendered = computed(() => sanitize(marked(props.value)))
</script>

<style lang="scss" scoped>
#preview {
   @apply p-2 text-start;
}
</style>
