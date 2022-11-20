<template>
   <FormKit type="form" :actions="false" :value="modelValue" @input="$emit('update:modelValue', $event)">
      <span class="bg-solid-900 p-3 rounded"> Filter by </span>
      <slot />
   </FormKit>
</template>

<script lang="ts" setup>
defineProps<{
   modelValue?: unknown
}>()

defineEmits<{
   (e: 'update:modelValue', value: unknown): void
}>()
</script>

<styled lang="scss" scoped>
form {
   @apply grid grid-flow-col gap-2 w-max mx-auto items-center;
}
</styled>