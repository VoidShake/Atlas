<template>
   <div id="buttons">
      <a :href="`/auth/discord?from=${redirectTo}`">
         <StyledButton id="discord"> Login via Discord</StyledButton>
      </a>
      <div v-if="result?.settings.development">
         <FormKit
            type="form"
            :classes="{ form: 'grid grid-flow-col gap-2 mt-1 items-stretch' }"
            submit-label="Login"
            :submit-attrs="{
               'suffix-icon': 'chevron-right',
            }"
            @submit="seededLogin"
         >
            <FormKit type="text" name="email" placeholder="E-Mail" help="Login as seeded user" />
         </FormKit>
      </div>
   </div>
</template>

<script lang="ts" setup>
import { ApiSettingsDocument, ImpersonateDocument, type ImpersonateMutationVariables } from '~/graphql/generated'

definePageMeta({
   layout: 'center',
})

const { query } = useRoute()
const router = useRouter()
const { result } = useQuery(ApiSettingsDocument)

const redirectTo = computed(() => query.from?.toString() || '/me')

onMounted(() => {
   if (query.token && typeof query.token === 'string') {
      login(query.token)
      router.replace(redirectTo.value)
   }
})

const impersonate = useMutation(ImpersonateDocument)

async function seededLogin(values: ImpersonateMutationVariables) {
   const reponse = await impersonate.mutate(values)
   const token = reponse?.data?.impersonate?.token
   if (token) {
      login(token)
      router.push(redirectTo.value)
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
