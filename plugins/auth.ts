import type { ServerParseError } from "@apollo/client";
import { logout, useToken } from "~/shared/auth";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("apollo:auth", (req) => {
    console.log("Apollo Auth");
    const token = useToken();
    console.log("Apollo Token", token.value);
    if (token.value) req.token.value = token.value;
  });

  nuxtApp.hook("apollo:error", (error) => {
    if ((error.networkError as ServerParseError)?.statusCode === 401) {
      console.log("token expired, logging out");
      logout();
    }
  });
});
