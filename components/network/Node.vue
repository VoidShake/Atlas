<template>
   <g v-tooltip="$t(`network.node_type.${node.type.toLowerCase()}`)">
      <circle v-if="isCircle" :r="config.radius * scale" :fill="color" />
      <rect
         v-else
         :height="config.height * scale"
         :width="config.width * scale"
         :x="config.height * scale * -0.5"
         :y="config.width * scale * -0.5"
         :fill="color"
      />
      <component :is="icon" v-if="icon" v-svg-size="{ ...config, scale: scale * 0.6 }" />
      <text :x="0" y="3em" :font-size="9 * scale" text-anchor="middle" fill="#FFF">
         {{ node.name }}
      </text>
   </g>
</template>

<script lang="ts" setup>
import { BookOpenIcon, FlagIcon, MapPinIcon, UserGroupIcon, UserIcon } from '@heroicons/vue/24/solid'
import type { ShapeType } from 'v-network-graph'
import type { Node } from '~/composables/useNetwork'

const colors: Record<string, string> = {
   Tale: 'solid-400',
   Place: 'solid-500',
   Area: 'solid-600',
   Species: 'solid-500',
   Character: 'solid-600',
}

const icons: Record<string, typeof MapPinIcon | undefined> = {
   Tale: BookOpenIcon,
   Place: MapPinIcon,
   Area: FlagIcon,
   Species: UserGroupIcon,
   Character: UserIcon,
}

const props = defineProps<{
   node: Omit<Node, 'id'>
   scale: number
   config: {
      radius: number
      type: ShapeType
      width: number
      height: number
      color: string
   }
}>()

const isCircle = computed(() => props.node.type !== 'Tale')

const color = computed(() => `var(--${colors[props.node.type]})`)
const icon = computed(() => icons[props.node.type])
</script>
