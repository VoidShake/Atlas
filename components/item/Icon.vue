<template>
   <div class="relative">
      <img :src="`/icons/${icon}.png`" :alt="tooltip" :title="tooltip" @error="fallback" />
      <span v-if="showSize && count && count > 1"> {{ count }} </span>
   </div>
</template>

<script lang="ts" setup>
export interface Ingredient {
   count?: number
   item?: string
   tag?: string
}

interface Props extends Ingredient {
   showSize?: boolean
}

const props = defineProps<Props>()

const tooltip = computed(() => props.item ?? `#${props.tag}`)

function itemIcon({ item }: Ingredient) {
   if (!item) return 'missing'
   if (!item.includes(':')) return `minecraft/${item}`
   const [mod, id] = item?.split(':')
   return `${mod}/${id}`
}

const icon = ref(itemIcon(props))

watch(props, it => {
   icon.value = itemIcon(it)
})

function fallback() {
   icon.value = itemIcon({ item: 'minecraft:bedrock' })
}
</script>

<style scoped>
img {
   height: 3em;
   color: transparent;
}

span {
   @apply text-e-sm text-left;
   width: 1.2em;
   position: absolute;
   bottom: 0;
   right: 0;
}
</style>
