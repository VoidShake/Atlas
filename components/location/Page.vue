<template>
   <div>
      <h1>
         {{ location.name }}
         <slot name="title" />
      </h1>

      <ActionLink :to="`${$route.path}/edit`">
         <PencilIcon />
      </ActionLink>

      <div v-if="pos" class="flex gap-2 items-center">
         <PosDisplay v-bind="pos" />
      </div>
      <slot />
   </div>
</template>

<script lang="ts" setup>
import { PencilIcon } from '@heroicons/vue/24/solid';
import type { AreaFragment, PlaceDraftFragment, PlaceFragment } from '~~/graphql/generated';

const props = defineProps<{
   location: PlaceFragment | PlaceDraftFragment | AreaFragment
}>()

const pos = computed(() => {
   switch (props.location.__typename) {
      case 'Place':
      case 'PlaceDraft':
         return props.location.pos
      default:
         return null
   }
})
</script>
