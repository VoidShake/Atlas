<template>
   <div>
      <multi-select
         :modelValue="modelValue"
         placeholder="Linked Locations"
         @update:modelValue="$emit('update:modelValue', $event)"
         mode="tags"
         searchable
         :close-on-select="false"
         :loading="!result"
         :options="options"
         :classes="{ tagsSearch: 'multiselect-tags-search bg-transparent text-white' }"
      />
   </div>
</template>

<script lang="ts" setup>
import MultiSelect from '@vueform/multiselect'
import { GetLocationsDocument } from '~/graphql/generated'

const { result } = useQuery(GetLocationsDocument)

const options = computed(() =>
   result.value?.locations.nodes.map(it => ({
      value: it.id,
      label: it.name,
   })),
)

defineProps<{
   modelValue: number[]
}>()

defineEmits<{
   (e: 'update:modelValue', value: number[]): void
}>()
</script>

<style scoped>
.multiselect {
   @apply transition;

   --ms-bg: theme(colors.solid.900);

   --ms-ring-color: theme(colors.accent.500);
   --ms-ring-width: theme(ringWidth.2);

   --ms-border-color: theme(colors.solid.600);
   --ms-dropdown-border-color: var(--ms-border-color);

   border-color: var(--ms-border-color);

   --ms-dropdown-bg: theme(colors.solid.800);

   --ms-option-bg-pointed: theme(colors.solid.700);

   --ms-tag-bg: theme(colors.accent.600);
}

.dark-mode .multiselect {
   --ms-option-color-pointed: theme(colors.white);
}
</style>
