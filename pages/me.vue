<template>
   <div>
      <template v-if="account">
         <h2>{{ account.username }}</h2>
         <h2>{{ account.email }}</h2>
      </template>
      <p v-else>Loading...</p>
   </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const { account, loggedIn } = useSession()

watch(loggedIn, value => {
   if (!value) router.push("/login")
})

</script>