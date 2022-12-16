<template>
   <section>
      <div class="mx-auto my-10 w-max bg-solid-900 p-4 rounded">
         <input type="file" @change="loadFile" />
      </div>
      <div v-if="parsed" class="professions">
         <div v-for="profession in parsed.professions" :key="profession.id" class="rounded border-solid-700 border-2">
            <h4 class="py-3">{{ profession.id }}</h4>
            <template v-for="({ trades }, level) in profession.levels" :key="level">
               <div v-if="trades.length" class="grid justify-center py-4 even:bg-solid-700">
                  <p class="mb-2">
                     <strong> Level {{ level }} </strong>
                  </p>
                  <div v-for="trade in trades" :key="trade" class="flex items-center justify-end">
                     <ItemIcon v-for="(item, i) in parsed.trades[trade].wants" :key="i" v-bind="item" show-size />
                     <ArrowRightIcon class="h-[1em] mx-2" />
                     <ItemIcon v-bind="parsed.trades[trade].sells" show-size />
                  </div>
               </div>
            </template>
         </div>
      </div>
   </section>
</template>

<script lang="ts" setup>
import ArrowRightIcon from '@heroicons/vue/24/solid/ArrowRightIcon'
import type { Ingredient } from '~~/components/item/Icon.vue'

interface TradeLevel {
   trades: string[]
}

interface Profession {
   id: string
   levels: Record<number, TradeLevel>
}

interface Trade {
   sells: Ingredient
   wants: Ingredient[]
}

interface TradeIntrospection {
   professions: Array<Profession>
   trades: Record<string, Trade>
}

const parsed = useState<TradeIntrospection | null>(() => null)

async function loadFile(event: Event) {
   const input = event.target as HTMLInputElement
   const file = input.files?.item(0)
   if (!file) return

   const content = await file.text()
   parsed.value = JSON.parse(content)
}
</script>

<style scoped>
.professions {
   @apply grid gap-4 justify-center text-center;
   grid-template-columns: repeat(auto-fill, 14em);
}
</style>