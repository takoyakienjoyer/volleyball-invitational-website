export default defineEventHandler(async (event: any): Promise<void> => {
  const cookies = parseCookies(event);
  if (!cookies || typeof cookies["token"] !== "string") {
    return;
  }

  try {
    deleteCookie(event, "token");
    deleteCookie(event, "session");
  } catch (error: any) {
    setResponseStatus(event, 500);
    return;
  }
});
