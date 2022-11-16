<template>
   <div>
      <h1>{{ location.name }} <slot name="title" /></h1>

      <StyledActionButton>
         <PencilIcon />
      </StyledActionButton>

      <div class="flex gap-2 items-center">
         <PosDisplay v-bind="location.pos" />
      </div>
      <slot />
   </div>
</template>

<script lang="ts" setup>
import { PencilIcon } from '@heroicons/vue/24/solid'
import { LocationFragment, LocationDraftFragment } from '~~/graphql/generated'

defineProps<{
   location: LocationFragment | LocationDraftFragment
}>()
</script>
