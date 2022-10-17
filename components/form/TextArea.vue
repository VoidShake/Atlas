<template>
   <textarea class="p-2 rounded bg-stone-500 dark:bg-slate-800" :placeholder="placeholder" :value="modelValue"
      @input="$emit('update:modelValue', $event.target!.value)" />
</template>

<script lang="ts" setup>
defineProps<{
   placeholder: string,
   modelValue?: string
}>()

defineEmits<{
   (e: 'update:modelValue', value: string): void
}>()
</script>

<style scoped>
textarea {
   resize: none;
}
</style>