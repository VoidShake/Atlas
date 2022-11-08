<template>
   <input :value="modelValue" @input="$emit('update:modelValue', $event.target!.value)" />
</template>

<script lang="ts" setup>
defineProps<{
   modelValue?: string
}>()

defineEmits<{
   (e: 'update:modelValue', value: string): void
}>()
</script>

<style lang="scss" scoped>
input {
   @apply p-2 rounded outline-0 transition ring-0 border-2;
   @apply bg-solid-800 ring-accent-500 border-solid-700;

   &:focus-visible {
      @apply ring-2;
   }
}
</style>
