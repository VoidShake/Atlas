<template>
   <input class="py-1 px-2 rounded bg-stone-500 dark:bg-slate-800" :autofocus="autofocus" :placeholder="placeholder"
      :value="modelValue" @input="$emit('update:modelValue', $event.target!.value)" />
</template>

<script lang="ts" setup>
defineProps<{
   placeholder: string,
   modelValue?: string
   autofocus?: boolean
}>()

defineEmits<{
   (e: 'update:modelValue', value: string): void
}>()
</script>