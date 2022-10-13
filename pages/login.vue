<template>
   <button @click="startLogin">Login</button>
</template>

<script lang="ts" setup>
import { login } from '~/shared/auth';

const { query } = useActiveRoute()
const router = useRouter()

onMounted(() => {
   if (query.token && typeof query.token === 'string') {
      login(query.token as string)
      router.replace('/me')
   }
})

function startLogin() {
   router.push('/auth/discord')
}

</script>