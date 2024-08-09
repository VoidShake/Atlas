<template>
   <div class="icon-select">
      <img v-if="props.context._value" class="preview" :src="`${ICON_HOST}/icons/${props.context._value}.png`" />
      <span v-else class="text-4xl text-center m-3">?</span>
      <FormKit v-model="query" ignore :delay="250" :placeholder="context.placeholder" />
      <div class="bg-solid-900 p-2 rounded w-full col-span-2">
         <ul>
            <li v-for="icon in items" :key="icon.url" :class="{ selected: props.context._value === icon.name }"
               :title="icon.name">
               <img :src="`${ICON_HOST}/${icon.url}`" :alt="icon.name" @click="select(icon)" />
            </li>
         </ul>
         <p class="p-4" v-if="items.length === 0">
            No matches :/
         </p>
      </div>
   </div>
</template>

<script lang="ts" setup>
import type { FormKitFrameworkContext } from '@formkit/core';

type IconResult = {
   url: string
   id: string
   namespace: string
   name: string
}

type IconPage = {
   count: number
   total: number
   items: IconResult[]
}

const ICON_HOST = 'https://icons.macarena.ceo'

const props = defineProps<{
   context: Pick<FormKitFrameworkContext<string>, 'node' | '_value'> & {
      placeholder?: string
   }
}>()

const query = ref('')

function select({ name }: IconResult) {
   props.context.node.input(name)
}

const { data: icons } = await useFetch<IconPage>(`${ICON_HOST}/browse.json`, {
   query: {
      query,
      limit: 45
   },
   transform: page => {
      return { ...page, items: page.items.map(it => ({ ...it, name: `${it.namespace}/${it.id}` })) }
   },
})

const items = computed(() => icons.value?.items ?? [])

</script>

<style scoped>
.icon-select {
   @apply grid w-full gap-2 gap-x-3 my-3;

   --icon-size: 75px;

   grid-template-rows: var(--icon-size) 1fr;
   grid-template-columns: var(--icon-size) 1fr;

   .preview {
      height: 100%;
      aspect-ratio: 1 / 1;
   }

   ul {
      @apply grid justify-center gap-1;

      grid-template-columns: repeat(auto-fit, var(--icon-size));

      img {
         height: var(--icon-size);
         width: var(--icon-size);
      }

      .selected {
         @apply bg-solid-600 rounded-2xl;
      }
   }
}
</style>
