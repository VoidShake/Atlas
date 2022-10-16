import { Ref } from "nuxt/dist/app/compat/capi";
import { MeDocument, Permission, SelfFragment } from "~/graphql/generated";

export function login(token: string) {
  const cookie = useToken();
  cookie.value = token;
}

export function logout() {
  const cookie = useToken();
  cookie.value = null;
}

interface Session {
  loggedIn: Ref<boolean>;
  token: Ref<string | null>;
  account: Ref<SelfFragment | null>;
  hasPermission: (permission: Permission) => boolean;
}

export const useToken = (): Ref<string | null> => useCookie("token");

export function useSession(): Session {
  const { result } = useQuery(MeDocument);
  //const result = { value: { me: null as SelfFragment | null } };

  const token = useToken();
  const account = computed(() => result.value?.me ?? null);
  const loggedIn = computed(() => !!token.value);

  return {
    loggedIn,
    token,
    account,
    hasPermission: (it) => account.value?.permissions.includes(it) ?? false,
  };
}
