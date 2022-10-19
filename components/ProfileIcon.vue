<template>
   <img
      class="bg-gray-500/20 h-14 w-14 rounded-full justify-self-end cursor-pointer"
      v-if="result?.me"
      :src="result.me.avatar"
      @click="click"
   />
</template>

<script lang="ts" setup>
import { MeDocument } from '~/graphql/generated'

const router = useRouter()
const { result } = useQuery(MeDocument)

function click() {
   router.push('/me')
}
</script>
