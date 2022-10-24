<template>
   <div id="buttons">
      <a href="/auth/discord">
         <StyledButton id="discord"> Login via Discord </StyledButton>
      </a>
      <div v-if="result?.settings.development">
         <label> Login as seeded user </label>
         <div class="grid grid-flow-col gap-2 mt-1">
            <StyledTextInput v-model="seededEmail" placeholder="E-Mail" />
            <StyledButton @click="seededLogin"> Login </StyledButton>
         </div>
      </div>
   </div>
</template>

<script lang="ts" setup>
import { ApiSettingsDocument, ImpersonateDocument } from '~/graphql/generated'

definePageMeta({
   layout: 'center',
})

const { query } = useActiveRoute()
const router = useRouter()
const { result } = useQuery(ApiSettingsDocument)

onMounted(() => {
   if (query.token && typeof query.token === 'string') {
      login(query.token as string)
      router.replace('/me')
   }
})

const seededEmail = ref()
const impersonate = useMutation(ImpersonateDocument)

async function seededLogin() {
   const reponse = await impersonate.mutate({ email: seededEmail.value })
   const token = reponse?.data?.impersonate?.token
   if (token) {
      login(token)
      router.push('/me')
   }
}
</script>

<style lang="scss" scoped>
#buttons {
   @apply grid gap-4;

   button {
      @apply w-full;

      &#discord {
         background: #7289da;
      }
   }
}
</style>
