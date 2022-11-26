<template>
   <div>
      <h1>
         {{ tale.title }}
         <slot name="title" />
      </h1>

      <ActionLink :to="`${route.path}/edit`">
         <PencilIcon />
      </ActionLink>

      <p class="my-5">
         <Pill v-for="location of locations" :key="`${location.__typename}-${location.id}`">
            <span> {{ location.name }} </span>
            <template #icon>
               <FlagIcon v-if="location.__typename?.startsWith('Area')" />
               <MapPinIcon v-else />
            </template>
         </Pill>
      </p>
      <slot />
      <MarkdownPreview :value="tale.text" />
   </div>
</template>

<script lang="ts" setup>
import { MapPinIcon, PencilIcon, FlagIcon } from '@heroicons/vue/24/solid'
import { MapLocationFragment, TaleFragment } from '~~/graphql/generated'

const route = useRoute()

const props = defineProps<{
   tale: TaleFragment
}>()

const locations = computed<MapLocationFragment[]>(() => [...props.tale?.areas.nodes, ...props.tale?.places.nodes])
</script>
