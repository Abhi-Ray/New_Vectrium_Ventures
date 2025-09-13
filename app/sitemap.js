export default function sitemap() {
  // FIXED: Correct domain for your site
  const baseUrl = "https://vectriumventures.in";
  
  const routes = [
    "", // Homepage - CRITICAL for OAuth
    "/about",
    "/ai-agents", 
    "/ai-tools",
    "/automation",
    "/career",
    "/contact",
    "/privacy", // CRITICAL for OAuth verification
    "/refund",
    "/shipping", 
    "/terms", // CRITICAL for OAuth verification
    "/login",
    "/reset-password",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    // Add changefreq and priority for better crawling
    changefreq: route === "" ? "daily" : route === "/privacy" || route === "/terms" ? "monthly" : "weekly",
    priority: route === "" ? 1.0 : route === "/privacy" || route === "/terms" ? 0.9 : 0.8,
  }));
  
  return routes;
}