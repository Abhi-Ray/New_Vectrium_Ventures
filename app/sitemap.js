export default function sitemap() {
  const baseUrl = "https://www.vectriumventures.com";

  const routes = [
    "",
    "/about",
    "/ai-agents",
    "/ai-tools",
    "/automation",
    "/career",
    "/contact",
    "/privacy",
    "/refund",
    "/shipping",
    "/terms",
    "/login",
    "/reset-password",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}
