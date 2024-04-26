type Session = {
  id: string;
  email: string;
  roles: string[];
};

function parseSession(): Session | null {
  const session: any = useCookie("session", { readonly: true }).value;

  if (!session) {
    return null;
  }

  return session;
}

function getSessionToken(): String | null {
  const token: any = useCookie("token", { readonly: true }).value;

  if (!token) {
    return null;
  }

  return token;
}

function sessionHasRole(role: string): boolean {
  const session = parseSession();

  if (!session) {
    return false;
  }

  return session.roles.includes(role) || session.roles.includes("admin");
}

export { getSessionToken, parseSession, sessionHasRole };
