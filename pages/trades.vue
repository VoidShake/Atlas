<template>
   <section>
      <div class="mx-auto my-10 w-max bg-solid-900 p-4 rounded">
         <input type="file" @change="loadFile" />
      </div>
      <div v-if="parsed" class="professions">
         <div v-for="profession in parsed.professions" :key="profession.id">
            <h4>{{ profession.id }}</h4>
            <div v-for="({ trades }, level) in profession.levels" :key="level" class="grid justify-center my-3">
               <p>Level {{ level }}</p>
               <div v-for="trade in trades" :key="trade" class="flex items-center justify-center">
                  <ItemIcon v-for="(item, i) in parsed.trades[trade].wants" :key="i" v-bind="item" />
                  <ArrowRightIcon class="h-[1em]" />
                  <ItemIcon v-bind="parsed.trades[trade].sells" />
               </div>
            </div>
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
   @apply grid gap-1 justify-center text-center;
   grid-template-columns: repeat(auto-fill, 14em);
}
</style>