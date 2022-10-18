<template>
   <a href="/auth/discord">
      <FormButton id="discord">Login via Discord</FormButton>
   </a>
</template>

<script lang="ts" setup>
definePageMeta({
   layout: 'center'
})

const { query } = useActiveRoute()
const router = useRouter()

onMounted(() => {
   if (query.token && typeof query.token === 'string') {
      login(query.token as string)
      router.replace('/me')
   }
})
</script>

<style lang="scss" scoped>
#discord {
   background: #7289da;
}
</style>