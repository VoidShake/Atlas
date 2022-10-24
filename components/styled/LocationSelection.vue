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
.dark-mode .multiselect {
   @apply transition;

   --ms-bg: theme(colors.slate.900);

   --ms-ring-color: theme(colors.purple.500);
   --ms-ring-width: theme(ringWidth.2);

   --ms-border-color: theme(colors.slate.600);
   --ms-dropdown-border-color: var(--ms-border-color);

   border-color: var(--ms-border-color);

   --ms-dropdown-bg: theme(colors.slate.800);

   --ms-option-bg-pointed: theme(colors.slate.700);
   --ms-option-color-pointed: theme(colors.white);

   --ms-tag-bg: theme(colors.purple.600);
}

.dark-mode .search {
   background: red;
}
</style>
