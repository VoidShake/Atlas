<template>
   <div>
      <h1>{{ tale.title }} <slot name="title" /></h1>

      <ActionLink :to="`${route.path}/edit`">
         <PencilIcon />
      </ActionLink>

      <p class="my-5">
         <Pill v-for="location of tale.locations" :key="`${location.__typename}-${location.id}`">
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

const route = useRoute()

defineProps<{
   tale: TaleFragment
}>()
</script>
