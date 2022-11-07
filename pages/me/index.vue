<template>
   <section>
      <StyledTitle> Your Profile </StyledTitle>
      <div class="profile" v-if="account">
         <h2>{{ account.username }}</h2>
         <p>{{ account.email }}</p>
         <img v-if="account.avatar" :src="account.avatar" class="rounded-full" :alt="`avatar of ${account.username}`" />
         <StyledButton @click="logout"> Logout </StyledButton>
      </div>
      <p v-else-if="loggedIn">Loading...</p>
      <NuxtLink class="mx-auto" v-else to="/login">
         <StyledButton> Login </StyledButton>
      </NuxtLink>
   </section>
</template>

<script lang="ts" setup>
const { account, loggedIn } = useSession()

definePageMeta({
   layout: 'profile',
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
