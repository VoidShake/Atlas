import { Ref } from 'nuxt/dist/app/compat/capi'
import { MeDocument, Permission, SelfFragment } from '~/graphql/generated'

export function login(token: string) {
   const cookie = useToken()
   cookie.value = token
}

export function logout() {
   const cookie = useToken()
   cookie.value = null
}

interface Session {
   loggedIn: Ref<boolean>
   token: Ref<string | null>
   account: Ref<SelfFragment | null>
   hasPermission: (permission: Permission, ...alternatives: Permission[]) => boolean
}

export const useToken = (): Ref<string | null> => useCookie('token')

export function useSession(): Session {
   const token = useToken()
   const loggedIn = computed(() => !!token.value)
   const { result } = useQuery(MeDocument, undefined, () => ({ enabled: loggedIn.value }))
   const account = computed(() => result.value?.me ?? null)

   return {
      loggedIn,
      token,
      account,
      hasPermission: (...permissions) => permissions.some(it => account.value?.permissions.includes(it)),
   }
}
