<template>
   <div>
      <div class="profile" v-if="account">
         <h2>{{ account.username }}</h2>
         <p>{{ account.email }}</p>
         <img v-if="account.avatar" :src="account.avatar" class="rounded-full" :alt="`avatar of ${account.username}`" />
      </div>
      <p v-else>Loading...</p>
   </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const { account, loggedIn } = useSession()

watch(loggedIn, value => {
   if (!value) router.push('/login')
})

definePageMeta({
   layout: 'confined',
})
</script>

<style lang="scss" scoped>
.profile {
   @apply grid gap-x-10 justify-center items-center;
   grid-template:
      'username avatar'
      'email avatar';

   img {
      grid-area: avatar;
   }
}
</style>
