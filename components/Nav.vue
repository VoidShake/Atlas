<template>
   <nav class="grid p-3">
      <ProfileIcon v-if="loggedIn" />
   </nav>
</template>

<script lang="ts" setup>
import { useSession } from '~/shared/auth';

const { loggedIn } = useSession()
</script>