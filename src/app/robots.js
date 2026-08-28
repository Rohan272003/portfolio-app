export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/"],
    },
    sitemap: "https://rohan-codes-portfolio.vercel.app/sitemap.xml",
    host: "https://rohan-codes-portfolio.vercel.app",
  };
}
