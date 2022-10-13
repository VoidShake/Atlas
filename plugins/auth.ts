import { useSession } from "~~/shared/auth";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("apollo:auth", ({ token }) => {
    const session = useSession();
    token.value = session.token;
  });
});
