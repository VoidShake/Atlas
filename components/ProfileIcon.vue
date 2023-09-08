<template>
   <NuxtLink to="/me" class="w-12 h-12 justify-self-end">
      <img v-if="account" alt="your avatar" :src="account.avatar!!" class="rounded-full" />
   </NuxtLink>
</template>

<script lang="ts" setup>
import { SelfFragment } from "~/graphql/generated";

defineProps<{
  account: SelfFragment
}>()
</script>