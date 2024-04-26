import { parseSession } from "~/authentication/Session";

export default defineNuxtRouteMiddleware((to, from) => {
  const session = parseSession();

  if (!session) {
    return navigateTo("/login");
  }
});
