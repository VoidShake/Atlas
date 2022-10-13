<template>
   <div>
      <template v-if="result?.me">
         <h2>{{ result.me.username }}</h2>
         <h2>{{ result.me.email }}</h2>
      </template>
      <p v-else>Loading...</p>
   </div>
</template>

<script lang="ts" setup>
import { MeDocument } from '~/graphql/generated';

const router = useRouter()
const { result } = useQuery(MeDocument)

watch(result, ({ me }) => {
   if (!me) router.push("/login")
})

</script>