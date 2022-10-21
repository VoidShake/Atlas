<template>
   <NuxtLink to="/me" class="w-12 h-12 justify-self-end">
      <img v-if="result?.me" alt="your user icon" :src="result.me.avatar!!" class="bg-gray-500/20 rounded-full" />
   </NuxtLink>
</template>

<script lang="ts" setup>
import { MeDocument } from '~/graphql/generated'

const { result } = useQuery(MeDocument)
</script>
