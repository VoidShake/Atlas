<template>
   <nav class="grid p-3">
      <ProfileIcon v-if="loggedIn" />
   </nav>
</template>

<script lang="ts" setup>
const { loggedIn } = useSession()
</script>