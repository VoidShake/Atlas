<template>
   <FormKit
      :id="filterId"
      :classes="{ form: 'grid grid-flow-col gap-2 w-max mx-auto items-end' }"
      type="form"
      :actions="false"
      :value="rawValue"
      @input="update"
   >
      <span class="bg-solid-900 p-3 rounded mb-2 border-2 border-transparent"> Filter by </span>
      <slot />
      <FormKit type="button" suffix-icon="trash" @click="reset(filterId)"> Reset </FormKit>
   </FormKit>
</template>

<script lang="ts" setup>
import { reset } from '@formkit/core'
import type { TimestampFilter, RawTimestampFilter } from '~~/composables/useFilter'

const props = defineProps<{
   id: string
   modelValue?: TimestampFilter
}>()

const emit = defineEmits<{
   (e: 'update:modelValue', value: TimestampFilter): void
}>()

const filterId = computed(() => `${props.id}-filter`)

const rawValue = computed(() => props.modelValue && rawFilter(props.modelValue))

function update(raw: RawTimestampFilter<TimestampFilter>) {
   const transformed = transformFilter(raw)
   emit('update:modelValue', transformed)
}
</script>