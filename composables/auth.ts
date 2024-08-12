import { MeDocument, Permission, type SelfFragment } from '~/graphql/generated'

function refresh() {
   const apollo = useApolloClient()
   apollo.client.refetchQueries({ include: 'all' })
}

export function login(token: string) {
   const cookie = useToken()
   cookie.value = token

   refresh()
}

export function logout() {
   const cookie = useToken()
   cookie.value = null

   if (import.meta.client) {
      window.location.reload()
   }
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
