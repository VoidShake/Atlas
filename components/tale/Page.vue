<template>
   <div>
      <h1>{{ tale.title }} <slot name="title" /></h1>

      <ActionButton>
         <PencilIcon />
      </ActionButton>

      <p class="my-5">
         <Pill v-for="location of tale.locations.nodes" :key="location.id">
            <span> {{ location.name }} </span>
            <template #icon>
               <MapPinIcon />
            </template>
         </Pill>
      </p>
      <slot />
      <MarkdownPreview :value="tale.text" />
   </div>
</template>

<script lang="ts" setup>
import { MapPinIcon, PencilIcon } from '@heroicons/vue/24/solid'
import { TaleFragment } from '~~/graphql/generated'

defineProps<{
   tale: TaleFragment
}>()
</script>
