export function login(token: string) {
  const cookie = useCookie("token");
  cookie.value = token;
}

interface Session {
  loggedIn: boolean;
  token?: string;
}

export function useSession(): Session {
  const cookie = useCookie("token");
  return { token: cookie.value, loggedIn: !!cookie.value };
}
