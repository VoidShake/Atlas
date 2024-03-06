<template>
   <div>
      <multi-select
:placeholder="context.placeholder" :mode="context.mode ?? 'tags'" :model-value="context._value ?? null"
         searchable :close-on-select="false" :loading="context.loading" :options="context.options"
         :classes="{ tagsSearch: 'multiselect-tags-search bg-transparent text-white' }" @update:model-value="select"
/>
   </div>
</template>

<script lang="ts" setup>
import type { FormKitFrameworkContext } from '@formkit/core';
import type { FormKitOptionsItem } from '@formkit/inputs';
import MultiSelect from '@vueform/multiselect';

const props = defineProps<{
   context: Pick<FormKitFrameworkContext, 'node' | '_value'> & {
      mode?: 'single' | 'multiple' | 'tags'
      loading?: boolean
      options: FormKitOptionsItem[]
      placeholder?: string
   }
}>()

function select(value: unknown) {
   // const original = props.context.options.find(it => it.value === value)?.__original
   // console.log(value, original)
   props.context.node.input(value)
}
</script>

<style scoped>
.multiselect {
   @apply transition min-w-52 h-8;

   --ms-bg: theme(colors.solid.800);

   --ms-ring-width: 0;

   --ms-border-width: 0;
   --ms-dropdown-border-color: var(--ms-border-color);

   border-color: var(--ms-border-color);

   --ms-dropdown-bg: theme(colors.solid.800);

   --ms-option-bg-pointed: theme(colors.solid.700);
   --ms-option-bg-selected: theme(colors.accent.500);
   --ms-option-bg-selected-pointed: theme(colors.accent.400);

   --ms-tag-bg: theme(colors.accent.600);
   --ms-spinner-color: theme(colors.accent.400);
}

.dark-mode .multiselect {
   --ms-option-color-pointed: theme(colors.white);
}
</style>
