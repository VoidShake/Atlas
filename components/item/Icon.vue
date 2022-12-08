<template>
   <img :src="`/icons/${icon}.png`" :alt="tooltip" :title="tooltip" @error="fallback" />
</template>

<script lang="ts" setup>
export interface Ingredient {
   count?: number
   item?: string
   tag?: string
}

const props = defineProps<Ingredient>()

const tooltip = computed(() => props.item)

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
</style>